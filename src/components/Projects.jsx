import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { SectionHeading, fadeUp } from './animations'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store with cart, payments, and admin dashboard. Built for performance and scalability.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    live: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaborative task board with drag-and-drop, notifications, and team workspaces.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    live: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with location search, 7-day forecasts, and animated visualizations.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    live: '#',
    github: '#',
  },
  {
    title: 'Portfolio CMS',
    description:
      'Headless CMS for developers to manage portfolio content with a clean admin interface.',
    tags: ['Python', 'Django', 'React', 'Docker'],
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    live: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A showcase of projects that highlight my skills and passion for development."
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i * 0.1}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="project-card__image"
                style={{ background: project.gradient }}
              >
                <motion.div
                  className="project-card__overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-card__links">
                    <motion.a
                      href={project.live}
                      aria-label="Live demo"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <HiExternalLink />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      aria-label="GitHub repo"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
