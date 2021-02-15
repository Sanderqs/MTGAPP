import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalLife } from "../reducers/counter";

//TODO text input naar number input zonder "inputarrows"
//Toekomst, geschiedenis van lifeloss/gain in apart scherm

const Counters = (props) => {
  const life = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {Object.entries(life).map(([player, totalPlayerLife]) => (
        <li style={{ listStyleType: "none" }}>
          <strong>{player}</strong>
          <input
            type="number"
            value={totalPlayerLife}
            onChange={(e) => dispatch(updateTotalLife(player, e.target.value))}
            className={player}
          />
        </li>
      ))}
    </div>
  );
};

export default Counters;
