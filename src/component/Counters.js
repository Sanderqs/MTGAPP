import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotalLife } from "../reducers/counter";
import {
  StyledButtonWrapper,
  StyledLifeCounterContainer,
  StyledLifeTotal,
  StyledPlusButton,
  StyledMinButton,
} from "./CounterElements";
//TODO text input naar number input zonder "inputarrows"
//Toekomst, geschiedenis van lifeloss/gain in apart scherm

const Counters = (props) => {
  const life = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  const [count, setCount] = useState(20);
  return (
    <StyledLifeCounterContainer>
      <StyledMinButton onClick={() => setCount(count - 1)}>-</StyledMinButton>

      <StyledLifeTotal>
        <h1>{count}</h1>
      </StyledLifeTotal>

      <StyledPlusButton onClick={() => setCount(count + 1)}>+</StyledPlusButton>
    </StyledLifeCounterContainer>
  );
};

export default Counters;
//  {
//    Object.entries(life).map(([player, totalPlayerLife]) => (
//      <li style={{ listStyleType: "none" }}>
//        <strong>{player}</strong>
//        <input
//          type="number"
//          value={totalPlayerLife}
//          onChange={(e) => dispatch(updateTotalLife(player, e.target.value))}
//          className={player}
//        />
//      </li>
//    ));
//  }
