'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'junior.gheban7@gmail.com',
      href: 'mailto:junior.gheban7@gmail.com',
      icon: '📧',
      description: 'Drop me a line anytime'
    },
    {
      label: 'Phone',
      value: '+40 771 554 640',
      href: 'tel:+40771554640',
      icon: '📱',
      description: 'Available for calls'
    },
    {
      label: 'Location',
      value: 'Ștei, Bihor, România',
      href: '',
      icon: '📍',
      description: 'Central Europe timezone'
    },
    {
      label: 'Company',
      value: 'JUNIOR IT TECH HUB SRL',
      href: '',
      icon: '🏢',
      description: 'Leading innovation in IT'
    }
  ];

  const languages = [
    { name: 'Romanian', level: 'Native', progress: 100 },
    { name: 'German', level: 'Advanced', progress: 90 },
    { name: 'English', level: 'Advanced', progress: 85 },
    { name: 'Spanish', level: 'Medium', progress: 60 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
      {/* Static background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on{' '}
              <span className="text-purple-400 font-semibold">innovative projects</span>? 
              Let's discuss how we can work together to create{' '}
              <span className="text-blue-400 font-semibold">extraordinary digital experiences</span>{' '}
              and cutting-edge technological solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800"
            >
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4 p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl">
                  ✉️
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-300 mb-3 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-300 mb-3 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-neutral-300 mb-3 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-neutral-300 mb-3 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3 animate-spin" />
                      Sending...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">✅</span>
                      Message Sent!
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📞</span>
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
                      <span className="text-2xl">{info.icon}</span>
                      <div className="flex-1">
                        <p className="text-neutral-400 text-sm uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-white hover:text-purple-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                        <p className="text-neutral-500 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🌍</span>
                Languages
              </h3>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="text-neutral-400 text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.progress}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">⏰</span>
                Availability
              </h3>
              <div className="space-y-3">
                {[
                  { status: 'Remote work', available: true },
                  { status: 'On-site projects', available: true },
                  { status: 'Available for relocation', available: true },
                  { status: 'Full-time employment', available: true }
                ].map((item, index) => (
                  <div key={item.status} className="flex items-center text-neutral-300">
                    <span className={`w-3 h-3 rounded-full mr-3 ${
                      item.available ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                    {item.status}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
