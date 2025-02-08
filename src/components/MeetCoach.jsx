import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaMedal } from 'react-icons/fa';

class MeetCoach extends React.Component {
  render() {
    return (
      <section id="coach" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Coach Photo */}
            <div className="relative group">
              <img 
                src="/assets/coach-photo.jpg" 
                alt="Coach Diego Trainer"
                className="rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 right-6 bg-red-500 text-white p-4 rounded-lg shadow-lg">
                <span className="block text-2xl font-bold">12+</span>
                <span className="text-sm">Years Experience</span>
              </div>
            </div>

            {/* Coach Bio */}
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Meet Your Fat Loss Expert
                <span className="block text-red-500 text-3xl mt-2">Coach Diego Trainer</span>
              </motion.h2>

              <p className="text-lg text-gray-600 mb-8">
                Certified Personal Trainer, Specialist in Weight Management & Metabolic Conditioning. 
                I've helped 1,200+ clients shed over 15,000 collective pounds through 
                science-backed training and sustainable nutrition.
              </p>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <FaMedal className="text-red-500 text-2xl mr-3" />
                  <div>
                    <h3 className="font-bold">Specialization</h3>
                    <p className="text-gray-600 text-sm">Body Fat Reduction</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <FaDumbbell className="text-red-500 text-2xl mr-3" />
                  <div>
                    <h3 className="font-bold">Training Style</h3>
                    <p className="text-gray-600 text-sm">Metabolic Conditioning</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Signature - Reduced margin-top from mt-12 to mt-8 */}
          <div className="mt-8 text-center">
            <motion.img 
              src="/assets/signature.png" 
              alt="Coach Signature"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.75 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mx-auto w-48"
            />
            <motion.p 
              className="text-gray-600 mt-4 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              "My mission: Help you burn fat for good - no yo-yo diets, just real science."
            </motion.p>
          </div>
        </div>
      </section>
    );
  }
}

export default MeetCoach;