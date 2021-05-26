import React from "react";
//import dependencies
import { useSelector } from "react-redux";

//Import styles
import "./Distribution.css";
import { StyledSetMode, StyledH1 } from "./SetCardsElements";

//TODO:
// 1. Pas als er input is Mana Distribution weergeven
// 2.Styled Components toevoegen
// 3. Opmaak weergave

const Distribution = (props) => {
  const devotion = useSelector((state) => state.devotionReducer);
  const total = useSelector((state) => state.landReducer);
  const totalLand = total.land;

  const totalDevotion = Object.values(devotion).reduce(
    (a, b) => parseInt(a) + parseInt(b)
  );

  return (
    <div>
      <StyledH1>Mana Distribution</StyledH1>
      <StyledSetMode>
        {Object.entries(devotion).map(([color, amount]) => (
          <>
            <input
              type="number"
              value={Math.round((totalLand / totalDevotion) * amount)}
              key={color}
              className={color}
              readOnly
            />
          </>
        ))}
      </StyledSetMode>
    </div>
  );
};

export default Distribution;
