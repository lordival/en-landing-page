import React, { Component } from 'react';
import { motion } from 'framer-motion';

class FormularioContato extends Component {
  render() {
    return (
      <section id='contato' className="py-16 bg-azul-profundo">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-azul-neon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Entre em Contato
          </motion.h2>
          <form className="max-w-lg mx-auto">
            {/* Campo Nome */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-cinza-elegante mb-2">Nome</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-roxo-tecnologico text-white placeholder-cinza-elegante"
                placeholder="Seu nome"
              />
            </motion.div>

            {/* Campo E-mail */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-cinza-elegante mb-2">E-mail</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-roxo-tecnologico text-white placeholder-cinza-elegante"
                placeholder="Seu e-mail"
              />
            </motion.div>

            {/* Campo Mensagem */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label className="block text-cinza-elegante mb-2">Mensagem</label>
              <textarea
                className="w-full p-3 rounded-lg bg-roxo-tecnologico text-white placeholder-cinza-elegante"
                rows="5"
                placeholder="Sua mensagem"
              ></textarea>
            </motion.div>

            {/* Botão Enviar */}
            <motion.button
              type="submit"
              className="bg-azul-neon text-white px-8 py-3 rounded-full font-semibold hover:bg-roxo-tecnologico transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Enviar Mensagem
            </motion.button>
          </form>
        </div>
      </section>
    );
  }
}

export default FormularioContato;