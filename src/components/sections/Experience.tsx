import { motion, useInView, useTransform, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Code, TrendingUp, Users } from 'lucide-react';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      id: 'flutions',
      company: 'Flutions India Pvt. Ltd.',
      role: 'Web Developer Intern',
      period: 'July 2025 - August 2025',
      location: 'On-site',
      type: 'Internship',
      technologies: ['React JS', 'Next JS', 'Node JS', 'Tailwind CSS'],
      highlights: [
        'Developed responsive web applications using React and Next.js',
        'Implemented modern UI components with Tailwind CSS',
        'Built RESTful APIs and backend services with Node.js',
        'Collaborated with design and development teams on client projects'
      ],
      achievements: [
        'Delivered 3+ client projects successfully',
        'Improved page load speeds by 30%',
        'Implemented responsive design for mobile optimization'
      ],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10',
      icon: Code,
      logo: '/logos/Flutions.jpeg'
    },
    {
      id: 'edunet',
      company: 'Edunet Foundations',
      role: 'AIML Intern',
      period: 'June 2025 - July 2025',
      location: 'Remote',
      type: 'Internship',
      technologies: ['Python', 'Machine Learning', 'Streamlit', 'Data Analysis'],
      highlights: [
        'Built AI salary prediction model with Python & Streamlit',
        'Implemented machine learning algorithms for data prediction',
        'Created interactive web applications for model deployment',
        'Gained hands-on experience in AI/ML development'
      ],
      achievements: [
        'Built ML model with 85% accuracy',
        'Deployed live Streamlit app',
        'Analyzed 10k+ data points'
      ],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      icon: TrendingUp,
      logo: '/logos/IBM.jpg'
    },
    {
      id: 'shadowfox',
      company: 'ShadowFox Inc.',
      role: 'Python Developer Intern',
      period: 'January 2025 - February 2025',
      location: 'Remote',
      type: 'Internship',
      technologies: ['Python', 'Automation', 'Scripting', 'Debugging'],
      highlights: [
        'Wrote automated scripts to enhance system efficiency',
        'Contributed to debugging and code optimization',
        'Collaborated with senior developers on Python projects',
        'Improved workflow automation processes'
      ],
      achievements: [
        'Reduced manual tasks by 40%',
        'Optimized 15+ legacy scripts',
        'Mentored by senior developers'
      ],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-500/10 to-purple-600/10',
      icon: Code,
      logo: '/logos/Shadowfox.jpeg'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-bg-secondary/20 relative overflow-hidden">
      {/* Subtle Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-r from-accent/15 to-primary-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-cyan-500/15 rounded-full blur-3xl" />
        
        {/* Professional Timeline Accent */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent transform -translate-x-1/2" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional journey building real-world skills and contributing to innovative projects
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Professional Experience Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced Professional Card */}
              <motion.div
                className="relative"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="glass-effect rounded-2xl p-6 border border-accent/10 relative overflow-hidden backdrop-blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${exp.bgColor.replace('from-', '').replace(' to-', ', ')})`,
                  }}
                  whileHover={{ 
                    borderColor: 'rgb(var(--color-accent) / 0.3)',
                    boxShadow: '0 20px 40px -12px rgba(99, 102, 241, 0.15)'
                  }}
                >
                  {/* Subtle Professional Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      background: [
                        'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 70%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)'
                      ]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />

                  {/* Header Section with Timeline Marker */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className="flex items-start justify-between mb-4"
                      initial={{ x: -10, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-md relative`}
                          whileHover={{ scale: 1.05 }}
                          animate={{ 
                            boxShadow: hoveredCard === exp.id 
                              ? '0 8px 16px rgba(99, 102, 241, 0.25)' 
                              : '0 4px 8px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <exp.icon className="text-white" size={20} />
                          
                          {/* Professional Glow */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0"
                            animate={{ 
                              opacity: hoveredCard === exp.id ? 1 : 0
                            }}
                          />
                        </motion.div>
                        
                        <div>
                          <motion.h3
                            className="text-lg font-bold text-text-primary mb-1"
                            animate={{ 
                              color: hoveredCard === exp.id 
                                ? 'rgb(var(--color-accent))' 
                                : 'rgb(var(--color-text-primary))'
                            }}
                          >
                            {exp.role}
                          </motion.h3>
                          <p className="text-accent font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>
                      
                      {/* Professional Company Logo */}
                      <motion.div
                        className="w-24 h-24 opacity-80 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm p-3"
                        animate={{ 
                          scale: hoveredCard === exp.id ? 1.1 : 1,
                          opacity: hoveredCard === exp.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Professional Meta Information */}
                    <motion.div
                      className="flex flex-wrap gap-3 text-xs text-text-secondary mb-5"
                      initial={{ y: 10, opacity: 0 }}
                      animate={isInView ? { y: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      <div className="flex items-center space-x-2 bg-bg-primary/20 px-3 py-1 rounded-lg">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-bg-primary/20 px-3 py-1 rounded-lg">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-accent/20 px-3 py-1 rounded-lg text-accent">
                        <Briefcase size={12} />
                        <span>{exp.type}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Technologies Grid */}
                  <motion.div
                    className="mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <h4 className="text-text-primary font-semibold mb-3 flex items-center space-x-2 text-sm">
                      <Code size={14} />
                      <span>Technologies</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          className="glass-effect px-3 py-2 rounded-lg text-xs font-medium text-center border border-accent/20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : {}}
                          transition={{ 
                            delay: index * 0.2 + 0.7 + techIndex * 0.1,
                            type: "spring" 
                          }}
                          whileHover={{ 
                            scale: 1.05, 
                            borderColor: 'rgb(var(--color-accent))',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)'
                          }}
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements Section */}
                  <motion.div
                    className="space-y-3"
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <h4 className="text-text-primary font-semibold mb-3 flex items-center space-x-2 text-sm">
                      <Users size={14} />
                      <span>Key Achievements</span>
                    </h4>
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-center space-x-3 group/item"
                        initial={{ x: -10, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.8 + achIndex * 0.1 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          animate={{ 
                            boxShadow: hoveredCard === exp.id 
                              ? '0 0 8px rgba(99, 102, 241, 0.8)' 
                              : '0 0 4px rgba(99, 102, 241, 0.4)'
                          }}
                        />
                        <span className="text-xs text-text-secondary group-hover/item:text-accent transition-colors leading-tight">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent/3 to-primary-500/3 rounded-2xl opacity-0 pointer-events-none"
                    animate={{ 
                      opacity: hoveredCard === exp.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Elegant Shadow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl -z-10 blur-lg opacity-10`}
                  style={{ transform: 'translateY(8px) scale(0.95)' }}
                  animate={{ 
                    opacity: hoveredCard === exp.id ? 0.2 : 0.1,
                    transform: hoveredCard === exp.id ? 'translateY(12px) scale(0.98)' : 'translateY(8px) scale(0.95)'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 glass-effect rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring" }}
              >
                4+
              </motion.div>
              <div className="text-text-secondary text-sm">Internships Completed</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.3, type: "spring" }}
              >
                12+
              </motion.div>
              <div className="text-text-secondary text-sm">Technologies Mastered</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring" }}
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4, type: "spring" }}
              >
                100%
              </motion.div>
              <div className="text-text-secondary text-sm">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
