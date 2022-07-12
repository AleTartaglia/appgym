import React from "react";
import "./Plan.css";
import Feature from "../Feature/Feature";
const Plan = ({ plan }) => {
  return (
    <div className="plan">
      {plan.icon}
      <span>{plan.name}</span>
      <span>$ {plan.price}</span>
      <div className="features">
        {plan.features.map((feature, i) => (
          <Feature feature={feature} key={i} />
        ))}
      </div>
      <div>
        <span>See more benefits -&gt;</span>
      </div>
      <button className="btn">Join now</button>
    </div>
  );
};

export default Plan;
