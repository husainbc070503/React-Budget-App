import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import SearchExpense from "./components/SearchExpense";

function App() {
  return (
    <div className="container py-5">
      <h2 className="my-4 fs-1 fw-bold">My Budget Planner</h2>

      {/* Alerts */}
      <div className="row">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <SpentSoFar />
        </div>
      </div>

      {/* Expenses */}
      <div className="container">
        <h2 className="my-5 fs-1 fw-bold">Expenses</h2>
        <SearchExpense />
        <div className="row">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
      </div>

      {/* Add Expenses */}
      <div className="container">
        <h2 className="fs-1 fw-bold my-5">Add Expense</h2>
        <ExpenseForm />
      </div>
    </div>
  );
}

export default App;
