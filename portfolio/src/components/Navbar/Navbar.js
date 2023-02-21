import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import pdf from '../../assets/Resume - Husain Champawala.pdf';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const scrollToTop = () => (document.documentElement.scrollTop = 0);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="imgLogo" />
        </div>
        <ul className={`lists ${open ? "open" : ""}`}>
          <li className="list-item">
            <a href="#" onClick={scrollToTop}>
              Home
            </a>
          </li>
          <li className="list-item">
            <a href="#about">About</a>
          </li>
          <li className="list-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-item">
            <a href="#certificates">Certificates</a>
          </li>
          <li className="list-item">
            <a href="#contact">Contact</a>
          </li>
          <div className="res">
            <a href={pdf} className="resume" download>
              Resume
            </a>
          </div>
        </ul>
        <i
          className={`fa ${!open ? "fa-bars" : "fa-xmark"}`}
          onClick={!open ? openMenu : closeMenu}
        ></i>
      </nav>
    </div>
  );
};

export default Navbar;
