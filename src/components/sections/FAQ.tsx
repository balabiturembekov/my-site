"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function FAQ() {
  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! У меня есть вопросы по проекту.`;

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Часто задаваемые вопросы
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ответы на самые популярные вопросы о наших услугах и процессе работы
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {siteConfig.faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Остались вопросы?
              </h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами, и мы ответим на все ваши вопросы и поможем выбрать оптимальное решение
              </p>
              <Button 
                asChild
                size="lg"
                className="group rounded-full px-8 py-6 text-lg font-semibold bg-white text-purple-600 hover:bg-gray-100 border-0 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Задать вопрос
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