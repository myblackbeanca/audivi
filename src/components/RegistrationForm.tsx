import React, { useState } from 'react';

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    'Full Name': '',
    'Email': '',
    'Phone Number': '',
    'EPK URL': '',
    'Attendance Type': 'In-Person'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const formParams = new URLSearchParams(formData).toString();
      const response = await fetch('https://script.google.com/macros/s/AKfycbwozGnlN-6cXmtoxWy62SluDYYrEiiZwfvqcVqQMelt9PpmBrNoDRMh6MWg-tgelvjS/exec', {
        method: 'POST',
        body: formParams,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 bg-green-50 rounded-lg">
        <h3 className="text-2xl font-bold text-green-700 mb-4">Thank you for your RSVP!</h3>
        <p className="text-gray-600">
          {formData['Attendance Type'] === 'In-Person'
            ? 'Venue details will be sent to you via email and text.'
            : 'Event link will be sent to you via email and text.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="Full Name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData['Full Name']}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="Email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData['Email']}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="Phone Number"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData['Phone Number']}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="epkUrl" className="block text-sm font-medium text-gray-700">
          EPK URL (Optional - saves $49 registration fee)
        </label>
        <input
          type="url"
          id="epkUrl"
          name="EPK URL"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData['EPK URL']}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="attendanceType" className="block text-sm font-medium text-gray-700">
          Attendance Type
        </label>
        <select
          id="attendanceType"
          name="Attendance Type"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData['Attendance Type']}
          onChange={handleChange}
        >
          <option value="In-Person">In-Person</option>
          <option value="Virtual">Virtual</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Confirm RSVP'}
      </button>
    </form>
  );
}