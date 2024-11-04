import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesGrid } from '../components/home/FeaturesGrid';
import { useThemeStore } from '../store/themeStore';

export function HomePage() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  
  return (
    <>
      <HeroSection />
      <FeaturesGrid isDarkMode={isDarkMode} />
    </>
  );
}