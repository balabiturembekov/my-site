"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Star, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNotificationStore } from '@/store/notifications';

export interface NotificationProps {
  id: string;
  title: string;
  message?: string;
  type?: "success" | "warning" | "error" | "info" | "achievement";
  duration?: number;
  onClose?: (id: string) => void;
  icon?: React.ReactNode;
  className?: string;
}

export function Notification({
  id,
  title,
  message,
  type = "info",
  duration = 3000,
  onClose,
  icon,
  className
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose?.(id), 300); // Wait for exit animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(id), 300);
  };

  const getTypeStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "achievement":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const getDefaultIcon = () => {
    switch (type) {
      case "achievement":
        return <Trophy className="w-5 h-5" />;
      case "success":
        return <Star className="w-5 h-5" />;
      case "warning":
        return <Zap className="w-5 h-5" />;
      case "error":
        return <X className="w-5 h-5" />;
      default:
        return <Crown className="w-5 h-5" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.3 }}
          className={cn(
            "fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm",
            getTypeStyles(),
            className
          )}
        >
          <div className="flex items-center gap-3">
            {icon || getDefaultIcon()}
            <div className="flex-1">
              <div className="font-semibold text-sm">{title}</div>
              {message && (
                <div className="text-xs opacity-90 mt-1">{message}</div>
              )}
            </div>
            <button
              onClick={handleClose}
              className="ml-2 text-white/80 hover:text-white transition-colors"
              aria-label="Закрыть уведомление"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NotificationManager() {
  const notifications = useNotificationStore((s) => s.notifications);
  const remove = useNotificationStore((s) => s.remove);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClose={remove}
        />
      ))}
    </div>
  );
} 