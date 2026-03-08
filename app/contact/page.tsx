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
import 'react-toastify/dist/ReactToastify.css'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
        toast.success('✅ Message sent successfully!')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        toast.error('❌ Failed to send the message, please try again.')
      }
    } catch (error) {
      console.error('Send failed:', error)
      toast.error('⚠️ Something went wrong, please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@christech.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 (311) 281-3975',
      description: 'Call us during business hours',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Karachi, Pakistan',
      description: 'Visit us at our location',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '9 AM - 6 PM PST',
      description: 'Monday to Friday',
    },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-20 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels. We'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid gap-4">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:border-primary hover:bg-card/60 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary flex-shrink-0 mt-1">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{detail.value}</p>
                        <p className="text-muted-foreground text-sm">{detail.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Response Time Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-primary/30 bg-primary/10 backdrop-blur-sm"
            >
              <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
              <p className="text-muted-foreground text-sm">
                We typically respond to inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm sticky top-20"
            >
          <div>
            <label className="block text-foreground font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-foreground font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-foreground font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-foreground font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
