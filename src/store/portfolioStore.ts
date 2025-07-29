import { create } from 'zustand';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  jobRequirements: string;
}

interface PortfolioState {
  currentSection: string;
  isLoading: boolean;
  contactForm: ContactForm;
  isContactFormVisible: boolean;
  setCurrentSection: (section: string) => void;
  setLoading: (loading: boolean) => void;
  updateContactForm: (field: keyof ContactForm, value: string) => void;
  resetContactForm: () => void;
  toggleContactForm: () => void;
  submitContactForm: () => void;
}

const initialContactForm: ContactForm = {
  name: '',
  email: '',
  message: '',
  jobRequirements: ''
};

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  currentSection: 'hero',
  isLoading: false,
  contactForm: initialContactForm,
  isContactFormVisible: false,
  
  setCurrentSection: (section) => set({ currentSection: section }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  updateContactForm: (field, value) => 
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value }
    })),
  
  resetContactForm: () => set({ contactForm: initialContactForm }),
  
  toggleContactForm: () => 
    set((state) => ({ isContactFormVisible: !state.isContactFormVisible })),
  
  submitContactForm: () => {
    const { contactForm } = get();
    
    // Validate form
    if (!contactForm.name || contactForm.name.trim().length < 2) {
      alert('Name must be at least 2 characters long');
      return;
    }
    
    if (!contactForm.email || !/^\S+@\S+\.\S+$/.test(contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!contactForm.message || contactForm.message.trim().length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }
    
    if (!contactForm.jobRequirements || contactForm.jobRequirements.trim().length < 20) {
      alert('Job requirements must be at least 20 characters long');
      return;
    }
    
    set({ isLoading: true });
    
    // Simulate email sending process
    setTimeout(() => {
      console.log('📧 Email Sent Successfully!');
      console.log('=========================');
      console.log('To: danieljoshuaisrael@protonmail.com');
      console.log('Subject: New Hiring Inquiry from ' + contactForm.name);
      console.log('From:', contactForm.email);
      console.log('Message:', contactForm.message);
      console.log('Job Requirements:', contactForm.jobRequirements);
      console.log('Timestamp:', new Date().toISOString());
      console.log('=========================');
      
      alert('✅ Thank you! Your enquiry has been successfully submitted. I will get back to you within 24 hours.');
      get().resetContactForm();
      set({ isLoading: false, isContactFormVisible: false });
    }, 2000);
  }
}));