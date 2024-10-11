import React from "react";
import { useState, useEffect } from "react";
import "./process.css";

const Process = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const move = () => {
      if (width >= 100) {
        return;
      }
      setWidth(width + 1);
    };

    const intervalId = setInterval(move, 40);
    return () => clearInterval(intervalId);
  }, [width]);

  return (
    <div id="maindiva">
      <div>
        <div className="w3-light-grey outerBar">
          <div
            id="myBar"
            className="w3-container w3-green"
            style={{ height: "30px", width: `${width}%` }}
          />
        </div>
        <button
          className="w3-button w3-light-grey"
          onclick={() => setWidth(0)}
          style={{ display: "none" }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Process;
