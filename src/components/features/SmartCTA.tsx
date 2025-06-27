"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  TrendingUp, 
  Users, 
  Star, 
  Sparkles, 
  MessageCircle,
  Phone,
  X
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface CTAMessage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  urgency: string;
  action: string;
  link: string;
}

export function SmartCTA() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [userEngagement, setUserEngagement] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const ctaMessages: CTAMessage[] = [
    {
      id: '1',
      title: '🔥 Горячее предложение!',
      subtitle: 'Скидка 20% на разработку сайта при заказе до конца недели',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500',
      urgency: 'Осталось 3 дня',
      action: 'Получить скидку',
      link: `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Интересует скидка 20% на разработку сайта.`
    },
    {
      id: '2',
      title: '⚡ Быстрый старт проекта',
      subtitle: 'Начнем разработку уже завтра. Бесплатная консультация включена',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      urgency: 'Свободное время',
      action: 'Начать проект',
      link: `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу начать проект завтра.`
    },
    {
      id: '3',
      title: '📈 Увеличьте продажи',
      subtitle: 'Современный сайт увеличивает конверсию в 3 раза',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      urgency: 'Проверено на 50+ проектах',
      action: 'Увеличить продажи',
      link: `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу увеличить продажи через сайт.`
    },
    {
      id: '4',
      title: '👥 Команда экспертов',
      subtitle: 'Работаем с опытными разработчиками и дизайнерами',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      urgency: '5+ лет опыта',
      action: 'Познакомиться',
      link: `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Хочу узнать о команде разработчиков.`
    },
    {
      id: '5',
      title: '⭐ Высокое качество',
      subtitle: 'Гарантия качества и поддержка после запуска',
      icon: <Star className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      urgency: '100% гарантия',
      action: 'Узнать больше',
      link: `https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Интересует гарантия качества.`
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Показываем CTA через 5 секунд
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    // Меняем сообщения каждые 15 секунд
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % ctaMessages.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isClient, ctaMessages.length]);

  // Отслеживаем взаимодействие пользователя
  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setUserEngagement(Math.min(scrollPercent, 100));
    };

    const handleClick = () => {
      setUserEngagement(prev => Math.min(prev + 10, 100));
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [isClient]);

  // Показываем CTA только после первого взаимодействия на мобильных
  useEffect(() => {
    if (!isClient) return;
    if (window.innerWidth > 768) {
      setIsVisible(true);
      return;
    }
    const show = () => setIsVisible(true);
    window.addEventListener('scroll', show, { once: true });
    window.addEventListener('click', show, { once: true });
    return () => {
      window.removeEventListener('scroll', show);
      window.removeEventListener('click', show);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  const currentCTA = ctaMessages[currentMessage];

  // Адаптируем сообщение на основе вовлеченности
  const getAdaptiveMessage = () => {
    if (userEngagement > 80) {
      return {
        ...currentCTA,
        title: '🎯 Идеальное время для заказа!',
        subtitle: 'Вы уже изучили наши возможности. Готовы начать проект?',
        urgency: 'Лучшее предложение'
      };
    } else if (userEngagement > 50) {
      return {
        ...currentCTA,
        title: '💡 Нужна помощь с выбором?',
        subtitle: 'Получите бесплатную консультацию от наших экспертов',
        urgency: 'Бесплатно'
      };
    }
    return currentCTA;
  };

  const adaptiveMessage = getAdaptiveMessage();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm"
        >
          <Card className="border-0 bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className={`bg-gradient-to-r ${adaptiveMessage.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {adaptiveMessage.icon}
                    <div>
                      <h3 className="font-bold text-lg">{adaptiveMessage.title}</h3>
                      <p className="text-sm opacity-90">{adaptiveMessage.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {adaptiveMessage.urgency}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ваша вовлеченность</span>
                    <span className="font-medium text-gray-900">{Math.round(userEngagement)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${userEngagement}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                  >
                    <a href={adaptiveMessage.link} target="_blank" rel="noopener noreferrer">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {adaptiveMessage.action}
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="px-3"
                    onClick={() => setIsVisible(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 text-green-600 border-green-200 hover:bg-green-50"
                  >
                    <a href={`https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Нужна консультация.`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50"
                  >
                    <a href={`tel:${siteConfig.contacts.phone}`}>
                      <Phone className="w-4 h-4 mr-1" />
                      Звонок
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Floating Elements */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"
          />
          
          <motion.div
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-4 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
