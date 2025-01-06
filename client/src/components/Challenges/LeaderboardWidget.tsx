import React from 'react';
import { Crown } from 'lucide-react';

const LeaderboardWidget = () => {
  const leaders = [
    { name: 'Emma S.', points: 2450, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80' },
    { name: 'Alex M.', points: 2280, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
    { name: 'Sarah L.', points: 2150, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Crown className="w-5 h-5 mr-2 text-orange-400" />
        Top Wanderers
      </h2>
      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <div
            key={leader.name}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center font-bold">
              #{index + 1}
            </div>
            <img
              src={leader.avatar}
              alt={leader.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium">{leader.name}</h3>
              <p className="text-sm text-orange-400">{leader.points} points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardWidget;