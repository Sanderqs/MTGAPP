import React from "react";

//Import Components
import Counters from "../component/Counters";

const LifeCounter = (props) => {
  return (
    <div>
      <Counters />
      <Counters />
    </div>
  );
};

export default LifeCounter;
