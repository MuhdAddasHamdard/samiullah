import React from "react";

 const navItems = [
   { label: "Home", href: "/" },
   { label: "About", href: "/about" },
   { label: "Services", href: "/services" },
   { label: "Contact", href: "/contact" },
 ];


const Navbar = () => {
  return (
    <>
      <div className="bg-red-500 text-white p-4">Tailwind Working</div>
      <header className="navbar">
        <nav aria-label="Main navigation">
          <ul className="nav-list flex">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
