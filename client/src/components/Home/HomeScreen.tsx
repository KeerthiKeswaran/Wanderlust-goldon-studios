import { useState } from 'react';
import WanderButton from '../shared/WanderButton';
import StatsCard from '../shared/StatsCard';
import NearbyAdventures from './NearbyAdventures';
import QuestsScreen from '../Quests/QuestsScreen';
import axios from 'axios';

interface Adventure {
  id: number;
  title: string;
  distance: string;
  category: string;
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const HomeScreen = () => {
  const [points, setPoints] = useState(0);
  const [wanders, setWanders] = useState(0);
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  const [quests, setQuests] = useState<any>([]);
  const [completedQuests, setCompletedQuests] = useState(0);
  const [loading, setLoading] = useState(false); 

  const handleTaskComplete = () => {
    setPoints((prev) => prev + 50);
    setWanders((prev) => prev + 1);
  };

  const handleQuestCompletion = () => {
    setCompletedQuests((prev) => prev + 1);
    setPoints((prev) => prev + 150);
  };

  const fetchData = async () => {
    setLoading(true); 
    try {
      const response = await axios.post("http://127.0.0.1:8000/get_adventure_quest", { location: "Churchgate, Mumbai" });
      const data = await response.data;
      console.log("Fetched data:", data);
      setAdventures(data.adventures);
      setQuests([data.quests]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div
      className=" bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />

      <div className="fixed top-4 right-4 z-50 flex space-x-4">
        <StatsCard value={points} label="Points" />
        <StatsCard value={wanders} label="Wanders" />
        <StatsCard value={completedQuests} label="Quests" />
      </div>

      <div className="relative z-10 pt-12 px-4">
        <div className="max-w-screen-xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Wanderlust
            </h1>
            <p className="text-slate-300">Your next adventure awaits</p>
          </header>

          <div className="flex flex-col items-center justify-center space-y-8 mt-20">
            <WanderButton onClick={fetchData} />
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-12">
              <StatsCard value={adventures.length} label="Adventures" />
              <StatsCard value={quests.length} label="Quests" />
            </div>
            <NearbyAdventures adventures={adventures} setAdventures={setAdventures} onTaskComplete={handleTaskComplete} />
            <QuestsScreen quests={quests} onQuestCompletion={handleQuestCompletion} />

            {/* Loading Screen */}
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="text-white">Loading...</div>
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
