import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import logoImg from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ]

  const socials = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/yash-rank-68a008350/', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/YashRank579', label: 'GitHub' },
  ]

  return (
    <footer className="relative bg-[#060d1f] border-t border-yellow-500/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Yash Rank Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-lg"
                style={{ boxShadow: '0 0 12px rgba(245,166,35,0.4)' }}
              />
              <span className="font-bold text-white text-lg">
                Yash<span className="text-yellow-400">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Data Science & Machine Learning Engineer focused on building
              intelligent AI solutions with Deep Learning, NLP & Generative AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-gray-500 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-500">
              <p>yashrank65@gmail.com</p>
              <p>+91 8320518873</p>
              <p>Vadodara, Gujarat, India</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-yellow-400 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Yash Rank. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <FiHeart className="text-yellow-400 mx-1" size={14} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
