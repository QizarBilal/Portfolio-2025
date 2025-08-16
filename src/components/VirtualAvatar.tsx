import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const VirtualAvatar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hi there! 👋 I'm Mohammed Qizar Bilal. Feel free to ask me anything about my skills, projects, or experience!");
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    // Personal information responses
    if (input.includes('who are you') || input.includes('introduce yourself')) {
      return "I'm Mohammed Qizar Bilal, a passionate AI-powered Full Stack Developer currently pursuing my Bachelor's in Computer Science Engineering at Priyadarshini Engineering College in Tamil Nadu, India. I specialize in building intelligent applications using modern technologies and AI integration!";
    }
    
    if (input.includes('education') || input.includes('study') || input.includes('college')) {
      return "I'm currently pursuing my Bachelor of Engineering in Computer Science at Priyadarshini Engineering College (2022-2026) with a CGPA of 8.8. I also completed my Higher Secondary Certificate in Computer Science from Al-Ameen Matric Hr. Sec. School with 85%.";
    }
    
    if (input.includes('experience') || input.includes('work')) {
      return "I have hands-on experience as an AI Developer Intern at Flutions India Pvt. Ltd., where I built intelligent systems and ML models. I've also completed certifications from IBM and EduNet Foundation, specializing in AI, cloud computing, and software development.";
    }
    
    if (input.includes('skills') || input.includes('technologies')) {
      return "I'm proficient in React.js, TypeScript, Python, Machine Learning, AI integration, Flask, Streamlit, and modern web technologies. I love working with AI/ML models and building intelligent user interfaces!";
    }
    
    if (input.includes('projects')) {
      return "I've built several exciting projects including an AI-Powered Resume Parser using Gemini AI, an Employee Salary Prediction model with interactive visualizations, and various web applications. Each project showcases my passion for combining AI with practical solutions!";
    }
    
    if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return "You can reach me at bilalqizar@gmail.com or call me at +91 8925426680. I'm also active on GitHub (@QizarBilal) and LinkedIn (mohammed-qizar-bilal). I'm always excited to discuss new opportunities!";
    }
    
    if (input.includes('location') || input.includes('where')) {
      return "I'm based in Tirupathur, Tamil Nadu, India. I'm open to remote opportunities and love collaborating with teams worldwide!";
    }
    
    if (input.includes('hire') || input.includes('available') || input.includes('job')) {
      return "Yes! I'm actively seeking opportunities as a Full Stack Developer or AI Engineer. I'm passionate about building innovative solutions and would love to contribute to exciting projects. Let's connect!";
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! Great to meet you! 😊 I'm Mohammed Qizar Bilal. What would you like to know about my background, projects, or skills?";
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return "You're very welcome! Happy to help! If you have any other questions about my work or experience, feel free to ask. 😊";
    }
    
    // Default response
    return "That's an interesting question! While I'd love to chat more about that, I'm specifically designed to share information about Mohammed Qizar Bilal's professional background, skills, and projects. Feel free to ask about my education, experience, projects, or how to get in touch!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(userMessage);
      addBotMessage(response);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Floating Avatar Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Avatar Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-500" />
          
          {/* Avatar Image */}
          <img
            src="/logos/QizarBilal.png"
            className="absolute inset-0 w-full h-full object-cover rounded-full"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">MQB</div>';
              }
            }}
          />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-bg-primary border border-accent/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-accent to-primary-500 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden border-2 border-white/30">
                    <img
                      src="/logos/QizarBilal.png"
                      alt="Mohammed Qizar Bilal"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML += '<div class="w-full h-full flex items-center justify-center font-bold text-white text-sm">MQB</div>';
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">Mohammed Qizar Bilal</h3>
                    <p className="text-sm opacity-90">Virtual Me</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      message.sender === 'user' 
                        ? 'bg-accent text-white' 
                        : 'bg-gradient-to-br from-accent to-primary-500 text-white'
                    }`}>
                      {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-accent text-white rounded-tr-sm'
                        : 'bg-bg-secondary text-text-primary rounded-tl-sm'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary-500 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-bg-secondary p-3 rounded-2xl rounded-tl-sm">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-text-secondary rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-text-secondary rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-text-secondary rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-accent/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 p-3 bg-bg-secondary rounded-2xl text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  disabled={isTyping}
                />
                <motion.button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-accent text-white rounded-2xl hover:bg-accent/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
