import React, { useState } from "react";
import Calculator from "./Calculator";
import History from "./History";

function App() {
  const [history, setHistory] = useState([]);
  const [openHistory, setOpenHistory] = useState(false);

  const addToHistory = (query, value) => {
    setHistory([...history, { query: query, res: value }]);
  };

  const handleOpen = () => setOpenHistory(!openHistory);

  return (
    <div className="App">
      <i
        className={`fa ${openHistory ? "fa-xmark" : "fa-bars"}`}
        onClick={handleOpen}
      ></i>
      <Calculator addToHistory={addToHistory} />
      <History history={history} openHistory={openHistory} />
    </div>
  );
}

export default App;
