import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <NavbarComponent />
      <div className="p-10 mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">About BoilerStack</h1>
        <p className="mb-4 text-sm">
          BoilerStack is a comprehensive collection of boilerplates for various
          web development frameworks and libraries. The goal is to provide
          developers with a starting point for their projects, reducing the
          initial setup time and allowing them to focus on building features.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Project Goals</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li className="mb-2">
            Offer a variety of boilerplate projects for different tech stacks.
          </li>
          <li className="mb-2">
            Ensure all boilerplates are up-to-date with the latest versions of
            frameworks and libraries.
          </li>
          <li className="mb-2">
            Provide clear instructions and best practices for getting started
            with each boilerplate.
          </li>
          <li className="mb-2">
            Make the development process faster and more efficient for
            developers.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-4">Features</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li className="mb-2">
            Ready-to-use boilerplates for React, Vue, Angular, and more.
          </li>
          <li className="mb-2">
            Integration with popular CSS frameworks like Tailwind CSS.
          </li>
          <li className="mb-2">
            Detailed setup instructions for each boilerplate.
          </li>
          <li className="mb-2">
            Options to clone from GitHub or download a pre-packaged ZIP file
            with dependencies.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside ml-4 text-sm">
          <li className="mb-2">React</li>
          <li className="mb-2">Vue</li>
          <li className="mb-2">Angular</li>
          <li className="mb-2">Tailwind CSS</li>
          <li className="mb-2">Vite</li>
          <li className="mb-2">Create React App</li>
          <li className="mb-2">Angular CLI</li>
          <li className="mb-2">ESLint and Prettier</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-4">Contact</h2>
        <p className="mb-4 text-sm">
          For any questions or feedback, feel free to reach out to us via our{" "}
          <a href="https://github.com/your-repo-link" className="text-blue-500">
            GitHub repository
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
