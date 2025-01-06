import { Link, useLocation } from 'react-router-dom';
import { Compass, Map, User, Users, Trophy } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Map, label: 'Quests (Coming Soon)', path: '/quests' },
    { icon: Users, label: 'Community (Coming Soon)', path: '/community' },
    { icon: Compass, label: 'Wander', path: '/', primary: true },
    { icon: Trophy, label: 'Challenges (Coming Soon)', path: '/challenges' },
    { icon: User, label: 'Profile (Coming Soon)', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-700 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="flex items-center justify-around -mt-6 pb-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label} className={item.primary ? 'z-10' : ''}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center p-3 transition-all ${
                    item.primary
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 rounded-full -mt-5 shadow-lg'
                      : isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <item.icon
                    className={`${item.primary ? 'w-5 h-5' : 'w-6 h-6'}`}
                  />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;