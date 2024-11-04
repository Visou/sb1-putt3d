import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { HomePage } from './pages/HomePage';
import { MapPage } from './pages/MapPage';
import { SchedulePage } from './pages/SchedulePage';
import { ChatPage } from './pages/ChatPage';
import { ProfilePage } from './pages/ProfilePage';
import { SocialPage } from './pages/SocialPage';
import { AuthForm } from './components/auth/AuthForm';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useThemeStore } from './store/themeStore';

export default function App() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <BrowserRouter>
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <Toaster position="top-center" />
        <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />

        <main className="pt-16 pb-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<AuthForm mode="signin" />} />
            <Route path="/signup" element={<AuthForm mode="signup" />} />
            <Route path="/social" element={<SocialPage />} />
            <Route
              path="/map"
              element={
                <ProtectedRoute>
                  <MapPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schedule"
              element={
                <ProtectedRoute>
                  <SchedulePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <BottomNav isDarkMode={isDarkMode} />
      </div>
    </BrowserRouter>
  );
}