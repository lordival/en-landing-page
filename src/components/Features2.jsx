import React, { Component } from "react";

class Features2 extends Component {
  render() {
    return (
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">What You’ll Get</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Personalized Fat Loss Workouts",
            "FREE Fat Loss Nutrition eBook",
            "Easy-to-Follow Training App",
            "Ongoing Expert Coaching",
          ].map((feature, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              ✅ {feature}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Features2;
