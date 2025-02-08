import React, { Component } from "react";

class Hero2 extends Component {
  render() {
    return (
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold">
            Lose Weight the Right Way – Start Your 15-Day Free Fat Loss Plan!
          </h1>
          <p className="mt-4 text-lg">
            Get a personalized fat loss plan inside my app, plus a **FREE
            nutrition eBook** to maximize your results.
          </p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200">
            Start My 15-Day Free Trial!
          </button>
          <img
            src="/assets/app_screens.png"
            alt="Training App Preview"
            className="mt-8 mx-auto w-80"
          />
        </div>
      </section>
    );
  }
}

export default Hero2;
