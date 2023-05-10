const KeyMapping = [
    {
        code: "Numpad1",
        write: "_{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad1",
        display: "x<sub>&#9633;</sub>"
    },
    {
        code: "Numpad2",
        write: "\\frac{}{}",
        leftKeyStroke: 2,
        mode: ["m0", "m1"],
        displayCode: "numpad2",
        display: "&#9633;/&#9633;"
    },
    {
        code: "Numpad3",
        write: "\\cdot",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad3",
        display: "·"
    },
    {
        code: "Numpad4",
        write: "^{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad4",
        display: "x<sup>&#9633;</sup>"
    },
    {
        code: "Numpad5",
        write: "\\sqrt[]{}",
        leftKeyStroke: 2,
        mode: ["m0", "m1"],
        displayCode: "numpad5",
        display: "<sup>&#9633;</sup>√x"
    },
    {
        code: "Numpad6",
        write: "ln",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad6",
        display: "ln"
    },
    {
        code: "Numpad7",
        write: "^{2}",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad7",
        display: "x<sup>2</sup>"
    },
    {
        code: "Numpad8",
        write: "\\sqrt{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad8",
        display: "<sup>2</sup>√x"
    },
    {
        code: "Numpad9",
        write: "log_{} {}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad9",
        display: "log"
    },

    {
        code: "Digit1",
        write: "\\Delta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit1",
        display: "Δ"
    },
    {
        code: "Digit2",
        write: "\\Leftarrow",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit2",
        display: "⇐"
    },
    {
        code: "Digit3",
        write: "\\Leftrightarrow",
        leftKeyStroke: 0,

        mode: ["m1"],
        displayCode: "digit3",
        display: "⇔"
    },
    {
        code: "Digit4",
        write: "\\Rightarrow",
        leftKeyStroke: 0,

        mode: ["m1"],
        displayCode: "digit4",
        display: "⇒"
    },
    {
        code: "Digit5",
        write: "{\\integral_{ }^{ }}",
        leftKeyStroke: 2,

        mode: ["m1"],
        displayCode: "digit5",
        display: "∫"
    },
    {
        code: "Digit6",
        write: "\\sum_{}^{}",
        leftKeyStroke: 2,
 
        mode: ["m1"],
        displayCode: "digit6",
        display: "∑"
    },
    {
        code: "Digit7",
        write: "\\bigcup_{}^{}",
        leftKeyStroke: 2,

        mode: ["m1"],
        displayCode: "digit7",
        display: "⋃"
    },
    {
        code: "Digit8",
        write: "\\bigcap_{}^{}",
        leftKeyStroke: 2,

        mode: ["m1"],
        displayCode: "digit8",
        display: "⋂"
    },
    {
        code: "Digit9",
        write: "\\neq",
        leftKeyStroke: 0,

        mode: ["m1"],
        displayCode: "digit9",
        display: "≠"
    },
    {
        code: "Digit0",
        write: "\\approx",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit0",
        display: "≈"
    },
    {
        code: "Minus",
        write: "\\equiv",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "minus",
        display: "≡"
    },
    {
        code: "Equal",
        write: "\\therefore",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "equal",
        display: "∴"
    },

    {
        code: "KeyA",
        write: "\\alpha",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "a",
        display: "ɑ"
    },
    {
        code: "KeyA",
        write: "\\Alpha",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "A",
        display: "À"
    },
];

export default KeyMapping;