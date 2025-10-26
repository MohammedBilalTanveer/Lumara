// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation = ({ currentPage, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    // { id: 'investment', label: 'Investment Focus' },
    { id: 'venturestudio', label: 'Venture Studio' },
    { id: 'philanthropy' , label: 'Philanthropy' },
    { id: 'contact', label: 'Contact' },
  ];

  // Detect viewport size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 890;
      setIsMobile(mobile);

      // If switching to desktop, ensure menu is closed
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when changing page
  const handlePageChange = (page) => {
    onPageChange(page);
    if (isMobile) setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // optional but user-friendly
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer select-none"
            onClick={() => handlePageChange('home')}
          >
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">L</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Lumara Ventures</span>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  onClick={() => handlePageChange(item.id)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-primary-foreground'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="bg-white border-t border-gray-100 shadow-md md:hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? 'default' : 'ghost'}
                  onClick={() => handlePageChange(item.id)}
                  className={`w-full justify-start text-base ${
                    currentPage === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
