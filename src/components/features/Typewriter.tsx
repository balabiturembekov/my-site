"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
  color?: "blue" | "purple" | "green" | "orange" | "gradient";
}

export function Typewriter({ 
  words, 
  speed = 100, 
  delay = 2000, 
  className = "",
  color = "gradient"
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const getColorClass = () => {
    switch (color) {
      case "blue": return "text-blue-600";
      case "purple": return "text-purple-600";
      case "green": return "text-green-600";
      case "orange": return "text-orange-600";
      case "gradient": 
      default: return "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600";
    }
  };

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (!isDeleting) {
      // Печатаем
      if (charIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        // Ждем перед удалением
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
        return () => clearTimeout(timer);
      }
    } else {
      // Удаляем
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        // Переходим к следующему слову
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
        setCharIndex(0);
      }
    }
  }, [charIndex, isDeleting, wordIndex, words, speed, delay]);

  return (
    <div className={`inline-block ${className}`}>
      <span className={getColorClass()}>
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="ml-1 text-blue-600"
      >
        |
      </motion.span>
    </div>
  );
} 