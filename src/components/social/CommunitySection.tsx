import React from 'react';
import { Users, MessageCircle, AlertTriangle } from 'lucide-react';
import { useSocialStore, Community } from '../../store/socialStore';
import { useThemeStore } from '../../store/themeStore';

export function CommunitySection() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const { communities, joinCommunity } = useSocialStore();

  return (
    <div className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-orange-500" />
          <h3 className="text-lg font-semibold">Communautés</h3>
        </div>
        <button className="text-sm text-orange-500">Voir tout</button>
      </div>

      <div className="space-y-4">
        {communities.map((community) => (
          <div
            key={community.id}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{community.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{community.description}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{community.members}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">24</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm">3</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => joinCommunity(community.id)}
                className="px-3 py-1 text-sm rounded-full bg-orange-500 text-white hover:bg-orange-600"
              >
                Rejoindre
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}