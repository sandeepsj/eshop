import React, { Component } from "react";
class GeoLocation extends Component {
  state = {};
  render() {
    return (
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
        <div className="bg-white relative flex flex-wrap py-6">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
              ADDRESS
            </h2>
            <p className="leading-relaxed">
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
              EMAIL
            </h2>
            <a className="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
    );
  }
}

export default GeoLocation;
