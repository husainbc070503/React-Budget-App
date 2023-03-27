import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();

    const expense = {
      id: new Date().getTime().toString(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCost("");
  };

  return (
    <form className="row" onSubmit={handleSumit}>
      <div className="mb-3 col-sm">
        <label htmlFor="name" className="form-label fs-4 ">
          Name
        </label>
        <input
          type="text"
          className="form-control p-3"
          id="name"
          placeholder="Type.."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3 col-sm">
        <label htmlFor="cost" className="form-label fs-4 ">
          Cost
        </label>
        <input
          type="number"
          name="cost"
          className="form-control p-3"
          placeholder="123.."
          required
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <div className="button my-4">
        <button type="submit" className="btn btn-md btn-success">
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
