import React from 'react';
import { Music2, Music4, Video, Instagram, ArrowRight } from 'lucide-react';

export function EPKSection() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Music2 className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Create Your EPK & Save $49</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Music4 className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-lg font-semibold">Spotify Account</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Video className="w-12 h-12 mx-auto mb-4 text-red-500" />
              <h3 className="text-lg font-semibold">YouTube Channel</h3>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-lg font-semibold">Instagram Profile</h3>
            </div>
          </div>
          <a
            href="https://miny.subwaymusician.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors"
          >
            Create Your EPK Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}