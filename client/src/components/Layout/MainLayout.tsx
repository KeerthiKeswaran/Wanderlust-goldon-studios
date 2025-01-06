import React from 'react';
import Navigation from './Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <main className="pb-[80px]">{children}</main>
      <Navigation />
    </div>
  );
};

export default MainLayout;