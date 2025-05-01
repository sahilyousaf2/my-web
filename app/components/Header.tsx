
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
      className="fixed top-0 w-full z-50 bg-neutral-900 text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-lime-400 md:text-2xl">Sahil Yousaf</Link>

        <nav className="hidden md:flex space-x-6">
          {navLinksNames.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`hover:text-lime-400 transition-all duration-300 ${pathname === item.link
                  ? 'text-lime-400 font-semibold'
                  : 'text-white'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-black">
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
            className="md:hidden bg-neutral-900 text-white px-4 pb-4 space-y-2 shadow-md overflow-hidden"
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-lime-500 transition-all duration-300">Home</Link>
            <Link href="/project" onClick={() => setIsOpen(false)} className="block hover:text-lime-500 transition-all duration-300">Projects</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-lime-500 transition-all duration-300">About</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-lime-500 transition-all duration-300">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
