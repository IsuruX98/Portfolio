'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const skills = [
  {
    category: 'Frontend',
    icon: CodeBracketIcon,
    items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    category: 'Backend',
    icon: ServerIcon,
    items: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'REST APIs', 'PostgreSQL'],
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    category: 'Mobile',
    icon: DevicePhoneMobileIcon,
    items: ['React Native', 'Flutter', 'Android Development'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    category: 'Tools',
    icon: CommandLineIcon,
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Postman'],
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

export default function About() {
  return (
    <section id="about" className="py-[var(--section-padding)]">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="text-center mb-14 md:mb-20">
            <h2 className="section-heading">About Me</h2>
            <span className="section-heading-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Bio card */}
            <div className="order-2 lg:order-1">
              <div className="card-surface p-6 sm:p-8 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 ring-2 ring-[var(--accent)]/30">
                    <Image
                      src="/images/img.JPG"
                      alt="Isuru Madusanka"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 96px, 112px"
                      priority
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">Isuru Madusanka</h3>
                    <p className="text-[var(--accent)] font-medium mt-1">Full Stack Developer</p>
                  </div>
                </div>
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  <p>
                    I&apos;m a Software Engineer with a strong foundation in full-stack development, currently at Tecsota. I specialize in building modern web and mobile applications with React, Next.js, Node.js, and React Native.
                  </p>
                  <p>
                    My work is driven by a focus on clean architecture, maintainable code, and collaboration in agile teams. I enjoy solving complex problems and shipping features that users rely on.
                  </p>
                  <p>
                    Outside of work I explore new technologies, contribute to open source, and help other developers grow.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="order-1 lg:order-2">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Tech stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="card-surface p-5 rounded-xl border transition-shadow hover:shadow-lg hover:shadow-[var(--accent)]/5"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`p-2 rounded-lg border ${skill.bg}`}>
                        <skill.icon className={`h-5 w-5 ${skill.color}`} />
                      </span>
                      <h4 className="font-semibold text-[var(--foreground)]">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 text-xs font-medium rounded-lg bg-white/5 text-[var(--muted-foreground)] border border-[var(--card-border)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
