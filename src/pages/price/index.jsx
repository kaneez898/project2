import React, { useState } from "react";
import styled from "./price.module.css";

function PricingSection() {
  const [activePlan, setActivePlan] = useState("monthly");

  return (
    <div className={styled.pricingSection}>
      <div className={styled.contentHeading}>
        <h4 className={styled.smallHeading}>Our Pricing</h4>
        <h2 className={styled.mainHeading}>
          Choose From Our Lowest <br /> Plans and Prices
        </h2>
      </div>

      {/* Toggle Buttons */}
      <div className={styled.toggleBtns}>
        <button
          className={`${styled.toggleBtn} ${
            activePlan === "monthly" ? styled.active : ""
          }`}
          onClick={() => setActivePlan("monthly")}
        >
          Monthly
        </button>
        <button
          className={`${styled.toggleBtn} ${
            activePlan === "yearly" ? styled.active : ""
          }`}
          onClick={() => setActivePlan("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className={styled.pricingCards}>
        {/* Basic Package */}
        <div className={styled.card}>
          <h3 className={styled.packageName}>Basic Package</h3>
          <div className={styled.priceBox}>
            <span className={styled.price}>
              {activePlan === "monthly" ? "$59.00" : "$590.00"}
            </span>
            <span className={styled.period}>
              /{activePlan === "monthly" ? "Monthly" : "Yearly"}
            </span>
          </div>
          <ul>
            <li>Dusting of all surfaces</li>
            <li>Sweeping and mopping floors</li>
            <li>Vacuuming carpets and rugs</li>
            <li>Cleaning of kitchen surfaces</li>
            <li>Cleaning of bathroom fixtures</li>
            <li>Emptying trash bins</li>
          </ul>
          <button className={styled.cardBtn}>Book Now</button>
        </div>

        {/* Enterprise Package */}
        <div className={styled.card}>
          <h3 className={styled.packageName}>Enterprise Package</h3>
          <div className={styled.priceBox}>
            <span className={styled.price}>
              {activePlan === "monthly" ? "$69.00" : "$690.00"}
            </span>
            <span className={styled.period}>
              /{activePlan === "monthly" ? "Monthly" : "Yearly"}
            </span>
          </div>
          <ul>
            <li>All services in the Basic Plan</li>
            <li>Detailed dusting</li>
            <li>Wiping down of kitchen spot</li>
            <li>Cleaning inside the microwave</li>
            <li>Changing bed linens</li>
            <li>Spot cleaning of walls and doors</li>
          </ul>
          <button className={styled.cardBtnGreen}>Book Now</button>
        </div>

        {/* Premium Package */}
        <div className={styled.card}>
          <h3 className={styled.packageName}>Premium Package</h3>
          <div className={styled.priceBox}>
            <span className={styled.price}>
              {activePlan === "monthly" ? "$99.00" : "$990.00"}
            </span>
            <span className={styled.period}>
              /{activePlan === "monthly" ? "Monthly" : "Yearly"}
            </span>
          </div>
          <ul>
            <li>All services in the Clean Plan</li>
            <li>Deep cleaning of kitchen spot</li>
            <li>Baseboards, door frames, & vents</li>
            <li>Organization of closet/pantries</li>
            <li>Carpet & upholstery spot cleaning</li>
            <li>Detailed scrubbing of bathroom</li>
          </ul>
          <button className={styled.cardBtn}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
