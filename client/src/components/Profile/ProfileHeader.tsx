import { Settings } from 'lucide-react';
import profile from "../assets/Keerthkeshwaran 01~2.jpg"

const ProfileHeader = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute right-0 top-0">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-orange-500 shadow-lg shadow-orange-500/20"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-900" />
        </div>
        <h1 className="text-2xl font-bold mt-4">KeerthiKeswaran</h1>
        <p className="text-slate-400">Adventure Seeker Level 12</p>
      </div>
    </div>
  );
}

export default ProfileHeader;