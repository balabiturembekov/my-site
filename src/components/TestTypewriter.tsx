"use client";

import { Typewriter } from "@/components/features/Typewriter";

export default function TestTypewriter() {
  return (
    <div className="p-8 bg-white">
      <h1 className="text-2xl font-bold mb-4">Тест Typewriter</h1>
      <div className="text-lg">
        <Typewriter 
          words={["Привет", "Мир", "Тест"]}
          speed={150}
          delay={1000}
          color="blue"
        />
      </div>
    </div>
  );
} 