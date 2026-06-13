import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navs = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];
  return (
    <header className="mt-5">
      <nav>
        <ul className="flex items-center justify-center gap-3">
          {navs.map((item) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline bg-amber-300 px-3 transition-all rounded text-gray-300"
                    : "bg-amber-200 rounded px-3 text-white"
                }
                to={item.path}
              >
                {item.label}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
