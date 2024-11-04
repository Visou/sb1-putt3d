import React from 'react';
import { useRewardsStore } from '../../store/rewardsStore';
import { useThemeStore } from '../../store/themeStore';
import { Award } from 'lucide-react';

export function BadgeGrid() {
  const { badges } = useRewardsStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
      <h3 className="text-lg font-semibold mb-4">Mes Badges</h3>
      
      <div className="grid grid-cols-3 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            } flex flex-col items-center text-center`}
          >
            <Award className="w-8 h-8 text-orange-500 mb-2" />
            <span className="font-medium text-sm">{badge.name}</span>
            <span className="text-xs text-gray-500 mt-1">
              {new Date(badge.dateEarned).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}