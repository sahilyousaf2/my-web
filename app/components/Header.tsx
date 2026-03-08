
'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinksNames } from '@/data/navData';
import Logo from './Logo';

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
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Logo />
          <span className="hidden sm:inline text-lg font-bold text-primary">Chris Tech</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinksNames.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`text-sm font-medium transition-colors duration-300 ${pathname === item.link
                  ? 'text-primary font-semibold'
                  : 'text-foreground hover:text-primary'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
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
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pb-4 space-y-2 overflow-hidden"
          >
            {navLinksNames.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${pathname === item.link
                  ? 'text-primary font-semibold'
                  : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
