import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCode, HiTerminal, HiSparkles, HiPlay, HiCheckCircle } from 'react-icons/hi'
import { FaPython } from 'react-icons/fa'
import { useSound } from './SoundManager'

const SAMPLE_RUNS = {
  architecture: {
    command: 'sourabh.inspect_agent(model="llama-3-70b")',
    output: [
      { type: 'info', text: '⚡ Initializing LangChain multi-turn memory orchestrator...' },
      { type: 'success', text: '✓ Connected to Vector Database (ChromaDB / Pinecone: 1,024 embeddings)' },
      { type: 'success', text: '✓ FastAPI async streaming worker active on port 8000' },
      { type: 'output', text: 'Model: Llama 3.1 70B | Temperature: 0.2 | Streaming: Enabled' },
      { type: 'metric', text: 'Throughput: 148 tok/s | Time to First Token: 28ms' },
    ],
  },
  benchmark: {
    command: 'sourabh.run_benchmark(suite="full_stack_ai")',
    output: [
      { type: 'info', text: '🚀 Running end-to-end benchmark across 5,000 queries...' },
      { type: 'output', text: '• Vector retrieval cosine similarity: 0.94 avg' },
      { type: 'output', text: '• Real-time WebSocket sync: 12ms latency' },
      { type: 'output', text: '• Frontend frame rate: 60 FPS (WebGL / Three.js)' },
      { type: 'success', text: '✓ All systems operational with 99.98% reliability' },
    ],
  },
  tools: {
    command: 'sourabh.execute_tool(name="rag_retriever", query="skills")',
    output: [
      { type: 'info', text: '🔍 Searching indexed repositories & projects...' },
      { type: 'output', text: 'Match 1: AI Chat Bot (Python, FastAPI, LangChain, React)' },
      { type: 'output', text: 'Match 2: E-Commerce Platform (Node.js, MongoDB, Stripe)' },
      { type: 'output', text: 'Match 3: Collaborative Workspace (Next.js, WebSockets, Postgres)' },
      { type: 'success', text: '✓ 3 matches retrieved in 18ms' },
    ],
  },
}

