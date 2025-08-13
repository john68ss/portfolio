'use client';

import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Matrix-style falling code with darker theme */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-violet-500/15 to-transparent animate-pulse"
            style={{
              left: `${15 + i * 14}%`,
              height: '100%',
              animationDuration: `${5 + i}s`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <div
              className="w-full bg-gradient-to-b from-violet-400/20 to-transparent animate-bounce"
              style={{
                height: '100px',
                animationDuration: `${6 + i}s`,
                animationDelay: `${i * 0.4}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* Darker, more professional floating code snippets */}
      <div className="absolute top-1/6 left-12">
        <div className="font-mono text-base text-violet-400/35 animate-pulse">
          <div style={{ animationDuration: '8s' }}>
            {'// CEO & Tech Innovator'}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-20">
        <div className="font-mono text-sm text-indigo-400/30 animate-pulse">
          <div style={{ animationDuration: '9s', animationDelay: '2s' }}>
            {'const leadership = await buildFuture()'}
          </div>
        </div>
      </div>

      <div className="absolute top-2/5 left-16">
        <div className="font-mono text-sm text-purple-400/30 animate-pulse">
          <div style={{ animationDuration: '10s', animationDelay: '3s' }}>
            {'AI.revolutionize(industries)'}
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-16">
        <div className="font-mono text-sm text-cyan-400/30 animate-pulse">
          <div style={{ animationDuration: '8s', animationDelay: '1s' }}>
            {'innovation.deploy(worldwide)'}
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4">
        <div className="font-mono text-base text-emerald-400/35 animate-pulse">
          <div style={{ animationDuration: '9s', animationDelay: '2.5s' }}>
            {'startup.scale(success)'}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/3">
        <div className="font-mono text-sm text-pink-400/30 animate-pulse">
          <div style={{ animationDuration: '11s', animationDelay: '4s' }}>
            {'vision.execute(excellence)'}
          </div>
        </div>
      </div>

      {/* More subtle Network visualization with darker theme */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-12">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(139 92 246)" />
              <stop offset="50%" stopColor="rgb(99 102 241)" />
              <stop offset="100%" stopColor="rgb(59 130 246)" />
            </linearGradient>
            <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Subtle network connections */}
          <g className="animate-pulse" style={{ animationDuration: '6s' }}>
            <line x1="15%" y1="25%" x2="35%" y2="15%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="35%" y1="15%" x2="65%" y2="30%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="65%" y1="30%" x2="85%" y2="60%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="85%" y1="60%" x2="70%" y2="85%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="70%" y1="85%" x2="30%" y2="75%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="30%" y1="75%" x2="15%" y2="45%" stroke="url(#networkGradient)" strokeWidth="1" />
            <line x1="15%" y1="45%" x2="15%" y2="25%" stroke="url(#networkGradient)" strokeWidth="1" />
          </g>
          
          {/* Darker network nodes */}
          <g>
            <circle cx="15%" cy="25%" r="4" fill="rgb(139 92 246)" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="15%" cy="25%" r="2" fill="rgb(139 92 246)" />
            
            <circle cx="35%" cy="15%" r="4" fill="rgb(99 102 241)" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <circle cx="35%" cy="15%" r="2" fill="rgb(99 102 241)" />
            
            <circle cx="65%" cy="30%" r="4" fill="rgb(59 130 246)" className="animate-ping" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
            <circle cx="65%" cy="30%" r="2" fill="rgb(59 130 246)" />
            
            <circle cx="85%" cy="60%" r="4" fill="rgb(147 51 234)" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }} />
            <circle cx="85%" cy="60%" r="2" fill="rgb(147 51 234)" />
            
            <circle cx="70%" cy="85%" r="4" fill="rgb(168 85 247)" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
            <circle cx="70%" cy="85%" r="2" fill="rgb(168 85 247)" />
            
            <circle cx="30%" cy="75%" r="4" fill="rgb(236 72 153)" className="animate-ping" style={{ animationDuration: '5s', animationDelay: '0.8s' }} />
            <circle cx="30%" cy="75%" r="2" fill="rgb(236 72 153)" />
          </g>

          {/* Slower data flow animation */}
          <g>
            <circle r="3" fill="url(#dataFlow)" opacity="0.6">
              <animateMotion dur="8s" repeatCount="indefinite">
                <path d="M 15,25 Q 35,15 65,30 Q 85,60 70,85 Q 30,75 15,45 Q 15,25 15,25" />
              </animateMotion>
            </circle>
            <circle r="2" fill="url(#dataFlow)" opacity="0.4">
              <animateMotion dur="10s" repeatCount="indefinite" begin="3s">
                <path d="M 35,15 Q 65,30 85,60 Q 70,85 30,75 Q 15,45 15,25 Q 35,15 35,15" />
              </animateMotion>
            </circle>
          </g>
        </svg>
      </div>

      {/* Enhanced Cybersecurity elements */}
      <div className="absolute top-1/5 right-1/5 opacity-30">
        <svg width="150" height="150" viewBox="0 0 150 150" className="text-violet-400 animate-pulse" style={{ animationDuration: '4s' }}>
          <path d="M75 15 L120 40 L120 85 L75 135 L30 85 L30 40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M75 30 L105 50 L105 80 L75 120 L45 80 L45 50 Z" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="75" cy="75" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M75 60 L75 90 M60 75 L90 75" stroke="currentColor" strokeWidth="2" />
          
          {/* Scanning lines */}
          <line x1="30" y1="40" x2="120" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5">
            <animate attributeName="y1" values="40;85;40" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" values="40;85;40" dur="3s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* AI Brain visualization */}
      <div className="absolute bottom-1/6 left-1/8 opacity-25">
        <svg width="140" height="100" viewBox="0 0 140 100" className="text-indigo-400">
          {/* Neural network nodes */}
          <g className="animate-pulse" style={{ animationDuration: '3s' }}>
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="20" cy="50" r="4" fill="currentColor" />
            <circle cx="20" cy="80" r="4" fill="currentColor" />
            
            <circle cx="70" cy="15" r="4" fill="currentColor" />
            <circle cx="70" cy="35" r="4" fill="currentColor" />
            <circle cx="70" cy="55" r="4" fill="currentColor" />
            <circle cx="70" cy="75" r="4" fill="currentColor" />
            
            <circle cx="120" cy="30" r="4" fill="currentColor" />
            <circle cx="120" cy="70" r="4" fill="currentColor" />
          </g>
          
          {/* Neural connections */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.6" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <line x1="24" y1="20" x2="66" y2="15" />
            <line x1="24" y1="20" x2="66" y2="35" />
            <line x1="24" y1="50" x2="66" y2="35" />
            <line x1="24" y1="50" x2="66" y2="55" />
            <line x1="24" y1="80" x2="66" y2="55" />
            <line x1="24" y1="80" x2="66" y2="75" />
            
            <line x1="74" y1="15" x2="116" y2="30" />
            <line x1="74" y1="35" x2="116" y2="30" />
            <line x1="74" y1="55" x2="116" y2="70" />
            <line x1="74" y1="75" x2="116" y2="70" />
          </g>
          
          {/* AI pulse */}
          <circle cx="70" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" values="20;35;20" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Enhanced terminal/console visualization */}
      <div className="absolute top-1/3 left-1/12 opacity-40">
        <div className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 font-mono text-sm backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="text-green-400">
            <div className="animate-pulse" style={{ animationDuration: '3s' }}>$ deploying AI...</div>
            <div className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>$ neural nets online</div>
            <div className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}>$ future.exe running</div>
          </div>
        </div>
      </div>

      {/* Enhanced Binary streams with more visibility */}
      <div className="absolute top-0 left-1/6 text-violet-500/20 font-mono text-sm leading-5 select-none">
        <div className="animate-pulse" style={{ animationDuration: '8s' }}>
          {['01001001', '11010100', '10101010', '01110011', '11001001', '10010110', '00110101', '11100010'].map((binary, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              {binary}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-20 right-1/6 text-indigo-500/20 font-mono text-sm leading-5 select-none">
        <div className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}>
          {['11100101', '00110011', '10011010', '01010101', '11110000', '00001111', '10100110', '01011001'].map((binary, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.3}s` }}>
              {binary}
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack logos with higher visibility */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/6 left-1/3 font-mono text-2xl text-violet-400 animate-pulse" style={{ animationDuration: '12s' }}>
          React
        </div>
        <div className="absolute top-2/3 right-1/3 font-mono text-2xl text-indigo-400 animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }}>
          TypeScript
        </div>
        <div className="absolute bottom-1/5 left-1/5 font-mono text-2xl text-purple-400 animate-pulse" style={{ animationDuration: '18s', animationDelay: '5s' }}>
          Node.js
        </div>
        <div className="absolute top-1/2 right-1/6 font-mono text-2xl text-cyan-400 animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }}>
          Python
        </div>
        <div className="absolute top-1/4 right-1/4 font-mono text-xl text-emerald-400 animate-pulse" style={{ animationDuration: '16s', animationDelay: '4s' }}>
          Docker
        </div>
        <div className="absolute bottom-1/3 right-1/5 font-mono text-xl text-pink-400 animate-pulse" style={{ animationDuration: '13s', animationDelay: '1s' }}>
          Kubernetes
        </div>
      </div>

      {/* Enhanced particle system */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1.5 h-1.5 bg-violet-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Blockchain visualization */}
      <div className="absolute bottom-1/4 right-1/3 opacity-25">
        <div className="flex space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={`block-${i}`}
              className="w-8 h-8 border border-cyan-400/50 bg-cyan-400/10 animate-pulse"
              style={{
                animationDuration: '3s',
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="w-full h-1 bg-cyan-400/30 animate-pulse" style={{ animationDuration: '2s' }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Data encryption symbols */}
      <div className="absolute bottom-1/6 left-1/8 opacity-30">
        <div className="font-mono text-base text-indigo-400 space-y-2 animate-pulse" style={{ animationDuration: '6s' }}>
          <div>🔐 AES-256</div>
          <div>🛡️ SHA-256</div>
          <div>🔑 RSA-4096</div>
          <div>🔒 TLS 1.3</div>
        </div>
      </div>
    </div>
  );
}
