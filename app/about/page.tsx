'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Award } from 'lucide-react'
import FeatureCard from '../components/FeatureCard'

const teamStats = [
  { label: '50+ Projects', value: '50' },
  { label: 'Years of Experience', value: '8' },
  { label: 'Team Members', value: '25' },
  { label: 'Happy Clients', value: '100+' },
]

export default function About() {
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
            About <span className="gradient-text">Chris Tect Solution</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We are a team of passionate developers, designers, and strategists dedicated to delivering innovative digital solutions that transform businesses and empower organizations worldwide.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {teamStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses through innovative technology solutions that drive growth, streamline operations, and create meaningful digital experiences that resonate with their customers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading digital solutions partner, recognized globally for excellence, innovation, and our commitment to transforming ideas into reality through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These values guide everything we do and shape our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: Award,
              title: 'Excellence',
              description: 'We deliver the highest quality work in everything we do.'
            },
            {
              icon: Users,
              title: 'Collaboration',
              description: 'We work closely with our clients to understand their vision.'
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              description: 'We embrace new technologies and creative thinking.'
            },
            {
              icon: Target,
              title: 'Integrity',
              description: 'We are transparent and honest in all our dealings.'
            }
          ].map((value, idx) => (
            <FeatureCard key={idx} {...value} index={idx} />
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <Link href="/contact">Get In Touch</Link>
          </button>
        </motion.div>
      </section>
    </main>
  )
}
