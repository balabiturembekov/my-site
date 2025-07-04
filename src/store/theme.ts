import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      
      setTheme: (theme: Theme) => {
        set({ theme });
        
        // Применяем тему к DOM
        const root = document.documentElement;
        const isDark = theme === 'dark' || 
          (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        if (isDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      },
      
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
        get().setTheme(newTheme);
      },
      
      get isDark() {
        if (typeof window === 'undefined') return false;
        const { theme } = get();
        if (theme === 'system') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return theme === 'dark';
      },
    }),
    {
      name: 'theme-storage',
    }
  )
); 