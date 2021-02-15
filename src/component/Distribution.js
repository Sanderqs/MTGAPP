import React from "react";
import "./Distribution.css";

import { useSelector } from "react-redux";
const Distribution = (props) => {
  const devotion = useSelector((state) => state.devotionReducer);
  const total = useSelector((state) => state.landReducer);
  const totalLand = total.land;

  const totalDevotion = Object.values(devotion).reduce(
    (a, b) => parseInt(a) + parseInt(b)
  );

  return (
    <div>
      <h1>Mana Distribution</h1>
      {Object.entries(devotion).map(([color, amount]) => (
        <>
          {color} Mana{" "}
          <input
            type="number"
            value={Math.round((totalLand / totalDevotion) * amount)}
            key={color}
            className={color}
            readOnly
          />
          <br></br>
        </>
      ))}
    </div>
  );
};

export default Distribution;
