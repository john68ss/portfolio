'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/scene-3d';
import HomeBackground from '../components/home-background';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Sophisticated darker background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/25 via-purple-950/15 to-indigo-950/25" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-indigo-950/20" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-950/15 via-transparent to-violet-950/15" />
      </div>

      {/* Enhanced geometric background */}
      <HomeBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-start justify-center px-6 pt-12 pb-20">
          <div className="text-center max-w-6xl mx-auto mt-8">
            {/* Enhanced floating 3D scene */}
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl" />
              <Scene3D />
            </div>

            {/* Premium Enhanced Glass Morphism Card */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              {/* Compact glow effects */}
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/20 via-purple-600/25 to-indigo-600/20 rounded-[36px] opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-700 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/20 via-purple-500/25 to-indigo-500/20 rounded-[32px] opacity-50 group-hover:opacity-70 blur-xl transition-all duration-500" />
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-400/15 via-purple-400/20 to-indigo-400/15 rounded-[28px] opacity-30 group-hover:opacity-50 blur-lg transition-all duration-300" />
              
              {/* Premium main glass card */}
              <div className="relative bg-gradient-to-br from-gray-900/95 via-slate-800/90 to-gray-900/95 backdrop-blur-3xl rounded-[32px] border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.6)] overflow-hidden group-hover:border-white/30 transition-all duration-500">
                {/* Animated premium border gradient */}
                <div className="absolute inset-0 rounded-[32px] p-[2px] bg-gradient-to-r from-violet-500/60 via-purple-500/60 to-indigo-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="bg-gradient-to-br from-gray-900/98 via-slate-800/95 to-gray-900/98 rounded-[30px] h-full w-full" />
                </div>
                
                {/* Subtle background patterns */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-violet-500/30 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-500/30 to-transparent rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Premium mesh pattern overlay */}
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
                
                {/* Optimized content container */}
                <div className="relative z-20 p-6 md:p-8 lg:p-12 text-center">
                  {/* Compact status indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-emerald-500/30 via-cyan-500/25 to-teal-500/30 backdrop-blur-2xl rounded-full border border-emerald-400/50 shadow-xl hover:shadow-emerald-500/40 transition-all duration-500 group-hover:scale-105"
                  >
                    <div className="relative flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/60" />
                      <div className="absolute w-2 h-2 bg-emerald-300 rounded-full mr-3 animate-ping opacity-75" />
                    </div>
                    <span className="text-emerald-300 font-medium text-sm tracking-wide">Available for Elite Projects</span>
                  </motion.div>

                  {/* Optimized hero text */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    {/* Appropriately sized name */}
                    <div className="relative">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-white via-violet-100 to-indigo-100 bg-clip-text text-transparent filter drop-shadow-2xl hover:from-violet-200 hover:via-purple-200 hover:to-indigo-200 transition-all duration-700 relative z-10">
                          Ionut John Junior
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent filter drop-shadow-xl hover:from-violet-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-700">
                          Gheban
                        </span>
                      </h1>
                      {/* Subtle text glow effect */}
                      <div className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight opacity-15 blur-sm bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent -z-10 scale-105" />
                    </div>

                    {/* Compact role section */}
                    <div className="space-y-6">
                      {/* Compact role badges */}
                      <motion.div 
                        className="flex flex-wrap items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                      >
                        {[
                          { text: 'CEO & Founder', gradient: 'from-violet-600/50 to-purple-600/50', border: 'violet-400/60', glow: 'violet', icon: '👑' },
                          { text: 'Full-Stack Developer', gradient: 'from-indigo-600/50 to-blue-600/50', border: 'indigo-400/60', glow: 'indigo', icon: '⚡' },
                          { text: 'AI Specialist', gradient: 'from-purple-600/50 to-pink-600/50', border: 'purple-400/60', glow: 'purple', icon: '🤖' }
                        ].map((role, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1.6 + index * 0.15 }}
                            className={`group/badge relative px-4 py-2 bg-gradient-to-r ${role.gradient} backdrop-blur-2xl border border-${role.border} rounded-xl text-white font-medium text-sm tracking-wide shadow-xl hover:shadow-${role.glow}-500/40 transition-all duration-500 cursor-default overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center">
                              <span className="mr-2 text-sm">{role.icon}</span>
                              {role.text}
                            </span>
                            <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-xl opacity-0 group-hover/badge:opacity-50 transition-opacity duration-500 blur-lg -z-10`} />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      {/* Compact description */}
                      <motion.p 
                        className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.8 }}
                      >
                        Building the future with <span className="text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-semibold">AI-powered solutions</span>, 
                        cutting-edge web technologies, and innovative business strategies. 
                        <span className="text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text font-semibold"> Transforming visionary ideas into profitable ventures.</span>
                      </motion.p>
                    </div>

                    {/* Compact CTA buttons */}
                    <motion.div 
                      className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      <motion.a
                        href="/portfolio"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-violet-500/50 transition-all duration-500 overflow-hidden text-base"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                        <span className="relative z-10 flex items-center">
                          <span className="mr-2 text-lg">🚀</span>
                          View My Work
                          <svg className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </motion.a>
                      
                      <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-3 bg-white/8 backdrop-blur-2xl border border-white/30 rounded-xl text-gray-200 font-semibold hover:bg-white/15 hover:border-white/50 hover:text-white transition-all duration-500 text-base overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/15 via-purple-500/15 to-indigo-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                        <span className="relative z-10 flex items-center">
                          <span className="mr-2 text-lg">💬</span>
                          Get In Touch
                          <svg className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8 drop-shadow-xl">
                Expertise & Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Combining cutting-edge technology with strategic business thinking to deliver exceptional results
              </p>
            </motion.div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'AI-Powered Solutions', 
                  desc: 'Advanced trading bots and machine learning systems that adapt and optimize performance in real-time.',
                  icon: '🤖',
                  gradient: 'from-violet-600 to-purple-600',
                  bgGradient: 'from-violet-950/30 to-purple-950/30',
                  borderGradient: 'from-violet-500/30 to-purple-500/30'
                },
                { 
                  title: 'Full-Stack Development', 
                  desc: 'Modern web applications using React, Next.js, TypeScript, Python, and cutting-edge cloud technologies.',
                  icon: '⚡',
                  gradient: 'from-indigo-600 to-cyan-600',
                  bgGradient: 'from-indigo-950/30 to-cyan-950/30',
                  borderGradient: 'from-indigo-500/30 to-cyan-500/30'
                },
                { 
                  title: 'Business Leadership', 
                  desc: 'Strategic planning, team management, and innovative solutions that drive growth and profitability.',
                  icon: '🚀',
                  gradient: 'from-purple-600 to-pink-600',
                  bgGradient: 'from-purple-950/30 to-pink-950/30',
                  borderGradient: 'from-purple-500/30 to-pink-500/30'
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className={`relative p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${skill.bgGradient} border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full overflow-hidden`}>
                    {/* Enhanced gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-px`} />
                    <div className="relative bg-gray-900/80 rounded-2xl p-8 h-full backdrop-blur-sm">
                      {/* Icon with enhanced glow */}
                      <div className={`text-6xl mb-6 text-center filter drop-shadow-lg`}>
                        <span className={`bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.icon}
                        </span>
                      </div>
                      
                      {/* Enhanced title */}
                      <h3 className={`text-2xl font-bold mb-4 text-center bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                        {skill.title}
                      </h3>
                      
                      {/* Enhanced description */}
                      <p className="text-gray-300 leading-relaxed text-center drop-shadow-md">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section with Animated Numbers */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Stats container with glass effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-slate-900/30 to-gray-900/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-2xl" />
              
              <div className="relative z-10 p-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { label: 'Years Experience', value: '3+', color: 'from-violet-400 to-purple-400' },
                    { label: 'Projects Completed', value: '25+', color: 'from-indigo-400 to-cyan-400' },
                    { label: 'Technologies', value: '20+', color: 'from-emerald-400 to-teal-400' },
                    { label: 'Team Members', value: '8+', color: 'from-pink-400 to-rose-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <motion.div 
                        className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider font-medium group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
