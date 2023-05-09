import { useEffect, useRef, useState } from "react";
import EditableMathField from "./EditableMathField";
import KeyMapping from "../key_mapping";


const KeyTexMathField = (props) => {
    const mathFieldRef = useRef(null);
    const [keyboardMode, setKeyboardMode] = useState("m0");
    useEffect(() => {
        if(props.onKeyboardModeChange) props.onKeyboardModeChange(keyboardMode);
    }, [keyboardMode, props]);
    
    return (
        <div>
            <EditableMathField
                latex={props.latex}
                onChange={(mathField) => {
                    props.onChange(mathField.latex());
                }}
                onMathFieldCreated={(mathField) => {
                    mathFieldRef.current = mathField;
                    if (props.onMathFieldCreated) props.onMathFieldCreated(mathField);
                }}
                onKeyDown={(e, mathField) => {
                    console.log(e);
                    KeyMapping.forEach((keyMap) => {
                        if (keyMap.code === e.code && ((!keyMap.ctrl && !e.ctrlKey) || ((keyMap.ctrl === true || keyMap.meta === true) && e.ctrlKey))
                        && ((!keyMap.shift && !e.shiftKey) || (keyMap.shift === true && e.shiftKey))
                        && keyMap.mode.includes(keyboardMode)) {
                            mathField.write(keyMap.write);
                            if (keyMap.leftKeyStroke)
                                for (let i = 0; i < keyMap.leftKeyStroke; i++) mathField.keystroke("Left");
                            e.preventDefault();
                        }
                    });
                    if (e.code === "Escape") {
                        if (keyboardMode === "m0") {
                            setKeyboardMode("m1");
                        } else {
                            setKeyboardMode("m0");
                        }
                    }
                }
                }
            />
        </div>
    );
};

export default KeyTexMathField;