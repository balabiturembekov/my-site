"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/cards/ServiceCard";
import { Code, Settings, Bot, BarChart, Brain, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap = {
  Code,
  Settings,
  Bot,
  BarChart,
  Brain,
};

export function Services() {
  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить услуги.`;

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
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
            Наши услуги
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Полный спектр digital-услуг для развития вашего бизнеса с использованием современных технологий
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ServiceCard
                key={index}
                icon={IconComponent}
                title={service.title}
                description={service.description}
                features={service.features}
                className="h-full"
              />
            );
          })}
        </div>

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
                Готовы начать проект?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Обсудим ваши задачи и предложим оптимальное решение для достижения бизнес-целей
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