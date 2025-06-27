"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Clock, Users, ArrowRight } from "lucide-react";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { siteConfig } from "@/lib/site-config";

const categories = ["Все", "Web", "Mobile", "AI", "E-commerce", "CRM", "Landing"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить похожий проект.`;

  const filteredPortfolio = useMemo(() => {
    return activeCategory === "Все" 
      ? siteConfig.portfolio 
      : siteConfig.portfolio.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Статистика портфолио
  const portfolioStats = useMemo(() => {
    const total = siteConfig.portfolio.length;
    const completed = siteConfig.portfolio.length;
    
    // Безопасный расчет средней конверсии
    const avgConversion = total > 0 
      ? siteConfig.portfolio.reduce((acc, project) => {
          const stats = project.stats as Record<string, string>;
          const conversionStr = stats?.conversion || '0';
          const conversion = parseFloat(conversionStr.replace('%', '') || '0');
          return acc + conversion;
        }, 0) / total
      : 0;
    
    // Безопасный расчет среднего времени загрузки
    const avgLoadTime = total > 0
      ? siteConfig.portfolio.reduce((acc, project) => {
          const stats = project.stats as Record<string, string>;
          const loadTimeStr = stats?.loadTime || '0';
          const loadTime = parseFloat(loadTimeStr.replace('s', '') || '0');
          return acc + loadTime;
        }, 0) / total
      : 0;

    return {
      total,
      completed,
      avgConversion: avgConversion.toFixed(1),
      avgLoadTime: avgLoadTime.toFixed(1)
    };
  }, []);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="absolute left-0 top-0 w-full h-full opacity-30 animate-pulse" width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="100" r="60" fill="#60A5FA" fillOpacity="0.12" />
          <circle cx="1200" cy="200" r="80" fill="#22D3EE" fillOpacity="0.10" />
          <circle cx="700" cy="250" r="40" fill="#818CF8" fillOpacity="0.10" />
        </svg>
      </div>
      {/* SVG Wave Bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24 text-cyan-100 z-10" viewBox="0 0 1440 320" fill="currentColor">
        <path d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
      <div className="relative z-20 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Наши проекты
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Реализованные проекты, которые помогли нашим клиентам достичь бизнес-целей
          </p>

          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{portfolioStats.total}</div>
              <div className="text-sm text-gray-600">Проектов</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{portfolioStats.avgConversion}%</div>
              <div className="text-sm text-gray-600">Средняя конверсия</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{portfolioStats.avgLoadTime}s</div>
              <div className="text-sm text-gray-600">Средняя загрузка</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{portfolioStats.completed}</div>
              <div className="text-sm text-gray-600">Завершено</div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-blue-300"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {filteredPortfolio.map((project, index) => {
            // Добавляем дополнительные данные для карточек
            const projectData = {
              ...project,
              status: index % 3 === 0 ? "Завершен" : index % 3 === 1 ? "В разработке" : "Планируется",
              completionDate: index % 3 === 0 ? "Декабрь 2024" : index % 3 === 1 ? "Февраль 2025" : "Март 2025",
              client: index % 2 === 0 ? "TechCorp" : "StartupXYZ"
            };
            
            return (
              <PortfolioCard
                key={index}
                title={projectData.title || ''}
                description={projectData.description || ''}
                category={projectData.category || ''}
                image={projectData.image || '/placeholder.png'}
                link={projectData.link || '#'}
                technologies={projectData.technologies as unknown as string[] || []}
                stats={projectData.stats || {}}
                status={projectData.status}
                completionDate={projectData.completionDate}
                client={projectData.client}
                className="h-full"
              />
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg mb-4">
              Проекты в категории &quot;{activeCategory}&quot; пока в разработке
            </div>
            <Button
              onClick={() => setActiveCategory("Все")}
              variant="outline"
              className="rounded-full"
            >
              Посмотреть все проекты
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Хотите похожий проект?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Обсудим ваши идеи и создадим уникальное решение для вашего бизнеса
              </p>
              <Button 
                asChild
                size="lg"
                className="group rounded-full px-8 py-6 text-lg font-semibold bg-white text-blue-600 hover:bg-gray-100 border-0 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Обсудить проект
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 