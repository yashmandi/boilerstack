import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";

const Landing = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Section />
      <Footer />
    </div>
  );
};

export default Landing;
