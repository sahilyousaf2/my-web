// pages/404.js
'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <section className="flex items-center justify-center h-screen text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-lime-400 mb-4">404</h1>
        <p className="text-xl sm:text-2xl mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-lime-500 text-white rounded-lg shadow-lg hover:bg-lime-600 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  )
}
