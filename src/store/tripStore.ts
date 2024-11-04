import { create } from 'zustand';

export interface Location {
  lat: number;
  lng: number;
  name: string;
}

export interface Route {
  id: string;
  start: Location;
  end: Location;
  duration: number;
  distance: number;
  busLines: string[];
  changes: number;
  carbonSaved: number;
}

export interface SavedRoute {
  id: string;
  name: string;
  route: Route;
  frequency: 'daily' | 'weekly' | 'occasional';
  preferredTime: string;
  alerts: boolean;
}

interface TripState {
  recentSearches: Location[];
  favoriteRoutes: SavedRoute[];
  activeRoute: Route | null;
  addRecentSearch: (location: Location) => void;
  addFavoriteRoute: (route: SavedRoute) => void;
  removeFavoriteRoute: (id: string) => void;
  setActiveRoute: (route: Route | null) => void;
}

export const useTripStore = create<TripState>((set) => ({
  recentSearches: [],
  favoriteRoutes: [],
  activeRoute: null,
  addRecentSearch: (location) =>
    set((state) => ({
      recentSearches: [location, ...state.recentSearches.slice(0, 4)]
    })),
  addFavoriteRoute: (route) =>
    set((state) => ({
      favoriteRoutes: [...state.favoriteRoutes, route]
    })),
  removeFavoriteRoute: (id) =>
    set((state) => ({
      favoriteRoutes: state.favoriteRoutes.filter(route => route.id !== id)
    })),
  setActiveRoute: (route) => set({ activeRoute: route })
}));