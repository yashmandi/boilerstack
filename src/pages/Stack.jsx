import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Sidebar from "./Sidebar";
import Intro from "./Intro";
import ReactWithCreateReactApp from "../components/SidebarPages.jsx/ReactWithCreateReactApp";
import CreateReactAppWithTailwind from "../components/SidebarPages.jsx/CreateReactAppWithTailwind";
import Footer from "../components/Footer";
import ReactWithVite from "../components/SidebarPages.jsx/ReactWithVite";
import ReactViteWithTailwind from "../components/SidebarPages.jsx/ReactViteWithTailwind";
import ReactViteWithRedux from "../components/SidebarPages.jsx/ReactViteWithRedux";
import Vue3WithVite from "../components/SidebarPages.jsx/Vue3WithVite";
import Vue3WithVueCli from "../components/SidebarPages.jsx/Vue3WithVueCli";
import VueWithTailwind from "../components/SidebarPages.jsx/VueWithTailwind";
import AngularWithAngularCLI from "../components/SidebarPages.jsx/AngularWithAngularCLI";
import SvelteWithVite from "../components/SidebarPages.jsx/SvelteWithVite";
import Sveltekit from "../components/SidebarPages.jsx/Sveltekit";


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
      case "react-with-vite":
        return <ReactWithVite />;
      case "react-vite-with-tailwind":
        return <ReactViteWithTailwind />;
      case "react-vite-with-redux":
        return <ReactViteWithRedux />;
      case "vue-3-with-vite":
        return <Vue3WithVite />;
      case "vue-3-with-vue-cli":
        return <Vue3WithVueCli />;
      case "vue-with-tailwind":
        return <VueWithTailwind />;
      case "angular-with-angular-cli":
        return <AngularWithAngularCLI />;
      case "svelte-with-vite":
        return <SvelteWithVite />;
      case "sveltekit":
        return <Sveltekit />;
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