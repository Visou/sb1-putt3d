import React from 'react';
import { Map, Clock, MessageCircle, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BottomNavProps {
  isDarkMode: boolean;
}

export function BottomNav({ isDarkMode }: BottomNavProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <Map className="w-6 h-6" />, label: 'Carte', path: '/map' },
    { icon: <Clock className="w-6 h-6" />, label: 'Horaires', path: '/schedule' },
    { icon: <MessageCircle className="w-6 h-6" />, label: 'Chat', path: '/chat' },
    { icon: <User className="w-6 h-6" />, label: 'Profil', path: '/profile' },
  ];

  return (
    <nav className={`fixed bottom-0 w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          {navItems.map((item) => (
            <NavButton
              key={item.path}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavButton({ icon, label, isActive, onClick }: NavButtonProps) {
  return (
    <button
      className={`flex flex-col items-center ${isActive ? 'text-orange-500' : ''}`}
      onClick={onClick}
    >
      <div className={isActive ? 'text-orange-500' : ''}>{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}