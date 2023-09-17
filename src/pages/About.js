import React from "react";
import Team from "../assets/team.svg";
import "../style/About.css";

const tiers = [
  {
    title: "TIER 1 / Basic",
    features: [
      "Record incoming products.",
      "Record outgoing products.",
      "Track profit margins.",
    ],
  },
  {
    title: "TIER 2 / Business",
    features: [
      "Record both incoming and outgoing products.",
      "Monitor profit margins.",
      "Analyze sales data with interactive charts.",
      "24/7 customer support.",
    ],
  },
  {
    title: "TIER 3 / Entrepreneur",
    features: [
      "Record both incoming and outgoing products.",
      "Track profit margins.",
      "Utilize advanced sales analysis tools with interactive charts.",
      "Access round-the-clock customer support.",
      "Export data to Excel for comprehensive analysis.",
      "Leverage AI for income predictions.",
    ],
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="content">
          <h1>About Us</h1>
          <p>
            Welcome to our platform, a website designed to function as an ERP
            system, simplifying the daily operations of entrepreneurs by
            meticulously recording every inbound and outbound product
            transaction and tracking daily profits.
          </p>
          <p>
            Our startup offers a versatile TIER system, allowing customers to
            choose from different product categories/levels tailored to their
            needs. Let's explore these tiers:
          </p>
          <div className="about-cards">
            {tiers.map((tier, index) => (
              <div className="about-card" key={index}>
                <h3>{tier.title}</h3>
                <ul>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="content-image">
          <img src={Team} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default About;
