"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Trophy, Star, Zap, X } from "lucide-react";

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'achievement';
  title: string;
  message: string;
  icon: React.ReactNode;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = { ...notification, id };
    setNotifications(prev => [...prev, newNotification]);
    
    // Автоматически удаляем уведомление через 5 секунд
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  }, [removeNotification]);

  const showAchievement = useCallback((title: string, message: string) => {
    addNotification({
      type: 'achievement',
      title,
      message,
      icon: <Trophy className="w-5 h-5" />,
      duration: 8000,
      action: {
        label: 'Посмотреть',
        onClick: () => console.log('Показать достижения')
      }
    });
  }, [addNotification]);

  const showWelcome = useCallback(() => {
    addNotification({
      type: 'info',
      title: 'Добро пожаловать! 🎉',
      message: 'Изучите наши возможности и получите персональное предложение',
      icon: <Star className="w-5 h-5" />,
      duration: 6000,
      action: {
        label: 'Начать',
        onClick: () => console.log('Начать изучение')
      }
    });
  }, [addNotification]);

  const showDiscount = useCallback(() => {
    addNotification({
      type: 'success',
      title: 'Скидка 20%! 🎯',
      message: 'При заказе до конца недели получите скидку на разработку',
      icon: <Zap className="w-5 h-5" />,
      duration: 10000,
      action: {
        label: 'Получить',
        onClick: () => console.log('Получить скидку')
      }
    });
  }, [addNotification]);

  // Показываем уведомления только после первого взаимодействия на мобильных
  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Показываем приветствие
      setTimeout(() => showWelcome(), 1000);
      
      // Показываем скидку через 8 секунд
      setTimeout(() => showDiscount(), 8000);
      
      // Показываем достижения при взаимодействии
      const handleInteraction = () => {
        showAchievement('Первые шаги!', 'Вы начали изучение сайта');
      };
      
      document.addEventListener('click', handleInteraction, { once: true });
      return () => document.removeEventListener('click', handleInteraction);
    }
  }, [isVisible, showWelcome, showDiscount, showAchievement]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`max-w-sm w-full p-4 rounded-lg shadow-2xl backdrop-blur-sm border ${
              notification.type === 'success' ? 'bg-green-500/90 text-white border-green-400' :
              notification.type === 'warning' ? 'bg-yellow-500/90 text-black border-yellow-400' :
              notification.type === 'info' ? 'bg-blue-500/90 text-white border-blue-400' :
              'bg-gradient-to-r from-purple-500/90 to-pink-500/90 text-white border-purple-400'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {notification.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm">{notification.title}</h4>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm opacity-90 mb-2">{notification.message}</p>
                {notification.action && (
                  <button
                    onClick={notification.action.onClick}
                    className="text-xs font-medium underline hover:no-underline transition-all"
                  >
                    {notification.action.label}
                  </button>
                )}
              </div>
            </div>
            
            {/* Progress bar for duration */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: (notification.duration || 5000) / 1000, ease: "linear" }}
              className="h-1 bg-white/20 rounded-full mt-2"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
} 