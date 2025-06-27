"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ValidationError } from "@/components/ui/ValidationError";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact-form";
import { 
  Send, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Zap,
  Shield,
  Heart,
  Star,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Loader2
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // React Hook Form с Zod валидацией
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur", // Валидация при потере фокуса
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      timeline: "",
      message: ""
    }
  });

  const whatsappUrl = `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу обсудить проект.`;

  // Обработчик отправки формы
  const onSubmit = useCallback(async (data: ContactFormData) => {
    console.log('Отправка формы:', data);
    setIsSubmitting(true);

    try {
      // Имитация отправки на сервер
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      reset(); // Сброс формы
      
      // Сброс состояния через 5 секунд
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [reset]);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: siteConfig.contacts.whatsapp,
      link: whatsappUrl,
      color: "text-green-600",
      bgColor: "bg-green-50",
      status: "online",
      responseTime: "5-10 минут"
    },
    {
      icon: Mail,
      title: "Email",
      value: siteConfig.contacts.email,
      link: `mailto:${siteConfig.contacts.email}`,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      status: "online",
      responseTime: "2-4 часа"
    },
    {
      icon: Phone,
      title: "Телефон",
      value: siteConfig.contacts.phone,
      link: `tel:${siteConfig.contacts.phone}`,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      status: "online",
      responseTime: "Сразу"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "Казахстан, Алматы",
      link: "#",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      status: "offline",
      responseTime: "По договоренности"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: siteConfig.contacts.instagram, label: "Instagram", color: "text-pink-600" },
    { icon: Facebook, href: "#", label: "Facebook", color: "text-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "text-sky-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "text-blue-700" }
  ];

  const budgetOptions = [
    "До 500,000 ₸",
    "500,000 - 1,000,000 ₸", 
    "1,000,000 - 2,000,000 ₸",
    "2,000,000 - 5,000,000 ₸",
    "Более 5,000,000 ₸"
  ];

  const timelineOptions = [
    "Срочно (1-2 недели)",
    "Быстро (1 месяц)",
    "Обычно (2-3 месяца)",
    "Не спеша (3+ месяцев)"
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50/50 via-blue-50/30 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1500" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Связаться с нами
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Готовы начать проект? Свяжитесь с нами любым удобным способом. 
            Мы ответим в течение 24 часов или раньше.
          </p>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24ч</div>
              <div className="text-sm text-gray-600">Время ответа</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Конфиденциальность</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Поддержка</div>
            </div>
            <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Рейтинг</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
              Способы связи
            </h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Status indicator */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${method.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`} />
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${method.bgColor} group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {method.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {method.status === 'online' ? 'Онлайн' : 'Офлайн'}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-1">{method.value}</p>
                        <p className="text-xs text-gray-500">Ответ: {method.responseTime}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(method.value, method.title)}
                          className="h-8 w-8 p-0"
                        >
                          {copiedField === method.title ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-8 w-8 p-0"
                        >
                          <a href={method.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <h4 className="font-semibold text-gray-900 mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm hover:shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-gray-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                asChild
                size="lg"
                className="w-full group rounded-xl py-6 text-lg font-semibold shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Написать в WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl relative overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                  Отправить заявку
                </CardTitle>
                <p className="text-gray-600">
                  Заполните форму, и мы свяжемся с вами в течение 24 часов
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Спасибо за заявку!
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        Мы получили ваше сообщение и свяжемся с вами в ближайшее время. 
                        Обычно мы отвечаем в течение 2-4 часов.
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>Ответ в течение 24ч</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-4 h-4" />
                          <span>Конфиденциально</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            {...register("name")}
                            type="text"
                            placeholder="Ваше имя *"
                            className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          <ValidationError error={errors.name?.message} />
                        </div>
                        <div>
                          <Input
                            {...register("email")}
                            type="email"
                            placeholder="Email *"
                            className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          <ValidationError error={errors.email?.message} />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="Телефон"
                            className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          <ValidationError error={errors.phone?.message} />
                        </div>
                        <div>
                          <Input
                            {...register("company")}
                            type="text"
                            placeholder="Компания"
                            className={`h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                              errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                            }`}
                          />
                          <ValidationError error={errors.company?.message} />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <select
                            {...register("budget")}
                            className="w-full h-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-3 bg-white"
                          >
                            <option value="">Бюджет проекта</option>
                            {budgetOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <select
                            {...register("timeline")}
                            className="w-full h-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-blue-500 px-3 bg-white"
                          >
                            <option value="">Сроки проекта</option>
                            {timelineOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <Textarea
                          {...register("message")}
                          placeholder="Расскажите о вашем проекте, целях и требованиях *"
                          className={`min-h-[120px] rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 ${
                            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                        />
                        <ValidationError error={errors.message?.message} />
                      </div>

                      {/* Общие ошибки формы */}
                      {Object.keys(errors).length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 bg-red-50 border border-red-200 rounded-lg"
                        >
                          <div className="flex items-center gap-2 text-red-600 text-sm">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Пожалуйста, исправьте ошибки в форме</span>
                          </div>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting || !isValid}
                        className="w-full group rounded-xl py-6 text-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                            Отправляем...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Отправить заявку
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Нужна консультация?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Не уверены, какая услуга подходит именно вам? Запишитесь на бесплатную консультацию, 
              и мы поможем определить оптимальное решение для вашего бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="group rounded-xl px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Бесплатная консультация
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl px-8 py-6 text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 transition-all duration-300"
              >
                <a href={`mailto:${siteConfig.contacts.email}?subject=Консультация`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Написать на почту
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 