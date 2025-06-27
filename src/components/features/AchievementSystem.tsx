"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Zap, Target, Crown, Award, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'exploration' | 'interaction' | 'engagement' | 'completion';
  points: number;
  unlocked: boolean;
  unlockedAt?: Date;
  condition: () => boolean;
}

export function AchievementSystem() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const allAchievements = useMemo((): Achievement[] => [
    {
      id: 'first-visit',
      title: 'Первые шаги',
      description: 'Посетили сайт впервые',
      icon: <Star className="w-5 h-5" />,
      category: 'exploration',
      points: 10,
      unlocked: false,
      condition: () => true
    },
    {
      id: 'scroll-explorer',
      title: 'Исследователь',
      description: 'Прокрутили страницу на 50%',
      icon: <Target className="w-5 h-5" />,
      category: 'exploration',
      points: 25,
      unlocked: false,
      condition: () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        return scrollPercent >= 50;
      }
    },
    {
      id: 'time-spent',
      title: 'Внимательный читатель',
      description: 'Провели на сайте более 2 минут',
      icon: <Zap className="w-5 h-5" />,
      category: 'engagement',
      points: 50,
      unlocked: false,
      condition: () => {
        const timeSpent = sessionStorage.getItem('timeSpent') || '0';
        return parseInt(timeSpent) >= 120;
      }
    },
    {
      id: 'interaction-master',
      title: 'Мастер взаимодействия',
      description: 'Взаимодействовали с 5 элементов',
      icon: <Award className="w-5 h-5" />,
      category: 'interaction',
      points: 75,
      unlocked: false,
      condition: () => {
        const interactions = sessionStorage.getItem('interactions') || '0';
        return parseInt(interactions) >= 5;
      }
    },
    {
      id: 'ai-explorer',
      title: 'AI исследователь',
      description: 'Протестировали AI анализатор',
      icon: <Crown className="w-5 h-5" />,
      category: 'interaction',
      points: 100,
      unlocked: false,
      condition: () => {
        return sessionStorage.getItem('aiTested') === 'true';
      }
    },
    {
      id: 'calculator-user',
      title: 'Калькулятор цен',
      description: 'Использовали калькулятор стоимости',
      icon: <Trophy className="w-5 h-5" />,
      category: 'interaction',
      points: 60,
      unlocked: false,
      condition: () => {
        return sessionStorage.getItem('calculatorUsed') === 'true';
      }
    },
    {
      id: 'chat-user',
      title: 'Общительный',
      description: 'Отправили сообщение в чат',
      icon: <Star className="w-5 h-5" />,
      category: 'interaction',
      points: 40,
      unlocked: false,
      condition: () => {
        return sessionStorage.getItem('chatUsed') === 'true';
      }
    },
    {
      id: 'completion-master',
      title: 'Мастер завершения',
      description: 'Достигли 100% прогресса',
      icon: <Crown className="w-5 h-5" />,
      category: 'completion',
      points: 200,
      unlocked: false,
      condition: () => {
        const progress = sessionStorage.getItem('progress') || '0';
        return parseInt(progress) >= 100;
      }
    }
  ], []);

  const showAchievementNotification = useCallback((achievement: Achievement) => {
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4 rounded-lg shadow-2xl max-w-sm';
    
    // Создаем иконку как SVG элемент
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('class', 'w-5 h-5');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('stroke', 'currentColor');
    iconSvg.setAttribute('stroke-width', '2');
    iconSvg.setAttribute('stroke-linecap', 'round');
    iconSvg.setAttribute('stroke-linejoin', 'round');
    
    // Добавляем path в зависимости от типа достижения
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    if (achievement.id.includes('first-visit') || achievement.id.includes('chat-user')) {
      path.setAttribute('d', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
    } else if (achievement.id.includes('scroll-explorer')) {
      path.setAttribute('d', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
    } else if (achievement.id.includes('time-spent')) {
      path.setAttribute('d', 'M13 2L3 14h9l-1 8 10-12h-9l1-8z');
    } else if (achievement.id.includes('interaction-master')) {
      path.setAttribute('d', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
    } else if (achievement.id.includes('ai-explorer') || achievement.id.includes('completion-master')) {
      path.setAttribute('d', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z');
    } else if (achievement.id.includes('calculator-user')) {
      path.setAttribute('d', 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6M6 9v6M6 9h6m-6 6H4.5a2.5 2.5 0 0 0 0 5H6m0-5h6m6-6h1.5a2.5 2.5 0 0 1 0 5H18m0-5v6m0 0h1.5a2.5 2.5 0 0 0 0 5H18');
    }
    
    iconSvg.appendChild(path);
    
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        ${iconSvg.outerHTML}
        <div>
          <h4 class="font-bold">🏆 ${achievement.title}</h4>
          <p class="text-sm opacity-90">${achievement.description}</p>
          <p class="text-xs mt-1">+${achievement.points} очков</p>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Удаляем через 5 секунд
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }, []);

  const checkAchievements = useCallback(() => {
    setAchievements(currentAchievements => {
      let updated = false;
      const newAchievements = currentAchievements.map(achievement => {
        if (!achievement.unlocked && achievement.condition()) {
          updated = true;
          return {
            ...achievement,
            unlocked: true,
            unlockedAt: new Date()
          };
        }
        return achievement;
      });

      if (updated) {
        const newTotalPoints = newAchievements.reduce((sum, a) => sum + (a.unlocked ? a.points : 0), 0);
        setTotalPoints(newTotalPoints);
        
        // Сохраняем только сериализуемые данные
        const serializableAchievements = newAchievements.map(achievement => ({
          id: achievement.id,
          title: achievement.title,
          description: achievement.description,
          category: achievement.category,
          points: achievement.points,
          unlocked: achievement.unlocked,
          unlockedAt: achievement.unlockedAt
        }));
        localStorage.setItem('achievements', JSON.stringify(serializableAchievements));
        
        // Показываем уведомление о новом достижении
        const newAchievement = newAchievements.find(a => a.unlocked && a.unlockedAt);
        if (newAchievement) {
          showAchievementNotification(newAchievement);
        }
        
        return newAchievements;
      }
      
      return currentAchievements;
    });
  }, [showAchievementNotification]);

  useEffect(() => {
    setIsClient(true);
    
    // Загружаем сохраненные достижения
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
      const parsed = JSON.parse(savedAchievements);
      // Объединяем сохраненные данные с полными объектами достижений
      const mergedAchievements = allAchievements.map(achievement => {
        const saved = parsed.find((saved: { id: string; unlocked: boolean; unlockedAt?: string }) => saved.id === achievement.id);
        if (saved) {
          return {
            ...achievement,
            unlocked: saved.unlocked,
            unlockedAt: saved.unlockedAt ? new Date(saved.unlockedAt) : undefined
          };
        }
        return achievement;
      });
      setAchievements(mergedAchievements);
      setTotalPoints(mergedAchievements.reduce((sum: number, a: Achievement) => sum + (a.unlocked ? a.points : 0), 0));
    } else {
      setAchievements(allAchievements);
    }
  }, [allAchievements]);

  useEffect(() => {
    if (!isClient) return;

    // Отслеживаем время на сайте
    const startTime = Date.now();
    const timeInterval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      sessionStorage.setItem('timeSpent', timeSpent.toString());
    }, 5000);

    // Отслеживаем взаимодействия
    const handleInteraction = () => {
      const interactions = parseInt(sessionStorage.getItem('interactions') || '0');
      sessionStorage.setItem('interactions', (interactions + 1).toString());
    };

    document.addEventListener('click', handleInteraction);

    // Проверяем достижения каждые 5 секунд (было 2)
    const achievementInterval = setInterval(() => {
      checkAchievements();
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(achievementInterval);
      document.removeEventListener('click', handleInteraction);
    };
  }, [isClient, checkAchievements]);

  // Показываем панель достижений только после первого взаимодействия на мобильных
  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowPanel(true);
      return;
    }
    const show = () => setShowPanel(true);
    window.addEventListener('scroll', show, { once: true });
    window.addEventListener('click', show, { once: true });
    return () => {
      window.removeEventListener('scroll', show);
      window.removeEventListener('click', show);
    };
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exploration': return 'bg-blue-500';
      case 'interaction': return 'bg-green-500';
      case 'engagement': return 'bg-purple-500';
      case 'completion': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Кнопка панели достижений */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 4, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed top-4 right-4 z-40"
      >
        <Button
          onClick={() => setShowPanel(!showPanel)}
          size="lg"
          className="relative w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-2xl border-0"
        >
          <Trophy className="w-6 h-6" />
          <Badge className="absolute -top-1 -right-1 bg-red-500 text-white border-0 text-xs">
            {unlockedCount}/{totalCount}
          </Badge>
        </Button>
      </motion.div>

      {/* Панель достижений */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Достижения</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowPanel(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Статистика */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">Общий прогресс</span>
                  <span className="font-bold">{Math.round((unlockedCount / totalCount) * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(unlockedCount / totalCount) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span>Очки: {totalPoints}</span>
                  <span>{unlockedCount} из {totalCount}</span>
                </div>
              </div>

              {/* Список достижений */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        achievement.unlocked
                          ? getCategoryColor(achievement.category)
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-semibold ${
                            achievement.unlocked
                              ? 'text-gray-900 dark:text-white'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {achievement.title}
                          </h3>
                          <Badge className={`${
                            achievement.unlocked
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                          } border-0`}>
                            {achievement.points} очков
                          </Badge>
                        </div>
                        <p className={`text-sm ${
                          achievement.unlocked
                            ? 'text-gray-700 dark:text-gray-300'
                            : 'text-gray-500 dark:text-gray-500'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.unlocked && achievement.unlockedAt && (
                          <p className="text-xs text-gray-500 mt-1">
                            Получено: {achievement.unlockedAt.toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setShowPanel(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 