export const siteConfig = {
  name: "Digital Studio",
  description: "Современные сайты и AI-боты для вашего бизнеса",
  url: "https://example.com",
  
  // Контакты
  contacts: {
    whatsapp: "+79999999999",
    email: "info@example.com",
    phone: "+79999999999",
    instagram: "https://instagram.com/",
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
      title: "E-commerce Platform",
      description: "Современный интернет-магазин с AI-рекомендациями",
      category: "E-commerce",
      image: "/next.svg",
      link: "#",
    },
    {
      title: "AI Chat Bot",
      description: "Умный бот для поддержки клиентов",
      category: "AI",
      image: "/vercel.svg", 
      link: "#",
    },
    {
      title: "Corporate Website",
      description: "Корпоративный сайт с современным дизайном",
      category: "Web",
      image: "/file.svg",
      link: "#",
    },
    {
      title: "Mobile App",
      description: "Мобильное приложение для бизнеса",
      category: "Mobile",
      image: "/globe.svg",
      link: "#",
    },
    {
      title: "CRM System",
      description: "Система управления клиентами",
      category: "CRM",
      image: "/window.svg",
      link: "#",
    },
    {
      title: "Landing Page",
      description: "Высококонверсионный лендинг",
      category: "Landing",
      image: "/next.svg",
      link: "#",
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
      answer: "Стоимость зависит от задач и начинается от 30 000 руб. Точный расчет — после обсуждения проекта.",
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