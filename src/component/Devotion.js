import React from "react";
//import dependencies
import { useSelector, useDispatch } from "react-redux";

//import Reducers
import { updateDevotion } from "../reducers/devotion";

//import styles
import { StyledH1, StyledInput, StyledSetMode } from "./SetCardsElements";

//TODO:
// 1. mooiere input

const Devotion = (props) => {
  const devotion = useSelector((state) => state.devotionReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledH1>Set Devotion</StyledH1>
      <StyledSetMode>
        {Object.entries(devotion).map(([color, amount]) => (
          <StyledInput
            type="number"
            value={amount}
            onChange={(e) => dispatch(updateDevotion(color, e.target.value))}
            className={color}
          />
        ))}
      </StyledSetMode>
    </div>
  );
};

export default Devotion;
