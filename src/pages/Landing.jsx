import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Section2 from "../components/Section2";

const Landing = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Landing;
