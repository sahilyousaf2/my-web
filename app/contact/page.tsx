// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import emailjs from 'emailjs-com'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export default function Contact() {
//   const [form, setForm] = useState({ email: '', name: '', message: '' })
//   const [loading, setLoading] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     try {
//       await emailjs.send(
//         'service_zieg0dl',
//         'template_sf1gda9',
//         {
//           email: form.email,
//           name: form.name,
//           message: form.message,
//         },
//         'Drencp2jCsH-RA3rF'
//       )
//       toast.success('✅ Message sent successfully!')
//       setForm({ email: '', name: '', message: '' })
//     } catch (error) {
//       console.error('Email send failed:', error)
//       toast.error('❌ Failed to send the message, please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex md:mt-14 mt-10 items-center justify-center bg-black px-4">
//       <ToastContainer position="bottom-right" autoClose={3000} />

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="max-w-md w-full text-center text-white"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl font-bold mb-4"
//         >
//           Get In Touch
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-sm text-gray-400 mb-8"
//         >
//           Have a project in mind? Contact me to get started!
//         </motion.p>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           viewport={{ once: true }}
//           className="space-y-4"
//         >
//           <div className="text-left">
//             <label className="block font-bold mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full p-3 rounded bg-black border-lime-400 border-2 text-white outline-none"
//             />
//           </div>

//           <div className="text-left">
//             <label className="block font-bold mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//               className="w-full p-3 rounded bg-black border-lime-400 border-2 text-white outline-none"
//             />
//           </div>

//           <div className="text-left">
//             <label className="block font-bold mb-1">Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//               placeholder="Enter your message"
//               rows={4}
//               className="w-full p-3 rounded bg-black border-lime-400 border-2 text-white outline-none resize-none"
//             ></textarea>
//           </div>

//           <div className="pt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-lime-500 text-white font-bold py-3 rounded hover:bg-lime-700 transition"
//             >
//               {loading ? 'Sending...' : 'Submit ↗'}
//             </button>
//           </div>
//         </motion.form>
//       </motion.div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import { Mail, Phone, MapPin } from 'lucide-react'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        toast.success('Message sent successfully! We will get back to you soon.')
        setForm({ name: '', email: '', company: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Send failed:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

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

      <ToastContainer position="bottom-right" autoClose={3000} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form and we'll respond within 24 hours. You can also reach us directly through our contact details.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@christect.com</p>
                  <p className="text-muted-foreground">info@christect.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  <p className="text-muted-foreground">United States</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl border border-white/10 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
