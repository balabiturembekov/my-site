"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const shapes = [
  "M0,0 L100,0 L100,100 L0,100 Z", // Square
  "M50,0 L100,50 L50,100 L0,50 Z", // Diamond
  "M50,0 L100,100 L0,100 Z", // Triangle
  "M25,0 C25,0 75,0 75,0 C75,0 100,25 100,25 C100,25 100,75 100,75 C100,75 75,100 75,100 C75,100 25,100 25,100 C25,100 0,75 0,75 C0,75 0,25 0,25 C0,25 25,0 25,0 Z", // Rounded Square
  "M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z", // Circle
  "M20,0 L80,0 C90,0 100,10 100,20 L100,80 C100,90 90,100 80,100 L20,100 C10,100 0,90 0,80 L0,20 C0,10 10,0 20,0 Z", // Rounded Rectangle
];

const colors = [
  "from-blue-400 to-purple-500",
  "from-purple-400 to-pink-500",
  "from-pink-400 to-red-500",
  "from-red-400 to-orange-500",
  "from-orange-400 to-yellow-500",
  "from-yellow-400 to-green-500",
  "from-green-400 to-blue-500",
];

// Фиксированные позиции для частиц
const particlePositions = [
  { left: 82.6, top: 93.9 },
  { left: 67.5, top: 34.8 },
  { left: 8.2, top: 70.4 },
  { left: 77.7, top: 58.2 },
  { left: 38.9, top: 28.6 },
  { left: 12.1, top: 24.1 },
  { left: 41.8, top: 48.0 },
  { left: 93.9, top: 86.7 },
  { left: 76.0, top: 38.8 },
  { left: 3.7, top: 84.8 },
  { left: 4.4, top: 7.2 },
  { left: 56.1, top: 3.8 },
];

export function MorphingShapes() {
  const [currentShape, setCurrentShape] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const animate = () => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
      setCurrentColor((prev) => (prev + 1) % colors.length);
    };

    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h3 className="text-2xl font-bold mb-2">Интерактивные формы</h3>
            <p className="text-white/70">Загрузка...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Main Morphing Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-64 h-64"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            className="absolute inset-0"
          >
            <motion.path
              d={shapes[currentShape]}
              fill="url(#gradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" className="text-blue-400" />
                <stop offset="100%" stopColor="currentColor" className="text-purple-500" />
              </linearGradient>
            </defs>
          </motion.svg>
          
          {/* Glow Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors[currentColor]} blur-3xl opacity-30`}
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 180 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Floating Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <motion.path
              d={shapes[i % shapes.length]}
              fill="currentColor"
              className={`text-white/20`}
              animate={{
                fill: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.2)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Interactive Particles */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold mb-2">Интерактивные формы</h3>
          <p className="text-white/70">Наведите курсор для взаимодействия</p>
        </motion.div>
      </div>

      {/* Control Panel */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        {shapes.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white/30 ${
              currentShape === index ? 'bg-white' : 'bg-white/20'
            }`}
            onClick={() => setCurrentShape(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
} 