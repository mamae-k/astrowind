import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/#services') },
    { text: 'Case Studies', href: getPermalink('/#case-studies') },
    { text: 'How I Work', href: getPermalink('/#process') },
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'FAQ', href: getPermalink('/#faq') },
  ],
  actions: [
    { text: 'Book Free Audit', href: getPermalink('/#contact'), variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Grant Revitalization & Audit', href: getPermalink('/#services') },
        { text: 'Full-Service Grant Management', href: getPermalink('/#services') },
        { text: 'GA4 & GTM Conversion Tracking', href: getPermalink('/#services') },
        { text: 'Nonprofit PPC Strategy', href: getPermalink('/#services') },
      ],
    },
    {
      title: 'Blog & Guides',
      links: [
        { text: 'All Articles', href: getBlogPermalink() },
        { text: 'Ad Grant Audit Checklist', href: getPermalink('/google-ad-grant-audit-checklist') },
        { text: 'Maintaining a 10%+ CTR', href: getPermalink('/maintain-10-percent-ctr-google-ad-grants') },
        { text: 'GA4 Conversion Tracking', href: getPermalink('/ga4-gtm-conversion-tracking-nonprofits') },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Case Studies', href: getPermalink('/#case-studies') },
        { text: 'My Process', href: getPermalink('/#process') },
        { text: 'About', href: getPermalink('/#about') },
        { text: 'FAQ', href: getPermalink('/#faq') },
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
