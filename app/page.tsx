'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  ✨ Welcome to Chris Tech Solution
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Innovative Tech <span className="text-primary">Solutions</span> for Your Business
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                We transform your ideas into powerful digital solutions. From web applications to mobile apps, we deliver excellence with modern technologies and proven expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 lg:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-border backdrop-blur-sm p-8">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="h-12 bg-primary/30 rounded-lg" />
                    <div className="h-3 bg-border rounded w-3/4" />
                    <div className="h-3 bg-border rounded w-1/2" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-border rounded" />
                    <div className="h-3 bg-border rounded w-5/6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="bg-card/50 backdrop-blur-sm py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with innovative thinking to deliver solutions that exceed expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Expert Team', description: 'Skilled professionals with years of experience' },
                { title: 'Custom Solutions', description: 'Tailored to your specific business needs' },
                { title: 'Quality Assurance', description: 'Rigorous testing and quality standards' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg border border-border bg-background/50 hover:bg-background transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-primary/20 text-primary">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
