// src/App.jsx
import React, { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Investment } from './components/Investment';
import { VentureStudio } from './components/VentureStudio';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

/**
 * @typedef {'home'|'about'|'portfolio'|'investment'|'venturestudio'|'news'|'contact'} Page
 */

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'investment':
        return <Investment />;
      case 'venturestudio':
        return <VentureStudio />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
          <Footer currentPage={currentPage} onPageChange={setCurrentPage} />

    </div>
  );
}
