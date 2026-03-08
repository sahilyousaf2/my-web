
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { navLinksNames } from '@/data/navData';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-border bg-card/30 backdrop-blur-sm text-foreground py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-primary">Chris Tech</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Transforming ideas into innovative digital solutions through cutting-edge technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinksNames.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services#web-development" className="text-muted-foreground hover:text-primary transition-colors">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services#mobile-apps" className="text-muted-foreground hover:text-primary transition-colors">
                Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services#ui-ux" className="text-muted-foreground hover:text-primary transition-colors">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services#cloud" className="text-muted-foreground hover:text-primary transition-colors">
                Cloud Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-foreground mb-4">Connect</h4>
          <div className="flex gap-4">
            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:contact@christech.com"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border my-8" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Chris Tech Solution. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
