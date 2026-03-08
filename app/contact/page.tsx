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

  return (
    <div className="relative min-h-screen bg-background overflow-hidden pt-20 pb-20 flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl w-full mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 p-8 rounded-lg border border-border bg-card/50 backdrop-blur-sm"
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
  )
}
