import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ item }) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: item.id,
    });
  };
  return (
    <li
      className="list-group-item align-items-center d-flex justify-content-between"
      key={item.id}
    >
      <p className="fs-3 my-4">{item.name}</p>
      <div className="utilities">
        <span className="badge text-bg-primary fs-5">
          <i className="fa-solid fa-dollar-sign fs-6 mx-1"></i>
          {item.cost}
        </span>
        <i
          className="fa fa-xmark mx-4 bg-dark rounded-circle text-white p-2"
          onClick={handleDelete}
        ></i>
      </div>
    </li>
  );
};

export default ExpenseItem;
