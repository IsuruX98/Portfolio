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
            'Lead and contribute to production-grade applications: LMP (Jobber-integrated, Next.js, Node.js, MongoDB), React Native scheduling app',
            'Spearhead full-stack development of LineHaul (logistics for truck drivers): dispatching, route tracking, administrative workflows',
            'Build and maintain HomeKuk mobile app (React Native, Expo)',
            'Manage production environments, CI/CD, Vercel, DB migrations, release management',
            'Design scalable architectures, maintain technical documentation, collaborate with cross-functional teams',
        ],
    },
    {
        title: 'Associate Software Engineer',
        company: 'Tecsota LLC, USA',
        period: 'Jul 2024 – Jul 2025',
        logo: '/logos/tecsotaLogo.webp',
        tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'GraphQL', 'Tailwind CSS', 'Material-UI', 'React-Bootstrap', 'Notion'],
        description: [
            'Developed and maintained core business applications: expanded LMP (Next.js, Node.js, MongoDB, GraphQL, Tailwind), maintained LWL (React, Node, MongoDB, Material-UI, Google Route Optimization)',
            'Rebuilt TINT collaboration marketplace (Material-UI to React-Bootstrap); developed cv2resume (Next.js CV-to-resume)',
            'Contributed to architecture discussions, code reviews, QA testing, team workflows with Notion',
        ],
    },
    {
        title: 'Intern Software Engineer',
        company: 'CreativeHub Global',
        period: 'Jan 2024 – Jul 2024',
        logo: '/logos/creativeHubLogo.webp',
        tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Strapi', 'MongoDB', 'MySQL'],
        description: [
            'Contributed to Datapal, Toastmasters, Saneck-Safety, Serendib Hotels (frontend and backend)',
            'Built responsive interfaces with React, Next.js, Tailwind; APIs with Node.js, Strapi, MongoDB/MySQL',
            'Agile collaboration: stand-ups, sprint planning, code reviews; delivered features to project requirements and best practices',
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
        <section id="experience" className="py-10 sm:py-14 md:py-16 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8 sm:mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            Experience & Education
                        </h2>
                        <div className="w-16 h-0.5 bg-blue-500/50 mx-auto rounded-full" />
                    </div>

                    {/* Work Experience — one row */}
                    <div className="mb-10 sm:mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <BriefcaseIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white">Work Experience</h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                    className="flex"
                                >
                                    <div className="relative bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10 flex flex-col gap-3 w-full min-h-0">
                                        <div className="flex gap-3 shrink-0">
                                            <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                                                <Image src={exp.logo} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-sm sm:text-base font-semibold text-white leading-tight">{exp.title}</h4>
                                                <p className="text-xs text-blue-400 truncate">{exp.company}</p>
                                                <span className="text-xs text-gray-500">{exp.period}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {exp.tech.slice(0, 5).map((t) => (
                                                <span
                                                    key={t}
                                                    className="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                            {exp.tech.length > 5 && (
                                                <span className="text-xs text-gray-500">+{exp.tech.length - 5}</span>
                                            )}
                                        </div>
                                        <ul className="space-y-1 text-xs text-gray-300 flex-1 min-h-0">
                                            {exp.description.slice(0, 3).map((item, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                                                    <span className="line-clamp-2">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education — one row */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <AcademicCapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                            <h3 className="text-lg sm:text-xl font-semibold text-white">Education</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10 flex gap-3 h-full">
                                        <div className="shrink-0 w-9 h-9 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                                            <Image src={edu.logo} alt="" width={36} height={36} className="w-9 h-9 object-contain" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                                                {edu.degree}
                                                {edu.gpa && <span className="font-normal text-gray-400"> · {edu.gpa}</span>}
                                            </h4>
                                            <p className="text-xs text-purple-400 mt-0.5">{edu.institution}</p>
                                            {edu.detail && (
                                                <p className="text-xs text-gray-500 mt-0.5">{edu.detail}</p>
                                            )}
                                            <span className="text-xs text-gray-500 mt-1 block">{edu.period}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 