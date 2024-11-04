import { create } from 'zustand';

interface RewardsState {
  points: number;
  badges: Badge[];
  carbonSaved: number;
  addPoints: (amount: number) => void;
  addBadge: (badge: Badge) => void;
  updateCarbonSaved: (amount: number) => void;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: Date;
}

export const useRewardsStore = create<RewardsState>((set) => ({
  points: 0,
  badges: [],
  carbonSaved: 0,
  addPoints: (amount) => set((state) => ({ points: state.points + amount })),
  addBadge: (badge) => set((state) => ({ badges: [...state.badges, badge] })),
  updateCarbonSaved: (amount) => set((state) => ({ carbonSaved: state.carbonSaved + amount })),
}));