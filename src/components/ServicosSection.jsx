import React, { Component } from 'react';
import { motion } from 'framer-motion';

class ServicosSection extends Component {
  render() {
    return (
      <section id='servicos' className="py-16 bg-azul-profundo">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-azul-neon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Nossos Serviços
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Landing Pages</h3>
              <p className="text-cinza-elegante">Páginas de alta conversão para campanhas jurídicas.</p>
            </motion.div>

            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Websites</h3>
              <p className="text-cinza-elegante">Sites profissionais para escritórios de advocacia.</p>
            </motion.div>

            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">Aplicativos</h3>
              <p className="text-cinza-elegante">Apps personalizados para otimizar processos jurídicos.</p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServicosSection;
