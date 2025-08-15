import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Tirupathur, Tamil Nadu, India' },
    { icon: Mail, label: 'Email', value: 'bilalqizar@gmail.com', href: 'mailto:bilalqizar@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8925426680', href: 'tel:+918925426680' },
    { icon: Globe, label: 'Other Portfolio', value: 'qizar-bilal.netlify.app', href: 'https://qizar-bilal.netlify.app' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/mohammed-qizar-bilal', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/QizarBilal', label: 'GitHub' },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Info & Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Description */}
            <div className="glass-effect p-8 rounded-3xl mb-8">
              <motion.h3
                className="text-2xl font-bold text-text-primary mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                AI-Powered Developer & Innovator
              </motion.h3>
              
              <motion.p
                className="text-lg text-text-secondary leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                A resourceful AI-Powered Developer who turns ideas into reality using the smartest tools of today. 
                From web apps to data-driven solutions, I build fast, think creatively, and solve like a pro—without 
                being limited by traditional skill boundaries.
              </motion.p>

              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                Currently pursuing B.E. in Computer Science Engineering with a specialization in software development, 
                cloud computing, and AI. I combine academic excellence (8.8+ CGPA) with practical experience through 
                internships and real-world projects.
              </motion.p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="glass-effect p-4 rounded-2xl hover:bg-accent/10 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {info.href ? (
                    <a href={info.href} className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                        <info.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{info.label}</p>
                        <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-accent/20">
                        <info.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">{info.label}</p>
                        <p className="text-text-primary font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animated Profile Area */}
            <div className="relative">
              {/* Background Blobs */}
              <motion.div
                className="absolute -top-8 -left-8 w-64 h-64 bg-accent/20 rounded-full morphing-blob"
                style={{ filter: 'blur(40px)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-500/20 rounded-full morphing-blob"
                style={{ filter: 'blur(30px)' }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Main Content Card */}
              <div className="relative glass-effect p-8 rounded-3xl">
                <div className="text-center">
                  {/* Avatar Placeholder */}
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-accent to-primary-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <span className="text-4xl font-bold text-white">MQB</span>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Mohammed Qizar Bilal
                  </h3>
                  <p className="text-accent font-medium mb-6">
                    AI-Powered Developer
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-effect rounded-full hover:bg-accent/20 transition-colors group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <social.icon 
                          className="text-text-secondary group-hover:text-accent transition-colors" 
                          size={20} 
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-text-secondary/20">
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-accent"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2 }}
                    >
                      8.8+
                    </motion.div>
                    <div className="text-sm text-text-secondary">CGPA</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-accent"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.3 }}
                    >
                      10+
                    </motion.div>
                    <div className="text-sm text-text-secondary">Projects</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-accent"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.4 }}
                    >
                      4+
                    </motion.div>
                    <div className="text-sm text-text-secondary">Internships</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
