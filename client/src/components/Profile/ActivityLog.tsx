import { Clock } from 'lucide-react';

const ActivityLog = () => {
  const activities = [
    { 
      title: 'Completed Night Market Tour',
      time: '2 hours ago',
      points: 150,
      type: 'quest'
    },
    {
      title: 'Discovered Hidden Cafe',
      time: 'Yesterday',
      points: 75,
      type: 'discovery'
    },
    {
      title: 'Evening Photography Walk',
      time: '2 days ago',
      points: 100,
      type: 'wander'
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2 text-orange-400" />
        Recent Activity
      </h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="flex items-center justify-between border-b border-white/10 last:border-0 pb-4 last:pb-0"
          >
            <div>
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-slate-400">{activity.time}</p>
            </div>
            <div className="text-orange-400 font-medium">+{activity.points}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;