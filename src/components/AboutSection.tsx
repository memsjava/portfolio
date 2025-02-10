import { motion } from 'framer-motion';
import { Brain, Code, Database, Network } from 'lucide-react';

const skills = [
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Expert in implementing various AI models and solutions"
  },
  {
    icon: Code,
    title: "Integration Development",
    description: "Seamless integration of AI with existing systems"
  },
  {
    icon: Network,
    title: "API Development",
    description: "Creating robust APIs for AI service consumption"
  },
  {
    icon: Database,
    title: "Data Architecture",
    description: "Designing scalable data solutions for AI systems"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Eric</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As an AI Integration Specialist, I excel in bridging the gap between cutting-edge AI technology
            and practical business applications. With expertise in implementing AI solutions and creating
            seamless integrations, I help organizations leverage artificial intelligence to drive innovation
            and achieve their strategic goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 text-primary">
                <skill.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
