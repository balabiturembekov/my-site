"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, isDark } = useThemeStore();

  // Применяем тему при монтировании компонента
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative w-9 h-9 p-0"
      title={`Текущая тема: ${theme === 'system' ? 'Системная' : theme === 'dark' ? 'Темная' : 'Светлая'}`}
    >
      {getThemeIcon()}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
} 