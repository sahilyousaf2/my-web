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
  ArrowRight,
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices. We create fast, scalable, and user-friendly web solutions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that prioritize user experience and brand identity. We design interfaces that users love to use.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that delight users and drive engagement.',
  },
  {
    icon: Zap,
    title: 'AI Solutions',
    description: 'Intelligent systems and machine learning solutions for modern challenges. We leverage AI to transform your business.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies. We ensure your applications run smoothly and securely.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to boost your online presence and growth. We help you reach and engage your target audience.',
  },
];

export default function Services() {
  return (
    <main className="min-h-screen text-white overflow-hidden pt-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-black" />
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business. From web development to AI, we've got everything you need.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} index={idx} />
          ))}
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Our Services?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Expert Team',
              description: 'Our team consists of experienced professionals with proven track records across various industries.'
            },
            {
              title: 'Latest Technologies',
              description: 'We stay current with the latest tools and frameworks to deliver cutting-edge solutions.'
            },
            {
              title: 'Quality Assurance',
              description: 'Every project undergoes rigorous testing to ensure it meets the highest quality standards.'
            },
            {
              title: 'Client-Centric Approach',
              description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.'
            },
            {
              title: 'On-Time Delivery',
              description: 'We respect your time and deliver projects on schedule without compromising quality.'
            },
            {
              title: 'Ongoing Support',
              description: 'Our support doesn\'t end at launch. We provide continuous maintenance and optimization.'
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-white/10 p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss which service is right for your project and how we can help you achieve your goals.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2">
            <Link href="/contact">Contact Us</Link>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
