import Image from "next/image";

const projects = [
  { title: "Проект 1", desc: "Лендинг для IT-компании", img: "/next.svg" },
  { title: "Проект 2", desc: "Интернет-магазин электроники", img: "/vercel.svg" },
  { title: "Проект 3", desc: "AI-чат-бот для поддержки", img: "/file.svg" },
  { title: "Проект 4", desc: "SEO-продвижение сайта", img: "/globe.svg" },
  { title: "Проект 5", desc: "Автоматизация бизнес-процессов", img: "/window.svg" },
  { title: "Проект 6", desc: "Корпоративный сайт", img: "/next.svg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Портфолио</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 flex flex-col items-center">
              <div className="relative w-20 h-20 mb-4">
                <Image src={p.img} alt={p.title} fill className="object-contain" />
              </div>
              <div className="font-semibold text-lg mb-2">{p.title}</div>
              <div className="text-gray-500 text-center text-sm">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 