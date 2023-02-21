import React, { useEffect, useState } from "react";
import "./Scroll.css";

const Scroll = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 100) setShow(true);
    else setShow(false);
  };

  const scrollToTop = () => (document.documentElement.scrollTop = 0);

  useEffect(() => {
    window.onscroll = scrollHandler;
    return (window.onscroll = scrollHandler);
  });

  return (
    <div>
      <div
        className="scrollBtn"
        style={{ display: show ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <div className="scroll">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
