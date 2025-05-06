import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import your image (replace with the actual path to your image)
// import direitoAmbientalImage from '../../public/assets/arvore_cover.jpg' // Example path

class PortfolioSection extends Component {
  render() {
    return (
      <section id='portfolio' className="py-16 bg-azul-profundo">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-azul-neon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Case Studies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to='/direito-ambiental'
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Árvore do Direito Advocacia e Consultoria</h3>
              {/* <p className="text-cinza-elegante">[Imagem]</p> */}
              {/* Add the image here */}
              <img
                  src="/assets/arvore_cover.jpg" // Public URL path
                  alt="Árvore do Direito Advocacia e Consultoria"
                  className="w-full h-32 object-cover rounded-lg mb-4" // Tailwind classes for styling
                />
                <p className="text-cinza-elegante">Especialistas em Direito Ambiental</p>
            </motion.div>
            </Link>
            <Link
              to='/direito-penal'
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
              <motion.div
                className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Nexus Penal</h3>
                <p className="text-cinza-elegante">[Imagem]</p>
              </motion.div>
            </Link>
            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Áxis Previdência Jurídica</h3>
              <p className="text-cinza-elegante">Aplicativo para gestão de processos e clientes.</p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioSection;
