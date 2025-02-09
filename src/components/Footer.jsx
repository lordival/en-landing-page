import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">About Diego Trainer</h3>
              <p className="text-gray-400">
              Certified Personal Trainer and Fat-Loss Specialist with 12+ years experience helping 
                clients shed stubborn fat. I deliver science-backed, personalized training programs straight to your phone through my app.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#home" className="hover:text-red-500">Home</a></li>
                <li className="mb-2"><a href="#features" className="hover:text-red-500">Features</a></li>
                <li className="mb-2"><a href="#coach" className="hover:text-red-500">About the Coach</a></li>
                <li className="mb-2"><a href="#results" className="hover:text-red-500">Client Results</a></li>
                <li className="mb-2"><a href="#faq" className="hover:text-red-500">FAQ</a></li>
                <li className="mb-2"><a href="#pricing" className="hover:text-red-500">Pricing</a></li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="text-gray-400">
              <li className="mb-2">
                Email: <a href="mailto:support@diegotrainer.com" className="text-red-500 hover:underline">support@diegotrainer.com</a>
              </li>

                {/* <li className="mb-2">Phone: +1 (123) 456-7890</li>
                <li className="mb-2">Address: 123 Fitness St, Workout City</li> */}
              </ul>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/DiegoTrainer/"
                  className="text-gray-400 hover:text-red-500"
                >
                  <FaFacebook className="w-6 h-6" />
                </motion.a>
                {/* <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-red-500"
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a> */}
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/diego.trainer"
                  className="text-gray-400 hover:text-red-500"
                >
                  <FaInstagram className="w-6 h-6" />
                </motion.a>
                {/* <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-red-500"
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a> */}
              </div>
            </motion.div>
          </div>
          {/* Ebook Disclaimer with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs space-y-2"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              ✉️ The free ebook will be sent to your email once you complete the signup process
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              🔄 You can cancel the trial anytime before 14 days and still keep the ebook
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              💳 Recurring billing starts automatically on day 15 - manage in your account
            </motion.p>
          </motion.div>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} Diego Trainer. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    );
  }
}

export default Footer;