import React from "react";
import Header from "../components/Header";
import HowTo from "../components/HowTo";
import Page from "../components/Page";
import Testimonials from "../components/Testimonials";

const home = () => {
  return (
    <Page>
      <Header />
      <Testimonials />
      <HowTo />
    </Page>
  );
};

export default home;
