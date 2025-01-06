import { Trophy, Map, Star, Flag } from 'lucide-react';



const StatsOverview = () => {
  const stats = [
    { icon: Trophy, label: 'Points', value: "2450"},
    { icon: Map, label: 'Wanders', value: "32" },
    { icon: Star, label: 'Achievements', value: '15' },
    { icon: Flag, label: 'Quests', value: '8' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 text-center">
          <Icon className="w-6 h-6 mx-auto mb-2 text-orange-400" />
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-slate-400">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
