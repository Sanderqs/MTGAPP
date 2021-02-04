import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDevotion } from "../reducers/devotion";

const Devotion = (props) => {
  const devotion = useSelector((state) => state.devotionReducer);
  const dispatch = useDispatch();
  console.log(devotion);
  return (
    <div>
      <h1>Set Devotion</h1>
      <ul style={{ listStyleType: "none" }}>
        {Object.entries(devotion).map(([color, amount]) => (
          <li>
            <hr />
            <strong>{color}</strong>

            <input
              type="number"
              value={amount}
              onChange={(e) => dispatch(updateDevotion(color, e.target.value))}
              className={color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Devotion;
