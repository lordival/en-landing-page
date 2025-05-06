import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import DireitoAmbiental from './pages/DireitoAmbiental';
import DireitoPenal from './pages/DireitoPenal';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/direito-ambiental" element={<DireitoAmbiental />} />
            <Route path="/direito-penal" element={<DireitoPenal />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </Router>
    );
  }
}

export default App;