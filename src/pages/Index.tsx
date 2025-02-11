import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ChatWindow from '../components/ChatWindow';
import { useChatStore } from '../store/chatStore';

const Index = () => {
  const { isOpen, setIsOpen } = useChatStore();

  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection onOpenChat={() => setIsOpen(true)} />
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Index;
