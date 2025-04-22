import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/bgimage.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-6 sm:mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                            Isuru Madusanka
                        </h1>
                    </motion.div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 font-medium">
                        Software Engineer | Associate Software Engineer at Tecsota
                    </h2>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
                        A passionate Software Engineering undergraduate and Associate Software Engineer with experience in full-stack development, especially in React, Next.js, Tailwind CSS, Node.js, MongoDB, and GraphQL.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                        <motion.a
                            href="/pdf/IsuruMadusankaCV.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            <FiDownload className="h-5 w-5 mr-2" />
                            Download Resume
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center px-4 sm:px-6 py-3 border border-white/20 text-sm sm:text-base font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 