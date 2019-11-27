import React from "react";

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="index.html">
        Home
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <span>
              <a class="nav-link" href="about.html">
                About <span class="sr-only">(current)</span>
              </a>
            </span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              DDecider
            </a>
          </li>
          <span class="nameNav navbar-text">DDecider</span>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
