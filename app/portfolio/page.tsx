'use client';

import { motion } from 'framer-motion';
import { ProjectCardData } from '@/data/project';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

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

        {/* Projects */}
        <div className="space-y-20">
          {ProjectCardData?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse ${
                project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center lg:items-center gap-8 lg:gap-12`}
            >
              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: project.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-4"
              >
                <h3 className="text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.description}
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-6"
                >
                  <Link
                    href={project.link || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
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
