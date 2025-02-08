import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaDumbbell, FaMobileAlt, FaChartLine, FaComments } from 'react-icons/fa';

class Features extends React.Component {
  features = [
    {
      icon: <FaBookOpen />,
      title: "Instant eBook Access",
      text: "Get immediate access to our proven sustainable fat loss guide after signing up"
    },
    { 
      icon: <FaDumbbell />, 
      title: "Custom Fat-Loss Plan", 
      text: "Tailored workouts that fit your schedule and skill level" 
    },
    { 
      icon: <FaMobileAlt />, 
      title: "App Integration", 
      text: "Your personalized program accessible via smartphone" 
    },
    { 
      icon: <FaChartLine />, 
      title: "Progress Tracking", 
      text: "Weekly body measurements & photo progress logging" 
    },
    { 
      icon: <FaComments />, 
      title: "On-Going Expert Support", 
      text: "Direct access to me for form checks & ongoing support through in-app messaging" 
    }
  ];

  render() {
    return (
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Your Complete Transformation Toolkit
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {this.features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all ${
                  feature.title === "On-Going Expert Support" 
                    ? "bg-red-50 border-2 border-red-200" 
                    : "bg-white"
                }`}
              >
                <div className="text-4xl text-red-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
                
                {feature.title === "On-Going Expert Support" && (
                  <div className="mt-4">
                    <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Coach-Powered Progress
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Connector for Odd Numbered Grid */}
          <div className="mt-8 flex justify-center">
            <div className="h-1 w-32 bg-red-100 rounded-full" />
          </div>
        </div>
      </section>
    );
  }
}

export default Features;