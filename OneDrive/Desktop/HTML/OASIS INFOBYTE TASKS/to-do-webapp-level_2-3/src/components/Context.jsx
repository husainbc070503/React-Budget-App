import React, { createContext, useEffect, useState } from "react";

const listContext = createContext();
const Context = ({ children }) => {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem("lists");
    if (savedList) return JSON.parse(savedList);
    else return [];
  });
  const [editTodoObj, setEditTodoObj] = useState({});
  const [editId, setEditId] = useState("");

  const addTodo = ({ title, description }) => {
    setList([
      ...list,
      {
        id: new Date().getTime().toString(),
        title,
        description,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const newList = list.filter((i) => {
      return i.id != id;
    });

    setList(newList);
  };

  const editTodo = ({ title, description }) => {
    for (let i of list) {
      if (i.id === editId) {
        i.title = title;
        i.description = description;
        break;
      }
    }

    setList(list);
    setEditId("");
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(list));
  }, [list]);

  return (
    <listContext.Provider
      value={{
        list,
        addTodo,
        deleteTodo,
        editTodo, // function
        editTodoObj,
        setEditTodoObj,
        editId,
        setEditId,
      }}
    >
      {children}
    </listContext.Provider>
  );
};

export { Context, listContext };
