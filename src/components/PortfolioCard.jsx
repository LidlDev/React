import React from 'react';
import { motion } from 'framer-motion';

const PortfolioCard = ({ project }) => {
  const { title, description, imageUrl, tags } = project;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={imageUrl || 'https://via.placeholder.com/400x250/174E4F/F3E5C3?text=Project'} // Placeholder
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary-dark mb-2">{title}</h3>
        <p className="text-neutral-gray font-lora text-sm mb-4 flex-grow">{description}</p>
        <div className="mt-auto">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="text-xs bg-accent-aqua text-primary-dark px-2 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;