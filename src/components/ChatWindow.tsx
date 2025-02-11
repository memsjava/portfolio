import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MoreVertical, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatSession {
  id: string;
  messages: Message[];
  created_at: string;
  updated_at: string;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_SYSTEM_PROMPT = `coucou toi`;

// Fetch configuration to ignore SSL certificate validation
const fetchConfig = {
  credentials: 'include' as RequestCredentials,
  mode: 'cors' as RequestMode,
  headers: {
    'Content-Type': 'application/json',
  },
};

const ChatWindow = ({ isOpen, onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState(DEFAULT_SYSTEM_PROMPT);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Load current session when component mounts
    loadCurrentSession();
  }, []);

  const loadCurrentSession = async () => {
    try {
      const response = await fetch('https://trano-vacance.mg/chat/current-session', fetchConfig);
      
      if (response.ok) {
        const session = await response.json();
        setMessages(session.messages.length > 0 ? session.messages : [{
          role: 'assistant',
          content: "Hi! I'm Eric. A Specialist AI Integration. How can I help you today??"
        }]);
      } else {
        setMessages([{
          role: 'assistant',
          content: "Hi! I'm Eric. A Specialist AI Integration. How can I help you today??"
        }]);
      }
    } catch (error) {
      console.error('Error loading session:', error);
      setMessages([{
        role: 'assistant',
        content: "Hi! I'm Eric. A Specialist AI Integration. How can I help you today??"
      }]);
    }
  };

  const clearSession = async () => {
    try {
      await fetch('https://trano-vacance.mg/chat/sessions/clear', {
        ...fetchConfig,
        method: 'POST',
      });
      setMessages([{
        role: 'assistant',
        content: "Hi! I'm Eric. A Specialist AI Integration. How can I help you today??"
      }]);
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://trano-vacance.mg/chat/message', {
        ...fetchConfig,
        method: 'POST',
        body: JSON.stringify({
          messages: [...messages, userMessage],
          system_prompt: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-0 right-0 w-full md:bottom-4 md:right-4 md:w-96 bg-background rounded-lg shadow-lg border border-border z-50"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Chat with Eric</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={clearSession}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Chat
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-[50vh] md:h-[400px] p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="chat-messages" ref={messagesEndRef}>
                {messages.map((message, index) => (
                  <div key={index} 
                    className={`message ${message.role} ${
                      message.role === 'user'
                        ? 'ml-auto bg-primary text-primary-foreground'
                        : 'bg-accent'
                    } rounded-lg p-3 mb-3 max-w-[85%] md:max-w-[80%]`}
                  >
                    <ReactMarkdown className="text-sm prose prose-sm dark:prose-invert max-w-none">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ))}
              </div>
              {isLoading && (
                <div className="bg-accent rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Thinking...</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-md border border-input bg-background"
                disabled={isLoading}
              />
              <Button
                size="icon"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
