import React, { useContext, useEffect, useState } from "react";
import { listContext } from "./Context";

const TodoForm = () => {
  const { addTodo, editTodo, editId, editTodoObj } = useContext(listContext);
  const [todo, setTodo] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    let str = e.target.value;
    const ch = str[0] ? str[0].toUpperCase() : "";

    str = ch + str.slice(1);

    setTodo({ ...todo, [e.target.name]: str });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !editId ? addTodo(todo) : editTodo(todo);
    setTodo({ title: "", description: "" });
  };

  useEffect(() => {
    editId ? setTodo(editTodoObj) : setTodo({ title: "", description: "" });
  }, [editId]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="input"
          name="title"
          placeholder="Title"
          required
          onChange={handleChange}
          value={todo.title}
        />
      </div>
      <div className="input-group">
        <textarea
          name="description"
          className="input textarea"
          placeholder="Description"
          required
          onChange={handleChange}
          value={todo.description}
        />
      </div>
      <div className="button">
        <button type="submit" className="btn">
          {editId ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
