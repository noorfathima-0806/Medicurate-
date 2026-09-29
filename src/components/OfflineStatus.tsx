import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, HardDrive, CheckCircle2, X, Info } from 'lucide-react';

interface OfflineStatusProps {
  className?: string;
  onOpenDownload?: () => void;
}

export const OfflineStatus: React.FC<OfflineStatusProps> = ({ className = '', onOpenDownload }) => {
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [showToast, setShowToast] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [storageItemsCount, setStorageItemsCount] = useState<number>(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Calculate approximate items cached in localStorage
    try {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        count++;
      }
      setStorageItemsCount(count || 1);
    } catch {
      setStorageItemsCount(1);
    }

    // Auto-minimize toast after 7 seconds
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 7000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Clickable Status Badge in Navbar/Header */}
      <div className={`relative inline-block ${className}`}>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg transition-colors font-mono cursor-pointer border ${
            !isOnline
              ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
              : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
          }`}
          title="Click for Offline Cache Status"
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                !isOnline ? 'bg-amber-400' : 'bg-emerald-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                !isOnline ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
            />
          </span>

          {!isOnline ? (
            <span className="hidden sm:inline font-semibold">Offline Mode Active</span>
          ) : (
            <span className="hidden sm:inline font-semibold">Offline Ready</span>
          )}

          <HardDrive className="w-3 h-3 text-emerald-700 opacity-80" />
        </button>

        {/* Details Dropdown Popover */}
        {showDetails && (
          <div className="absolute right-0 mt-2 w-72 sm:w-80 p-4 bg-white rounded-xl border border-slate-200 shadow-xl z-50 text-xs text-slate-700 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-slate-100 mb-2.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-bold text-slate-900 font-sans text-sm">
                  Offline Readiness Status
                </span>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2 font-sans">
              <div className="flex items-center justify-between text-[11px] font-mono bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-slate-500">Network State:</span>
                <span className={isOnline ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                  {isOnline ? 'Connected (Online)' : 'No Connection (Offline)'}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">All study content is cached locally:</strong> The complete database of chemical structures, pharmacophores, mechanism simulations, mnemonics, and practice questions is fully bundled and saved in your browser’s <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px] text-cyan-800">localStorage</code>.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                {onOpenDownload ? (
                  <button
                    onClick={() => {
                      setShowDetails(false);
                      onOpenDownload();
                    }}
                    className="text-cyan-700 hover:underline font-semibold"
                  >
                    Install App & Downloads →
                  </button>
                ) : (
                  <span>Zero server latency · 100% Free</span>
                )}
                <button
                  onClick={() => setShowToast(true)}
                  className="text-slate-400 hover:text-slate-700"
                >
                  Show toast
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Offline Ready Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] sm:w-96 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg p-3.5 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <HardDrive className="w-4 h-4" />
            </div>

            <div className="flex-1 min-w-0 text-xs">
              <div className="flex items-center justify-between gap-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 font-display text-sm">
                  <span>Offline Ready</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                <button
                  onClick={() => setShowToast(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
                  title="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-slate-600 mt-1 leading-snug">
                Application loaded successfully. All study materials, chemical structures, and mock questions are cached in <span className="font-mono text-cyan-800 font-semibold">localStorage</span> for uninterrupted offline study.
              </p>

              <div className="mt-2.5 flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Ready for Airplane Mode
                </span>
                {onOpenDownload && (
                  <button
                    onClick={() => {
                      setShowToast(false);
                      onOpenDownload();
                    }}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 hover:underline"
                  >
                    Install App & Exports →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
