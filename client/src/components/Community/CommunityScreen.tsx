import React from 'react';
import CommunityFeed from './CommunityFeed';
import TrendingActivities from './TrendingActivities';

const CommunityScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Community
      </h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <TrendingActivities />
        <CommunityFeed />
      </div>
    </div>
  );
};

export default CommunityScreen;