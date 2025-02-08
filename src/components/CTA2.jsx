import React from 'react';
import { motion } from 'framer-motion';

class CTA2 extends React.Component {
    render() {
      return (
        <section className="bg-red-500 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Melt Stubborn Fat?
            </h2>
            <p className="text-xl mb-8">
              Get Your Personalized Plan Delivered Daily Through Our App
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-red-500 font-bold py-3 px-8 rounded-lg"
              >
                Book Free Strategy Call
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg"
              >
                Download App
              </motion.button>
            </div>
          </div>
        </section>
      );
    }
  }

  export default CTA2