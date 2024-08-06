import React from "react";

const ReactWithCreateReactApp = () => {
  return (
    <div className="p-6 text-white pr-64">
      <h1 className="text-2xl font-bold mb-4">React with Create React App</h1>
      <p className="mb-4 text-sm">
        Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
      </p>
      <p className="mb-4 text-sm">
        This boilerplate includes a basic setup with all the necessary configurations to get you started with a React project using Create React App.
      </p>
      <h2 className="text-xl font-bold mb-2">Getting Access to the Boilerplate</h2>
      <p className="mb-4 text-sm">
        You can access the boilerplate code from our GitHub repository or download a bundled ZIP file that includes all dependencies.
      </p>
      <div className="mb-4">
        <a 
          href="https://github.com/your-repo-link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex justify-center mr-4 text-sm items-center py-2.5 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700  hover:bg-[#1b1b1b] bg-[#252525]  dark:focus:ring-primary-900"
        >
          View on GitHub
        </a>
        <a 
          href="https://github.com/your-repo-link/releases/download/v1.0.0/project-bundle.zip" 
          className="inline-flex justify-center text-sm items-center py-2.5 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700  hover:bg-[#1b1b1b] bg-[#252525]  dark:focus:ring-primary-900"
        >
          Download ZIP with Dependencies
        </a>
      </div>
      <h2 className="text-xl font-bold mt-6 mb-2">How to Get Started</h2>
      <h3 className="text-lg font-semibold mb-2">Option 1: Clone from GitHub</h3>
      <ol className="list-decimal ml-5 mb-4 text-sm">
        <li>Clone the repository: <code>git clone https://github.com/your-repo-link.git</code></li>
        <li>Navigate to the project directory: <code>cd your-repo-directory</code></li>
        <li>Install dependencies: <code>npm install</code></li>
        <li>Start the development server: <code>npm start</code></li>
      </ol>
      <h3 className="text-lg font-semibold mb-2">Option 2: Download ZIP with Dependencies</h3>
      <ol className="list-decimal ml-5 mb-4 text-sm">
        <li>Download the bundled project from our GitHub repository: <a href="https://github.com/your-repo-link/releases/download/v1.0.0/project-bundle.zip" className="text-blue-500">Download ZIP</a></li>
        <li>Unzip the downloaded file.</li>
        <li>Navigate to the project directory.</li>
        <li>Start the development server: <code>npm start</code></li>
      </ol>
      <h2 className="text-xl font-bold mb-2">What's Included</h2>
      <ul className="list-disc ml-5 text-sm">
        <li>Basic project structure</li>
        <li>Essential configurations and scripts</li>
        <li>Pre-configured ESLint and Prettier setup</li>
        <li>Sample components and CSS for quick start</li>
        <li>All necessary dependencies pre-installed (for the ZIP option)</li>
      </ul>
    </div>
  );
};

export default ReactWithCreateReactApp;