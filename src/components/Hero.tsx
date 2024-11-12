import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      className="pt-32 pb-20 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your First 1000 Fans - Discover & Cultivate with MINY
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join MINY's exclusive event for indie artists to discover, engage, and grow a loyal fanbase
        </p>
        <a
          href="#register"
          className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors"
        >
          RSVP Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}