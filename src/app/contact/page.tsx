'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactBackground from '../../components/contact-background';

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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Enhanced background matching portfolio style */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/25 via-purple-950/15 to-indigo-950/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.06),transparent_80%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,69,219,0.06),transparent_80%)]" />
        
        {/* Darker grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Darker floating orbs */}
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-br from-violet-600/5 to-purple-600/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/6 right-1/6 w-80 h-80 bg-gradient-to-br from-indigo-600/5 to-cyan-600/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '3s' }} />
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-600/8 to-pink-600/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '7s', animationDelay: '1.5s' }} />
      </div>

      {/* Contact-specific animated background */}
      <ContactBackground />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent tracking-tight">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on{' '}
              <span className="text-violet-400 font-semibold">innovative projects</span>? 
              Let's discuss how we can work together to create{' '}
              <span className="text-purple-400 font-semibold">extraordinary digital experiences</span>{' '}
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
              className="bg-gradient-to-br from-slate-900/90 via-indigo-900/30 to-purple-900/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-8">
                <div className="text-4xl mr-4 p-3 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-xl border border-indigo-500/20">
                  ✉️
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 mb-3 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-3 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-3 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-slate-300 mb-3 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-100 focus:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 rounded-xl text-white font-semibold text-lg hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
              className="bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
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
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/30 hover:border-indigo-500/30 transition-all duration-300">
                      <span className="text-2xl">{info.icon}</span>
                      <div className="flex-1">
                        <p className="text-slate-400 text-sm uppercase tracking-wider">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-slate-100 hover:text-indigo-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-100 font-medium">{info.value}</p>
                        )}
                        <p className="text-slate-500 text-sm mt-1">{info.description}</p>
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
              className="bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                <span className="mr-3">🌍</span>
                Languages
              </h3>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-100 font-medium">{lang.name}</span>
                      <span className="text-slate-400 text-sm">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 border border-slate-700/30">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full shadow-lg shadow-indigo-500/25"
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
              className="bg-gradient-to-br from-slate-900/90 via-indigo-900/20 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-400/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
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
                  <div key={item.status} className="flex items-center text-slate-300">
                    <span className={`w-3 h-3 rounded-full mr-3 shadow-sm ${
                      item.available ? 'bg-gradient-to-r from-emerald-400 to-green-400 shadow-emerald-400/50' : 'bg-gradient-to-r from-red-400 to-rose-400 shadow-red-400/50'
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
