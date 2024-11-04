import React from 'react';
import { CommunitySection } from '../components/social/CommunitySection';
import { FeedSection } from '../components/social/FeedSection';

export function SocialPage() {
  return (
    <div className="p-4 space-y-6">
      <CommunitySection />
      <FeedSection />
    </div>
  );
}