"use client";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-12 text-center overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text animate-fade-in-up">
        Современные сайты и AI-боты для вашего бизнеса
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
        Разработка, автоматизация, интеграция искусственного интеллекта. Быстро. Качественно. WOW-результат.
      </p>
      <a 
        href="#contact"
        className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium shadow-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600"
      >
        Обсудить проект
      </a>
      <svg className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120vw] h-[40vh] pointer-events-none opacity-30" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#22d3ee" fillOpacity="0.2" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
} 