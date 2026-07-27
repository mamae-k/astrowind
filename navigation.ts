import { getPermalink } from './src/utils/permalinks';

export const headerData = {
  links: [
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Resources', href: getPermalink('/resources') },
    { text: 'Case Studies', href: getPermalink('/#case-studies') },
    { text: 'About', href: getPermalink('/#about') },
    { text: 'FAQ', href: getPermalink('/#faq') },
  ],
  actions: [{ text: 'Request Free Audit', href: getPermalink('/#contact'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Google Ad Grant Services', href: getPermalink('/services') },
        { text: 'Grant Revitalization & Audit', href: getPermalink('/services') },
        { text: 'GA4 & GTM Conversion Tracking', href: getPermalink('/services') },
        { text: 'Nonprofit PPC Strategy', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'All Resources', href: getPermalink('/resources') },
        { text: 'The Complete Google Ad Grants Guide', href: getPermalink('/resources/google-ad-grants-guide') },
        { text: 'Grant-Ready Website Checklist', href: getPermalink('/resources/grant-ready-website-checklist') },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Case Studies', href: getPermalink('/#case-studies') },
        { text: 'About', href: getPermalink('/#about') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Free Audit', href: getPermalink('/#contact') },
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
    © ${new Date().getFullYear()} AcquireLift · Google Ad Grant authority for nonprofits. All rights reserved.
  `,
};
