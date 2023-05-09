import React, { useRef, useState } from "react";
import EditableMathField from "../../feature/math_editor/component/EditableMathField";
import "../../static/css/App.css";
import styled from "styled-components";
import AppLogo from '../../static/resource/logo.svg';
import CopyIcon from '../../static/resource/copy.svg';
import KeyTexMathField from "../../feature/math_editor/component/KeyTexMathField";
import DraggableDiv from "../../feature/math_editor/component/DraggableDiv";
import { elementToSVG } from 'dom-to-svg'
import 'react-simple-keyboard/build/css/index.css';
import FullLayoutKeyboard from "../../feature/keyboard/FullLayoutKeyboard";

const AppContaier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 560px;
  border: 1px solid #efefef;
  border-radius: 8px;
  box-shadow: 0 0 8px #efefef;
  background-color: #FFFFFFe0;
`;

const ToolbarContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding: 0 18px;

  .latex {
    color: #e83e8c;
    font-size: 14px;
  }
`;

const CopyButton = styled.img`
  height: 16px;
  box-sizing: content-box;
  padding: 4px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    background-color: #efefef;
  }

  &:active {
    opacity: 0.6;
    background-color: #efefef;
  }
`;



const App = () => {
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");
  const mathFieldRef = useRef(null);
  const [keyboardMode, setKeyboardMode] = useState("m0");

  const copyToClipboard = () => {
    const mathField = mathFieldRef.current;
    const latex = mathField.latex();
    const html = mathField.html();
    const image = elementToSVG(document.querySelector('.mq-editable-field'))
    console.log(image);
    // create a new element to hold the content to be copied
    const clipboardContainer = document.createElement('div');

    // add the LaTeX text to the container
    const latexElement = document.createElement('div');
    latexElement.textContent = latex;
    clipboardContainer.appendChild(latexElement);

    // add the HTML to the container
    const htmlElement = document.createElement('div');
    htmlElement.innerHTML = html;
    clipboardContainer.appendChild(htmlElement);

    // convert the SVG to a data URL
    const svgBlob = new Blob([image], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    const imageElement = new Image();
    imageElement.onload = () => {
      console.log(imageElement.width, imageElement.height);
      const canvas = document.createElement('canvas');
      canvas.width = imageElement.width;
      canvas.height = imageElement.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(imageElement, 0, 0);
      URL.revokeObjectURL(url);
      clipboardContainer.appendChild(canvas);

      canvas.toBlob(function (blob) {
        navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': new Blob([latex], { type: 'text/plain' }),
            'text/html': new Blob([html], { type: 'text/html' }),
            'image/png': blob,
          })
        ]);
      });
    };

    var xml = new XMLSerializer().serializeToString(image);
    var svg64 = btoa(unescape(encodeURIComponent(xml)));
    var b64Start = 'data:image/svg+xml;base64,';

    imageElement.src = b64Start + svg64;
  };

  return (
    <div className="App">
      <DraggableDiv>
        <FullLayoutKeyboard mode={keyboardMode} />
      </DraggableDiv>
      <DraggableDiv>
        <AppContaier>
          <ToolbarContainer>
            <img alt="logo" height="16px" src={AppLogo} />
            <div className="latex">{latex}</div>
            <CopyButton alt="copy" src={CopyIcon} onClick={() => copyToClipboard()} />
          </ToolbarContainer>
          <div style={{
            width: "100%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
            onClick={() => {
              if (mathFieldRef.current) {
                mathFieldRef.current.focus();
              }
            }}
          >
            <KeyTexMathField latex={latex} onChange={
              (latex) => {
                setLatex(latex);
              }
            }
              onMathFieldCreated={
                (mathField) => {
                  mathFieldRef.current = mathField;
                }
              }
              onKeyboardModeChange={(mode) => {
                setKeyboardMode(mode);
              }}
            />
          </div>
        </AppContaier >
      </DraggableDiv>

    </div >
  );
}

export default App;
