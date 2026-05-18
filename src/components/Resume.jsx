import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiBriefcase, FiAward, FiCalendar, FiMapPin, FiStar, FiExternalLink } from 'react-icons/fi'

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Parul University, Vadodara',
    period: '2023 – Present',
    grade: 'CGPA: 8.83 / 10.0',
    location: 'Vadodara, India',
    desc: 'Pursuing a Bachelor of Technology in Computer Science with strong focus on Data Science, Machine Learning, Deep Learning, NLP, Statistics, and DBMS.',
    highlights: ['Data Science & ML', 'Deep Learning & NLP', 'Statistics & DBMS', 'Python & Java'],
    color: '#f5a623',
  },
]

const achievements = [
  {
    title: 'Qualified GATE 2026 Exam',
    detail: 'Data Science and Artificial Intelligence (DA)',
    color: '#8b5cf6',
  },
  {
    title: 'Preparing for GATE 2027',
    detail: 'Data Science & Artificial Intelligence – DA',
    color: '#06b6d4',
  },
  {
    title: 'Currently building Generative AI project',
    detail: 'Utilizing Retrieval-Augmented Generation (RAG)',
    color: '#10b981',
  },
  {
    title: 'Exploring Agentic AI',
    detail: 'For autonomous workflows and intelligent agents',
    color: '#f59e0b',
  },
]

const certifications = [
  {
    name: 'Complete Data Science, ML, DL, NLP Bootcamp',
    issuer: 'Krish Naik, KRISHAI Technologies Pvt. Ltd.',
    color: '#f5a623',
    url: 'https://www.udemy.com/certificate/UC-6e1cd877-fa33-4462-80d3-108140ac2090/',
  },
]

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-[#060d1f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">My Background</span>
          <h2 className="section-heading mt-2 text-white">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-bold text-white mb-8"
            >
              <FiBook className="text-yellow-400" size={22} />
              Education
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line opacity-30" />
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-[#060d1f]"
                    style={{ background: item.color, boxShadow: `0 0 10px ${item.color}60` }}
                  />
                  <div className="glass-card p-6 rounded-2xl mb-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div>
                        <h4 className="text-white font-bold text-base">{item.degree}</h4>
                        <p className="font-semibold text-sm mt-1" style={{ color: item.color }}>
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><FiCalendar size={11} /> {item.period}</span>
                      <span className="flex items-center gap-1"><FiMapPin size={11} /> {item.location}</span>
                      <span className="px-2 py-0.5 rounded-full font-medium" style={{ background: `${item.color}20`, color: item.color }}>
                        {item.grade}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map(h => (
                        <span key={h} className="text-xs px-2.5 py-1 rounded-lg"
                          style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-xl font-bold text-white mb-8"
            >
              <FiStar className="text-yellow-400" size={22} />
              Achievements & Focus
            </motion.h3>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 timeline-line opacity-30" />
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="relative pl-14"
                >
                  <div
                    className="absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-[#060d1f]"
                    style={{ background: item.color, boxShadow: `0 0 10px ${item.color}60` }}
                  />
                  <div className="glass-card p-5 rounded-2xl mb-4">
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <p className="text-sm mt-1" style={{ color: item.color }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="flex items-center justify-center gap-3 text-xl font-bold text-white mb-8">
            <FiAward className="text-yellow-400" size={22} />
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-card p-5 rounded-xl flex items-start gap-3 hover:-translate-y-1 hover:border-yellow-500/30 transition-all cursor-pointer group w-full sm:w-[calc(50%-8px)]"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                >
                  <FiAward size={18} style={{ color: cert.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold group-hover:text-yellow-400 transition-colors flex items-center gap-2">
                    {cert.name}
                    {cert.url && <FiExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
