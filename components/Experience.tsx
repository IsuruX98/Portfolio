'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tecsota LLC, USA',
    period: 'Jul 2025 – Present',
    logo: '/logos/tecsotaLogo.webp',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'React Native', 'Expo', 'Tailwind CSS', 'CI/CD', 'Vercel'],
    description: [
      'Drive production updates and develop new modules for LMP, a Jobber-integrated platform built with Next.js, Node.js, and MongoDB, including its React Native scheduling app.',
      'Build and maintain HomeKuk, a mobile application using React Native and Expo.',
      'Lead development of LineHaul, a full-stack Next.js application for truck-driver management, handling dispatching, route tracking, and admin workflows.',
      'Manage end-to-end production environments across all company products: deployments on Vercel, database migrations, CI/CD pipelines, version control, and release management.',
      'Design application architecture, write technical documentation, and ensure scalable, maintainable codebases.',
      'Collaborate closely with cross-functional teams to plan features, implement best practices, and deliver reliable, high-performance solutions.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Tecsota LLC, USA',
    period: 'Jul 2024 – Jul 2025',
    logo: '/logos/tecsotaLogo.webp',
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'GraphQL', 'Tailwind CSS', 'Material-UI', 'React-Bootstrap', 'Notion', 'Jobber API', 'Google Route Optimization'],
    description: [
      'Developed and maintained core applications, including:',
      'LMP (Loch Monster Plumbing) – Actively expanding, maintaining, and adding new features to this Jobber-integrated platform using Next.js, Node.js, MongoDB, GraphQL, Jobber API, and Tailwind CSS.',
      'LWL (Life Without Laundry) – Responsible for ongoing maintenance and updates using React, Node.js, MongoDB, Material-UI, and Google Route Optimization.',
      'TINT – Rebuilt and enhanced this startup collaboration marketplace by migrating from Material-UI to React-Bootstrap, with new feature development and continued support using React, Node.js, and MongoDB.',
      'cv2resume – Created a Next.js app to convert CVs into US-ready resumes.',
      'Contributed to code reviews, QA testing, architecture design, and streamlined workflows using Notion to support efficient project delivery.',
    ],
  },
  {
    title: 'Intern Software Engineer',
    company: 'CreativeHub Global',
    period: 'Jan 2024 – Jul 2024',
    logo: '/logos/creativeHubLogo.webp',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Strapi', 'MongoDB', 'MySQL'],
    description: [
      'Worked on major projects such as Datapal, Toastmasters, Saneck-Safety, and Serendib Hotels, contributing to both frontend and backend development.',
      'Built responsive UIs using React, Next.js, and Tailwind CSS, ensuring seamless user experiences.',
      'Developed and integrated APIs with Node.js, Strapi, and MongoDB/MySQL, enabling robust data flow and performance.',
      'Collaborated in agile teams, participated in daily stand-ups, sprint planning, and code reviews, delivering features on time and up to industry standards.',
    ],
  },
];

const education = [
  {
    degree: 'BSc. Special (Hons) in Information Technology',
    institution: 'Sri Lanka Institute of Information Technology',
    detail: 'Specialization in Software Engineering',
    gpa: '3.3 CGPA (Second Class)',
    period: 'Jun 2021 - Jul 2025',
    logo: '/logos/sliitLogo.webp',
  },
  {
    degree: 'Pearson Diploma in Information Technology',
    institution: 'ESOFT Metro Campus, Galle',
    period: 'Sep 2017 - Sep 2018',
    logo: '/logos/esoftLogo.webp',
  },
  {
    degree: 'Pearson Diploma in English',
    institution: 'ESOFT Metro Campus, Galle',
    period: 'Sep 2017 - Sep 2018',
    logo: '/logos/esoftLogo.webp',
  },
  {
    degree: 'G.C.E. Advanced Level – Commerce Stream',
    institution: 'Mahinda College, Galle',
    detail: 'Index No: 5854890',
    period: 'Aug 2017',
    logo: '/logos/schoolLogo.webp',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-[var(--section-padding)] bg-[var(--card)]/50">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="text-center mb-14 md:mb-20">
            <h2 className="section-heading">Experience & Education</h2>
            <span className="section-heading-accent" />
          </div>

          {/* Work Experience */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <BriefcaseIcon className="h-5 w-5 text-blue-400" />
              </span>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Work Experience</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {experiences.map((exp, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="card-surface p-4 flex flex-col gap-3 h-full"
                >
                  <div className="flex gap-3 shrink-0">
                    <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center border border-[var(--card-border)]">
                      <Image src={exp.logo} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[var(--foreground)] text-sm leading-tight">{exp.title}</h4>
                      <p className="text-xs text-[var(--accent)] mt-0.5">{exp.company}</p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--accent-muted)] text-[var(--accent)] border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1.5 text-[var(--muted-foreground)] leading-snug text-xs flex-1 min-h-0">
                    {exp.description.map((item, i) => {
                      const isIntro = item.endsWith(':');
                      return (
                        <li key={i} className="flex gap-2">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                          <span className={isIntro ? 'font-semibold text-[var(--foreground)]' : ''}>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <AcademicCapIcon className="h-5 w-5 text-violet-400" />
              </span>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Education</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {education.map((edu, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="card-surface p-4 flex gap-4 h-full"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center border border-[var(--card-border)]">
                    <Image src={edu.logo} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-[var(--foreground)] leading-tight">
                      {edu.degree}
                      {edu.gpa && <span className="font-normal text-[var(--muted-foreground)]"> · {edu.gpa}</span>}
                    </h4>
                    <p className="text-xs text-violet-400 mt-1">{edu.institution}</p>
                    {edu.detail && (
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{edu.detail}</p>
                    )}
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">{edu.period}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
