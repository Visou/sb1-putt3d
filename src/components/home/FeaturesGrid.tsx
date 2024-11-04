import React from 'react';
import { Map, Clock, MessageCircle, Youtube, User } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

interface FeaturesGridProps {
  isDarkMode: boolean;
}

export function FeaturesGrid({ isDarkMode }: FeaturesGridProps) {
  const features = [
    {
      icon: Map,
      title: 'Carte en Direct',
      description: 'Suivez tous les bus en temps réel sur la carte'
    },
    {
      icon: Clock,
      title: 'Temps d\'Attente',
      description: 'Estimations précises pour chaque arrêt'
    },
    {
      icon: MessageCircle,
      title: 'Chat en Direct',
      description: 'Échangez avec les autres passagers'
    },
    {
      icon: Youtube,
      title: 'Divertissement',
      description: 'Vidéos et jeux pendant votre trajet'
    },
    {
      icon: User,
      title: 'Profil Utilisateur',
      description: 'Suivez vos statistiques de voyage'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}