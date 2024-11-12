import React from 'react';
import { RegistrationForm } from './RegistrationForm';

export function RegistrationSection() {
  return (
    <section id="register" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">RSVP Now</h2>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}