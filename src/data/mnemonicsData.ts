import { MnemonicItem } from '../types/medical';

export const mnemonicsData: MnemonicItem[] = [
  {
    id: 'mn-at-30-cell-at-50',
    title: 'Bacterial Ribosomal Protein Synthesis Inhibitors',
    phrase: 'buy AT 30, CELL at 50',
    category: 'Antimicrobial',
    clinicalTopic: 'Ribosomal Subunit Targeting Antibiotics (30S vs 50S)',
    frequentlyTestedOn: 'USMLE Step 1',
    breakdown: [
      {
        letter: 'A',
        title: 'Aminoglycosides (Gentamicin, Tobramycin, Amikacin)',
        meaning: 'Binds 30S ribosomal subunit irreversibly; misreads mRNA code',
        highYieldAssociation: 'Only class of protein synthesis inhibitors that is BACTERICIDAL! Requires oxygen-dependent uptake (ineffective against anaerobes). Nephrotoxicity & Ototoxicity.',
        visualTag: '30S Subunit'
      },
      {
        letter: 'T',
        title: 'Tetracyclines (Doxycycline, Minocycline)',
        meaning: 'Binds 30S subunit; prevents aminoacyl-tRNA attachment to the A-site',
        highYieldAssociation: 'Chelates divalent cations (Ca2+, Mg2+, Fe2+ - avoid milk, antacids). Causes tooth enamel discoloration in children <8 and pregnant women. Drug of choice for Lyme disease, Chlamydia, Rickettsia (Rocky Mountain Spotted Fever).',
        visualTag: '30S Subunit'
      },
      {
        letter: 'C',
        title: 'Chloramphenicol',
        meaning: 'Binds 50S subunit; inhibits peptidyltransferase',
        highYieldAssociation: 'Aplastic anemia (dose-independent, fatal) and "Gray Baby Syndrome" in neonates due to lacking UDP-glucuronosyltransferase.',
        visualTag: '50S Subunit'
      },
      {
        letter: 'E',
        title: 'Erythromycin & Macrolides (Azithromycin, Clarithromycin)',
        meaning: 'Binds 50S subunit; blocks peptide translocation (transpeptidation)',
        highYieldAssociation: 'Motilin receptor stimulation causes intense GI motility/cramping. Prolongs QT interval -> Torsades risk. Inhibits CYP3A4 (except azithromycin). Cholestatic hepatitis with erythromycin estolate.',
        visualTag: '50S Subunit'
      },
      {
        letter: 'L',
        title: 'Linezolid (Oxazolidinone)',
        meaning: 'Binds 50S subunit (specifically 23S rRNA); prevents 70S initiation complex formation',
        highYieldAssociation: 'Active against MRSA and VRE. Weak MAO inhibitor: causes Serotonin Syndrome if co-administered with SSRIs! Thrombocytopenia after >2 weeks of therapy.',
        visualTag: '50S Subunit'
      },
      {
        letter: 'L',
        title: 'cLindamycin (Lincosamide)',
        meaning: 'Binds 50S subunit; blocks peptide transfer (translocation)',
        highYieldAssociation: 'Covers anaerobes ABOVE the diaphragm (Bacteroides, aspiration pneumonia, oral abscesses). #1 classic historical trigger for Clostridioides difficile pseudomembranous colitis.',
        visualTag: '50S Subunit'
      }
    ],
    clinicalContext: 'Ribosomal protein synthesis inhibitors selectively poison bacterial 70S ribosomes (composed of 30S and 50S subunits) without interfering with human cytosolic 80S ribosomes (composed of 40S and 60S subunits). However, human mitochondrial ribosomes resemble bacterial 70S, explaining some toxicities.',
    rapidRecallPearl: 'Remember: 30S = A, T (Aminoglycosides, Tetracyclines). 50S = C, E, L, L (Chloramphenicol, Erythromycin/Macrolides, Linezolid, cLindamycin).'
  },
  {
    id: 'mn-mad2s-have1-mm',
    title: 'Autonomic GPCR Coupling Rule (Gq, Gi, Gs)',
    phrase: 'HAVe 1 M&M (Gq) | MAD 2\'s (Gi) | All Rest (Gs)',
    category: 'Autonomic',
    clinicalTopic: 'Receptor Second Messenger Transduction',
    frequentlyTestedOn: 'USMLE Step 1',
    breakdown: [
      {
        letter: 'Gq',
        title: 'HAVe 1 M&M = H1, Alpha-1, V1, M1, M3',
        meaning: 'Coupled to Gq -> activates Phospholipase C (PLC) -> IP3/DAG -> intracellular Calcium release',
        highYieldAssociation: 'Alpha-1 causes vascular smooth muscle contraction (vasoconstriction); M3 causes pupillary sphincter miosis, ciliary muscle spasm (accommodation), salivary/bronchial secretion, and detrusor contraction (urination).',
        visualTag: 'Gq - PLC - IP3/DAG'
      },
      {
        letter: 'Gi',
        title: 'MAD 2\'s = M2, Alpha-2, D2',
        meaning: 'Coupled to Gi -> INHIBITS Adenylyl Cyclase -> drops intracellular cAMP',
        highYieldAssociation: 'M2 in heart opens K+ channels via G-beta-gamma subunit, slowing SA nodal pacemaker firing and AV nodal conduction (negative chronotropy & dromotropy). Alpha-2 serves as presynaptic autoreceptor shutting off sympathetic norepinephrine discharge.',
        visualTag: 'Gi - Adenylyl Cyclase ↓'
      },
      {
        letter: 'Gs',
        title: 'All Remaining = Beta-1, Beta-2, Beta-3, D1, H2, V2',
        meaning: 'Coupled to Gs -> STIMULATES Adenylyl Cyclase -> elevates cAMP -> activates Protein Kinase A (PKA)',
        highYieldAssociation: 'Beta-1 (1 Heart): increases heart rate and cardiac contractility. Beta-2 (2 Lungs): relaxes bronchial smooth muscle (bronchodilation) and activates glycogenolysis and cellular K+ uptake. V2 in kidney collecting duct inserts Aquaporin-2 channels.',
        visualTag: 'Gs - cAMP - PKA ↑'
      }
    ],
    clinicalContext: 'Every major board exam tests GPCR coupling pathways. Knowing whether a receptor elevates Ca2+ (Gq), suppresses cAMP (Gi), or elevates cAMP (Gs) immediately predicts whether an agonist causes constriction, relaxation, or secretion.',
    rapidRecallPearl: 'Formula: Gq = H1, A1, V1, M1, M3. Gi = M2, A2, D2. Gs = B1, B2, B3, D1, H2, V2. If a receptor is not in HAVe 1 M&M or MAD 2\'s, it is Gs!'
  },
  {
    id: 'mn-loop-lose-thiazide-save',
    title: 'Diuretic Calcium & Ion Transport',
    phrase: 'Loop Lose, Thiazides Save Ca2+',
    category: 'Renal & Electrolytes',
    clinicalTopic: 'Loop Diuretics vs Thiazide Diuretics Electrolyte Handling',
    frequentlyTestedOn: 'USMLE Step 2',
    breakdown: [
      {
        letter: 'Loop',
        title: 'Loop Diuretics (Furosemide, Bumetanide, Torsemide, Ethacrynic Acid)',
        meaning: 'Inhibit Na+/K+/2Cl- cotransporter (NKCC2) in the Thick Ascending Limb of Henle',
        highYieldAssociation: 'By blocking NKCC2, dissipates the lumen-positive electrical potential (+8 mV driven by ROMK K+ recycling). Without this positive potential, paracellular Ca2+ and Mg2+ reabsorption CANNOT occur -> urinary excretion of Ca2+ ("Loops Lose Calcium"). Clinical utility: acute hypercalcemia management!',
        visualTag: 'Hypocalcemia / Hypomagnesemia'
      },
      {
        letter: 'Thiazide',
        title: 'Thiazides (Hydrochlorothiazide, Chlorthalidone)',
        meaning: 'Inhibit Na+/Cl- cotransporter (NCCT) in the Early Distal Convoluted Tubule (DCT)',
        highYieldAssociation: 'Decreases intracellular Na+ in DCT epithelial cells, activating the basolateral 3Na+/Ca2+ exchanger (NCX1). This pulls Ca2+ from the cell into blood and promotes apical Ca2+ reabsorption via TRPV5 channels ("Thiazides Save Calcium"). Clinical utility: prevents recurrent calcium nephrolithiasis / kidney stones and treats osteoporosis!',
        visualTag: 'Hypercalcemia / Hypocalciuria'
      }
    ],
    clinicalContext: 'Understanding where Loop and Thiazide diuretics act allows rapid diagnosis of metabolic alkalosis (contraction alkalosis) and calcium derangements. Ethacrynic acid is the only non-sulfa loop diuretic (safe in sulfa allergy).',
    rapidRecallPearl: 'Loops Lose Ca2+ (hypocalcemia risk; use for hypercalcemia). Thiazides Save Ca2+ (hypercalcemia risk; use for recurrent calcium oxalate stones).'
  },
  {
    id: 'mn-mudpiles',
    title: 'High Anion Gap Metabolic Acidosis (HAGMA)',
    phrase: 'M-U-D-P-I-L-E-S',
    category: 'Biochemistry',
    clinicalTopic: 'Causes of Elevated Serum Anion Gap (> 12 mEq/L)',
    frequentlyTestedOn: 'USMLE Step 1',
    breakdown: [
      {
        letter: 'M',
        title: 'Methanol (Wood Alcohol)',
        meaning: 'Metabolized by alcohol dehydrogenase to Formic acid',
        highYieldAssociation: 'Optic disc hyperemia and "snowstorm" blindness. Treatment: Fomepizole (alcohol dehydrogenase inhibitor) or ethanol.',
        visualTag: 'Vision Loss'
      },
      {
        letter: 'U',
        title: 'Uremia (Advanced Renal Failure)',
        meaning: 'Impaired renal excretion of organic acids (sulfates, phosphates, urate)',
        highYieldAssociation: 'Pericardial friction rub (uremic pericarditis), asterixis, platelet dysfunction (bleeding with normal platelet count but prolonged bleeding time).',
        visualTag: 'Kidney Failure'
      },
      {
        letter: 'D',
        title: 'Diabetic Ketoacidosis (DKA) / Starvation / Alcoholic Ketoacidosis',
        meaning: 'Uncontrolled lipolysis creates beta-hydroxybutyrate and acetoacetate',
        highYieldAssociation: 'Fruity breath odor (acetone), Kussmaul respirations, abdominal pain. Check urine ketones and serum beta-hydroxybutyrate. Normal saline + IV regular insulin + potassium repletion.',
        visualTag: 'Ketone Bodies'
      },
      {
        letter: 'P',
        title: 'Propylene Glycol',
        meaning: 'Solvent vehicle used in IV lorazepam, diazepam, and nitroglycerin infusions',
        highYieldAssociation: 'Suspect in ICU patient on high-dose IV lorazepam drip developing unexplained metabolic acidosis and acute tubular necrosis.',
        visualTag: 'ICU IV Solvent'
      },
      {
        letter: 'I',
        title: 'Iron Tablets / Isoniazid (INH)',
        meaning: 'Free iron uncouples oxidative phosphorylation; INH inhibits pyridoxine (Vit B6)',
        highYieldAssociation: 'Iron: Radiopaque pills on abdominal X-ray, hematemesis, bowel necrosis; antidote is Deferoxamine. INH: Refractory seizures unresponsive to benzodiazepines; antidote is IV Pyridoxine (Vit B6).',
        visualTag: 'Toxicity & Antidote'
      },
      {
        letter: 'L',
        title: 'Lactic Acidosis (Type A & Type B)',
        meaning: 'Tissue hypoperfusion/shock (Type A) or Metformin toxicity / mitochondrial poisoning (Type B)',
        highYieldAssociation: 'Serum lactate > 4 mmol/L. Metformin accumulates in renal failure; held prior to IV iodinated contrast to prevent lactic acidosis.',
        visualTag: 'Hypoperfusion / Shock'
      },
      {
        letter: 'E',
        title: 'Ethylene Glycol (Antifreeze)',
        meaning: 'Metabolized by alcohol dehydrogenase to Glycolic and Oxalic acid',
        highYieldAssociation: 'Envelope-shaped calcium oxalate crystals in urine with Wood\'s lamp fluorescence! Acute tubular necrosis. Antidote: Fomepizole.',
        visualTag: 'Oxalate Crystals'
      },
      {
        letter: 'S',
        title: 'Salicylates (Aspirin Overdose)',
        meaning: 'Early Respiratory Alkalosis (medullary hyperventilation) followed by HAGMA',
        highYieldAssociation: 'Mixed disorder: Low CO2 + Low HCO3 with elevated anion gap! Tinnitus, tachypnea, hyperthermia. Treatment: IV Sodium Bicarbonate to alkalinize urine and trap salicylate anion for rapid renal excretion.',
        visualTag: 'Mixed Acid-Base'
      }
    ],
    clinicalContext: 'Anion Gap = Na⁺ - (Cl⁻ + HCO₃⁻). Normal gap is 8-12 mEq/L. Any value >12 signifies unmeasured organic anions in circulation requiring immediate antidote or source correction.',
    rapidRecallPearl: 'Calculate: Na - (Cl + HCO3). If > 12, walk through M-U-D-P-I-L-E-S: Methanol, Uremia, DKA, Propylene glycol, Iron/INH, Lactic acidosis, Ethylene glycol, Salicylates.'
  },
  {
    id: 'mn-crab-multiple-myeloma',
    title: 'Multiple Myeloma Diagnostic Manifestations',
    phrase: 'C-R-A-B',
    category: 'Biochemistry',
    clinicalTopic: 'Clonal Plasma Cell Dyscrasia Criteria',
    frequentlyTestedOn: 'USMLE Step 1',
    breakdown: [
      {
        letter: 'C',
        title: 'Calcium (Hypercalcemia)',
        meaning: 'Osteoclast-activating factors (RANKL, MIP-1alpha, IL-1) cause bone resorption',
        highYieldAssociation: 'Constipation, polyuria, altered mental status, shortened QT interval on ECG ("Stones, Bones, Groans, Psychiatric Overtones").',
        visualTag: 'Serum Ca2+ > 11 mg/dL'
      },
      {
        letter: 'R',
        title: 'Renal Insufficiency',
        meaning: 'Free monoclonal light chains (Bence Jones proteins) precipitate with Tamm-Horsfall mucoprotein',
        highYieldAssociation: 'Forms obstructing intratubular casts ("Myeloma cast nephropathy"). Urine dipstick is NEGATIVE for protein because dipstick only detects albumin, NOT light chains! Requires 24-hr urine protein electrophoresis (UPEP).',
        visualTag: 'Creatinine > 2 mg/dL'
      },
      {
        letter: 'A',
        title: 'Anemia (Normocytic, Normochromic)',
        meaning: 'Clonal plasma cells replace normal bone marrow hematopoietic elements',
        highYieldAssociation: 'Fatigue, pallor, elevated ESR. Peripheral smear reveals Rouleaux formation (red blood cells stacked like poker chips due to charge neutralization by paraproteins).',
        visualTag: 'Hb < 10 g/dL'
      },
      {
        letter: 'B',
        title: 'Bone Lesions (Punched-Out Lytic Lesions)',
        meaning: 'Pure osteolytic activity without osteoblastic repair',
        highYieldAssociation: 'Deep aching bone pain and pathologic fractures (vertebral collapse). Skull X-ray shows classic "punched-out" circular lucencies. Note: Radionuclide Technetium-99m bone scan is FALSE-NEGATIVE because it requires osteoblast activity; must use skeletal survey X-ray, CT, or MRI!',
        visualTag: 'Punched-Out Skull Lucencies'
      }
    ],
    clinicalContext: 'Multiple Myeloma is diagnosed by >10% clonal plasma cells in bone marrow PLUS end-organ CRAB features. Serum protein electrophoresis (SPEP) shows a sharp monoclonal M-spike (most commonly IgG or IgA).',
    rapidRecallPearl: 'CRAB: Hypercalcemia, Renal failure, Anemia, Bone lytic lesions. Blood smear shows Rouleaux. Bone scan is negative; do skeletal survey!'
  },
  {
    id: 'mn-mona-meets-bats',
    title: 'Acute Coronary Syndrome STEMI Management',
    phrase: 'MONA meets BATS',
    category: 'Cardiovascular',
    clinicalTopic: 'Immediate Pharmacotherapy in Acute Myocardial Infarction',
    frequentlyTestedOn: 'USMLE Step 2',
    breakdown: [
      {
        letter: 'M',
        title: 'Morphine',
        meaning: 'Analgesia and venodilation to reduce cardiac preload',
        highYieldAssociation: 'Reserved for refractory chest pain only; can delay antiplatelet P2Y12 absorption.',
        visualTag: 'Preload Reduction'
      },
      {
        letter: 'O',
        title: 'Oxygen',
        meaning: 'Supplemental O2 only if SpO2 < 90%',
        highYieldAssociation: 'Hyperoxia causes coronary vasoconstriction and free radical generation; do not give routine oxygen if saturation is normal!',
        visualTag: 'Hypoxemia Only'
      },
      {
        letter: 'N',
        title: 'Nitroglycerin (Sublingual / IV)',
        meaning: 'Venodilation via nitric oxide-cGMP pathway; lowers ventricular wall stress',
        highYieldAssociation: 'Contraindicated in: (1) Right ventricular myocardial infarction (inferior STEMI with clear lungs & hypotension), and (2) PDE-5 inhibitor use within 24-48 hrs (Sildenafil, Tadalafil - causes fatal refractory hypotension)!',
        visualTag: 'cGMP Smooth Muscle'
      },
      {
        letter: 'A',
        title: 'Aspirin (162 to 325 mg chewed)',
        meaning: 'Irreversible COX-1 inhibition; halts Thromboxane A2 synthesis',
        highYieldAssociation: 'Immediate administration chewed for rapid buccal absorption. Given to every suspected ACS patient immediately upon presentation.',
        visualTag: 'Platelet TXA2 Halt'
      },
      {
        letter: 'B',
        title: 'Beta-Blocker (Oral Metoprolol)',
        meaning: 'Reduces myocardial oxygen demand and lethal ventricular fibrillation risk',
        highYieldAssociation: 'Given within 24 hours unless patient is in acute decompensated heart failure, cardiogenic shock, bradycardia, or AV block.',
        visualTag: 'O2 Consumption ↓'
      },
      {
        letter: 'A',
        title: 'ACE Inhibitor (Lisinopril)',
        meaning: 'Prevents adverse adverse left ventricular remodeling post-infarct',
        highYieldAssociation: 'Initiated within 24-48 hours once hemodynamically stable; proven mortality benefit.',
        visualTag: 'Remodeling Prevention'
      },
      {
        letter: 'T',
        title: 'Ticagrelor / Clopidogrel (P2Y12 Receptor Antagonist)',
        meaning: 'Dual Antiplatelet Therapy (DAPT) with Aspirin',
        highYieldAssociation: 'Blocks ADP binding to P2Y12, preventing GPIIb/IIIa receptor activation and fibrinogen cross-linking. Continued for 12 months post-stent.',
        visualTag: 'P2Y12 ADP Antagonist'
      },
      {
        letter: 'S',
        title: 'Statin (High-Intensity Atorvastatin 80 mg)',
        meaning: 'HMG-CoA Reductase inhibitor; plaque stabilization and anti-inflammatory pleiotropic effect',
        highYieldAssociation: 'Started immediately regardless of baseline LDL cholesterol level before discharge.',
        visualTag: 'Plaque Stabilization'
      }
    ],
    clinicalContext: 'Time is Muscle! STEMI requires immediate emergency reperfusion: Percutaneous Coronary Intervention (PCI) within 90 minutes ("door-to-balloon" time) or Fibrinolytic therapy (Alteplase) within 30 minutes if PCI is unavailable within 120 minutes.',
    rapidRecallPearl: 'Remember: MONA (Morphine, O2 if hypoxic, Nitrates, Aspirin) + BATS (Beta-blocker, ACEi, Ticagrelor/Clopidogrel, Statin). Always avoid Nitrates in Right Ventricular Infarct!'
  }
];
