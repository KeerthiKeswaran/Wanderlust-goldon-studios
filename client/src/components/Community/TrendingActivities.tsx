import React from 'react';
import { Flame } from 'lucide-react';

const TrendingActivities = () => {
  const trending = [
    { title: 'Dawn City Photography', participants: 156 },
    { title: 'Hidden Cafe Hunt', participants: 89 },
    { title: 'Street Art Walk', participants: 234 }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Flame className="w-5 h-5 mr-2 text-orange-400" />
        Trending Now
      </h2>
      <div className="space-y-3">
        {trending.map((activity, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="font-medium">{activity.title}</span>
            <span className="text-sm text-orange-400">{activity.participants} wanderers</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingActivities;