import { motion } from 'framer-motion';
import { Brain, Code, Database, Network } from 'lucide-react';
import { Button } from './ui/button';
import { useChatStore } from '../store/chatStore';

const skills = [
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Expert in implementing various AI models and solutions, specializing in LLMs and computer vision"
  },
  {
    icon: Code,
    title: "Integration Development",
    description: "Seamless integration of AI with existing systems and modern web applications"
  },
  {
    icon: Network,
    title: "API Development",
    description: "Creating robust APIs for AI service consumption with high scalability"
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Designing scalable data solutions for AI systems and real-time processing"
  }
];

const AboutSection = () => {
  const { setIsOpen } = useChatStore();

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Eric</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            As an AI Integration Specialist, I excel in bridging the gap between cutting-edge AI technology
            and practical business applications. With expertise in implementing AI solutions and creating
            seamless integrations, I help organizations leverage artificial intelligence to drive innovation
            and achieve their strategic goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <skill.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-2 text-center">{skill.title}</h3>
              <p className="text-muted-foreground text-center text-xs md:text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button onClick={() => setIsOpen(true)}>
            Let's Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
