import React from 'react';

const NexusPenal = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Nexus Penal - Advocacia Criminal Especializada</h1>
          <p className="text-lg mt-2">Defendemos seus direitos com estratégia e excelência</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <img
          src="/assets/nexus_penal_cover.jpg" // Substitua pelo caminho da imagem
          alt="Nexus Penal"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error("Image failed to load", e);
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 opacity-75"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">Nexus Penal</h2>
            <p className="text-xl">Advocacia Criminal Especializada</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg">
            No Nexus Penal, somos especialistas em Direito Penal, atuando com comprometimento e ética na defesa de nossos clientes. Entendemos que cada caso é único e, por isso, oferecemos estratégias personalizadas para garantir uma defesa eficiente, seja em investigações, processos criminais ou consultoria jurídica preventiva.
          </p>
          <p className="text-lg mt-4">
            Nosso trabalho é baseado na experiência, no conhecimento técnico e em uma abordagem estratégica que visa garantir os direitos fundamentais de cada cliente.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Defesa Criminal</h3>
            <p className="text-gray-700">Atuação em todas as fases do processo penal, desde o inquérito policial até recursos em tribunais superiores.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Crimes Econômicos e Empresariais</h3>
            <p className="text-gray-700">Defesa em casos de fraudes, lavagem de dinheiro, corrupção e outros crimes financeiros.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Tribunal do Júri</h3>
            <p className="text-gray-700">Atuação em crimes dolosos contra a vida, como homicídios e tentativas de homicídio.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Crimes Contra a Honra e Crimes Digitais</h3>
            <p className="text-gray-700">Defesa em casos de difamação, injúria, calúnia e crimes cibernéticos.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Habeas Corpus e Medidas Urgentes</h3>
            <p className="text-gray-700">Ações para garantir a liberdade e a proteção dos direitos do cliente.</p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Execução Penal</h3>
            <p className="text-gray-700">Acompanhamento de progressão de regime, livramento condicional e revisão de penas.</p>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Estudo de Caso: Defesa Estratégica e Absolvição</h2>
          <p className="text-lg text-gray-700">
            Nosso cliente, um empresário, foi acusado de crime financeiro devido a um erro contábil detectado durante uma auditoria. O Ministério Público ofereceu denúncia, mas nossa equipe conseguiu demonstrar a ausência de dolo e a inconsistência das provas apresentadas. Após uma defesa bem estruturada, conseguimos a absolvição do cliente, protegendo sua reputação e sua liberdade.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Por Que Escolher o Nexus Penal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Atendimento Personalizado e Sigiloso</h3>
            <p className="text-gray-700">Cada caso é tratado com discrição e estratégia.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Especialização em Direito Penal</h3>
            <p className="text-gray-700">Advogados experientes e atualizados com as mudanças legislativas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Atuação Estratégica e Combativa</h3>
            <p className="text-gray-700">Defesas baseadas em sólida argumentação jurídica e técnica.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Compromisso com a Justiça</h3>
            <p className="text-gray-700">Garantimos que cada cliente tenha sua defesa conduzida com transparência e eficiência.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
          <p className="text-lg mb-4">
            Se você precisa de um advogado criminalista experiente e comprometido, entre em contato conosco. Sua defesa começa com uma conversa.
          </p>
          <p className="text-lg">📩 [E-mail de Contato]</p>
          <p className="text-lg">📞 [Telefone]</p>
          <p className="text-lg">📍 [Endereço do Escritório]</p>
        </div>
      </section>
    </div>
  );
};

export default NexusPenal;