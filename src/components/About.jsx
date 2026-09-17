import { motion } from 'framer-motion'
import { Reveal, SectionHeading, slideInLeft, slideInRight } from './animations'
import sourabhImg from '../assets/sourabh.png'
import { HiDocumentText } from 'react-icons/hi'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
]

export default function About({ onOpenResume }) {
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
          <div className="about__photo-stack">
            {/* Background square-type rotating dashed line */}
            <motion.div
              className="about__photo-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            {/* Backing rotated cards */}
            <div className="about__photo-card-back about__photo-card-back--left" />
            <div className="about__photo-card-back about__photo-card-back--right" />

            {/* Main photo card */}
            <div className="about__photo-card">
              <img
                src={sourabhImg}
                alt="Sourabh Dhulrao"
                className="about__photo-img"
              />
              {/* Diagonal light sweep */}
              <div className="about__photo-sweep" />
              {/* Hover to reveal text hint */}
              <span className="about__photo-hint">Hover to reveal</span>
            </div>
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
              I'm <strong>Sourabh Dhulrao</strong>, an AI Engineer and Full-Stack Developer who loves
              turning complex technical challenges into polished, performant web applications.
              I specialize in integrating intelligent LLM workflows, designing responsive interfaces,
              and delivering solutions that make an immediate real-world impact.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Whether it's fine-tuning prompt pipelines, creating real-time multi-user systems,
              or crafting fluid 3D WebGL visuals, I believe the best software lives at the intersection
              of technical rigor and human-centered design.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <motion.button
              type="button"
              className="btn btn--primary"
              onClick={onOpenResume}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiDocumentText /> View & Download Resume
            </motion.button>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}
