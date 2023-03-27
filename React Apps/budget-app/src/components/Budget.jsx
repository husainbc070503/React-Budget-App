import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const [isEditable, setIsEditable] = useState(false);

  const { budget, dispatch } = useContext(AppContext);
  const [editBudget, setEditBudget] = useState(budget);

  const handleClick = () => {
    dispatch({
      type: "EDIT_BUDGET",
      payload: editBudget,
    });

    setIsEditable(false);
  };

  return (
    <div className="alert alert-warning">
      {!isEditable ? (
        <div className="d-flex align-items-center justify-content-between">
          <span className="fs-5 col-9">Budget: ${budget}</span>
          <button
            type="button"
            className="col-3 btn btn-md btn-warning"
            onClick={() => setIsEditable(!isEditable)}
          >
            Edit
          </button>
        </div>
      ) : (
        <>
          <div className="input-group">
            <input
              type="number"
              className="shadow py-3 form-control"
              value={editBudget}
              onChange={(e) => setEditBudget(e.target.value)}
            />
          </div>
          <div className="text-center mt-3">
            <button
              type="button"
              className="fs-6 btn btn-sm btn-danger fw-bold"
              onClick={handleClick}
            >
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Budget;
