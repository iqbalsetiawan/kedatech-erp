import React from "react";
import HomeImg from "../assets/home.svg";
import "../style/Home.css";

function Home() {
  return (
    <section id="" className="section">
      <div className="container">
        <div className="content-image">
          <img src={HomeImg} alt="Home" />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero
            dolorum harum! Nihil perferendis corporis molestias asperiores, modi
            iste quod dolore incidunt praesentium at quam? Quidem quam itaque
            eligendi ipsam!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
