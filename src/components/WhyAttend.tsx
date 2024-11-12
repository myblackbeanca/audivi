import React from 'react';
import { Users, Target, ShoppingBag, BarChart3 } from 'lucide-react';

export function WhyAttend() {
  return (
    <section id="why-attend" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Attend?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your artistic journey with proven strategies to build and nurture your fanbase
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Identify & Engage Superfans</h3>
                <p className="text-gray-600">Learn to identify and nurture relationships with your most dedicated supporters</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Targeted Marketing</h3>
                <p className="text-gray-600">Master geolocation insights to reach your ideal audience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <ShoppingBag className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increase Merchandise Sales</h3>
                <p className="text-gray-600">Optimize your merch strategy using fan insights and data</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <BarChart3 className="h-8 w-8 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Refine Content Strategy</h3>
                <p className="text-gray-600">Create content that resonates and converts casual listeners to superfans</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Artist performing live"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}