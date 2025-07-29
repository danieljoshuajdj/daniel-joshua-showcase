import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-xl text-primary mb-2">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-muted-foreground">
              React JS Developer crafting digital experiences
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-2">Get in touch</p>
            <a 
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-primary hover:text-primary-glow transition-colors duration-200"
            >
              {portfolioData.personalInfo.email}
            </a>
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-right"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Daniel Joshua
            </p>
            
            <div className="flex items-center gap-6">
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;