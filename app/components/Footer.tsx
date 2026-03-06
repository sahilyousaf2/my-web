
'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-background via-background to-black border-t border-white/10"
        >
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-secondary">
                                CT
                            </div>
                            <h2 className="text-xl font-bold text-white">Chris Tect Solution</h2>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Innovative digital solutions for modern businesses. Transform your ideas into reality with cutting-edge technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                            <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Cloud Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">contact@christect.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">San Francisco, CA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-10" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} Chris Tect Solution. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-lg">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-lg">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-lg">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </motion.footer>
    )
}
