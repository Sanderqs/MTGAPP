import React from "react";
// import * from '../assets'

const Randomize = () => {
  const rollDice = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  const num = rollDice(1, 2);
  console.log(num);
  switch (num) {
    case 1:
      console.log("kop");
      break;
    case 2:
      console.log("munt");
      break;
    default:
      break;
  }

  const rollDice6 = () => rollDice(1, 6);
  const rollDice20 = () => rollDice(1, 20);

  return (
    <div>
      <img
        className="Dice"
        src={require(`../assets/${"dice" + rollDice6()}.png`).default}
        alt="kees"
      />
    </div>
  );
};

export default Randomize;
