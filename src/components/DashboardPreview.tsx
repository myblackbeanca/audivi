import React from 'react';

export function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">MINY Superfan Insights Dashboard</h2>
          <p className="text-xl text-gray-600">
            Connect with your top 1000 fans through data-driven insights and engagement strategies
          </p>
        </div>
        
        <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://player.vimeo.com/video/1027820934?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="MINY Superfan Insights Dashboard: Connecting Artists to Their Top 1000 Fans"
          ></iframe>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leave with an actionable plan to identify and capture valuable fan data that drives engagement and growth
          </p>
        </div>
      </div>
    </section>
  );
}