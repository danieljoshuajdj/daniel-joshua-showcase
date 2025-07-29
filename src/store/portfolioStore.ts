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
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    set({ isLoading: true });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact Form Submitted:', contactForm);
      alert('Thank you for your interest! I will get back to you soon.');
      get().resetContactForm();
      set({ isLoading: false, isContactFormVisible: false });
    }, 1500);
  }
}));