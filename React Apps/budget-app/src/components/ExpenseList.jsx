import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((e) => {
        return <ExpenseItem item={e} key={e.id} />;
      })}
    </ul>
  );
};

export default ExpenseList;
