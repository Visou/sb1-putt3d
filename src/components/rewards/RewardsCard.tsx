import React from 'react';
import { Award, Leaf } from 'lucide-react';
import { useRewardsStore } from '../../store/rewardsStore';
import { useThemeStore } from '../../store/themeStore';

export function RewardsCard() {
  const { points, carbonSaved } = useRewardsStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 space-y-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Award className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-semibold">Mes Récompenses</h3>
        </div>
        <span className="text-2xl font-bold text-orange-500">{points} pts</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Leaf className="w-5 h-5 text-green-500" />
        <span className="text-sm">
          Impact écologique : {carbonSaved.toFixed(2)} kg CO₂ économisés
        </span>
      </div>

      <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <p className="text-sm">
          Prochain palier : {500 - (points % 500)} points pour débloquer une réduction
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: `${(points % 500) / 5}%` }}
          />
        </div>
      </div>
    </div>
  );
}