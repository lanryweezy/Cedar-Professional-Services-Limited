
// Fix: Added React import to provide access to the React namespace and ReactNode type
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Personnel {
  name: string;
  title: string;
  qualifications: string;
  bio: string;
  image: string;
}

export interface ClientRecord {
  name: string;
  industry: string;
  service: string;
  type: 'Public' | 'Private';
}

export interface Post {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  image: string;
  content: string;
}

export interface NavItem {
  label: string;
  href: string;
}
