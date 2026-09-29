/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { ChemicalViewer } from './components/ChemicalViewer';
import { MoASimulator } from './components/MoASimulator';
import { MnemonicsDeck } from './components/MnemonicsDeck';
import { MockExamEngine } from './components/MockExamEngine';
import { RapidRecallDrill } from './components/RapidRecallDrill';
import { SummariesView } from './components/SummariesView';
import { BookmarksModal } from './components/BookmarksModal';
import { AppDownloadCenter } from './components/AppDownloadCenter';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  GraduationCap, 
  Layers, 
  Cpu, 
  CheckCircle,
  HelpCircle,
  FlaskConical,
  Zap,
  BookOpen,
  Download
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('chemical');
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('medcurate_bookmarks');
      return saved ? JSON.parse(saved) : ['beta-lactam', 'mn-at-30-cell-at-50'];
    } catch {
      return ['beta-lactam', 'mn-at-30-cell-at-50'];
    }
  });
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [testScoreSummary, setTestScoreSummary] = useState<{ completed: number; avgScore: number }>({
    completed: 0,
    avgScore: 0
  });

  useEffect(() => {
    try {
      localStorage.setItem('medcurate_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const handleNavigateToItem = (id: string, tab: NavTab) => {
    setActiveTab(tab);
  };

  const handleExamComplete = (score: number, total: number) => {
    const pct = Math.round((score / total) * 100);
    setTestScoreSummary((prev) => ({
      completed: prev.completed + 1,
      avgScore: prev.completed === 0 ? pct : Math.round((prev.avgScore + pct) / 2)
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-900">
      
      {/* 3-Zone Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        bookmarkCount={bookmarks.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        testScoreSummary={testScoreSummary}
      />

      {/* Hero Announcement & Zero-Ad Guarantee Banner */}
      <section className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span className="font-semibold text-emerald-300">100% Free Non-Commercial Platform:</span>
            <span className="text-slate-300">
              Zero advertisements, no premium paywalls, no tracking. Curated strictly for medical & healthcare science students worldwide.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px] shrink-0">
            <span>USMLE Step 1 & 2</span>
            <span aria-hidden="true">·</span>
            <span>MBBS Pharm</span>
            <span aria-hidden="true">·</span>
            <span>NCLEX-RN</span>
          </div>
        </div>
      </section>

      {/* Main Educational Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Quick System Navigation Pills / Switcher for instant access */}
        <div className="mb-6 p-1.5 bg-slate-200/80 rounded-xl flex items-center gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab('chemical')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'chemical'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FlaskConical className="w-4 h-4 text-cyan-700" />
            <span>Chemical Structures (SAR)</span>
          </button>

          <button
            onClick={() => setActiveTab('moa')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'moa'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-4 h-4 text-cyan-700" />
            <span>Pharmacology & MoA</span>
          </button>

          <button
            onClick={() => setActiveTab('mnemonics')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'mnemonics'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-700" />
            <span>High-Yield Mnemonics</span>
          </button>

          <button
            onClick={() => setActiveTab('mock-exam')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'mock-exam'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-cyan-700" />
            <span>Mock Test & Vignettes</span>
          </button>

          <button
            onClick={() => setActiveTab('rapid-drill')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'rapid-drill'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4 text-cyan-700" />
            <span>Rapid Recall Blitz</span>
          </button>

          <button
            onClick={() => setActiveTab('summaries')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'summaries'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-700" />
            <span>Quick Summaries</span>
          </button>

          <button
            onClick={() => setActiveTab('download')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'download'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100 font-semibold'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Download & Offline App</span>
          </button>
        </div>

        {/* Tab Routing */}
        {activeTab === 'chemical' && (
          <ChemicalViewer
            onToggleBookmark={toggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {activeTab === 'moa' && (
          <MoASimulator
            onToggleBookmark={toggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {activeTab === 'mnemonics' && (
          <MnemonicsDeck
            onToggleBookmark={toggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {activeTab === 'mock-exam' && (
          <MockExamEngine
            onToggleBookmark={toggleBookmark}
            isBookmarked={isBookmarked}
            onExamComplete={handleExamComplete}
          />
        )}

        {activeTab === 'rapid-drill' && (
          <RapidRecallDrill />
        )}

        {activeTab === 'summaries' && (
          <SummariesView />
        )}

        {activeTab === 'download' && (
          <AppDownloadCenter
            bookmarks={bookmarks}
          />
        )}

      </main>

      {/* Bookmarks Modal */}
      <BookmarksModal
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        bookmarks={bookmarks}
        onRemoveBookmark={toggleBookmark}
        onNavigateToItem={handleNavigateToItem}
      />

      {/* Quiet Academic Footer (Strictly Anti-Slop: No fake telemetry or runtime tickers) */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span className="font-semibold text-slate-900">MedCurate</span>
            <span className="mx-2">·</span>
            <span>Free Open-Access Medical Sciences & Pharmacology Study Suite</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400">
            <button
              onClick={() => setActiveTab('download')}
              className="hover:text-cyan-700 transition-colors flex items-center gap-1 text-slate-600 font-semibold cursor-pointer"
            >
              <Download className="w-3 h-3 text-cyan-600" />
              <span>Install App & Offline Packs</span>
            </button>
            <span aria-hidden="true">·</span>
            <span>Zero Ads Guarantee</span>
            <span aria-hidden="true">·</span>
            <span>Local Browser Storage</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
