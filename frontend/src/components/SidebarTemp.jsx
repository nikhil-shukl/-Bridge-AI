import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Brain,
  Compass,
  Briefcase,
  Sparkles,
  FileText,
  Layers,
  Search,
  User,
  LogOut,
  TrendingUp,
  Map,
  Zap,
  MessageSquare   // <-- IMPORTED for Mock Interview
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    {
      category: 'HOME',
      items: [
        { name: 'Dashboard', icon: Home, path: '/analyzer' }
      ]
    },
    {
      category: 'EXPLORE',
      items: [
        { name: 'Skill Chart', icon: Compass, path: '/skill_chart' },
        { name: 'Role Match', icon: Briefcase, path: '/role-match' },
        { name: 'Skill Gap', icon: TrendingUp, path: '/skill-gap' },
        { name: 'Growth Simulator', icon: Zap, path: '/growth-simulator' },
        { name: 'Career Roadmap', icon: Map, path: '/roadmap' }
      ]
    },
    {
      category: 'TOOLS',
      items: [
        { name: 'Bridge Mentor AI', icon: Sparkles, path: '/mentor' },

       
        { name: 'Resume Studio', icon: Layers, path: '/resume-studio' },
        { name: 'Mock Interview', icon: MessageSquare, path: '/mock-interview' }
      ]
    },
    {
      category: 'ACCOUNT',
      items: [
        { name: 'Log-Out', icon: LogOut, path: '/logout' }
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-2xl border-r border-slate-200 z-50 shadow-sm">
      {/* Logo area */}
      <div className="p-5 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-slate-950">Bridge-AI</div>
            <div className="text-xs text-slate-500">Career intelligence</div>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-80px)]">
        {navItems.map((section) => (
          <div key={section.category}>
            <h3 className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {section.category}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
