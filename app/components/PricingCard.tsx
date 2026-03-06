'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  index?: number;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
        isPopular
          ? 'border-primary bg-gradient-to-br from-primary/10 via-card to-card shadow-xl shadow-primary/20 scale-105'
          : 'glass border-white/10'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
      )}

      <div className="p-8">
        {isPopular && (
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4">
            RECOMMENDED
          </span>
        )}

        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 mb-8 ${
            isPopular
              ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30'
              : 'glass text-white hover:bg-white/20'
          }`}
        >
          Get Started
        </button>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-white mb-4">What's included:</p>
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
