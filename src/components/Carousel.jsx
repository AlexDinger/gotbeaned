import React from "react";
import { useState, useEffect } from "react";

const Carousel = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="w-full flex items-center justify-center text-2xl">
      {children[currentItem]}
    </div>
  );
};

export default Carousel;
