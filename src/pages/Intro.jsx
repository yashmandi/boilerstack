import React, { useState } from "react";

const Intro = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is BoilerStack?",
      answer: "BoilerStack is a collection of customizable boilerplates for various tech stacks, designed to speed up your development process."
    },
    {
      question: "How do I access the boilerplates?",
      answer: "You can copy and paste code snippets directly from our site, or download pre-packaged ZIP files with all dependencies included."
    },
    {
      question: "Are the boilerplates regularly updated?",
      answer: "Yes, we ensure that all boilerplates are up-to-date with the latest versions of frameworks and libraries."
    },
    {
      question: "Can I contribute to BoilerStack?",
      answer: "Absolutely! Contributions are welcome. Please check our GitHub repository for more details on how to get involved."
    },
    {
      question: "Do I need to use a CLI tool to get started?",
      answer: "No, you don’t need a CLI tool. You can start by copying code snippets or downloading ZIP files from our site."
    },
    {
      question: "Is BoilerStack free to use?",
      answer: "Yes, all the boilerplates available on BoilerStack are free to use and modify according to your needs."
    }
  ];

  return (
    <div className="px-6 md:pr-64">
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

      <div className="mt-8">
        <h2 className="text-white font-bold text-xl mb-4">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left text-white text-sm font-semibold py-4 px-4 bg-[#0f0f0f] hover:bg-[#141414] transition-all rounded-t-md focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="bg-[#0f0f0f] hover:bg-[#141414] text-white p-4 rounded-b-md text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;