import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />

      <main className="flex-grow flex items-center justify-center bg-[#0d0d0d]">
        <div className="max-w-screen-xl px-4 py-8 pl-1 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-2 md:gap-8">
            {/* Starter Plan */}
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-[#151515]">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-bold text-white">
                  Starter
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 text-sm text-white">
                  Kickstart your projects with essential features
                </p>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    20$
                  </strong>
                  <span className="text-sm font-medium text-white">/month</span>
                </p>
                <a
                  className="mt-4 block rounded-md transition-all bg-[#202020] px-12 py-3 text-center text-sm font-medium text-white hover:bg-[#0d0d0d] hover:text-[#ffffff]  sm:mt-6"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-white sm:text-xl">
                  What's included:
                </p>
                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">
                      Access to Basic Templates
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Standard Support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Email support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-white">Email Support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-white">Help Center Access</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-white">Community access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-[#151515]">
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-bold text-white">
                  Pro
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 text-sm text-white">
                  Unlock advanced tools and premium support.
                </p>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    30$
                  </strong>
                  <span className="text-sm font-medium text-white">/month</span>
                </p>
                <a
                  className="mt-4 block rounded-md transition-all bg-[#202020] px-12 py-3 text-center text-sm font-medium text-white hover:bg-[#0d0d0d] hover:text-[#ffffff]  sm:mt-6"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-white sm:text-xl">
                  What's included:
                </p>
                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Basic + Advanced Templates</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">5GB of storage</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Email support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Priority Support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Premium Integrations</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Help center access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            {/* <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-[#151515]">
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-white">
                  Enterprise
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">
                    50$
                  </strong>
                  <span className="text-sm font-medium text-white">/month</span>
                </p>
                <a
                  className="mt-4 block rounded-md transition-all bg-[#202020] px-12 py-3 text-center text-sm font-medium text-white hover:bg-[#0d0d0d] hover:text-[#ffffff]  sm:mt-6"
                  href="#"
                >
                  Get Started
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-white sm:text-xl">
                  What's included:
                </p>
                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Unlimited users</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">50GB of storage</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Priority email support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">Help center access</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">24/7 phone support</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-white">
                      Priority community access
                    </span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
