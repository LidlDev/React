import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary-dark text-primary-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold font-montserrat hover:text-accent-aqua transition-colors">
          LidlDev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accent-aqua transition-colors px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

         {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

       {/* Mobile Menu (Dropdown) */}
       <motion.div
         initial={{ height: 0, opacity: 0 }}
         animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
         transition={{ duration: 0.3 }}
         className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'} bg-primary-dark`}
       >
         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           {links.map(link => (
             <a
               key={link.label}
               href={link.href}
               onClick={() => setIsOpen(false)} // Close menu on click
               className="block px-3 py-2 rounded-md text-base font-medium text-primary-light hover:bg-primary-dark/70 hover:text-accent-aqua transition-colors"
             >
               {link.label}
             </a>
           ))}
         </div>
       </motion.div>
    </nav>
  );
};

export default Navbar;