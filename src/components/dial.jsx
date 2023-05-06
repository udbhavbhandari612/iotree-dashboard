import React, { useState } from "react";

export default function Dial({
  pin = "Temperature",
  min,
  max,
  unit = "°C",
  value = 20,
  threshhold = 0,
}) {
  const [strokeOffset, setStrokeOffset] = useState(5);

  return (
    <div className="dial-container">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle
          cx="7rem"
          cy="7rem"
          r="6rem"
          strokeDashoffset={`-${strokeOffset}rem`}
        />
      </svg>
      <div className="outer">
      <div className="text">{`${value}${unit}`}</div>
        <div className="inner"></div>
      </div>
      <div className="pin">{pin}</div>
    </div>
  );
}
