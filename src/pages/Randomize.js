import React from "react";

const Randomize = () => {
  function rollDice(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  // for (let i = 0; i < 5; i++);

  const rollDice6 = () => rollDice(1, 6);
  const rollDice20 = () => rollDice(1, 20);
  return (
    <div>
      hallo randomize {rollDice20()}
      <br></br>
      {rollDice6()} ;
    </div>
  );
};

export default Randomize;
