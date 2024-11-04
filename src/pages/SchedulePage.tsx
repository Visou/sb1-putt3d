import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export function SchedulePage() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const schedules = [
    { line: 'Ligne 1', from: 'Terminus A', to: 'Terminus B', time: '5 min' },
    { line: 'Ligne 2', from: 'Terminus C', to: 'Terminus D', time: '10 min' },
    { line: 'Ligne 3', from: 'Terminus E', to: 'Terminus F', time: '15 min' },
  ];

  return (
    <div className="p-4">
      <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 mb-6`}>
        <h2 className="text-xl font-semibold mb-4">Horaires en temps réel</h2>
        
        <div className="space-y-4">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-orange-500">{schedule.line}</span>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{schedule.time}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm">{schedule.from}</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm">{schedule.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4`}>
        <h2 className="text-xl font-semibold mb-4">Perturbations</h2>
        <div className="space-y-2">
          <div className={`p-3 rounded ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'} border border-orange-200`}>
            <p className="text-orange-600">Retard de 10 minutes sur la Ligne 1 en raison du trafic</p>
          </div>
        </div>
      </div>
    </div>
  );
}