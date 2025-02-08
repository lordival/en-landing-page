import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: "Lara K.",
    result: "Regained Pre-Baby Body",
    text: "After two kids, I struggled to lose weight, but this program changed everything! The quick HIIT workouts and flexible nutrition guide fit my hectic life, and Coach’s support made all the difference!",
    image: "/assets/testimonials/lara.jpg"
  },
  { 
    name: "Eric T.",
    result: "Lost 8kg",
    text: "The combination of Diego Trainer's expertise and the app's tracking got me results I never thought possible.",
    image: "/assets/testimonials/eric.jpg"
  },
  { 
    name: "Jessica J.",
    result: "Lost 20kg",
    text: "Diego Trainer's app and eBook made it impossible to fail - I knew exactly what to do every day to keep burning fat.",
    image: "/assets/testimonials/jessica.jpg"
  },
  { 
    name: "Fabio R.",
    result: "-18kg in 12 Weeks",
    text: "Traveling 3 weeks a month, I thought getting in shape was impossible. The app kept me consistent with hotel workouts, and Coach’s support kept me motivated across time zones!",
    image: "/assets/testimonials/fabio.jpg"
  },
];

class Testimonials extends React.Component {
  render() {
    return (
      <section id="results" className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Real Clients, Real Fat Loss
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-500 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-red-500 text-sm">{testimonial.result}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic pl-20">
                  "{testimonial.text}"
                </p>
                <div className="absolute top-6 right-6 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;