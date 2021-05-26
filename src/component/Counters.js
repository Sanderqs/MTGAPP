import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateTotalLife } from "../reducers/counter";
import {
  StyledButtonWrapper,
  StyledLifeCounterContainer,
  StyledLifeTotal,
  StyledPlusButton,
  StyledMinButton,
} from "./CounterElements";
//TODO :
// 1. zorg dat ik twee maal de component kan bewaren in localStorage
// 2. fix getal "Selecteren " tijdens klikken op -/+
// 3. Layout liggend scherm
// 4. toch redux gebruiken?
//Toekomst:
// geschiedenis van lifeloss/gain in apart scherm
// Poison Counters toevoegen

const Counters = (props) => {
  // const life = useSelector((state) => state.counterReducer);
  // const dispatch = useDispatch();
  const [count, setCount] = useState(20);

  useEffect(() => {
    const data = localStorage.getItem("life-counter");
    if (data) {
      setCount(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("life-counter", JSON.stringify(count));
  });
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
