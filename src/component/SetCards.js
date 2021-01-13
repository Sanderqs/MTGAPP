import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDraft, updateCard } from "../reducers/land";
import { setStandard } from "../reducers/land";
import { setEdh } from "../reducers/land";

const SetCards = (props) => {
  const cards = useSelector((state) => state.landReducer);
  const dispatch = useDispatch();
  console.log(cards);

  return (
    <div>
      <h1>Set Mode</h1>
      <div>
        <button onClick={() => dispatch(setDraft())}>Draft</button>
        <button onClick={() => dispatch(setStandard())}>Standard</button>
        <button onClick={() => dispatch(setEdh())}>EDH</button>
      </div>

      <div>
        {Object.entries(cards).map(([card, type]) => (
          <div>
            {card}
            <input
              key={card}
              type="number"
              value={type}
              onChange={(e) => {
                dispatch(updateCard(card, e.target.value));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetCards;
// onChange={(e) => {
//             dispatch(updateDevotion(color, e.target.value));
