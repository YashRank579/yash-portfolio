import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCpu, FiDatabase, FiTrendingUp, FiTarget } from 'react-icons/fi'
import profilePhoto from '../assets/profile.jpg'
import resumePDF from '../assets/resume.pdf'

const highlights = [
  { icon: FiCpu, label: 'Machine Learning', desc: 'Scikit-learn, TensorFlow, PyTorch' },
  { icon: FiDatabase, label: 'Data Science', desc: 'Pandas, NumPy, Visualization' },
  { icon: FiTrendingUp, label: 'Deep Learning', desc: 'NLP, LSTM, Transformers' },
  { icon: FiTarget, label: 'CGPA', desc: '8.83 / 10.0' },
]

const infoItems = [
  { label: 'Name', value: 'Yash Rank' },
  { label: 'Email', value: 'yashrank65@gmail.com' },
  { label: 'Phone', value: '+91 8320518873' },
  { label: 'Location', value: 'Vadodara, India' },
  { label: 'University', value: 'Parul University' },
  { label: 'Degree', value: 'B.Tech CSE (2023–Present)' },
  { label: 'CGPA', value: '8.83 / 10.0' },
  { label: 'Available', value: 'Open to Opportunities' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#060d1f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">Who I Am</span>
          <h2 className="section-heading mt-2 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="relative mx-auto lg:mx-0 w-72 sm:w-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-yellow-500/20 glow-border">
                <img
                  src={profilePhoto}
                  alt="Yash Rank"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1f]/60 to-transparent" />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-5 py-3 rounded-xl border border-yellow-500/30 hover:transform-none">
                <div className="text-2xl font-black text-gradient">2+</div>
                <div className="text-xs text-gray-400">Years Coding</div>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="glass-card p-4 rounded-xl flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#020816]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-2">
              Hi There! I'm{' '}
              <span className="text-gradient">Yash Rank</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="text-yellow-400 font-medium mb-5">
              Data Science & Machine Learning Engineer
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-4">
              I'm a Computer Science undergraduate at{' '}
              <span className="text-white font-medium">Parul University</span> with a strong
              passion for Data Science, Machine Learning, and Artificial Intelligence. I qualified
              GATE 2026 in Data Science & AI and am preparing for GATE 2027.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-8">
              My focus lies in{' '}
              <span className="text-yellow-400 font-medium">building intelligent ML models</span> —
              from Agentic AI systems like multi-agent business analyst tools to advanced RAG pipelines
              and Q&A systems. I'm currently exploring Generative AI with RAG and Agentic AI
              for autonomous workflows.
            </motion.p>

            {/* Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {infoItems.map(({ label, value }) => (
                <div key={label} className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">▸</span>
                  <div>
                    <span className="text-gray-500 text-sm">{label}: </span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a
                href={resumePDF}
                download="YashRank_Resume.pdf"
                className="btn-primary text-[#020816] font-bold text-sm text-center"
              >
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline text-sm"
              >
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
