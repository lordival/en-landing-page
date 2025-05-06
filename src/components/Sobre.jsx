import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Sobre extends Component {
  render() {
    return (
      <div id='sobre' className="bg-azul-profundo text-cinza-elegante py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-azul-neon"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Sobre a LOOM
          </motion.h2>
          <div className="max-w-3xl mx-auto text-lg space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A <strong className="text-ciano-digital">LOOM</strong> é uma empresa especializada em soluções digitais para advogados e escritórios jurídicos. Nossa missão é unir <strong className="text-ciano-digital">tecnologia</strong>, <strong className="text-ciano-digital">design</strong> e <strong className="text-ciano-digital">estratégia</strong> para transformar a presença digital de profissionais do direito, oferecendo <strong className="text-ciano-digital">Landing Pages</strong>, <strong className="text-ciano-digital">Websites</strong> e <strong className="text-ciano-digital">Apps</strong> personalizados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Combinamos <strong className="text-ciano-digital">expertise jurídica</strong> e <strong className="text-ciano-digital">inovação tecnológica</strong> para entregar produtos digitais que comunicam com clareza, geram credibilidade e aumentam a conversão de clientes. Sabemos que o mundo jurídico exige <strong className="text-ciano-digital">profissionalismo</strong>, <strong className="text-ciano-digital">segurança</strong> e <strong className="text-ciano-digital">eficiência</strong>, e é exatamente isso que oferecemos em cada projeto.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Além do desenvolvimento de plataformas digitais, fornecemos <strong className="text-ciano-digital">consultoria estratégica</strong> para garantir que cada solução esteja alinhada às necessidades específicas do advogado moderno. Aplicamos técnicas de <strong className="text-ciano-digital">Legal Design</strong>, <strong className="text-ciano-digital">SEO</strong> e <strong className="text-ciano-digital">UI/UX</strong> para criar experiências digitais que engajam, informam e impulsionam negócios jurídicos no ambiente online.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Sempre atentos às tendências e inovações do mercado, trabalhamos para que advogados e escritórios sejam reconhecidos no digital de forma <strong className="text-ciano-digital">dinâmica</strong>, <strong className="text-ciano-digital">interativa</strong> e <strong className="text-ciano-digital">moderna</strong>. Nossa equipe é formada por especialistas apaixonados por tecnologia e direito, garantindo projetos de alto padrão e alinhados às expectativas do cliente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              Na <strong className="text-ciano-digital">LOOM</strong>, nosso compromisso vai além do desenvolvimento de sites e aplicativos: criamos <strong className="text-ciano-digital">experiências digitais</strong> que fortalecem a conexão entre advogados e seus clientes, ampliando sua atuação no mundo jurídico e posicionando sua marca para o futuro.
            </motion.p>
            <motion.p
              className="text-center text-2xl font-bold text-azul-neon mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              🚀 LOOM | Digital para Advogados
            </motion.p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
