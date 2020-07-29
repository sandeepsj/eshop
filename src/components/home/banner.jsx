import React, { Component } from "react";

function Banner() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-20 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div
            id="container-width"
            className="flex flex-wrap w-full bg-gray-100 py-32 px-20  relative mb-4"
          >
            <img
              alt="gallery"
              id="image-size"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="https://source.unsplash.com/2200x1200/?business"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Get your business online in just one click
              </h2>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
