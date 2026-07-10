import { motion } from 'framer-motion'
import { Reveal, SectionHeading, slideInLeft, slideInRight } from './animations'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__visual"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideInLeft}
        >
          <div className="about__image-wrapper">
            <div className="about__image">
              <span className="about__initials">SD</span>
            </div>
            <motion.div
              className="about__image-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="about__stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="about__stat"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about__text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={slideInRight}
        >
          <SectionHeading
            label="About Me"
            title="Passionate about building things that matter"
          />
          <Reveal delay={0.1}>
            <p>
              I'm <strong>Sourabh Dhulrao</strong>, a developer who loves turning ideas into
              polished, performant web applications. I focus on writing maintainable code,
              creating intuitive user interfaces, and delivering solutions that make a real impact.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or refining my craft one project at a time. I believe great
              software is a blend of technical excellence and human-centered design.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.a
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}
