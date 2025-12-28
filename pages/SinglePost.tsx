import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Clock, User, ArrowRight } from 'lucide-react';
import { posts } from '../data/blogPosts';

const SinglePost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();

    const post = posts.find(p => p.slug === slug);