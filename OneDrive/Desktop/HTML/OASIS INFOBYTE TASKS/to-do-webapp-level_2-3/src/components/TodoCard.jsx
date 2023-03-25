import React from "react";
import TodoForm from "./TodoForm";
import TodoTable from "./TodoTable";

const TodoCard = () => {
  return (
    <div className="container">
      <div className="card">
        <TodoForm />
        <TodoTable />
      </div>
    </div>
  );
};

export default TodoCard;
