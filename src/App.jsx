import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection'; // Import animation wrapper
import Spike from './assets/Spike.png'
import Chess from './assets/chess.jpeg'
import projectIMG from './assets/project-x.jpg'

function App() {
  // Example portfolio data (replace with your actual projects)
  const projects = [
    { id: 1, title: 'Spike! Volleyball App', description: 'Interactive app for volleyball teams, communication, and training.', imageUrl: Spike, tags: ['Flutter', 'Firebase', 'Mobile'] },
    { id: 2, title: 'Chess App', description: 'A classic chess game implementation with AI opponent.', imageUrl: Chess, tags: ['Java', 'Android', 'Game Dev'] },
    { id: 3, title: 'Project X', description: 'Another awesome project showcasing different skills.', imageUrl: projectIMG, tags: ['React', 'Node.js', 'Web'] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary-light">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AnimatedSection> {/* Wrap sections for animation */}
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <PortfolioSection projects={projects} />
        </AnimatedSection>
        <AnimatedSection>
            <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

export default App;