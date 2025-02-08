import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestionId: null
    };
  }

  toggleQuestion = (id) => {
    this.setState(prevState => ({
      activeQuestionId: prevState.activeQuestionId === id ? null : id
    }));
  };

  render() {
    const faqs = [
      {
        id: 1,
        question: "How does your fat-loss program work?",
        answer: "I create personalized plans combining metabolic workouts, nutrition guidance, and recovery strategies. You'll get step-by-step instructions, video demos, and progress tracking—all through the app.",
        category: 'program'
      },
      {
        id: 2,
        question: "What makes your approach different?",
        answer: "With 12+ years coaching clients, I've developed a system that combines HIIT and strengh training protocols with sustainable nutrition - no extreme diets. The app lets me adjust your plan based on your progress and feedback.",
        category: 'expertise'
      },
      {
        id: 3,
        question: "Do I need equipment?",
        answer: "No equipment needed! My bodyweight circuits are designed to torch fat using your own body. Optional resistance bands can enhance workouts but aren't required.",
        category: 'program'
      },
      {
        id: 4,
        question: "How often will I interact with you?",
        // answer: "You'll get weekly video check-ins from me through the app, plus daily accountability reminders. I review all your progress data and adjust your plan every Sunday.",
        answer: "You'll have the opportunity to do a full check-in through the app every 3 weeks, but you can reach out for support anytime.",
        category: 'support'
      },
      {
        id: 5,
        question: "When do I get the free eBook?",
        answer: "Immediately after signing up! You'll get instant download access to the 'Fat-Loss Nutrition Blueprint' eBook as soon as you start your free trial."
      },
      {
        id: 6,
        question: "What happens after the 15-day trial?",
        answer: "Your membership automatically continues at $29.99/month unless you cancel. You'll keep full app access, 1:1 support and any future eBook updates."
      },
    ];

    return (
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Your Fat Loss Questions Answered
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id}
                className="mb-4 bg-white rounded-lg shadow-sm"
                whileHover={{ scale: 1.01 }}
              >
                <button
                  onClick={() => this.toggleQuestion(faq.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center"
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: this.state.activeQuestionId === faq.id ? 180 : 0 }}
                  >
                    <FiChevronDown className="text-red-500 text-xl" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {this.state.activeQuestionId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2 border-t border-red-100">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;