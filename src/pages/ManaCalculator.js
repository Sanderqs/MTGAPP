import React from "react";
import Devotion from "../component/Devotion";
import Distribution from "../component/Distribution";
import SetCards from "../component/SetCards";

const ManaCalculator = () => {
  return (
    <div>
      <SetCards />

      <Devotion />
      <Distribution />
    </div>
  );
};

export default ManaCalculator;
