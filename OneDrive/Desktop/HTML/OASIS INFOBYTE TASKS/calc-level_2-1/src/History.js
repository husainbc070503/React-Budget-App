import React from "react";

const History = ({ history, openHistory }) => {
  return (
    <div className={`history ${openHistory ? "open" : ""} `}>
      <h2>History</h2>
      {history.map((e, i) => {
        return (
          <div key={i} className="group">
            <p>
              {e.query} = {e.res}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default History;
