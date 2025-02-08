import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaDumbbell, FaAppleAlt, FaMobileAlt } from 'react-icons/fa';

class MethodSection extends React.Component {
  render() {
    return (
      <section className="py-16 bg-gray-900 text-white" id="method">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content Column */}
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                The Science-Based Fat Loss Method
                <span className="block text-red-500 text-xl mt-3">12+ Years Perfected</span>
              </motion.h2>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <FaFire className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Metabolic Ignition</h3>
                    <p className="text-gray-300">
                      Short, intense HIIT sessions (3x weekly) to maximize calorie burn 
                      for 48+ hours post-workout
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <FaDumbbell className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Strength Preservation</h3>
                    <p className="text-gray-300">
                      Targeted resistance training to maintain muscle mass while burning fat
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <FaAppleAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainable Nutrition</h3>
                    <p className="text-gray-300">
                      No crash diets. No calorie counting. Just sustainable nutrition guidance that fits your lifestyle
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <FaMobileAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adaptive Coaching</h3>
                    <p className="text-gray-300">
                    Plan adjustments via app based on your progress photos, measurements, and feedback
                    </p>
                  </div>
                </motion.div>
              </div>
              <a 
                href="https://training-app.short.gy/train-with-diego-trainer" 
                target="_blank" 
                rel="noopener noreferrer"
                >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg"
              >
                Start Your Custom Plan
              </motion.button>
            </a>
            </div>

            {/* Image Column */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/method-visual.png" 
                alt="Fat Loss Method" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-900 text-red-100 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">83%</div>
                <div className="text-sm">Average Fat Loss Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }
}

export default MethodSection;