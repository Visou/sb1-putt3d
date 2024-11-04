import React from 'react';
import { User, Clock, MapPin, Settings } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { RewardsCard } from '../components/rewards/RewardsCard';
import { BadgeGrid } from '../components/rewards/BadgeGrid';
import { EcoImpactCard } from '../components/eco/EcoImpactCard';

export function ProfilePage() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const stats = [
    { icon: Clock, label: 'Trajets', value: '47' },
    { icon: MapPin, label: 'Arrêts favoris', value: '5' },
    { icon: Clock, label: 'Temps total', value: '23h' },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
        <div className="flex items-center space-x-4">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500">Membre depuis janvier 2024</p>
          </div>
          <button className="ml-auto">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      <RewardsCard />

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4`}
            >
              <Icon className="w-6 h-6 text-orange-500 mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <BadgeGrid />
      
      <EcoImpactCard />

      <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
        <h3 className="text-lg font-semibold mb-4">Activité récente</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((activity) => (
            <div
              key={activity}
              className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Ligne {activity}</p>
                  <p className="text-sm text-gray-500">Terminus A → Terminus B</p>
                </div>
                <span className="text-orange-500">Il y a {activity}h</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}