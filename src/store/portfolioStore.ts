import { create } from 'zustand';
import { toast } from '@/hooks/use-toast';

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
  showConfirmDialog: boolean;
  confirmAction: (() => void) | null;
  setCurrentSection: (section: string) => void;
  setLoading: (loading: boolean) => void;
  updateContactForm: (field: keyof ContactForm, value: string) => void;
  resetContactForm: () => void;
  toggleContactForm: () => void;
  submitContactForm: () => void;
  showConfirm: (action: () => void) => void;
  hideConfirm: () => void;
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
  showConfirmDialog: false,
  confirmAction: null,
  
  setCurrentSection: (section) => set({ currentSection: section }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  updateContactForm: (field, value) => 
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value }
    })),
  
  resetContactForm: () => set({ contactForm: initialContactForm }),
  
  toggleContactForm: () => 
    set((state) => ({ isContactFormVisible: !state.isContactFormVisible })),
  
  showConfirm: (action) => set({ showConfirmDialog: true, confirmAction: action }),
  
  hideConfirm: () => set({ showConfirmDialog: false, confirmAction: null }),
  
  submitContactForm: () => {
    const { contactForm } = get();
    
    // Validate form
    if (!contactForm.name || contactForm.name.trim().length < 2) {
      toast({
        title: "Validation Error",
        description: "Name must be at least 2 characters long",
        variant: "destructive",
      });
      return;
    }
    
    if (!contactForm.email || !/^\S+@\S+\.\S+$/.test(contactForm.email)) {
      toast({
        title: "Validation Error", 
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!contactForm.message || contactForm.message.trim().length < 10) {
      toast({
        title: "Validation Error",
        description: "Message must be at least 10 characters long", 
        variant: "destructive",
      });
      return;
    }
    
    // Job requirements is optional for quick messages
    if (contactForm.jobRequirements && contactForm.jobRequirements.trim().length > 0 && contactForm.jobRequirements.trim().length < 20) {
      toast({
        title: "Validation Error",
        description: "Job requirements must be at least 20 characters long if provided",
        variant: "destructive",
      });
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
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you! Your enquiry has been submitted. I will get back to you within 24 hours.",
      });
      get().resetContactForm();
      set({ isLoading: false, isContactFormVisible: false });
    }, 2000);
  }
}));