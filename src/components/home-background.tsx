'use client';

import React from 'react';

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Completely different background approach - Geometric Matrix */}
      <div className="absolute inset-0">
        {/* Dynamic hexagonal grid */}
        <div className="absolute inset-0 opacity-15">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon points="50,1 90,25 90,75 50,99 10,75 10,25" stroke="rgba(139,92,246,0.3)" strokeWidth="1" fill="none" />
              </pattern>
              <linearGradient id="hexGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="rgb(147,51,234)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgb(236,72,153)" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" className="animate-pulse" style={{ animationDuration: '8s' }} />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={`geo-${i}`}
              className="absolute animate-bounce"
              style={{
                top: `${10 + (i * 7)}%`,
                left: `${5 + (i * 8)}%`,
                animationDuration: `${4 + (i % 3)}s`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" className={`text-${['violet', 'indigo', 'purple', 'cyan'][i % 4]}-400/20`}>
                {i % 4 === 0 && <polygon points="20,5 35,30 5,30" stroke="currentColor" strokeWidth="2" fill="none" />}
                {i % 4 === 1 && <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 20 20)" />}
                {i % 4 === 2 && <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />}
                {i % 4 === 3 && <polygon points="20,2 32,15 26,32 14,32 8,15" stroke="currentColor" strokeWidth="2" fill="none" />}
              </svg>
            </div>
          ))}
        </div>

        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139,92,246,0.6)" />
                <stop offset="50%" stopColor="rgba(99,102,241,0.4)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
              </linearGradient>
            </defs>
            <path d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z" fill="url(#waveGradient)" className="animate-pulse" style={{ animationDuration: '6s' }} />
            <path d="M0,150 Q300,100 600,150 T1200,150 L1200,250 L0,250 Z" fill="url(#waveGradient)" opacity="0.7" className="animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
          </svg>
        </div>
      </div>

      {/* Spiral energy patterns */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`spiral-${i}`}
            className="absolute"
            style={{
              top: `${20 + i * 25}%`,
              left: `${15 + i * 30}%`,
              transform: 'rotate(0deg)',
              animation: `spin ${20 + i * 5}s linear infinite`
            }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-25">
              <defs>
                <linearGradient id={`spiralGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={`rgb(${[139, 99, 59][i]},${[92, 102, 130][i]},246)`} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={`rgb(${[147, 168, 236][i]},${[51, 85, 72][i]},${[234, 247, 153]})`} stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M100,100 Q120,80 140,100 Q120,120 100,100 Q80,80 60,100 Q80,120 100,100"
                stroke={`url(#spiralGrad${i})`}
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ animationDuration: `${3 + i}s` }}
              />
              <circle cx="100" cy="100" r={30 + i * 10} stroke={`url(#spiralGrad${i})`} strokeWidth="1" fill="none" opacity="0.6" />
            </svg>
          </div>
        ))}
      </div>

      {/* Constellation patterns */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <radialGradient id="starGlow">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.2)" />
            </radialGradient>
          </defs>
          
          {/* Star constellation */}
          <g className="animate-pulse" style={{ animationDuration: '4s' }}>
            <circle cx="15%" cy="20%" r="2" fill="url(#starGlow)" />
            <circle cx="25%" cy="15%" r="1.5" fill="url(#starGlow)" />
            <circle cx="35%" cy="25%" r="2.5" fill="url(#starGlow)" />
            <circle cx="45%" cy="18%" r="1" fill="url(#starGlow)" />
            <circle cx="55%" cy="30%" r="2" fill="url(#starGlow)" />
            <circle cx="65%" cy="22%" r="1.5" fill="url(#starGlow)" />
            <circle cx="75%" cy="35%" r="2.5" fill="url(#starGlow)" />
            <circle cx="85%" cy="28%" r="1" fill="url(#starGlow)" />
            
            <circle cx="20%" cy="60%" r="1.5" fill="url(#starGlow)" />
            <circle cx="30%" cy="70%" r="2" fill="url(#starGlow)" />
            <circle cx="40%" cy="65%" r="1" fill="url(#starGlow)" />
            <circle cx="60%" cy="75%" r="2.5" fill="url(#starGlow)" />
            <circle cx="70%" cy="68%" r="1.5" fill="url(#starGlow)" />
            <circle cx="80%" cy="80%" r="2" fill="url(#starGlow)" />
          </g>
          
          {/* Connecting lines between stars */}
          <g stroke="rgba(139,92,246,0.3)" strokeWidth="0.5" className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}>
            <line x1="15%" y1="20%" x2="25%" y2="15%" />
            <line x1="25%" y1="15%" x2="35%" y2="25%" />
            <line x1="35%" y1="25%" x2="45%" y2="18%" />
            <line x1="45%" y1="18%" x2="55%" y2="30%" />
            <line x1="55%" y1="30%" x2="65%" y2="22%" />
            <line x1="65%" y1="22%" x2="75%" y2="35%" />
            <line x1="75%" y1="35%" x2="85%" y2="28%" />
            
            <line x1="20%" y1="60%" x2="30%" y2="70%" />
            <line x1="30%" y1="70%" x2="40%" y2="65%" />
            <line x1="40%" y1="65%" x2="60%" y2="75%" />
            <line x1="60%" y1="75%" x2="70%" y2="68%" />
            <line x1="70%" y1="68%" x2="80%" y2="80%" />
          </g>
        </svg>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0">
        {[
          'const developer = { name: "Passionate", skills: ["React", "TypeScript", "Node.js"] };',
          'function createAmazingProjects() { return innovation + creativity; }',
          'class Excellence { constructor() { this.quality = "premium"; } }',
          'const portfolio = await buildDreamProjects();',
          'export default function Success() { return <Achievement />; }',
          'npm install --save unlimited-potential',
          'git commit -m "Building the future"',
          'docker run --name innovation -p 3000:3000 creativity:latest'
        ].map((code, i) => (
          <div
            key={`code-${i}`}
            className="absolute font-mono text-xs opacity-20 animate-float"
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${5 + (i % 3) * 30}%`,
              color: ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'][i % 5],
              animationDuration: `${6 + (i % 3)}s`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            {code}
          </div>
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0">
        {['{ }', '< >', '[ ]', '( )', '=>', '&&', '||', '===', '!==', '...', '??', '?.'].map((symbol, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute font-mono text-lg font-bold opacity-10 animate-bounce"
            style={{
              top: `${10 + (i * 8)}%`,
              left: `${80 + (i % 2) * 15}%`,
              color: ['#8b5cf6', '#06b6d4', '#10b981'][i % 3],
              animationDuration: `${3 + (i % 3)}s`,
              animationDelay: `${i * 0.6}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Code Block Outlines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`block-${i}`}
            className="absolute border border-violet-500/10 rounded-lg animate-pulse"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i % 3) * 25}%`,
              width: '120px',
              height: '60px',
              animationDuration: `${4 + (i % 2)}s`,
              animationDelay: `${i * 0.7}s`
            }}
          >
            <div className="absolute top-2 left-2 w-2 h-2 bg-red-400/30 rounded-full"></div>
            <div className="absolute top-2 left-6 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute top-2 left-10 w-2 h-2 bg-green-400/30 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Terminal Command Lines */}
      <div className="absolute inset-0">
        {[
          '$ npm run dev',
          '> Building amazing portfolio...',
          '✅ Compilation successful',
          '⚡ Fast Refresh enabled',
          '🚀 Ready on http://localhost:3000',
          '$ git push origin feature/awesome',
          '💫 Deploy successful',
          '🎉 Live at production'
        ].map((terminal, i) => (
          <div
            key={`terminal-${i}`}
            className="absolute font-mono text-xs opacity-15 animate-typewriter"
            style={{
              top: `${20 + (i * 9)}%`,
              right: `${10 + (i % 4) * 20}%`,
              color: '#22c55e',
              animationDuration: `${4 + (i % 2)}s`,
              animationDelay: `${i * 1.2}s`
            }}
          >
            <span className="text-violet-400">user@portfolio:~</span> {terminal}
          </div>
        ))}
      </div>

      {/* Quantum dots */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const positions = [
            { top: 41.64, left: 69.32 }, { top: 99.24, left: 40.50 }, { top: 78.62, left: 65.75 },
            { top: 4.10, left: 67.95 }, { top: 96.88, left: 0.84 }, { top: 25.55, left: 31.40 },
            { top: 7.00, left: 25.47 }, { top: 84.45, left: 21.85 }, { top: 67.79, left: 88.30 },
            { top: 29.26, left: 32.34 }, { top: 59.83, left: 87.85 }, { top: 4.42, left: 33.65 },
            { top: 68.62, left: 77.13 }, { top: 55.62, left: 24.73 }, { top: 74.00, left: 57.98 },
            { top: 42.09, left: 79.25 }, { top: 35.53, left: 46.55 }, { top: 60.75, left: 96.63 },
            { top: 45.66, left: 5.29 }, { top: 72.72, left: 94.07 }, { top: 94.82, left: 73.84 },
            { top: 18.94, left: 20.94 }, { top: 98.47, left: 26.14 }, { top: 0.30, left: 96.01 },
            { top: 43.81, left: 50.32 }
          ];
          
          const durations = [3.82, 4.93, 2.66, 4.28, 3.98, 2.35, 3.27, 2.75, 4.10, 2.45, 4.67, 3.60, 4.65, 3.73, 3.11, 3.87, 3.51, 3.12, 4.74, 4.92, 2.89, 2.71, 3.91, 2.11, 4.77];
          const delays = [1.17, 0.32, 1.95, 0.44, 0.37, 1.32, 0.58, 1.63, 0.17, 0.49, 1.75, 0.96, 0.43, 0.86, 0.89, 1.16, 0.32, 1.18, 0.51, 1.04, 1.25, 1.37, 1.12, 1.37, 1.89];
          
          return (
            <div
              key={`quantum-${i}`}
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                top: `${positions[i].top}%`,
                left: `${positions[i].left}%`,
                backgroundColor: ['#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4', '#10b981'][i % 5],
                animationDuration: `${durations[i]}s`,
                animationDelay: `${delays[i]}s`
              }}
            />
          );
        })}
      </div>

      {/* Futuristic HUD elements */}
      <div className="absolute top-1/4 left-1/12 opacity-40">
        <div className="border border-cyan-400/50 rounded-lg p-4 bg-black/30 backdrop-blur-sm">
          <div className="text-cyan-400 font-mono text-xs space-y-1">
            <div className="flex justify-between">
              <span>SYSTEM:</span>
              <span className="text-green-400">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>STATUS:</span>
              <span className="text-yellow-400 animate-pulse">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span>POWER:</span>
              <span className="text-blue-400">100%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-1/12 opacity-40">
        <div className="border border-purple-400/50 rounded-lg p-4 bg-black/30 backdrop-blur-sm">
          <div className="text-purple-400 font-mono text-xs space-y-1">
            <div>▲ Innovation: 95%</div>
            <div>▲ Growth: 250%</div>
            <div>▲ Vision: MAX</div>
          </div>
        </div>
      </div>

      {/* Holographic text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text animate-pulse transform rotate-12">
          FUTURE
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-10px) rotate(1deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(-1deg); 
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-10px) rotate(0.5deg); 
            opacity: 0.25;
          }
        }
        
        @keyframes typewriter {
          0% { 
            width: 0;
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          50% { 
            width: 100%;
            opacity: 0.2;
          }
          100% { 
            width: 100%;
            opacity: 0.1;
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-typewriter {
          animation: typewriter infinite ease-in-out;
          white-space: nowrap;
          overflow: hidden;
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}
