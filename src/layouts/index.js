import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const index = ({ children }) => {
  return (
    <div className="">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default index;
