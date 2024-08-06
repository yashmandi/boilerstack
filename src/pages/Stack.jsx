import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Sidebar from "./Sidebar";
import Intro from "./Intro";
import ReactWithCreateReactApp from "../components/SidebarPages.jsx/ReactWithCreateReactApp";


const Stack = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return <Intro />;
      case "react-with-create-react-app":
        return <ReactWithCreateReactApp />;
      // case "react-with-vite":
      //   return <ReactWithVite />;
      // case "react-with-tailwind":
      //   return <ReactWithTailwind />;
      // case "react-with-redux":
      //   return <ReactWithRedux />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="relative">
      <NavbarComponent />
      <Sidebar setActiveTab={setActiveTab} />
      <div className="absolute top-20 left-80 right-0 z-10 bg-lightblue p-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default Stack;
