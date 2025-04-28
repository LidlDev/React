import React from 'react';

const ContactForm = () => {
  // Basic form structure - needs state handling and submission logic
  // You might use libraries like 'react-hook-form' for easier handling
  // Or integrate with a backend service (Netlify Forms, Formspree, custom backend)

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary-dark text-primary-light">
       {/* Optional: Another background shape/divider */}
       <div className="absolute top-0 left-0 w-full h-16 bg-gray-100" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <form className="max-w-xl mx-auto bg-primary-light p-8 rounded-lg shadow-xl text-neutral-dark">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-bold mb-2 text-primary-dark">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-coral focus:border-accent-coral" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-primary-dark">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-coral focus:border-accent-coral" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2 text-primary-dark">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent-coral focus:border-accent-coral"></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-accent-coral text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105"
             >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;