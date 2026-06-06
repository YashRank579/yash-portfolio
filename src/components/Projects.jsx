import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'AI Business Analyst Agent',
    category: 'Agentic AI / RAG',
    description:
      'A multi-agent business intelligence platform that performs automated market, competitor, and SWOT analysis. Features parallel execution of specialized agents using LangGraph and a real-time Streamlit dashboard.',
    tech: ['LangGraph', 'LangChain', 'Groq', 'Streamlit', 'ChromaDB', 'HuggingFace'],
    color: '#f5a623',
    featured: true,
    github: 'https://github.com/YashRank579/Business_Analyst_Agent',
    highlights: [
      'Designed a multi-agent business intelligence platform using LangGraph for parallel execution of specialized agents conducting market, competitor, and SWOT analysis',
      'Built a RAG pipeline utilizing Groq (Llama 3.3 70B), Tavily Search, HuggingFace Embeddings, and ChromaDB to gather and synthesize real-time business insights',
      'Developed a scalable Streamlit dashboard with robust state management to generate and visualize comprehensive executive-level strategic reports',
    ],
  },
  {
    id: 2,
    title: 'VideoLens AI',
    category: 'Generative AI / RAG',
    description:
      'A production-ready YouTube video Q&A chatbot powered by Groq APIs. Features a complete transcription pipeline, transcript citations, and aggressive caching to minimize processing overhead.',
    tech: ['Streamlit', 'LangChain', 'Groq API', 'Whisper Turbo', 'FAISS', 'yt-dlp'],
    color: '#8b5cf6',
    featured: true,
    github: 'https://github.com/YashRank579/VideoLens',
    highlights: [
      'Engineered a Streamlit and LangChain chatbot using Groq APIs (Llama 3.3) for context-aware YouTube Q&A and precise transcript citations',
      'Built a transcription pipeline combining yt-dlp, pydub, and Groq Whisper Turbo, integrated with a local FAISS and FastEmbed RAG architecture',
      'Optimized system efficiency through aggressive metadata and transcript caching, eliminating redundant processing',
    ],
  },
  {
    id: 3,
    title: 'PageGenie - Legal Document Analyzer',
    category: 'Advanced RAG',
    description:
      'An AI-powered legal document analysis platform that extracts complex PDFs and enables real-time, grounded natural language Q&A using hybrid search and advanced retrieval strategies.',
    tech: ['Python', 'Qdrant', 'Groq LLM', 'PyMuPDF', 'HuggingFace', 'Advanced RAG'],
    color: '#06b6d4',
    featured: true,
    github: 'https://github.com/YashRank579/PageGenie',
    highlights: [
      'Developed an AI legal platform utilizing PyMuPDFLoader and Groq LLM to extract complex PDFs and enable real-time, grounded natural language Q&A',
      'Implemented a scalable hybrid Graph and Advanced RAG pipeline combining vector search via Qdrant and Hugging Face Embeddings',
    ],
  },
]

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      {/* Top colored bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Category Badge */}
      <div className="absolute top-6 right-6">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: `${project.color}20`,
            color: project.color,
            border: `1px solid ${project.color}40`,
          }}
        >
          {project.category}
        </span>
      </div>

      <div className="p-7">
        {/* Project number */}
        <div
          className="text-6xl font-black opacity-10 mb-2 select-none"
          style={{ color: project.color }}
        >
          0{project.id}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors pr-20">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="mt-1 text-yellow-400 flex-shrink-0">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-lg font-medium"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm transition-all duration-200"
          >
            <FiGithub size={15} />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              style={{
                background: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              <FiExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Bottom hover line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#020816]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">What I've Built</span>
          <h2 className="section-heading mt-2 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          A selection of projects that showcase my skills in Machine Learning,
          NLP, Deep Learning, and data-driven application development.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/YashRank579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <FiGithub size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
