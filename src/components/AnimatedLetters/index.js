import React, { useState } from "react";

export default function WordAnimation({ word, animated }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <span>
      {word.split("").map((letter, index) => (
        <span
          key={index}
          className={index === hoveredIndex ? `${animated}` : ""}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
