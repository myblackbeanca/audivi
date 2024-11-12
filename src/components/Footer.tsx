import React from 'react';
import { Music2, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music2 className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">MINY</span>
            </div>
            <p className="text-gray-400">
              Empowering indie artists to build meaningful connections with their fans.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://fanvalue.minyvinyl.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Revenue Estimator
                </a>
              </li>
              <li>
                <a 
                  href="https://drop.minyvinyl.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Drop a MINY
                </a>
              </li>
              <li>
                <a href="#details" className="text-gray-400 hover:text-white transition-colors">
                  Event Details
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">
                  RSVP Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Questions? Reach out to us at{' '}
              <a href="mailto:hello@minyvinyl.com" className="text-indigo-400 hover:text-indigo-300">
                hello@minyvinyl.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MINY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}