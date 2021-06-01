import React from "react";

//Styles
import { StyledDiceImage, StyledRollingDice } from "./DiceElements";

const Dice = () => {
  const rollDice = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  const rollDice6 = () => rollDice(1, 6);
  return (
    <div>
      <StyledDiceImage
        className="Dice"
        src={require(`../assets/${"dice" + rollDice6()}.png`).default}
        alt="kees"
      />
      <StyledRollingDice />
    </div>
  );
};

export default Dice;
