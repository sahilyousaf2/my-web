'use client';

import { motion } from 'framer-motion';
import { ProjectCardData } from '@/data/project';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Eye } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our recent projects showcasing our expertise across web applications, platforms, and digital solutions.
          </p>
        </motion.div>

        {/* Filter Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg transition-all duration-300"
          >
            All Projects
          </motion.button>
          {['Web Development', 'Mobile Apps', 'Design'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ProjectCardData?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <motion.div
                className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={project.link || '#'}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      View Project
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Category Badge */}
                  {project.category && (
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Stats or Tags */}
                <div className="pt-4 border-t border-border mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags && project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link || '#'}
                    target="_blank"
                    whileHover={{ x: 4 }}
                    className="text-primary hover:text-primary font-semibold inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
