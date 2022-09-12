import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg header ">
      <div className="d-flex align-items-center mypadding ">
        <img src="./logoP.png" alt="" className=""></img>
        <div className="m-3">
          <h3>Health Overview</h3>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
    </nav>
  );
}
