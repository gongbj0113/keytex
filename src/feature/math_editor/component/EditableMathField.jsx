import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import MathQuill from '../util/mathquill-loader'
import { addStyles } from "react-mathquill";

addStyles();

const EditableMathField = ({
    latex,
    onChange,
    config,
    mathquillDidMount,
    onMathFieldCreated,
    onKeyDown,
    ...otherProps
}) => {
    // MathQuill fire 2 edit events on startup.
    const ignoreEditEvents = useRef(2)
    const mathField = useRef(null)
    const wrapperElement = useRef(null);

    // This is required to prevent state closure over the onChange function
    const onChangeRef = useRef(onChange);
    const onKeyDownRef = useRef(onKeyDown);
    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange])
    useEffect(() => {
        onKeyDownRef.current = onKeyDown;
    }, [onKeyDown])


    // Setup MathQuill on the wrapperElement
    useEffect(() => {
        if (!wrapperElement.current) return

        let combinedConfig = {
            restrictMismatchedBrackets: true,
            handlers: {},
        }

        if (config) {
            combinedConfig = {
                ...combinedConfig,
                ...config,
            }
        }

        const configEditHandler = combinedConfig.handlers.edit
        combinedConfig.handlers.edit = (mathField) => {
            if (configEditHandler) configEditHandler()

            if (ignoreEditEvents.current > 0) {
                ignoreEditEvents.current -= 1
            } else {
                if (onChangeRef.current) onChangeRef.current(mathField)
            }
        }

        mathField.current = MathQuill.MathField(
            wrapperElement.current,
            combinedConfig
        )
        if (onMathFieldCreated)
            onMathFieldCreated(mathField.current);
        mathField.current.latex(latex || '')

        // TODO: onKeyDown이 바뀐거 처리
        wrapperElement.current.addEventListener('keydown', (e) => {
            if (onKeyDownRef.current) onKeyDownRef.current(e, mathField.current)
        });

        if (mathquillDidMount) mathquillDidMount(mathField.current)
    }, [wrapperElement])

    useEffect(() => {
        if (mathField.current && mathField.current.latex() !== latex) {
            mathField.current.latex(latex)
        }
    }, [latex])

    return <span {...otherProps} ref={wrapperElement} />
}

EditableMathField.propTypes = {
    latex: PropTypes.string,
    onChange: PropTypes.func,
    config: PropTypes.object,
    mathquillDidMount: PropTypes.func,
    onMathFieldCreated: PropTypes.func,
    onKeyDown: PropTypes.func,
}

export default EditableMathField