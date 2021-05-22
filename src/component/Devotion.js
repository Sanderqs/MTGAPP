import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateDevotion } from "../reducers/devotion";

//import stykes
import { StyledH1, StyledInput, StyledSetMode } from "./SetCardsElements";
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
