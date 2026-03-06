
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinksNames } from '@/data/navData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={menuVariants}
      className="fixed top-0 w-full z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white text-lg">
            CT
          </div>
          <span className="text-lg font-bold text-white hidden sm:inline">Chris Tect</span>
        </Link>

        <nav className="hidden md:flex space-x-1">
          {navLinksNames.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                pathname === item.link
                  ? 'bg-primary/20 text-primary border border-primary/50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
            <Link href="/contact">Get Started</Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden glass border-t border-white/10 px-4 pb-4 space-y-2 overflow-hidden"
          >
            {navLinksNames.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                <Link href="/contact">Get Started</Link>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
