import React, { useContext } from "react";
import { listContext } from "./Context";
import TodoRow from "./TodoRow";

const TodoTable = () => {
  const { list } = useContext(listContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((e, i) => {
          return (
            <TodoRow
              title={e.title}
              description={e.description}
              id={e.id}
              check={e.check}
              key={i}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
