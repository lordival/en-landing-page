import React from 'react';
import { motion } from 'framer-motion';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { FaFlask, FaMobileAlt, FaDumbbell } from 'react-icons/fa';

class Expertise extends React.Component {
  render() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Diego Trainer Gets Results
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <GiWeightLiftingUp className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">12+ Years Coaching Clients</h3>
              <p className="text-gray-600">
                Specialized in metabolic conditioning and sustainable weight loss
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <FaFlask className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Science-Backed Plans</h3>
              <p className="text-gray-600">
                Programs combine HIIT, strength training, sustainable nutrition, and recovery protocols
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <FaMobileAlt className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-4">Your Plan, Your Phone</h3>
              <p className="text-gray-600">
              Track your workouts, monitor progress, and get 1:1 support—all from your phone
              </p>
            </motion.div>
          </div>

          {/* Added CTA Button */}
          <motion.div 
            className="flex justify-center items-center text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="https://training-app.short.gy/train-with-diego-trainer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-12 rounded-lg flex items-center gap-3 text-lg"
            >
              <FaDumbbell className="text-xl" />
              Start Your Transformation Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }
}

export default Expertise;