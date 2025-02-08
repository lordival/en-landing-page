import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: '1', title: 'Sign Up', text: 'Sign up for your 15-day free trial (No commitment) + Get the Nutrition eBook' },
  { number: '2', title: 'Assessment', text: 'Complete our fitness evaluation' },
  { number: '3', title: 'Get Plan', text: 'Receive personalized workout plan' },
  { number: '4', title: 'Start Training', text: 'Train with my app, track progress & start seeing results!' }
];

class HowItWorks extends React.Component {
  render() {
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;