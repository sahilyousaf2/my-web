'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index?: number;
}

export default function ProjectCard({
  title,
  category,
  image,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300"
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md mx-auto mb-4 flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-primary" />
            </div>
            <p className="text-white/80 text-sm">Project Preview</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-card border-t border-white/10">
        <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <button className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium">
          View Project <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
