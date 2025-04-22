import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/IsuruX98',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/isuru-madusanka-1b9210218/',
        icon: FaLinkedin,
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/share/16R2mtXEuH/?mibextid=wwXIfr',
        icon: FaFacebook,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/izu._x?igsh=MW1lbnIyanF2cjE5eQ%3D%3D&utm_source=qr',
        icon: FaInstagram,
    },
];

const contactInfo = [
    {
        icon: EnvelopeIcon,
        text: 'isurumadusanka98@gmail.com',
        href: 'mailto:isurumadusanka98@gmail.com',
    },
    {
        icon: PhoneIcon,
        text: '+94 77 123 4567',
        href: 'tel:+94771234567',
    },
    {
        icon: MapPinIcon,
        text: 'Colombo, Sri Lanka',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setSubmitStatus({
                type: 'success',
                message: 'Message sent successfully! I will get back to you soon.'
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-0.5 bg-blue-500/50 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4 sm:space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        target={info.href ? '_blank' : undefined}
                                        rel={info.href ? 'noopener noreferrer' : undefined}
                                        className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                                            <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                                        </div>
                                        <span className="ml-3 sm:ml-4 text-sm sm:text-base">{info.text}</span>
                                    </motion.a>
                                ))}
                            </div>
                            <div className="mt-6 sm:mt-8">
                                <h4 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
                                    Connect with me
                                </h4>
                                <div className="flex space-x-3 sm:space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-white transition-all duration-300"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <div className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                                                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="relative">
                            <div className="relative bg-white/5 p-4 sm:p-6 rounded-lg border border-white/10">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    {submitStatus.type && (
                                        <div className={`p-3 rounded-lg ${submitStatus.type === 'success'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg ${isSubmitting
                                            ? 'bg-blue-400 cursor-not-allowed'
                                            : 'bg-blue-500 hover:bg-blue-600'
                                            } text-white font-medium transition-all duration-300 text-sm sm:text-base`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 