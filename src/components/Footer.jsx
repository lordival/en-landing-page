import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-azul-profundo text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} LOOM Agency. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;