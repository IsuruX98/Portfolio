'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
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

  // Close mobile menu when clicking outside
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
      style={scrolled ? { WebkitBackdropFilter: 'blur(24px)' } : undefined}
    >
      {/* Backdrop: click outside mobile menu to close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-black/30 backdrop-blur-sm md:hidden z-0"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <div ref={menuRef} className="relative z-10">
      <nav className="section-wrapper">
        <div className="flex items-center justify-between h-16">
          <Link
            href="#hero"
            className="text-lg font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            Isuru Madusanka
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
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

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--glass-bg-strong)] backdrop-blur-xl border-b border-[var(--glass-border)] overflow-hidden relative z-10"
            style={{ WebkitBackdropFilter: 'blur(24px)' }}
          >
            <div className="section-wrapper py-3 space-y-1">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
