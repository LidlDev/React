import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position when in view
      viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% is visible
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;