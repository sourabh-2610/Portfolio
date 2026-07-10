import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer__inner">
        <p>
          Designed & Built by <strong>Sourabh Dhulrao</strong>
        </p>
        <p className="footer__copy">&copy; {year} All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
