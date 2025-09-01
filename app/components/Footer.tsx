
'use client'
import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-black via-lime-500/50 to-black text-gray-300 py-10 px-6 md:px-12"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and About */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">Sahil Yousaf</h2>
                    <p className="text-sm">
                        Crafting responsive, modern UIs with passion and clean code.
                    </p>
                </div>

                {/* Links */}
                <div className="flex justify-between md:justify-around">
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/project" className="hover:text-white">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
              
                <div>
                    <h3 className="text-sm font-semibold mb-3 text-white">Follow Me</h3>
                    <div className="flex space-x-4">
                        <Link href="https://www.facebook.com/uni.moma" target="_blank">
                            <FacebookIcon className="text-2xl hover:text-lime-400 transition" />
                        </Link>
                        <Link href="https://wa.me/+923112813975" target="_blank">
                            <WhatsAppIcon className="text-2xl hover:text-lime-400 transition" />
                        </Link>
                        <Link href="https://github.com/sahilyousaf2" target="_blank">
                            <GitHubIcon className="text-2xl hover:text-lime-400 transition" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sahil-yousaf-02a0a52b5/" target="_blank">
                            <LinkedInIcon className="text-2xl hover:text-lime-400 transition" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-10 text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Sahil Yousaf. All rights reserved.
            </div>
        </motion.footer>
    )
}
