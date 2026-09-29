import React, { useState } from 'react';
import { mnemonicsData } from '../data/mnemonicsData';
import { MnemonicItem } from '../types/medical';
import { Search, Bookmark, Sparkles, BookOpen, Layers, CheckCircle2, RotateCw } from 'lucide-react';

interface MnemonicsDeckProps {
  onToggleBookmark: (id: string, type: 'mnemonic') => void;
  isBookmarked: (id: string) => boolean;
}

export const MnemonicsDeck: React.FC<MnemonicsDeckProps> = ({
  onToggleBookmark,
  isBookmarked
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSystem, setSelectedSystem] = useState<string>('All');
  const [isFlashcardMode, setIsFlashcardMode] = useState<boolean>(false);
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});

  const systems = ['All', 'Autonomic', 'Antimicrobial', 'Cardiovascular', 'Renal & Electrolytes', 'Biochemistry'];

  const filteredMnemonics = mnemonicsData.filter((item) => {
    const matchesSystem = selectedSystem === 'All' || item.category === selectedSystem;
    const matchesQuery = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phrase.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.clinicalTopic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.breakdown.some(b => b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.meaning.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSystem && matchesQuery;
  });

  const toggleReveal = (id: string) => {
    setRevealedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>High-Yield Memory Palace</span>
            <span aria-hidden="true">·</span>
            <span>Visual Mnemonics & Rapid Retention</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            High-Yield Medical Mnemonics
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Visually characterized mnemonic systems with letter-by-letter biochemical breakdowns, high-yield associations, and interactive flashcard recall.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isFlashcardMode
                ? 'bg-cyan-700 text-white border-cyan-800 shadow-xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{isFlashcardMode ? 'Flashcard Mode: ON' : 'Study Mode: All Open'}</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search mnemonics, drugs, receptors, or diseases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
          />
        </div>

        {/* System Category Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto">
          {systems.map((sys) => (
            <button
              key={sys}
              onClick={() => setSelectedSystem(sys)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedSystem === sys
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {sys}
            </button>
          ))}
        </div>
      </div>

      {/* Mnemonics Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMnemonics.map((item) => {
          const isRevealed = !isFlashcardMode || revealedCards[item.id];

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-5 border-b border-slate-100">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    {/* Unboxed clean metadata (Zero-Pill rule) */}
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 mb-1">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.frequentlyTestedOn}</span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 font-display">
                      {item.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => onToggleBookmark(item.id, 'mnemonic')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
                    title="Bookmark Mnemonic"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isBookmarked(item.id) ? 'fill-cyan-600 text-cyan-600' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Big Visual Phrase Banner */}
                <div className="p-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg text-white font-mono text-center flex items-center justify-between">
                  <span className="text-xs uppercase text-cyan-400 font-sans tracking-wider">
                    High-Yield Catchphrase:
                  </span>
                  <span className="text-sm sm:text-base font-bold text-cyan-200 font-mono">
                    "{item.phrase}"
                  </span>
                </div>
              </div>

              {/* Card Body: Breakdown */}
              <div className="p-5 flex-1 space-y-4">
                {isFlashcardMode && !isRevealed ? (
                  <div className="py-12 px-4 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <p className="text-sm text-slate-600 font-medium mb-3">
                      Can you recall each letter's meaning and clinical consequence?
                    </p>
                    <button
                      onClick={() => toggleReveal(item.id)}
                      className="px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      Flip Card / Reveal Breakdown
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Letter-by-Letter Characterization */}
                    <div className="space-y-2.5">
                      {item.breakdown.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-3 bg-slate-50/80 rounded-lg border border-slate-100 flex items-start gap-3"
                        >
                          {/* Letter Badge */}
                          <div className="w-8 h-8 rounded-lg bg-cyan-700 text-white flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs">
                            {b.letter}
                          </div>

                          {/* Letter Content */}
                          <div className="flex-1 text-xs">
                            <div className="flex items-center justify-between gap-2 mb-0.5">
                              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                                {b.title}
                              </span>
                              <span className="font-mono text-cyan-800 text-[11px] bg-cyan-100/60 px-1.5 py-0.5 rounded">
                                {b.visualTag}
                              </span>
                            </div>
                            <p className="text-slate-600 mb-1 leading-snug">
                              {b.meaning}
                            </p>
                            <p className="text-slate-800 font-medium leading-relaxed bg-white p-2 rounded border border-slate-200/60">
                              <span className="text-cyan-800 font-semibold">Board Hook: </span>
                              {b.highYieldAssociation}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Rapid Recall Pearl */}
                    <div className="bg-cyan-50/70 border border-cyan-200 p-3 rounded-lg text-xs text-cyan-900">
                      <span className="font-bold block mb-0.5">Rapid Takeaway:</span>
                      <span>{item.rapidRecallPearl}</span>
                    </div>

                    {isFlashcardMode && (
                      <div className="text-right">
                        <button
                          onClick={() => toggleReveal(item.id)}
                          className="text-xs text-slate-500 hover:text-slate-800 underline"
                        >
                          Hide breakdown (Flip back)
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Clinical Topic: {item.clinicalTopic}</span>
                <span className="font-mono text-[11px] text-emerald-700 font-medium">
                  Verified USMLE Guideline
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
