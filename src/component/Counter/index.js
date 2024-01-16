import { useState } from "react";

import "./style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClickIncrease = () => {
    setCounter(counter + 1);
  };

  const handleClickDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-container">
      <div className="counter">{counter}</div>
      <div className="btn-container">
        <button onClick={handleClickIncrease} className="btn btn--increase">
          Increase +
        </button>
        <button onClick={handleClickDecrease} className="btn btn--decrease">
          Decrease -
        </button>
      </div>
    </div>
  );
};

export default Counter;
