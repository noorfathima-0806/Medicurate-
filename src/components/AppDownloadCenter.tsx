import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Apple, 
  CheckCircle2, 
  ArrowRight, 
  HardDrive, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  FileJson, 
  Share2, 
  Layers, 
  Zap, 
  Cpu, 
  ExternalLink,
  Info,
  Check
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { chemicalStructuresData } from '../data/chemicalStructuresData';
import { mechanismsData } from '../data/mechanismsData';
import { mnemonicsData } from '../data/mnemonicsData';
import { mockQuestionsData } from '../data/mockQuestionsData';
import { summariesData } from '../data/summariesData';
import { rapidRecallData } from '../data/rapidRecallData';

interface AppDownloadCenterProps {
  bookmarks: string[];
}

export const AppDownloadCenter: React.FC<AppDownloadCenterProps> = ({ bookmarks }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [installStatus, setInstallStatus] = useState<string | null>(null);

  // Download complete JSON study pack
  const handleDownloadFullPack = () => {
    const studyPack = {
      appName: 'MedCurate - Visual Medical Sciences & Pharmacology',
      exportedAt: new Date().toISOString(),
      license: 'Free Educational Open-Access',
      version: '2.0.0',
      chemicalStructures: chemicalStructuresData,
      mechanismsOfAction: mechanismsData,
      mnemonics: mnemonicsData,
      mockQuestions: mockQuestionsData,
      summaries: summariesData,
      rapidRecallCards: rapidRecallData,
    };

    const blob = new Blob([JSON.stringify(studyPack, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MedCurate_Complete_Study_Pack_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess('json');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  // Download printable standalone HTML revision handbook
  const handleDownloadPrintableHandbook = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MedCurate - Medical Sciences High-Yield Revision Handbook</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #0f172a; max-width: 900px; margin: 40px auto; padding: 0 20px; }
    h1 { color: #0369a1; border-bottom: 2px solid #0284c7; padding-bottom: 10px; font-size: 26px; }
    h2 { color: #0f172a; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin-top: 32px; font-size: 20px; }
    h3 { color: #0284c7; margin-top: 20px; font-size: 16px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; font-size: 12px; font-weight: bold; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
    .pearl { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin-top: 10px; font-size: 13px; color: #92400e; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px; }
    th { background: #0f172a; color: white; text-align: left; padding: 8px; }
    td { border: 1px solid #e2e8f0; padding: 8px; }
    tr:nth-child(even) { background: #f8fafc; }
    @media print { body { max-width: 100%; margin: 0; padding: 15mm; } .no-print { display: none; } }
  </style>
</head>
<body>
  <h1>MedCurate: High-Yield Medical Sciences & Pharmacology Handbook</h1>
  <p><strong>Offline Comprehensive Reference</strong> · Ad-Free · Created for USMLE, MBBS & NCLEX Candidates</p>
  
  <h2>1. Essential Chemical Skeletons & Pharmacophores</h2>
  ${chemicalStructuresData.map(c => `
    <div class="card">
      <span class="badge">${c.system} · ${c.chemicalClass}</span>
      <h3>${c.name}</h3>
      <p><strong>Core Pharmacophore:</strong> ${c.corePharmacophore}</p>
      <p><strong>Indications:</strong> ${c.clinicalIndication}</p>
      <div class="pearl"><strong>High-Yield Pearl:</strong> ${c.highYieldPearl}</div>
    </div>
  `).join('')}

  <h2>2. High-Yield Mnemonics Palace</h2>
  ${mnemonicsData.map(m => `
    <div class="card">
      <span class="badge">${m.category} · ${m.frequentlyTestedOn}</span>
      <h3>${m.title} — <em>"${m.phrase}"</em></h3>
      <ul>
        ${m.breakdown.map(b => `<li><strong>${b.letter} (${b.title}):</strong> ${b.meaning} — <span style="color:#0369a1">${b.highYieldAssociation}</span></li>`).join('')}
      </ul>
      <div class="pearl"><strong>Recall Formula:</strong> ${m.rapidRecallPearl}</div>
    </div>
  `).join('')}

  <h2>3. Rapid Knowledge Retention Antidotes & Targets</h2>
  <table>
    <thead><tr><th>Question / Prompt</th><th>Target / Antidote</th><th>Clinical Explanation</th></tr></thead>
    <tbody>
      ${rapidRecallData.map(r => `
        <tr>
          <td><strong>${r.prompt}</strong></td>
          <td style="color:#0369a1; font-weight:bold;">${r.answer}</td>
          <td>${r.explanation}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>

  <footer style="margin-top: 40px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px;">
    MedCurate Educational Suite · Free & Open Access
  </footer>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MedCurate_Offline_Handbook_${new Date().toISOString().slice(0, 10)}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess('html');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  // Download personalized bookmarks
  const handleDownloadSavedBookmarks = () => {
    const savedChemicals = chemicalStructuresData.filter(c => bookmarks.includes(c.id));
    const savedMoAs = mechanismsData.filter(m => bookmarks.includes(m.id));
    const savedMnemonics = mnemonicsData.filter(m => bookmarks.includes(m.id));
    const savedQuestions = mockQuestionsData.filter(q => bookmarks.includes(q.id));

    const exportData = {
      title: 'My MedCurate Saved High-Yield Library',
      exportedAt: new Date().toISOString(),
      savedChemicals,
      savedMoAs,
      savedMnemonics,
      savedQuestions,
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MedCurate_My_Saved_Bookmarks_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess('bookmarks');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleInstallClick = async () => {
    setInstallStatus('prompting');
    const outcome = await install();
    if (outcome === 'accepted') {
      setInstallStatus('installed');
    } else if (outcome === 'dismissed') {
      setInstallStatus('cancelled');
    } else {
      setInstallStatus('unsupported');
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-800 uppercase tracking-wider mb-1">
            <span>Installable Application</span>
            <span aria-hidden="true">·</span>
            <span>Download & Offline Distribution Hub</span>
            <span aria-hidden="true">·</span>
            <span>Zero Ads · 100% Free</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            Install MedCurate & Offline Downloads
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            Install MedCurate directly on your phone, tablet, or laptop as a standalone native-grade app, or download self-contained offline study packages for flight mode and offline hospital rotations.
          </p>
        </div>

        {/* Current Install Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium self-start md:self-auto bg-slate-50 border-slate-200 text-slate-700">
          <span className={`w-2 h-2 rounded-full ${isInstalled ? 'bg-emerald-500' : 'bg-cyan-500'}`} />
          <span>{isInstalled ? 'Status: Running in App Mode' : 'Status: Web Version (Installable)'}</span>
        </div>
      </div>

      {/* Hero Primary Installation Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Progressive Web Application (PWA) Standard</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Install MedCurate as a Native App
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              Experience the full medical science study platform with standalone window display, zero browser address bar, instant touch navigation, and complete offline cached functionality.
            </p>

            {/* Platform Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Offline Access</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Ads Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>No Store Login Required</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {isInstalled ? (
                <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-950/80 border border-emerald-600 text-emerald-200 rounded-xl text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>MedCurate is Already Installed on This Device!</span>
                </div>
              ) : isInstallable ? (
                <button
                  onClick={handleInstallClick}
                  className="flex items-center gap-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Install App on This Device Now</span>
                </button>
              ) : isIOS ? (
                <div className="p-3 bg-slate-800/90 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-1">
                  <span className="font-bold text-cyan-300 block">How to Install on iPhone / iPad:</span>
                  <span>1. Tap the Safari <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline mx-1 text-cyan-400" /></span>
                  <span className="block">2. Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                </div>
              ) : (
                <button
                  onClick={handleInstallClick}
                  className="flex items-center gap-2 px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Install App</span>
                </button>
              )}

              <button
                onClick={handleDownloadPrintableHandbook}
                className="flex items-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Get Offline Revision HTML</span>
              </button>
            </div>

            {installStatus === 'cancelled' && (
              <p className="text-xs text-amber-300">
                Installation prompt was dismissed. You can click install anytime or add to home screen via your browser menu.
              </p>
            )}
          </div>

          {/* App Icon Visual Preview */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-slate-950 p-2 border-2 border-cyan-500/40 shadow-2xl relative group">
              <img
                src="/icon.svg"
                alt="MedCurate App Emblem"
                className="w-full h-full rounded-2xl object-contain drop-shadow"
              />
              <span className="absolute -bottom-2.5 bg-cyan-600 text-white text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
                v2.0 PWA
              </span>
            </div>
            <span className="mt-4 text-sm font-bold text-white font-display">MedCurate</span>
            <span className="text-xs text-slate-400 font-mono">Stand-Alone Medical Suite</span>
          </div>
        </div>
      </div>

      {/* Platform Instructions Grid */}
      <div>
        <h3 className="text-xs font-mono uppercase font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Monitor className="w-4 h-4 text-cyan-700" />
          <span>Device Installation Guides (Zero App-Store Friction)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Android Guide */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-display">Android / Chrome</h4>
                <span className="text-[11px] font-mono text-slate-400">WebAPK · Full Screen</span>
              </div>
            </div>
            <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Open MedCurate in <strong>Chrome</strong>.</li>
              <li>Tap the <strong>three dots (⋮)</strong> menu in the upper right.</li>
              <li>Select <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong>.</li>
              <li>An app icon will be pinned to your home screen and app drawer.</li>
            </ol>
            <div className="pt-2 text-[11px] font-mono text-emerald-700 bg-emerald-50/60 p-2 rounded border border-emerald-100">
              Supports offline background launch & gesture navigation.
            </div>
          </div>

          {/* iOS / iPadOS Guide */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                <Apple className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-display">iPhone & iPad / Safari</h4>
                <span className="text-[11px] font-mono text-slate-400">iOS Standalone</span>
              </div>
            </div>
            <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Open this page in <strong>Safari</strong> on iOS.</li>
              <li>Tap the <strong>Share</strong> icon (box with upward arrow).</li>
              <li>Scroll down and select <strong>"Add to Home Screen"</strong>.</li>
              <li>Tap <strong>Add</strong> in the top-right corner to finish.</li>
            </ol>
            <div className="pt-2 text-[11px] font-mono text-sky-800 bg-sky-50/60 p-2 rounded border border-sky-100">
              Renders full-screen without Safari top and bottom bars.
            </div>
          </div>

          {/* Windows / macOS / Linux Guide */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-display">Desktop (Windows / Mac / Linux)</h4>
                <span className="text-[11px] font-mono text-slate-400">Chrome, Edge & Brave</span>
              </div>
            </div>
            <ol className="text-xs text-slate-600 space-y-2 list-decimal list-inside leading-relaxed">
              <li>Look for the <strong>Install icon (⊕)</strong> on the right side of the address bar.</li>
              <li>Click <strong>"Install MedCurate"</strong>.</li>
              <li>Launches in its own distraction-free desktop window.</li>
              <li>Pin to your Windows Taskbar or macOS Dock for 1-click access.</li>
            </ol>
            <div className="pt-2 text-[11px] font-mono text-indigo-800 bg-indigo-50/60 p-2 rounded border border-indigo-100">
              High-resolution multi-column layout for widescreen monitors.
            </div>
          </div>
        </div>
      </div>

      {/* Offline Data Downloads & Study Packages */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-800 mb-1">
            Downloadable Study Assets
          </div>
          <h3 className="text-lg font-bold font-display text-slate-900">
            Export Offline Study Packages & Print Guides
          </h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Download local backup files of study modules so you can study even on hospital devices without an internet connection or save formatted guides to print.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Printable Handbook HTML */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Standalone Offline HTML Handbook
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single self-contained HTML file with formatted styling, complete chemical summaries, mnemonics, and antidote tables. Opens in any browser offline or prints to PDF.
              </p>
            </div>

            <button
              onClick={handleDownloadPrintableHandbook}
              className="w-full py-2 px-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {downloadSuccess === 'html' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-amber-600" />
                  <span>Download Printable HTML (.html)</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: Full JSON Study Database */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <FileJson className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Complete Raw Medical Dataset (JSON)
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Contains all 50+ question banks, molecular coordinate maps, SAR rules, GPCR cascades, and mnemonics in clean structured JSON for custom note-taking apps or research.
              </p>
            </div>

            <button
              onClick={handleDownloadFullPack}
              className="w-full py-2 px-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {downloadSuccess === 'json' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Download Full JSON Dataset (.json)</span>
                </>
              )}
            </button>
          </div>

          {/* Card 3: Saved Bookmarks Export */}
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all">
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                My Bookmarked Study Items ({bookmarks.length})
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Export only your saved items, high-yield questions, and flagged chemical structures so you have your customized personal review deck safely backed up.
              </p>
            </div>

            <button
              onClick={handleDownloadSavedBookmarks}
              className="w-full py-2 px-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg shadow-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              {downloadSuccess === 'bookmarks' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Export Saved Library ({bookmarks.length})</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Free & Open Access Pledge Banner */}
      <div className="p-5 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <span className="font-bold text-slate-900 block">Non-Commercial Medical Education Software</span>
            <span>No paid subscriptions, no tracking cookies, no third-party advertisements. Everything runs locally in your device environment.</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 font-mono text-[11px] text-slate-500">
          <span>Storage: LocalStorage + ServiceWorker Cache</span>
        </div>
      </div>
    </div>
  );
};
