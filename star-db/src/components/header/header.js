import React from "react";

import "./header.css";

const Header = ({ onToggleService }) => {

  return (
    <div className="header d-flex">
      <h3>
        <a href="/">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/">People</a>
        </li>
        <li>
          <a href="/">Planets</a>
        </li>
        <li>
          <a href="/">Starships</a>
        </li>
      </ul>
      <button
        onClick={onToggleService}
        className="btn btn-primary btn-sm">Toggle service
      </button>
    </div>
  );
};

export default Header;