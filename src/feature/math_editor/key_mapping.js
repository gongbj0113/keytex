const KeyMapping = [
    {
        code: "Quote",
        write: "''",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m0"],
        displayCode: "\"",
        display: "<a style='color:blue;'>''</a>"
    },

    // ########################### 

    {
        code: "NumpadSubtract",
        write: "\\pi",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpadsubtract",
        display: "<a style='color:blue;'>𝛑</a>"
    },
    {
        code: "NumpadAdd",
        write: "\\infty",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpadadd",
        display: "<a style='color:blue;'>∞</a>"
    },
    {
        code: "NumpadDivide",
        write: "{\\integral_{ }^{ }}",
        leftKeyStroke: 2,
        mode: ["m0", "m1"],
        displayCode: "numpaddivide",
        display: "<a style='color:blue;'>∫</a>"
    },
    {
        code: "NumpadMultiply",
        write: "\\sum_{}^{}",
        leftKeyStroke: 2,
        mode: ["m0", "m1"],
        displayCode: "numpadmultiply",
        display: "<a style='color:blue;'>∑</a>"
    },
    {
        code: "NumpadDecimal",
        write: "\\le",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpaddecimal",
        display: "<a style='color:blue;'>≤</a>"
    },
    {
        code: "Numpad0",
        write: "\\ge",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad0",
        display: "<a style='color:blue;'>≥</a>"
    },
    {
        code: "Numpad1",
        write: "log_{} {}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad1",
        display: "<a style='color:blue;'>log</a>"
    },
    {
        code: "Numpad2",
        write: "ln",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad2",
        display: "<a style='color:blue;'>ln</a>"
    },
    {
        code: "Numpad3",
        write: "\\lim_{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad3",
        display: "<a style='color:blue;'>lim</a>"
    },
    {
        code: "Numpad4",
        write: "\\sqrt{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad4",
        display: "<a style='color:blue;'><sup>2</sup>√x</a>"
    },
    {
        code: "Numpad5",
        write: "\\sqrt[]{}",
        leftKeyStroke: 2,
        mode: ["m0", "m1"],
        displayCode: "numpad5",
        display: "<a style='color:blue;'><sup>&#9633;</sup>√x</a>"
    },
    {
        code: "Numpad6",
        write: "_{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad6",
        display: "<a style='color:blue;'>x<sub>&#9633;</sub></a>"
    },
    {
        code: "Numpad7",
        write: "^{2}",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad7",
        display: "<a style='color:blue;'>x<sup>2</sup></a>"
    },
    {
        code: "Numpad8",
        write: "^{3}",
        leftKeyStroke: 0,
        mode: ["m0", "m1"],
        displayCode: "numpad8",
        display: "<a style='color:blue;'>x<sup>3</sup></a>"
    },
    {
        code: "Numpad9",
        write: "^{}",
        leftKeyStroke: 1,
        mode: ["m0", "m1"],
        displayCode: "numpad9",
        display: "<a style='color:blue;'>x<sup>&#9633;</sup></a>"
    },


    {
        code: "Equal",
        write: "\\neq",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "=",
        display: "<a style='color:blue;'>≠</a>"
    },
    {
        code: "Equal",
        write: "\\approx",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "+",
        display: "<a style='color:blue;'>≈</a>"
    },
    {
        code: "Minus",
        write: "\\pm",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "-",
        display: "<a style='color:blue;'>±</a>"
    },
    {
        code: "Minus",
        write: "\\mp",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "_",
        display: "<a style='color:blue;'>∓</a>"
    },
    {
        code: "Digit1",
        write: "\\Delta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit1",
        display: "<a style='color:blue;'>Δ</a>"
    },
    {
        code: "Digit1",
        write: "\\nabla",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "!",
        display: "<a style='color:blue;'>∇</a>"
    },
    {
        code: "Digit2",
        write: "\\subset",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit2",
        display: "<a style='color:blue;'>⊂</a>"
    },
    {
        code: "Digit2",
        write: "\\in",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "@",
        display: "<a style='color:blue;'>∈</a>"
    },
    {
        code: "Digit3",
        write: "\\notsubset",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit3",
        display: "<a style='color:blue;'>⊄</a>"
    },
    {
        code: "Digit3",
        write: "\\notin",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "#",
        display: "<a style='color:blue;'>∉</a>"
    },
    {
        code: "Digit4",
        write: "\\cup",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit4",
        display: "<a style='color:blue;'>∪</a>"
    },
    {
        code: "Digit4",
        write: "\\cap",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "$",
        display: "<a style='color:blue;'>∩</a>"
    },
    {
        code: "Digit5",
        write: "\\to",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit5",
        display: "<a style='color:blue;'>→</a>"
    },
    {
        code: "Digit5",
        write: "\\Rightarrow",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "%",
        display: "<a style='color:blue;'>⇒</a>"
    },
    {
        code: "Digit6",
        write: "\\gets",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit6",
        display: "<a style='color:blue;'>←</a>"
    },
    {
        code: "Digit6",
        write: "\\Leftarrow",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "^",
        display: "<a style='color:blue;'>⇐</a>"
    },
    {
        code: "Digit7",
        write: "\\leftrightarrow",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit7",
        display: "<a style='color:blue;'>↔</a>"
    },
    {
        code: "Digit7",
        write: "\\iff",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "&",
        display: "<a style='color:blue;'>⇔</a>"
    },
    {
        code: "Digit8",
        write: "\\equiv",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit8",
        display: "<a style='color:blue;'>≡</a>"
    },
    {
        code: "Digit8",
        write: "\\not\\equiv",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "*",
        display: "<a style='color:blue;'>≢</a>"
    },
    {
        code: "Digit9",
        write: "\\therefore",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit9",
        display: "<a style='color:blue;'>∴</a>"
    },
    {
        code: "Digit9",
        write: "\\because",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: "(",
        display: "<a style='color:blue;'>∵</a>"
    },
    {
        code: "Digit0",
        write: "\\approx",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "digit0",
        display: "<a style='color:blue;'>≈</a>"
    },
    {
        code: "Digit0",
        write: "\\not\\approx",
        leftKeyStroke: 0,
        mode: ["m1"],
        shift: true,
        displayCode: ")",
        display: "<a style='color:blue;'>≉</a>"
    },
    {
        code: "KeyA",
        write: "\\alpha",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "a",
        display: "<a style='color:blue;'>ɑ</a>"
    },
    {
        code: "KeyA",
        write: "A",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "A",
        display: "<a style='color:blue;'>A</a>"
    },
    {
        code: "KeyB",
        write: "\\beta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "b",
        display: "<a style='color:blue;'>β</a>"
    },
    {
        code: "KeyB",
        write: "B",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "B",
        display: "<a style='color:blue;'>B</a>"
    },
    {
        code: "KeyG",
        write: "\\gamma",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "g",
        display: "<a style='color:blue;'>γ</a>"
    },
    {
        code: "KeyG",
        write: "\\Gamma",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "G",
        display: "<a style='color:blue;'>Γ</a>"
    },
    {
        code: "KeyD",
        write: "\\delta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "d",
        display: "<a style='color:blue;'>δ</a>"
    },
    {
        code: "KeyD",
        write: "Δ",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "D",
        display: "<a style='color:blue;'>Δ</a>"
    },
    {
        code: "KeyE",
        write: "\\epsilon",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "e",
        display: "<a style='color:blue;'>ε</a>"
    },
    {
        code: "KeyE",
        write: "\\varepsilon",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "E",
        display: "<a style='color:blue;'>ε</a>"
    },
    {
        code: "KeyZ",
        write: "\\zeta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "z",
        display: "<a style='color:blue;'>ζ</a>"
    },
    {
        code: "KeyZ",
        write: "Z",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "Z",
        display: "<a style='color:blue;'>Z</a>"
    },
    {
        code: "KeyH",
        write: "\\eta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "h",
        display: "<a style='color:blue;'>η</a>"
    },
    {
        code: "KeyH",
        write: "H",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "H",
        display: "<a style='color:blue;'>H</a>"
    },
    {
        code: "KeyQ",
        write: "\\theta",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "q",
        display: "<a style='color:blue;'>θ</a>"
    },
    {
        code: "KeyQ",
        write: "\\vartheta",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "Q",
        display: "<a style='color:blue;'>θ</a>"
    },
    {
        code: "KeyI",
        write: "\\iota",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "i",
        display: "<a style='color:blue;'>ι</a>"
    },
    {
        code: "KeyI",
        write: "I",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "I",
        display: "<a style='color:blue;'>I</a>"
    },
    {
        code: "KeyK",
        write: "\\kappa",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "k",
        display: "<a style='color:blue;'>κ</a>"
    },
    {
        code: "KeyK",
        write: "K",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "K",
        display: "<a style='color:blue;'>K</a>"
    },
    {
        code: "KeyL",
        write: "\\lambda",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "l",
        display: "<a style='color:blue;'>λ</a>"
    },
    {
        code: "KeyL",
        write: "\\Lambda",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "L",
        display: "<a style='color:blue;'>Λ</a>"
    },
    {
        code: "KeyM",
        write: "\\mu",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "m",
        display: "<a style='color:blue;'>μ</a>"
    },
    {
        code: "KeyM",
        write: "M",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "M",
        display: "<a style='color:blue;'>M</a>"
    },
    {
        code: "KeyN",
        write: "\\nu",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "n",
        display: "<a style='color:blue;'>ν</a>"
    },
    {
        code: "KeyN",
        write: "N",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "N",
        display: "<a style='color:blue;'>N</a>"
    },
    {
        code: "KeyC",
        write: "\\xi",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "c",
        display: "<a style='color:blue;'>ξ</a>"
    },
    {
        code: "KeyC",
        write: "\\Xi",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "C",
        display: "<a style='color:blue;'>Ξ</a>"
    },
    {
        code: "KeyP",
        write: "\\pi",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "p",
        display: "<a style='color:blue;'>π</a>"
    },
    {
        code: "KeyP",
        write: "\\Pi",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "P",
        display: "<a style='color:blue;'>Π</a>"
    },
    {
        code: "KeyR",
        write: "\\rho",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "r",
        display: "<a style='color:blue;'>ρ</a>"
    },
    {
        code: "KeyR",
        write: "\\varrho",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "R",
        display: "<a style='color:blue;'>ρ</a>"
    },
    {
        code: "KeyS",
        write: "\\sigma",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "s",
        display: "<a style='color:blue;'>σ</a>"
    },
    {
        code: "KeyS",
        write: "\\Sigma",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "S",
        display: "<a style='color:blue;'>Σ</a>"
    },
    {
        code: "KeyT",
        write: "\\tau",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "t",
        display: "<a style='color:blue;'>τ</a>"
    },
    {
        code: "KeyT",
        write: "T",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "T",
        display: "<a style='color:blue;'>T</a>"
    },
    {
        code: "KeyU",
        write: "\\upsilon",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "u",
        display: "<a style='color:blue;'>υ</a>"
    },
    {
        code: "KeyU",
        write: "\\Upsilon",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "U",
        display: "<a style='color:blue;'>Υ</a>"
    },
    {
        code: "KeyF",
        write: "\\phi",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "f",
        display: "<a style='color:blue;'>φ</a>"
    },
    {
        code: "KeyF",
        write: "\\varphi",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "F",
        display: "<a style='color:blue;'>φ</a>"
    },
    {
        code: "KeyX",
        write: "\\chi",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "x",
        display: "<a style='color:blue;'>χ</a>"
    },
    {
        code: "KeyX",
        write: "X",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "X",
        display: "<a style='color:blue;'>X</a>"
    },
    {
        code: "KeyY",
        write: "\\psi",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "y",
        display: "<a style='color:blue;'>ψ</a>"
    },
    {
        code: "KeyY",
        write: "\\Psi",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "Y",
        display: "<a style='color:blue;'>Ψ</a>"
    },
    {
        code: "KeyW",
        write: "\\omega",
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "w",
        display: "<a style='color:blue;'>ω</a>"
    },
    {
        code: "KeyW",
        write: "\\Omega",
        shift: true,
        leftKeyStroke: 0,
        mode: ["m1"],
        displayCode: "W",
        display: "<a style='color:blue;'>Ω</a>"
    }
];

export default KeyMapping;
