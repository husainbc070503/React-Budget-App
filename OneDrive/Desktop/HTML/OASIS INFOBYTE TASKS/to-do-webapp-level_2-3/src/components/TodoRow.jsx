import React, { useContext } from "react";
import { listContext } from "./Context";

const TodoRow = ({ title, description, id, check }) => {
  const { deleteTodo, setEditTodoObj, setEditId } = useContext(listContext);

  const handleEdit = () => {
    setEditTodoObj({ title, description });
    setEditId(id);
  };

  return (
    <tr>
      <td className={`${check ? "strike" : ""}`}>{title}</td>
      <td className={`${check ? "strike" : ""}`}>{description}</td>
      <td>
        <div
          className={`icon edit ${check ? "disabled" : ""}`}
          onClick={handleEdit}
        >
          <i className="fa fa-pen"></i>
        </div>
        <div className="icon del" onClick={() => deleteTodo(id)}>
          <i className="fa fa-trash"></i>
        </div>
      </td>
    </tr>
  );
};

export default TodoRow;
