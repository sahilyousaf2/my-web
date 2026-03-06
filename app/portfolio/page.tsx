'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'

const portfolioProjects = [
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
  {
    title: 'Social Media Platform',
    category: 'Web Development',
    image: '/project-4.jpg',
  },
  {
    title: 'SaaS Management System',
    category: 'Web Development',
    image: '/project-5.jpg',
  },
  {
    title: 'IoT Smart Home',
    category: 'Mobile App',
    image: '/project-6.jpg',
  },
]

const categories = ['All', 'Web Development', 'Mobile App', 'AI Solutions', 'UI/UX Design']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory)

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
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of our latest projects showcasing our expertise and creativity across various industries and technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50'
                  : 'glass border border-white/10 text-white hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <ProjectCard {...project} index={idx} />
            </motion.div>
          ))}
        </motion.div>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build something amazing. Get in touch with our team today.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <Link href="/contact">Start Your Project</Link>
          </button>
        </motion.div>
      </section>
    </main>
  )
}
