import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaBookOpen } from 'react-icons/fa';

class CTA extends React.Component {
  render() {
    return (
      <section id='pricing'>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-red-600 to-red-500 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="flex items-center gap-2">
                <FaBookOpen className="text-yellow-300" />
                Limited Time Offer
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Start Transforming Your Body
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
          >
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">$29.99</span>
                <span className="text-sm">/month after trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaDumbbell className="text-red-200" />
                Includes full app access + coaching
              </div>
            </div>

            <div className="h-12 w-px bg-white/20 hidden md:block" />

            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-sm">Nutrition eBook FREE</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaBookOpen className="text-red-200" />
                Yours to keep even if you cancel
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a 
              href="https://training-app.short.gy/train-with-diego-trainer" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 font-bold py-4 px-12 rounded-lg text-lg hover:bg-gray-50 transition-all flex items-center gap-3 mx-auto shadow-xl"
              >
                <FaDumbbell className="text-xl" />
                Start 15-Day Free Trial
              </motion.button>
            </a>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-red-100"
          >
            No credit card required • 100% money-back guarantee
          </motion.p> */}
        </div>
      </motion.section>
      </section>
    );
  }
}

export default CTA;