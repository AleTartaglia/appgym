import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import Plan from "./Plan/Plan";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <Plan key={i} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
