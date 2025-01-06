import { useState } from 'react';
import { Clock, MapPin, Utensils, Globe, Airplay } from 'lucide-react';

interface AdventureCardProps {
  id: number; 
  title: string;
  distance: string;
  category: 'food' | 'culture' | 'adventure' | string; 
  duration?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  onTaskComplete: (id: number) => void; 
}

const AdventureCard = ({ id, title, distance, category, duration, difficulty, onTaskComplete }: AdventureCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const difficultyColors = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400',
  };

  const handleComplete = () => {
    setIsCompleted(true);
    setTimeout(() => onTaskComplete(id), 500); 
  };

  const categoryIcons: { [key in 'food' | 'culture' | 'adventure' | string]: JSX.Element } = {
    food: <Utensils className="w-5 h-5 text-orange-400" />,  
    culture: <Globe className="w-5 h-5 text-blue-400" />,    
    adventure: <Airplay className="w-5 h-5 text-green-400" />, 
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/5 hover:border-white/10 transition-all 
      ${isCompleted ? 'animate-disappear' : 'hover:transform hover:translate-x-1'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          
          <div className="flex items-center space-x-2 mt-1">
            {categoryIcons[category]}
            <span className="text-xs text-orange-500">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </div>

          {difficulty && (
            <span className={`text-xs ${difficultyColors[difficulty]} mt-1`}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </span>
          )}
        </div>
        <div className="flex flex-col items-end text-sm text-orange-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{distance}</span>
          </div>
          {duration && (
            <div className="flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              <span>{duration}</span>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleComplete}
        className="mt-4 px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Mark as Completed
      </button>
      {isCompleted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-float-coins text-yellow-400">💰</div>
        </div>
      )}
    </div>
  );
};

export default AdventureCard;
