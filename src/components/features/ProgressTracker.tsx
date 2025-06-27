"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Star, 
  Zap, 
  Target, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Sparkles,
  Award,
  Crown
} from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  description: string;
  progress: number;
  reward: string;
  icon: React.ReactNode;
  color: string;
  completed: boolean;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  points: number;
}

export function ProgressTracker() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [totalExperience, setTotalExperience] = useState(0);
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: '1',
      title: 'Изучение услуг',
      description: 'Ознакомьтесь с нашими услугами',
      progress: 0,
      reward: '10 XP',
      icon: <Target className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      completed: false
    },
    {
      id: '2',
      title: 'Просмотр портфолио',
      description: 'Изучите наши работы',
      progress: 0,
      reward: '25 XP',
      icon: <Trophy className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      completed: false
    },
    {
      id: '3',
      title: 'Тестирование AI',
      description: 'Попробуйте AI-анализатор проектов',
      progress: 0,
      reward: '50 XP',
      icon: <Zap className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      completed: false
    },
    {
      id: '4',
      title: 'Расчет стоимости',
      description: 'Используйте калькулятор цен',
      progress: 0,
      reward: '75 XP',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500',
      completed: false
    },
    {
      id: '5',
      title: 'Связь с нами',
      description: 'Свяжитесь для консультации',
      progress: 0,
      reward: '100 XP',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'from-indigo-500 to-purple-500',
      completed: false
    }
  ]);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Первые шаги',
      description: 'Посетили сайт впервые',
      icon: <Star className="w-4 h-4" />,
      unlocked: true,
      points: 10
    },
    {
      id: '2',
      title: 'Исследователь',
      description: 'Изучили 3 раздела сайта',
      icon: <Target className="w-4 h-4" />,
      unlocked: false,
      points: 25
    },
    {
      id: '3',
      title: 'Любознательный',
      description: 'Провели 5 минут на сайте',
      icon: <Clock className="w-4 h-4" />,
      unlocked: false,
      points: 50
    },
    {
      id: '4',
      title: 'Энтузиаст',
      description: 'Взаимодействовали с 3 элементами',
      icon: <Zap className="w-4 h-4" />,
      unlocked: false,
      points: 75
    },
    {
      id: '5',
      title: 'Эксперт',
      description: 'Достигли 100% прогресса',
      icon: <Crown className="w-4 h-4" />,
      unlocked: false,
      points: 100
    }
  ]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsClient(true);
      return;
    }
    const show = () => setIsClient(true);
    window.addEventListener('scroll', show, { once: true });
    window.addEventListener('click', show, { once: true });
    return () => {
      window.removeEventListener('scroll', show);
      window.removeEventListener('click', show);
    };
  }, []);

  const updateMilestoneProgress = useCallback((milestoneId: string, progress: number) => {
    setMilestones(prev => prev.map(milestone => {
      if (milestone.id === milestoneId) {
        const updatedMilestone = { ...milestone };
        updatedMilestone.progress = Math.min(progress, 100);
        
        if (updatedMilestone.progress >= 100 && !updatedMilestone.completed) {
          updatedMilestone.completed = true;
          const rewardAmount = parseInt(updatedMilestone.reward.split(' ')[0]);
          setExperience(prevExp => prevExp + rewardAmount);
          setTotalExperience(prevTotal => prevTotal + rewardAmount);
          showRewardNotification(updatedMilestone);
        }
        
        return updatedMilestone;
      }
      return milestone;
    }));
  }, []);

  const showLevelUpNotification = useCallback(() => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <span>🎉 Уровень повышен!</span>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-2">×</button>
      </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  }, []);

  const addExperience = useCallback((amount: number) => {
    const newExperience = experience + amount;
    const newTotalExperience = totalExperience + amount;
    
    setExperience(newExperience);
    setTotalExperience(newTotalExperience);
    
    // Проверяем повышение уровня
    const experienceForNextLevel = currentLevel * 100;
    if (newExperience >= experienceForNextLevel) {
      setCurrentLevel(prev => prev + 1);
      setExperience(newExperience - experienceForNextLevel);
      showLevelUpNotification();
    }
  }, [experience, totalExperience, currentLevel, showLevelUpNotification]);

  const checkAchievements = useCallback(() => {
    // Проверяем достижение "Исследователь"
    if (totalExperience >= 50) {
      setAchievements(prev => prev.map(achievement => 
        achievement.id === '2' && !achievement.unlocked
          ? { ...achievement, unlocked: true }
          : achievement
      ));
    }
    
    // Проверяем достижение "Любознательный"
    if (totalExperience >= 100) {
      setAchievements(prev => prev.map(achievement => 
        achievement.id === '3' && !achievement.unlocked
          ? { ...achievement, unlocked: true }
          : achievement
      ));
    }
    
    // Проверяем достижение "Энтузиаст"
    if (totalExperience >= 200) {
      setAchievements(prev => prev.map(achievement => 
        achievement.id === '4' && !achievement.unlocked
          ? { ...achievement, unlocked: true }
          : achievement
      ));
    }
    
    // Проверяем достижение "Эксперт"
    if (totalExperience >= 500) {
      setAchievements(prev => prev.map(achievement => 
        achievement.id === '5' && !achievement.unlocked
          ? { ...achievement, unlocked: true }
          : achievement
      ));
    }
  }, [totalExperience]);

  useEffect(() => {
    if (!isClient) return;
    
    // Симуляция прогресса на основе действий пользователя
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Обновляем прогресс изучения услуг
      if (scrollPercent > 20) {
        updateMilestoneProgress('1', Math.min(scrollPercent - 20, 100));
      }
      
      // Обновляем прогресс просмотра портфолио
      if (scrollPercent > 40) {
        updateMilestoneProgress('2', Math.min((scrollPercent - 40) * 2, 100));
      }
      
      // Обновляем прогресс тестирования AI
      if (scrollPercent > 60) {
        updateMilestoneProgress('3', Math.min((scrollPercent - 60) * 2, 100));
      }
      
      // Обновляем прогресс расчета стоимости
      if (scrollPercent > 80) {
        updateMilestoneProgress('4', Math.min((scrollPercent - 80) * 2, 100));
      }
    };

    const handleClick = () => {
      // Увеличиваем опыт при кликах
      addExperience(5);
      
      // Проверяем достижения
      checkAchievements();
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, [isClient, updateMilestoneProgress, addExperience, checkAchievements]);

  const showRewardNotification = (milestone: Milestone) => {
    // Здесь можно добавить уведомление о награде
    console.log(`🎉 Получена награда: ${milestone.reward} за ${milestone.title}`);
  };

  const experienceForNextLevel = currentLevel * 100;
  const progressToNextLevel = (experience / experienceForNextLevel) * 100;

  if (!isClient) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-4">
              Система прогресса
            </CardTitle>
            <p className="text-center text-gray-300">Загрузка...</p>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white overflow-hidden">
        <CardHeader className="text-center pb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-4"
          >
            <Crown className="w-10 h-10 text-white" />
          </motion.div>
          <CardTitle className="text-3xl font-bold mb-2">
            Уровень {currentLevel}
          </CardTitle>
          <p className="text-gray-300 mb-4">
            Опыт: {experience} / {experienceForNextLevel} XP
          </p>
          <Progress 
            value={progressToNextLevel} 
            className="h-3 bg-gray-700"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Всего опыта: {totalExperience} XP</span>
            <span>До следующего уровня: {experienceForNextLevel - experience} XP</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Milestones */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Этапы прогресса
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-gradient-to-r ${milestone.color} border-0 text-white`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {milestone.icon}
                          <div>
                            <h4 className="font-semibold">{milestone.title}</h4>
                            <p className="text-sm opacity-90">{milestone.description}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-0">
                          {milestone.reward}
                        </Badge>
                      </div>
                      <Progress 
                        value={milestone.progress} 
                        className="h-2 bg-white/20"
                      />
                      <div className="flex justify-between text-sm mt-2">
                        <span>{Math.round(milestone.progress)}%</span>
                        {milestone.completed && (
                          <span className="text-green-300 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Завершено
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Достижения
            </h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`border-2 transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-yellow-400' 
                      : 'bg-gray-800 text-gray-400 border-gray-700'
                  }`}>
                    <CardContent className="p-4 text-center">
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        achievement.unlocked 
                          ? 'bg-white/20' 
                          : 'bg-gray-700'
                      }`}>
                        {achievement.icon}
                      </div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm opacity-80 mb-2">{achievement.description}</p>
                      <Badge variant="secondary" className={`${
                        achievement.unlocked 
                          ? 'bg-white/20 text-white border-0' 
                          : 'bg-gray-700 text-gray-400 border-gray-600'
                      }`}>
                        {achievement.points} XP
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-400">{currentLevel}</div>
                <div className="text-sm text-gray-400">Уровень</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-400">{totalExperience}</div>
                <div className="text-sm text-gray-400">Всего XP</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-400">
                  {achievements.filter(a => a.unlocked).length}
                </div>
                <div className="text-sm text-gray-400">Достижения</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700 text-center">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-orange-400">
                  {milestones.filter(m => m.completed).length}
                </div>
                <div className="text-sm text-gray-400">Этапы</div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Начать проект и получить XP
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
