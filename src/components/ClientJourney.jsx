import React from 'react';
import { motion } from 'framer-motion';

class ClientJourney extends React.Component {
    render() {
      return (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Your Fat Loss Blueprint
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div 
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
              >
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-gray-600">
                  We analyze your body type, lifestyle, and goals
                </p>
              </motion.div>
  
              {/* Step 2 */}
              <motion.div 
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Plan Built</h3>
                <p className="text-gray-600">
                  Your 8-week fat-torching program created
                </p>
              </motion.div>
  
              {/* Step 3 */}
              <motion.div 
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.4 }}
              >
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">App Delivery</h3>
                <p className="text-gray-600">
                  Daily workouts, meal plans, and check-ins via app
                </p>
              </motion.div>
  
              {/* Step 4 */}
              <motion.div 
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Burn Fat Daily</h3>
                <p className="text-gray-600">
                  Weekly adjustments based on your progress
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
  }

  export default ClientJourney;