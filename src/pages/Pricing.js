import React from "react";
import "../style/Pricing.css";
import PriceImg from "../assets/price.svg";

const pricingPlans = [
  {
    title: "Basic Plan",
    description: `Perfect for getting started only.`,
    price: "Rp2500K/month",
  },
  {
    title: "Pro Plan",
    description: "For businesses that need more.",
    price: "Rp4000K/month",
  },
  {
    title: "Premium Plan",
    description: "Unlimited features and support.",
    price: "Rp8500K/month",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="content-image">
          <img src={PriceImg} alt="Pricing" />
        </div>
        <div className="content">
          <h1>Pricing</h1>
          <p>Choose a plan that suits your needs.</p>
          <div className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <div className="pricing-card" key={index}>
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="price">{plan.price}</div>
                <button className="buy-button">Buy Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
