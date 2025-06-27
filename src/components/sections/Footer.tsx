"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить проект.`;

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="font-bold text-2xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Создаем современные digital-решения для развития вашего бизнеса. 
              От сайтов до AI-интеграций — мы помогаем компаниям расти и развиваться.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={siteConfig.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${siteConfig.contacts.email}`}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`tel:${siteConfig.contacts.phone}`}
                whileHover={{ y: -2, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Услуги</h3>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 4).map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.contacts.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.contacts.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>WhatsApp</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-sm">
            © 2025 {siteConfig.name}. Все права защищены.
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать
              </a>
            </Button>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 