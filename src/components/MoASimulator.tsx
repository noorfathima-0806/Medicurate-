import React, { useState, useEffect } from 'react';
import { mechanismsData } from '../data/mechanismsData';
import { MechanismOfAction, MoAStep } from '../types/medical';
import { medicalImages } from '../assets/images';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Bookmark, 
  Zap,
  Target
} from 'lucide-react';

interface MoASimulatorProps {
  onToggleBookmark: (id: string, type: 'moa') => void;
  isBookmarked: (id: string) => boolean;
}

export const MoASimulator: React.FC<MoASimulatorProps> = ({
  onToggleBookmark,
  isBookmarked
}) => {
  const [selectedMoAId, setSelectedMoAId] = useState<string>(mechanismsData[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'details' | 'contraindications' | 'boardHook'>('details');

  const currentMoA: MechanismOfAction = mechanismsData.find((m) => m.id === selectedMoAId) || mechanismsData[0];
  const currentStep: MoAStep = currentMoA.steps[currentStepIndex] || currentMoA.steps[0];

  // Auto-play timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= currentMoA.steps.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentMoA.steps.length]);

  const handleSelectMoA = (id: string) => {
    setSelectedMoAId(id);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    if (currentStepIndex < currentMoA.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const getImageSrc = () => {
    if (currentMoA.imageKey === 'cardiacAp') return medicalImages.cardiacAp;
    if (currentMoA.imageKey === 'autonomicSynapse') return medicalImages.autonomicSynapse;
    if (currentMoA.imageKey === 'pharmacophoreBanner') return medicalImages.pharmacophoreBanner;
    return medicalImages.hero;
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>Visual Pharmacology</span>
            <span aria-hidden="true">·</span>
            <span>Mechanism of Action (MoA) Interactive Simulator</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Mechanisms of Action & Drug Targets
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Dynamic, step-by-step biological process simulations displaying cellular signaling cascades, ion fluxes, receptor kinetics, and therapeutic interventions.
          </p>
        </div>

        {/* Mechanism Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
          {mechanismsData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectMoA(item.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedMoAId === item.id
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.title.split(' & ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Zone Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Zone: Interactive Stage & Dynamic Diagram (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          
          {/* Header Bar */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 block tracking-wide uppercase">
                {currentMoA.system} System · Target: {currentMoA.therapeuticTarget}
              </span>
              <h2 className="text-lg font-bold text-white font-display">
                {currentMoA.title}
              </h2>
            </div>
            <button
              onClick={() => onToggleBookmark(currentMoA.id, 'moa')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Bookmark MoA"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked(currentMoA.id) ? 'fill-cyan-400 text-cyan-400' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* Interactive Visual Stage with Diagram Graphic */}
          <div className="relative bg-slate-950 min-h-[360px] flex flex-col items-center justify-center overflow-hidden">
            {/* Textbook Diagram Image Overlay with Scrim */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                src={getImageSrc()}
                alt={currentMoA.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-radial from-slate-950/70 via-slate-950/90 to-slate-950" />
            </div>

            {/* Interactive Vector Overlay */}
            <div className="relative z-10 w-full max-w-[520px] aspect-[16/10] p-4 flex flex-col justify-between">
              
              {/* Top HUD Status */}
              <div className="flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-cyan-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STEP {currentStep.stepNumber + 1} OF {currentMoA.steps.length}</span>
                </div>
                <span className="text-slate-300 truncate max-w-[200px]">
                  {currentStep.targetSite}
                </span>
              </div>

              {/* Dynamic Center Simulation Visuals */}
              <div className="my-auto text-center py-6 px-4 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/80 border border-cyan-700 text-cyan-300 rounded-full text-xs font-mono mb-2">
                  <Target className="w-3.5 h-3.5" />
                  <span>{currentStep.targetSite}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {currentStep.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  {currentStep.cellularEvent}
                </p>

                {/* Animated Flow Particles / Indicators */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  {currentMoA.steps.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStepIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === currentStepIndex
                          ? 'w-8 bg-cyan-400 shadow-sm shadow-cyan-500/50'
                          : idx < currentStepIndex
                          ? 'w-2.5 bg-emerald-500'
                          : 'w-2.5 bg-slate-700 hover:bg-slate-600'
                      }`}
                      title={`Step ${idx + 1}: ${s.title}`}
                    />
                  ))}
                </div>
              </div>

              {/* Interactive Drug Action Banner on Canvas */}
              <div className="bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-2 rounded-lg text-xs text-emerald-200">
                <span className="font-bold text-emerald-300 font-mono block mb-0.5">
                  PHARMACOLOGICAL INTERVENTION:
                </span>
                <p className="text-emerald-100 leading-snug">
                  {currentStep.drugAction}
                </p>
              </div>
            </div>

            {/* Playback Controls Footer Bar */}
            <div className="w-full bg-slate-900 border-t border-slate-800 px-4 py-3 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>Auto-Play</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setCurrentStepIndex(0);
                    setIsPlaying(false);
                  }}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                  title="Reset to Step 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none rounded-md transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  {currentStepIndex + 1}/{currentMoA.steps.length}
                </span>
                <button
                  onClick={handleNextStep}
                  disabled={currentStepIndex === currentMoA.steps.length - 1}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none rounded-md transition-colors flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone: Concept Deck & Clinical Correlations (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Sub-tab selection */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setActiveTab('details')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'details'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Step Details
            </button>
            <button
              onClick={() => setActiveTab('contraindications')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'contraindications'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Safety & Toxicity
            </button>
            <button
              onClick={() => setActiveTab('boardHook')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'boardHook'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Board Vignette
            </button>
          </div>

          {/* Tab 1: Step Details */}
          {activeTab === 'details' && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-700" />
                    <span>Clinical Impact & Hemodynamics</span>
                  </h3>
                  <span className="text-xs font-mono text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                    Step {currentStep.stepNumber + 1}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Therapeutic & Physiologic Impact
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {currentStep.clinicalImpact}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                    Cellular Event
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentStep.cellularEvent}
                  </p>
                </div>
              </div>

              {/* Prototype Drugs List */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
                <h4 className="text-xs font-bold text-slate-900 uppercase font-mono mb-2">
                  Key Drug Prototypes in Pathway:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentMoA.prototypeDrugs.map((drug, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200 font-mono"
                    >
                      {drug}
                    </span>
                  ))}
                </div>
              </div>

              {/* High Yield Pearl Card */}
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-cyan-950 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                  <span>High-Yield Retention Hook</span>
                </div>
                <p className="text-cyan-900 leading-relaxed">
                  {currentMoA.keyClinicalPearl}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Contraindications & Adverse Effects */}
          {activeTab === 'contraindications' && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
                <div>
                  <h3 className="font-bold text-rose-900 text-sm flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Strict Contraindications</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentMoA.contraindications.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-rose-50/50 p-2.5 rounded-md border border-rose-100">
                        <span className="text-rose-600 font-bold">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-amber-900 text-sm flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Adverse Drug Reactions (ADRs)</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {currentMoA.adverseEffects.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-amber-50/50 p-2.5 rounded-md border border-amber-100">
                        <span className="text-amber-600 font-bold">▲</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Board Vignette Hook */}
          {activeTab === 'boardHook' && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
              <div className="flex items-center gap-1.5 text-indigo-900 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>USMLE / Board Vignette Question Hook</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-indigo-50/60 p-4 rounded-lg border border-indigo-100">
                {currentMoA.boardQuestionHook}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Tip: These specific patient vignettes appear verbatim in board question stems. Focus on recognizing the adverse effect pattern to identify the implicated enzyme or channel blocker.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
