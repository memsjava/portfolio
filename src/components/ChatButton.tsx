import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

const ChatButton = () => {
  const { isOpen, setIsOpen } = useChatStore();

  if (isOpen) return null;

  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl z-50"
      onClick={() => setIsOpen(true)}
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};

export default ChatButton;
