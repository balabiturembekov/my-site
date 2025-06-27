export const siteConfig = {
  name: "Digital Studio",
  description: "Современные сайты и AI-боты для вашего бизнеса",
  url: "https://kazdigitalai.com",
  
  // Контакты
  contacts: {
    whatsapp: "+77004411994",
    email: "turembek_b@icloud.com",
    phone: "+77004411994",
    instagram: "https://instagram.com/balabi_turembekov",
  },
  
  // Навигация
  nav: [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#contact", label: "Контакты" },
  ],
  
  // Hero секция
  hero: {
    title: "Современные сайты и AI-боты для вашего бизнеса",
    subtitle: "Разработка, автоматизация, интеграция искусственного интеллекта. Быстро. Качественно. WOW-результат.",
    cta: "Обсудить проект",
  },
  
  // Услуги
  services: [
    {
      icon: "Code",
      title: "Разработка сайтов",
      description: "Сайты, лендинги, интернет-магазины под ключ.",
      features: ["Адаптивный дизайн", "SEO-оптимизация", "Быстрая загрузка"],
    },
    {
      icon: "Settings",
      title: "Автоматизация",
      description: "Бизнес-процессы, интеграции, CRM, API.",
      features: ["CRM интеграции", "API разработка", "Автоматизация задач"],
    },
    {
      icon: "Bot",
      title: "Чат-боты",
      description: "Telegram, WhatsApp, AI-боты для поддержки и продаж.",
      features: ["AI-интеграция", "24/7 поддержка", "Автоматические ответы"],
    },
    {
      icon: "BarChart",
      title: "SEO",
      description: "Продвижение, оптимизация, рост трафика.",
      features: ["Анализ конкурентов", "Техническая оптимизация", "Контент-маркетинг"],
    },
    {
      icon: "Brain",
      title: "AI-интеграция",
      description: "Внедрение искусственного интеллекта в бизнес.",
      features: ["AI-аналитика", "Чат-боты", "Автоматизация"],
    },
  ],
  
  // Преимущества
  benefits: [
    "Скорость и соблюдение сроков",
    "Высокое качество и современные технологии", 
    "Поддержка и сопровождение",
    "Индивидуальный подход к каждому клиенту",
  ],
  
  // Портфолио
  portfolio: [
    {
      title: "Coffee Website",
      description: "Современный landing page для кофейного бизнеса с адаптивным дизайном и высокой конверсией",
      category: "Landing",
      image: "/coffee.png",
      link: "https://balabiturembekov.github.io/responsive-coffee-websait/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      stats: {
        conversion: "12.5%",
        loadTime: "1.2s",
        mobileScore: "98/100",
        desktopScore: "100/100"
      },
      details: {
        duration: "7 дней",
        team: "1 разработчик",
        features: ["Адаптивный дизайн", "Анимации", "Форма заказа", "SEO-оптимизация"],
        results: "Увеличение заказов на 40%"
      }
    },
    {
      title: "Halloween Website",
      description: "Интерактивный лендинг для Хэллоуина с уникальными анимациями и эффектами",
      category: "Landing",
      image: "/halloween.png", 
      link: "https://balabiturembekov.github.io/responsive-halloween-website/",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Canvas"],
      stats: {
        conversion: "8.3%",
        loadTime: "1.8s",
        mobileScore: "95/100",
        desktopScore: "98/100"
      },
      details: {
        duration: "10 дней",
        team: "1 разработчик",
        features: ["Интерактивные анимации", "Звуковые эффекты", "Параллакс", "Мобильная адаптация"],
        results: "Вирусный эффект в соцсетях"
      }
    },
    {
      title: "E-commerce Platform",
      description: "Полнофункциональная платформа интернет-магазина с админ-панелью",
      category: "E-commerce",
      image: "/file.svg",
      link: "#",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Stripe", "MongoDB"],
      stats: {
        conversion: "15.2%",
        loadTime: "0.8s",
        mobileScore: "99/100",
        desktopScore: "100/100"
      },
      details: {
        duration: "21 день",
        team: "2 разработчика",
        features: ["Корзина покупок", "Онлайн оплата", "Админ-панель", "Аналитика"],
        results: "Продажи выросли на 200%"
      }
    },
    {
      title: "AI Chat Bot",
      description: "Интеллектуальный чат-бот для автоматизации поддержки клиентов",
      category: "AI",
      image: "/globe.svg",
      link: "#",
      technologies: ["Python", "OpenAI API", "Telegram Bot", "PostgreSQL"],
      stats: {
        responseTime: "0.3s",
        accuracy: "94%",
        satisfaction: "4.8/5",
        automation: "85%"
      },
      details: {
        duration: "14 дней",
        team: "1 разработчик",
        features: ["AI-ответы", "Интеграция с CRM", "Аналитика", "Многоязычность"],
        results: "Снижение нагрузки на поддержку на 70%"
      }
    },
    {
      title: "CRM System",
      description: "Система управления клиентами с аналитикой и автоматизацией",
      category: "CRM",
      image: "/window.svg",
      link: "#",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redis"],
      stats: {
        users: "50+",
        efficiency: "+45%",
        responseTime: "0.5s",
        uptime: "99.9%"
      },
      details: {
        duration: "28 дней",
        team: "3 разработчика",
        features: ["Управление клиентами", "Аналитика", "Автоматизация", "Интеграции"],
        results: "Повышение эффективности на 45%"
      }
    },
    {
      title: "Mobile App",
      description: "Кроссплатформенное мобильное приложение для бизнеса",
      category: "Mobile",
      image: "/next.svg",
      link: "#",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      stats: {
        downloads: "10K+",
        rating: "4.7/5",
        crashRate: "0.1%",
        performance: "95/100"
      },
      details: {
        duration: "35 дней",
        team: "2 разработчика",
        features: ["Push-уведомления", "Офлайн режим", "Синхронизация", "Безопасность"],
        results: "10,000+ активных пользователей"
      }
    },
  ],
  
  // Отзывы
  testimonials: [
    {
      name: "Анна К.",
      role: "CEO",
      company: "Beauty Studio",
      text: "Очень довольна работой! Всё быстро, качественно и с заботой о деталях. Сайт приносит реальные заявки.",
      avatar: "/avatars/anna.jpg",
      rating: 5,
    },
    {
      name: "Игорь П.",
      role: "Founder", 
      company: "TechnoMarket",
      text: "Сайт и бот сделали под ключ, результат превзошёл ожидания! Продажи выросли на 40%.",
      avatar: "/avatars/igor.jpg",
      rating: 5,
    },
    {
      name: "Мария С.",
      role: "Director",
      company: "Online School",
      text: "AI-автоматизация помогла увеличить продажи и снизить нагрузку на менеджеров. Рекомендую!",
      avatar: "/avatars/maria.jpg", 
      rating: 5,
    },
  ],
  
  // FAQ
  faq: [
    {
      question: "Сколько стоит разработка сайта?",
      answer: "Стоимость зависит от задач и начинается от 30 000 тг. Точный расчет — после обсуждения проекта.",
    },
    {
      question: "Сколько времени занимает создание сайта?",
      answer: "Обычно от 7 до 21 дня в зависимости от сложности и объема работ.",
    },
    {
      question: "Какие технологии используете?",
      answer: "React, Next.js, TailwindCSS, AI-интеграции, современные API и инструменты.",
    },
    {
      question: "Можно ли заказать только бота или автоматизацию?",
      answer: "Да, мы реализуем отдельные задачи: чат-боты, интеграции, автоматизацию.",
    },
    {
      question: "Предоставляете ли поддержку после запуска?",
      answer: "Да, мы предоставляем техническую поддержку и сопровождение проектов.",
    },
  ],
  
  // Цветовая схема
  colors: {
    primary: "blue",
    secondary: "green", 
    accent: "cyan",
  },
} as const; 