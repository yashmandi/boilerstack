import React from "react";

const Intro = () => {
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">Introduction</h1>
      <div className="text-white mt-8 text-sm">
        <p>
          Easily access and generate customizable templates for any tech stack
          with BoilerStack. Simplify your development process with ready-to-use
          code snippets.
        </p>
        <br />
        <p>
          This is NOT just another template repository. It's a comprehensive
          collection of fully customizable boilerplates designed to jumpstart
          your projects.
        </p>
        <br />

        <p>What do you mean by not just another template repository?</p>
        <br />

        <p>
          I mean you don’t have to download a package or use a CLI tool. It’s
          not available or distributed via npm.
        </p>
        <br />

        <p>
          Pick the boilerplates you need. Copy and paste the code into your
          project and tailor it to your specific requirements. The code is
          entirely yours.
        </p>
        <br />

        <p className="italic">
          Use this as a foundation to build your own projects more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Intro;
