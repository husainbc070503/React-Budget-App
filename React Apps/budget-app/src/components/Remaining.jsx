import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className={`alert alert-${totalExpense > budget ? "danger" : "info"}`}>
      <span className="fs-5">
        Remaining Budget: <i className="fa-solid fa-dollar-sign"></i>
        {budget - totalExpense}
      </span>
    </div>
  );
};

export default Remaining;
