import React from 'react';
import { Leaf, Car, TreePine } from 'lucide-react';
import { useRewardsStore } from '../../store/rewardsStore';
import { useThemeStore } from '../../store/themeStore';

export function EcoImpactCard() {
  const { carbonSaved } = useRewardsStore();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const treesEquivalent = (carbonSaved / 21).toFixed(1); // 1 arbre absorbe environ 21kg de CO2 par an
  const carKmSaved = (carbonSaved * 7).toFixed(1); // 1kg CO2 = environ 7km en voiture

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
      <div className="flex items-center space-x-2 mb-4">
        <Leaf className="w-6 h-6 text-green-500" />
        <h3 className="text-lg font-semibold">Impact Environnemental</h3>
      </div>

      <div className="space-y-4">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex items-center space-x-3">
            <Car className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-medium">Équivalent trajet voiture</p>
              <p className="text-sm text-gray-500">{carKmSaved} km évités</p>
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <div className="flex items-center space-x-3">
            <TreePine className="w-5 h-5 text-green-500" />
            <div>
              <p className="font-medium">Impact forestier</p>
              <p className="text-sm text-gray-500">
                Équivalent à {treesEquivalent} arbres sur un an
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}