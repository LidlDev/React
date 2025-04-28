import React from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = ({ projects }) => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-100"> {/* Slightly different background for contrast */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark">
          My Work
        </h2>
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-gray">No projects to display yet.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;