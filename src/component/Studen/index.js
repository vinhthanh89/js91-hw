import { useState } from "react";

import "./style.css";

const Studen = () => {
  const [studen, setStuden] = useState({
    name: "John",
    level: 1,
    isActive: true,
  });
  const { name, level, isActive } = studen;

  const handleIncreaseLevel = () => {
    setStuden((prev) => {
      return {
        ...prev,
        level: level + 1,
      };
    });
  };

  const handleDecreaseLevel = () => {
    if (level > 1) {
      setStuden((prev) => {
        return {
          ...prev,
          level: level - 1,
        };
      });
    }
  };

  const handleChangeIsActive = () => {
    setStuden((prev) => {
        return {
            ...prev,
            isActive: !isActive
        }
    })
  };

  return (
    <div className={`studen-container ${isActive ? "studen--active" : ""}`}>
      <div className="studen-info">Name : {name}</div>
      <div className="studen-info">Level : {level}</div>
      <div className="btn-container">
        <div className="updown">
          <button onClick={handleIncreaseLevel} className="btn btn--increase">
            Increase +
          </button>
          <button onClick={handleDecreaseLevel} className="btn btn--decrease">
            Decrease -
          </button>
        </div>
        <div className="changestatus">
            <button onClick={handleChangeIsActive} className="btn">Change Status</button>
        </div>
      </div>
    </div>
  );
};

export default Studen;
