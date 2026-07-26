import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: '#services' },
    { text: 'Case Studies', href: '#case-studies' },
    { text: 'How I Work', href: '#process' },
    { text: 'About', href: '#about' },
    { text: 'FAQ', href: '#faq' },
  ],
  actions: [
    { text: 'Book Free Audit', href: '#contact', variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Grant Revitalization & Audit', href: '#services' },
        { text: 'Full-Service Grant Management', href: '#services' },
        { text: 'GA4 & GTM Conversion Tracking', href: '#services' },
        { text: 'Nonprofit PPC Strategy', href: '#services' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Case Studies', href: '#case-studies' },
        { text: 'My Process', href: '#process' },
        { text: 'About', href: '#about' },
        { text: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'AcquireLift@gmail.com', href: 'mailto:AcquireLift@gmail.com' },
        { text: 'WhatsApp Support', href: 'https://wa.me/251927059884' },
        { text: 'Hire on Upwork', href: 'https://www.upwork.com/freelancers/~014af4bc3641ee20e9?mp_source=share' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/mamae' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:AcquireLift@gmail.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mamae' },
  ],
  footNote: `
    © ${new Date().getFullYear()} AcquireLift · Google Ad Grant Specialist for Nonprofits. All rights reserved.
  `,
};
