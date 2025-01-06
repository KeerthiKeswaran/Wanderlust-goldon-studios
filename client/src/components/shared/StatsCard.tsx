interface StatsCardProps {
  value: number;
  label: string;
}

const StatsCard = ({ value, label }: StatsCardProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex flex-col items-center border border-white/5 hover:border-white/10 transition-colors">
      <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        {value}
      </span>
      <span className="text-sm text-slate-300">{label}</span>
    </div>
  );
};

export default StatsCard;