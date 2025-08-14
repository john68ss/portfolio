'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SmoothScroll from "../components/smooth-scroll";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <SmoothScroll />
      
      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Sophisticated backdrop with blur and gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-gray-950/90 to-black/95 backdrop-blur-xl border-b border-gray-800/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-purple-950/5 to-indigo-950/10" />
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.03),transparent_50%)]" />
        
        <div className="relative container mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Link href="/" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-indigo-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative px-4 py-2 bg-gradient-to-br from-gray-900/80 via-slate-900/70 to-gray-900/80 rounded-xl border border-gray-700/50 group-hover:border-violet-500/30 transition-all duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent">
                    IJJG
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative group px-6 py-3 text-lg font-medium transition-all duration-300 rounded-xl ${
                      pathname === item.href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {/* Active/Hover background */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-violet-600/30 via-purple-600/20 to-indigo-600/30 border border-violet-500/30"
                        : "bg-gray-800/20 border border-gray-700/20 group-hover:bg-gradient-to-r group-hover:from-violet-600/20 group-hover:via-purple-600/10 group-hover:to-indigo-600/20 group-hover:border-violet-500/20"
                    }`} />
                    
                    {/* Text */}
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full shadow-lg shadow-violet-400/50"
                        style={{ x: "-50%" }}
                      />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-violet-500/5 group-hover:via-purple-500/3 group-hover:to-indigo-500/5 transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:hidden relative group p-3 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-violet-500/30 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <div className="relative w-6 h-6 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 0,
                  }}
                  className="w-full h-0.5 bg-gradient-to-r from-gray-300 to-violet-300 block transition-all rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  className="w-full h-0.5 bg-gradient-to-r from-gray-300 to-violet-300 block transition-all rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -8 : 0,
                  }}
                  className="w-full h-0.5 bg-gradient-to-r from-gray-300 to-violet-300 block transition-all rounded-full"
                />
              </div>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden mt-6 pb-6 border-t border-gray-700/50"
              >
                <div className="flex flex-col space-y-3 pt-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group relative block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? "text-white bg-gradient-to-r from-violet-600/30 via-purple-600/20 to-indigo-600/30 border border-violet-500/30"
                            : "text-gray-300 hover:text-white bg-gray-800/20 border border-gray-700/20 hover:bg-gradient-to-r hover:from-violet-600/20 hover:via-purple-600/10 hover:to-indigo-600/20 hover:border-violet-500/20"
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-black via-gray-950 to-black border-t border-gray-800/60 py-12 px-6">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/10 via-purple-950/5 to-indigo-950/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.03),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900/80 via-slate-900/70 to-gray-900/80 rounded-xl border border-gray-700/50">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-100 via-violet-200 to-purple-300 bg-clip-text text-transparent mr-4">
                  IJJG
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent mx-4" />
                <span className="text-gray-300 font-medium">
                  Ionut John Junior Gheban
                </span>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-lg mb-4"
            >
              CEO & Founder | Full-Stack Developer | AI Specialist
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto"
            >
              Building innovative solutions with cutting-edge technology. 
              Leading JUNIOR IT TECH HUB SRL towards a digital future.
            </motion.p>
          </div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'AI/ML', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-full border border-gray-700/50 hover:border-violet-500/30 hover:text-violet-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Copyright and links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800/60 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © 2025 Ionut John Junior Gheban. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <a
                  href="mailto:ghebanionutjohnjunior@gmail.com"
                  className="text-gray-500 hover:text-violet-400 transition-colors duration-300 text-sm"
                >
                  ghebanionutjohnjunior@gmail.com
                </a>
                <div className="w-px h-4 bg-gray-700" />
                <a
                  href="tel:+40771554640"
                  className="text-gray-500 hover:text-violet-400 transition-colors duration-300 text-sm"
                >
                  +40 771 554 640
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
