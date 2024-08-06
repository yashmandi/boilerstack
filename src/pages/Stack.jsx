import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Sidebar from "./Sidebar";
import Intro from "./Intro";

const Stack = () => {
  return (
    <div className="relative">
      <NavbarComponent />
      <Sidebar />
      <div className="absolute top-20 left-80 z-10 bg-lightblue p-5">
        <Intro />
      </div>
    </div>
  );
};

export default Stack;