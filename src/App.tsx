import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';

import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
  <>
    <Header />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
