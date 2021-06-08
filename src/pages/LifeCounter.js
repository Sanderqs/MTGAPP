import React from "react";

//Import Components
import Counters from "../component/Counters";

const LifeCounter = (props) => {
  return (
    <div>
      <Counters className="player1" />
      <Counters className="player2" />
    </div>
  );
};

export default LifeCounter;
