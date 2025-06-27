"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              <div className="p-2 rounded-lg bg-blue-100">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Политика конфиденциальности</h1>
                <p className="text-gray-600">Последнее обновление: 15 января 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Ваша конфиденциальность важна для нас</h2>
                  <p className="text-gray-700">
                    Мы стремимся защищать вашу конфиденциальность и обеспечивать безопасность ваших персональных данных. 
                    Данная политика описывает, как мы собираем, используем и защищаем вашу информацию.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full" />
                  1. Сбор информации
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Мы собираем следующие типы информации:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Персональные данные:</strong> имя, email, телефон, адрес</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Техническая информация:</strong> IP-адрес, тип браузера, операционная система</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Данные использования:</strong> страницы, которые вы посещаете, время на сайте</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-600 rounded-full" />
                  2. Использование информации
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Собранная информация используется для:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Предоставления запрошенных услуг и поддержки</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Улучшения качества наших услуг</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Отправки важных уведомлений и обновлений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Анализа использования сайта для оптимизации</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-purple-600 rounded-full" />
                  3. Защита данных
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Меры безопасности</h3>
                      <p className="text-gray-700">
                        Мы применяем современные технологии шифрования и безопасности для защиты ваших данных:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>SSL-шифрование для всех передаваемых данных</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Регулярные обновления систем безопасности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Ограниченный доступ к персональным данным</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Мониторинг и логирование доступа к данным</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  4. Передача данных третьим лицам
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам, за исключением:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Когда это необходимо для предоставления услуг (например, хостинг-провайдеры)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>По требованию закона или судебных органов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>С вашего явного согласия</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full" />
                  5. Ваши права
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Вы имеете право:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Получить доступ к своим персональным данным</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Исправить неточные или неполные данные</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Удалить свои персональные данные</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Отозвать согласие на обработку данных</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Подать жалобу в надзорный орган</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full" />
                  6. Cookies и аналитика
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Мы используем cookies и аналитические инструменты для:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Запоминания ваших предпочтений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Анализа использования сайта</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Улучшения производительности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Персонализации контента</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    Вы можете отключить cookies в настройках браузера, но это может повлиять на функциональность сайта.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-teal-600 rounded-full" />
                  7. Контакты
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-teal-100">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Вопросы по конфиденциальности</h3>
                      <p className="text-gray-700 mb-4">
                        Если у вас есть вопросы относительно данной политики конфиденциальности, 
                        свяжитесь с нами:
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Email:</strong> turembek_b@icloud.com</p>
                        <p><strong>Телефон:</strong> +7 (700) 441-19-94</p>
                        <p><strong>Адрес:</strong> Алматы, ул. Аршалы, д. 58</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-center">
                Данная политика конфиденциальности может быть обновлена. 
                Рекомендуем периодически проверять эту страницу на наличие изменений.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 