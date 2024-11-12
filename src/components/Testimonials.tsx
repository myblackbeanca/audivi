import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from artists who transformed their careers through our workshop
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Sarah Martinez performing at a concert"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "MINY's workshop was a game-changer. I implemented their superfan strategy and saw my monthly listeners grow from 500 to 15,000 in just 6 months."
              </blockquote>
              <footer>
                <cite className="font-semibold text-gray-900 block">Sarah Martinez</cite>
                <span className="text-gray-600 text-sm">Independent Artist, Los Angeles</span>
              </footer>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Marcus Chen in his home studio"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "The fan engagement techniques I learned helped me triple my merchandise sales. My fans are now my biggest marketing asset."
              </blockquote>
              <footer>
                <cite className="font-semibold text-gray-900 block">Marcus Chen</cite>
                <span className="text-gray-600 text-sm">Electronic Producer, New York</span>
              </footer>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Luna James performing with her band"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Within 3 months of applying MINY's strategies, I built a dedicated community of superfans who now fund my music through monthly subscriptions."
              </blockquote>
              <footer>
                <cite className="font-semibold text-gray-900 block">Luna James</cite>
                <span className="text-gray-600 text-sm">Indie Folk Artist, Austin</span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}