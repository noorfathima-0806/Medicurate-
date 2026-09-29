import React, { useState } from 'react';
import { chemicalStructuresData } from '../data/chemicalStructuresData';
import { ChemicalStructureItem, FunctionalGroup } from '../types/medical';
import { Info, Sparkles, BookOpen, Layers, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';

interface ChemicalViewerProps {
  onToggleBookmark: (id: string, type: 'chemical') => void;
  isBookmarked: (id: string) => boolean;
}

export const ChemicalViewer: React.FC<ChemicalViewerProps> = ({
  onToggleBookmark,
  isBookmarked
}) => {
  const [selectedId, setSelectedId] = useState<string>(chemicalStructuresData[0].id);
  const [activeGroup, setActiveGroup] = useState<FunctionalGroup | null>(
    chemicalStructuresData[0].functionalGroups[0]
  );
  const [activeSARIndex, setActiveSARIndex] = useState<number>(0);

  const currentStructure = chemicalStructuresData.find((s) => s.id === selectedId) || chemicalStructuresData[0];

  const handleSelectStructure = (structure: ChemicalStructureItem) => {
    setSelectedId(structure.id);
    setActiveGroup(structure.functionalGroups[0] || null);
    setActiveSARIndex(0);
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>Medicinal Chemistry</span>
            <span aria-hidden="true">·</span>
            <span>Pharmacophore Visualizer</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Chemical Structures & Pharmacophores
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Interactive 2D molecular structures with clickable functional groups, Structure-Activity Relationship (SAR) rules, and high-yield board exam clinical correlations.
          </p>
        </div>

        {/* Structure Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
          {chemicalStructuresData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectStructure(item)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedId === item.id
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name.split(' (')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Zone Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Zone: Interactive Chemical Canvas Stage (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 block tracking-wide uppercase">
                {currentStructure.system} · {currentStructure.chemicalClass}
              </span>
              <h2 className="text-lg font-bold text-white font-display">
                {currentStructure.name}
              </h2>
            </div>
            <button
              onClick={() => onToggleBookmark(currentStructure.id, 'chemical')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Bookmark Structure"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked(currentStructure.id) ? 'fill-cyan-400 text-cyan-400' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* Molecular Formula & Metadata Bar */}
          <div className="px-4 py-2.5 bg-slate-800/90 text-slate-300 text-xs flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 font-mono">
            <div>
              <span className="text-slate-400">Formula/Core: </span>
              <span className="text-cyan-300">{currentStructure.iupacOrFormula}</span>
            </div>
            <div>
              <span className="text-slate-400">Mol. Wt: </span>
              <span className="text-slate-200">{currentStructure.molecularWeight}</span>
            </div>
          </div>

          {/* Interactive Chemical SVG Canvas */}
          <div className="relative p-6 bg-radial from-slate-900 via-slate-950 to-slate-950 flex flex-col items-center justify-center min-h-[360px]">
            <p className="text-xs font-mono text-slate-400 mb-3 text-center">
              Click any colored target circle to inspect functional group role & SAR impact
            </p>

            {/* SVG Render for specific core */}
            <div className="w-full max-w-[480px] aspect-[4/3] relative">
              <svg
                viewBox="0 0 500 360"
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
              >
                {/* Defs for gradients & patterns */}
                <defs>
                  <linearGradient id="bondGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Render Structure Bonds & Atoms */}
                {selectedId === 'beta-lactam' && (
                  <g className="chemical-bonds">
                    {/* Beta-lactam 4-membered ring */}
                    <rect x="210" y="130" width="60" height="60" rx="3" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                    {/* Carbonyl double bond on beta-lactam */}
                    <line x1="210" y1="140" x2="175" y2="140" stroke="#f87171" strokeWidth="4" />
                    <line x1="210" y1="148" x2="175" y2="148" stroke="#f87171" strokeWidth="4" />
                    <text x="155" y="148" fill="#f87171" fontSize="16" fontWeight="bold" fontFamily="monospace">O</text>

                    {/* Thiazolidine 5-membered ring fused to beta-lactam */}
                    <polygon points="270,130 330,110 360,160 330,190 270,190" fill="none" stroke="#93c5fd" strokeWidth="4" />
                    <text x="325" y="112" fill="#fbbf24" fontSize="16" fontWeight="bold" fontFamily="monospace">S</text>
                    
                    {/* Gem-dimethyl groups on thiazolidine */}
                    <line x1="360" y1="160" x2="410" y2="135" stroke="#94a3b8" strokeWidth="3" />
                    <text x="415" y="135" fill="#cbd5e1" fontSize="13" fontFamily="monospace">CH3</text>
                    <line x1="360" y1="160" x2="415" y2="175" stroke="#94a3b8" strokeWidth="3" />
                    <text x="420" y="180" fill="#cbd5e1" fontSize="13" fontFamily="monospace">CH3</text>

                    {/* C3 Carboxylate */}
                    <line x1="330" y1="190" x2="355" y2="245" stroke="#fbbf24" strokeWidth="3" />
                    <text x="350" y="265" fill="#f59e0b" fontSize="15" fontWeight="bold" fontFamily="monospace">COO⁻</text>

                    {/* Beta-lactam Nitrogen */}
                    <text x="264" y="188" fill="#60a5fa" fontSize="16" fontWeight="bold" fontFamily="monospace">N</text>

                    {/* Acylamino Side Chain on C6 */}
                    <line x1="210" y1="190" x2="160" y2="210" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="3 3" />
                    <text x="135" y="225" fill="#60a5fa" fontSize="14" fontFamily="monospace">NH</text>
                    <line x1="130" y1="215" x2="105" y2="185" stroke="#e2e8f0" strokeWidth="3" />
                    {/* Amide Carbonyl */}
                    <line x1="102" y1="185" x2="102" y2="150" stroke="#f87171" strokeWidth="3" />
                    <line x1="108" y1="185" x2="108" y2="150" stroke="#f87171" strokeWidth="3" />
                    <text x="100" y="145" fill="#f87171" fontSize="14" fontFamily="monospace">O</text>
                    {/* R side chain bond */}
                    <line x1="105" y1="185" x2="60" y2="195" stroke="#34d399" strokeWidth="4" />
                    <circle cx="50" cy="198" r="16" fill="#065f46" stroke="#34d399" strokeWidth="2" />
                    <text x="44" y="204" fill="#6ee7b7" fontSize="16" fontWeight="bold" fontFamily="monospace">R</text>

                    {/* Strain Annotation */}
                    <text x="215" y="235" fill="#ef4444" fontSize="12" fontFamily="monospace">90° High Ring Strain</text>
                  </g>
                )}

                {selectedId === 'catecholamine' && (
                  <g className="chemical-bonds">
                    {/* Benzene Ring */}
                    <polygon points="170,120 215,145 215,195 170,220 125,195 125,145" fill="none" stroke="#38bdf8" strokeWidth="4" />
                    <circle cx="170" cy="170" r="28" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />

                    {/* 3-OH and 4-OH */}
                    <line x1="125" y1="145" x2="85" y2="125" stroke="#38bdf8" strokeWidth="3" />
                    <text x="50" y="125" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="monospace">3-OH</text>

                    <line x1="125" y1="195" x2="85" y2="215" stroke="#38bdf8" strokeWidth="3" />
                    <text x="50" y="225" fill="#38bdf8" fontSize="16" fontWeight="bold" fontFamily="monospace">4-OH</text>

                    {/* Ethylamine chain */}
                    <line x1="215" y1="170" x2="265" y2="145" stroke="#e2e8f0" strokeWidth="4" />
                    {/* Beta-OH */}
                    <line x1="265" y1="145" x2="265" y2="105" stroke="#34d399" strokeWidth="3" />
                    <text x="250" y="98" fill="#34d399" fontSize="15" fontWeight="bold" fontFamily="monospace">β-OH</text>

                    {/* Alpha Carbon */}
                    <line x1="265" y1="145" x2="325" y2="175" stroke="#e2e8f0" strokeWidth="4" />
                    {/* Optional Alpha-CH3 */}
                    <line x1="325" y1="175" x2="325" y2="220" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                    <text x="312" y="235" fill="#f59e0b" fontSize="12" fontFamily="monospace">α-CH3</text>

                    {/* Terminal Amine */}
                    <line x1="325" y1="175" x2="385" y2="150" stroke="#f87171" strokeWidth="4" />
                    <text x="390" y="156" fill="#f87171" fontSize="16" fontWeight="bold" fontFamily="monospace">NH-R</text>

                    {/* Pharmacophore Label */}
                    <text x="135" y="270" fill="#94a3b8" fontSize="12" fontFamily="monospace">Phenylethylamine Core</text>
                  </g>
                )}

                {selectedId === 'steroid-nucleus' && (
                  <g className="chemical-bonds">
                    {/* Ring A */}
                    <polygon points="120,200 155,180 155,240 120,260 85,240 85,180" fill="none" stroke="#f87171" strokeWidth="3" />
                    <text x="110" y="215" fill="#f87171" fontSize="14" fontWeight="bold">A</text>
                    {/* 3-Ketone */}
                    <line x1="85" y1="240" x2="50" y2="255" stroke="#ef4444" strokeWidth="3" />
                    <text x="30" y="265" fill="#ef4444" fontSize="14" fontWeight="bold">O=</text>

                    {/* Ring B */}
                    <polygon points="155,180 195,160 225,180 225,240 195,260 155,240" fill="none" stroke="#93c5fd" strokeWidth="3" />
                    <text x="185" y="215" fill="#93c5fd" fontSize="14" fontWeight="bold">B</text>

                    {/* Ring C */}
                    <polygon points="225,180 265,160 295,180 295,240 265,260 225,240" fill="none" stroke="#93c5fd" strokeWidth="3" />
                    <text x="255" y="215" fill="#93c5fd" fontSize="14" fontWeight="bold">C</text>
                    {/* C11-OH */}
                    <line x1="225" y1="180" x2="215" y2="135" stroke="#34d399" strokeWidth="3" />
                    <text x="195" y="125" fill="#34d399" fontSize="14" fontWeight="bold">11-OH</text>

                    {/* Ring D (5-membered) */}
                    <polygon points="295,180 345,170 365,210 330,240 295,240" fill="none" stroke="#60a5fa" strokeWidth="3" />
                    <text x="325" y="210" fill="#60a5fa" fontSize="14" fontWeight="bold">D</text>

                    {/* C17 Side Chain */}
                    <line x1="345" y1="170" x2="375" y2="130" stroke="#38bdf8" strokeWidth="3" />
                    <text x="380" y="125" fill="#38bdf8" fontSize="13" fontWeight="bold" fontFamily="monospace">-COCH2OH</text>
                  </g>
                )}

                {selectedId === 'benzodiazepine' && (
                  <g className="chemical-bonds">
                    {/* Ring A: Benzene */}
                    <polygon points="140,130 180,150 180,200 140,220 100,200 100,150" fill="none" stroke="#f87171" strokeWidth="3" />
                    <circle cx="140" cy="175" r="24" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
                    <text x="70" y="145" fill="#ef4444" fontSize="15" fontWeight="bold" fontFamily="monospace">7-Cl</text>
                    <line x1="100" y1="150" x2="85" y2="145" stroke="#ef4444" strokeWidth="3" />

                    {/* Ring B: 7-membered diazepine */}
                    <polygon points="180,150 230,130 270,160 270,210 230,240 180,220" fill="none" stroke="#38bdf8" strokeWidth="3" />
                    <text x="225" y="140" fill="#60a5fa" fontSize="14" fontWeight="bold">N1</text>
                    <text x="265" y="215" fill="#60a5fa" fontSize="14" fontWeight="bold">N4</text>
                    <text x="260" y="255" fill="#34d399" fontSize="14" fontWeight="bold">3-OH (LOT)</text>

                    {/* Ring C: 5-Phenyl */}
                    <polygon points="270,160 320,130 360,150 360,190 320,210 285,185" fill="none" stroke="#a78bfa" strokeWidth="3" />
                    <circle cx="325" cy="170" r="20" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 3" />
                  </g>
                )}

                {selectedId === 'opioid-skeleton' && (
                  <g className="chemical-bonds">
                    {/* A-Ring (Phenolic) */}
                    <polygon points="150,140 190,160 190,210 150,230 110,210 110,160" fill="none" stroke="#f87171" strokeWidth="3" />
                    <circle cx="150" cy="185" r="22" fill="none" stroke="#f87171" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="110" y1="160" x2="75" y2="145" stroke="#ef4444" strokeWidth="3" />
                    <text x="45" y="145" fill="#ef4444" fontSize="15" fontWeight="bold" fontFamily="monospace">3-OH</text>

                    {/* B & C Rings */}
                    <polygon points="190,160 240,150 270,190 240,240 190,230" fill="none" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="240" y1="240" x2="265" y2="270" stroke="#34d399" strokeWidth="3" />
                    <text x="270" y="280" fill="#34d399" fontSize="14" fontWeight="bold" fontFamily="monospace">6-OH</text>

                    {/* 4,5-Epoxy bridge */}
                    <line x1="150" y1="230" x2="190" y2="250" stroke="#fbbf24" strokeWidth="2" />
                    <circle cx="170" cy="245" r="10" fill="#451a03" stroke="#fbbf24" strokeWidth="2" />
                    <text x="166" y="250" fill="#fbbf24" fontSize="12" fontWeight="bold">O</text>

                    {/* D-Ring (Piperidine with Nitrogen) */}
                    <path d="M 240,150 Q 290,120 320,160 T 270,190" fill="none" stroke="#60a5fa" strokeWidth="3" />
                    <text x="315" y="165" fill="#60a5fa" fontSize="15" fontWeight="bold" fontFamily="monospace">N-R</text>
                  </g>
                )}

                {/* Interactive Functional Group Clickable Highlights */}
                {currentStructure.functionalGroups.map((group) => {
                  const isCurrent = activeGroup?.id === group.id;
                  return (
                    <g
                      key={group.id}
                      onClick={() => setActiveGroup(group)}
                      className="cursor-pointer transition-transform group"
                    >
                      {/* Pulse halo if active */}
                      {isCurrent && (
                        <circle
                          cx={group.cx}
                          cy={group.cy}
                          r={group.radius + 8}
                          fill="none"
                          stroke={group.color}
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          className="animate-spin origin-center"
                          style={{ transformOrigin: `${group.cx}px ${group.cy}px` }}
                        />
                      )}
                      {/* Solid node */}
                      <circle
                        cx={group.cx}
                        cy={group.cy}
                        r={group.radius}
                        fill={group.color}
                        fillOpacity={isCurrent ? 0.35 : 0.15}
                        stroke={group.color}
                        strokeWidth={isCurrent ? 3 : 1.5}
                        className="transition-all duration-200 hover:fill-opacity-40"
                      />
                      <text
                        x={group.cx}
                        y={group.cy + 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="bold"
                        fontFamily="monospace"
                        className="pointer-events-none drop-shadow-md"
                      >
                        {group.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Pharmacophore Tag */}
            <div className="w-full mt-4 p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Pharmacophore Core: </span>
                <span>{currentStructure.corePharmacophore}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone: Control Deck & SAR Concept Analysis (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Active Functional Group Inspector */}
          {activeGroup ? (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: activeGroup.color }}
                  />
                  <h3 className="font-bold text-slate-900 text-base">
                    {activeGroup.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {activeGroup.formula}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Biochemical Role
                  </span>
                  <p className="font-medium text-slate-800 bg-slate-50 p-2.5 rounded-md border border-slate-100">
                    {activeGroup.role}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Clinical & Mechanistic Significance
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {activeGroup.clinicalSignificance}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-0.5">
                    Pharmacophore Contribution
                  </span>
                  <p className="text-slate-600 leading-relaxed bg-cyan-50/50 p-2.5 rounded-md border border-cyan-100">
                    {activeGroup.pharmacophoreContribution}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-6 text-center text-slate-500 text-sm">
              Click any functional group in the diagram to inspect its role.
            </div>
          )}

          {/* Structure-Activity Relationship (SAR) Interactive Rules */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-700" />
                <span>Structure-Activity Relationships (SAR)</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">
                {currentStructure.sarRules.length} Rules
              </span>
            </div>

            <div className="space-y-2">
              {currentStructure.sarRules.map((rule, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSARIndex(idx)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    activeSARIndex === idx
                      ? 'border-cyan-600 bg-cyan-50/40 shadow-xs'
                      : 'border-slate-100 bg-slate-50/60 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-slate-900">
                      {rule.modification}
                    </span>
                    <span className="text-xs font-mono text-cyan-800 bg-cyan-100/70 px-1.5 py-0.5 rounded shrink-0">
                      {rule.exampleDrug}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-1.5 leading-relaxed">
                    → {rule.pharmacologicalEffect}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Yield Clinical Pearl Card */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>USMLE / Board High-Yield Pearl</span>
            </div>
            <p className="text-amber-800 leading-relaxed">
              {currentStructure.highYieldPearl}
            </p>
          </div>

          {/* Prototype Drugs in Class */}
          <div className="p-3 bg-slate-100 rounded-xl text-xs text-slate-600 flex items-center gap-2">
            <span className="font-semibold text-slate-900 shrink-0">Prototypes:</span>
            <div className="flex flex-wrap gap-1.5 text-slate-700 font-mono">
              {currentStructure.relatedDrugs.map((drug, dIdx) => (
                <span key={dIdx} className="bg-white px-2 py-0.5 rounded border border-slate-200">
                  {drug}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
