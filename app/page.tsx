'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Cloud,
  TrendingUp,
  Rocket,
  Users,
  Zap as Lightning,
} from 'lucide-react';
import ServiceCard from './components/ServiceCard';
import PricingCard from './components/PricingCard';
import ProjectCard from './components/ProjectCard';
import FeatureCard from './components/FeatureCard';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that prioritize user experience and brand identity.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Zap,
    title: 'AI Solutions',
    description: 'Intelligent systems and machine learning solutions for modern challenges.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to boost your online presence and growth.',
  },
];

const features = [
  {
    icon: Rocket,
    title: 'Modern Technology',
    description: 'We use the latest frameworks and technologies for optimal performance.',
  },
  {
    icon: Users,
    title: 'Expert Developers',
    description: 'Our team consists of experienced professionals with proven track records.',
  },
  {
    icon: Lightning,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: TrendingUp,
    title: 'Client Satisfaction',
    description: 'Your success is our success. We focus on delivering results.',
  },
];

const pricing = [
  {
    name: 'Basic',
    price: '999',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form',
      '30-day support',
    ],
  },
  {
    name: 'Professional',
    price: '2999',
    description: 'Most popular for growing businesses',
    features: [
      'Up to 20 pages',
      'Advanced features',
      'Advanced SEO optimization',
      'Blog integration',
      'Analytics setup',
      '90-day support',
      'Monthly maintenance',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '9999',
    description: 'For large-scale projects',
    features: [
      'Unlimited pages',
      'Custom features',
      'Full SEO optimization',
      'Advanced integrations',
      'E-commerce setup',
      'Priority support',
      'Quarterly reviews',
    ],
  },
];

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/project-1.jpg',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile App',
    image: '/project-2.jpg',
  },
  {
    title: 'AI Analytics Dashboard',
    category: 'AI Solutions',
    image: '/project-3.jpg',
  },
];

export default function App() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-black" />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance"
            >
              Innovative Digital Solutions for
              <span className="gradient-text ml-2">Modern Businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Transform your vision into reality with cutting-edge technology and expert solutions. We deliver high-performance digital experiences that drive growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                <Link href="/contact">Get Started</Link>
              </button>
              <button className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-lg hover:border-primary/50 transition-all duration-300">
                <a href="#services">Our Services</a>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 rounded-2xl overflow-hidden glass border border-white/10 mt-12"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-white/50">Your Project Showcase Here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring expertise, innovation, and dedication to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your project needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <PricingCard key={idx} {...plan} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recent Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our latest work and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} index={idx} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 glass border border-white/20 text-white font-semibold rounded-lg hover:border-primary/50 transition-all duration-300">
              <Link href="/portfolio">View All Projects</Link>
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 mb-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl border border-white/10 p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals. Get in touch with our team today.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
              <Link href="/contact">Start Your Project</Link>
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
