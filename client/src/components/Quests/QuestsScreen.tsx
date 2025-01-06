import { Trophy, Clock, BookmarkCheckIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Quest {
  quest_name: string;
  total_time: string;
  difficulty: string;
  location: string;
  steps: { step_number: number; description: string; location: string }[];
}

interface QuestsScreenProps {
  quests: Quest[];
  onQuestCompletion: () => void;  // New prop to handle quest completion
}

const QuestsScreen = ({ quests, onQuestCompletion }: QuestsScreenProps) => {
  const [completedSteps, setCompletedSteps] = useState<{ [questName: string]: boolean[] }>({});
  const [activeQuests, setActiveQuests] = useState(quests);  // Track active quests separately
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());  // To track completed quests

  useEffect(() => {
    setActiveQuests(quests);  // Reset active quests when the prop changes
  }, [quests]);

  const handleStepCompletion = (questName: string, stepIndex: number) => {
    setCompletedSteps((prevState) => {
      const updatedSteps = { ...prevState };
      if (!updatedSteps[questName]) {
        updatedSteps[questName] = [];
      }
      updatedSteps[questName][stepIndex] = !updatedSteps[questName][stepIndex];
      return updatedSteps;
    });
  };

  const handleQuestCompletion = (questName: string) => {
    // Mark all steps as completed for the quest
    setCompletedSteps((prevState) => ({
      ...prevState,
      [questName]: quests.find((quest) => quest.quest_name === questName)?.steps.map(() => true) || [],
    }));

    // Mark the quest as completed (for triggering animation)
    setCompletedQuests((prevState) => new Set(prevState).add(questName));

    // Remove the quest from the list of active quests after the animation
    setTimeout(() => {
      setActiveQuests((prevState) => prevState.filter((quest) => quest.quest_name !== questName));
      onQuestCompletion();  // Call the prop function when a quest is completed
    }, 500);  // 500ms delay to allow the animation to complete
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Active Quests
      </h1>

      {activeQuests.length === 0 ? (
        <div className="text-center text-sm text-slate-400">
          No active quests available
        </div>
      ) : (
        <div className="space-y-4">
          {activeQuests.map((quest) => (
            <div
              key={quest.quest_name}
              className={`bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 ${completedQuests.has(quest.quest_name) ? 'animate-disappear' : ''}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{quest.quest_name}</h3>
                </div>
                <div className="flex items-center text-orange-400">
                  <Trophy className="w-4 h-4 mr-1" />
                  <span className='text-sm'>{quest.total_time}</span>
                </div>
              </div>

              <div className="flex items-center text-sm text-slate-400 mb-3">
                <Clock className="w-4 h-4 mr-1" />
                <span>{quest.difficulty}</span>
              </div>

              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-orange-400">
                      {quest.steps.length} steps
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {quest.steps.map((step, index) => (
                    <div key={step.step_number} className="flex items-center space-x-2">
                      <BookmarkCheckIcon />
                      <span className="text-sm">{step.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleQuestCompletion(quest.quest_name)}
                className="mt-4 px-4 py-2 text-sm font-medium bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Mark Quest as Completed
              </button>
              {completedQuests.has(quest.quest_name) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-float-coins text-yellow-400">💰</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestsScreen;
