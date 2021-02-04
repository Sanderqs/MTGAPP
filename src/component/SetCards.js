import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDraft, updateCard, setStandard, setEdh } from "../reducers/land";
//Toekomst vink toevoegen o je land te locken en funtie om onderlinge kaarten
// altijd het totaal, de total cards zijn.
const SetCards = (props) => {
  const cards = useSelector((state) => state.landReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Set Mode</h1>
      <div>
        <button onClick={() => dispatch(setDraft())}>Draft</button>
        <br></br>
        <button onClick={() => dispatch(setStandard())}>Standard</button>
        <button onClick={() => dispatch(setEdh())}>EDH</button>
      </div>

      <div>
        <div>
          land
          <input
            type="number"
            value={cards.land}
            onChange={(e) => {
              dispatch(updateCard("land", Number(e.target.value)));
            }}
          />
        </div>
        <div>
          nonland
          <input
            type="number"
            min="0"
            value={cards.nonland}
            onChange={(e) => {
              dispatch(updateCard("nonland", Number(e.target.value)));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SetCards;
// onChange={(e) => {
//             dispatch(updateDevotion(color, e.target.value));
