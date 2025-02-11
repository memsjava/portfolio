import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useChatStore } from '../store/chatStore';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setIsOpen } = useChatStore();

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'hero-particle';
      
      // Randomize particle properties for more AI-like effect
      const size = Math.random() * 12 + 4; // Larger size range
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Use more tech/AI-like colors (cyan, blue, purple)
      const colorTypes = [
        'hsl(230, 80%, 75%)', // Blue
        'hsl(280, 80%, 75%)', // Purple
        'hsl(190, 80%, 75%)', // Cyan
      ];
      particle.style.backgroundColor = colorTypes[Math.floor(Math.random() * colorTypes.length)];
      
      // Add glow effect
      particle.style.boxShadow = `0 0 ${size}px ${size/2}px ${particle.style.backgroundColor}`;
      particle.style.filter = 'blur(1px)';
      
      // Position and animate
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = '0';
      particle.style.transform = 'scale(0)';
      particle.style.transition = 'all 3s ease-out';
      
      containerRef.current.appendChild(particle);
      
      // Start animation
      setTimeout(() => {
        particle.style.opacity = '0.8';
        particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1)`;
      }, 10);
      
      // Remove particle
      setTimeout(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0)';
        setTimeout(() => particle.remove(), 3000);
      }, 2000);
    };

    // Create particles more frequently for a denser effect
    const interval = setInterval(createParticle, 150);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-background">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}
      />
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary mb-4 tracking-wide"
          >
            Eric - AI Integration Specialist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bringing AI Solutions
            <br />
            to Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Specializing in seamless integration of artificial intelligence
            solutions for modern businesses
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button size="lg" className="mr-4" onClick={scrollToProjects}>
              View Projects
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsOpen(true)}>
              Talk to Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
    </div>
  );
};

export default HeroSection;
