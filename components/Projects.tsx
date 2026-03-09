'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';

const PROJECT_PLACEHOLDER = '/images/projects/placeholder.svg';

/** Encodes path for use in Image src (handles spaces in filenames) */
function imageSrc(path: string) {
    return path.replace(/ /g, '%20');
}

type ProjectItem = {
    title: string;
    description: string;
    technologies: string[];
    images: string[];
    liveUrl: string;
    githubUrl: string;
};

function GalleryModal({
    title,
    images,
    onClose,
}: {
    title: string;
    images: string[];
    onClose: () => void;
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const safeImages = images?.length ? images : [PROJECT_PLACEHOLDER];

    const goPrev = () => setCurrentIndex((i) => (i === 0 ? safeImages.length - 1 : i - 1));
    const goNext = () => setCurrentIndex((i) => (i === safeImages.length - 1 ? 0 : i + 1));

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-zinc-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
                        <h3 className="text-lg font-semibold text-white truncate pr-2">{title}</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Close gallery"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="relative flex-1 min-h-0 flex flex-col items-center justify-center p-4">
                        <div className="relative w-full aspect-video max-h-[60vh] rounded-lg overflow-hidden bg-black/50">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={imageSrc(safeImages[currentIndex])}
                                        alt={`${title} - ${currentIndex + 1}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 896px) 100vw, 896px"
                                        unoptimized={safeImages[currentIndex].endsWith('.svg')}
                                    />
                                </motion.div>
                            </AnimatePresence>
                            {safeImages.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeftIcon className="w-6 h-6" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={goNext}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
                                        aria-label="Next image"
                                    >
                                        <ChevronRightIcon className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>
                        {safeImages.length > 1 && (
                            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 justify-center max-w-full">
                                {safeImages.map((src, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => setCurrentIndex(i)}
                                        className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                            i === currentIndex ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-transparent opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <Image
                                            src={imageSrc(src)}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="56px"
                                            unoptimized={src.endsWith('.svg')}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                        {safeImages.length > 1 && (
                            <p className="text-xs text-gray-500 mt-1">
                                {currentIndex + 1} / {safeImages.length}
                            </p>
                        )}
                    </div>
                </motion.div>
        </motion.div>
    );
}

const industryProjects = [
    {
        title: 'LMP (Loch Monster Plumbing)',
        description: 'Actively expanding, maintaining, and adding new features to this Jobber-integrated platform. Full-stack web application for plumbing business management, scheduling, and customer workflows.',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'GraphQL', 'Jobber API', 'Tailwind CSS'],
        images: Array.from({ length: 16 }, (_, i) => `/images/projects/lmp/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'LMP Mobile (Loch Monster Plumbing)',
        description: 'React Native Expo mobile application for the Loch Monster Plumbing platform, enabling field and on-the-go access to the Jobber-integrated system.',
        technologies: ['React Native', 'Expo', 'JavaScript'],
        images: Array.from({ length: 28 }, (_, i) => `/images/projects/lmp-app/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Serendib Hotels',
        description: 'Industry project for Serendib Hotels – full-stack solution for hotel management, bookings, and guest experience.',
        technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        images: Array.from({ length: 8 }, (_, i) => `/images/projects/serendib/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Saneck-Safety',
        description: 'Industry project for Saneck-Safety – safety management and monitoring system built for real-world deployment.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        images: Array.from({ length: 9 }, (_, i) => `/images/projects/saneck/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
];

const otherProjects = [
    {
        title: 'IEMS',
        description: 'Intelligent campus monitoring system for research project using React, Spring Boot, Flask, and Python for eco-urban data insights.',
        technologies: ['React', 'Spring Boot', 'Flask', 'Python'],
        images: Array.from({ length: 3 }, (_, i) => `/images/projects/iems/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'EyeZen',
        description: 'An Eye Care Management Application.',
        technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
        images: [
            ...Array.from({ length: 3 }, (_, i) => `/images/projects/eyezen-web/${i + 1}.webp`),
            ...Array.from({ length: 6 }, (_, i) => `/images/projects/eyezen-mobile/${i + 1}.webp`),
        ],
        liveUrl: '',
        githubUrl: 'https://github.com/IsuruX98/EyeZen-FE',
    },
    {
        title: 'AstroNexus',
        description: 'An astronomy app for tracking celestial events and learning about space.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        images: Array.from({ length: 4 }, (_, i) => `/images/projects/astronexus/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: 'https://github.com/IsuruX98/AstroNexus',
    },
    {
        title: 'SkillSprint',
        description: 'A learning management system for skill development and certification.',
        technologies: ['React', 'Spring Boot', 'MongoDB', 'Tailwind CSS'],
        images: ['/images/projects/skillsprint/1.webp'],
        liveUrl: '',
        githubUrl: 'https://github.com/IsuruX98/SkillSprint-Frontend',
    },
    {
        title: 'AversonSales-FE',
        description: 'React.js web application that integrates with the Averson Sales backend API to display blog posts. Responsive design with Tailwind CSS.',
        technologies: ['React', 'Tailwind CSS', 'REST API'],
        images: ['/images/projects/averson/1.webp'],
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Kandy Cookery',
        description: 'Responsive restaurant website developed with React and Tailwind CSS for an engaging customer experience. Interactive and user-friendly frontend for restaurant visitors.',
        technologies: ['React', 'Tailwind CSS'],
        images: Array.from({ length: 6 }, (_, i) => `/images/projects/kandy-cookery-fe/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Star Wars Movie Details App',
        description: 'Built with Next.js, Tailwind CSS, and Strapi – delivers detailed information on Star Wars movies via a clean, responsive interface.',
        technologies: ['Next.js', 'Tailwind CSS', 'Strapi'],
        images: Array.from({ length: 4 }, (_, i) => `/images/projects/strapi-nextjs-movie-app/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Currency Converter & Transfer Management',
        description: 'User-friendly currency converter and transfer management system. Convert amounts between currencies, create transfer records, and manage history. Authentication required for transfers and transaction history.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        images: ['/images/projects/currency/1.webp'],
        liveUrl: '',
        githubUrl: '',
    },
    {
        title: 'Travely',
        description: 'A travel planning and booking platform.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        images: Array.from({ length: 2 }, (_, i) => `/images/projects/travely/${i + 1}.webp`),
        liveUrl: '',
        githubUrl: 'https://github.com/IsuruX98/Travely',
    },
];

function ProjectCard({
    project,
    index,
    onOpenGallery,
    isPrivate,
}: {
    project: ProjectItem;
    index: number;
    onOpenGallery?: (project: ProjectItem) => void;
    isPrivate?: boolean;
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images?.length ? project.images : [PROJECT_PLACEHOLDER];
    const hasMultipleImages = images.length > 1;
    const hasLiveUrl = project.liveUrl && project.liveUrl.trim() !== '';
    const hasGithubUrl = project.githubUrl && project.githubUrl.trim() !== '';
    const hasGallery = images.length >= 1 && onOpenGallery;

    const goPrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    };
    const goNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    const openGallery = (e: React.MouseEvent) => {
        e.preventDefault();
        if (hasGallery) onOpenGallery?.(project);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
        >
            <div className="relative bg-white/5 rounded-xl border border-white/10 overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col">
                <div
                    className={`relative h-48 sm:h-56 overflow-hidden bg-white/5 ${hasGallery ? 'cursor-pointer' : ''}`}
                    onClick={openGallery}
                    onKeyDown={(e) => hasGallery && (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpenGallery?.(project))}
                    role={hasGallery ? 'button' : undefined}
                    tabIndex={hasGallery ? 0 : undefined}
                    aria-label={hasGallery ? `View image gallery for ${project.title}` : undefined}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={imageSrc(images[currentImageIndex])}
                                alt={`${project.title} - screenshot ${currentImageIndex + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized={images[currentImageIndex].endsWith('.svg')}
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {hasGallery && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/60 text-white text-sm font-medium">
                                <PhotoIcon className="w-5 h-5" />
                                View gallery {images.length > 1 ? `(${images.length} images)` : ''}
                            </span>
                        </div>
                    )}
                    {hasMultipleImages && (
                        <>
                            <button
                                type="button"
                                onClick={goPrev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                                aria-label="Previous image"
                            >
                                <ChevronLeftIcon className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={goNext}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                                aria-label="Next image"
                            >
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                                {images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {hasLiveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition-colors text-sm"
                            >
                                <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                                Live Demo
                            </motion.a>
                        )}
                        {hasGithubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors text-sm"
                            >
                                <CodeBracketIcon className="h-4 w-4 mr-2" />
                                GitHub
                            </motion.a>
                        )}
                        {!hasLiveUrl && !hasGithubUrl && (
                            <span className="text-xs text-gray-500">
                                {isPrivate ? 'Private project — links not available' : 'Links can be added when available'}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [galleryProject, setGalleryProject] = useState<{ title: string; images: string[] } | null>(null);

    const openGallery = (project: ProjectItem) => {
        const images = project.images?.length ? project.images : [PROJECT_PLACEHOLDER];
        setGalleryProject({ title: project.title, images });
    };

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-zinc-900/50">
            <AnimatePresence>
                {galleryProject && (
                    <GalleryModal
                        key="gallery"
                        title={galleryProject.title}
                        images={galleryProject.images}
                        onClose={() => setGalleryProject(null)}
                    />
                )}
            </AnimatePresence>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Projects</h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full" />
                    </div>

                    {/* Industry / Main projects */}
                    <div className="mb-14">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                            <span className="w-1 h-6 bg-blue-500 rounded-full" />
                            Industry & Main Projects
                        </h3>
                        <p className="text-gray-400 text-sm mb-2 max-w-2xl">
                            Production and client projects I have built or maintained.
                        </p>
                        <p className="text-gray-500 text-xs mb-6 max-w-2xl italic">
                            Live demo and source code links are not shared for these projects as they are industry/client work and must remain private.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {industryProjects.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} onOpenGallery={openGallery} isPrivate />
                            ))}
                        </div>
                    </div>

                    {/* Other projects */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 flex items-center gap-2">
                            <span className="w-1 h-6 bg-blue-500 rounded-full" />
                            Other Projects
                        </h3>
                        <p className="text-gray-400 text-sm mb-6 max-w-2xl">
                            Academic, personal, and side projects.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {otherProjects.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} onOpenGallery={openGallery} />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <motion.a
                            href="https://github.com/IsuruX98?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors text-sm"
                        >
                            <CodeBracketIcon className="h-5 w-5 mr-2" />
                            View All Repositories on GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
