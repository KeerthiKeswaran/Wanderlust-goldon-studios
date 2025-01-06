import React from 'react';
import { Award, Coffee, Camera, Compass } from 'lucide-react';

const ChallengesList = () => {
  const challenges = [
    {
      icon: Coffee,
      title: 'Cafe Explorer',
      description: 'Visit 3 local cafes',
      reward: 300,
      difficulty: 'easy'
    },
    {
      icon: Camera,
      title: 'Urban Photographer',
      description: 'Capture 5 city landmarks',
      reward: 400,
      difficulty: 'medium'
    },
    {
      icon: Compass,
      title: 'Path Finder',
      description: 'Complete 3 random wanders',
      reward: 500,
      difficulty: 'hard'
    }
  ];

  const difficultyColors = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400'
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Award className="w-5 h-5 mr-2 text-orange-400" />
        Available Challenges
      </h2>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white/5 rounded-lg">
                <challenge.icon className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{challenge.title}</h3>
                  <span className={difficultyColors[challenge.difficulty]}>
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mt-1">{challenge.description}</p>
                <div className="text-sm text-orange-400 mt-2">
                  +{challenge.reward} points
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesList;