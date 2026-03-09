'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/bgimage1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/80 via-[var(--background)]/70 to-[var(--background)]/95" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
            </div>

            <div className="section-wrapper relative z-10 py-16 md:py-24">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        className="inline-block text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Software Engineer
                    </motion.span>
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight mb-4"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                    >
                        Isuru Madusanka
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-[var(--muted-foreground)] mb-2 font-medium"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                    >
                        Software Engineer at Tecsota LLC, USA
                    </motion.p>
                    <motion.p
                        className="text-base sm:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                    >
                        Full-stack developer focused on React, Next.js, Node.js, and mobile. I build scalable web and mobile applications with clean architecture and modern tooling.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                    >
                        <motion.a
                            href="/pdf/IsuruMadusankaCV.pdf"
                            download
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-blue-500/25"
                        >
                            <FiDownload className="w-5 h-5" />
                            Download Resume
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--foreground)] bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-colors"
                        >
                            Get in touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                <a href="#about" className="flex flex-col items-center gap-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                    <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                    <motion.span
                        className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <span className="w-1 h-1 rounded-full bg-current" />
                    </motion.span>
                </a>
            </motion.div>
        </section>
    );
}
