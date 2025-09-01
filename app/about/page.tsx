'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <main className="bg-black text-white min-h-screen">

        {/* Hero Section */}
        <section className="max-w-6xl md:mt-20 mt-14 mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-lime-500/90 via-lime-500/50 to-lime-500/70 bg-clip-text text-transparent mb-6">
              Sahil Yousaf 👋
            </h1>
            <p className="text-lg text-gray-300 mb-8">

              Hey! I&#39;m a passionate self-taught frontend developer who kickstarted my coding journey in 2023 through Governor Initiative Karachi. I specialize in building modern web applications using Next.js, TypeScript, and Tailwind CSS, with experience in Sanity CMS and Figma for design. Currently, I&#39;m expanding my skills into Python for backend development and AI integration to create smarter web solutions. My goal? To evolve into a full-stack developer and build innovative, AI-powered applications that solve real-world problems. Lets connect and create something amazing together! 💻✨
            </p>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 backdrop-blur-md bg-lime-500/80 text-white font-semibold rounded-xl shadow-xl hover:bg-lime-600 hover:scale-105 transition-all duration-300"
            >
              Let&#146;s connect
            </Link>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-center"
          >
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
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="bg-white text-black py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What I Do
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 max-w-2xl mx-auto mb-10"
            >
              I design, build and sometimes overthink digital experiences for the web.
              My work is rooted in creativity, empathy, and clean code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap cursor-pointer justify-center gap-4"
            >
              {[
                'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT',
                'Tailwind CSS', 'NEXT.JS', 'SANITY', 'Figma'
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-all"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
