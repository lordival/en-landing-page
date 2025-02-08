import React from 'react';
import { motion } from 'framer-motion';

class Testimonials3 extends React.Component {
    render() {
      return (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Real Clients, Real Fat Loss
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    -28lbs
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah T.</h4>
                    <p className="text-sm text-gray-500">Lost 15% Body Fat</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "[Trainer's Name]'s app made it impossible to fail - I knew exactly what to do every day to keep burning fat."
                </p>
              </motion.div>
  
              {/* Testimonial 2 */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    -34lbs
                  </div>
                  <div>
                    <h4 className="font-bold">Mike R.</h4>
                    <p className="text-sm text-gray-500">Dropped 4 Pant Sizes</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The combination of [Trainer's Name]'s expertise and the app's tracking got me results I never thought possible."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
  }
  export default Testimonials3;