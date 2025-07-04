import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  progress: number;
  reward: string;
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: 'exploration' | 'interaction' | 'engagement' | 'completion';
  points: number;
  unlocked: boolean;
  unlockedAt?: Date;
}

interface ProgressState {
  // Основные данные
  currentLevel: number;
  experience: number;
  totalExperience: number;
  milestones: Milestone[];
  achievements: Achievement[];
  
  // Действия
  addExperience: (amount: number) => void;
  updateMilestoneProgress: (milestoneId: string, progress: number) => void;
  unlockAchievement: (achievementId: string) => void;
  resetProgress: () => void;
  
  // Вычисляемые значения
  experienceForNextLevel: number;
  progressToNextLevel: number;
  unlockedCount: number;
  totalPoints: number;
}

const initialMilestones: Milestone[] = [
  {
    id: '1',
    title: 'Изучение услуг',
    description: 'Ознакомьтесь с нашими услугами',
    progress: 0,
    reward: '10 XP',
    completed: false
  },
  {
    id: '2',
    title: 'Просмотр портфолио',
    description: 'Изучите наши работы',
    progress: 0,
    reward: '25 XP',
    completed: false
  },
  {
    id: '3',
    title: 'Тестирование AI',
    description: 'Попробуйте AI-анализатор проектов',
    progress: 0,
    reward: '50 XP',
    completed: false
  },
  {
    id: '4',
    title: 'Расчет стоимости',
    description: 'Используйте калькулятор цен',
    progress: 0,
    reward: '75 XP',
    completed: false
  },
  {
    id: '5',
    title: 'Связь с нами',
    description: 'Свяжитесь для консультации',
    progress: 0,
    reward: '100 XP',
    completed: false
  }
];

const initialAchievements: Achievement[] = [
  {
    id: 'first-visit',
    title: 'Первые шаги',
    description: 'Посетили сайт впервые',
    category: 'exploration',
    points: 10,
    unlocked: true,
    unlockedAt: new Date()
  },
  {
    id: 'scroll-explorer',
    title: 'Исследователь',
    description: 'Прокрутили страницу на 50%',
    category: 'exploration',
    points: 25,
    unlocked: false
  },
  {
    id: 'time-spent',
    title: 'Любознательный',
    description: 'Провели на сайте более 2 минут',
    category: 'engagement',
    points: 50,
    unlocked: false
  },
  {
    id: 'interaction-master',
    title: 'Энтузиаст',
    description: 'Взаимодействовали с 5 элементами',
    category: 'interaction',
    points: 75,
    unlocked: false
  },
  {
    id: 'ai-explorer',
    title: 'AI-исследователь',
    description: 'Протестировали AI-анализатор проектов',
    category: 'exploration',
    points: 100,
    unlocked: false
  },
  {
    id: 'calculator-user',
    title: 'Калькулятор',
    description: 'Использовали калькулятор цен',
    category: 'interaction',
    points: 150,
    unlocked: false
  },
  {
    id: 'chat-user',
    title: 'Общительный',
    description: 'Отправили сообщение в чат',
    category: 'interaction',
    points: 200,
    unlocked: false
  },
  {
    id: 'completion-master',
    title: 'Мастер завершения',
    description: 'Достигли 100% прогресса',
    category: 'completion',
    points: 500,
    unlocked: false
  }
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      // Начальное состояние
      currentLevel: 1,
      experience: 0,
      totalExperience: 0,
      milestones: initialMilestones,
      achievements: initialAchievements,

      // Действия
      addExperience: (amount: number) => {
        set((state) => {
          const newExperience = state.experience + amount;
          const newTotalExperience = state.totalExperience + amount;
          const experienceForNextLevel = state.currentLevel * 100;
          
          let newLevel = state.currentLevel;
          let finalExperience = newExperience;
          
          // Проверяем повышение уровня
          if (newExperience >= experienceForNextLevel) {
            newLevel = state.currentLevel + 1;
            finalExperience = newExperience - experienceForNextLevel;
          }
          
          return {
            currentLevel: newLevel,
            experience: finalExperience,
            totalExperience: newTotalExperience,
          };
        });
      },

      updateMilestoneProgress: (milestoneId: string, progress: number) => {
        set((state) => {
          const newMilestones = state.milestones.map(milestone => {
            if (milestone.id === milestoneId) {
              const updatedMilestone = { ...milestone };
              updatedMilestone.progress = Math.min(progress, 100);
              
              if (updatedMilestone.progress >= 100 && !updatedMilestone.completed) {
                updatedMilestone.completed = true;
                const rewardAmount = parseInt(updatedMilestone.reward.split(' ')[0]);
                get().addExperience(rewardAmount);
              }
              
              return updatedMilestone;
            }
            return milestone;
          });
          
          return { milestones: newMilestones };
        });
      },

      unlockAchievement: (achievementId: string) => {
        set((state) => {
          const newAchievements = state.achievements.map(achievement => {
            if (achievement.id === achievementId && !achievement.unlocked) {
              return {
                ...achievement,
                unlocked: true,
                unlockedAt: new Date()
              };
            }
            return achievement;
          });
          
          return { achievements: newAchievements };
        });
      },

      resetProgress: () => {
        set({
          currentLevel: 1,
          experience: 0,
          totalExperience: 0,
          milestones: initialMilestones,
          achievements: initialAchievements,
        });
      },

      // Вычисляемые значения
      get experienceForNextLevel() {
        return get().currentLevel * 100;
      },

      get progressToNextLevel() {
        const state = get();
        return (state.experience / state.experienceForNextLevel) * 100;
      },

      get unlockedCount() {
        return get().achievements.filter(a => a.unlocked).length;
      },

      get totalPoints() {
        return get().achievements.reduce((sum, a) => sum + (a.unlocked ? a.points : 0), 0);
      },
    }),
    {
      name: 'progress-storage',
      partialize: (state) => ({
        currentLevel: state.currentLevel,
        experience: state.experience,
        totalExperience: state.totalExperience,
        milestones: state.milestones,
        achievements: state.achievements,
      }),
    }
  )
); 