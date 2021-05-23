import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Card = () => {
  const rules = useSelector((state) => state.cardReducer.cardRulings);
  const dispatch = useDispatch();

  console.log(rules);
  return <div></div>;
};

export default Card;
