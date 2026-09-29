import React, { useState, useEffect } from 'react';
import { mockQuestionsData } from '../data/mockQuestionsData';
import { MockQuestion, MockQuestionOption } from '../types/medical';
import { medicalImages } from '../assets/images';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Clock, 
  Flag, 
  EyeOff, 
  Eye, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Award,
  Sparkles,
  Bookmark
} from 'lucide-react';

interface MockExamEngineProps {
  onToggleBookmark: (id: string, type: 'question') => void;
  isBookmarked: (id: string) => boolean;
  onExamComplete?: (score: number, total: number) => void;
}

export const MockExamEngine: React.FC<MockExamEngineProps> = ({
  onToggleBookmark,
  isBookmarked,
  onExamComplete
}) => {
  const [examMode, setExamMode] = useState<'tutor' | 'timed'>('tutor');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<string, boolean>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [timeRemainingSec, setTimeRemainingSec] = useState<number>(mockQuestionsData.length * 90); // 90 sec per question

  const currentQ: MockQuestion = mockQuestionsData[currentIndex];
  const selectedOptionIndex = selectedAnswers[currentIndex];
  const isAnswered = selectedOptionIndex !== undefined;

  // Timer countdown for timed mode
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (examMode === 'timed' && !isExamSubmitted && timeRemainingSec > 0) {
      timer = setInterval(() => {
        setTimeRemainingSec((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsExamSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examMode, isExamSubmitted, timeRemainingSec]);

  const handleSelectOption = (optIndex: number) => {
    if (isExamSubmitted) return;
    if (examMode === 'timed' || selectedOptionIndex === undefined) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentIndex]: optIndex
      }));
    }
  };

  const handleToggleEliminate = (e: React.MouseEvent, letter: string) => {
    e.stopPropagation();
    const key = `${currentIndex}-${letter}`;
    setEliminatedOptions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [currentIndex]: !prev[currentIndex]
    }));
  };

  const handleSubmitExam = () => {
    setIsExamSubmitted(true);
    let correctCount = 0;
    mockQuestionsData.forEach((q, idx) => {
      const selected = selectedAnswers[idx];
      if (selected !== undefined && q.options[selected]?.isCorrect) {
        correctCount++;
      }
    });
    if (onExamComplete) {
      onExamComplete(correctCount, mockQuestionsData.length);
    }
  };

  const handleResetExam = (newMode: 'tutor' | 'timed') => {
    setExamMode(newMode);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setEliminatedOptions({});
    setFlaggedQuestions({});
    setIsExamSubmitted(false);
    setTimeRemainingSec(mockQuestionsData.length * 90);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Score calculation
  const calculateScore = () => {
    let correct = 0;
    mockQuestionsData.forEach((q, idx) => {
      const ans = selectedAnswers[idx];
      if (ans !== undefined && q.options[ans]?.isCorrect) {
        correct++;
      }
    });
    return {
      correct,
      total: mockQuestionsData.length,
      percentage: Math.round((correct / mockQuestionsData.length) * 100)
    };
  };

  const scoreData = calculateScore();

  const getImageSrc = (imageKey?: string) => {
    if (imageKey === 'cardiacAp') return medicalImages.cardiacAp;
    if (imageKey === 'autonomicSynapse') return medicalImages.autonomicSynapse;
    if (imageKey === 'pharmacophoreBanner') return medicalImages.pharmacophoreBanner;
    return medicalImages.hero;
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>Board Examination Engine</span>
            <span aria-hidden="true">·</span>
            <span>USMLE Step 1 / Step 2 & MBBS Clinical Vignettes</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Medical Sciences Mock Exam
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Prometric-style testing environment with option strikethrough, clinical vignettes, visual diagrams, and in-depth rationales for correct and distractor choices.
          </p>
        </div>

        {/* Mode Selector & Controls */}
        <div className="flex items-center gap-2">
          {!isExamSubmitted ? (
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              <button
                onClick={() => handleResetExam('tutor')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  examMode === 'tutor'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tutor Mode (Immediate Rationale)
              </button>
              <button
                onClick={() => handleResetExam('timed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  examMode === 'timed'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Timed Exam Block
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleResetExam(examMode)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Exam Block</span>
            </button>
          )}
        </div>
      </div>

      {/* Exam HUD & Top Toolbar */}
      <div className="bg-slate-900 text-white px-4 py-3 rounded-xl flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
            Question {currentIndex + 1} of {mockQuestionsData.length}
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
            {currentQ.system}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {examMode === 'timed' && !isExamSubmitted && (
            <div className="flex items-center gap-1.5 text-xs font-mono bg-slate-800 px-3 py-1 rounded-md text-amber-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatTime(timeRemainingSec)}</span>
            </div>
          )}

          <button
            onClick={handleToggleFlag}
            className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-md transition-colors ${
              flaggedQuestions[currentIndex]
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {flaggedQuestions[currentIndex] ? 'Marked for Review' : 'Mark'}
            </span>
          </button>

          <button
            onClick={() => onToggleBookmark(currentQ.id, 'question')}
            className="text-slate-300 hover:text-white p-1 rounded transition-colors"
            title="Bookmark Question"
          >
            <Bookmark
              className={`w-4 h-4 ${
                isBookmarked(currentQ.id) ? 'fill-cyan-400 text-cyan-400' : 'text-slate-400'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Main Exam Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Area: Vignette & Options (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
          
          {/* Question Clinical Vignette */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-800 uppercase tracking-wide">
              Case Vignette
            </div>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-serif">
              {currentQ.clinicalVignette}
            </p>
            <div className="pt-2 border-t border-slate-100">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>
            </div>
          </div>

          {/* Embedded Diagram Graphic (if question has visual) */}
          {currentQ.imageKey && (
            <div className="my-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="text-xs font-mono text-slate-500 mb-1 flex items-center justify-between">
                <span>Associated Reference Diagram:</span>
                <span className="text-cyan-700">{currentQ.system}</span>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-200 max-h-[220px]">
                <img
                  src={getImageSrc(currentQ.imageKey)}
                  alt="Clinical reference diagram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Multiple Choice Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = selectedOptionIndex === optIdx;
              const isEliminated = eliminatedOptions[`${currentIndex}-${option.letter}`];
              const showResult = (examMode === 'tutor' && isAnswered) || isExamSubmitted;
              const isCorrectAnswer = option.isCorrect;

              let optionStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
              if (showResult) {
                if (isCorrectAnswer) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-500';
                } else {
                  optionStyle = 'border-slate-200 bg-slate-50/60 text-slate-500 opacity-70';
                }
              } else if (isSelected) {
                optionStyle = 'border-cyan-600 bg-cyan-50/60 text-slate-900 font-semibold ring-1 ring-cyan-600';
              }

              return (
                <div
                  key={option.letter}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${optionStyle} ${
                    isEliminated ? 'opacity-40 line-through bg-slate-100' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="w-6 h-6 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {option.letter}
                    </span>
                    <span className="text-xs sm:text-sm leading-snug">
                      {option.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {/* Elimination Strikethrough Tool */}
                    {!showResult && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleEliminate(e, option.letter)}
                        className={`p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors ${
                          isEliminated ? 'text-rose-600' : ''
                        }`}
                        title="Strikethrough / Eliminate choice"
                      >
                        {isEliminated ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      </button>
                    )}

                    {showResult && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    )}
                    {showResult && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-rose-600" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentIndex < mockQuestionsData.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors flex items-center gap-1"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              !isExamSubmitted && (
                <button
                  onClick={handleSubmitExam}
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Submit Exam Block</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Area: Question Navigator & Rationale (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Question Grid Navigator */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-slate-900 uppercase font-mono">Question Navigator</span>
              <span className="text-slate-400 font-mono">
                {Object.keys(selectedAnswers).length}/{mockQuestionsData.length} Done
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {mockQuestionsData.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAns = selectedAnswers[idx] !== undefined;
                const isFlagged = flaggedQuestions[idx];
                const isCorrect = isExamSubmitted && isAns && q.options[selectedAnswers[idx]]?.isCorrect;
                const isWrong = isExamSubmitted && isAns && !q.options[selectedAnswers[idx]]?.isCorrect;

                let btnBg = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                if (isExamSubmitted) {
                  if (isCorrect) btnBg = 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold';
                  else if (isWrong) btnBg = 'bg-rose-100 border-rose-300 text-rose-900 font-bold';
                } else if (isCurrent) {
                  btnBg = 'bg-cyan-700 border-cyan-800 text-white font-bold ring-2 ring-cyan-500/30';
                } else if (isAns) {
                  btnBg = 'bg-slate-800 border-slate-900 text-white font-medium';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg border text-xs font-mono transition-all flex items-center justify-center relative ${btnBg}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Rationale Section (visible in tutor mode after answering or after submission) */}
          {((examMode === 'tutor' && isAnswered) || isExamSubmitted) ? (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-800 font-bold pb-2 border-b border-slate-100">
                <HelpCircle className="w-4 h-4 text-cyan-700" />
                <span>Comprehensive Visual Rationale</span>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-900 block mb-1">
                  Why the Correct Answer is Right:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                  {currentQ.detailedExplanation}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-slate-900 block mb-1.5">
                  Distractor Elimination Analysis:
                </span>
                <div className="space-y-2 text-xs">
                  {currentQ.options.map((opt) => (
                    <div key={opt.letter} className="p-2 rounded bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-800">Choice {opt.letter}: </span>
                      <span className="text-slate-600">{opt.distractorRationale}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
                <span className="font-bold block mb-0.5">High-Yield Takeaway:</span>
                <span>{currentQ.highYieldPearl}</span>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-500">
              {examMode === 'tutor' 
                ? 'Select an answer to reveal immediate step-by-step clinical explanations and distractor rationales.'
                : 'Timed examination mode active. Complete and submit all questions to view full scoring analytics and explanations.'}
            </div>
          )}

          {/* Exam Summary Card (after submit) */}
          {isExamSubmitted && (
            <div className="bg-emerald-950 text-white rounded-xl p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base font-display">Block Score Report</h3>
              </div>
              <div className="text-3xl font-bold font-mono text-emerald-300">
                {scoreData.percentage}%
              </div>
              <p className="text-xs text-emerald-200">
                You answered {scoreData.correct} out of {scoreData.total} questions correctly.
              </p>
              <button
                onClick={() => handleResetExam('tutor')}
                className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
              >
                Review All Explanations in Tutor Mode
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
