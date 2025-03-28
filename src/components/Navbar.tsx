import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/components/Navbar.scss";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar ">
        <div className="container flex">
          <div className="logo">{/* <Logo /> */}</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {/* <Hamburger /> */}
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
