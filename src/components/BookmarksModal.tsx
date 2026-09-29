import React from 'react';
import { X, Bookmark, ExternalLink, Trash2 } from 'lucide-react';
import { chemicalStructuresData } from '../data/chemicalStructuresData';
import { mechanismsData } from '../data/mechanismsData';
import { mnemonicsData } from '../data/mnemonicsData';
import { mockQuestionsData } from '../data/mockQuestionsData';
import { NavTab } from './Navbar';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
  onRemoveBookmark: (id: string) => void;
  onNavigateToItem: (id: string, tab: NavTab) => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onRemoveBookmark,
  onNavigateToItem
}) => {
  if (!isOpen) return null;

  // Resolve items
  const savedChemicals = chemicalStructuresData.filter((c) => bookmarks.includes(c.id));
  const savedMoAs = mechanismsData.filter((m) => bookmarks.includes(m.id));
  const savedMnemonics = mnemonicsData.filter((mn) => bookmarks.includes(mn.id));
  const savedQuestions = mockQuestionsData.filter((q) => bookmarks.includes(q.id));

  const totalSaved = bookmarks.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 w-full max-w-2xl max-h-[85vh] flex flex-col shadow-xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-cyan-700" />
            <h2 className="text-lg font-bold text-slate-900 font-display">
              Saved High-Yield Library ({totalSaved})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {totalSaved === 0 ? (
            <div className="py-12 text-center text-slate-500 space-y-2">
              <Bookmark className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="font-medium text-slate-700">No items saved yet</p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Bookmark chemical structures, pharmacology MoAs, mnemonics, or board questions to study them here in your personal high-yield review collection.
              </p>
            </div>
          ) : (
            <>
              {/* Saved Chemical Structures */}
              {savedChemicals.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase font-bold text-cyan-800">
                    Chemical Structures ({savedChemicals.length})
                  </h3>
                  <div className="space-y-1.5">
                    {savedChemicals.map((c) => (
                      <div
                        key={c.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div>
                          <span className="font-bold text-slate-900">{c.name}</span>
                          <span className="block text-[11px] text-slate-500 font-mono">
                            {c.chemicalClass} · {c.system}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToItem(c.id, 'chemical');
                              onClose();
                            }}
                            className="px-2.5 py-1 text-xs bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium"
                          >
                            Open
                          </button>
                          <button
                            onClick={() => onRemoveBookmark(c.id)}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Mechanisms */}
              {savedMoAs.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase font-bold text-cyan-800">
                    Mechanisms of Action ({savedMoAs.length})
                  </h3>
                  <div className="space-y-1.5">
                    {savedMoAs.map((m) => (
                      <div
                        key={m.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div>
                          <span className="font-bold text-slate-900">{m.title}</span>
                          <span className="block text-[11px] text-slate-500 font-mono">
                            Target: {m.therapeuticTarget}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToItem(m.id, 'moa');
                              onClose();
                            }}
                            className="px-2.5 py-1 text-xs bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium"
                          >
                            Open
                          </button>
                          <button
                            onClick={() => onRemoveBookmark(m.id)}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Mnemonics */}
              {savedMnemonics.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase font-bold text-cyan-800">
                    Mnemonics ({savedMnemonics.length})
                  </h3>
                  <div className="space-y-1.5">
                    {savedMnemonics.map((mn) => (
                      <div
                        key={mn.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div>
                          <span className="font-bold text-slate-900">{mn.title}</span>
                          <span className="block text-[11px] text-cyan-700 font-mono">
                            "{mn.phrase}"
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToItem(mn.id, 'mnemonics');
                              onClose();
                            }}
                            className="px-2.5 py-1 text-xs bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium"
                          >
                            Open
                          </button>
                          <button
                            onClick={() => onRemoveBookmark(mn.id)}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saved Questions */}
              {savedQuestions.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-xs font-mono uppercase font-bold text-cyan-800">
                    Mock Board Questions ({savedQuestions.length})
                  </h3>
                  <div className="space-y-1.5">
                    {savedQuestions.map((q) => (
                      <div
                        key={q.id}
                        className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <div className="max-w-md truncate">
                          <span className="font-bold text-slate-900 block truncate">
                            {q.question}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">
                            {q.system} · {q.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              onNavigateToItem(q.id, 'mock-exam');
                              onClose();
                            }}
                            className="px-2.5 py-1 text-xs bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium"
                          >
                            Open
                          </button>
                          <button
                            onClick={() => onRemoveBookmark(q.id)}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Saved to your local browser storage</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
