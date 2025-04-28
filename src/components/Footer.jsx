import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-dark text-neutral-gray py-8">
      <div className="container mx-auto px-6 text-center">
         {/* Optional: Social Links */}
         {/* <div className="flex justify-center space-x-6 mb-4">
           <a href="#" className="hover:text-accent-aqua transition-colors">LinkedIn</a>
           <a href="#" className="hover:text-accent-aqua transition-colors">GitHub</a>
           <a href="#" className="hover:text-accent-aqua transition-colors">Twitter</a>
         </div> */}
        <p className="text-sm">&copy; {currentYear} LidlDev. All rights reserved.</p>
        <p className="text-xs mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;