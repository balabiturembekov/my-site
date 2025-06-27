import { Code, Bot, Settings, BarChart, Brain } from "lucide-react";

const services = [
  { icon: Code, title: "Разработка сайтов", desc: "Сайты, лендинги, интернет-магазины под ключ." },
  { icon: Settings, title: "Автоматизация", desc: "Бизнес-процессы, интеграции, CRM, API." },
  { icon: Bot, title: "Чат-боты", desc: "Telegram, WhatsApp, AI-боты для поддержки и продаж." },
  { icon: BarChart, title: "SEO", desc: "Продвижение, оптимизация, рост трафика." },
  { icon: Brain, title: "AI-интеграция", desc: "Внедрение искусственного интеллекта в бизнес." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Услуги</h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow group">
              <s.icon className="w-10 h-10 mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-lg mb-2">{s.title}</div>
              <div className="text-gray-500 text-center text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 