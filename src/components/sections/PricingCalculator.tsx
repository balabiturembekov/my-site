"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  Zap, 
  Star,
  TrendingUp,
  Sparkles,
  CheckCircle,
  Target
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface PricingOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
}

interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: React.ReactNode;
}

export function PricingCalculator() {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [complexity, setComplexity] = useState([5]);
  const [urgency, setUrgency] = useState([3]);
  const [isClient, setIsClient] = useState(false);

  const pricingOptions: PricingOption[] = [
    {
      id: 'basic',
      name: 'Базовый сайт',
      basePrice: 50000,
      description: 'Простой сайт-визитка с основным функционалом',
      features: [
        'Адаптивный дизайн',
        'До 5 страниц',
        'Форма обратной связи',
        'SEO оптимизация',
        'Хостинг на 1 год'
      ],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 'standard',
      name: 'Стандартный сайт',
      basePrice: 120000,
      description: 'Корпоративный сайт с расширенным функционалом',
      features: [
        'Все из базового',
        'До 15 страниц',
        'CMS система',
        'Интеграция с CRM',
        'Аналитика и отчеты',
        'Поддержка 3 месяца'
      ],
      popular: true,
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 'premium',
      name: 'Премиум сайт',
      basePrice: 250000,
      description: 'Сложный проект с уникальным дизайном',
      features: [
        'Все из стандартного',
        'Неограниченное количество страниц',
        'Уникальный дизайн',
        'Интеграция с API',
        'Многоязычность',
        'Поддержка 6 месяцев'
      ],
      icon: <Star className="w-6 h-6" />
    }
  ];

  const addons: Addon[] = [
    {
      id: 'ai-chat',
      name: 'AI Чат-бот',
      price: 30000,
      description: 'Умный помощник для клиентов',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      price: 80000,
      description: 'Интернет-магазин с платежами',
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'mobile-app',
      name: 'Мобильное приложение',
      price: 150000,
      description: 'Нативное приложение для iOS/Android',
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 'analytics',
      name: 'Продвинутая аналитика',
      price: 25000,
      description: 'Детальная аналитика и отчеты',
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 'security',
      name: 'Дополнительная безопасность',
      price: 20000,
      description: 'SSL, защита от DDoS, бэкапы',
      icon: <Target className="w-5 h-5" />
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const selectedPlanData = pricingOptions.find(plan => plan.id === selectedPlan);
  const selectedAddonsData = addons.filter(addon => selectedAddons.includes(addon.id));

  const calculateBasePrice = () => {
    if (!selectedPlanData) return 0;
    
    const complexityMultiplier = 1 + (complexity[0] - 5) * 0.1;
    const urgencyMultiplier = 1 + (urgency[0] - 3) * 0.15;
    
    return Math.round(selectedPlanData.basePrice * complexityMultiplier * urgencyMultiplier);
  };

  const calculateAddonsPrice = () => {
    return selectedAddonsData.reduce((total, addon) => total + addon.price, 0);
  };

  const calculateTotalPrice = () => {
    return calculateBasePrice() + calculateAddonsPrice();
  };

  const getUrgencyLabel = (value: number) => {
    switch (value) {
      case 1: return 'Не срочно (1-2 месяца)';
      case 2: return 'Обычно (3-4 недели)';
      case 3: return 'Стандартно (2-3 недели)';
      case 4: return 'Срочно (1-2 недели)';
      case 5: return 'Очень срочно (3-7 дней)';
      default: return 'Стандартно';
    }
  };

  const getComplexityLabel = (value: number) => {
    switch (value) {
      case 1: return 'Очень просто';
      case 2: return 'Просто';
      case 3: return 'Средне';
      case 4: return 'Сложно';
      case 5: return 'Очень сложно';
      case 6: return 'Эксперт';
      case 7: return 'Архитектурно сложно';
      case 8: return 'Инновационно';
      case 9: return 'Экспериментально';
      case 10: return 'Пионерское решение';
      default: return 'Средне';
    }
  };

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  if (!isClient) {
    return (
      <div className="w-full max-w-7xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-4">
              Калькулятор стоимости
            </CardTitle>
            <p className="text-center text-gray-300">Загрузка...</p>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white overflow-hidden">
        <CardHeader className="text-center pb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-6"
          >
            <Calculator className="w-10 h-10 text-white" />
          </motion.div>
          <CardTitle className="text-4xl font-bold mb-4">
            Калькулятор стоимости
          </CardTitle>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Рассчитайте стоимость вашего проекта в реальном времени. 
            Настройте параметры и получите точную оценку
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Pricing Plans */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Выберите тип проекта</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {pricingOptions.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedPlan === plan.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 scale-105'
                        : 'bg-gray-800 border-gray-700 hover:border-gray-600 hover:scale-102'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <CardHeader className="text-center">
                      {plan.popular && (
                        <Badge className="mx-auto mb-2 bg-yellow-500 text-black border-0">
                          Популярный
                        </Badge>
                      )}
                      <div className="flex items-center justify-center mb-3">
                        {plan.icon}
                      </div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <p className="text-sm opacity-80">{plan.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Configuration Sliders */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Настройте параметры</h3>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* Complexity Slider */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Сложность проекта
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      {complexity[0]}/10
                    </div>
                    <div className="text-sm text-gray-400">
                      {getComplexityLabel(complexity[0])}
                    </div>
                  </div>
                  <Slider
                    value={complexity}
                    onValueChange={setComplexity}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Просто</span>
                    <span>Сложно</span>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency Slider */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Срочность
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {urgency[0]}/5
                    </div>
                    <div className="text-sm text-gray-400">
                      {getUrgencyLabel(urgency[0])}
                    </div>
                  </div>
                  <Slider
                    value={urgency}
                    onValueChange={setUrgency}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Не срочно</span>
                    <span>Очень срочно</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Addons */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Дополнительные услуги</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon, index) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                    selectedAddons.includes(addon.id) ? 'ring-2 ring-blue-500' : ''
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {addon.icon}
                          <span className="font-semibold">{addon.name}</span>
                        </div>
                        <Switch
                          checked={selectedAddons.includes(addon.id)}
                          onCheckedChange={() => handleAddonToggle(addon.id)}
                        />
                      </div>
                      <p className="text-sm text-gray-400 mb-3">{addon.description}</p>
                      <div className="text-lg font-bold text-green-400">
                        {addon.price.toLocaleString()}₽
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Итоговая стоимость</h3>
                  
                  <div className="space-y-2 text-left max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span>Базовый проект:</span>
                      <span>{calculateBasePrice().toLocaleString()}₽</span>
                    </div>
                    {selectedAddonsData.length > 0 && (
                      <div className="flex justify-between">
                        <span>Дополнительные услуги:</span>
                        <span>{calculateAddonsPrice().toLocaleString()}₽</span>
                      </div>
                    )}
                    <div className="border-t border-white/20 pt-2 flex justify-between text-lg font-bold">
                      <span>Итого:</span>
                      <span>{calculateTotalPrice().toLocaleString()}₽</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-gray-100 border-0"
                    >
                      <a href={`https://wa.me/${siteConfig.contacts.whatsapp}?text=Здравствуйте! Интересует проект стоимостью ${calculateTotalPrice().toLocaleString()}₽.`} target="_blank" rel="noopener noreferrer">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Заказать проект
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      Получить смету
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
