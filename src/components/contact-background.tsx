'use client';

import React from 'react';

export default function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced background layers matching portfolio style */}
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

      {/* Contact-themed code streams */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`contact-stream-${i}`}
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

      {/* Contact-specific floating code snippets */}
      <div className="absolute top-1/5 left-16 font-mono text-base text-violet-400/40 animate-pulse" style={{ animationDuration: '6s' }}>
        {'// Contact.tsx'}
      </div>
      <div className="absolute top-1/3 right-20 font-mono text-sm text-indigo-400/35 animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}>
        {'const connect = await sendMessage()'}
      </div>
      <div className="absolute bottom-1/3 left-20 font-mono text-sm text-purple-400/35 animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}>
        {'render(<ContactForm />)'}
      </div>
      <div className="absolute bottom-1/4 right-1/3 font-mono text-sm text-cyan-400/35 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
        {'export { Communication }'}
      </div>
      <div className="absolute top-2/5 left-1/4 font-mono text-base text-emerald-400/40 animate-pulse" style={{ animationDuration: '9s', animationDelay: '4s' }}>
        {'useState(collaboration)'}
      </div>
      <div className="absolute top-1/2 right-1/6 font-mono text-sm text-pink-400/35 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2.5s' }}>
        {'await partnership.establish()'}
      </div>

      {/* Communication network visualization */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139 92 246)" />
              <stop offset="50%" stopColor="rgb(99 102 241)" />
              <stop offset="100%" stopColor="rgb(59 130 246)" />
            </linearGradient>
          </defs>
          
          {/* Communication flow */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="url(#contactGradient)" strokeWidth="1" />
            <line x1="30%" y1="15%" x2="50%" y2="25%" stroke="url(#contactGradient)" strokeWidth="1" />
            <line x1="50%" y1="25%" x2="70%" y2="35%" stroke="url(#contactGradient)" strokeWidth="1" />
            <line x1="70%" y1="35%" x2="90%" y2="60%" stroke="url(#contactGradient)" strokeWidth="1" />
            <line x1="90%" y1="60%" x2="75%" y2="80%" stroke="url(#contactGradient)" strokeWidth="1" />
            <line x1="75%" y1="80%" x2="25%" y2="75%" stroke="url(#contactGradient)" strokeWidth="1" />
          </g>
          
          {/* Communication nodes */}
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

      {/* Email/Message visualization */}
      <div className="absolute top-1/4 right-1/5 opacity-20">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-violet-400 animate-pulse" style={{ animationDuration: '5s' }}>
          {/* Email envelope */}
          <rect x="20" y="40" width="80" height="50" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M20 45 L60 70 L100 45" stroke="currentColor" strokeWidth="2" fill="none" />
          
          {/* Message waves */}
          <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <path d="M30 25 Q40 20 50 25 Q60 30 70 25" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M35 30 Q45 25 55 30 Q65 35 75 30" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M40 35 Q50 30 60 35 Q70 40 80 35" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Contact form architecture */}
      <div className="absolute bottom-1/5 left-1/8 opacity-15">
        <svg width="100" height="80" viewBox="0 0 100 80" className="text-indigo-400">
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            {/* Form structure */}
            <rect x="10" y="10" width="80" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="20" y="35" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="55" y="35" width="25" height="12" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="15" y="55" width="70" height="15" rx="1" stroke="currentColor" strokeWidth="1" fill="none" />
            
            {/* Connection lines */}
            <line x1="50" y1="25" x2="32" y2="35" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="25" x2="68" y2="35" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="47" x2="50" y2="55" stroke="currentColor" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Enhanced binary data streams */}
      <div className="absolute top-0 left-1/8 text-violet-500/15 font-mono text-xs leading-4 select-none">
        <div className="animate-pulse" style={{ animationDuration: '12s' }}>
          {['01000011', '01001111', '01001110', '01010100', '01000001', '01000011', '01010100', '00100001'].map((binary, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.3}s` }}>
              {binary}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-32 right-1/8 text-indigo-500/15 font-mono text-xs leading-4 select-none">
        <div className="animate-pulse" style={{ animationDuration: '14s', animationDelay: '3s' }}>
          {['01001101', '01000101', '01010011', '01010011', '01000001', '01000111', '01000101', '01010011'].map((binary, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.4}s` }}>
              {binary}
            </div>
          ))}
        </div>
      </div>

      {/* Contact tech stack */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-1/6 left-1/3 font-mono text-xl text-violet-400 animate-pulse" style={{ animationDuration: '16s' }}>
          React Forms
        </div>
        <div className="absolute top-2/3 right-1/4 font-mono text-xl text-indigo-400 animate-pulse" style={{ animationDuration: '18s', animationDelay: '4s' }}>
          Communication
        </div>
        <div className="absolute bottom-1/4 left-1/6 font-mono text-xl text-purple-400 animate-pulse" style={{ animationDuration: '20s', animationDelay: '6s' }}>
          Collaboration
        </div>
        <div className="absolute top-1/2 right-1/5 font-mono text-lg text-cyan-400 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }}>
          Email APIs
        </div>
        <div className="absolute top-1/3 left-1/5 font-mono text-lg text-emerald-400 animate-pulse" style={{ animationDuration: '17s', animationDelay: '5s' }}>
          Networking
        </div>
      </div>

      {/* Darker particle system matching portfolio */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={`contact-particle-${i}`}
            className="absolute w-1 h-1 bg-violet-400/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Contact status indicators */}
      <div className="absolute bottom-1/3 right-1/4 opacity-20">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-emerald-400 animate-pulse" style={{ animationDuration: '3s' }}>
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Status: Available</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Response: 24h</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-violet-400 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
            <span>Projects: Open</span>
          </div>
        </div>
      </div>

      {/* Communication protocol visualization */}
      <div className="absolute top-1/3 left-1/12 opacity-25">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-cyan-400 animate-pulse" style={{ animationDuration: '6s' }}>
          {/* Protocol layers */}
          <rect x="10" y="20" width="80" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(6,182,212,0.1)" />
          <rect x="15" y="40" width="70" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(6,182,212,0.08)" />
          <rect x="20" y="60" width="60" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="rgba(6,182,212,0.06)" />
          
          {/* Data flow arrows */}
          <path d="M50 35 L50 40" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
          <path d="M50 55 L50 60" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrow)" />
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
        </svg>
      </div>

      {/* Contact success metrics */}
      <div className="absolute bottom-1/6 left-1/8 opacity-25">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 font-mono text-xs text-emerald-400 animate-pulse" style={{ animationDuration: '3s' }}>
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Response Rate: 98%</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-blue-400 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Languages: 4+</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-violet-400 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>
            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
            <span>Timezone: CET</span>
          </div>
          <div className="flex items-center space-x-2 font-mono text-xs text-purple-400 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Availability: High</span>
          </div>
        </div>
      </div>

      {/* Contact method symbols */}
      <div className="absolute bottom-1/8 right-1/8 opacity-22">
        <div className="font-mono text-lg text-indigo-400 space-y-3 animate-pulse" style={{ animationDuration: '7s' }}>
          <div>📧 Email</div>
          <div>📱 Phone</div>
          <div>💬 Message</div>
          <div>🌐 Global</div>
        </div>
      </div>
    </div>
  );
}
