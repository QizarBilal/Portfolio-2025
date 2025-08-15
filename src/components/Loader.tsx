import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, FileCode, GitBranch, Cpu } from 'lucide-react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [showComplete, setShowComplete] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);

  // Coding-focused loading steps that match portfolio theme
  const loadingSteps = useMemo(() => [
    "$ git clone portfolio.git",
    "$ npm install dependencies",
    "$ tsc --build --watch",
    "$ webpack --mode production",
    "$ docker compose up -d",
    "$ npm run deploy",
    "✅ Portfolio Ready!"
  ], []);

  // Technologies from your portfolio
  const technologies = useMemo(() => [
    'React', 'TypeScript', 'Python', 'AI/ML', 'Framer Motion', 'Tailwind'
  ], []);

  // Code snippets that appear during loading
  const codeSnippets = useMemo(() => [
    "const portfolio = new Developer();",
    "portfolio.addSkill('React');",
    "portfolio.addSkill('Python');",
    "portfolio.deploy();",
    "console.log('Welcome!');",
  ], []);

  useEffect(() => {
    // Precisely controlled 7-second loading
    const totalDuration = 7000;
    const updateInterval = 50; // Smooth 50ms updates
    const totalUpdates = totalDuration / updateInterval; // 140 updates
    
    let updateCount = 0;
    
    // Animate code snippets
    const codeInterval = setInterval(() => {
      if (codeSnippets.length > 0) {
        const randomIndex = Math.floor(Math.random() * codeSnippets.length);
        setCodeLines(prev => {
          const newLines = [...prev, codeSnippets[randomIndex]];
          return newLines.slice(-5); // Keep only last 5 lines
        });
      }
    }, 800);
    
    const progressInterval = setInterval(() => {
      updateCount++;
      const newProgress = (updateCount / totalUpdates) * 100;
      
      // Update current step based on progress
      const stepIndex = Math.floor((newProgress / 100) * loadingSteps.length);
      setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
      setLoadingText(loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)]);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval);
        clearInterval(codeInterval);
        setProgress(100);
        setShowComplete(true);
        
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } else {
        setProgress(newProgress);
      }
    }, updateInterval);

    return () => {
      clearInterval(progressInterval);
      clearInterval(codeInterval);
    };
  }, [onLoadingComplete, loadingSteps, codeSnippets]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-bg-primary overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6 }}
      >
        {/* Dynamic Background with Coding Elements */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Floating Code Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              animate={{
                x: [0, window.innerWidth || 1200],
                y: [
                  Math.random() * (window.innerHeight || 800),
                  Math.random() * (window.innerHeight || 800)
                ],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          {/* Portfolio Header with Coding Theme */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Brackets */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div
                className="text-accent text-6xl font-mono mr-4"
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                &lt;
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Mohammed Qizar Bilal
              </motion.h1>
              
              <motion.div
                className="text-accent text-6xl font-mono ml-4"
                animate={{ rotateY: [0, -180, -360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                /&gt;
              </motion.div>
            </motion.div>
            
            <motion.p
              className="text-text-secondary text-lg font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              AI-Powered Developer Portfolio
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Terminal Window */}
            <motion.div
              className="glass-effect rounded-lg border border-accent/20 overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="bg-bg-secondary/50 px-4 py-3 border-b border-accent/10 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Terminal size={14} className="text-accent" />
                  <span className="text-xs text-text-secondary font-mono">portfolio-loader</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 h-48 bg-bg-primary/30 font-mono text-sm">
                {/* Current Loading Step */}
                <motion.div
                  className="flex items-center space-x-2 mb-4"
                  key={currentStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-accent">$</span>
                  <span className="text-text-primary">{loadingText}</span>
                  <motion.span
                    className="text-accent"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.div>
                
                {/* Animated Code Lines */}
                <div className="space-y-1 text-xs text-text-secondary/70">
                  <AnimatePresence mode="popLayout">
                    {codeLines.map((line, index) => (
                      <motion.div
                        key={`${line}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-accent/50">→</span>
                        <span>{line}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Progress & Tech Stack */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {/* Progress Section */}
              <div className="glass-effect rounded-lg p-6 border border-accent/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Cpu className="text-accent" size={20} />
                  <h3 className="text-text-primary font-semibold">Loading Progress</h3>
                </div>
                
                {/* Progress Bar with Code Theme */}
                <div className="relative">
                  <div className="w-full h-3 bg-bg-secondary/50 rounded-full overflow-hidden border border-accent/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-primary-400 rounded-full relative"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                    >
                      {/* Animated progress shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress Text */}
                  <div className="flex justify-between mt-3 text-sm">
                    <span className="text-text-secondary font-mono">{Math.round(progress)}%</span>
                    <span className="text-accent font-mono">
                      {currentStep + 1}/{loadingSteps.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Grid */}
              <div className="glass-effect rounded-lg p-6 border border-accent/20">
                <div className="flex items-center space-x-3 mb-4">
                  <FileCode className="text-accent" size={20} />
                  <h3 className="text-text-primary font-semibold">Tech Stack</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="glass-effect px-3 py-2 rounded-lg text-sm font-medium text-center border border-accent/10 hover:border-accent/30 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: 2 + index * 0.1,
                        duration: 0.5,
                        type: "spring"
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Code size={12} className="text-accent" />
                        <span className="text-text-primary">{tech}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Status Bar */}
          <motion.div
            className="mt-12 flex justify-between items-center text-xs font-mono text-text-secondary/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <GitBranch size={12} className="text-accent" />
                <span>main</span>
              </div>
              <div>v2025.1.0</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div>TypeScript React</div>
              <div>© 2025 MQB</div>
            </div>
          </motion.div>

          {/* Completion Message */}
          <AnimatePresence>
            {showComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center bg-bg-primary/80 backdrop-blur-sm"
              >
                <div className="glass-effect rounded-2xl p-8 border border-accent/30">
                  <motion.div
                    className="text-center"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-6xl mb-4">🚀</div>
                    <h2 className="text-2xl font-bold text-accent mb-2">Portfolio Loaded!</h2>
                    <p className="text-text-secondary">Welcome to my coding journey</p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;

