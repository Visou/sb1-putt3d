import React from 'react';
import { Clock, Trash2, Bell, BellOff } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useTripStore } from '../../store/tripStore';

export function SavedRoutes() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { favoriteRoutes, removeFavoriteRoute } = useTripStore();

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
      <h3 className="text-lg font-semibold mb-4">Trajets enregistrés</h3>
      
      <div className="space-y-4">
        {favoriteRoutes.map((saved) => (
          <div
            key={saved.id}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{saved.name}</h4>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                  <Clock className="w-4 h-4" />
                  <span>{saved.preferredTime}</span>
                  <span>•</span>
                  <span>{saved.frequency}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
                  {saved.alerts ? (
                    <Bell className="w-5 h-5 text-orange-500" />
                  ) : (
                    <BellOff className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => removeFavoriteRoute(saved.id)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>

            <div className="mt-2 text-sm">
              <span className="text-orange-500 font-medium">
                {saved.route.duration} min
              </span>
              <span className="mx-2">•</span>
              <span>{saved.route.distance} km</span>
              <span className="mx-2">•</span>
              <span>{saved.route.changes} changement</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}