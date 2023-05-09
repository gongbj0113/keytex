import React, { Component } from "react";
import { render } from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../../static/css/FullLayoutKeyboard.css";
import KeyMapping from "../math_editor/key_mapping";

export default class FullLayoutKeyboard extends Component {
  state = {
    layoutName: "default",
    input: "",
    mode: "m0"
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

  defaultKeyboardOptions = {
    ...this.commonKeyboardOptions,
    /**
     * Layout by:
     * Sterling Butters (https://github.com/SterlingButters)
     */
    layout: {
      default: [
        "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "` {digit1} {digit2} {digit3} {digit4} {digit5} {digit6} {digit7} {digit8} {digit9} {digit0} {-} {=} {backspace}",
        "{tab} {q} {w} {e} {r} {t} {y} {u} {i} {o} {p} {[} {]} {\\}",
        "{capslock} {a} {s} {d} {f} {g} {h} {j} {k} {l} {;} {'} {enter}",
        "{shiftleft} {z} {x} {c} {v} {b} {n} {m} {,} {.} {/} {shiftright}",
        "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}"
      ],
      shift: [
        "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "{~} {!} {@} {#} {$} {%} {^} {&} {*} {(} {)} {_} {+} {backspace}",
        "{tab} {Q} {W} {E} {R} {T} {Y} {U} {I} {O} {P} {leftbrace} {rightbrace} {|}",
        '{capslock} {A} {S} {D} {F} {G} {H} {J} {K} {L} {:} {"} {enter}',
        "{shiftleft} {Z} {X} {C} {V} {B} {N} {M} {<} {>} {?} {shiftright}",
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

      "{f1}": "F1",
      "{f2}": "F2",
      "{f3}": "F3",
      "{f4}": "F4",
      "{f5}": "F5",
      "{f6}": "F6",
      "{f7}": "F7",
      "{f8}": "F8",
      "{f9}": "F9",
      "{f10}": "F10",
      "{f11}": "F11",
      "{f12}": "F12",


      "{digit1}": "1",
      "{digit2}": "2",
      "{digit3}": "3",
      "{digit4}": "4",
      "{digit5}": "5",
      "{digit6}": "6",
      "{digit7}": "7",
      "{digit8}": "8",
      "{digit9}": "9",
      "{digit0}": "0",
      "{-}": "-",
      "{=}": "=",

      "{q}": "q",
      "{w}": "w",
      "{e}": "e",
      "{r}": "r",
      "{t}": "t",
      "{y}": "y",
      "{u}": "u",
      "{i}": "i",
      "{o}": "o",
      "{p}": "p",
      "{[}": "[",
      "{]}": "]",

      "{a}": "a",
      "{s}": "s",
      "{d}": "d",
      "{f}": "f",
      "{g}": "g",
      "{h}": "h",
      "{j}": "j",
      "{k}": "k",
      "{l}": "l",
      "{;}": ";",
      "'": "'",

      "{z}": "z",
      "{x}": "x",
      "{c}": "c",
      "{v}": "v",
      "{b}": "b",
      "{n}": "n",
      "{m}": "m",
      "{,}": ",",
      "{.}": ".",
      "{/}": "/",

      "{~}": "~",
      "{!}": "!",
      "{@}": "@",
      "{#}": "#",
      "{$}": "$",
      "{%}": "%",
      "{^}": "^",
      "{&}": "&",
      "{*}": "*",
      "{(}": "(",
      "{)}": ")",
      "{_}": "_",
      "{+}": "+",

      "{Q}": "Q",
      "{W}": "W",
      "{E}": "E",
      "{R}": "R",
      "{T}": "T",
      "{Y}": "Y",
      "{U}": "U",
      "{I}": "I",
      "{O}": "O",
      "{P}": "P",
      "{leftbrace}": "{",
      "{rightbrace}": "}",
      "{|}": "|",

      "{A}": "A",
      "{S}": "S",
      "{D}": "D",
      "{F}": "F",
      "{G}": "G",
      "{H}": "H",
      "{J}": "J",
      "{K}": "K",
      "{L}": "L",
      "{:}": ":",
      '{"}': '"',

      "{Z}": "Z",
      "{X}": "X",
      "{C}": "C",
      "{V}": "V",
      "{B}": "B",
      "{N}": "N",
      "{M}": "M",
      "{<}": "<",
      "{>}": ">",
      "{?}": "?",


    }
  };

  defaultkeyboardControlPadOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: [
        "{prtscr} {scrolllock} {pause}",
        "{insert} {home} {pageup}",
        "{delete} {end} {pagedown}"
      ]
    }
  };

  defaultkeyboardArrowsOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
    }
  };

  defaultkeyboardNumPadOptions = {
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

  defaultkeyboardNumPadEndOptions = {
    ...this.commonKeyboardOptions,
    layout: {
      default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
    }
  };

  makeKeyboardOptions(mode) {
    return {
      ...this.defaultKeyboardOptions,
      layout: {
        default: [
          ...this.defaultKeyboardOptions.layout.default
        ],
        shift: [
          ...this.defaultKeyboardOptions.layout.shift
        ],
      },
      display: {
        ...this.defaultKeyboardOptions.display,
        ...(() => {
          let display = {};
          KeyMapping.forEach((key) => {
            if (key.mode.includes(mode)) {
              display["{" + key.displayCode + "}"] = key.display;

            }
          });
          return display;
        })(),
      }
    };
  }

  makeKeyboardNumPadOptions(mode) {
    return {
      ...this.commonKeyboardOptions,
      layout: {
        default: [
          ...this.defaultkeyboardNumPadOptions.layout.default
        ],
      },
      display: {
        ...this.defaultkeyboardNumPadOptions.layout.display,
        ...(() => {
          let display = {};
          KeyMapping.forEach((key) => {
            if (key.mode.includes(mode)) {
              display["{" + key.displayCode + "}"] = key.display;
            }
          });
          return display;
        })(),
      }
    };
  }

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

  constructor(props) {
    super(props);
    this.state = {
      input: props.input,
      layoutName: props.layoutName,
      mode: props.mode
    };

    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
  }

  _handleKeyDown = (event) => {
    if (event.key === "Shift") {
      if (event.getModifierState("CapsLock") === true) {
        this.setState({
          layoutName: "default"
        });
      } else {
        this.setState({
          layoutName: "shift"
        });
      }
    }
  }

  _handleKeyUp = (event) => {
    if (event.key === "Shift") {
      if (event.getModifierState("CapsLock") === true) {
        this.setState({
          layoutName: "shift"
        });
      } else {
        this.setState({
          layoutName: "default"
        });
      }
    } else if (event.key === "CapsLock") {
      if (event.getModifierState("CapsLock") === true) {
        this.setState({
          layoutName: "shift"
        });
      } else {
        this.setState({
          layoutName: "default"
        });
      }
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
    document.addEventListener("keyup", this._handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
    document.removeEventListener("keyup", this._handleKeyUp);
  }

  render() {
    return (
      <div>
        <div className={"keyboardContainer"}>
          <Keyboard
            baseClass={"simple-keyboard-main"}
            keyboardRef={r => (this.keyboard = r)}
            layoutName={this.state.layoutName}
            {...this.makeKeyboardOptions(this.props.mode)}
          />

          <div className="controlArrows">
            <Keyboard
              baseClass={"simple-keyboard-control"}
              {...this.defaultkeyboardControlPadOptions}
            />
            <Keyboard
              baseClass={"simple-keyboard-arrows"}
              {...this.defaultkeyboardArrowsOptions}
            />
          </div>

          <div className="numPad">
            <Keyboard
              baseClass={"simple-keyboard-numpad"}
              {...this.makeKeyboardNumPadOptions(this.props.mode)}
            />
            <Keyboard
              baseClass={"simple-keyboard-numpadEnd"}
              {...this.defaultkeyboardNumPadEndOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}

