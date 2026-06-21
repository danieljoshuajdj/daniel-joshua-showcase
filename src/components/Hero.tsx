import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';
import portfolioData from '../data/portfolio.json';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { toggleContactForm } = usePortfolioStore();
  
  const typingTexts = portfolioData.typingText;
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = typingTexts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, typingTexts]);

  const downloadResumeFunc = ()=>{
    window.open("https://drive.google.com/file/d/15TiZWAl8HvmcKVQ_KKx4TUa6DKVBe_--/view?usp=sharing","_blank",'noopener,noreferrer')
  }
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="relative inline-block mt-16">
              <img
                src={portfolioData.personalInfo.profileImage}
                alt={portfolioData.personalInfo.name}
                className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover mx-auto border-4 border-white/30 shadow-2xl"
              />
              <div className="absolute -inset-5 rounded-full bg-gradient-to-tr from-primary/10 to-success/2"></div>
            </div>
          </motion.div>
          
          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-hero text-white mb-4"
          >
            {portfolioData.personalInfo.name}
          </motion.h1>
          
          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium min-h-[3rem] flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <span className="text-success-glow font-semibold">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </motion.div>
          
          {/* Brief Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate React developer with expertise in modern web technologies. 
            I create innovative solutions that drive business growth and enhance user experiences.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
            <button
            onClick={toggleContactForm}
              className="btn-primary hover:scale-105 transform transition-all duration-300 flex items-center gap-2 text-lg px-8 py-4"
            >
              <Mail className="w-5 h-5" />
              Hire Me Now
            </button>
            
            <button onClick={downloadResumeFunc} className="btn-secondary hover:scale-105 transform transition-all duration-300 flex items-center gap-2 text-lg px-8 py-4">
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/60 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
