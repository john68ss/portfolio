'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'VoxaSales AI',
      description: 'Comprehensive AI-powered SaaS platform for sales teams with multi-role architecture (Admin/Manager/Agent), real-time call assistance, and integrated CRM management.',
      longDescription: 'VoxaSales AI is a complete sales automation ecosystem featuring role-based access control, integrated softphone functionality, live AI assistance during calls, and comprehensive analytics. The platform serves three distinct user types: Admins for system management, Managers for team oversight, and Agents for direct sales support. Features include real-time transcription, contextual client memory, intelligent response suggestions, post-call analytics, and seamless CRM integration with major platforms.',
      tech: ['GPT-4 Turbo', 'Google Cloud Speech-to-Text', 'React', 'WebSocket', 'Firebase', 'GDPR Compliance'],
      status: 'In Development',
      category: 'AI & SaaS',
      image: '🎯',
      progress: 65,
      metrics: { accuracy: '95%', response_time: '<1s', integrations: '4+' }
    },
    {
      title: 'JUNIOR IT TECH HUB SRL',
      description: 'Founded and leading my own IT company, providing unique experiences and high-quality services in the IT field. Developing innovative solutions based on the latest technologies.',
      longDescription: 'My entrepreneurial journey began with establishing JUNIOR IT TECH HUB SRL, focused on delivering cutting-edge IT solutions. The company specializes in AI development, web applications, and business automation. We serve clients across multiple industries, from startups to enterprise-level organizations.',
      tech: ['Business Leadership', 'Project Management', 'Team Building', 'Strategy', 'Innovation'],
      status: 'Active',
      category: 'Business',
      image: '🏢',
      progress: 100,
      metrics: { employees: '2', projects: '2', clients: '2' }
    },
    {
      title: 'Advanced Portfolio Website',
      description: 'Ultra high-end portfolio showcasing cutting-edge web technologies including 3D graphics, advanced animations, and responsive design.',
      longDescription: 'This portfolio represents the pinnacle of modern web development, featuring Three.js 3D scenes, GLSL shaders, advanced CSS animations, and optimal performance. Built with Next.js 15, TypeScript, and Framer Motion for seamless user experiences.',
      tech: ['Next.js', 'Three.js', 'GLSL', 'Framer Motion', 'TypeScript', 'Tailwind CSS'],
      status: 'Complete',
      category: 'Web Development',
      image: '💎',
      progress: 100,
      metrics: { performance: '98%', accessibility: '100%', seo: '95%' }
    }
  ];

  const experiences = [
    {
      title: 'CEO - Project Manager - Web Developer',
      company: 'JUNIOR IT TECH HUB SRL',
      period: 'February 2025 - Present',
      location: 'Ștei, România',
      description: 'Leading innovative IT solutions development, managing cross-functional teams, and driving business growth through strategic partnerships.',
      achievements: ['Founded successful IT company', 'Developed AI trading systems', 'Built educational platforms', 'Managed 8+ team members']
    },
    {
      title: 'Service Desk IT',
      company: 'NTT DATA SERVICES INTERNATIONAL',
      period: 'November 2024 - Present',
      location: 'Remote, USA',
      description: 'Providing technical support, troubleshooting IT issues, and optimizing system performance for enterprise clients.',
      achievements: ['99.5% issue resolution rate', 'Reduced response time by 40%', 'Implemented automation tools', 'Mentored junior technicians']
    },
    {
      title: 'Stock Trader',
      company: 'FTMO',
      period: 'May 2024 - November 2024',
      location: 'Remote',
      description: 'Professional trading with focus on risk management, technical analysis, and algorithmic trading strategies.',
      achievements: ['Achieved funded trader status', 'Developed trading algorithms', 'Maintained consistent profitability', 'Risk management expertise']
    },
    {
      title: 'Sales Manager',
      company: 'Job-Link Romania S.R.L.',
      period: 'February 2024 - May 2024',
      location: 'Oradea, România',
      description: 'Led high-performing sales teams, developed strategic partnerships, and exceeded revenue targets consistently.',
      achievements: ['Exceeded targets by 125%', 'Built key client relationships', 'Implemented CRM systems', 'Trained sales representatives']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Enhanced background with darker colors */}
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

      {/* Portfolio-specific animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code streams for portfolio theme */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`code-stream-${i}`}
              className="absolute top-0 w-px bg-gradient-to-b from-transparent via-violet-500/15 to-transparent animate-pulse"
              style={{
                left: `${15 + i * 14}%`,
                height: '100%',
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.8}s`
              }}
            >
              <div
                className="w-full bg-gradient-to-b from-violet-400/20 to-transparent animate-bounce"
                style={{
                  height: '100px',
                  animationDuration: `${5 + i}s`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            </div>
          ))}
        </div>

        {/* Portfolio-themed floating code */}
        <div className="absolute top-1/5 left-16 font-mono text-base text-violet-400/40 animate-pulse" style={{ animationDuration: '6s' }}>
          {'// Portfolio.tsx'}
        </div>
        <div className="absolute top-1/3 right-20 font-mono text-sm text-indigo-400/35 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}>
          {'const projects = await getProjects()'}
        </div>
        <div className="absolute bottom-1/3 left-20 font-mono text-sm text-purple-400/35 animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}>
          {'render(<ProjectCard />)'}
        </div>
        <div className="absolute bottom-1/4 right-1/3 font-mono text-sm text-cyan-400/35 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          {'export default Portfolio'}
        </div>
        <div className="absolute top-2/5 left-1/4 font-mono text-base text-emerald-400/40 animate-pulse" style={{ animationDuration: '9s', animationDelay: '4s' }}>
          {'useState(innovation)'}
        </div>

        {/* Project workflow visualization */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(139 92 246)" />
                <stop offset="50%" stopColor="rgb(99 102 241)" />
                <stop offset="100%" stopColor="rgb(59 130 246)" />
              </linearGradient>
            </defs>
            
            {/* Project development flow */}
            <g className="animate-pulse" style={{ animationDuration: '4s' }}>
              <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="url(#portfolioGradient)" strokeWidth="1" />
              <line x1="30%" y1="15%" x2="50%" y2="25%" stroke="url(#portfolioGradient)" strokeWidth="1" />
              <line x1="50%" y1="25%" x2="70%" y2="35%" stroke="url(#portfolioGradient)" strokeWidth="1" />
              <line x1="70%" y1="35%" x2="90%" y2="60%" stroke="url(#portfolioGradient)" strokeWidth="1" />
              <line x1="90%" y1="60%" x2="75%" y2="80%" stroke="url(#portfolioGradient)" strokeWidth="1" />
              <line x1="75%" y1="80%" x2="25%" y2="75%" stroke="url(#portfolioGradient)" strokeWidth="1" />
            </g>
            
            {/* Development stages nodes */}
            <g>
              <circle cx="10%" cy="20%" r="4" fill="rgb(139 92 246)" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="30%" cy="15%" r="4" fill="rgb(99 102 241)" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              <circle cx="50%" cy="25%" r="4" fill="rgb(59 130 246)" className="animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
              <circle cx="70%" cy="35%" r="4" fill="rgb(147 51 234)" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }} />
              <circle cx="90%" cy="60%" r="4" fill="rgb(168 85 247)" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
              <circle cx="75%" cy="80%" r="4" fill="rgb(236 72 153)" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />
            </g>
          </svg>
        </div>

        {/* Development tools visualization */}
        <div className="absolute top-1/4 right-1/5 opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-violet-400 animate-pulse" style={{ animationDuration: '5s' }}>
            {/* Git branches visualization */}
            <path d="M20 20 Q40 20 40 40 L40 80 Q40 100 60 100 L100 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M40 40 Q60 40 60 20 L100 20" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="3" fill="currentColor" />
            <circle cx="40" cy="40" r="3" fill="currentColor" />
            <circle cx="60" cy="20" r="3" fill="currentColor" />
            <circle cx="100" cy="20" r="3" fill="currentColor" />
            <circle cx="100" cy="100" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Code architecture diagram */}
        <div className="absolute bottom-1/5 left-1/8 opacity-15">
          <svg width="100" height="80" viewBox="0 0 100 80" className="text-indigo-400">
            <g className="animate-pulse" style={{ animationDuration: '4s' }}>
              {/* Component hierarchy */}
              <rect x="10" y="10" width="80" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="20" y="35" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="55" y="35" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="15" y="55" width="15" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="35" y="55" width="15" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              <rect x="60" y="55" width="15" height="10" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
              
              {/* Connection lines */}
              <line x1="50" y1="25" x2="32" y2="35" stroke="currentColor" strokeWidth="1" />
              <line x1="50" y1="25" x2="68" y2="35" stroke="currentColor" strokeWidth="1" />
              <line x1="32" y1="47" x2="22" y2="55" stroke="currentColor" strokeWidth="1" />
              <line x1="32" y1="47" x2="42" y2="55" stroke="currentColor" strokeWidth="1" />
              <line x1="68" y1="47" x2="68" y2="55" stroke="currentColor" strokeWidth="1" />
            </g>
          </svg>
        </div>

        {/* Enhanced binary data streams */}
        <div className="absolute top-0 left-1/8 text-violet-500/15 font-mono text-xs leading-4 select-none">
          <div className="animate-pulse" style={{ animationDuration: '12s' }}>
            {['01110000', '10101101', '11000110', '00111001', '10110010', '01001111', '11010001', '00101100'].map((binary, i) => (
              <div key={i} style={{ animationDelay: `${i * 0.3}s` }}>
                {binary}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-32 right-1/8 text-indigo-500/15 font-mono text-xs leading-4 select-none">
          <div className="animate-pulse" style={{ animationDuration: '14s', animationDelay: '3s' }}>
            {['11001010', '00110110', '10011101', '01010011', '11110001', '00001010', '10100111', '01011100'].map((binary, i) => (
              <div key={i} style={{ animationDelay: `${i * 0.4}s` }}>
                {binary}
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio tech stack with darker theme */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-1/6 left-1/3 font-mono text-xl text-violet-400 animate-pulse" style={{ animationDuration: '16s' }}>
            Next.js
          </div>
          <div className="absolute top-2/3 right-1/4 font-mono text-xl text-indigo-400 animate-pulse" style={{ animationDuration: '18s', animationDelay: '4s' }}>
            Framer Motion
          </div>
          <div className="absolute bottom-1/4 left-1/6 font-mono text-xl text-purple-400 animate-pulse" style={{ animationDuration: '20s', animationDelay: '6s' }}>
            Tailwind
          </div>
          <div className="absolute top-1/2 right-1/5 font-mono text-lg text-cyan-400 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }}>
            Three.js
          </div>
          <div className="absolute top-1/3 left-1/5 font-mono text-lg text-emerald-400 animate-pulse" style={{ animationDuration: '17s', animationDelay: '5s' }}>
            WebGL
          </div>
        </div>

        {/* Darker particle system */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const positions = [
              { top: 68.11, left: 68.20 }, { top: 64.35, left: 59.22 }, { top: 86.09, left: 10.23 },
              { top: 6.11, left: 81.80 }, { top: 3.54, left: 26.02 }, { top: 5.35, left: 39.10 },
              { top: 69.36, left: 13.90 }, { top: 81.54, left: 67.37 }, { top: 8.04, left: 29.01 },
              { top: 91.27, left: 66.20 }, { top: 39.52, left: 64.99 }, { top: 10.20, left: 20.80 },
              { top: 60.45, left: 51.54 }, { top: 62.85, left: 40.31 }, { top: 18.10, left: 30.09 }
            ];
            
            const durations = [3.27, 7.85, 7.48, 5.45, 3.04, 5.18, 4.91, 3.53, 7.14, 6.15, 7.51, 5.29, 6.94, 5.23, 7.57];
            const delays = [2.81, 2.92, 0.99, 1.97, 0.50, 1.87, 0.38, 2.74, 1.61, 1.45, 0.94, 1.09, 1.71, 0.76, 1.79];
            
            return (
              <div
                key={`dark-particle-${i}`}
                className="absolute w-1 h-1 bg-violet-400/20 rounded-full animate-pulse"
                style={{
                  top: `${positions[i].top}%`,
                  left: `${positions[i].left}%`,
                  animationDuration: `${durations[i]}s`,
                  animationDelay: `${delays[i]}s`
                }}
              />
            );
          })}
        </div>

        {/* Project status indicators */}
        <div className="absolute bottom-1/3 right-1/4 opacity-20">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 font-mono text-xs text-emerald-400 animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Build: Success</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-xs text-blue-400 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Deploy: Ready</span>
            </div>
            <div className="flex items-center space-x-2 font-mono text-xs text-violet-400 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
              <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
              <span>Tests: Passing</span>
            </div>
          </div>
        </div>
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent tracking-tight">
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Innovative projects combining{' '}
              <span className="text-violet-400 font-semibold">AI technology</span>,{' '}
              <span className="text-purple-400 font-semibold">full-stack development</span>, and{' '}
              <span className="text-indigo-400 font-semibold">business leadership</span>.
              <br />Building the future through cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-950/95 via-violet-950/20 to-purple-950/30 backdrop-blur-sm rounded-xl border border-gray-800/60 hover:border-violet-400/30 transition-all duration-300 shadow-2xl"
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl p-3 bg-gradient-to-br from-violet-500/15 via-purple-500/10 to-indigo-500/15 rounded-xl border border-violet-500/15">
                        {project.image}
                      </div>
                      <div>
                        <span className="text-sm text-gray-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        project.status === 'Complete' ? 'bg-gradient-to-r from-emerald-400 to-green-400 shadow-emerald-400/50 shadow-md' :
                        project.status === 'Active' ? 'bg-gradient-to-r from-indigo-400 to-blue-400 shadow-indigo-400/50 shadow-md' : 'bg-gradient-to-r from-amber-400 to-yellow-400 shadow-amber-400/50 shadow-md'
                      }`} />
                      <span className="text-sm text-slate-400">{project.status}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-900/60 rounded-full h-2 border border-gray-800/40">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full shadow-lg shadow-violet-500/20"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                    {selectedProject === index ? project.longDescription : project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gradient-to-br from-gray-900/50 via-violet-950/15 to-purple-950/20 rounded-lg border border-gray-800/30">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-violet-400">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/60 text-gray-300 text-sm rounded-full border border-gray-700/60 hover:border-violet-500/30 hover:text-violet-300 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.button
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
                    >
                      {selectedProject === index ? 'Show Less' : 'Learn More'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-gray-700/60 text-gray-300 rounded-lg hover:border-violet-500/30 hover:text-violet-400 transition-colors"
                      disabled={project.title !== 'VoxaSales AI'}
                    >
                      {project.title === 'VoxaSales AI' ? (
                        <Link href="/portfolio/voxasales-ai" className="block w-full h-full">
                          View Details
                        </Link>
                      ) : (
                        <span className="opacity-50">View Details</span>
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-slate-100 via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Professional Journey
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex">
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-6 h-6 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full z-10 shadow-lg shadow-violet-500/20" />
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 mt-2 opacity-40" />
                    )}
                  </div>
                  
                  <div className="flex-1 bg-gradient-to-br from-gray-950/95 via-violet-950/15 to-purple-950/25 backdrop-blur-sm rounded-xl border border-gray-800/60 hover:border-violet-400/30 transition-all duration-300 p-6 shadow-2xl">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">{exp.title}</h3>
                        <p className="text-violet-400 font-semibold text-lg mb-1">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 font-medium">{exp.period}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Achievements</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mr-3 flex-shrink-0 shadow-emerald-400/40 shadow-sm" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
