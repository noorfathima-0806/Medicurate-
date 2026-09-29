import { MockQuestion } from '../types/medical';

export const mockQuestionsData: MockQuestion[] = [
  {
    id: 'q1',
    clinicalVignette: 'A 64-year-old male with a history of persistent atrial fibrillation and ischemic cardiomyopathy presents to the emergency department complaining of progressive shortness of breath, a dry non-productive cough, and extreme fatigue over the past 3 weeks. Vital signs: BP 115/72 mmHg, HR 58 bpm, RR 22/min, SpO2 89% on room air. Physical examination reveals fine bibasilar inspiratory crackles and mild blue-gray discoloration over his cheeks and nose. Slit-lamp ophthalmologic examination discloses microdeposits in the anterior cornea arranged in a whorled pattern. High-resolution chest CT reveals bilateral asymmetric interstitial ground-glass opacities. Thyroid panel shows TSH 14.2 mIU/L (elevated) and free T4 0.6 ng/dL (low).',
    question: 'The therapeutic agent responsible for this patient’s presentation exerts its primary antiarrhythmic effect via which of the following electrophysiological mechanisms?',
    category: 'Cardiovascular',
    difficulty: 'High-Yield',
    system: 'Cardiovascular & Antiarrhythmics',
    imageKey: 'cardiacAp',
    svgDiagramType: 'action_potential',
    options: [
      {
        letter: 'A',
        text: 'Inhibition of fast voltage-gated sodium channels during Phase 0 depolarization',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes Class I antiarrhythmics (Quinidine, Lidocaine, Flecainide). While amiodarone has some Class I activity, its primary classification and main antiarrhythmic mechanism is Class III.'
      },
      {
        letter: 'B',
        text: 'Blockade of delayed rectifier potassium channels (IKr) during Phase 3 repolarization',
        isCorrect: true,
        distractorRationale: 'Correct! The patient presents with classic Amiodarone multi-organ toxicity: pulmonary fibrosis, thyroid dysfunction (hypothyroidism due to Wolff-Chaikoff effect from high iodine content), corneal verticillata (whorl keratopathy), and slate-blue skin discoloration. Amiodarone is a Vaughan-Williams Class III agent whose primary mechanism is prolongation of the action potential duration and refractory period via blockade of delayed rectifier potassium currents (IKr) in Phase 3.'
      },
      {
        letter: 'C',
        text: 'Selective antagonism of beta-1 adrenergic receptors decreasing SA nodal Phase 4 slope',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes Class II antiarrhythmics (beta-blockers like metoprolol, esmolol). Beta-blockers cause bradycardia and bronchospasm, but do not cause corneal whorls, pulmonary fibrosis, or thyroid derangement.'
      },
      {
        letter: 'D',
        text: 'Inhibition of L-type voltage-gated calcium channels during Phase 2 plateau',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes Class IV non-dihydropyridine calcium channel blockers (Verapamil, Diltiazem). These agents cause constipation, peripheral edema, and bradycardia, not pulmonary or corneal deposits.'
      },
      {
        letter: 'E',
        text: 'Stimulation of inward rectifier potassium currents via muscarinic M2 receptor activation',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes parasympathetic vagal stimulation or Adenosine, which activates Gi-coupled A1 receptors.'
      }
    ],
    detailedExplanation: 'This clinical vignette is a textbook presentation of Amiodarone toxicity. Amiodarone contains two iodine atoms (37% of its molecular weight by iodine content) and is highly lipophilic, depositing extensively in lung tissue, adipose, liver, and cornea (half-life of 40-60 days!). Key toxicities tested on USMLE: (1) Pulmonary fibrosis (dry cough, crackles, ground-glass opacities); (2) Thyroid dysfunction (both hypothyroidism via Wolff-Chaikoff effect and hyperthyroidism via Jod-Basedow phenomenon); (3) Corneal verticillata (whorl keratopathy, asymptomatic); (4) Hepatotoxicity (elevated AST/ALT); (5) Blue-gray skin discoloration (sun-exposed areas); (6) QT prolongation (though surprisingly low incidence of Torsades de pointes compared to other Class III agents).',
    highYieldPearl: 'Amiodarone is Vaughan-Williams Class III (IKr blocker in Phase 3). Look out for the "P-T-H-C-B" toxicity pentad: Pulmonary fibrosis, Thyroid abnormalities, Hepatotoxicity, Corneal microdeposits, and Blue skin!',
    linkedMnemonicId: 'mn-cardiac-ap'
  },
  {
    id: 'q2',
    clinicalVignette: 'A 28-year-old female presents to the urgent care clinic with a 2-day history of dysuria, urinary frequency, and suprapubic cramping. She has no fever, flank pain, or costovertebral angle tenderness. Urine dipstick is positive for leukocyte esterase and nitrites. Microscopic urinalysis demonstrates numerous gram-negative rods. She is given a prescription for a single-dose oral antibiotic that works by inhibiting MurA (UDP-N-acetylglucosamine enolpyruvyl transferase), preventing the first committed step of bacterial cell wall synthesis.',
    question: 'Which of the following medications was most likely prescribed to this patient?',
    category: 'Antimicrobial',
    difficulty: 'Board Master',
    system: 'Antimicrobial Pharmacology',
    imageKey: 'pharmacophoreBanner',
    svgDiagramType: 'beta_lactam',
    options: [
      {
        letter: 'A',
        text: 'Nitrofurantoin',
        isCorrect: false,
        distractorRationale: 'Incorrect. Nitrofurantoin is reduced by bacterial flavoproteins to reactive intermediates that non-specifically damage bacterial ribosomal proteins, DNA, and RNA.'
      },
      {
        letter: 'B',
        text: 'Ciprofloxacin',
        isCorrect: false,
        distractorRationale: 'Incorrect. Ciprofloxacin is a fluoroquinolone that inhibits bacterial DNA gyrase (topoisomerase II) and topoisomerase IV.'
      },
      {
        letter: 'C',
        text: 'Fosfomycin',
        isCorrect: true,
        distractorRationale: 'Correct! Fosfomycin is a phosphoenolpyruvate analogue that covalently inhibits MurA (enolpyruvyl transferase), halting the cytoplasmic condensation of UDP-N-acetylglucosamine with PEP to form UDP-NAM. It is administered as a single 3-gram oral sachet for uncomplicated cystitis.'
      },
      {
        letter: 'D',
        text: 'Trimethoprim-Sulfamethoxazole',
        isCorrect: false,
        distractorRationale: 'Incorrect. TMP-SMX sequentially inhibits dihydropteroate synthase (sulfamethoxazole) and dihydrofolate reductase (trimethoprim) in the bacterial folic acid pathway.'
      },
      {
        letter: 'E',
        text: 'Bacitracin',
        isCorrect: false,
        distractorRationale: 'Incorrect. Bacitracin inhibits the dephosphorylation of the C55-isoprenoid lipid carrier bactoprenol pyrophosphate, preventing monomer flipping across the inner membrane. It is too nephrotoxic for systemic administration.'
      }
    ],
    detailedExplanation: 'Fosfomycin specifically blocks MurA (UDP-GlcNAc enolpyruvyl transferase), which catalyzes the first committed step in peptidoglycan biosynthesis by adding phosphoenolpyruvate to UDP-N-acetylglucosamine. Because it is chemically distinct from other antibiotic classes, cross-resistance is extremely rare. It achieves very high urinary concentrations that remain bactericidal for over 48 hours following a single oral dose.',
    highYieldPearl: 'Fosfomycin = MurA inhibitor. Safe in pregnancy and ideal for single-dose treatment of uncomplicated acute cystitis caused by E. coli or Klebsiella.',
    linkedChemicalId: 'beta-lactam'
  },
  {
    id: 'q3',
    clinicalVignette: 'A 52-year-old male with long-standing poorly controlled type 2 diabetes mellitus and hypertension presents for routine follow-up. Blood pressure is 152/94 mmHg. Baseline laboratory studies reveal serum creatinine of 1.1 mg/dL, BUN 16 mg/dL, and serum potassium 4.4 mEq/L. Urine albumin-to-creatinine ratio is 320 mg/g (moderately elevated albuminuria). He is started on Lisinopril 10 mg daily. Three weeks later, repeat laboratory workup shows serum creatinine has increased to 2.9 mg/dL and serum potassium is 5.8 mEq/L. Physical examination reveals bilateral high-pitched abdominal bruits audible over both upper quadrants.',
    question: 'The sudden decline in this patient’s renal function upon initiating ACE inhibitor therapy is directly attributable to which of the following hemodynamic alterations?',
    category: 'Renal & Electrolytes',
    difficulty: 'High-Yield',
    system: 'Renal Hemodynamics',
    imageKey: 'hero',
    svgDiagramType: 'raas_axis',
    options: [
      {
        letter: 'A',
        text: 'Constriction of the afferent arteriole decreasing intraglomerular hydrostatic pressure',
        isCorrect: false,
        distractorRationale: 'Incorrect. Afferent arteriolar vasoconstriction is caused by NSAIDs (inhibition of renal prostaglandins), high doses of dopamine/norepinephrine, or endothelin.'
      },
      {
        letter: 'B',
        text: 'Dilation of the efferent arteriole abolishing compensatory intraglomerular filtration pressure',
        isCorrect: true,
        distractorRationale: 'Correct! The patient has bilateral renal artery stenosis (suggested by vascular disease, severe refractory hypertension, and bilateral abdominal bruits). In renal artery stenosis, severe pre-glomerular hypoperfusion activates the RAAS system, producing high circulating levels of Angiotensin II. Angiotensin II preferentially constricts the EFFERENT arteriole, boosting glomerular capillary hydrostatic pressure to maintain GFR. When an ACE inhibitor (Lisinopril) is started, Angiotensin II synthesis is eliminated -> the efferent arteriole dilates -> intraglomerular capillary pressure collapses -> GFR plummets, causing acute renal failure!'
      },
      {
        letter: 'C',
        text: 'Direct toxic precipitation of drug crystals within the renal distal collecting tubules',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes crystal-induced acute kidney injury seen with IV acyclovir, indinavir, methotrexate, or sulfadiazine, not ACE inhibitors.'
      },
      {
        letter: 'D',
        text: 'Excessive activation of mineralocorticoid receptors in the cortical collecting duct',
        isCorrect: false,
        distractorRationale: 'Incorrect. ACE inhibitors decrease aldosterone synthesis, which impairs potassium excretion (causing the hyperkalemia observed in this patient), rather than activating receptors.'
      },
      {
        letter: 'E',
        text: 'Immune complex deposition along the glomerular basement membrane',
        isCorrect: false,
        distractorRationale: 'Incorrect. This describes post-infectious glomerulonephritis or lupus nephritis, not a hemodynamic drug-induced injury.'
      }
    ],
    detailedExplanation: 'Glomerular Hemodynamic Rule: Prostaglandins preferentially DILATE the afferent arteriole (NSAIDs block this -> afferent constriction). Angiotensin II preferentially CONSTRICTS the efferent arteriole (ACE inhibitors / ARBs block this -> efferent dilation). In bilateral renal artery stenosis, efferent constriction is the only mechanism sustaining GFR. Uncapping this constriction with Lisinopril leads to an immediate precipitous drop in GFR (creatinine jump >30%) and severe hyperkalemia.',
    highYieldPearl: 'Think: "Afferent = Prostaglandins (Keep it Open)" vs "Efferent = Angiotensin II (Pinch it Closed)". ACE inhibitors cause acute renal failure in bilateral renal artery stenosis!',
    linkedMnemonicId: 'mn-mona-meets-bats'
  },
  {
    id: 'q4',
    clinicalVignette: 'A 34-year-old agricultural worker is brought to the emergency department by coworkers after being found collapsed in a pesticide storage shed. He is vomiting profusely and having involuntary defecation. On examination, he is diaphoretic, agitated, and wheezing diffusely. Vital signs: BP 90/58 mmHg, HR 42 bpm, RR 28/min with copious oral and bronchial secretions. Pupillary examination reveals 1.5 mm pinpoint pupils bilaterally with sluggish light reflex. Muscle fasciculations are noted in his calves and arms.',
    question: 'Following immediate administration of IV Atropine, which of the following signs or symptoms will LEAST likely improve without the timely addition of Pralidoxime (2-PAM)?',
    category: 'Autonomic',
    difficulty: 'Board Master',
    system: 'Autonomic Toxicology',
    imageKey: 'autonomicSynapse',
    svgDiagramType: 'synapse_cleft',
    options: [
      {
        letter: 'A',
        text: 'Bronchorrhea and bronchospasm',
        isCorrect: false,
        distractorRationale: 'Incorrect. Bronchial secretions (bronchorrhea) and bronchospasm are mediated by muscarinic M3 receptors in respiratory epithelium and bronchial smooth muscle, which are readily blocked by atropine.'
      },
      {
        letter: 'B',
        text: 'Profuse diaphoresis and salivation',
        isCorrect: false,
        distractorRationale: 'Incorrect. Salivary glands and eccrine sweat glands are innervated by muscarinic receptors (M3) and respond rapidly to atropine reversal.'
      },
      {
        letter: 'C',
        text: 'Severe sinus bradycardia',
        isCorrect: false,
        distractorRationale: 'Incorrect. Cardiac bradycardia is driven by muscarinic M2 receptors in the SA and AV nodes, which are completely reversed by competitive antagonism with atropine.'
      },
      {
        letter: 'D',
        text: 'Skeletal muscle weakness and diaphragmatic fasciculations',
        isCorrect: true,
        distractorRationale: 'Correct! The patient has acute Organophosphate Poisoning (irreversible acetylcholinesterase inhibition). Atropine is a competitive MUSCARINIC receptor antagonist (blocks M1, M2, M3); it does NOT bind or block NICOTINIC receptors (Nm at the skeletal neuromuscular junction or Nn in autonomic ganglia). Therefore, muscle fasciculations, weakness, and impending respiratory muscle paralysis will NOT improve with atropine alone! Pralidoxime (2-PAM) is a nucleophilic agent that pulls the phosphate group off the catalytic serine of acetylcholinesterase, regenerating active enzyme at BOTH muscarinic and nicotinic junctions if administered before chemical \'aging\'.'
      },
      {
        letter: 'E',
        text: 'Pinpoint miosis',
        isCorrect: false,
        distractorRationale: 'Incorrect. Pupillary constriction is mediated by muscarinic M3 receptors on the pupillary sphincter muscle and responds to atropine.'
      }
    ],
    detailedExplanation: 'Organophosphates irreversibly phosphorylate the serine hydroxyl group in the active site of acetylcholinesterase (AChE), flooding the body with excess acetylcholine. Symptoms follow "DUMBBELSS" (Diarrhea, Urination, Miosis, Bronchospasm/Bronchorrhea, Bradycardia, Emesis, Lacrimation, Salivation, Sweating) plus nicotinic neuromuscular symptoms (fasciculations, flaccid muscle paralysis). Atropine treats ALL muscarinic symptoms (central and peripheral). Pralidoxime (2-PAM) is required to regenerate AChE at nicotinic neuromuscular junctions before irreversible conformational "aging" occurs.',
    highYieldPearl: 'Atropine blocks MUSCARINIC receptors only (does not touch skeletal muscle). Pralidoxime (2-PAM) regenerates the enzyme to treat NICOTINIC skeletal muscle paralysis!',
    linkedMnemonicId: 'mn-mad2s-have1-mm'
  }
];
