'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }}
      className="glass p-6 rounded-2xl border border-white/10 group hover:border-primary/50 transition-all duration-300"
    >
      <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
