import React from "react";

const ReactViteWithTailwind = () => {
  return (
    <div className="pl-4 text-white pr-64">
      <h1 className="text-2xl font-bold mb-4">React with Vite and Tailwind</h1>
      <p className="mb-4 text-sm">
        This boilerplate sets up a React project using Vite for fast builds and
        Tailwind CSS for modern styling, providing a streamlined development
        experience.
      </p>
      <h2 className="text-xl font-bold mt-8">
        Getting Access to the Boilerplate
      </h2>
      <h2 className="text-xl font-bold mt-2 mb-2">How to Get Started</h2>
      <h3 className="text-lg font-semibold mb-2">
        Option 1: Clone from GitHub
      </h3>
      <ol className="list-decimal ml-5 mb-4 text-sm">
        <li className="mb-1">
          Clone the repository:{" "}
          <code className="bg-gray-800 p-0.5 text-xs rounded-md">
            git clone https://github.com/your-repo-link.git
          </code>
        </li>
        <li className="mb-1">
          Navigate to the project directory:{" "}
          <code className="bg-gray-800 p-0.5 text-xs rounded-md">
            cd your-repo-directory
          </code>
        </li>
        <li className="mb-1">
          Install dependencies:{" "}
          <code className="bg-gray-800 p-0.5 text-xs rounded-md">
            npm install
          </code>
        </li>
        <li className="mb-1">
          Start the development server:{" "}
          <code className="bg-gray-800 p-0.5 text-xs rounded-md">
            npm run dev
          </code>
        </li>
      </ol>
      <a
        href="https://github.com/yashmandi/react-vite-with-tailwind"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex justify-center text-sm mb-6 items-center py-2.5 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-[#1b1b1b] bg-[#252525] dark:focus:ring-primary-900"
      >
        View on GitHub
      </a>
      <h3 className="text-lg font-semibold mb-2">
        Option 2: Download ZIP with Dependencies
      </h3>
      <ol className="list-decimal ml-5 mb-4 text-sm">
        <li className="mb-1">
          Download the bundled project from our GitHub repository:{" "}
          <a
            href="https://github.com/your-repo-link/releases/download/v1.0.0/project-bundle.zip"
            className="text-blue-500"
          >
            Download ZIP
          </a>
        </li>
        <li className="mb-1">Unzip the downloaded file.</li>
        <li className="mb-1">Navigate to the project directory.</li>
        <li className="mb-1">
          Start the development server:{" "}
          <code className="bg-gray-800 p-0.5 text-xs rounded-md">
            npm run dev
          </code>
        </li>
      </ol>
      <h2 className="text-xl font-bold mb-2">What's Included</h2>
      <ul className="list-disc ml-5 text-sm">
        <li className="mb-1">Basic project structure</li>
        <li className="mb-1">Essential configurations and scripts</li>
        <li className="mb-1">Pre-configured ESLint and Prettier setup</li>
        <li className="mb-1">Sample components and CSS for quick start</li>
        <li className="mb-1">
          All necessary dependencies pre-installed (for the ZIP option)
        </li>
      </ul>
      <div className="mt-4">
        <a
          href="https://github.com/your-repo-link/releases/download/v1.0.0/project-bundle.zip"
          className="inline-flex justify-center text-sm py-2.5 px-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-[#1b1b1b] bg-[#252525] dark:focus:ring-primary-900"
        >
          Download ZIP with Dependencies
        </a>
      </div>
    </div>
  );
};

export default ReactViteWithTailwind;
