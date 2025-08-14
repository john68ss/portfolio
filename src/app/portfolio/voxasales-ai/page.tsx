'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VoxaSalesAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/25 via-purple-950/15 to-indigo-950/25" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 via-transparent to-indigo-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              VoxaSales AI
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered conversational assistant for sales teams, providing real-time support during calls with intelligent response suggestions and client memory.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <span className="px-4 py-2 bg-violet-600/20 border border-violet-400/30 rounded-full text-violet-300 text-sm">
                AI & SaaS
              </span>
              <span className="px-4 py-2 bg-orange-600/20 border border-orange-400/30 rounded-full text-orange-300 text-sm">
                In Development - 65%
              </span>
              <span className="px-4 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm">
                Launch: End 2025
              </span>
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  VoxaSales AI is a comprehensive Software as a Service (SaaS) solution designed to revolutionize sales team performance through real-time conversational AI assistance. The system integrates seamlessly with existing call center infrastructure to provide intelligent, context-aware support during live customer interactions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By leveraging cutting-edge AI technology, VoxaSales AI listens to conversations in real-time, transcribes them instantly in Romanian, and generates intelligent response suggestions based on comprehensive client history and contextual understanding.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transcription Accuracy</span>
                    <span className="text-violet-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-emerald-400 font-semibold">&lt;1 second</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CRM Integrations</span>
                    <span className="text-indigo-400 font-semibold">4+ platforms</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['GPT-4 Turbo', 'Google Cloud Speech-to-Text', 'React', 'WebSocket', 'Firebase', 'GDPR Compliance'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-violet-600/20 border border-violet-400/30 rounded-full text-violet-300 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Roles & Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-12">
              User Roles & Access Levels
            </h2>
            
            <div className="space-y-8">
              {/* Admin Role */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-red-900/30 via-pink-900/20 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-red-400/30 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">👑</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Admin (VoxaSales AI Staff)</h3>
                    <p className="text-red-300">Full system control & client account creation</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">User & Role Management</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Create/edit/suspend/delete manager accounts</li>
                      <li>• Assign subscription plans & limits (max agents)</li>
                      <li>• Reset passwords for any account</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">Client Management</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• View all companies and usage stats</li>
                      <li>• Approve/reject new registration requests</li>
                      <li>• Upgrade/downgrade plans</li>
                      <li>• Manage billing & invoices</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">Platform Settings</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Configure pricing & plans</li>
                      <li>• Set AI model parameters & feature toggles</li>
                      <li>• Language & localization settings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">Analytics</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Global dashboard: active clients, agents, calls</li>
                      <li>• Revenue & MRR/ARR tracking</li>
                      <li>• AI usage statistics</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-red-500/20 md:col-span-2">
                    <h4 className="text-lg font-semibold text-red-300 mb-3">Security & Compliance</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• GDPR/CCPA settings, data retention policies</li>
                      <li>• Call recording policies management</li>
                      <li>• Access logs & audit trails monitoring</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Manager Role */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-blue-400/30 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">👔</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Manager</h3>
                    <p className="text-blue-300">Manage their own sales team & oversee performance</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-black/20 rounded-xl p-4 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Team Management</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Add/edit/deactivate agent accounts (up to plan limit)</li>
                      <li>• Assign roles (agent/team lead) within company</li>
                      <li>• Reset passwords for agents</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Call & AI Tools</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Integrated softphone for calls</li>
                      <li>• Live AI guidance (scripts, objection handling)</li>
                      <li>• Post-call analytics & summaries</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Performance Tracking</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Team call statistics (count, duration, success rate)</li>
                      <li>• Monitor AI tips usage & closing rates</li>
                      <li>• Export reports (CSV/PDF)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">CRM/Integration</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Connect to CRM (HubSpot, Salesforce, etc.)</li>
                      <li>• Import/export contacts</li>
                      <li>• Sync call data automatically</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-blue-500/20 md:col-span-2">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Billing & Plan</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• View subscription details & usage</li>
                      <li>• Upgrade request option</li>
                      <li>• Billing history and invoice management</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Agent Role */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-teal-900/30 backdrop-blur-xl rounded-2xl border border-green-400/30 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🎧</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Agent</h3>
                    <p className="text-green-300">Use AI assistance to close more deals during calls</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-black/20 rounded-xl p-4 border border-green-500/20">
                    <h4 className="text-lg font-semibold text-green-300 mb-3">Call & AI Tools</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Integrated softphone (make/receive calls)</li>
                      <li>• Live AI assistance panel during calls</li>
                      <li>• Real-time tips, rebuttals, upsell prompts</li>
                      <li>• Call script view + next-step suggestions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-green-500/20">
                    <h4 className="text-lg font-semibold text-green-300 mb-3">Post-Call Features</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• AI-generated call summaries</li>
                      <li>• Follow-up task suggestions</li>
                      <li>• Call tagging (interested, not interested, follow-up)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-green-500/20">
                    <h4 className="text-lg font-semibold text-green-300 mb-3">Personal Stats</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Daily/weekly call count tracking</li>
                      <li>• Success rates & conversion tracking</li>
                      <li>• Personal AI performance insights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4 border border-green-500/20 md:col-span-3">
                    <h4 className="text-lg font-semibold text-green-300 mb-3">CRM/Contacts</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Access to contacts assigned by manager</li>
                      <li>• Add call notes & outcomes to CRM</li>
                      <li>• Update contact status and follow-up scheduling</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Core Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-12">
              Core Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎧',
                  title: 'Real-Time Audio Processing',
                  description: 'Connects directly to agent calls, processes audio through secure channels, and transcribes conversations in under 1 second with Romanian language optimization.'
                },
                {
                  icon: '🧠',
                  title: 'Contextual Client Memory',
                  description: 'Maintains comprehensive client history, remembers previous discussions, understands response patterns, and builds updated relationship summaries for personalized interactions.'
                },
                {
                  icon: '💡',
                  title: 'Intelligent Response Generation',
                  description: 'Generates logical and emotional counter-objections, provides arguments adapted to client interests, and suggests personalized offers and next steps.'
                },
                {
                  icon: '📱',
                  title: 'Live Agent Interface',
                  description: 'Delivers suggestions as on-screen text or audio messages in headsets, allowing agents to maintain natural conversation rhythm with instant AI assistance.'
                },
                {
                  icon: '📊',
                  title: 'Post-Call Analytics',
                  description: 'Automatically analyzes each call, provides bullet-point summaries, evaluates interaction efficiency, and scores agent performance with actionable insights.'
                },
                {
                  icon: '🔗',
                  title: 'Seamless Integration',
                  description: 'Compatible with standard VOIP applications, major CRMs (HubSpot, Salesforce, Pipedrive), and custom platforms through REST APIs and webhooks.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-violet-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Implementation</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-violet-400 mb-4">AI Processing Engine</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span><strong>GPT-4 Turbo:</strong> Advanced language model for intelligent response generation and contextual understanding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span><strong>Neural Networks:</strong> Pattern recognition and sentiment analysis for optimal client interaction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-violet-400 mr-2">•</span>
                      <span><strong>Machine Learning:</strong> Continuous improvement through interaction data and feedback loops</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-4">Infrastructure & Security</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span><strong>Google Cloud Speech-to-Text:</strong> Enterprise-grade transcription with Romanian language optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span><strong>WebSocket Encryption:</strong> Secure real-time communication channels with end-to-end encryption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-400 mr-2">•</span>
                      <span><strong>GDPR Compliance:</strong> European data protection standards with tokenization and secure storage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Target Market & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Target Market</h2>
              <div className="space-y-4">
                {[
                  'Call Centers & Contact Centers',
                  'Outbound Sales Teams',
                  'Inbound Sales Operations',
                  'Direct Sales Organizations',
                  'Telesales Departments'
                ].map((target, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{target}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {[
                  'Faster, more intelligent sales processes',
                  'Instant responses without hesitation',
                  'Deep personalization based on client profiles',
                  'Reduced cognitive effort for agents',
                  'Standardized and continuously improved sales processes',
                  'Scalability for teams of any size'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Implementation Timeline</h2>
              
              <div className="space-y-6">
                {[
                  {
                    phase: 'Phase 1: Pilot Program',
                    description: 'Configuration and testing with 3-5 agents',
                    status: 'In Progress',
                    color: 'violet'
                  },
                  {
                    phase: 'Phase 2: Team Extension',
                    description: 'Integration across complete sales teams',
                    status: 'Planned',
                    color: 'indigo'
                  },
                  {
                    phase: 'Phase 3: Training & Onboarding',
                    description: 'Guided video sessions and comprehensive training',
                    status: 'Planned',
                    color: 'purple'
                  },
                  {
                    phase: 'Phase 4: Full Launch',
                    description: 'Commercial availability with technical support',
                    status: 'Q4 2025 / Q1 2026',
                    color: 'emerald'
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className={`w-4 h-4 bg-${phase.color}-400 rounded-full mr-4 flex-shrink-0`}></div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{phase.phase}</h3>
                      <p className="text-gray-300 text-sm">{phase.description}</p>
                    </div>
                    <span className={`px-3 py-1 bg-${phase.color}-600/20 border border-${phase.color}-400/30 rounded-full text-${phase.color}-300 text-xs`}>
                      {phase.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Project Images Section (Placeholder for future images) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-12">
              Project Visuals
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder image containers - you can replace these with actual images */}
              {[
                { title: 'Dashboard Interface', description: 'Main control panel for sales managers' },
                { title: 'Agent Live View', description: 'Real-time assistance interface for agents' },
                { title: 'Analytics Dashboard', description: 'Comprehensive performance analytics' },
                { title: 'Client Memory System', description: 'Contextual client history interface' },
                { title: 'Response Generation', description: 'AI-powered suggestion engine' },
                { title: 'Integration Setup', description: 'CRM and VOIP integration panel' }
              ].map((placeholder, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-violet-400/30 transition-all duration-300">
                  <div className="w-full h-48 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-gray-400 text-sm">Image placeholder</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{placeholder.title}</h3>
                  <p className="text-gray-300 text-sm">{placeholder.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-400 italic">
                * Project images and screenshots will be added as development progresses
              </p>
            </div>
          </motion.div>

          {/* Contact & Interest Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-violet-900/50 via-purple-900/40 to-indigo-900/50 backdrop-blur-xl rounded-2xl border border-violet-400/30 p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Interested in VoxaSales AI?</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                VoxaSales AI will be available for strategic partners and early adopters at the end of 2025. 
                Join our waiting list to be among the first to revolutionize your sales process with AI-powered assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/30"
                >
                  Get Early Access
                </Link>
                <a 
                  href="mailto:ghebanionutjohnjunior@gmail.com?subject=VoxaSales AI Partnership Inquiry" 
                  className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  Partnership Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
