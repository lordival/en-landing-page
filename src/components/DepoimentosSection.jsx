import React, { Component } from 'react';
import { motion } from 'framer-motion';

class DepoimentosSection extends Component {
  render() {
    return (
      <section className="py-16 bg-azul-profundo">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-azul-neon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Depoimentos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-cinza-elegante mb-4">
                "A LOOM Agency transformou nosso escritório com um site moderno e funcional. Recomendo!"
              </p>
              <p className="text-ciano-digital font-semibold">- Advogado João Silva</p>
            </motion.div>

            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-cinza-elegante mb-4">
                "O aplicativo desenvolvido por eles otimizou nossos processos em 50%. Incrível!"
              </p>
              <p className="text-ciano-digital font-semibold">- Dra. Maria Souza</p>
            </motion.div>

            <motion.div
              className="bg-roxo-tecnologico p-6 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-cinza-elegante mb-4">
                "A landing page criada pela equipe aumentou nossa captação de clientes em 30%."
              </p>
              <p className="text-ciano-digital font-semibold">- Escritório XYZ</p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default DepoimentosSection;
