import React, { useState } from "react";

//Styles
import { StyledDiceImage, StyledRollingDice } from "./DiceElements";

const Dice = () => {
  const rollDice = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  const rollDice6 = () => rollDice(1, 6);
  const [roll, setRoll] = useState(1);

  return (
    <div>
      <StyledDiceImage
        className="Dice"
        src={require(`../assets/${"dice" + roll}.png`).default}
        alt="kees"
      />
      <StyledRollingDice onClick={() => setRoll(rollDice6())} />
    </div>
  );
};

export default Dice;
