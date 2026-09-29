import React, { useState } from 'react';
import { summariesData } from '../data/summariesData';
import { SummaryNote } from '../types/medical';
import { BookOpen, Copy, Check, Sparkles, Table, ChevronRight } from 'lucide-react';

export const SummariesView: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(summariesData[0].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentNote = summariesData.find((n) => n.id === selectedId) || summariesData[0];

  const handleCopy = () => {
    const textToCopy = `MEDCURATE HIGH-YIELD SUMMARY: ${currentNote.title}
System: ${currentNote.system}

${currentNote.summary}

CORE CONCEPTS:
${currentNote.coreConcepts.map((c) => `• ${c.heading}: ${c.detail}`).join('\n')}

HIGH-YIELD PEARLS:
${currentNote.highYieldPearls.map((p) => `★ ${p}`).join('\n')}
`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>High-Yield Cheat Sheets</span>
            <span aria-hidden="true">·</span>
            <span>Rapid Knowledge Summaries</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            High-Yield System Summaries
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Condensed, scannable clinical cheat sheets featuring side-by-side comparative matrices, receptor profiles, and board examination pearls.
          </p>
        </div>

        {/* Copy Note Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold shadow-xs transition-colors whitespace-nowrap self-start md:self-auto"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
          <span>{copied ? 'Copied to Clipboard' : 'Copy Summary Sheet'}</span>
        </button>
      </div>

      {/* Topic Switcher Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto">
        {summariesData.map((note) => (
          <button
            key={note.id}
            onClick={() => setSelectedId(note.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              selectedId === note.id
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {note.title}
          </button>
        ))}
      </div>

      {/* Main Content Layout */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
        
        {/* Title & Overview Banner */}
        <div className="pb-4 border-b border-slate-100">
          <div className="text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            System: {currentNote.system}
          </div>
          <h2 className="text-xl font-bold font-display text-slate-900 mb-2">
            {currentNote.title}
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
            {currentNote.summary}
          </p>
        </div>

        {/* Core Concepts Grid */}
        <div>
          <h3 className="text-xs font-mono uppercase font-bold text-slate-900 mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-cyan-700" />
            <span>Essential Core Principles</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentNote.coreConcepts.map((concept, idx) => (
              <div key={idx} className="p-4 bg-slate-50/80 rounded-xl border border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                  {concept.heading}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {concept.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Comparative Table */}
        {currentNote.drugComparisonTable && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase font-bold text-slate-900 flex items-center gap-1.5">
                <Table className="w-4 h-4 text-cyan-700" />
                <span>Comparative Pharmacology Matrix</span>
              </h3>
              <span className="text-[11px] font-mono text-slate-400">
                Scroll horizontally on mobile
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-mono uppercase text-[11px]">
                  <tr>
                    {currentNote.drugComparisonTable.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3 font-semibold tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentNote.drugComparisonTable.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60 hover:bg-cyan-50/30 transition-colors'}
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-4 py-3 leading-relaxed ${
                            cIdx === 0
                              ? 'font-bold text-slate-900 font-mono whitespace-nowrap'
                              : 'text-slate-700'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* High-Yield Pearls Box */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 font-mono uppercase">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>High-Yield Board Pearls & Exam Traps</span>
          </div>
          <div className="space-y-2">
            {currentNote.highYieldPearls.map((pearl, pIdx) => (
              <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-amber-900">
                <span className="text-amber-600 font-bold shrink-0">★</span>
                <p className="leading-relaxed">{pearl}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
