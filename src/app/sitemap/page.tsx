"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Map, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sitemap() {
  const siteStructure = [
    {
      title: "Главная",
      href: "/",
      description: "Главная страница сайта",
      icon: "🏠"
    },
    {
      title: "Услуги",
      href: "/#services",
      description: "Наши услуги и сервисы",
      icon: "⚙️",
      children: [
        { title: "Веб-разработка", href: "/#services", description: "Создание сайтов и веб-приложений" },
        { title: "Мобильные приложения", href: "/#services", description: "Разработка iOS и Android приложений" },
        { title: "AI-интеграции", href: "/#services", description: "Искусственный интеллект и автоматизация" },
        { title: "Консультации", href: "/#services", description: "Digital-стратегия и консалтинг" }
      ]
    },
    {
      title: "Портфолио",
      href: "/#portfolio",
      description: "Наши проекты и работы",
      icon: "💼",
      children: [
        { title: "Веб-сайты", href: "/#portfolio", description: "Корпоративные сайты и лендинги" },
        { title: "Мобильные приложения", href: "/#portfolio", description: "iOS и Android приложения" },
        { title: "E-commerce", href: "/#portfolio", description: "Интернет-магазины и платформы" },
        { title: "AI-проекты", href: "/#portfolio", description: "Проекты с искусственным интеллектом" }
      ]
    },
    {
      title: "О нас",
      href: "/#about",
      description: "Информация о компании",
      icon: "👥"
    },
    {
      title: "Контакты",
      href: "/#contact",
      description: "Связаться с нами",
      icon: "📞"
    },
    {
      title: "FAQ",
      href: "/#faq",
      description: "Часто задаваемые вопросы",
      icon: "❓"
    }
  ];

  const legalPages = [
    {
      title: "Политика конфиденциальности",
      href: "/privacy",
      description: "Как мы защищаем ваши данные",
      icon: "🔒"
    },
    {
      title: "Условия использования",
      href: "/terms",
      description: "Правила использования сайта",
      icon: "📋"
    },
    {
      title: "Публичная оферта",
      href: "/offer",
      description: "Условия оказания услуг",
      icon: "📄"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="rounded-full">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Назад
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Map className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Карта сайта</h1>
                <p className="text-gray-600">
                  Карта сайта поможет вам быстро найти нужную информацию и навигацию по всем разделам нашего сайта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Introduction */}
            <div className="bg-purple-50 rounded-2xl p-8 mb-12 border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Map className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Навигация по сайту</h2>
                  <p className="text-gray-700 mb-4">
                    Здесь вы найдете ссылки на все разделы нашего сайта. Используйте карту сайта для быстрой навигации.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Основные разделы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Правовая информация</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Подразделы</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Sections */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full" />
                  Основные разделы
                </h2>
                <div className="space-y-4">
                  {siteStructure.map((section, index) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{section.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{section.title}</h3>
                            <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                              <Link href={section.href}>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{section.description}</p>
                          
                          {section.children && (
                            <div className="space-y-2">
                              {section.children.map((child, childIndex) => (
                                <motion.div
                                  key={child.title}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: (index * 0.1) + (childIndex * 0.05) }}
                                  className="flex items-center gap-3 pl-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-sm font-medium text-gray-700">{child.title}</span>
                                      <Button variant="ghost" size="sm" asChild className="h-5 px-1">
                                        <Link href={child.href}>
                                          <ArrowRight className="w-3 h-3" />
                                        </Link>
                                      </Button>
                                    </div>
                                    <p className="text-xs text-gray-500">{child.description}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Legal Pages */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-600 rounded-full" />
                  Правовая информация
                </h2>
                <div className="space-y-4">
                  {legalPages.map((page, index) => (
                    <motion.div
                      key={page.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{page.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{page.title}</h3>
                            <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                              <Link href={page.href}>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-gray-600 text-sm">{page.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Полезные ссылки</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Техническая поддержка: support@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Коммерческие вопросы: sales@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Партнерство: partner@example.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Быстрая навигация</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button asChild variant="outline" className="h-12">
                  <Link href="/#services">Услуги</Link>
                </Button>
                <Button asChild variant="outline" className="h-12">
                  <Link href="/#portfolio">Портфолио</Link>
                </Button>
                <Button asChild variant="outline" className="h-12">
                  <Link href="/#contact">Контакты</Link>
                </Button>
                <Button asChild variant="outline" className="h-12">
                  <Link href="/#faq">FAQ</Link>
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-center text-sm">
                Карта сайта обновляется регулярно. Если вы не можете найти нужную информацию, 
                свяжитесь с нами через раздел &quot;Контакты&quot;.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 