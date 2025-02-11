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
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful AI integration projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="project-card h-full overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-accent px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => openLink(project.link)}
                  >
                    Go to check it out
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
