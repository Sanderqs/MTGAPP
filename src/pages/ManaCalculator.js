import React from "react";
import SetCards from "../component/SetCards";
import SetDevotion from "../component/SetDevotion";
import TotalCards from "../component/TotalCards";

const ManaCalculator = () => {
  return (
    <div>
      <SetDevotion />
      <SetCards />
      <TotalCards />
    </div>
  );
};

export default ManaCalculator;
