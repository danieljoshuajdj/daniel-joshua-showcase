import { motion } from 'framer-motion';
import { Code, Users, Target, Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '7+' },
    { icon: Users, label: 'Years Experience', value: '1+' },
    { icon: Target, label: 'Industries Served', value: '5+' },
    { icon: Award, label: 'Certifications', value: '2+' },
  ];

  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Passionate Developer Building Digital Solutions
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {portfolioData.objective}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong>Expert in Modern React Ecosystem:</strong> Proficient in React, Redux Toolkit, React Query, and Zustand
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong>Cross-Industry Experience:</strong> Successfully delivered solutions across healthcare, e-commerce, and property management
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong>Full-Stack Capabilities:</strong> Strong foundation in both frontend and backend technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-elegant p-6 text-center hover:shadow-glow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-card-foreground mb-8 text-center">Education</h3>
          <div className="card-elegant p-8 max-w-2xl mx-auto">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h4>
                <p className="text-lg text-card-foreground mb-1">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.location} • {edu.duration}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;