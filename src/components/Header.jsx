import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline text-red-400 " : ""
              }
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
