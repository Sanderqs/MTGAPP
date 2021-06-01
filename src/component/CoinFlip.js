import React from "react";


//TODO:
// plaatje munt/kop toevoegen
//
const CoinFlip = () => {
  const flipCoin = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  const num = flipCoin(1, 2);
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

  return <div></div>;
};

export default CoinFlip;
