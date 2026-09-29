import React from 'react';
import { Bookmark, Sparkles, BookOpen, Download } from 'lucide-react';
import { OfflineStatus } from './OfflineStatus';

export type NavTab = 
  | 'chemical' 
  | 'moa' 
  | 'mnemonics' 
  | 'mock-exam' 
  | 'rapid-drill' 
  | 'summaries'
  | 'download';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  bookmarkCount: number;
  onOpenBookmarks: () => void;
  testScoreSummary?: { completed: number; avgScore: number };
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  bookmarkCount,
  onOpenBookmarks,
  testScoreSummary
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('chemical')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 font-display group-hover:text-cyan-700 transition-colors">
            MedCurate
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs font-mono text-slate-400">
            MD · MBBS · USMLE
          </span>
        </button>

        {/* Zone 2: Navigation Links (single-line text with clean hover/active states) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            onClick={() => onSelectTab('chemical')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'chemical'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Chemical Structures
          </button>
          
          <button
            onClick={() => onSelectTab('moa')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'moa'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pharmacology & MoA
          </button>

          <button
            onClick={() => onSelectTab('mnemonics')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'mnemonics'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            High-Yield Mnemonics
          </button>

          <button
            onClick={() => onSelectTab('mock-exam')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'mock-exam'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Mock Exam Engine
          </button>

          <button
            onClick={() => onSelectTab('rapid-drill')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'rapid-drill'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Rapid Recall Drill
          </button>

          <button
            onClick={() => onSelectTab('summaries')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'summaries'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quick Summaries
          </button>

          <button
            onClick={() => onSelectTab('download')}
            className={`px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'download'
                ? 'text-cyan-700 font-semibold border-b-2 border-cyan-600'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download App</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action & Bookmarks & Offline Status */}
        <div className="flex items-center gap-2 sm:gap-3">
          <OfflineStatus onOpenDownload={() => onSelectTab('download')} />

          <button
            onClick={onOpenBookmarks}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            title="Saved High-Yield Items"
          >
            <Bookmark className="w-3.5 h-3.5 text-cyan-600" />
            <span>Saved ({bookmarkCount})</span>
          </button>

          <button
            onClick={() => onSelectTab('download')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap bg-cyan-700 hover:bg-cyan-800 text-white cursor-pointer"
            title="Download & Install Application"
          >
            <Download className="w-3.5 h-3.5 text-cyan-200" />
            <span>Download App</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="lg:hidden border-t border-slate-100 bg-slate-50/90 overflow-x-auto py-2 px-4 flex items-center gap-2 scrollbar-none">
        <button
          onClick={() => onSelectTab('chemical')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'chemical' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Chemical Structures
        </button>
        <button
          onClick={() => onSelectTab('moa')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'moa' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Pharmacology & MoA
        </button>
        <button
          onClick={() => onSelectTab('mnemonics')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'mnemonics' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Mnemonics
        </button>
        <button
          onClick={() => onSelectTab('mock-exam')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'mock-exam' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Mock Exam
        </button>
        <button
          onClick={() => onSelectTab('rapid-drill')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'rapid-drill' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Recall Drill
        </button>
        <button
          onClick={() => onSelectTab('summaries')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
            activeTab === 'summaries' ? 'bg-cyan-700 text-white' : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          Summaries
        </button>
        <button
          onClick={() => onSelectTab('download')}
          className={`px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1 ${
            activeTab === 'download' ? 'bg-emerald-700 text-white' : 'text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-semibold'
          }`}
        >
          <Download className="w-3 h-3" />
          <span>Download App</span>
        </button>
      </div>
    </header>
  );
};
