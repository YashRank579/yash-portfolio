import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    color: '#f5a623',
    skills: [
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 78 },
      { name: 'PyTorch', level: 75 },
      { name: 'LangChain / RAG', level: 70 },
      { name: 'LangGraph', level: 65 },
    ],
  },
  {
    title: 'Data Science & Analytics',
    color: '#8b5cf6',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'NumPy & Pandas', level: 88 },
      { name: 'Matplotlib & Seaborn', level: 82 },
      { name: 'Tableau / Power BI', level: 72 },
      { name: 'Statistics & Probability', level: 80 },
    ],
  },
  {
    title: 'Programming & Web',
    color: '#06b6d4',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C / C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'HTML + CSS', level: 80 },
      { name: 'Flask', level: 72 },
    ],
  },
  {
    title: 'Tools & Cloud',
    color: '#10b981',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Jupyter Lab', level: 90 },
      { name: 'VS Code', level: 88 },
      { name: 'AWS', level: 60 },
      { name: 'MySQL / MongoDB', level: 75 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setAnimated(true), delay * 100)
      return () => clearTimeout(t)
    }
  }, [inView, delay])

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-sm font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={animated ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 10px ${color}40`,
          }}
        >
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#060d1f]"
            style={{ background: color }} />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'LangChain', 'Flask', 'Streamlit', 'NLTK', 'spaCy', 'MySQL',
    'MongoDB', 'AWS', 'Git', 'Tableau', 'Power BI', 'Excel',
  ]

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
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
          <span className="text-yellow-400 font-medium tracking-widest uppercase text-sm">What I Know</span>
          <h2 className="section-heading mt-2 text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 gold-gradient rounded-full mx-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
        >
          All the skills I've developed through academic learning, certifications,
          and hands-on projects — with a strong focus on Machine Learning, Deep Learning & Data Science.
        </motion.p>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glass-card p-6 rounded-2xl hover:transform-none"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: category.color }}
                />
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>

              {/* Skill Bars */}
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIdx * 2 + skillIdx}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-white font-bold text-xl mb-6">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 hover:bg-yellow-500/15 hover:border-yellow-500/40 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
