import React from 'react';
import { FaBookReader, FaClock } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';

class TrialCTA extends React.Component {
    render() {
      return (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">
                What You Get in Your Trial:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div>
                  <GiWeightLiftingUp className="text-red-500 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Full App Access</h3>
                  <p className="text-gray-600">15 Days of Workouts + Tracking + Coach Support</p>
                </div>
                <div>
                  <FaBookReader className="text-red-500 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">Free eBook</h3>
                  <p className="text-gray-600">"Fat-Loss Nutrition Blueprint" ($29 value)</p>
                </div>
                <div>
                  <FaClock className="text-red-500 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-semibold">No Risk</h3>
                  <p className="text-gray-600">Cancel anytime in first 14 days</p>
                </div>
              </div>
              <a 
                href="https://training-app.short.gy/train-with-diego-trainer" 
                target="_blank" 
                rel="noopener noreferrer"
                >
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
                Start Trial & Download eBook Now
              </button>
              </a>
              {/* <p className="mt-4 text-sm text-gray-500">
                No credit card required to claim eBook
              </p> */}
            </div>
          </div>
        </section>
      );
    }
  }

  export default TrialCTA;