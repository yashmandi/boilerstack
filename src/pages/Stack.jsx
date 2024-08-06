import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Sidebar from "./Sidebar";
import Intro from "./Intro";
import ReactWithCreateReactApp from "../components/SidebarPages.jsx/ReactWithCreateReactApp";
import CreateReactAppWithTailwind from "../components/SidebarPages.jsx/CreateReactAppWithTailwind";
import Footer from "../components/Footer";


const Stack = () => {
  const [activeTab, setActiveTab] = useState("intro");

  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return <Intro />;
      case "react-with-create-react-app":
        return <ReactWithCreateReactApp />;
      case "react-with-create-react-app-tailwind":
        return <CreateReactAppWithTailwind />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="relative">
      <NavbarComponent className="fixed top-0 w-full" />
      <Sidebar setActiveTab={setActiveTab} className="fixed top-20 left-0 h-full" />
      <div className="absolute top-20 left-80 right-0 z-10 bg-lightblue p-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default Stack;
