import React from "react";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="index.html">
        Home
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span>
              <a className="nav-link" href="about.html">
                About <span className="sr-only">(current)</span>
              </a>
            </span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              DDecider
            </a>
          </li>
          <span className="nameNav navbar-text">DDecider</span>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
