import React, { Component } from "react";
class Feedback extends Component {
  state = {};
  render() {
    return (
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Name"
          type="text"
          wtx-context="AAA19CA3-6E92-490E-8BDA-6FB7234FD538"
        />
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
          wtx-context="02809499-18CF-4D06-8B4A-A94A7655DC47"
        />
        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
        ></textarea>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    );
  }
}

export default Feedback;
