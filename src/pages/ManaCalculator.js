import React from "react";
import Devotion from "../component/Devotion";
import Distribution from "../component/Distribution";
import SetCards from "../component/SetCards";

import TotalCards from "../component/TotalCards";

const ManaCalculator = () => {
  return (
    <div>
      <SetCards />
      <TotalCards />
      <Devotion />
      <Distribution />
    </div>
  );
};

export default ManaCalculator;
