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

// Valid pages
const validPages = ['home', 'about', 'portfolio', 'venturestudio', 'philanthropy', 'contact'];

export default function App() {
  // Initialize from URL hash on mount
  const getInitialPage = () => {
    const hash = window.location.hash.slice(1);
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Update hash when page changes (debounced to avoid loops)
  React.useEffect(() => {
    if (window.location.hash.slice(1) !== currentPage) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  // Handle page change with scroll to top
  const handlePageChange = (page) => {
    if (validPages.includes(page)) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={handlePageChange} />;
      case 'about':
        return <About onPageChange={handlePageChange} />;
      case 'portfolio':
        return <Portfolio onPageChange={handlePageChange} />;
      case 'venturestudio':
        return <VentureStudio onPageChange={handlePageChange} />;
      case 'philanthropy':
        return <Philanthropy onPageChange={handlePageChange} />;
      case 'contact':
        return <Contact onPageChange={handlePageChange} />;
      default:
        return <Home onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} onPageChange={handlePageChange} />
      <Toaster position="bottom-right" className='bg-black text-white' />
    </div>
  );
}