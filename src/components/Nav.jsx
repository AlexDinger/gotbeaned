import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../images/logo.png";
import NavMenu from "../components/NavMenu";

const Shadow = ({ setOpen }) => {
  return (
    <div
      className="absolute top-0 left-0 bg-opacity-50 bg-black h-screen w-screen z-40"
      onClick={() => setOpen(false)}
    ></div>
  );
};

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="flex flex-row items-center fixed top-0 left-0 text-white w-full h-12 bg-bean-brown">
      <div
        className="flex justify-center items-center px-5 h-full cursor cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <FontAwesomeIcon icon="bars" size="lg" />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src={logo} className="w-full " style={{ maxWidth: "8rem" }} />
      </div>
      <div className="flex justify-center items-center h-full px-5 bg-tan text-bean-brown">
        <FontAwesomeIcon icon="shopping-cart" size="lg" />
      </div>
      <NavMenu in={isOpen} setOpen={setOpen} />
      {isOpen ? <Shadow setOpen={setOpen} /> : ""}
    </nav>
  );
};

export default Nav;
