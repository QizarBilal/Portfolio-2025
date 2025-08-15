import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 'college',
      degree: 'Bachelor of Engineering',
      field: 'Computer Science Engineering',
      institution: 'Priyadarshini Engineering College',
      period: '2022 - 2026',
      cgpa: '8.8',
      location: 'Tamil Nadu, India',
      specialization: 'Software Development, Cloud Computing, AI',
      achievements: [
        'Specialized in AI/ML and Software Development',
        'Active in coding competitions',
        'Led multiple tech projects',
        'Maintained consistent academic excellence'
      ]
    },
    {
      id: 'school',
      degree: 'Higher Secondary Certificate',
      field: 'Computer Science',
      institution: 'Al-Ameen Matric Hr. Sec. School',
      period: '2020 - 2022',
      cgpa: '83%',
      location: 'Tamil Nadu, India',
      specialization: 'Mathematics, Physics, Computer Science',
      achievements: [
        'Strong foundation in Computer Science',
        'Excellence in Mathematics and Physics',
        'Active participation in tech clubs',
        'Developed early programming skills'
      ]
    }
  ];

  return (
    <section id="education" ref={ref} className="py-32 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Academic journey building strong foundations in technology and innovation
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Student ID Card Style */}
              <motion.div
                className="glass-effect rounded-3xl p-8 hover:bg-accent/5 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-primary-500 rounded-full transform rotate-45 scale-150" />
                </div>

                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className="p-4 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="text-accent" size={32} />
                  </motion.div>
                  
                  <div className="text-right">
                    <motion.div
                      className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    >
                      <Award className="text-accent" size={16} />
                      <span className="text-accent font-bold text-lg">{edu.cgpa}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Institution Badge */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <span className="inline-block bg-primary-800/50 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    {edu.institution}
                  </span>
                </motion.div>

                {/* Degree Information */}
                <motion.h3
                  className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {edu.degree}
                </motion.h3>

                <motion.p
                  className="text-lg text-accent font-medium mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {edu.field}
                </motion.p>

                {/* Details Row */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-secondary">
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                  >
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </motion.div>
                </div>

                {/* Specialization */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <h4 className="text-text-primary font-semibold mb-2">Specialization:</h4>
                  <p className="text-text-secondary">{edu.specialization}</p>
                </motion.div>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.2 }}
                >
                  <h4 className="text-text-primary font-semibold mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: 1 + index * 0.2 + achIndex * 0.1,
                          duration: 0.5 
                        }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-secondary text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent/50 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { label: 'Years of Study', value: '4+' },
            { label: 'Current CGPA', value: '8.8' },
            { label: 'Academic Projects', value: '10+' },
            { label: 'Certifications', value: '5+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center glass-effect p-6 rounded-2xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                className="text-3xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
