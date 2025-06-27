"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/ui/cards/PortfolioCard";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const categories = ["Все", "Web", "Mobile", "AI", "E-commerce", "CRM", "Landing"];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить похожий проект.`;

  const filteredPortfolio = activeCategory === "Все" 
    ? siteConfig.portfolio 
    : siteConfig.portfolio.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Наши проекты
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Реализованные проекты, которые помогли нашим клиентам достичь бизнес-целей
          </p>

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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
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
          {filteredPortfolio.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              className="h-full"
            />
          ))}
        </motion.div>

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