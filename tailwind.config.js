module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'azul-profundo': '#1A1F3D', // Cor de fundo principal
        'azul-neon': '#007BFF',     // Destaques e botões
        'roxo-tecnologico': '#6A00F4', // Elementos futuristas
        'ciano-digital': '#00E0FF',   // Detalhes modernos
        'cinza-elegante': '#A0A0A0',   // Textos neutros
      },
    },
  },
  plugins: [],
};