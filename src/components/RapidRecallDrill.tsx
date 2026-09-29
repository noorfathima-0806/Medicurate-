import React, { useState, useEffect } from 'react';
import { rapidRecallData } from '../data/rapidRecallData';
import { RapidRecallCard } from '../types/medical';
import { 
  Timer, 
  RotateCcw, 
  Check, 
  X, 
  Sparkles, 
  Flame, 
  Award,
  ChevronRight,
  Eye
} from 'lucide-react';

export const RapidRecallDrill: React.FC = () => {
  const [cards, setCards] = useState<RapidRecallCard[]>(rapidRecallData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [highestStreak, setHighestStreak] = useState<number>(0);
  const [stats, setStats] = useState<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [isDrillFinished, setIsDrillFinished] = useState<boolean>(false);

  const currentCard = cards[currentIndex];

  // 15s timer for rapid drill
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isRevealed && !isDrillFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRevealed(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRevealed, isDrillFinished, timeLeft]);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = (known: boolean) => {
    if (known) {
      setStreak((s) => {
        const next = s + 1;
        if (next > highestStreak) setHighestStreak(next);
        return next;
      });
      setStats((st) => ({ ...st, correct: st.correct + 1 }));
    } else {
      setStreak(0);
      setStats((st) => ({ ...st, incorrect: st.incorrect + 1 }));
    }

    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsRevealed(false);
      setTimeLeft(15);
    } else {
      setIsDrillFinished(true);
    }
  };

  const handleRestart = () => {
    // Shuffle cards
    const shuffled = [...rapidRecallData].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsRevealed(false);
    setStreak(0);
    setStats({ correct: 0, incorrect: 0 });
    setTimeLeft(15);
    setIsDrillFinished(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>High-Intensity Training</span>
            <span aria-hidden="true">·</span>
            <span>Speed Blitz Recall</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Rapid Knowledge Retention Drill
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            15-second timed flash questions designed to build instantaneous recall of antidotes, drug prototypes, enzymatic targets, and diagnostic criteria.
          </p>
        </div>

        {/* Drill Controls */}
        <button
          onClick={handleRestart}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Shuffle & Restart Drill</span>
        </button>
      </div>

      {/* Drill HUD Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-mono block">PROGRESS</span>
          <span className="text-lg font-bold font-mono text-slate-900">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-mono block">STREAK</span>
            <span className="text-lg font-bold font-mono text-amber-600 flex items-center gap-1">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{streak}</span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Best: {highestStreak}</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs text-slate-500 font-mono block">ACCURACY</span>
          <span className="text-lg font-bold font-mono text-emerald-600">
            {stats.correct + stats.incorrect > 0
              ? `${Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)}%`
              : '100%'}
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-mono block">TIME REMAINING</span>
            <span className={`text-lg font-bold font-mono ${timeLeft <= 5 ? 'text-rose-600 animate-pulse' : 'text-slate-900'}`}>
              {timeLeft}s
            </span>
          </div>
          <Timer className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      {/* Main Flash Drill Card */}
      {!isDrillFinished ? (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Card Category Header */}
          <div className="px-6 py-3 bg-slate-900 text-white flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {currentCard.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              CARD #{currentIndex + 1}
            </span>
          </div>

          {/* Question / Prompt Section */}
          <div className="p-8 text-center space-y-4">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wide block">
              {currentCard.subPrompt}
            </span>

            <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 max-w-2xl mx-auto leading-snug">
              {currentCard.prompt}
            </h2>

            {/* Answer Reveal Stage */}
            {isRevealed ? (
              <div className="pt-6 border-t border-slate-100 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 max-w-xl mx-auto">
                  <span className="text-xs font-mono text-emerald-800 uppercase block mb-1">
                    HIGH-YIELD ANSWER
                  </span>
                  <div className="text-xl font-bold text-emerald-950 font-display">
                    {currentCard.answer}
                  </div>
                  <p className="text-xs text-emerald-900 mt-2 leading-relaxed">
                    {currentCard.explanation}
                  </p>
                  {currentCard.mnemonicHook && (
                    <div className="mt-2 text-xs font-mono text-cyan-800 bg-cyan-100/70 py-1 px-2.5 rounded-md inline-block">
                      Mnemonic: {currentCard.mnemonicHook}
                    </div>
                  )}
                </div>

                {/* Self-Rating Buttons */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => handleNext(false)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Missed It / Need Review</span>
                  </button>

                  <button
                    onClick={() => handleNext(true)}
                    className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    <span>I Knew It! (Next Card)</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="pt-8">
                <button
                  onClick={handleReveal}
                  className="px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-xl text-sm shadow-xs transition-all flex items-center gap-2 mx-auto"
                >
                  <Eye className="w-4 h-4" />
                  <span>Reveal Answer & Explanation</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Completion Score Screen */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Award className="w-7 h-7" />
          </div>

          <h2 className="text-2xl font-bold font-display text-slate-900">
            Rapid Recall Session Complete!
          </h2>

          <div className="max-w-md mx-auto grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-mono text-slate-500 block">CARDS MASTERED</span>
              <span className="text-2xl font-bold font-mono text-emerald-600">
                {stats.correct} / {cards.length}
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-mono text-slate-500 block">MAX STREAK</span>
              <span className="text-2xl font-bold font-mono text-amber-600">
                {highestStreak}
              </span>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Start Fresh Drill Round</span>
          </button>
        </div>
      )}
    </div>
  );
};
