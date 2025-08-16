import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code, Brain, Globe} from 'lucide-react';

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe, count: 4 },
    { id: 'ai-ml', name: 'AI/ML', icon: Brain, count: 2 },
    { id: 'web-dev', name: 'Web Dev', icon: Code, count: 2 }
  ];

  const projects = [
    {
      id: 'ai-resume-parser',
      title: 'AI-Powered Resume Parser',
      category: 'ai-ml',
      period: 'August - September 2025',
      description: 'Advanced resume parsing system using Gemini AI to extract skills, match job roles, and provide intelligent feedback.',
      technologies: ['Gemini AI', 'Flask', 'Python', 'NLP', 'Machine Learning'],
      features: [
        'Intelligent skill extraction and categorization',
        'Job role matching with compatibility scores',
        'Personalized improvement suggestions',
        'Real-time processing and analysis'
      ],
      liveDemo: 'https://qb-resume-parser.netlify.app',
      github: 'https://github.com/QizarBilal/ai-resume-parser',
      image: '/images/AI-ResumeParser.png',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      tags: ['AI', 'Featured', 'Latest']
    },
    {
      id: 'salary-prediction',
      title: 'Employee Salary Prediction',
      category: 'ai-ml',
      period: 'June - July 2025',
      description: 'Machine learning model for predicting employee salaries with interactive visualizations and comprehensive data analysis.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'Plotly'],
      features: [
        'Advanced regression modeling',
        'Interactive data visualizations',
        'Feature importance analysis',
        'Real-time prediction interface'
      ],
      liveDemo: 'https://qb-salary-predictor.streamlit.app/',
      github: 'https://github.com/QizarBilal/Advanced-Employee-Salary-Predictor',
      image: '/images/Employee-salary.png',
      gradient: 'from-blue-500 via-teal-500 to-green-500',
      tags: ['ML', 'Data Science']
    },
    {
      id: 'ffexpertrade',
      title: 'FreeFireXperTrade',
      category: 'web-dev',
      period: 'January - February 2025',
      description: 'Community hub for Free Fire players featuring trading systems, user profiles, and social interactions.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
      features: [
        'User authentication and profiles',
        'Trading marketplace system',
        'Real-time chat functionality',
        'Community forums and discussions'
      ],
      liveDemo: 'https://ffxpertrade.netlify.app',
      github: 'https://github.com/QizarBilal/FreeFireXperTrade',
      image: '/images/Free-fire.png',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      tags: ['Community', 'Gaming']
    },
    {
      id: 'portfolio-v1',
      title: 'Personal Portfolio V1',
      category: 'web-dev',
      period: 'December 2024',
      description: 'First iteration of personal portfolio showcasing projects and skills with responsive design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      features: [
        'Responsive design across all devices',
        'Smooth animations and transitions',
        'Project showcase with filtering',
        'Contact form integration'
      ],
      liveDemo: 'https://qizar-bilal.netlify.app',
      github: 'https://github.com/QizarBilal/Personal-Portfolio',
      image: '/images/Personal-Portfolio.png',
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      tags: ['Portfolio', 'React']
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-bg-primary relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Innovative solutions combining AI, web development, and creative problem-solving
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Elegant Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                relative flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all overflow-hidden backdrop-blur-xl
                ${activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'glass-effect text-text-secondary hover:text-accent hover:bg-accent/5 border border-accent/10'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {/* Glassmorphism Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary-400/10 opacity-0"
                animate={{
                  opacity: activeCategory === category.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative z-10 flex items-center space-x-2"
                animate={{
                  scale: activeCategory === category.id ? [1, 1.05, 1] : 1
                }}
                transition={{ duration: 0.4 }}
              >
                <category.icon size={16} />
                <span className="text-sm">{category.name}</span>
                {category.count > 0 && (
                  <motion.span
                    className={`
                      px-2 py-0.5 rounded-full text-xs font-semibold
                      ${activeCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-accent/20 text-accent'
                      }
                    `}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {category.count}
                  </motion.span>
                )}
              </motion.div>
            </motion.button>
          ))}
        </motion.div>

        {/* Elegant Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glassmorphism Card Effect */}
              <div className="relative">
                <motion.div
                  className="glass-effect rounded-2xl overflow-hidden backdrop-blur-xl border border-accent/10"
                  whileHover={{ 
                    borderColor: 'rgb(var(--color-accent) / 0.3)',
                    boxShadow: '0 20px 40px -12px rgba(99, 102, 241, 0.15)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Enhanced Project Header with Image */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Fallback Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                    {/* Project Image */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        loading="lazy"
                        onError={(e) => {
                          // Hide image on error, showing gradient background
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.opacity = '0';
                        }}
                        style={{ 
                          transition: 'opacity 0.3s ease',
                          maxWidth: '90%',
                          maxHeight: '90%'
                        }}
                      />
                    </motion.div>

                    {/* Image Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Subtle Pattern Overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      animate={{
                        background: [
                          'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                          'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                          'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)'
                        ]
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />

                    {/* Floating Elements */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/50 rounded-full"
                        style={{
                          left: `${20 + (i * 12)}%`,
                          top: `${30 + (i * 6)}%`,
                        }}
                        animate={{
                          y: [-8, -20, -8],
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                      />
                    ))}

                    {/* Project Tags */}
                    <div className="absolute top-4 left-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="px-3 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-white/20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.6)' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons - Always Visible and Clickable */}
                    <motion.div 
                      className="absolute top-4 right-4 flex space-x-2 z-20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Live Demo Button */}
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.liveDemo, '_blank', 'noopener,noreferrer');
                        }}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-accent/90 transition-all duration-200 border border-white/40 hover:border-accent/60 cursor-pointer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={`View Live Demo: ${project.liveDemo}`}
                        type="button"
                      >
                        <ExternalLink className="text-white" size={16} />
                      </motion.button>
                      
                      {/* GitHub Button */}
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-accent/90 transition-all duration-200 border border-white/40 hover:border-accent/60 cursor-pointer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={`View Source Code: ${project.github}`}
                        type="button"
                      >
                        <Github className="text-white" size={16} />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <motion.h3
                          className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors mb-1"
                          whileHover={{ x: 5 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          className="text-xs text-text-secondary flex items-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <span>{project.period}</span>
                        </motion.p>
                      </div>
                    </div>

                    <motion.p
                      className="text-text-secondary text-sm leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-lg font-medium border border-accent/30"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.9 + index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: 'rgb(var(--color-accent) / 0.3)',
                              borderColor: 'rgb(var(--color-accent))'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <motion.h4
                        className="text-xs font-semibold text-text-primary flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <Code size={12} />
                        <span>Key Features</span>
                      </motion.h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.slice(0, 2).map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start space-x-2 group/feature"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.1 + index * 0.1 + featureIndex * 0.05 }}
                          >
                            <motion.div
                              className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                              animate={{
                                boxShadow: '0 0 6px rgba(99, 102, 241, 0.6)'
                              }}
                            />
                            <span className="text-xs text-text-secondary leading-tight group-hover/feature:text-accent transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-accent/3 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                    initial={false}
                  />
                </motion.div>

                {/* Elegant Shadow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl -z-10 blur-lg opacity-10 group-hover:opacity-20 transition-opacity`}
                  style={{ transform: 'translateY(8px) scale(0.95)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {[
            { label: 'Total Projects', value: '4+', icon: Code },
            { label: 'AI/ML Projects', value: '2', icon: Brain },
            { label: 'Web Applications', value: '2', icon: Globe },
            { label: 'Live Demos', value: '100%', icon: ExternalLink }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-effect p-4 rounded-xl group hover:bg-accent/5 transition-colors"
              whileHover={{ scale: 1.02, y: -2 }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                className="text-accent mb-2 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon size={20} />
              </motion.div>
              <motion.div
                className="text-2xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-text-secondary text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
