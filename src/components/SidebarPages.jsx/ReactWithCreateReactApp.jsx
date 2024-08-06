import React from "react";

const ReactWithCreateReactApp = () => {
  return (
    <div className="p-6 text-white pr-64">
      <h1 className="text-2xl font-bold mb-4">React with Create React App</h1>
      <p className="mb-4 text-sm">
        Create React App is an officially supported way to create single-page
        React applications. It offers a modern build setup with no
        configuration.
      </p>
      <p className="mb-4 text-sm">
        This boilerplate includes a basic setup with all the necessary
        configurations to get you started with a React project using Create
        React App.
      </p>
      <h2 className="text-xl font-bold mb-2">
        Getting Access to the Boilerplate
      </h2>
      <p className="mb-4 text-sm">
        You can access the boilerplate code from our GitHub repository. Simply
        click the button below to visit the repository.
      </p>
      <a
        href="https://github.com/yashmandi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded"
      >
        View on GitHub
      </a>
      <h2 className="text-xl font-bold mt-6 mb-2">
        How to Clone the Repository
      </h2>
      <p className="mb-4 text-sm">
        To clone the repository, follow these steps:
      </p>
      <ol className="list-decimal ml-5 mb-4 text-sm">
        <li>Open your terminal or command prompt.</li>
        <li>
          Run the following command:{" "}
          <code>git clone https://github.com/your-repo-link.git</code>
        </li>
        <li>
          Navigate to the project directory: <code>cd your-repo-name</code>
        </li>
        <li>
          Install the dependencies: <code>npm install</code>
        </li>
        <li>
          Start the development server: <code>npm start</code>
        </li>
      </ol>
      <h2 className="text-xl font-bold mb-2">What's Included</h2>
      <ul className="list-disc ml-5 text-sm">
        <li>Basic project structure</li>
        <li>Essential configurations and scripts</li>
        <li>Pre-configured ESLint and Prettier setup</li>
        <li>Sample components and CSS for quick start</li>
      </ul>
    </div>
  );
};

export default ReactWithCreateReactApp;
