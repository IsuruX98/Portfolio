import { motion } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const experiences = [
    {
        title: 'Associate Software Engineer',
        company: 'Tecsota',
        period: '2023 - Present',
        description: [
            'Developing and maintaining full-stack web applications using React, Next.js, and Node.js',
            'Implementing responsive UI components with Tailwind CSS',
            'Collaborating with cross-functional teams in an agile environment',
            'Key projects: LMP (Jobber-integrated), LWL, TINT, cv2resume',
        ],
    },
    {
        title: 'Intern Software Engineer',
        company: 'CreativeHub',
        period: '2022 - 2023',
        description: [
            'Worked on frontend development using React and TypeScript',
            'Participated in code reviews and team meetings',
            'Contributed to the development of internal tools and applications',
        ],
    },
];

const education = [
    {
        degree: 'BSc (Hons) in Software Engineering',
        institution: 'SLIIT',
        period: '2020 - Present',
    },
    {
        degree: 'Diploma in IT & English',
        institution: 'ESOFT',
        period: '2018 - 2020',
    },
    {
        degree: 'GCE Advanced Level',
        institution: 'Mahinda College',
        period: '2015 - 2018',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Experience & Education
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        {/* Experience */}
                        <div>
                            <div className="flex items-center mb-6 sm:mb-8">
                                <BriefcaseIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-3 sm:mr-4" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Work Experience</h3>
                            </div>
                            <div className="space-y-6 sm:space-y-8">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div className="relative bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                                <div>
                                                    <h4 className="text-lg sm:text-xl font-semibold text-white">{exp.title}</h4>
                                                    <p className="text-blue-400">{exp.company}</p>
                                                </div>
                                                <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">{exp.period}</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                                                        <span className="text-sm sm:text-base text-gray-300">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center mb-6 sm:mb-8">
                                <AcademicCapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mr-3 sm:mr-4" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">Education</h3>
                            </div>
                            <div className="space-y-6 sm:space-y-8">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div className="relative bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                                <div>
                                                    <h4 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h4>
                                                    <p className="text-purple-400">{edu.institution}</p>
                                                </div>
                                                <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-0">{edu.period}</span>
                                            </div>
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