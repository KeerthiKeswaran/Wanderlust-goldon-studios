import ProfileHeader from './ProfileHeader';
import AchievementsList from './AchievementsList';
import ActivityLog from './ActivityLog';
import StatsOverview from './StatsOverview';
const ProfileScreen = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <ProfileHeader />
      <div className="max-w-2xl mx-auto space-y-6 mt-6">
        <StatsOverview />
        <AchievementsList />
        <ActivityLog />
      </div>
    </div>
  );
};

export default ProfileScreen;
