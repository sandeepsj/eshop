import React, { Component } from "react";
class SubHeader extends Component {
  state = {};
  render() {
    return (
      <section className="text-gray-700 body-font">
        {this.getComponent(this.props.index)}
      </section>
    );
  }
  getComponent = (index) => {
    if (index % 2 === 0) {
      return (
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {this.getText()}
          {this.getImg()}
        </div>
      );
    }
    return (
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {this.getImg()}
        {this.getText()}
      </div>
    );
  };
  getText = () => {
    return (
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          {this.props.title}
          <br className="hidden lg:inline-block" />
          {this.props.subtitle}
        </h1>
        <p className="mb-8 leading-relaxed">{this.props.text}</p>
      </div>
    );
  };
  getImg = () => {
    return (
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="
          https://source.unsplash.com/700x600/?business"
        />{" "}
      </div>
    );
  };
}

export default SubHeader;
