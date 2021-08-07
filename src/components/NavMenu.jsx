import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Transition } from "react-transition-group";
import NavItem from "../components/NavItem";

const NavMenu = ({ setOpen, in: isOpen }) => {
  const [isEntered, setEntered] = useState(false);

  const duration = 100;

  const defaultStyle = {
    transition: `all ${duration}ms linear`,
    opacity: 1,
  };

  const transitionStyles = {
    entering: { transform: `translate(-208px)` },
    exiting: { transform: `translate(-208px)` },
  };

  return (
    <Transition
      in={isOpen}
      timeout={duration}
      mountOnEnter
      unmountOnExit
      onEntered={() => setEntered(true)}
      onExited={() => setEntered(false)}
    >
      {(state) => (
        <aside
          className="absolute top-0 h-screen bg-white flex flex-col text-black z-50"
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <div
            className="flex justify-end items-center  h-12 px-5 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon="times" size="lg" />
          </div>
          <div
            className={`transition-opacity duration-1000 h-full ${
              isEntered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="p-5 flex flex-col h-full justify-between">
              <ul className="space-y-5 font-semibold text-4xl">
                <NavItem page="home" />
                <NavItem page="products" />
                <NavItem page="support" />
                <NavItem page="tracker" />
              </ul>
              <div className="space-y-3">
                <h6 className="font-semibold text-center">
                  Issues with your order?
                </h6>
                <button className="block w-full bg-red-500 hover:bg-red-600 font-semibold rounded-sm px-4 py-2 text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </aside>
      )}
    </Transition>
  );
};

export default NavMenu;
