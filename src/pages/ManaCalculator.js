import React from "react";
import Devotion from "../component/Devotion";
import SetCards from "../component/SetCards";

import TotalCards from "../component/TotalCards";

const ManaCalculator = () => {
  return (
    <div>
      <SetCards />
      <TotalCards />
      <Devotion />
    </div>
  );
};

export default ManaCalculator;
