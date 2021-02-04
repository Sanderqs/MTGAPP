import React from "react";
// import * from '../assets'

const Randomize = () => {
  const rollDice = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
  // for (let i = 0; i < 5; i++);

  const rollDice6 = () => rollDice(1, 6);
  const rollDice20 = () => rollDice(1, 20);

  const diceImage = require("../assets/dice" + rollDice6() + ".png");
  return (
    <div>
      {/* hallo randomize {rollDice20()}
      <br></br>
      {diceImage} */}
      <img
        className="Dice"
        src={require(`../assets/${"dice" + rollDice6()}.png`).default}
        alt="kees"
      />
    </div>
  );
};

export default Randomize;
