'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/app/components/ServiceCard';
import { Code, Smartphone, Palette, Cloud, Lightbulb } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: { [key: string]: React.ReactNode } = {
  'Code': <Code className="w-6 h-6" />,
  'Smartphone': <Smartphone className="w-6 h-6" />,
  'Palette': <Palette className="w-6 h-6" />,
  'Cloud': <Cloud className="w-6 h-6" />,
  'Lightbulb': <Lightbulb className="w-6 h-6" />,
};

export default function Services() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive solutions tailored to your business needs. From concept to launch, we deliver excellence at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={iconMap[service.icon]}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help bring your vision to life.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
