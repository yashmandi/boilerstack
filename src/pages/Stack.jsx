import React from "react";
import NavbarComponent from "../components/NavbarComponent";

const Stack = () => {
  return (
    <div>
      <NavbarComponent />
      <div>
        <div>
          <h1 className="text-2xl text-center text-white font-bold pt-16">
            Popular Templates
          </h1>
          <div className="mt-10 grid p-14 grid-cols-1 justify-center gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
       
            <div className="h-12">
              <a href="#" className="group border border-gray-900 rounded-md transition-all relative block bg-[#050505]">
                <img
                  alt=""
                  src=""
                  className="absolute inset-0  w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className=" p-2 sm:p-6 lg:p-8">
                  {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    Vite + React
                  </p> */}

                  <p className="text-xl font-bold text-white sm:text-2xl">
                    Vite + React
                  </p>

                  <div className="mt-32">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Omnis perferendis hic asperiores quibusdam quidem
                        voluptates doloremque reiciendis nostrum harum.
                        Repudiandae?
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
