"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Users
} from "lucide-react";

const benefitsData = [
  {
    icon: Clock,
    title: "Скорость и соблюдение сроков",
    description: "Гарантируем выполнение проектов в оговоренные сроки с высоким качеством",
  },
  {
    icon: Shield,
    title: "Высокое качество и современные технологии",
    description: "Используем передовые технологии и лучшие практики разработки",
  },
  {
    icon: Clock,
    title: "Поддержка и сопровождение",
    description: "Обеспечиваем техническую поддержку и сопровождение после запуска",
  },
  {
    icon: Users,
    title: "Индивидуальный подход к каждому клиенту",
    description: "Учитываем специфику вашего бизнеса и создаем уникальные решения",
  },
];

export function Benefits() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
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
            Почему выбирают нас?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Мы не просто создаем сайты и приложения — мы помогаем бизнесу расти и развиваться
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
                
                {/* Градиентный фон */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "50+", label: "Успешных проектов" },
                  { number: "98%", label: "Довольных клиентов" },
                  { number: "24/7", label: "Техподдержка" },
                  { number: "5+", label: "Лет опыта" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 