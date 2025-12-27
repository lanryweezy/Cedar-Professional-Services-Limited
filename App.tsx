
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
