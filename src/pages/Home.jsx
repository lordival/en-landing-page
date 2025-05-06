import React, { Component } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServicosSection from '../components/ServicosSection';
import PortfolioSection from '../components/PortfolioSection';
import DepoimentosSection from '../components/DepoimentosSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Sobre from '../components/Sobre';

class Home extends Component {
  render() {
    return (
      <div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <HeroSection />
        </motion.div>

        {/* Servicos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ServicosSection />
        </motion.div>

        {/* Portfolio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <PortfolioSection />
        </motion.div>

        {/* Depoimentos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <DepoimentosSection />
        </motion.div>

        {/* Sobre Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Sobre />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.div>
      </div>
    );
  }
}

export default Home;
