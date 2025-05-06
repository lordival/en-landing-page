import React from 'react';

const DireitoAmbiental = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Header */}
      <header className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Árvore do Direito - Especialistas em Direito Ambiental</h1>
          <p className="text-lg mt-2">Protegendo Negócios. Preservando o Futuro.</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen"> {/* Full viewport height */}
        {/* Background Image */}
        <img
          src="/assets/arvore_cover.jpg" // Public URL path to the image
          alt="Árvore do Direito"
          className="w-full h-full object-cover" // Ensure the image covers the container
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Árvore do Direito</h2>
            <p className="text-lg">Especialistas em Direito Ambiental</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg">
            Árvore do Direito é referência em Direito Ambiental, ajudando empresas e organizações a garantirem conformidade legal, mitigarem riscos e implementarem soluções sustentáveis. Com uma abordagem estratégica e inovadora, oferecemos suporte jurídico de excelência para que seu negócio cresça de forma responsável e segura.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Nossos Serviços</h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Consultoria e Compliance Ambiental – Adequação à legislação ambiental vigente para evitar sanções e garantir licenciamento.</li>
          <li>Defesa em Processos Administrativos e Judiciais – Representação em autuações ambientais e ações civis públicas.</li>
          <li>Licenciamento Ambiental – Assessoria completa para obtenção e regularização de licenças ambientais.</li>
          <li>Due Diligence Ambiental – Avaliação de riscos ambientais em fusões, aquisições e empreendimentos imobiliários.</li>
          <li>Gestão de Passivos Ambientais – Estratégias para minimizar impactos e responsabilidades ambientais.</li>
        </ul>
      </section>

      {/* Case Study Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Estudo de Caso: Redução de Multa e Licenciamento Eficiente</h2>
          <p className="text-lg text-gray-700">
            Nosso cliente, uma empresa do setor industrial, enfrentava uma multa ambiental milionária devido a um suposto descumprimento de normas ambientais. Nossa equipe identificou inconsistências na autuação e utilizou um conjunto estratégico de argumentos legais e técnicos para reduzir em 80% o valor da penalidade. Além disso, orientamos a empresa na regularização de suas operações, garantindo um licenciamento eficiente e sustentável.
          </p>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Compromisso com Sustentabilidade e Inovação</h2>
        <p className="text-lg text-gray-700">
          Nosso diferencial está na integração do Direito Ambiental com inovação e tecnologia, permitindo soluções ágeis e eficazes. Trabalhamos para que nossos clientes não apenas cumpram a legislação, mas também se tornem referências em práticas sustentáveis.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
          <p className="text-lg mb-4">
            Precisa de assessoria especializada em Direito Ambiental? Entre em contato e descubra como podemos ajudar seu negócio a crescer com segurança jurídica e responsabilidade ambiental.
          </p>
          <p className="text-lg">📩 [E-mail de Contato]</p>
          <p className="text-lg">📞 [Telefone]</p>
        </div>
      </section>
    </div>
  );
};

export default DireitoAmbiental;