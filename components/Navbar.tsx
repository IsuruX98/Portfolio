'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ? `#${current}` : '');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile side nav when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 hidden md:block transition-all duration-300 ${
          scrolled
            ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
        style={scrolled ? { WebkitBackdropFilter: 'blur(24px)' } : undefined}
      >
        <nav className="section-wrapper">
          <div className="flex items-center justify-between h-16">
            <Link
              href="#hero"
              className="text-lg font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              Isuru Madusanka
            </Link>

            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[var(--accent-muted)] rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile: floating buttons (no bar) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="fixed top-4 left-4 z-[70] md:hidden p-2.5 rounded-full bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] shadow-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/10 transition-colors backdrop-blur-xl"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed top-4 right-4 z-[70] md:hidden p-2.5 rounded-full bg-[var(--glass-bg-strong)] border border-[var(--glass-border)] shadow-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/10 transition-colors backdrop-blur-xl"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      {/* Mobile: side drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[60]"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile: side nav drawer from right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 right-0 bottom-0 w-[min(280px,85vw)] md:hidden z-[80] bg-[var(--glass-bg-strong)] backdrop-blur-xl border-l border-[var(--glass-border)] shadow-xl flex flex-col"
            style={{ WebkitBackdropFilter: 'blur(24px)' }}
          >
            <div className="flex items-center justify-between h-14 px-4 border-b border-[var(--glass-border)] shrink-0">
              <span className="text-sm font-medium text-[var(--muted-foreground)]">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-3">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? 'text-[var(--accent)] bg-[var(--accent-muted)]'
                        : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
