import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "../reducers/land";

const TotalCards = () => {
  const cards = useSelector((state) => state.landReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        total
        <input
          type="number"
          value={cards.land + cards.nonland}
          onChange={(e) => {
            dispatch(updateTotal(Number(e.target.value)));
          }}
        />
      </div>
    </div>
  );
};

export default TotalCards;
