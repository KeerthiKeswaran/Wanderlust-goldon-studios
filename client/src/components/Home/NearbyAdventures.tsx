import { motion, AnimatePresence } from 'framer-motion';
import AdventureCard from '../shared/AdventureCard';
import { MapPin } from 'lucide-react';

interface Adventure {
  id: number;
  title: string;
  distance: string;
  category: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface NearbyAdventuresProps {
  adventures: Adventure[];
  setAdventures: (adventures: Adventure[]) => void; 
  onTaskComplete: (id: number) => void; 
}

const NearbyAdventures = ({ adventures, setAdventures, onTaskComplete }: NearbyAdventuresProps) => {


  const handleComplete = (id: number) => {
    setAdventures(adventures.filter((adventure) => adventure.id !== id));
    onTaskComplete(id);
  };

  return (
    <div className="w-full max-w-md flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-3 flex items-center transition-all duration-300 ease-in-out">
        <MapPin className="w-5 h-5 mr-2 text-orange-500" />
        Nearby Adventures
      </h2>
      
      <AnimatePresence>
        {adventures.length === 0 ? (
          <div className="flex-grow text-center text-m text-white-200">
            Adventures will be displayed here
          </div>
        ) : (
          <div className="space-y-3">
            {adventures.map((adventure) => (
              <motion.div
                key={adventure.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <AdventureCard
                  id={adventure.id} 
                  title={adventure.title}
                  distance={adventure.distance}
                  category={adventure.category}
                  duration={adventure.duration}
                  difficulty={adventure.difficulty}
                  onTaskComplete={handleComplete} // Pass handleComplete to the AdventureCard
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NearbyAdventures;
