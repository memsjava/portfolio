import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ProjectsSectionProps {
  onOpenChat: () => void;
}

const projects = [
  {
    title: "AI Chat message & voice bot",
    description: "Developed a WhatsApp chatbot for vehicle assistance using OpenAI. Integrated voice & text processing for seamless user interactions",
    tags: ["OpenAI", "React", "Node.js"],
    image: "https://plus.unsplash.com/premium_photo-1683936163516-ec4c53227e26?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1683936163516-ec4c53227e26?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.charlie24.com/en-LU/"
  },
  {
    title: "Computer Vision System",
    description: "Developed an AI-powered computer vision system for real-time paddle tennis ball tracking and game analysis",
    tags: ["TensorFlow", "Python", "AWS"],
    image: "https://media.istockphoto.com/id/1517473680/photo/paddle-tennis-player-making-an-effort-to-while-hitting-the-ball-during-a-match-on-outdoor.jpg?s=1024x1024&w=is&k=20&c=XcC8U8uBQ8KXYcjTNu7Zev6w3EdGa6iPbCeyJpK9ukQ=",
    link: "https://www.gamecam.live/purchase/"
  },
  {
    title: "AI-Powered Trading Bot",
    description: "Developed an AI-driven crypto trading bot using machine learning for price prediction and automated trading strategies",
    tags: ["Python", "Machine Learning", "Crypto"],
    image: "https://plus.unsplash.com/premium_photo-1675876765105-f1422c25011a?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yexo.io"
  }
];

const ProjectsSection = ({ onOpenChat }: ProjectsSectionProps) => {

  function openLink(link: string): void {
    // open link to new tab
    window.open(link, '_blank');
  }

  return (
    <section id="projects-section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            A selection of my most impactful AI integration projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto text-xs md:text-sm"
                    onClick={() => openLink(project.link)}
                  >
                    View Project
                  </Button>
                  <Button
                    size="sm"
                    className="w-full sm:w-auto text-xs md:text-sm"
                    onClick={() => onOpenChat()}
                  >
                    Discuss Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
