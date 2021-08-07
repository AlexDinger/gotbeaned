import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./home";

library.add(fab, faBars, faShoppingCart, faTimes);

const Index = () => {
  return <Home />;
};

export default Index;
