import React from "react";
import Nav from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
import logo from "../assets/images/logo.webp"; // 替换为你的图像路径

const Header: React.FC = () => {
  return (
    <header className="flex justify-around p-5">
      {/* <Breadcrumbs /> */}
      <img src={logo} width={"50px"} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
