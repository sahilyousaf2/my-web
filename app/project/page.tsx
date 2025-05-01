'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectCardData } from '@/data/project'
import { motion } from 'framer-motion'

export default function Project() {
  return (
    <section className="w-full md:w-[1170px] mx-auto md:mt-20 mt-14 px-4 md:px-10 lg:px-20 py-16 text-white bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400 font-mono text-sm">
            Here are a few of my recent web development projects that showcase my skills in building responsive and interactive UIs. The Simple Web Layout demonstrates clean design and layout techniques, the Dynamic Resume Builder allows users to create and preview resumes in real-time, and the GitHub Account Finder enables quick GitHub user lookups with live data fetching and profile display.
          </p>
        </div>

        <div className="space-y-20">
          {ProjectCardData?.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col-reverse ${
                study.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center lg:items-start gap-10 lg:gap-16`}
            >
              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-4 text-center lg:text-left"
              >
                <h3 className="text-2xl font-semibold text-gray-300">{study?.title}</h3>
                <p className="text-sm font-mono text-gray-400">{study?.description}</p>

                <Link
                  href={study?.link || '#'}
                  target="_blank"
                  className="inline-block mt-4 px-6 py-3 rounded-md font-bold bg-lime-500/80 hover:bg-[#a2e635db] transition-all duration-300 text-white"
                >
                  View Project &gt;
                </Link>
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="w-full rounded-lg">
                  <Image
                    src={study?.image}
                    alt={study?.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
