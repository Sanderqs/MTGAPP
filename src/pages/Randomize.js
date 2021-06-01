import React from "react";

//Import Components
import CoinFlip from "../component/CoinFlip";
import Dice from "../component/Dice";


const Randomize = () => {
  return (
    <div>
      <CoinFlip />
      <Dice />
    </div>
  );
};

export default Randomize;
