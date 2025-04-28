import React from 'react';
import { motion } from 'framer-motion';

// Example: You might want a subtle background pattern or image
// import heroBg from '../assets/flowy-background.svg'; // Example import

const Hero = () => {
  return (
    <section id="hero" className="relative text-white bg-primary-dark overflow-hidden">
        {/* Optional: Flowy background shape/image */}
        {/* Example using gradient + clip-path */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-teal-800 to-accent-aqua opacity-80"
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)' }}>
        </div>
         {/* Example using an SVG background */}
         {/* <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" /> */}


      <div className="relative container mx-auto px-6 py-24 md:py-36 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-primary-light drop-shadow-lg"
        >
          LidlDev
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-lora text-primary-light/90 max-w-2xl mx-auto mb-8 drop-shadow-md"
        >
          Passionate developer creating user-friendly & efficient mobile applications. Bringing ideas to life with code.
        </motion.p>
        <motion.a
          href="#portfolio"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(243, 229, 195, 0.5)"}}
          className="inline-block bg-accent-coral text-primary-dark font-bold py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          View My Work
        </motion.a>
      </div>
       {/* Optional: Add another subtle decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-primary-light" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}></div>
    </section>
  );
};

export default Hero;