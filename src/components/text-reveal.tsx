'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({ 
  children, 
  delay = 0,
  className = '',
  gradient = false
}: { 
  children: string;
  delay?: number;
  className?: string;
  gradient?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + children[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 50 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, delay]);

  const textClass = gradient 
    ? "bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className={className}
    >
      <span className={textClass}>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-1em bg-current ml-1"
        />
      </span>
    </motion.div>
  );
}
