
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'history', label: '연혁' },
    { id: 'programs', label: '활동' },
    { id: 'advice', label: 'AI 파트찾기' },
    { id: 'contact', label: '문의/모집' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-serif">
              THE JAM CHOIR
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  activeSection === item.id ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu toggle would go here */}
            <button className="text-slate-600 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
