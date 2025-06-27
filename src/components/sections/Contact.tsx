"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить проект.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Здесь можно добавить логику отправки формы
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: siteConfig.contacts.whatsapp,
      link: whatsappUrl,
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.contacts.email,
      link: `mailto:${siteConfig.contacts.email}`,
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Телефон",
      value: siteConfig.contacts.phone,
      link: `tel:${siteConfig.contacts.phone}`,
      color: "text-purple-600",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
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
            Связаться с нами
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Готовы начать проект? Свяжитесь с нами любым удобным способом
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Способы связи
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="block"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gray-100 group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                asChild
                size="lg"
                className="w-full group rounded-xl py-6 text-lg font-semibold shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Написать в WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Отправить заявку
                </CardTitle>
                <p className="text-gray-600">
                  Заполните форму, и мы свяжемся с вами в течение 24 часов
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Спасибо за заявку!
                    </h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами в ближайшее время
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Ваше имя"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Расскажите о вашем проекте"
                        className="min-h-[120px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group rounded-xl py-6 text-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 hover:scale-105"
                    >
                      <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Отправить заявку
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 