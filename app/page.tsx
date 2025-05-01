'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Image from 'next/image';

export default function App() {
  return (
    <section className="relative max-w-7xl mx-auto md:mt-14 px-4 sm:px-6 md:px-10 lg:px-20 pt-[140px] pb-20 min-h-screen  text-white overflow-hidden">

      {/* Background Dots */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2], y: [0, -10, 0] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center lg:text-left w-full lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Sahil Yousaf
          </h1>
          <h2 className="text-lg sm:text-xl text-lime-400 font-mono mb-6">
            <Typewriter
              words={['Frontend Developer', 'Creative Coder', "Skills", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "NEXT.JS", "SANITY", "FIGMA"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
          I&#39;m a passionate Frontend Developer who crafts clean, responsive, and interactive web experiences using modern tech like Next.js, and Tailwind CSS. I turn ideas into user-friendly UIs that just feel right.

          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 backdrop-blur-md bg-lime-500/80 text-white font-semibold rounded-xl shadow-xl hover:bg-lime-600 hover:scale-105 transition-all duration-300">
              <Link href="/contact">
                Let’s Get Started →
              </Link>
            </button>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >

          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-tr from-green-500/30 via-blue-500/20 to-purple-500/10 p-1 rounded-full shadow-lg hover:scale-105 transition-all">
              <Image
                src="/men.jpg"
                alt="Profile"
                width={288} // 72 x 4 = 288px
                height={288}
                className="rounded-full object-cover border-4 border-black"
                priority // optional: for faster loading if above the fold
              />

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
