import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "@/components/features/Typewriter";
import Image from "next/image";

const categories = ["Все", "Web", "Mobile", "AI", "E-commerce", "CRM", "Landing"];
const projects = [
  {
    title: "Coffee websait",
    desc: "Современный landing page для кофейного бизнеса",
    img: "/coffee.png",
    category: "Web",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://coffee.example.com"
  },
  {
    title: "Halloween Website",
    desc: "Лендинг для Хэллоуина",
    img: "/halloween.png",
    category: "Landing",
    tech: ["React", "Styled Components"],
    link: ""
  },
  {
    title: "Corporate Website",
    desc: "Корпоративный сайт с современным дизайном",
    img: "/corporate.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "shadcn/ui"],
    link: "https://corporate.example.com"
  },
];

type Project = typeof projects[number];

function PortfolioBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-80" />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 blur-2xl"
            style={{
              width: `${16 + Math.random() * 32}px`,
              height: `${16 + Math.random() * 32}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.7, 0.3, 0.7],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 4
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  if (!project) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold"
          aria-label="Закрыть"
        >
          ×
        </button>
        <div className="relative w-full h-56 mb-4 rounded-xl overflow-hidden">
          <Image src={project.img} alt={project.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
        </div>
        <div className="font-bold text-2xl mb-2 text-blue-900">{project.title}</div>
        <div className="text-gray-600 mb-4">{project.desc}</div>
        <div className="mb-4">
          <div className="font-semibold text-sm text-gray-500 mb-1">Технологии:</div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{t}</span>
            ))}
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Перейти на сайт
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Все");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const filtered = active === "Все" ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      <PortfolioBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8 text-center">
          <Typewriter 
            words={["Наши проекты", "Портфолио", "Лучшие работы"]}
            speed={120}
            delay={2500}
            color="blue"
            className="text-4xl md:text-5xl font-extrabold mb-2"
          />
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mb-4" />
          <div className="text-gray-500 text-lg max-w-2xl mx-auto">
            Реализованные проекты, которые помогли нашим клиентам достичь бизнес-целей
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border transition-all font-medium text-sm shadow-sm focus:outline-none
                ${active === cat ? "bg-blue-600 text-white border-blue-600 scale-105" : "bg-white/80 text-blue-700 border-blue-200 hover:bg-blue-50"}`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.08 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
                className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.03] transition-all group border border-blue-100 cursor-pointer"
                onClick={() => setModalProject(p)}
              >
                <div className="relative w-full h-56">
                  <Image src={p.img} alt={p.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="font-bold text-lg mb-1 text-blue-900 group-hover:text-blue-700 transition-colors">{p.title}</div>
                  <div className="text-gray-600 text-sm mb-2">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {modalProject && (
          <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
} 