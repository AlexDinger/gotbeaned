import React from "react";
import background from "../images/header_bg.png";

const Header = () => {
  return (
    <header
      className="px-5 md:px-96 md:py-32 flex flex-col py-10 bg-tan text-bean-brown"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <h1 className="font-extrabold text-6xl md:text-9xl">
        We will mail beans to your friends.
      </h1>
      <h2 className="font-semibold text-3xl mt-5 md:text-5xl md:text-right md:mt-14 md:font-bold">
        And there is nothing you can do about it.
      </h2>
      <button className="rounded-sm bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-3 self-center block w-full md:w-72 mt-14 md:mt-24 mb-6">
        Get Started
      </button>
    </header>
  );
};

export default Header;
