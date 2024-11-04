import { create } from 'zustand';

interface MapState {
  selectedBus: string | null;
  selectedStop: string | null;
  setSelectedBus: (busId: string | null) => void;
  setSelectedStop: (stopId: string | null) => void;
}

export const useMapStore = create<MapState>((set) => ({
  selectedBus: null,
  selectedStop: null,
  setSelectedBus: (busId) => set({ selectedBus: busId }),
  setSelectedStop: (stopId) => set({ selectedStop: stopId }),
}));