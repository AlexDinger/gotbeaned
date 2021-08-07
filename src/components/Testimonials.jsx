import React from "react";
import Carousel from "./Carousel";
import Quote from "./Quote";

const Testimonials = () => {
  return (
    <section className=" bg-gray-800 w-full flex flex-col justify-between items-center  text-white py-20 md:px-96 px-4 space-y-12">
      <h2 className="text-3xl uppercase text-center">
        See what our customers have to say
      </h2>
      <Carousel>
        <Quote
          quote="What the hell is wrong with you people"
          name="Charles Wayne"
        />
        <Quote
          quote="What the hell is wrong with you people"
          name="Anthony Little"
        />
        <Quote
          quote="What the hell is wrong with you people"
          name="Barbra Davis"
        />
        <Quote
          quote="What the hell is wrong with you people"
          name="Paul Haul"
        />
      </Carousel>
    </section>
  );
};

export default Testimonials;
