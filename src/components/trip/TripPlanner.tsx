import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Navigation, Star } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';
import { useTripStore, Route, SavedRoute } from '../../store/tripStore';

export function TripPlanner() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { recentSearches, favoriteRoutes, addFavoriteRoute } = useTripStore();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');

  const mockRoutes: Route[] = [
    {
      id: '1',
      start: { lat: 5.3600, lng: -4.0083, name: 'Plateau' },
      end: { lat: 5.3650, lng: -4.0153, name: 'Cocody' },
      duration: 25,
      distance: 5.2,
      busLines: ['L1', 'L3'],
      changes: 1,
      carbonSaved: 1.2
    },
    // Add more mock routes...
  ];

  const handleSaveRoute = (route: Route) => {
    const savedRoute: SavedRoute = {
      id: Date.now().toString(),
      name: `${route.start.name} → ${route.end.name}`,
      route,
      frequency: 'daily',
      preferredTime: selectedTime,
      alerts: true
    };
    addFavoriteRoute(savedRoute);
  };

  return (
    <div className="space-y-4">
      <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Départ</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Point de départ"
                className={`w-full pl-10 p-2 rounded-lg border ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Arrivée</label>
            <div className="relative">
              <Navigation className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Destination"
                className={`w-full pl-10 p-2 rounded-lg border ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Heure</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={`w-full pl-10 p-2 rounded-lg border ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full pl-10 p-2 rounded-lg border ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                  }`}
                />
              </div>
            </div>
          </div>

          <button className="w-full btn btn-primary">
            Rechercher
          </button>
        </div>
      </div>

      {mockRoutes.map((route) => (
        <div
          key={route.id}
          className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">{route.start.name} → {route.end.name}</h3>
              <p className="text-sm text-gray-500">
                {route.duration} min • {route.distance} km • {route.changes} changement
              </p>
            </div>
            <button
              onClick={() => handleSaveRoute(route)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Star className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {route.busLines.map((line) => (
              <span
                key={line}
                className="px-2 py-1 rounded bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-200 text-sm font-medium"
              >
                {line}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}