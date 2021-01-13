import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLand } from "../reducers/card";

const TotalCards = (props) => {
  const total = useSelector((state) => state.cardReducer);
  // const cards = useSelector((state) => state.landReducer);
  const dispatch = useDispatch();
  // console.log(total);
  // const totals = parseInt(cards.land) + parseInt(cards.nonland);

  return (
    <div>
      {Object.entries(total).map(([card, value]) => (
        <div>
          {card}
          <input
            key={card}
            type="number"
            value={value}
            onChange={(e) => {
              dispatch(updateLand(card, e.target.value));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TotalCards;
