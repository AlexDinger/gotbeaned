import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Page from "../components/Page";
import HowTo from "../components/HowTo";

library.add(fab, faBars, faShoppingCart, faTimes);

const Index = () => {
  return (
    <Page>
      <Header />
      <HowTo />
    </Page>
  );
};

export default Index;
