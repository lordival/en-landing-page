import React from 'react';
import { motion } from 'framer-motion';

class Hero3 extends React.Component {
    render() {
      return (
        <motion.section 
          className="bg-gray-900 text-white py-20 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Burn Fat & Shed Pounds with <span className="text-red-500">Proven Science</span>
            </h1>
            <p className="text-xl mb-8">
              Certified Fitness Coach Diego Trainer Delivers Ultra-Effective Fat-Loss Programs 
              Through Your Phone
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              Start Your 7-Day Fat Loss Jumpstart
            </motion.button>
          </div>
        </motion.section>
      );
    }
  }

  export default Hero3