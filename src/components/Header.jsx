"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Цены', href: '/prices' },
    { name: 'Блог', href: '/blog' },
    { name: 'Контакты', href: '/contact' },
  ]

  const isActive = (href) => pathname === href

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Tyzo</span>
              <span className="text-2xl font-bold text-gray-900">.dev</span>
            </Link>
          </motion.div>
          
          {/* Desktop navigation */}
          <motion.nav 
            className="hidden md:flex md:space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-2 py-1 text-sm font-medium ${
                    isActive(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-600"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          
          {/* Contact button on desktop */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="rounded-md bg-primary-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Связаться
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Открыть главное меню</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1 px-2 pb-3 pt-2 bg-white shadow-lg">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="/contact"
                className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Связаться
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
} 