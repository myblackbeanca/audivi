import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DashboardPreview } from './components/DashboardPreview';
import { EPKSection } from './components/EPKSection';
import { WhyAttend } from './components/WhyAttend';
import { Testimonials } from './components/Testimonials';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DashboardPreview />
      <EPKSection />
      <WhyAttend />
      <Testimonials />
      <RegistrationSection />
      <Footer />
    </div>
  );
}