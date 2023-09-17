import React, { useState } from "react";
import Login from "./Login";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky-header">
        <div className="left">
          <button className="logo-title" onClick={scrollToTop}>
            Your Website
          </button>
        </div>
        <div className="right">
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("pricing")}>Pricing</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
          <button className="login-button" onClick={openModal}>
            Login
          </button>
        </div>
      </header>
      <Login isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
