import React from "react";

const Quote = ({ quote, name }) => {
  return (
    <blockquote className="flex flex-col justify-between items-center p-4 text-center relative text-2xl">
      <div className="z-10 style-quote quote-left" aria-hidden="true">
        &ldquo;
      </div>
      <p className="italic font-serif mb-10 z-20">{quote}</p>
      <div className="z-10 style-quote quote-right" aria-hidden="true">
        &rdquo;
      </div>
      <cite className="font-medium font-mono w-full text-right pr-4">{`- ${name}`}</cite>
    </blockquote>
  );
};

export default Quote;
