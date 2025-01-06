import React from 'react';
import { Trophy, Clock } from 'lucide-react';

const ActiveChallenge = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg p-6 border border-orange-500/20">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Weekly Explorer</h2>
          <p className="text-slate-400">Visit 5 new locations this week</p>
        </div>
        <div className="bg-orange-500/20 rounded-lg px-3 py-1">
          <Trophy className="w-5 h-5 text-orange-400" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Progress (3/5)</span>
            <span className="text-orange-400">60%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
              style={{ width: '60%' }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>2 days remaining</span>
          </div>
          <span>Reward: 500 points</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveChallenge;