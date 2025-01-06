import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomeScreen from './components/Home/HomeScreen';
import QuestsScreen from './components/Quests/QuestsScreen';
import CommunityScreen from './components/Community/CommunityScreen';
import ProfileScreen from './components/Profile/ProfileScreen';
import ChallengesScreen from './components/Challenges/ChallengesScreen';

function App() {
  const [quests, setQuests] = useState<any[]>([]);
  const handleQuestCompletion = (questId: void) => {
  };

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/quests"
            element={<QuestsScreen quests={quests} onQuestCompletion={handleQuestCompletion} />}
          />
          <Route path="/community" element={<CommunityScreen />} />
          <Route path="/challenges" element={<ChallengesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
