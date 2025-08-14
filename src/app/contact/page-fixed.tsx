'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactBackground from '../../components/contact-background';

export default function ContactPage() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'ghebanionutjohnjunior@gmail.com',
      href: 'mailto:ghebanionutjohnjunior@gmail.com',
      icon: '📧',
      description: 'Drop me a line anytime',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      label: 'Phone',
      value: '+40 771 554 640',
      href: 'tel:+40771554640',
      icon: '📱',
      description: 'Available for calls',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      label: 'Location',
      value: 'Ștei, Bihor, România',
      href: 'https://maps.google.com/?q=Ștei,+Bihor,+România',
      icon: '📍',
      description: 'Central Europe timezone',
      gradient: 'from-purple-500 to-violet-400'
    },
    {
      label: 'Company',
      value: 'JUNIOR IT TECH HUB SRL',
      href: '',
      icon: '🏢',
      description: 'Leading innovation in IT',
      gradient: 'from-orange-500 to-red-400'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ionut-john-junior-gheban-942bb5179/',
      icon: '💼',
      color: 'from-blue-600 to-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/john68ss',
      icon: '💻',
      color: 'from-gray-700 to-gray-600'
    },
    {
      name: 'Portfolio',
      url: '/',
      icon: '🌐',
      color: 'from-violet-600 to-purple-500'
    }
  ];

  const languages = [
    { name: 'Romanian', level: 'Native', flag: 'RO' },
    { name: 'English', level: 'Advanced', flag: 'EN' },
    { name: 'German', level: 'Advanced', flag: 'DE' }
  ];

  const availability = [
    { status: 'Remote work', available: true },
    { status: 'On-site projects', available: true },
    { status: 'Available for relocation', available: true },
    { status: 'Full-time employment', available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      <ContactBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent tracking-tight">
              Let&apos;s Connect
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to collaborate on{' '}
              <span className="text-violet-400 font-semibold">innovative projects</span>? 
              Let&apos;s discuss how we can work together to create{' '}
              <span className="text-purple-400 font-semibold">extraordinary digital experiences</span>{' '}
              and cutting-edge technological solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block p-8 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-500 hover:bg-gray-800/40 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-violet-500/10"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.gradient} text-white text-2xl shadow-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                          {info.label}
                        </h3>
                        <p className="text-lg text-gray-300 mb-2 group-hover:text-white transition-colors">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="p-8 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-500 hover:bg-gray-800/40 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-violet-500/10">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.gradient} text-white text-2xl shadow-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                          {info.label}
                        </h3>
                        <p className="text-lg text-gray-300 mb-2 group-hover:text-white transition-colors">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Connect on Social Media
            </h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`group relative overflow-hidden p-6 bg-gradient-to-r ${social.color} rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{social.icon}</div>
                    <p className="text-white font-semibold text-sm">{social.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Additional Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-8 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🌍</span>
                Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-bold text-violet-400 bg-violet-500/20 px-2 py-1 rounded">{lang.flag}</span>
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                    </div>
                    <span className="text-violet-400 font-semibold text-sm">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="p-8 bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl hover:border-violet-500/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">⚡</span>
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((item) => (
                  <div key={item.status} className="flex items-center text-gray-300 p-3 bg-gray-800/30 rounded-lg">
                    <span className={`w-3 h-3 rounded-full mr-4 shadow-sm ${
                      item.available ? 'bg-gradient-to-r from-emerald-400 to-green-400 shadow-emerald-400/50' : 'bg-gradient-to-r from-red-400 to-rose-400 shadow-red-400/50'
                    }`} />
                    <span className="font-medium">{item.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 p-10 bg-gradient-to-r from-violet-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-md border border-violet-500/30 rounded-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              As CEO of JUNIOR IT TECH HUB SRL and an experienced full-stack developer, I&apos;m passionate about 
              building innovative AI-powered solutions and scalable web applications. Let&apos;s turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Next.js', 'TypeScript', 'AI/ML', 'Project Management', 'Team Leadership', 'Innovation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-violet-500/20 text-violet-300 text-sm rounded-full border border-violet-500/30 hover:bg-violet-500/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
