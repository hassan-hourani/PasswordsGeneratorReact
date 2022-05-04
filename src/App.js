import React, { useState } from "react"
import Icon from './assets/icons/Iconicon.png';

const App = () => {
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '_', '"', '£', '`', '|', ',', '.', '/', '~', "'", '[', ']', '{', '}', '>', '<']
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const [passwordsState, setPasswordsState] = useState([])
  const [lengthState, setLengthState] = useState(20)
  const [sourceArrayState, setSourcArrayState] = useState(lowerCase.concat(upperCase, symbols,  numbers))

  function handelCheckboxesChange() {
    let emptyArray = []
    const checkBoxesValues = {
      capitalLetters: document.getElementById("capital-letters").checked,
      smallLetters: document.getElementById("small-letters").checked,
      numbers: document.getElementById("numbers").checked,
      symbols: document.getElementById("symbols").checked,
    }

    return (
      setSourcArrayState(emptyArray.concat(checkBoxesValues.capitalLetters ? upperCase : [], checkBoxesValues.smallLetters ? lowerCase : [],
        checkBoxesValues.numbers ? numbers : [], checkBoxesValues.symbols ? symbols : []))
    )
  }

  function handelSliderChange() {
    const length = document.getElementById("slider").value
    return (
      setLengthState(length)
    )
  }

  function handelGenerateClick() {
    const passwordsArray = []
    for (let i = 0; i < lengthState * 4; i++) {
      passwordsArray.push(sourceArrayState[Math.floor(Math.random() * sourceArrayState.length)])
    }
    return (
      setPasswordsState(passwordsArray)
    )
  }

  function handelMouseEnterButton() {
    
    return (
    document.getElementById("tip").innerHTML = "Click on any password to copy to clipboard"
    )
  }

  function handelMouseLeaveButton() {
    
    return (
    document.getElementById("tip").innerHTML = ""
    )
  }

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Generate a<br /><span>random password</span></h1>
          <p>Never use an insecure password again.</p>
          <div className="btn">
            <button className="generate-btn" onClick={handelGenerateClick}><img alt="zap icon" src={Icon} className="icon" />
            <span>Generate Passwords</span>
            </button>
          </div>
        </div>
        <div className="checkboxes">
          <input type="checkbox" id="capital-letters" name="capitalLetters" onChange={handelCheckboxesChange} defaultChecked="true" />
          <label htmlFor="capitalLetters">A - Z</label>
          <input type="checkbox" id="small-letters" name="smallLetters" onChange={handelCheckboxesChange} defaultChecked="true" />
          <label htmlFor="smallLetters">a - z</label>
          <input type="checkbox" id="numbers" name="numbers" onChange={handelCheckboxesChange} defaultChecked="true" />
          <label htmlFor="numbers">0 - 9</label>
          <input type="checkbox" id="symbols" name="symbols" onChange={handelCheckboxesChange} defaultChecked="true" />
          <label htmlFor="symbols" className="symbol">Symbols</label>
        </div>
        <div>

          <input type="range" name="slider" id="slider" onChange={handelSliderChange} min="8" max="32" defaultValue={20} />
          <label htmlFor="slider" className="slider-label">{lengthState}</label>
        </div>
        <div className="btns">

          <button id="btn1" className="pw-btn" onMouseEnter={handelMouseEnterButton} onMouseLeave={handelMouseLeaveButton} onClick={() => {
            navigator.clipboard.writeText(document.getElementById("btn1").innerText)
            document.getElementById("tip").innerHTML = "Copied to clipboard"
        }}>
            {passwordsState.slice(0, passwordsState.length / 4)}
          </button>
          <button id="btn2" className="pw-btn" onMouseEnter={handelMouseEnterButton} onMouseLeave={handelMouseLeaveButton} onClick={() => {
            navigator.clipboard.writeText(document.getElementById("btn2").innerText)
            document.getElementById("tip").innerHTML = "Copied to clipboard"
        }}>
            {passwordsState.slice(passwordsState.length / 4, passwordsState.length / 2)}
          </button>
        </div>
        <div className="btns">
          <button id="btn3" className="pw-btn" onMouseEnter={handelMouseEnterButton} onMouseLeave={handelMouseLeaveButton} onClick={() => {
            navigator.clipboard.writeText(document.getElementById("btn3").innerText)
            document.getElementById("tip").innerHTML = "Copied to clipboard"
        }}>
            {passwordsState.slice(passwordsState.length / 2, passwordsState.length * 0.75)}
          </button>
          <button id="btn4" className="pw-btn" onMouseEnter={handelMouseEnterButton} onMouseLeave={handelMouseLeaveButton} onClick={() => {
            navigator.clipboard.writeText(document.getElementById("btn4").innerText)
            document.getElementById("tip").innerHTML = "Copied to clipboard"
        }}>
            {passwordsState.slice(passwordsState.length * 0.75, passwordsState.length)}
          </button>
        </div>
        <p id="tip" ></p>
      </div>
    </>

  )
}


export default App;
