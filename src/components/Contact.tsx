import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, X, Send, Loader } from 'lucide-react';
import { usePortfolioStore } from '../store/portfolioStore';
import portfolioData from '../data/portfolio.json';

const Contact = () => {
  const { 
    contactForm, 
    isContactFormVisible, 
    isLoading,
    updateContactForm, 
    toggleContactForm, 
    submitContactForm 
  } = usePortfolioStore();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: portfolioData.personalInfo.phone,
      href: `tel:${portfolioData.personalInfo.phone}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: portfolioData.personalInfo.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: portfolioData.personalInfo.github,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how I can help you build amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === 'LinkedIn' || method.label === 'GitHub' ? '_blank' : undefined}
                  rel={method.label === 'LinkedIn' || method.label === 'GitHub' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 card-elegant hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{method.label}</div>
                    <div className="text-muted-foreground">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8"
            >
              <button
                onClick={toggleContactForm}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Hire Me as Full Stack Developer
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-elegant p-8"
          >
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Quick Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Your Name *
                </label>
                <div className="h-12 bg-muted rounded-lg flex items-center px-3 text-muted-foreground">
                  Click "Hire Me" to open full form
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <div className="h-12 bg-muted rounded-lg flex items-center px-3 text-muted-foreground">
                  your@email.com
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <div className="h-24 bg-muted rounded-lg flex items-center px-3 text-muted-foreground">
                  Tell me about your project...
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={toggleContactForm}
                  className="btn-primary w-full"
                >
                  Open Full Contact Form
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form Modal */}
        <AnimatePresence>
          {isContactFormVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={toggleContactForm}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-card rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-card-foreground">
                    Hire Me as Full Stack Developer
                  </h2>
                  <button
                    onClick={toggleContactForm}
                    className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-muted-foreground" />
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => updateContactForm('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => updateContactForm('email', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      value={contactForm.message}
                      onChange={(e) => updateContactForm('message', e.target.value)}
                      placeholder="Tell me about your project and how I can help..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Job Requirements
                    </label>
                    <textarea
                      value={contactForm.jobRequirements}
                      onChange={(e) => updateContactForm('jobRequirements', e.target.value)}
                      placeholder="Describe the job requirements, tech stack, timeline, etc. (optional)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    onClick={submitContactForm}
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;