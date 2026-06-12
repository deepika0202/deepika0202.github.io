import { Link, useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lastPathname, setLastPathname] = useState(location.pathname)

  if (lastPathname !== location.pathname) {
    setLastPathname(location.pathname)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="inline-flex items-center min-h-11 text-white hover:text-blue-400 transition-colors duration-200"
            aria-label="Deepika Chaturvedi — home"
          >
            <span className="font-black text-2xl">DC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="inline-flex min-h-11 items-center px-4 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/Deepika_Chaturvedi_Resume.pdf"
              download="Deepika_Chaturvedi_Resume.pdf"
              className="ml-3 inline-flex min-h-11 items-center px-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-500/50 transition-colors duration-200"
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pb-4 pt-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Deepika_Chaturvedi_Resume.pdf"
                download="Deepika_Chaturvedi_Resume.pdf"
                className="block px-4 py-3 rounded-lg text-base font-medium text-blue-400 hover:bg-blue-500/10 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
