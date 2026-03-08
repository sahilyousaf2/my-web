
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinksNames } from '@/data/navData';
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'Karachi, Pakistan',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 (311) 281-3975',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@christech.com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '9 AM - 6 PM PST',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@christech.com' },
  ];

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Chris Tech</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Transforming ideas into innovative digital solutions through cutting-edge technology and expert craftsmanship.
                </p>
              </div>

              {/* Newsletter Subscription */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm">Subscribe to Our Newsletter</h4>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-primary text-xs font-medium"
                  >
                    ✓ Thanks for subscribing!
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3">
                {navLinksNames.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Web Development', href: '/services' },
                  { name: 'Mobile Apps', href: '/services' },
                  { name: 'UI/UX Design', href: '/services' },
                  { name: 'Cloud Solutions', href: '/services' },
                ].map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' },
                  { name: 'Cookie Policy', href: '#' },
                  { name: 'Disclaimer', href: '#' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm group flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 py-12 border-y border-border">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/20 text-primary flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1">
                      {info.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between flex-col md:flex-row gap-8 mb-8"
          >
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg bg-primary/20 border border-primary/50 text-center"
            >
              <p className="text-sm text-muted-foreground">Ready to get started?</p>
              <Link href="/contact" className="text-primary font-semibold hover:gap-2 inline-flex items-center gap-1 transition-all">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border bg-card/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Chris Tech Solution. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm">
              Designed with <span className="text-primary">♥</span> for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
