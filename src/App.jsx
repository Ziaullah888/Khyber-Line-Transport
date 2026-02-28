import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Update from './pages/Update';
import Contact from './pages/Contact';
import UpdateDetail from './pages/UpdateDetail';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/updates" element={<Update />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updates/:slug" element={<UpdateDetail />} />
        <Route path="/updates/:slug" element={<UpdateDetail />} />
      </Routes>
    </div>
  );
};

export default App;
