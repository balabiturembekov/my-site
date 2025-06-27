"use client";

import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
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
              <div className="p-2 rounded-lg bg-green-100">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Условия использования</h1>
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
            <div className="bg-green-50 rounded-2xl p-8 mb-8 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-green-100">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Добро пожаловать!</h2>
                  <p className="text-gray-700">
                    Используя наш сайт и услуги, вы соглашаетесь с данными условиями использования. 
                    Пожалуйста, внимательно ознакомьтесь с ними перед использованием наших услуг.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full" />
                  1. Принятие условий
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Используя наш сайт, вы подтверждаете, что:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Вам исполнилось 18 лет или вы используете сайт с согласия родителей</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Вы согласны соблюдать все применимые законы и правила</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Вы не будете использовать сайт для незаконной деятельности</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-600 rounded-full" />
                  2. Описание услуг
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-green-100">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Наши услуги включают:</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Разработку веб-сайтов и веб-приложений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Создание мобильных приложений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>AI-интеграции и автоматизацию</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Консультации по digital-стратегии</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Техническую поддержку и обслуживание</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-purple-600 rounded-full" />
                  3. Права и обязанности пользователей
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-green-600">Ваши права:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Получать качественные услуги</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Получать техническую поддержку</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Расторгнуть договор в установленном порядке</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-red-600">Ваши обязанности:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Предоставлять достоверную информацию</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Соблюдать условия договора</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Не нарушать права других пользователей</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  4. Интеллектуальная собственность
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Все права на интеллектуальную собственность:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Наш контент:</strong> принадлежит нам и защищен авторским правом</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Ваш контент:</strong> остается вашей собственностью</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Разработанные решения:</strong> передаются вам после полной оплаты</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span><strong>Технологии и фреймворки:</strong> остаются в нашем портфолио</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full" />
                  5. Ограничение ответственности
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-red-100">
                      <Shield className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Важная информация</h3>
                      <p className="text-gray-700">
                        Мы стремимся предоставлять качественные услуги, но не можем гарантировать:
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Бесперебойную работу сайта 100% времени</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Отсутствие ошибок в программном коде</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Конкретные результаты бизнеса</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Совместимость со всеми устройствами и браузерами</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    Наша ответственность ограничена суммой, уплаченной за услуги.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full" />
                  6. Оплата и возврат
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Условия оплаты:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Предоплата 50% при заключении договора</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Оплата 50% после сдачи проекта</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Принимаем банковские карты и переводы</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Политика возврата:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Возврат в течение 14 дней</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Учитывается объем выполненной работы</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Комиссия за обработку 5%</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-teal-600 rounded-full" />
                  7. Изменение условий
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Мы оставляем за собой право изменять данные условия использования:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Изменения вступают в силу с момента публикации</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Уведомляем о значительных изменениях по email</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Продолжение использования означает согласие с изменениями</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gray-600 rounded-full" />
                  8. Контакты
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gray-100">
                      <FileText className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Вопросы по условиям</h3>
                      <p className="text-gray-700 mb-4">
                        Если у вас есть вопросы относительно данных условий использования, 
                        свяжитесь с нами:
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Email:</strong> legal@example.com</p>
                        <p><strong>Телефон:</strong> +7 (999) 123-45-67</p>
                        <p><strong>Адрес:</strong> Москва, ул. Примерная, д. 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-600 text-center">
                Используя наш сайт, вы подтверждаете, что прочитали, поняли и согласны с данными условиями использования.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 