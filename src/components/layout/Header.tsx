import React from 'react';
import { Bus, Moon, Sun, Menu } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDarkMode, onThemeToggle }: HeaderProps) {
  return (
    <header className={`fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Bus className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">Bus Ivoire</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Menu className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}