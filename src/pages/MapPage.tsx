import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { BusMap } from '../components/map/BusMap';
import { TripPlanner } from '../components/trip/TripPlanner';
import { SavedRoutes } from '../components/trip/SavedRoutes';

export function MapPage() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const [showPlanner, setShowPlanner] = React.useState(false);

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md mb-4`}>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Rechercher un arrêt..."
              className={`w-full p-2 rounded-lg border ${
                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
              }`}
            />
          </div>
          <button
            onClick={() => setShowPlanner(!showPlanner)}
            className="btn btn-primary"
          >
            <Navigation className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        <BusMap />
        {showPlanner && (
          <div className="absolute top-0 right-0 w-96 h-full overflow-y-auto p-4">
            <TripPlanner />
            <div className="mt-4">
              <SavedRoutes />
            </div>
          </div>
        )}
      </div>

      <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md mt-4`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Arrêts à proximité</h2>
          <span className="text-orange-500">Voir tous</span>
        </div>

        <div className="space-y-2">
          {[1, 2, 3].map((stop) => (
            <div
              key={stop}
              className={`flex items-center space-x-4 p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <MapPin className="w-6 h-6 text-orange-500" />
              <div>
                <h3 className="font-medium">Arrêt {stop}</h3>
                <p className="text-sm text-gray-500">2 bus en approche</p>
              </div>
              <div className="ml-auto">
                <span className="text-orange-500 font-medium">3 min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}