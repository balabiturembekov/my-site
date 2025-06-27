"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Handshake, FileText, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PublicOffer() {
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
                <Handshake className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Публичная оферта</h1>
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
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Публичная оферта на оказание услуг</h2>
                  <p className="text-gray-600 mb-6">
                    Настоящая публичная оферта (далее &quot;Оферта&quot;) содержит все существенные условия договора.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-blue-600 rounded-full" />
                  1. Общие положения
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Исполнитель:</strong> ООО &quot;Digital Studio&quot; (ИНН: 1234567890, ОГРН: 1234567890123)
                    </p>
                    <p>
                      <strong>Адрес:</strong> 123456, г. Алматы, ул. Аршалы, д. 58, оф. 2
                    </p>
                    <p>
                      <strong>Телефон:</strong> +7 (700) 441-19-94
                    </p>
                    <p>
                      <strong>Email:</strong> turembek_b@icloud.com
                    </p>
                    <p>
                      <strong>Сайт:</strong> www.example.com
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-green-600 rounded-full" />
                  2. Предмет договора
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <p className="text-gray-700 mb-4">
                    Исполнитель обязуется оказать Заказчику следующие услуги:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Разработка веб-сайтов и веб-приложений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Создание мобильных приложений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>AI-интеграции и автоматизация процессов</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Консультации по digital-стратегии</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Техническая поддержка и обслуживание</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-purple-600 rounded-full" />
                  3. Порядок заключения договора
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Заявка</h3>
                        <p className="text-gray-700">Заказчик отправляет заявку через сайт, email или телефон</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Обсуждение</h3>
                        <p className="text-gray-700">Согласование технического задания и стоимости</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Оплата</h3>
                        <p className="text-gray-700">Внесение предоплаты в размере 50% от стоимости</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Акцепт</h3>
                        <p className="text-gray-700">Договор считается заключенным с момента оплаты</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  4. Стоимость и порядок оплаты
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                        <h3 className="font-semibold text-gray-900">Стоимость услуг</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Определяется индивидуально для каждого проекта</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Указывается в коммерческом предложении</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Не включает НДС (применяется УСН)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <h3 className="font-semibold text-gray-900">Порядок оплаты</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>50% - при заключении договора</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>50% - после сдачи проекта</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Способы: карта, перевод, наличные</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full" />
                  5. Сроки выполнения
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Сроки выполнения работ зависят от сложности проекта и согласовываются индивидуально:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                        <h4 className="font-semibold text-red-700 mb-2">Лендинг</h4>
                        <p className="text-red-600 text-sm">1-2 недели</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                        <h4 className="font-semibold text-orange-700 mb-2">Корпоративный сайт</h4>
                        <p className="text-orange-600 text-sm">2-4 недели</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="font-semibold text-blue-700 mb-2">Веб-приложение</h4>
                        <p className="text-blue-600 text-sm">1-3 месяца</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      * Точные сроки указываются в техническом задании и могут быть скорректированы в процессе работы.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-indigo-600 rounded-full" />
                  6. Права и обязанности сторон
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-blue-600">Обязанности Исполнителя:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Выполнить работы в установленные сроки</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Обеспечить качество выполненных работ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Предоставить техническую поддержку</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>Сохранять конфиденциальность информации</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-green-600">Обязанности Заказчика:</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Своевременно оплачивать услуги</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Предоставлять необходимую информацию</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Принимать выполненные работы</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Не передавать права третьим лицам</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-teal-600 rounded-full" />
                  7. Ответственность сторон
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ответственность Исполнителя:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span>За нарушение сроков - штраф 0.1% от стоимости за каждый день просрочки</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span>За некачественное выполнение - бесплатное исправление</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Ответственность Заказчика:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span>За нарушение сроков оплаты - пеня 0.1% от суммы за каждый день</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span>За отказ от принятия работ - оплата 100% стоимости</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gray-600 rounded-full" />
                  8. Заключительные положения
                </h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Срок действия оферты:</strong> бессрочно, до отзыва Исполнителем
                    </p>
                    <p>
                      <strong>Применимое право:</strong> законодательство Республики Казахстан
                    </p>
                    <p>
                      <strong>Подсудность:</strong> по месту нахождения Исполнителя
                    </p>
                    <p>
                      <strong>Изменения:</strong> оферта может быть изменена Исполнителем с уведомлением Заказчика
                    </p>
                    <p>
                      <strong>Контакты:</strong> все вопросы решаются путем переговоров
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Оплачивая услуги, вы подтверждаете, что ознакомлены и согласны с условиями данной оферты.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Договор считается заключенным с момента оплаты</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 