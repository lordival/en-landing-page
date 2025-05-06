import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    return (
      <header className="bg-azul-profundo text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-azul-neon"> {/* Use Link instead of <a> */}
            LOOM
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="lg:hidden text-3xl"
            onClick={this.toggleMenu}
          >
            ☰
          </button>

          {/* Navigation Menu */}
          <nav className={`lg:flex lg:space-x-6 ${this.state.isMenuOpen ? 'block' : 'hidden'} lg:block transition-all ease-in-out duration-300`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
              <li><a href="#sobre" className="hover:text-ciano-digital">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-ciano-digital">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-ciano-digital">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-ciano-digital">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;