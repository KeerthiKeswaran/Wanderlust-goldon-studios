import React from 'react';
import ActiveChallenge from './ActiveChallenge';
import ChallengesList from './ChallengesList';
import LeaderboardWidget from './LeaderboardWidget';

const ChallengesScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Challenges
      </h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <ActiveChallenge />
        <div className="grid md:grid-cols-2 gap-6">
          <ChallengesList />
          <LeaderboardWidget />
        </div>
      </div>
    </div>
  );
};

export default ChallengesScreen;