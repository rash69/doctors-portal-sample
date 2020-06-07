import React from "react";
import { Link } from "react-router-dom";

const SideItems = ({ text, path }) => {
  return (
    <div>
      <li className="nav-item">
        <Link className="nav-link d-flex " to={path}>
          <span>{text}</span>
        </Link>
      </li>
    </div>
  );
};

export default SideItems;
