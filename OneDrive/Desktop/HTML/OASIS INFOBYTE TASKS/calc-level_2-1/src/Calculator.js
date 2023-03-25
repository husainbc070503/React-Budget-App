import React, { useState } from "react";

const Calculator = ({ addToHistory }) => {
  var [value, setValue] = useState("");
  const [str, setStr] = useState("");

  const handleClick = (e) => {
    value += e.target.innerHTML;
    setValue(value);
  };

  const handleEnter = () => {
    try {
      let res = eval(value);
      addToHistory(value, res);
      console.log(value, res);
      setStr(value);
      setValue(res);
    } catch (err) {
      setValue("Not Valid");
    }
  };

  const handleDelete = () => setValue(value.slice(0, -1));

  const handleClear = () => {
    setValue("");
    setStr("");
  };

  const handleModulo = () => {
    let res = value / 100;
    addToHistory(`${value}/100`, res);
    setValue(res);
  };

  const squareRoot = () => {
    let res = Math.pow(value, 0.5);
    addToHistory(`(${value}) ^ 1/2`, res);
    setValue(res);
  };

  return (
    <div className="calc-card">
      <div className="input-group">
        <label>{str}</label>
        <input type="text" value={value} autoFocus />
      </div>

      <div className="buttons">
        <div className="top">
          <button type="button" className="btn op" onClick={handleDelete}>
            Del
          </button>
          <button type="button" className="btn op" onClick={handleClear}>
            Clear
          </button>
        </div>
        <div className="bottom">
          <button type="button" className="btn" onClick={handleClick}>
            7
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            8
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            9
          </button>
          <button type="button" className="btn op" onClick={handleClick}>
            *
          </button>
          <button type="button" className="btn op" onClick={handleClick}>
            /
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            4
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            5
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            6
          </button>
          <button type="button" className="btn op" onClick={handleModulo}>
            %
          </button>
          <button type="button" className="btn op" onClick={squareRoot}>
            <i className="fa-solid fa-square-root-variable"></i>
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            1
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            2
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            3
          </button>
          <button type="button" className="btn op" onClick={handleClick}>
            +
          </button>
          <button type="button" className="btn op" onClick={handleClick}>
            -
          </button>
          <button type="button" className="btn op" onClick={handleClick}>
            .
          </button>
          <button type="button" className="btn" onClick={handleClick}>
            0
          </button>
          <button type="button" className="btn op">
            <i className="fa-solid fa-plus-minus"></i>
          </button>
          <button type="button" className="btn enter" onClick={handleEnter}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
