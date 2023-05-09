import { useRef } from "react";
import EditableMathField from "./EditableMathField";
import KeyMapping from "../key_mapping";


const KeyTexMathField = (props) => {
    const mathFieldRef = useRef(null);

    return (
        <div>
            <EditableMathField
                latex={props.latex}
                onChange={(mathField) => {
                    props.onChange(mathField.latex());
                }}
                onMathFieldCreated={(mathField) => {
                    mathFieldRef.current = mathField;
                    if(props.onMathFieldCreated) props.onMathFieldCreated(mathField);
                }}
                onKeyDown={(e, mathField) => {
                    console.log(e);
                    KeyMapping.forEach((keyMap) => {
                        if (keyMap.code === e.code && ((!keyMap.ctrl) || ((keyMap.ctrl === true || keyMap.meta === true) && e.ctrlKey))) {
                            mathField.write(keyMap.write);
                            if (keyMap.leftKeyStroke)
                                for (let i = 0; i < keyMap.leftKeyStroke; i++) mathField.keystroke("Left");
                            e.preventDefault();
                        }
                    });
                }
                }
            />
        </div>
    );
};

export default KeyTexMathField;