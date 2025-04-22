import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SkillSprint from '../public/images/skillsprint.jpeg';
import EyeZen from '../public/images/eyezens.jpeg';
import AstroNexus from '../public/images/astronexus.jpeg';
import Travely from '../public/images/travely.jpeg';

const projects = [
    {
        title: 'SkillSprint',
        description: 'A learning management system for skill development and certification.',
        technologies: ['React', 'Spring Boot', 'MongoDB', 'Tailwind CSS'],
        image: SkillSprint,
        liveUrl: '#',
        githubUrl: 'https://github.com/IsuruX98/SkillSprint-Frontend',
    },
    {
        title: 'EyeZen',
        description: 'An Eye Care Management Application',
        technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
        image: EyeZen,
        liveUrl: '#',
        githubUrl: 'https://github.com/IsuruX98/EyeZen-FE',
    },
    {
        title: 'AstroNexus',
        description: 'An astronomy app for tracking celestial events and learning about space.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: AstroNexus,
        liveUrl: '#',
        githubUrl: 'https://github.com/IsuruX98/AstroNexus',
    },
    {
        title: 'Travely',
        description: 'A travel planning and booking platform',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: Travely,
        liveUrl: '#',
        githubUrl: 'https://github.com/IsuruX98/Travely',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Featured Projects
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="relative bg-white/5 rounded-lg border border-white/10 overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                                    <div className="relative h-48 sm:h-56">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                            <motion.button
                                                disabled
                                                className="flex items-center justify-center px-4 py-2 rounded-lg bg-gray-500/50 text-gray-400 cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
                                            >
                                                <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                                Live Demo
                                            </motion.button>
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                                            >
                                                <CodeBracketIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                                                Source Code
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <motion.a
                            href="https://github.com/IsuruX98?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                        >
                            <CodeBracketIcon className="h-5 w-5 mr-2" />
                            View All Projects on GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 