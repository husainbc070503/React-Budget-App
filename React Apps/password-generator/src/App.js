import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { numbers, uppercase, lowercase, special } from "./Character";

function App() {
  const [passLen, setPassLen] = useState(26);
  const [addUpper, setAddUpper] = useState(false);
  const [addLower, setAddLower] = useState(false);
  const [addSpecial, setAddSpecial] = useState(false);
  const [addNumbers, setAddNumbers] = useState(false);
  const [password, setPassword] = useState("");

  const notify = (message, isError) => {
    if (isError === false) {
      console.log("hii");
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  /* Creating Random Password */
  const createPassword = (characters) => {
    const n = characters.length;
    let pass = "";

    for (let i = 0; i < passLen; i++) {
      const ind = Math.floor(Math.random() * n);
      pass += characters[ind];
    }

    return pass;
  };

  const generatePassword = () => {
    if (!addNumbers && !addLower && !addUpper && !addSpecial) {
      notify("Please select atleast one field!", false);
      return;
    } else if (passLen > 26) {
      notify("Password length should be maximum 26!", false);
      return;
    } else {
      let characters = "";
      if (addLower) characters += lowercase;
      if (addUpper) characters += uppercase;
      if (addNumbers) characters += numbers;
      if (addSpecial) characters += special;

      setPassword(createPassword(characters));
      notify("Password Generated Successfully.", true);
    }
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);

    /* The Clipboard API provides the ability to respond to clipboard commands (cut, copy, and paste) as well as to asynchronously read from and write to the system clipboard. */

    /* read()
    Requests arbitrary data (such as images) from the clipboard, returning a Promise that resolves with an array of ClipboardItem objects containing the clipboard's contents.

    readText()
    Requests text from the system clipboard; returns a Promise which is resolved with a string containing the clipboard's text once it's available.

    write()
    Writes arbitrary data to the system clipboard. This asynchronous operation signals that it's finished by resolving the returned Promise.

    writeText()
    Writes text to the system clipboard, returning a Promise which is resolved once the text is fully copied into the clipboard.
     */

    notify("Password Copied Successfully.");
    setPassword("");
  };

  return (
    <div className="App">
      <h2>Password Generator</h2>
      <div className="card">
        <div className="pass-field">
          <h3>{password}</h3>
          <i className="fa-solid fa-copy" onClick={copyPassword}></i>
        </div>
        <form className="form">
          <div className="input-group">
            <label htmlFor="len">Password Length</label>
            <input
              type="number"
              name="len"
              className="input-field"
              max={26}
              min={1}
              value={passLen}
              onChange={(e) => setPassLen(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="upper">Include Upper Case Alphabets</label>
            <input
              type="checkbox"
              name="upper"
              className="input-check"
              checked={addUpper}
              onChange={(e) => setAddUpper(e.target.checked)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lower">Include Lower Case Alphabets</label>
            <input
              type="checkbox"
              name="lower"
              className="input-check"
              checked={addLower}
              onChange={(e) => setAddLower(e.target.checked)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lower">Include Numbers</label>
            <input
              type="checkbox"
              name="lower"
              className="input-check"
              checked={addNumbers}
              onChange={(e) => setAddNumbers(e.target.checked)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="upper">Include Special Characters</label>
            <input
              type="checkbox"
              name="upper"
              className="input-check"
              checked={addSpecial}
              onChange={(e) => setAddSpecial(e.target.checked)}
            />
          </div>
          <div className="button">
            <button type="button" className="btn" onClick={generatePassword}>
              Generate
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default App;
