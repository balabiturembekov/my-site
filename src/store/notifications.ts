import { create } from 'zustand';

export interface Notification {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'warning' | 'error' | 'info' | 'achievement';
  duration?: number;
}

interface NotificationState {
  notifications: Notification[];
  add: (n: Omit<Notification, 'id'>) => string;
  remove: (id: string) => void;
  clear: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  add: (n) => {
    const id = Math.random().toString(36).substr(2, 9);
    set((state) => ({ notifications: [...state.notifications, { ...n, id }] }));
    return id;
  },
  remove: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
  clear: () => set({ notifications: [] }),
})); 