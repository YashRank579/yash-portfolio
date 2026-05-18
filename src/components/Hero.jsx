import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import profilePhoto from '../assets/profile.jpg'

const TYPING_TEXTS = [
  'Data Science Enthusiast',
  'Machine Learning Engineer',
  'Deep Learning Explorer',
  'NLP Specialist',
  'Generative AI Builder',
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 45)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTextIndex(i => (i + 1) % TYPING_TEXTS.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#020816]" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="dot-pattern absolute inset-0 opacity-30" />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-20 sm:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              Available for Work
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                Yash Rank
              </span>
            </motion.h1>

            {/* Typing Text */}
            <motion.div variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 font-medium mb-6 h-8">
              <span className="text-yellow-400">{TYPING_TEXTS[textIndex].slice(0, charIndex)}</span>
              <span className="cursor">|</span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              B.Tech Computer Science undergraduate passionate about{' '}
              <span className="text-yellow-400 font-medium">Data Science</span>,{' '}
              <span className="text-yellow-400 font-medium">Machine Learning</span>, and{' '}
              <span className="text-yellow-400 font-medium">Generative AI</span>{' '}
              — building intelligent solutions with deep learning & NLP.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <button
                id="hero-portfolio-btn"
                onClick={() => scrollTo('projects')}
                className="btn-primary text-[#020816] font-bold w-full sm:w-auto"
              >
                View Portfolio
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('contact')}
                className="btn-outline w-full sm:w-auto"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              <span className="text-gray-500 text-sm">Find me on:</span>
              {[
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/yash-rank-68a008350/', label: 'LinkedIn' },
                { icon: FiGithub, href: 'https://github.com/YashRank579', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-500/40 hover:bg-yellow-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 mt-10 pt-8 border-t border-white/10">
              {[
                { label: 'CGPA', value: '8.83' },
                { label: 'Projects', value: '3+' },
                { label: 'GATE 2026', value: 'Qualified' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-gradient">{value}</div>
                  <div className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 blur-3xl scale-110 animate-pulse-slow" />

              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-yellow-500/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-yellow-500/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

              {/* Profile Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-yellow-500/30 gold-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent z-10" />
                <img
                  src={profilePhoto}
                  alt="Yash Rank - Data Science & ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 glass-card px-3 py-2 rounded-xl border border-yellow-500/20 hover:transform-none"
              >
                <div className="text-xs text-gray-400">CGPA</div>
                <div className="text-yellow-400 font-bold text-lg">8.83</div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/3 glass-card px-3 py-2 rounded-xl border border-yellow-500/20 hover:transform-none"
              >
                <div className="text-xs text-gray-400">Stack</div>
                <div className="text-yellow-400 font-bold text-sm">AI/ML</div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 top-8 glass-card px-3 py-2 rounded-xl border border-yellow-500/20 hover:transform-none"
              >
                <div className="text-xs text-gray-400">Focus</div>
                <div className="text-yellow-400 font-bold text-sm">Data Science</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-500 hover:text-yellow-400 transition-colors hidden sm:flex"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={18} />
      </motion.button>
    </section>
  )
}
