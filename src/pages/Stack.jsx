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
import NextWithTailwind from "../components/SidebarPages.jsx/NextWithTailwind";
import NextWithTypescript from "../components/SidebarPages.jsx/NextWithTypescript";
import ExpressWithMongo from "../components/SidebarPages.jsx/ExpressWithMongo";
import ExpressWithTypescript from "../components/SidebarPages.jsx/ExpressWithTypescript";
import Koa from "../components/SidebarPages.jsx/Koa";
import MernStack from "../components/SidebarPages.jsx/MernStack";
import DjangoWithRest from "../components/SidebarPages.jsx/DjangoWithRest";

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
      case "nextjs-with-tailwind":
        return <NextWithTailwind />;
      case "nextjs-with-typescript":
        return <NextWithTypescript />;
      case "express-with-mongodb":
        return <ExpressWithMongo />;
      case "express-with-typescript":
        return <ExpressWithTypescript />;
      case "koa":
        return <Koa />;
      case "mern-stack":
        return <MernStack />;
      case "django-with-rest":
        return <DjangoWithRest />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent className="fixed top-0 w-full" />
      <div className="flex flex-1">
        <Sidebar
          setActiveTab={setActiveTab}
          className="fixed top-20 left-0 h-full"
        />
        <main className="flex-1 ml- mt- p-5 bg-lightblue z-10">
          {renderContent()}
        </main>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};

export default Stack;
