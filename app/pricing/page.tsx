'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const pricing = [
  {
    name: 'Basic',
    price: '999',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form',
      '30-day support',
    ],
  },
  {
    name: 'Professional',
    price: '2999',
    description: 'Most popular for growing businesses',
    features: [
      'Up to 20 pages',
      'Advanced features',
      'Advanced SEO optimization',
      'Blog integration',
      'Analytics setup',
      '90-day support',
      'Monthly maintenance',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '9999',
    description: 'For large-scale projects',
    features: [
      'Unlimited pages',
      'Custom features',
      'Full SEO optimization',
      'Advanced integrations',
      'E-commerce setup',
      'Priority support',
      'Quarterly reviews',
    ],
  },
];

const faqs = [
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan anytime. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and digital payment methods for your convenience.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no hidden setup fees. The price you see is what you pay. Simple and transparent.'
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Absolutely! Contact us to discuss your specific needs, and we\'ll create a custom package tailored to your requirements.'
  },
  {
    question: 'What\'s included in the support?',
    answer: 'Support includes bug fixes, performance optimization, and technical assistance during business hours.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 14-day money-back guarantee if you\'re not satisfied with our service. No questions asked.'
  },
];

export default function Pricing() {
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
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprises. Just straightforward pricing that works for you.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, idx) => (
            <PricingCard key={idx} {...plan} index={idx} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Detailed Comparison</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare all features across our pricing tiers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl border border-white/10 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Pages', basic: '5', pro: '20', ent: 'Unlimited' },
                  { feature: 'Responsive Design', basic: 'Yes', pro: 'Yes', ent: 'Yes' },
                  { feature: 'SEO Optimization', basic: 'Basic', pro: 'Advanced', ent: 'Full' },
                  { feature: 'Blog Integration', basic: 'No', pro: 'Yes', ent: 'Yes' },
                  { feature: 'Analytics', basic: 'No', pro: 'Yes', ent: 'Yes' },
                  { feature: 'E-commerce', basic: 'No', pro: 'No', ent: 'Yes' },
                  { feature: 'Support Duration', basic: '30 days', pro: '90 days', ent: 'Unlimited' },
                  { feature: 'Maintenance', basic: 'No', pro: 'Monthly', ent: 'Quarterly' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-t border-white/10">
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.basic === 'Yes' ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : row.basic === 'No' ? (
                        <span className="text-muted-foreground">-</span>
                      ) : (
                        <span>{row.basic}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.pro === 'Yes' ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : row.pro === 'No' ? (
                        <span className="text-muted-foreground">-</span>
                      ) : (
                        <span>{row.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.ent === 'Yes' ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : row.ent === 'No' ? (
                        <span className="text-muted-foreground">-</span>
                      ) : (
                        <span>{row.ent}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our pricing? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="glass rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your plan today and let's bring your vision to life with cutting-edge solutions.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 inline-flex items-center gap-2">
            <Link href="/contact">Get Started Now</Link>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
