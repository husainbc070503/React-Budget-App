import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SpentSoFar = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-success">
      <span className="fs-5">
        Spent So Far: <i className="fa-solid fa-dollar-sign fs-6 mx-1"></i>
        {totalExpense}
      </span>
    </div>
  );
};

export default SpentSoFar;
