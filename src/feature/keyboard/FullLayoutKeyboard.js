import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../static/css/FullLayoutKeyboard.css";

export default class FullLayoutKeyboard extends Component {
  state = {
    layoutName: "default",
    input: ""
  };

  commonKeyboardOptions = {
    onChange: input => this.onChange(input),
    onKeyPress: button => this.onKeyPress(button),
    theme: "simple-keyboard hg-theme-default hg-layout-default",
    physicalKeyboardHighlight: true,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: true
  };

  keyboardOptions = {
    ...this.commonKeyboardOptions,
    /**
     * Layout by:
     * Sterling Butters (https://github.com/SterlingButters)
     */
    layout: {
      default: [
        "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "` Δ ⇐ ⇔ ⇒ ∫ ∑ ∪ ∩ ≠ ≈ ≡ ∴ {backspace}",
        "{tab} q w e r t y u i o p [ ] \\",
        "{capslock} a s d f g h j k l ; ' {enter}",
        "{shiftleft} z x c v b n m , . / {shiftright}",
        "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
      ],
      shift: [
        "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
        "{tab} Q W E R T Y U I O P { } |",
        '{capslock} A S D F G H J K L : " {enter}',
        "{shiftleft} Z X C V B N M < > ? {shiftright}",
        "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
      ]
    },
    display: {
      "{escape}": "esc ⎋",
      "{tab}": "tab ⇥",
      "{backspace}": "backspace ⌫",
      "{enter}": "enter ↵",
      "{capslock}": "caps lock ⇪",
      "{shiftleft}": "shift ⇧",
      "{shiftright}": "shift ⇧",
      "{controlleft}": "ctrl ⌃",
      "{controlright}": "ctrl ⌃",
      "{altleft}": "alt ⌥",
      "{altright}": "alt ⌥",
      "{metaleft}": "cmd ⌘",
      "{metaright}": "cmd ⌘",

      "{digit1}": "Δ",

    }
  };

  keyboardControlPadOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: [
        "{prtscr} {scrolllock} {pause}",
        "{insert} {home} {pageup}",
        "{delete} {end} {pagedown}"
      ]
    }
  };

  keyboardArrowsOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
    }
  };

  keyboardNumPadOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: [
        "{numlock} {numpaddivide} {numpadmultiply}",
        "{numpad7} {numpad8} {numpad9}",
        "{numpad4} {numpad5} {numpad6}",
        "{numpad1} {numpad2} {numpad3}",
        "{numpad0} {numpaddecimal}"
      ]
    },

    display: {
      "{numpad7}": "x<sup>2</sup>",
      "{numpad8}": "<sup>2</sup>√x",
      "{numpad9}": "log",
      "{numpad4}": "x<sup>&#9633;</sup>",
      "{numpad5}": "<sup>&#9633;</sup>√x",
      "{numpad6}": "ln",
      "{numpad1}": "x<sub>&#9633;</sub>",
      "{numpad2}": "&#9633;/&#9633;",
      "{numpad3}": "·",
    },
  };

  keyboardNumPadEndOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
    }
  };

  onChange = input => {
    this.setState({
      input: input
    });
    console.log("Input changed", input);
  };

  onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    ) {
      this.handleShift();
    }
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default"
    });
  };

  onChangeInput = event => {
    let input = event.target.value;
    this.setState(
      {
        input: input
      },
      () => {
        this.keyboard.setInput(input);
      }
    );
  };

  render() {
    return (
      <div>
        <div className={"keyboardContainer"}>
          <Keyboard
            baseClass={"simple-keyboard-main"}
            keyboardRef={r => (this.keyboard = r)}
            layoutName={this.state.layoutName}
            {...this.keyboardOptions}
          />

          <div className="controlArrows">
            <Keyboard
              baseClass={"simple-keyboard-control"}
              {...this.keyboardControlPadOptions}
            />
            <Keyboard
              baseClass={"simple-keyboard-arrows"}
              {...this.keyboardArrowsOptions}
            />
          </div>

          <div className="numPad">
            <Keyboard
              baseClass={"simple-keyboard-numpad"}
              {...this.keyboardNumPadOptions}
            />
            <Keyboard
              baseClass={"simple-keyboard-numpadEnd"}
              {...this.keyboardNumPadEndOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}

