import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCpu, FiTrendingUp, FiLayout } from 'react-icons/fi'
import { BiBrain } from 'react-icons/bi'
import { MdOutlineAutoAwesome } from 'react-icons/md'

const services = [
  {
    icon: BiBrain,
    title: 'Machine Learning',
    color: '#f5a623',
    desc: 'Building predictive models using classification, regression, and clustering techniques with Scikit-learn, achieving high accuracy on real-world datasets.',
    tags: ['Scikit-learn', 'Logistic Regression', 'SVC', 'Random Forest'],
  },
  {
    icon: FiCpu,
    title: 'Deep Learning & NLP',
    color: '#8b5cf6',
    desc: 'Developing deep learning models for NLP tasks, custom chatbots, and audio transcription systems using Transformer architectures and custom speech-to-text pipelines.',
    tags: ['TensorFlow', 'PyTorch', 'Whisper', 'NLP', 'FAISS'],
  },
  {
    icon: MdOutlineAutoAwesome,
    title: 'Generative AI & RAG',
    color: '#06b6d4',
    desc: 'Building Retrieval-Augmented Generation (RAG) systems and exploring Agentic AI patterns for autonomous, intelligent workflows using LangChain.',
    tags: ['LangChain', 'RAG', 'Agentic AI', 'LLMs'],
  },
  {
    icon: FiTrendingUp,
    title: 'Data Analysis & Visualization',
    color: '#10b981',
    desc: 'Performing end-to-end data analysis — from cleaning and preprocessing to visualization with Matplotlib, Seaborn, Tableau, and Power BI for actionable insights.',
    tags: ['Pandas', 'Matplotlib', 'Seaborn', 'Tableau', 'Power BI'],
  },
  {
    icon: FiLayout,
    title: 'Agentic AI',
    color: '#f43f5e',
    desc: 'Designing and building autonomous AI agents that can reason, plan, and execute multi-step tasks independently — leveraging tool use, memory, and self-reflection for intelligent workflows.',
    tags: ['LangChain', 'AI Agents', 'Tool Use', 'Autonomous Workflows'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#060d1f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      {/* Decorative blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="section-heading mt-2 text-white">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Areas where I bring value — from building intelligent ML models
          to crafting data-driven insights and AI-powered applications.
        </motion.p>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl group cursor-default relative overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: service.color }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${service.color}18`, border: `1px solid ${service.color}30` }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
