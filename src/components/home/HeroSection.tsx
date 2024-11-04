import React from 'react';

export function HeroSection() {
  return (
    <div className="relative h-[400px]">
      <img
        src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2000&q=80"
        alt="Bus"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Voyagez Intelligemment</h1>
          <p className="text-xl">Suivez vos bus en temps réel</p>
        </div>
      </div>
    </div>
  );
}