// src/App.jsx
import React, { useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { VentureStudio } from './components/VentureStudio';
import { Philanthropy } from './components/Philanthropy';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

/**
 * @typedef {'home'|'about'|'portfolio'|'investment'|'venturestudio'|'news'|'contact'} Page
 */

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio onPageChange={setCurrentPage}/>;
      case 'venturestudio':
        return <VentureStudio />;
      case 'philanthropy':
        return <Philanthropy />;
      case 'news':
        return <News />;
      case 'contact':
        return <Contact onPageChange={setCurrentPage}/>;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} onPageChange={setCurrentPage} />
      <Toaster position="bottom-right" className='bg-black text-white' />
    </div>
  );
}
