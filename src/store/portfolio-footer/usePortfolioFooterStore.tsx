import { create } from 'zustand';
import { PortfolioFooterInterface } from './types/types';

export const usePortfolioFooterStore = create<PortfolioFooterInterface>((set) => ({
  showFooter: true,
  setShowFooter: (value) => set({ showFooter: value }),
}));