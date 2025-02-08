import React, { Component } from "react";

class HowItWorks2 extends Component {
  render() {
    return (
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">How It Works</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {[
            "Sign up for your 15-day free trial – No commitment.",
            "Get a personalized workout plan & FREE nutrition eBook.",
            "Train with my app, track progress & start seeing results!",
            "After 15 days, continue for [$X/month] – Cancel anytime.",
          ].map((step, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg shadow-md text-lg"
            >
              {index + 1}. {step}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default HowItWorks2;
