import React, { createContext, useEffect, useReducer, useState } from "react";

const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((e) => {
          return e.id !== action.payload;
        }),
      };

    case "EDIT_BUDGET": {
      return {
        ...state,
        budget: action.payload,
      };
    }

    default:
      return state;
  }
};

const initialState = localStorage.getItem("myBudget")
  ? JSON.parse(localStorage.getItem("myBudget"))
  : {
      budget: 0,
      expenses: [],
    };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    localStorage.setItem("myBudget", JSON.stringify(state));
  });

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses.filter((e) => {
          return e.name.toLowerCase().includes(searchValue);
        }),
        dispatch,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