export default function HeroConsole() {
  const [activeTab, setActiveTab] = useState('console') // 'console' | 'code' | 'json'
  const [runKey, setRunKey] = useState('architecture')
  const [isExecuting, setIsExecuting] = useState(false)
  const [visibleLines, setVisibleLines] = useState(SAMPLE_RUNS.architecture.output)
  const { playClick, playBlip, playSuccess } = useSound()
  const consoleBottomRef = useRef(null)

  const triggerRun = (key) => {
    playClick()
    setRunKey(key)
    setIsExecuting(true)
    setVisibleLines([])

    const lines = SAMPLE_RUNS[key].output
    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line])
        playBlip()
        if (index === lines.length - 1) {
          setIsExecuting(false)
          playSuccess()
        }
      }, (index + 1) * 220)
    })
  }

  useEffect(() => {
    consoleBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visibleLines])

  return (
    <div className="hero-console">
      {/* Window Titlebar */}
      <div className="console-titlebar">
        <div className="console-traffic-lights">
          <span className="light light--red" />
          <span className="light light--yellow" />
          <span className="light light--green" />
        </div>

        {/* Tabs */}
        <div className="console-tabs">
          <button
            type="button"
            className={`console-tab ${activeTab === 'console' ? 'is-active' : ''}`}
            onClick={() => { playClick(); setActiveTab('console') }}
          >
            <HiTerminal className="console-tab-icon" />
            <span>live_stream.log</span>
          </button>
          <button
            type="button"
            className={`console-tab ${activeTab === 'code' ? 'is-active' : ''}`}
            onClick={() => { playClick(); setActiveTab('code') }}
          >
            <FaPython className="console-tab-icon" style={{ color: '#38bdf8' }} />
            <span>agent.py</span>
          </button>
          <button
            type="button"
            className={`console-tab ${activeTab === 'json' ? 'is-active' : ''}`}
            onClick={() => { playClick(); setActiveTab('json') }}
          >
            <HiCode className="console-tab-icon" />
            <span>stack.json</span>
          </button>
        </div>

        <div className="console-status-pill">
          <span className="pulse-dot" /> Live System
        </div>
      </div>

      {/* Body Content */}
      <div className="console-body">
        {activeTab === 'console' && (
          <div className="console-terminal-view">
            {/* Action Bar */}
            <div className="console-controls">
              <span className="console-controls-label">Run Live Simulation:</span>
              <button
                type="button"
                className={`console-chip ${runKey === 'architecture' ? 'is-active' : ''}`}
                onClick={() => triggerRun('architecture')}
                disabled={isExecuting}
              >
                <HiSparkles /> Agent Pipeline
              </button>
              <button
                type="button"
                className={`console-chip ${runKey === 'benchmark' ? 'is-active' : ''}`}
                onClick={() => triggerRun('benchmark')}
                disabled={isExecuting}
              >
                <HiPlay /> Performance
              </button>
              <button
                type="button"
                className={`console-chip ${runKey === 'tools' ? 'is-active' : ''}`}
                onClick={() => triggerRun('tools')}
                disabled={isExecuting}
              >
                <HiCheckCircle /> Tool Calling
              </button>
            </div>

            {/* Output Stream */}
            <div className="console-stream">
              <div className="console-line console-line--cmd">
                <span className="prompt-sym">❯</span> {SAMPLE_RUNS[runKey].command}
              </div>

              {visibleLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  className={`console-line console-line--${line.type}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {line.text}
                </motion.div>
              ))}

              {isExecuting && (
                <div className="console-line console-line--loading">
                  <span className="console-spinner" /> Streaming response tokens...
                </div>
              )}
              <div ref={consoleBottomRef} />
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="console-code-view">
            <pre className="code-block">
              <code>
                <span className="token-keyword">from</span> fastapi <span className="token-keyword">import</span> FastAPI{'\n'}
                <span className="token-keyword">from</span> langchain.agents <span className="token-keyword">import</span> create_openai_tools_agent{'\n'}
                <span className="token-keyword">from</span> vector_store <span className="token-keyword">import</span> ChromaDB{'\n\n'}
                <span className="token-comment"># Initialize Sourabh's Production AI Engine</span>{'\n'}
                app = FastAPI(title=<span className="token-string">"SourabhAI-Core"</span>){'\n'}
                vector_db = ChromaDB(embedding_model=<span className="token-string">"text-embedding-3-small"</span>){'\n\n'}
                agent = create_openai_tools_agent({'\n'}
                {'    '}llm=<span className="token-string">"llama-3.1-70b"</span>,{'\n'}
                {'    '}tools=[vector_db.as_retriever(), code_interpreter, web_search],{'\n'}
                {'    '}system_prompt=<span className="token-string">"Deliver high-throughput, sub-second AI workflows."</span>{'\n'}
                ){'\n\n'}
                <span className="token-keyword">@app.post</span>(<span className="token-string">"/v1/chat/stream"</span>){'\n'}
                <span className="token-keyword">async def</span> <span className="token-function">chat_endpoint</span>(prompt: str):{'\n'}
                {'    '}<span className="token-keyword">return await</span> agent.astream_tokens(prompt)
              </code>
            </pre>
          </div>
        )}

        {activeTab === 'json' && (
          <div className="console-code-view">
            <pre className="code-block">
              <code>
                {`{
  "engineer": "Sourabh Dhulrao",
  "role": "AI Engineer & Full-Stack Developer",
  "experience": "3+ Years",
  "core_stack": {
    "ai_ml": ["Python", "LangChain", "FastAPI", "OpenAI API", "Vector DBs"],
    "frontend": ["React 18", "Next.js", "Three.js", "Framer Motion"],
    "backend": ["Node.js", "MongoDB", "PostgreSQL", "WebSockets"],
    "infrastructure": ["Docker", "Git", "CI/CD", "Linux"]
  },
  "status": "Available for High-Impact Roles"
}`}
              </code>
            </pre>
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="console-statusbar">
        <div className="status-group">
          <span>Python 3.11</span>
          <span>UTF-8</span>
          <span>FastAPI</span>
        </div>
        <div className="status-group">
          <span className="text-accent">28ms Latency</span>
          <span className="text-green">148 tok/s</span>
        </div>
      </div>
    </div>
  )
}
