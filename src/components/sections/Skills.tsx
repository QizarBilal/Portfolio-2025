import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Code, Brain, Palette, Server, 
  Users, Lightbulb, Target, Heart, Zap 
} from 'lucide-react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = [
    { id: 'technical', name: 'Technical Stack', icon: Code },
    { id: 'ai-tools', name: 'AI Tools', icon: Brain },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'devops', name: 'DevOps / Tools', icon: Server },
    { id: 'soft', name: 'Soft Skills', icon: Users },
  ];

  const skillsData = {
    technical: [
      { 
        name: 'Python', 
        category: 'Programming', 
        color: '#3776ab',
        gradient: 'from-blue-600 to-blue-800',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        proficiency: 'Advanced',
        description: 'Advanced scripting & automation'
      },
      { 
        name: 'React.js', 
        category: 'Frontend', 
        color: '#61dafb',
        gradient: 'from-cyan-400 to-blue-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        proficiency: 'Advanced',
        description: 'Modern UI development'
      },
      { 
        name: 'JavaScript', 
        category: 'Programming', 
        color: '#f7df1e',
        gradient: 'from-yellow-400 to-orange-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        proficiency: 'Expert',
        description: 'Full-stack development'
      },
      { 
        name: 'TypeScript', 
        category: 'Programming', 
        color: '#3178c6',
        gradient: 'from-blue-500 to-indigo-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        proficiency: 'Advanced',
        description: 'Type-safe applications'
      },
      { 
        name: 'HTML5/CSS3', 
        category: 'Frontend', 
        color: '#e34f26',
        gradient: 'from-orange-500 to-red-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        proficiency: 'Expert',
        description: 'Responsive web design'
      },
      { 
        name: 'Flask', 
        category: 'Backend', 
        color: '#000000',
        gradient: 'from-gray-700 to-gray-900',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
        proficiency: 'Advanced',
        description: 'Web application framework'
      },
      { 
        name: 'PHP', 
        category: 'Backend', 
        color: '#777bb4',
        gradient: 'from-purple-500 to-indigo-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        proficiency: 'Intermediate',
        description: 'Server-side scripting'
      },
      { 
        name: 'MySQL', 
        category: 'Database', 
        color: '#4479a1',
        gradient: 'from-blue-600 to-cyan-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        proficiency: 'Advanced',
        description: 'Relational database management'
      },
      { 
        name: 'MongoDB', 
        category: 'Database', 
        color: '#47a248',
        gradient: 'from-green-500 to-emerald-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        proficiency: 'Intermediate',
        description: 'NoSQL database solutions'
      },
    ],
    'ai-tools': [
      { 
        name: 'Gemini AI', 
        category: 'LLM', 
        color: '#4285f4',
        gradient: 'from-blue-500 to-purple-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
        proficiency: 'Advanced',
        description: 'AI model integration'
      },
      { 
        name: 'Machine Learning', 
        category: 'Core', 
        color: '#ff6f00',
        gradient: 'from-orange-500 to-red-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
        proficiency: 'Advanced',
        description: 'Predictive model development'
      },
      { 
        name: 'Streamlit', 
        category: 'Deployment', 
        color: '#ff4b4b',
        gradient: 'from-red-500 to-pink-600',
        logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
        proficiency: 'Expert',
        description: 'ML app deployment'
      },
      { 
        name: 'Pandas', 
        category: 'Data Science', 
        color: '#150458',
        gradient: 'from-indigo-600 to-purple-700',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
        proficiency: 'Advanced',
        description: 'Data manipulation & analysis'
      },
      { 
        name: 'Scikit-learn', 
        category: 'ML Library', 
        color: '#f7931e',
        gradient: 'from-orange-400 to-yellow-500',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        proficiency: 'Intermediate',
        description: 'Machine learning algorithms'
      },
      { 
        name: 'Prompt Engineering', 
        category: 'AI', 
        color: '#9c27b0',
        gradient: 'from-purple-600 to-pink-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg',
        proficiency: 'Expert',
        description: 'AI prompt optimization'
      },
    ],
    design: [
      { 
        name: 'Figma', 
        category: 'Design Tool', 
        color: '#f24e1e',
        gradient: 'from-orange-500 to-red-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        proficiency: 'Advanced',
        description: 'UI/UX design & prototyping'
      },
      { 
        name: 'UI/UX Design', 
        category: 'Design', 
        color: '#ff7043',
        gradient: 'from-orange-400 to-pink-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg',
        proficiency: 'Intermediate',
        description: 'User experience design'
      },
      { 
        name: 'Responsive Design', 
        category: 'Web Design', 
        color: '#2196f3',
        gradient: 'from-blue-500 to-cyan-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        proficiency: 'Expert',
        description: 'Mobile-first development'
      },
      { 
        name: 'Prototyping', 
        category: 'Design Process', 
        color: '#9c27b0',
        gradient: 'from-purple-500 to-indigo-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg',
        proficiency: 'Intermediate',
        description: 'Interactive prototypes'
      },
    ],
    devops: [
      { 
        name: 'Git/GitHub', 
        category: 'Version Control', 
        color: '#f05032',
        gradient: 'from-orange-600 to-red-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        proficiency: 'Expert',
        description: 'Code version management'
      },
      { 
        name: 'VS Code', 
        category: 'IDE', 
        color: '#007acc',
        gradient: 'from-blue-600 to-cyan-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
        proficiency: 'Expert',
        description: 'Primary development environment'
      },
      { 
        name: 'Linux', 
        category: 'OS', 
        color: '#fcc624',
        gradient: 'from-yellow-500 to-orange-500',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
        proficiency: 'Intermediate',
        description: 'Server administration'
      },
      { 
        name: 'Netlify', 
        category: 'Deployment', 
        color: '#00c7b7',
        gradient: 'from-teal-500 to-cyan-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
        proficiency: 'Advanced',
        description: 'Static site deployment'
      },
      { 
        name: 'APIs', 
        category: 'Integration', 
        color: '#4caf50',
        gradient: 'from-green-500 to-emerald-600',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
        proficiency: 'Advanced',
        description: 'RESTful service integration'
      },
    ],
    soft: [
      { name: 'Critical Thinking', level: 90, category: 'Analytical', color: '#e91e63' },
      { name: 'Adaptability', level: 95, category: 'Personal', color: '#2196f3' },
      { name: 'Creativity', level: 88, category: 'Innovation', color: '#ff9800' },
      { name: 'Collaboration', level: 85, category: 'Team', color: '#4caf50' },
      { name: 'Problem Solving', level: 92, category: 'Analytical', color: '#9c27b0' },
      { name: 'Communication', level: 80, category: 'Interpersonal', color: '#00bcd4' },
    ],
  };

  const currentSkills = skillsData[activeCategory as keyof typeof skillsData];

  return (
    <section id="skills" ref={ref} className="py-12 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 px-2">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-text-secondary max-w-2xl mx-auto px-4 sm:px-6">
            A comprehensive toolkit spanning AI, development, and creative problem-solving
          </p>
          <div className="w-12 sm:w-16 lg:w-24 h-1 bg-accent mx-auto rounded-full mt-3 sm:mt-4 lg:mt-6" />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 lg:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-3 
                px-2 sm:px-3 lg:px-6 py-1.5 sm:py-2 lg:py-3 
                rounded-lg sm:rounded-xl lg:rounded-2xl 
                font-medium transition-all text-xs sm:text-sm lg:text-base
                min-w-0 flex-shrink-0
                ${activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25 scale-105'
                  : 'glass-effect text-text-secondary hover:text-accent hover:bg-accent/10'
                }
              `}
              whileHover={{ scale: activeCategory === category.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <category.icon size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              <span className="hidden xs:inline sm:hidden lg:inline text-xs">{category.name.split(' ')[0]}</span>
              <span className="hidden sm:inline lg:hidden">{category.name}</span>
              <span className="hidden lg:inline">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeCategory === 'soft' ? (
            // Personality Chips for Soft Skills
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <div className="glass-effect rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center h-full hover:bg-accent/10 transition-all">
                    <motion.div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${skill.color}20` }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index % 5 === 0 && <Heart className="text-accent" size={16} />}
                      {index % 5 === 1 && <Lightbulb className="text-accent" size={16} />}
                      {index % 5 === 2 && <Target className="text-accent" size={16} />}
                      {index % 5 === 3 && <Users className="text-accent" size={16} />}
                      {index % 5 === 4 && <Zap className="text-accent" size={16} />}
                    </motion.div>
                    
                    <h3 className="text-text-primary font-semibold mb-1 text-xs sm:text-sm lg:text-base line-clamp-2">{skill.name}</h3>
                    <p className="text-text-secondary text-xs lg:text-sm">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Professional Skills Grid
            <div className="relative">
              {/* Circular Radar Background - Hidden on mobile and tablet */}
              <div className="hidden xl:flex absolute inset-0 items-center justify-center opacity-5">
                <motion.div
                  className="w-96 h-96 border border-accent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-64 h-64 border border-accent/50 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Skills Grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    {/* Main Card */}
                    <div className="glass-effect rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 h-full border border-transparent hover:border-accent/30 transition-all duration-300 overflow-hidden relative">
                      {/* Gradient Background */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${'gradient' in skill ? skill.gradient : 'from-gray-500 to-gray-700'} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg sm:rounded-xl lg:rounded-2xl`}
                        initial={false}
                      />
                      
                      {/* Header Section */}
                      <div className="relative z-10 flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 lg:mb-4">
                        {/* Technology Logo */}
                        <motion.div
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0"
                          whileHover={{ rotate: 5, scale: 1.05 }}
                          transition={{ type: "spring" }}
                        >
                          <img 
                            src={'logo' in skill ? skill.logo : ''} 
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                              if (nextSibling) {
                                nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                          <div 
                            className="w-full h-full rounded-lg items-center justify-center text-white font-bold text-xs sm:text-sm"
                            style={{ backgroundColor: skill.color, display: 'none' }}
                          >
                            {skill.name.charAt(0)}
                          </div>
                        </motion.div>
                        
                        {/* Title and Category */}
                        <div className="min-w-0 flex-1">
                          <h3 className="text-text-primary font-bold text-sm sm:text-base lg:text-lg group-hover:text-accent transition-colors line-clamp-1">
                            {skill.name}
                          </h3>
                          <p className="text-text-secondary text-xs sm:text-sm line-clamp-1">{skill.category}</p>
                        </div>
                        
                        {/* Proficiency Badge */}
                        <motion.div
                          className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${'gradient' in skill ? skill.gradient : 'from-gray-500 to-gray-700'} text-white shadow-sm flex-shrink-0`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.05 + 0.3, type: "spring" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className="hidden sm:inline">{'proficiency' in skill ? skill.proficiency : 'Skilled'}</span>
                          <span className="sm:hidden">
                            {('proficiency' in skill ? skill.proficiency : 'Skilled').slice(0, 3)}
                          </span>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <motion.p
                        className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.4 }}
                      >
                        {'description' in skill ? skill.description : `Professional experience with ${skill.name}`}
                      </motion.p>

                      {/* Skill Level Indicator */}
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-text-secondary font-medium">Proficiency</span>
                        </div>
                        
                        {/* Modern Skill Dots */}
                        <div className="flex space-x-1 sm:space-x-1.5">
                          {[1, 2, 3, 4, 5].map((dot) => {
                            const proficiency = 'proficiency' in skill ? skill.proficiency : 'Skilled';
                            const gradient = 'gradient' in skill ? skill.gradient : 'from-gray-500 to-gray-700';
                            return (
                              <motion.div
                                key={dot}
                                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 rounded-full ${
                                  (proficiency === 'Expert' && dot <= 5) ||
                                  (proficiency === 'Advanced' && dot <= 4) ||
                                  (proficiency === 'Intermediate' && dot <= 3) ||
                                  (proficiency === 'Skilled' && dot <= 3)
                                    ? `bg-gradient-to-r ${gradient}`
                                    : 'bg-bg-secondary'
                                }`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ 
                                  delay: index * 0.05 + 0.6 + dot * 0.05,
                                  type: "spring",
                                  stiffness: 500
                                }}
                                whileHover={{ scale: 1.2 }}
                              />
                            );
                          })}
                        </div>
                      </div>

                      {/* Decorative Elements - Hidden on small screens */}
                      <motion.div
                        className="hidden lg:block absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20"
                        style={{ backgroundColor: skill.color }}
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.1, 0.25, 0.1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      
                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-br ${'gradient' in skill ? skill.gradient : 'from-gray-500 to-gray-700'} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-sm`}
                        style={{ transform: 'scale(1.02)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-20 glass-effect rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className="p-2 sm:p-3"
            >
              <motion.div
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring" }}
              >
                20+
              </motion.div>
              <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Technical Skills</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className="p-2 sm:p-3"
            >
              <motion.div
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.3, type: "spring" }}
              >
                5+
              </motion.div>
              <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Programming Languages</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className="p-2 sm:p-3"
            >
              <motion.div
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4, type: "spring" }}
              >
                10+
              </motion.div>
              <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Frameworks & Tools</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className="p-2 sm:p-3"
            >
              <motion.div
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-accent mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.5, type: "spring" }}
              >
                3+
              </motion.div>
              <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Years Learning</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
