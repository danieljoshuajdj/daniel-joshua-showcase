import { motion } from 'framer-motion';
import { Code, Database, Settings, Users } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Skills = () => {
  const skillIcons = {
    'Frontend Technologies': Code,
    'Backend Technologies': Database,
    'Database & Storage': Database,
    'State Management': Settings,
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive expertise in modern web development technologies and frameworks
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {portfolioData.technicalSkills.map((skillGroup, index) => {
            const IconComponent = skillIcons[skillGroup.category as keyof typeof skillIcons] || Code;
            
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-elegant p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                      className="bg-accent/50 rounded-lg px-3 py-2 text-sm text-accent-foreground hover:bg-accent transition-colors duration-200"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-card-foreground mb-8">Soft Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {portfolioData.softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="bg-success text-white px-6 py-3 rounded-full border border-success/20 hover:bg-success-glow hover:scale-105 transition-all duration-300 cursor-default font-medium"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;