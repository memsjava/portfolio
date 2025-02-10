import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ChatWindow from "@/components/ChatWindow";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection onOpenChat={() => setIsChatOpen(true)} />
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </main>
  );
};

export default Index;
