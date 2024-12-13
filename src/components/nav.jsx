import logo from "../images/img11.png";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";
import About from "./about";
export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-section">
      <div className="logo-section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="heading">
          <h3>books</h3>
        </div>
      </div>

      <div className={toggle ? "nav-links show" : "nav-links"}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="nav-bar"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
