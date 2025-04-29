import React from 'react';
import profilePic from '../assets/harry-profile.png'; 

const About = () => {
  const skills = [
    "Mobile: Android (Java, Kotlin), iOS (Swift), Flutter",
    "Backend: Firebase, RESTful APIs, Cloud Services",
    "UI/UX: Material Design, Figma, Responsive Design",
    "Tools: Git, Docker, Jira",
    "Languages: Java, Kotlin, Dart, Swift, JavaScript"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-primary-light text-neutral-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Optional: Profile Picture with funky shape */}
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-8 md:mb-0 relative funky-shape-bg">
             <img
               src={profilePic}
               alt="Harry - Developer"
               className="rounded-full w-full h-full object-cover border-4 border-primary-light shadow-lg relative z-10"
             />
           </div>

          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-semibold text-primary-dark mb-4">Hello! I’m Harry.</h3>
            <p className="text-neutral-gray mb-6 font-lora text-lg leading-relaxed">
              A passionate and dedicated developer specializing in creating user-friendly and efficient mobile applications. With a background in computer science and software engineering, I build solutions that solve real-world problems and enhance user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 className="text-xl font-semibold text-primary-dark mb-3">Current Focus & Goals</h4>
                    <p className="text-neutral-gray font-lora mb-3">
                         Developing innovative apps like "Spike!" for volleyball teams. I pride myself on clean code and always seek new challenges.
                    </p>
                     <p className="text-neutral-gray font-lora">
                        My goal is to create meaningful software and collaborate on exciting projects. Let's connect!
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold text-primary-dark mb-3">Skills</h4>
                     <ul className="list-disc list-inside text-neutral-gray font-lora space-y-1">
                       {skills.map((skill, index) => (
                         <li key={index}>{skill}</li>
                       ))}
                     </ul>
                </div>
            </div>
             <blockquote className="border-l-4 border-accent-coral pl-4 py-2 text-neutral-gray italic font-lora text-lg">
               Small indie dev aiming to produce high quality and useful solutions for real people.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;