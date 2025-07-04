import { create } from 'zustand';

interface UIState {
  // Модальные окна
  isContactModalOpen: boolean;
  isPortfolioModalOpen: boolean;
  isPricingModalOpen: boolean;
  
  // Сайдбары
  isSidebarOpen: boolean;
  isProgressSidebarOpen: boolean;
  
  // Состояния загрузки
  isLoading: boolean;
  loadingText: string;
  
  // Действия для модальных окон
  openContactModal: () => void;
  closeContactModal: () => void;
  openPortfolioModal: () => void;
  closePortfolioModal: () => void;
  openPricingModal: () => void;
  closePricingModal: () => void;
  
  // Действия для сайдбаров
  toggleSidebar: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleProgressSidebar: () => void;
  openProgressSidebar: () => void;
  closeProgressSidebar: () => void;
  
  // Действия для загрузки
  startLoading: (text?: string) => void;
  stopLoading: () => void;
  
  // Закрытие всех модальных окон
  closeAllModals: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Начальное состояние
  isContactModalOpen: false,
  isPortfolioModalOpen: false,
  isPricingModalOpen: false,
  isSidebarOpen: false,
  isProgressSidebarOpen: false,
  isLoading: false,
  loadingText: '',
  
  // Модальные окна
  openContactModal: () => set({ isContactModalOpen: true }),
  closeContactModal: () => set({ isContactModalOpen: false }),
  openPortfolioModal: () => set({ isPortfolioModalOpen: true }),
  closePortfolioModal: () => set({ isPortfolioModalOpen: false }),
  openPricingModal: () => set({ isPricingModalOpen: true }),
  closePricingModal: () => set({ isPricingModalOpen: false }),
  
  // Сайдбары
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  openSidebar: () => set({ isSidebarOpen: true }),
  closeSidebar: () => set({ isSidebarOpen: false }),
  toggleProgressSidebar: () => set((state) => ({ isProgressSidebarOpen: !state.isProgressSidebarOpen })),
  openProgressSidebar: () => set({ isProgressSidebarOpen: true }),
  closeProgressSidebar: () => set({ isProgressSidebarOpen: false }),
  
  // Загрузка
  startLoading: (text = 'Загрузка...') => set({ isLoading: true, loadingText: text }),
  stopLoading: () => set({ isLoading: false, loadingText: '' }),
  
  // Закрытие всех модальных окон
  closeAllModals: () => set({
    isContactModalOpen: false,
    isPortfolioModalOpen: false,
    isPricingModalOpen: false,
  }),
})); 