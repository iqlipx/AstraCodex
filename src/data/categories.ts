import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'tools',
    name: 'OSINT Tools',
    icon: 'tool',
    description: 'Collection of OSINT investigation tools',
    subcategories: [
      {
        id: 'search-engines',
        name: 'Search Engines',
        icon: 'search',
        description: 'Specialized search engines for OSINT investigations.',
      },
      {
        id: 'target-surface',
        name: 'Attack Surface',
        icon: 'radar',
        description: 'Tools for discovering attack surfaces and mapping digital assets.',
      },
      {
        id: 'business-recon',
        name: 'Business Recon',
        icon: 'building',
        description: 'Tools for gathering intelligence on companies, employees, and corporate assets.',
      },
      {
        id: 'username-search',
        name: 'Username Search',
        icon: 'user',
        description: 'Tools for searching usernames across multiple platforms.',
      },
      {
        id: 'temp-services',
        name: 'Temporary Services',
        icon: 'clock',
        description: 'Temporary email, phone, and messaging services.',
      },
      {
        id: 'vehicle-recon',
        name: 'Vehicle Trace',
        icon: 'car',
        description: 'Indian vehicle information & registration lookup.',
      },
      {
        id: 'code-search',
        name: 'Code Search',
        icon: 'code',
        description: 'Tools for searching code snippets, repositories, APIs, and programming resources across various platforms.',
      },
      {
        id: 'sock-puppet',
        name: 'Sock Puppet',
        icon: 'mask',
        description: 'Tools for creating and managing online personas, including fake identities, character bios, avatars, and ID cards.',
      },
      {
        id: 'data-leaks',
        name: 'Data Breaches',
        icon: 'database',
        description: 'Tools and resources for discovering and analyzing data breaches and leaked information.',
      },
      {
        id: 'game-lookup',
        name: 'Game Recon',
        icon: 'game',
        description: 'Tools and resources for investigating online gaming platforms, gamer profiles, game-specific forums, and related metadata for OSINT purposes.'
      },
    ],
  },
  {
    id: 'techniques',
    name: 'Techniques',
    icon: 'book',
    description: 'OSINT investigation methods and approaches',
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    icon: 'folder',
    description: 'Real-world OSINT investigation examples',
  },
];
