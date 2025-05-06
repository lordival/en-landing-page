import React, { Component } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

// Importing the image directly
import heroBg from '../hero-bg.jpg';  // Adjust the path as needed

class HeroSection extends Component {

    // Função para gerar o link do WhatsApp
    whatsappURL = () => {
        const phone = '5511996027106'; // Substitua pelo seu número (formato: 5511999999999)
        const message = encodeURIComponent('Olá! Gostaria de saber mais sobre seus serviços.');
        return `https://wa.me/${phone}?text=${message}`;
    };

  render() {
    return (
      <section className="relative h-screen flex flex-col items-center justify-center text-white text-center px-4 bg-gradient-to-r from-purple-500 to-indigo-600">
        {/* Background image with opacity overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Content of the hero section */}
        <div className="container mx-auto text-center relative z-10 text-white">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}  // Starting position
            animate={{ opacity: 1, y: 0 }}    // Ending position
            transition={{ duration: 1, delay: 0.5 }}  // Transition duration and delay
          >
            <ReactTyped
              strings={[
                'Soluções Digitais Modernas para Escritórios de Advocacia',
                'Transforme seu negócio com tecnologia!',
                'Aumente sua visibilidade online.'
              ]}
              typeSpeed={60}
              backSpeed={50}
              backDelay={1000}
              loop
            />
          </motion.h1>

          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}  // Delay for the description
          >
            Criamos landing pages, sites e aplicativos personalizados para o nicho jurídico.
          </motion.p>

          <motion.button
            className="bg-azul-neon text-white px-8 py-3 rounded-full font-semibold hover:bg-roxo-tecnologico transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            onClick={() => window.open(this.whatsappURL(), '_blank')} // Abre o link em uma nova aba
            >
            Comece Agora
            </motion.button>
        </div>
      </section>
    );
  }
}

export default HeroSection;