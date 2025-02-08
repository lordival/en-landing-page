import React from 'react';
import { motion } from 'framer-motion';
import { GiBookStorm } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';

class Hero5 extends React.Component {
    render() {
        return (
          <section className="bg-gray-900 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Start Burning Fat Today<br />
                <span className="text-red-500">Free 15-Day Trial</span> + eBook
              </h1>
              
              <div className="mb-8 flex items-center justify-center space-x-4">
                <GiBookStorm className="text-red-500 text-4xl" />
                <span className="text-xl">"Fat Loss Fast Track" eBook Included</span>
              </div>
    
              {/* Unified CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://apps.apple.com/us/app/your-app-name/idAPP_STORE_ID" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg mb-6"
              >
                <div className="flex items-center justify-center">
                  <FaDownload className="mr-3" />
                  <span>
                    Get App →<br />
                    <span className="text-sm font-normal">Instant eBook Access</span>
                  </span>
                </div>
              </motion.a>

              {/* App Screenshots Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12"
          >
            <div className="flex overflow-x-auto pb-4 gap-4 justify-start md:justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 relative rounded-lg shadow-xl"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
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
                whileInView={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img 
                  src="/assets/screens/workout-tracker.png" 
                  alt="Nutrition Tracking" 
                  className="w-full h-auto object-contain rounded-lg border-2 border-gray-800"
                />
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-48 relative rounded-lg shadow-xl"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <img 
                  src="/assets/screens/body-tracker.png" 
                  alt="Progress Dashboard" 
                  className="w-full h-auto object-contain rounded-lg border-2 border-gray-800"
                />
              </motion.div>
            </div>

            <p className="mt-6 text-gray-400 text-sm px-4">
              Swipe to see app features • Actual client interface examples
            </p>
          </motion.div>
    
              {/* Subtle App Store Badges */}
              <div className="flex justify-center space-x-4">
                <a href="https://apps.apple.com" target="_blank" rel="noopener">
                  <img 
                    src="/app-store-white.svg" 
                    alt="App Store" 
                    className="h-10 opacity-90 hover:opacity-100 transition-opacity"
                  />
                </a>
                <a href="https://play.google.com" target="_blank" rel="noopener">
                  <img 
                    src="/play-store-white.svg" 
                    alt="Google Play" 
                    className="h-10 opacity-90 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
    
              <p className="mt-6 text-sm text-gray-300">
                iOS & Android Supported • Cancel Anytime • eBook Yours to Keep
              </p>
            </div>
          </section>
        );
    }
  }

  export default Hero5