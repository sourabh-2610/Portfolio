import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SectionHeading, slideInLeft, slideInRight } from './animations'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <motion.div
          className="contact__info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideInLeft}
        >
          <SectionHeading
            label="Contact"
            title="Let's work together"
            description="Have a project in mind or just want to say hello? I'd love to hear from you."
          />

          <div className="contact__details">
            <motion.a
              href="mailto:sourabh.dhulrao@email.com"
              className="contact__detail"
              whileHover={{ x: 6 }}
            >
              <HiOutlineMail />
              <span>sourabh.dhulrao@email.com</span>
            </motion.a>
            <div className="contact__detail">
              <HiOutlineLocationMarker />
              <span>India</span>
            </div>
          </div>

          <div className="contact__socials">
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, color: 'var(--accent)' }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideInRight}
        >
          {['name', 'email', 'message'].map((field, i) => (
            <motion.div
              key={field}
              className={`form-group ${field === 'message' ? 'form-group--full' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Tell me about your project..."
                />
              ) : (
                <input
                  id={field}
                  type={field === 'email' ? 'email' : 'text'}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  required
                  placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                />
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="btn btn--primary btn--full"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            {submitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
