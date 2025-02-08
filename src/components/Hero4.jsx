import React from 'react';
import { motion } from 'framer-motion';
import { GiBookStorm } from 'react-icons/gi';
import { PiBookOpen } from 'react-icons/pi';
import { VscBook } from 'react-icons/vsc';
import { image } from 'framer-motion/client';

class Hero4 extends React.Component {
    render() {
      return (
        <section id="home" className="bg-gray-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* <h1 className="text-5xl font-bold mb-6">
              Start Your 15-Day Free Trial + Get My  
              <span className="text-red-500 block mt-3">"Fat Loss Nutrition Blueprint" eBook</span>
            </h1> */}
            <h1 className="text-5xl font-bold mb-6">
              Burn Fat with Diego Trainer<br />
              <span className="text-red-500">Free 15-Day Trial</span> + eBook
            </h1>
            {/* <div className="mb-8 flex items-center justify-center">
              <GiBookStorm className="text-red-500 text-4xl mr-4" />
              <p className="text-xl">
                ($29 Value - Yours Free During Trial)
              </p>
            </div> */}
            <div className="mb-8 flex items-center justify-center space-x-4">
              <VscBook className="text-red-500 text-4xl" />
              <span className="text-xl">"Fat Loss Nutrition Blueprint" eBook Included</span>
            </div>
            <a 
              href="https://training-app.short.gy/train-with-diego-trainer" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg mb-4">
                Claim Free Trial & eBook →
              </button>
            </a>

            <p className="text-sm text-gray-300">
              15-Day Trial • Then $29.99/month • Cancel Anytime
            </p>

            {/* App Screenshots Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="flex overflow-x-auto pb-4 gap-4 justify-start md:justify-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-48 relative rounded-lg shadow-xl"
                  initial={{ x: -50 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: image.delay, duration: 0.8 }}
                  viewport={{ once: true }}
                  // whileInView={{ x: 0 }}
                >
                  <img 
                    src="/assets/screens/workout-plan.png" 
                    alt="Workout Plan" 
                    className="w-full h-auto object-contain rounded-lg border-2 border-gray-800"
                  />
                </motion.div>
  
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-48 relative rounded-lg shadow-xl"
                  initial={{ x: -50 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: image.delay, duration: 0.8 }}
                  viewport={{ once: true }}
                  // whileInView={{ x: 0 }}
                  // transition={{ delay: 0.2 }}
                >
                  <img 
                    src="/assets/screens/workout-tracker.png" 
                    alt="Workout Tracking" 
                    className="w-full h-auto object-contain rounded-lg border-2 border-gray-800"
                  />
                </motion.div>
  
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-48 relative rounded-lg shadow-xl"
                  initial={{ x: -50 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: image.delay, duration: 0.8 }}
                  viewport={{ once: true }}
                  // whileInView={{ x: 0 }}
                  // transition={{ delay: 0.4 }}
                >
                  <img 
                    src="/assets/screens/body-tracker.png" 
                    alt="Progress Tracking" 
                    className="w-full h-auto object-contain rounded-lg border-2 border-gray-800"
                  />
                </motion.div>
              </div>
  
              <p className="mt-6 text-gray-400 text-sm px-4">
                Swipe to see app features • Actual client interface examples
              </p>
            </motion.div>
          </div>
        </section>
      );
    }
  }

  export default Hero4