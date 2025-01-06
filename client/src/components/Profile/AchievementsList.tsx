import React from 'react';
import { Award } from 'lucide-react';

const AchievementsList = () => {
  const achievements = [
    { title: 'Early Bird', description: 'Complete 5 morning adventures', progress: 80 },
    { title: 'Culture Vulture', description: 'Visit 10 cultural locations', progress: 60 },
    { title: 'Night Owl', description: 'Complete 3 evening explorations', progress: 100 },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Award className="w-5 h-5 mr-2 text-orange-400" />
        Achievements
      </h2>
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div key={achievement.title} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-slate-400">{achievement.description}</p>
              </div>
              <span className="text-sm font-medium text-orange-400">{achievement.progress}%</span>
            </div>
            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300"
                style={{ width: `${achievement.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;