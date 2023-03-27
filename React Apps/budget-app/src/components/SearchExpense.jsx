import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchExpense = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div>
      <input
        className="form-control p-3 my-5"
        placeholder="Type to search.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchExpense;
