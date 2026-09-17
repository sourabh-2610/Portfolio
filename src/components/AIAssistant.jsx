import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiSparkles,
  HiX,
  HiPaperAirplane,
  HiTrash,
  HiChevronDown,
} from 'react-icons/hi'
import { FaRobot, FaUser } from 'react-icons/fa'

const PROMPT_SUGGESTIONS = [
  'What are Sourabh’s core AI & Tech skills?',
  'Tell me about his best projects',
  'What is his background and experience?',
  'How can I get in touch to hire him?',
]

const KNOWLEDGE_BASE = [
  {
    keywords: ['skill', 'stack', 'tech', 'languages', 'tools', 'technologies', 'ai skills'],
    answer:
      "Sourabh is proficient across modern AI & Full-Stack engineering:\n\n• **AI & ML**: Python, LangChain, LLM integration, OpenAI/Gemini APIs, Prompt Engineering, FastAPI.\n• **Frontend**: React 18, Next.js, TypeScript, JavaScript (ES6+), Framer Motion, Three.js, HTML5/CSS3.\n• **Backend & DB**: Node.js, Express, Python/Django, MongoDB, PostgreSQL, REST APIs, WebSockets.\n• **DevOps & Tools**: Git, Docker, GitHub Actions, Vite, Linux, Cloud Deployments.",
    action: { label: 'Explore Skills Section', href: '#skills' },
  },
  {
    keywords: ['project', 'work', 'portfolio', 'built', 'showcase', 'ecommerce', 'chat', 'bot'],
    answer:
      "Here are key highlights from Sourabh's portfolio:\n\n1. **AI Chat Bot**: Conversational assistant built with Python, FastAPI, LangChain & React with context memory.\n2. **E-Commerce Platform**: Full-stack store with real-time inventory, Stripe checkout, & custom admin dashboard.\n3. **Task Management App**: Collaborative SaaS board with real-time drag-and-drop powered by Socket.io.\n4. **Weather Dashboard**: Clean weather forecasting app with animated data visualisations.\n5. **Portfolio CMS**: Headless CMS engine built with Django, React & Docker.",
    action: { label: 'View All Projects', href: '#projects' },
  },
  {
    keywords: ['experience', 'background', 'about', 'who is', 'years', 'sourabh', 'bio'],
    answer:
      "Sourabh Dhulrao is an AI & Full-Stack developer with 3+ years of building hands-on digital applications. He is passionate about bridging cutting-edge AI models with intuitive, high-performance web interfaces that users love.",
    action: { label: 'Read Full Bio', href: '#about' },
  },
  {
    keywords: ['hire', 'contact', 'email', 'reach', 'job', 'freelance', 'work together', 'collab'],
    answer:
      "Sourabh is open to exciting full-time roles, freelance projects, and high-impact AI/web engineering collaborations!\n\n• **Email**: sourabh.dhulrao@email.com\n• **Location**: India (available for remote & global opportunities)\n• **Socials**: GitHub & LinkedIn",
    action: { label: 'Open Contact Form', href: '#contact' },
  },
  {
    keywords: ['resume', 'cv', 'qualifications'],
    answer:
      "Sourabh's resume details his engineering milestones, tech certifications, and production-grade project metrics.",
    action: { label: 'View Resume', customAction: 'open-resume' },
  },
]

function getAIResponse(query) {
  const q = query.toLowerCase()
  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some((k) => q.includes(k))) {
      return item
    }
  }
  return {
    answer:
      `Thanks for asking! Sourabh is an ambitious AI Engineer and Full-Stack Developer dedicated to building responsive, memorable software. Whether you need intelligent AI workflows (LLMs, LangChain, FastAPI) or sleek modern frontends (React, Three.js, interactive UI), he's ready to bring ideas to life.`,
    action: { label: 'Get in Touch', href: '#contact' },
  }
}

export default function AIAssistant({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "👋 Hey there! I'm Sourabh's interactive AI assistant. Ask me about his AI work, tech stack, or what we can build together!",
      time: 'Just now',
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  const handleSend = (userText) => {
    const query = userText || input
    if (!query.trim()) return

    const userMsgId = Date.now()
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: query.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking and streaming
    const matched = getAIResponse(query)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: matched.answer,
          action: matched.action,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    }, 650)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleActionClick = (action) => {
    if (action.customAction === 'open-resume' && onOpenResume) {
      onOpenResume()
    } else if (action.href) {
      document.querySelector(action.href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="ai-trigger-wrap">
        <motion.button
          type="button"
          className={`ai-trigger ${isOpen ? 'ai-trigger--active' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isOpen ? 'Close AI Assistant' : 'Chat with Sourabh AI'}
        >
          <span className="ai-trigger__glow" />
          <span className="ai-trigger__icon">
            {isOpen ? <HiX /> : <HiSparkles />}
          </span>
          {!isOpen && <span className="ai-trigger__badge">Ask AI</span>}
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-modal"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          >
            {/* Header */}
            <div className="ai-modal__header">
              <div className="ai-modal__profile">
                <div className="ai-modal__avatar">
                  <FaRobot />
                  <span className="ai-modal__online-dot" />
                </div>
                <div>
                  <h4 className="ai-modal__title">Sourabh's AI Persona</h4>
                  <p className="ai-modal__subtitle">Trained on Sourabh's Portfolio</p>
                </div>
              </div>
              <div className="ai-modal__actions">
                <button
                  type="button"
                  className="ai-modal__btn"
                  onClick={() =>
                    setMessages([
                      {
                        id: Date.now(),
                        sender: 'ai',
                        text: "Chat cleared! What would you like to explore next?",
                        time: 'Just now',
                      },
                    ])
                  }
                  title="Clear chat"
                  aria-label="Clear chat"
                >
                  <HiTrash />
                </button>
                <button
                  type="button"
                  className="ai-modal__btn"
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  aria-label="Minimize AI assistant"
                >
                  <HiChevronDown />
                </button>
              </div>
            </div>

            {/* Quick Prompt Chips */}
            <div className="ai-modal__chips">
              {PROMPT_SUGGESTIONS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="ai-chip"
                  onClick={() => handleSend(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="ai-modal__body">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  className={`ai-message ai-message--${msg.sender}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="ai-message__avatar">
                    {msg.sender === 'ai' ? <FaRobot /> : <FaUser />}
                  </div>
                  <div className="ai-message__content">
                    <div className="ai-message__bubble">
                      <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                      {msg.action && (
                        <button
                          type="button"
                          className="ai-message__action-btn"
                          onClick={() => handleActionClick(msg.action)}
                        >
                          {msg.action.label} →
                        </button>
                      )}
                    </div>
                    <span className="ai-message__time">{msg.time}</span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="ai-message ai-message--ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="ai-message__avatar">
                    <FaRobot />
                  </div>
                  <div className="ai-message__bubble ai-message__bubble--typing">
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                    <span className="ai-typing-dot" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="ai-modal__footer">
              <input
                type="text"
                className="ai-input"
                placeholder="Ask about AI, projects, experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                maxLength={200}
              />
              <button
                type="button"
                className="ai-send-btn"
                onClick={() => handleSend()}
                disabled={!input.trim()}
                aria-label="Send message"
              >
                <HiPaperAirplane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
