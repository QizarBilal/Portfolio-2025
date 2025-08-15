import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Code, Brain, Palette, ChevronRight, Award, Terminal, Layers, Github, Database, Cpu, Zap, Braces } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    // Add small delay to ensure menu closes first
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${sectionId}" not found`);
      }
    }, 100);
  };

  const roles = [
    "Full Stack Developer",
    "AI-Powered Engineer", 
    "Innovation Architect",
    "Digital Problem Solver",
    "Technology Catalyst"
  ];

  const achievements = [
    { icon: Code, label: "Frontend Development", description: "React, TypeScript, Modern UI" },
    { icon: Brain, label: "AI Integration", description: "Machine Learning, API Integration" },
    { icon: Palette, label: "UI/UX Design", description: "Figma, Responsive Design" }
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    
    return () => {
      clearInterval(roleInterval);
    };
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-primary via-bg-secondary/30 to-bg-primary pt-20 pb-16">
      
      {/* Floating Top Navigation Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="glass-effect rounded-2xl border border-accent/20 px-6 py-3 backdrop-blur-xl bg-bg-primary/80 shadow-lg"
            animate={{
              boxShadow: [
                "0 4px 20px rgba(0,0,0,0.1)",
                "0 8px 30px rgba(var(--color-accent-rgb), 0.2)",
                "0 4px 20px rgba(0,0,0,0.1)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="flex items-center justify-between">
              
              {/* Left Side - Brand/Logo */}
              <motion.div
                className="flex items-center space-x-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-accent to-primary-400 rounded-lg flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  whileHover={{ scale: 1.2, rotate: 180 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-white rounded-sm"
                    animate={{ rotate: [-360, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
                <motion.span
                  className="text-text-primary font-bold text-lg bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  MQB
                </motion.span>
              </motion.div>

              {/* Center - Sleek Modern Navigation */}
              <motion.div
                className="hidden md:flex items-center space-x-2"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                {[
                  { label: "About", sectionId: "about" },
                  { label: "Education", sectionId: "education" },
                  { label: "Experience", sectionId: "experience" },
                  { label: "Projects", sectionId: "projects" },
                  { label: "Skills", sectionId: "skills" },
                  { label: "Contact", sectionId: "contact" }
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="group relative px-6 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 overflow-hidden"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Modern Glass Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100"
                      whileHover={{
                        background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.08), rgba(var(--color-primary-400-rgb), 0.04), rgba(255,255,255,0.02))"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Sleek Border */}
                    <motion.div
                      className="absolute inset-0 border border-transparent rounded-xl opacity-0 group-hover:opacity-100"
                      whileHover={{
                        borderColor: "rgba(var(--color-accent-rgb), 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Button Text */}
                    <span className="relative z-10 tracking-wide">
                      {item.label}
                    </span>

                    {/* Modern Underline */}
                    <motion.div
                      className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-accent to-primary-400 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "70%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    {/* Subtle Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                ))}
              </motion.div>

              {/* Sleek Mobile Menu Button */}
              <motion.button
                className="md:hidden relative p-3 rounded-xl group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {/* Modern Glass Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl"
                  whileHover={{
                    background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.1), rgba(var(--color-primary-400-rgb), 0.05), rgba(255,255,255,0.03))",
                    borderColor: "rgba(var(--color-accent-rgb), 0.2)"
                  }}
                />

                {/* Animated Menu Icon */}
                <motion.div
                  className="relative z-10 flex flex-col space-y-1.5 w-5 h-5"
                  animate={{ 
                    rotate: isMobileMenuOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-5 h-0.5 bg-text-primary rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="w-5 h-0.5 bg-text-primary rounded-full"
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                      x: isMobileMenuOpen ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="w-5 h-0.5 bg-text-primary rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Subtle Glow on Hover */}
                <motion.div
                  className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
                  transition={{ duration: 0.4 }}
                />
              </motion.button>

              {/* Right Side - Status & CTA */}
              <motion.div
                className="flex items-center space-x-2 lg:space-x-3"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {/* Status Indicator */}
                <motion.div
                  className="hidden sm:flex items-center space-x-1.5 lg:space-x-2 px-2 lg:px-3 py-1.5 bg-accent/10 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-accent-rgb), 0.15)" }}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0px rgba(34, 197, 94, 0.5)",
                        "0 0 10px rgba(34, 197, 94, 0.8)",
                        "0 0 0px rgba(34, 197, 94, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-text-secondary">Available</span>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="relative px-3 lg:px-4 py-2 bg-gradient-to-r from-accent to-primary-400 text-white rounded-xl font-medium text-xs lg:text-sm shadow-lg overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(var(--color-accent-rgb), 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  animate={{
                    background: [
                      "linear-gradient(45deg, var(--color-accent), var(--color-primary-400))",
                      "linear-gradient(45deg, var(--color-primary-400), var(--color-accent))",
                      "linear-gradient(45deg, var(--color-accent), var(--color-primary-400))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center space-x-1">
                    <span>Let's Talk</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ✨
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Bottom Progress Bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent via-primary-400 to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Royal Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-20 left-4 right-4 z-40 lg:hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-surface/95 via-surface/90 to-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
              layoutId="mobile-menu"
            >
              {/* Simple Background Gradient */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(var(--color-accent-rgb), 0.05), transparent 70%)"
                }}
              />

              {/* Clean Mobile Menu Items */}
              <div className="space-y-2 relative z-10">
                {[
                  { label: "About", sectionId: "about" },
                  { label: "Education", sectionId: "education" },
                  { label: "Experience", sectionId: "experience" }, 
                  { label: "Projects", sectionId: "projects" },
                  { label: "Skills", sectionId: "skills" },
                  { label: "Contact", sectionId: "contact" }
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setIsMobileMenuOpen(false);
                    }}
                    className="group w-full p-4 text-left rounded-xl overflow-hidden relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Modern Glass Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/5 rounded-xl"
                      whileHover={{
                        background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.08), rgba(var(--color-primary-400-rgb), 0.04), rgba(255,255,255,0.02))",
                        borderColor: "rgba(var(--color-accent-rgb), 0.15)"
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Clean Content */}
                    <div className="flex items-center justify-between relative z-10">
                      <motion.span
                        className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors duration-300 tracking-wide"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {item.label}
                      </motion.span>

                      {/* Modern Arrow */}
                      <motion.div
                        className="text-text-secondary group-hover:text-accent transition-colors duration-300"
                        whileHover={{ x: 3, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <ChevronRight size={18} />
                      </motion.div>
                    </div>

                    {/* Sleek Bottom Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary-400 rounded-full"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Royal CTA Section */}
              <motion.div
                className="mt-6 pt-5 border-t border-gradient-to-r from-transparent via-white/10 to-transparent relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.button
                  className="w-full relative px-6 py-4 rounded-2xl font-semibold text-sm overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {/* Royal Gradient Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-primary-400 rounded-2xl"
                    whileHover={{
                      background: "linear-gradient(135deg, rgba(var(--color-accent-rgb), 0.9), rgba(var(--color-accent-light-rgb), 0.95), rgba(var(--color-primary-400-rgb), 0.9))"
                    }}
                  />

                  {/* Royal Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  <span className="relative z-10 flex items-center justify-center space-x-2 text-white">
                    <span>Let's Start a Project</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Royal Border Accents */}
              <motion.div
                className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/30 rounded-tl-lg"
                animate={{ 
                  borderColor: ["rgba(var(--color-accent-rgb), 0.3)", "rgba(var(--color-accent-rgb), 0.6)", "rgba(var(--color-accent-rgb), 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary-400/30 rounded-br-lg"
                animate={{ 
                  borderColor: ["rgba(var(--color-primary-400-rgb), 0.3)", "rgba(var(--color-primary-400-rgb), 0.6)", "rgba(var(--color-primary-400-rgb), 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Dynamic Background */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        {/* Large Animated Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/15 via-accent/8 to-primary-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 120, -20, 0],
            y: [0, -60, 20, 0],
            scale: [1, 1.3, 0.9, 1],
            rotate: [0, 45, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-primary-400/15 via-accent-light/8 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 40, 0],
            y: [0, 80, -30, 0],
            scale: [1.2, 0.8, 1.4, 1.2],
            rotate: [0, -60, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-500/12 to-pink-500/8 rounded-full blur-2xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 30, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-cyan-500/12 to-blue-500/8 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.7, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Smaller Accent Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`accent-${i}`}
            className="absolute w-24 h-24 rounded-full blur-xl opacity-60"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${20 + (i * 8) % 60}%`,
              background: `linear-gradient(${i * 45}deg, rgba(var(--color-accent-rgb), ${0.08 + (i % 3) * 0.02}), rgba(var(--color-primary-400-rgb), ${0.06 + (i % 2) * 0.02}))`
            }}
            animate={{
              x: [0, (i % 2 ? 30 : -30), 0],
              y: [0, (i % 3 ? -20 : 25), 0],
              scale: [0.6 + (i % 3) * 0.2, 1.2, 0.8, 0.6 + (i % 3) * 0.2],
              rotate: [0, i % 2 ? 180 : -180, 360],
            }}
            transition={{
              duration: 15 + (i % 4) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(var(--color-accent-rgb), 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0 0', '60px 60px', '0 0'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Enhanced Floating Elements with Dynamic Trails */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Particles with Enhanced Trails */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute"
            style={{
              left: `${5 + (i * 4.5) % 90}%`,
              top: `${10 + (i * 6) % 80}%`,
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-br from-accent/40 to-primary-400/30 rounded-full shadow-lg"
              animate={{
                y: [0, -35, 5, 0],
                opacity: [0.2, 1, 0.4, 0.2],
                scale: [0.8, 1.8, 1.2, 0.8],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
            {/* Enhanced Trail effect */}
            <motion.div
              className="absolute w-1 h-8 bg-gradient-to-t from-accent/25 via-accent/15 to-transparent rounded-full"
              style={{ top: '6px', left: '1px' }}
              animate={{
                opacity: [0, 0.8, 0.3, 0],
                scaleY: [0.3, 1.5, 0.8, 0.3],
                scaleX: [0.5, 1, 0.7, 0.5],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2 + 0.3,
                ease: "easeInOut"
              }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute w-3 h-3 bg-accent/10 rounded-full blur-sm"
              style={{ top: '-3px', left: '-3px' }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2 + 0.1,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}

        {/* Enhanced Coding Icons with More Variety */}
        {[
          { Icon: Terminal, pos: { top: '16%', left: '8%' }, size: 18, delay: 0, color: 'text-green-400' },
          { Icon: Code, pos: { top: '20%', right: '12%' }, size: 16, delay: 1, color: 'text-blue-400' },
          { Icon: Layers, pos: { top: '24%', left: '22%' }, size: 17, delay: 2, color: 'text-purple-400' },
          { Icon: Database, pos: { top: '12%', right: '28%' }, size: 14, delay: 0.5, color: 'text-orange-400' },
          { Icon: Cpu, pos: { top: '28%', left: '42%' }, size: 13, delay: 3, color: 'text-cyan-400' },
          { Icon: Github, pos: { top: '18%', right: '6%' }, size: 15, delay: 1.5, color: 'text-pink-400' },
          { Icon: Zap, pos: { top: '32%', right: '35%' }, size: 16, delay: 2.5, color: 'text-yellow-400' },
          { Icon: Braces, pos: { top: '14%', left: '55%' }, size: 14, delay: 1.2, color: 'text-indigo-400' }
        ].map(({ Icon, pos, size, delay, color }, index) => (
          <motion.div
            key={index}
            className={`absolute flex items-center justify-center ${color}`}
            style={{ ...pos, width: `${size + 12}px`, height: `${size + 12}px` }}
            animate={{
              y: [0, index % 2 ? -20 : 15, index % 3 ? 8 : -5, 0],
              rotate: [0, index % 2 ? 20 : -15, index % 3 ? -10 : 25, 0],
              opacity: [0.1, 0.6, 0.3, 0.1],
              scale: [0.8, 1.3, 0.9, 0.8],
            }}
            transition={{
              duration: 8 + (index % 3) * 2,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{
                rotate: [0, index % 2 ? -360 : 360],
              }}
              transition={{
                duration: 12 + index,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Icon size={size} />
            </motion.div>
            {/* Icon glow */}
            <motion.div
              className="absolute inset-0 bg-current rounded-full blur-md opacity-20"
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: delay + 1,
              }}
            />
          </motion.div>
        ))}

        {/* Floating Code Snippets */}
        {[
          { text: "{ }", pos: { top: '22%', left: '65%' }, delay: 0 },
          { text: "< />", pos: { top: '26%', right: '20%' }, delay: 1.5 },
          { text: "=>", pos: { top: '30%', left: '15%' }, delay: 3 },
          { text: "AI", pos: { top: '35%', right: '8%' }, delay: 2.2 },
        ].map(({ text, pos, delay }, index) => (
          <motion.div
            key={`code-${index}`}
            className="absolute text-accent/30 font-mono text-sm font-bold"
            style={pos}
            animate={{
              y: [0, -12, 8, 0],
              opacity: [0.2, 0.6, 0.3, 0.2],
              scale: [0.9, 1.2, 1, 0.9],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay,
              ease: "easeInOut"
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Side - Main Content */}
          <div className="space-y-4 order-2 lg:order-1">
            
            {/* Professional Badge with Animations */}
            <motion.div
              className="inline-flex items-center space-x-2 glass-effect px-3 py-2 rounded-full border border-accent/20 w-fit"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(var(--color-accent-rgb), 0.3)" 
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Award className="text-accent" size={14} />
              </motion.div>
              <span className="text-accent font-medium text-sm">Available for Opportunities</span>
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.5, 1] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Main Title with Stagger Animation */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span 
                  className="block text-text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  Mohammed
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-accent via-primary-400 to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{ 
                    opacity: { delay: 0.6, duration: 0.6 },
                    y: { delay: 0.6, duration: 0.6 },
                    backgroundPosition: { duration: 8, repeat: Infinity }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 30px rgba(var(--color-accent-rgb), 0.5)"
                  }}
                >
                  Qizar Bilal
                </motion.span>
              </h1>

              {/* Dynamic Role with Typewriter Effect */}
              <motion.div className="text-lg sm:text-xl font-medium text-text-secondary h-7 flex items-center overflow-hidden">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent"
                >
                  {roles[currentRole]}
                </motion.span>
                <motion.span
                  className="ml-1 w-0.5 h-5 bg-accent"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Professional Description */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-base text-text-secondary leading-relaxed">
                Transforming complex challenges into elegant solutions through 
                <motion.span 
                  className="text-accent font-medium mx-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  cutting-edge technology
                </motion.span>
                and innovative thinking.
              </p>
            </motion.div>

            {/* Interactive Terminal with Animations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                className="glass-effect rounded-xl border border-accent/20 overflow-hidden backdrop-blur-xl"
                whileHover={{ 
                  scale: 1.02, 
                  y: -3,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-bg-primary/80 to-bg-secondary/40 border-b border-accent/10">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      {['red', 'yellow', 'green'].map((color, index) => (
                        <motion.div 
                          key={color}
                          className={`w-3 h-3 bg-${color}-500 rounded-full`}
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [1, 0.7, 1] 
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                      ))}
                    </div>
                    <motion.span 
                      className="text-sm text-text-secondary font-mono"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      developer@portfolio:~
                    </motion.span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        boxShadow: ["0 0 0px rgba(var(--color-accent-rgb), 0.5)", "0 0 10px rgba(var(--color-accent-rgb), 0.8)", "0 0 0px rgba(var(--color-accent-rgb), 0.5)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-text-secondary">online</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="px-4 py-4 font-mono text-sm space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="flex items-center text-text-secondary">
                      <motion.span 
                        className="text-accent mr-3"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        $
                      </motion.span>
                      <span>whoami</span>
                    </div>
                    <motion.div 
                      className="ml-6 text-text-primary"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      transition={{ delay: 1.4, duration: 1 }}
                    >
                      Mohammed Qizar - Full Stack Developer & AI Enthusiast
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    <div className="flex items-center text-text-secondary">
                      <motion.span 
                        className="text-accent mr-3"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                      >
                        $
                      </motion.span>
                      <span>ls skills/</span>
                    </div>
                    <motion.div className="ml-6 text-primary-400 flex flex-wrap gap-2 text-sm">
                      {["React.js", "Python", "AI/ML", "UI/UX"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="bg-accent/10 px-2 py-1 rounded"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 + index * 0.1, type: "spring" }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(var(--color-accent-rgb), 0.2)" 
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Action Panels */}
                <div className="grid grid-cols-2 gap-3 p-4 pt-0">
                  {[
                    { icon: Code, label: "View Projects", desc: "Browse portfolio", gradient: "from-accent to-primary-400" },
                    { icon: Palette, label: "Let's Connect", desc: "Start conversation", gradient: "from-primary-400 to-accent" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 + index * 0.2 }}
                    >
                      <motion.div 
                        className="glass-effect rounded-lg p-3 border border-accent/20 hover:border-accent/40 transition-all relative overflow-hidden"
                        whileHover={{
                          boxShadow: "0 0 25px rgba(var(--color-accent-rgb), 0.2)"
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="flex items-center space-x-3 mb-2 relative z-10">
                          <motion.div 
                            className={`w-7 h-7 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="text-white" size={14} />
                          </motion.div>
                          <div>
                            <h4 className="text-text-primary font-semibold text-sm">{item.label}</h4>
                            <p className="text-text-secondary text-xs">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Stats with Bounce Animation */}
            <motion.div
              className="flex items-center justify-center sm:justify-start space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { value: "20+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    textShadow: "0 0 20px rgba(var(--color-accent-rgb), 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-xl sm:text-2xl font-bold text-accent mb-1"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 1.4 + index * 0.2, 
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-sm text-text-secondary font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 + index * 0.2 }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Code Showcase */}
          <div className="space-y-4 order-1 lg:order-2">
            
            {/* Interactive Code Showcase */}
            <motion.div
              className="glass-effect rounded-xl p-4 border border-accent/20 overflow-hidden"
              initial={{ opacity: 0, x: 30, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                y: -3,
                boxShadow: "0 15px 50px rgba(0,0,0,0.2)" 
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="text-accent" size={16} />
                  </motion.div>
                  <h3 className="text-sm font-bold text-text-primary">Live Code Preview</h3>
                </div>
                <div className="flex space-x-1.5">
                  {['red', 'yellow', 'green'].map((color) => (
                    <motion.div 
                      key={color}
                      className={`w-2.5 h-2.5 bg-${color}-500 rounded-full`}
                      whileHover={{ scale: 1.2, boxShadow: `0 0 10px rgba(var(--color-${color}-500), 0.8)` }}
                    />
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="bg-bg-primary/50 rounded-lg p-3 font-mono text-sm"
                whileHover={{ backgroundColor: "rgba(var(--color-bg-primary-rgb), 0.7)" }}
              >
                <motion.div
                  className="space-y-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-text-secondary">
                    <motion.span 
                      className="text-purple-400"
                      whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}
                    >
                      const
                    </motion.span>{" "}
                    <span className="text-blue-400">developer</span>{" "}
                    <span className="text-text-primary">=</span>{" "}
                    <span className="text-accent">{'{'}</span>
                  </div>
                  
                  {[
                    { key: "name", value: "'Mohammed Qizar'", delay: 1 },
                    { key: "skills", value: "['React', 'AI']", delay: 1.2 },
                    { key: "passion", value: "'Building Tomorrow'", delay: 1.4 }
                  ].map((item, index) => (
                    <motion.div
                      key={item.key}
                      className="ml-4 text-text-secondary"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay }}
                      whileHover={{ x: 2, scale: 1.02 }}
                    >
                      <motion.span 
                        className="text-green-400"
                        whileHover={{ textShadow: "0 0 10px rgba(34, 197, 94, 0.8)" }}
                      >
                        {item.key}
                      </motion.span>
                      <span className="text-text-primary">:</span>{" "}
                      <span className="text-yellow-400">{item.value}</span>
                      {index < 2 && <span className="text-text-primary">,</span>}
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="text-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    {'}'}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Skills Showcase */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="glass-effect rounded-xl p-3 border border-transparent hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 5, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    <motion.div 
                      className="p-2 bg-accent/10 rounded-lg flex-shrink-0"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: "rgba(var(--color-accent-rgb), 0.2)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <achievement.icon className="text-accent" size={16} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h4 
                        className="font-semibold text-text-primary text-sm truncate"
                        whileHover={{ scale: 1.02 }}
                      >
                        {achievement.label}
                      </motion.h4>
                      <motion.p 
                        className="text-sm text-text-secondary line-clamp-1"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {achievement.description}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-primary-400"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="flex flex-col items-center space-y-3 mt-12 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.span 
            className="text-sm text-text-secondary uppercase tracking-wider font-medium"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Explore Portfolio
          </motion.span>
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-5 h-7 border-2 border-accent/50 rounded-full flex justify-center p-1 group-hover:border-accent transition-colors relative overflow-hidden"
              whileHover={{
                boxShadow: "0 0 20px rgba(var(--color-accent-rgb), 0.4)"
              }}
            >
              <motion.div
                className="w-1 h-2 bg-accent rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              <ArrowDown className="text-accent/60 group-hover:text-accent mt-1 transition-colors" size={14} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Professional Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
    </section>
  );
};
