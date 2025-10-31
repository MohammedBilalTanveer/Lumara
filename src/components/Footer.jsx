// src/components/Footer.jsx
import React from 'react';
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  MapPinIcon
} from 'lucide-react';

export const Footer = ({ currentPage, onPageChange }) => {
  const socialLinks = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhil-k-s-b75302203/' },
    { icon: MailIcon, label: 'Email', href: 'mailto:hello@Lumaraventures.com' },
  ];

  // Use same page IDs as Navigation.jsx
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'venturestudio', label: 'Venture Studio' },
    { id: 'philanthropy', label: 'Philanthropy' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle quick link click with scroll to top
  const handleQuickLinkClick = (id) => {
    onPageChange(id);
    // Scroll to top after a brief delay to allow re-render
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-white text-gray-800">
      {/* Divider line */}
      <div className="w-full border-t border-gray-400 mb-10" />

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {/* Company info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">L</span>
            </div>
            <span className="text-xl font-bold">Lumara Ventures</span>
          </div>
          <p className="text-sm text-muted-foreground">
            A family office partnering with exceptional entrepreneurs and managing diversified investments across private and public markets.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4" />
            <span>MG Road, Bengaluru</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <MailIcon className="h-4 w-4" />
            <span>hello@Lumaraventures.com</span>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleQuickLinkClick(link.id)}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & legal */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-gray-600 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="mt-6 text-sm text-muted-foreground space-y-1">
            {/* you can keep these as normal links since they are external pages */}
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a><br />
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Lumara ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;