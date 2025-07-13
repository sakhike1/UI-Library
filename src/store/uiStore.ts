import { create } from 'zustand';
import { UIStore, Notification } from '../types';

// Zustand Store for UI State Management
// This store manages global UI state like theme, sidebar, notifications, etc.
// Zustand is a lightweight state management library that's perfect for React apps
// It provides a simple API without the boilerplate of Redux

export const useUIStore = create<UIStore>((set, get) => ({
  // State
  theme: 'dark', // Default to dark theme as per user preference
  sidebarOpen: false,
  scrollToTop: false,
  notifications: [],

  // Actions
  toggleTheme: () => {
    set((state) => ({ 
      theme: state.theme === 'light' ? 'dark' : 'light' 
    }));
    // Store theme preference in localStorage
    const newTheme = get().theme;
    localStorage.setItem('theme', newTheme);
  },

  toggleSidebar: () => {
    set((state) => ({ 
      sidebarOpen: !state.sidebarOpen 
    }));
  },

  setScrollToTop: (show: boolean) => {
    set({ scrollToTop: show });
  },

  addNotification: (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration || 5000, // Default 5 seconds
    };

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    // Auto-remove notification after duration
    setTimeout(() => {
      get().removeNotification(id);
    }, newNotification.duration);
  },

  removeNotification: (id: string) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
}));

// Custom hooks for specific state slices
export const useTheme = () => useUIStore((state) => state.theme);
export const useToggleTheme = () => useUIStore((state) => state.toggleTheme);
export const useSidebar = () => useUIStore((state) => state.sidebarOpen);
export const useToggleSidebar = () => useUIStore((state) => state.toggleSidebar);
export const useNotifications = () => useUIStore((state) => state.notifications);
export const useAddNotification = () => useUIStore((state) => state.addNotification); 