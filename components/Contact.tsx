'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/IsuruX98', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/isuru-madusanka-1b9210218/', icon: FaLinkedin },
  { name: 'Facebook', url: 'https://www.facebook.com/share/16R2mtXEuH/?mibextid=wwXIfr', icon: FaFacebook },
  { name: 'Instagram', url: 'https://www.instagram.com/izu._x?igsh=MW1lbnIyanF2cjE5eQ%3D%3D&utm_source=qr', icon: FaInstagram },
];

const contactInfo = [
  { icon: EnvelopeIcon, text: 'isurumadusanka98@gmail.com', href: 'mailto:isurumadusanka98@gmail.com' },
  { icon: PhoneIcon, text: '+94 77 188 6641', href: 'tel:+94771886641' },
  { icon: MapPinIcon, text: 'Colombo, Sri Lanka' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name: formData.name, email: formData.email, message: formData.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[var(--section-padding)] bg-[var(--card)]/50">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="text-center mb-14 md:mb-20">
            <h2 className="section-heading">Get in Touch</h2>
            <span className="section-heading-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Contact info */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Contact information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Wrapper = info.href ? motion.a : motion.div;
                  const wrapperProps = info.href
                    ? { href: info.href, target: '_blank' as const, rel: 'noopener noreferrer' }
                    : {};
                  return (
                    <Wrapper
                      key={index}
                      {...wrapperProps}
                      className="flex items-center gap-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="p-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] group-hover:border-[var(--accent)]/30 transition-colors">
                        <info.icon className="h-5 w-5 text-[var(--accent)]" />
                      </span>
                      <span className="text-sm sm:text-base">{info.text}</span>
                    </Wrapper>
                  );
                })}
              </div>
              <div className="mt-8">
                <h4 className="text-sm font-medium text-[var(--foreground)] mb-3">Connect with me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--accent)]/30 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-surface p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow resize-none"
                    placeholder="Your message"
                  />
                </div>
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl text-sm ${submitStatus.type === 'success'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-red-500/15 text-red-400 border border-red-500/30'
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
