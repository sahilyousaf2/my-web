import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4 inline-flex rounded-lg bg-primary/20 p-3 text-primary">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
