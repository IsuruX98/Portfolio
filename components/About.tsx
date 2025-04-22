import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, ServerIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const skills = [
    {
        category: 'Frontend',
        icon: CodeBracketIcon,
        items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML/CSS'],
        color: 'from-blue-500 to-blue-600',
    },
    {
        category: 'Backend',
        icon: ServerIcon,
        items: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'REST APIs', 'PostgreSQL'],
        color: 'from-purple-500 to-purple-600',
    },
    {
        category: 'Mobile',
        icon: DevicePhoneMobileIcon,
        items: ['React Native', 'Flutter', 'Android Development'],
        color: 'from-green-500 to-green-600',
    },
    {
        category: 'Tools',
        icon: CommandLineIcon,
        items: ['Git', 'Docker', 'AWS', 'Vercel', 'VS Code', 'Postman'],
        color: 'from-orange-500 to-orange-600',
    },
];

export default function About() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            About Me
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-white/5 backdrop-blur-lg p-6 sm:p-8 rounded-lg border border-white/10">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden sm:mr-6 ring-2 ring-blue-500/50 mb-4 sm:mb-0">
                                        <Image
                                            src="/images/img.JPEG"
                                            alt="Profile"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">Isuru Madusanka</h3>
                                        <p className="text-blue-400">Full Stack Developer</p>
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                    I&apos;m a passionate Software Engineer with a strong foundation in full-stack development.
                                    Currently working as an Associate Software Engineer at Tecsota, I specialize in building
                                    modern web applications using cutting-edge technologies.
                                </p>
                                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                                    My journey in software development has been driven by a constant desire to learn and
                                    create impactful solutions. I enjoy collaborating in agile teams and solving complex
                                    problems with elegant code.
                                </p>
                                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                                    projects, or mentoring aspiring developers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">
                                My Tech Stack
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.category}
                                        whileHover={{ scale: 1.02 }}
                                        className="relative group h-full"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 transition duration-300"></div>
                                        <div className="relative bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-lg border border-white/10 h-full">
                                            <div className="flex items-center mb-3 sm:mb-4">
                                                {skill.category === 'Frontend' && (
                                                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-400" />
                                                )}
                                                {skill.category === 'Backend' && (
                                                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-purple-400" />
                                                )}
                                                {skill.category === 'Mobile' && (
                                                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-green-400" />
                                                )}
                                                {skill.category === 'Tools' && (
                                                    <skill.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-orange-400" />
                                                )}
                                                <h4 className="text-base sm:text-lg font-semibold text-white">{skill.category}</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
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