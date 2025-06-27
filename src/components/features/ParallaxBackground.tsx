"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: y1, rotate: rotate1, scale: scale1 }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
      />
      
      <motion.div
        style={{ y: y2, rotate: rotate2, scale: scale2 }}
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
      />
      
      <motion.div
        style={{ y: y3, rotate: rotate3, scale: scale3 }}
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      />
      
      <motion.div
        style={{ y: y4, rotate: rotate1, scale: scale1 }}
        className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
      />
      
      <motion.div
        style={{ y: y5, rotate: rotate2, scale: scale2 }}
        className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
      />

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full"
      />
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(16,185,129,0.05)_0%,transparent_50%)]" />
    </div>
  );
} 