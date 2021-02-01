import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrLife, decrLife, resetLife } from "../reducers/counter";

//TODO text input naar number input zonder "inputarrows"
//Toekomst, geschiedenis van lifeloss/gain in apart scherm
//Toekomst, reset knop
const Counters = (props) => {
  const life = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      Slayer1
      <button onClick={() => dispatch(decrLife())}>-</button>
      <input
        type="text"
        value={life.PlayerOne}
        // onChange={(e) => {
        //   dispatch(updateCard("land", Number(e.target.value)));
        // }}
      />
      <button onClick={() => dispatch(incrLife())}>+</button>
      <button onClick={() => dispatch(resetLife())}>Reset</button>
    </div>
  );
};

export default Counters;
