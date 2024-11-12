import React, { useState } from 'react';
import { Music2, Menu, X } from 'lucide-react';

const navLinks = [
  { href: 'https://fanvalue.minyvinyl.com', text: 'MINY Revenue Estimator', external: true },
  { href: 'https://drop.minyvinyl.com', text: 'Drop a MINY', external: true },
  { href: '#why-attend', text: 'Why Attend' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Highlight Bar */}
      <div className="bg-indigo-600 text-white overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block py-2">
          <div className="inline-flex items-center space-x-8">
            <span className="font-semibold">📅 Friday, November 15, 2024 | 6:00 - 10:00 PM</span>
            <span>|</span>
            <span>Location details sent upon registration</span>
            <span>|</span>
            <a 
              href="https://miny.subwaymusician.xyz/" 
              className="text-white hover:text-indigo-200 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create your EPK now to waive the $49 registration fee →
            </a>
          </div>
        </div>
      </div>

      {/* Rest of Header component remains the same */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music2 className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">MINY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}