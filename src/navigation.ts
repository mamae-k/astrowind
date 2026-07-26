import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      href: getPermalink('/#services'),
    },
    {
      text: 'How It Works',
      href: getPermalink('/#process'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'Request Audit',
      href: getPermalink('/contact'), // Points to your visual Contact page
      icon: 'tabler:mail',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Free Account Audit', href: 'mailto:AcquireLift@gmail.com?subject=Free%20Google%20Ad%20Grant%20Audit' },
        { text: '5% CTR & Policy Recovery', href: getPermalink('/#services') },
        { text: 'Grant Application Setup', href: getPermalink('/#services') },
        { text: 'Monthly Campaign Management', href: getPermalink('/#services') },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'How It Works', href: getPermalink('/#process') },
        { text: 'FAQ', href: getPermalink('/#faq') },
        { text: 'Blog Articles', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'AcquireLift@gmail.com', href: 'mailto:AcquireLift@gmail.com' },
        { text: 'Request Audit via Email', href: 'mailto:AcquireLift@gmail.com?subject=Google%20Ad%20Grant%20Audit%20Request' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:AcquireLift@gmail.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} AcquireLift · Certified Google Partner & Ad Grant Specialist. All rights reserved.
  `,
};