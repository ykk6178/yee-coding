import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/components/Navbar.scss";
import { NavType } from "../types/NavBar";

const Navbar = () => {
  const navLinks = [
    { path: `/`, name: NavType.Home },
    { path: `/${NavType.Blogs}`, name: NavType.Blogs },
    { path: `/${NavType.Projects}`, name: NavType.Projects },
    { path: `/${NavType.About}`, name: NavType.About },
    { path: `/${NavType.Contact}`, name: NavType.Contact },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="flex flex-row">
          {navLinks.map((link) => (
            <li key={link.path} className="w-full p-3 nav-item">
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
