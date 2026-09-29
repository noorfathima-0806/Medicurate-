import { MechanismOfAction } from '../types/medical';

export const mechanismsData: MechanismOfAction[] = [
  {
    id: 'cardiac-action-potential',
    title: 'Cardiac Ventricular Action Potential & Antiarrhythmics',
    system: 'Cardiovascular',
    prototypeDrugs: ['Class IA (Procainamide)', 'Class IB (Lidocaine)', 'Class IC (Flecainide)', 'Class II (Metoprolol)', 'Class III (Amiodarone)', 'Class IV (Diltiazem)'],
    therapeuticTarget: 'Voltage-gated Sodium (Nav1.5), Potassium (IKr, IKs), and L-type Calcium (Cav1.2) ion channels',
    overview: 'The ventricular myocyte action potential consists of 5 distinct phases (0 to 4). Antiarrhythmic drugs selectively modulate specific ion channel flows to suppress re-entry loops, prolong refractory periods, or decrease automaticity.',
    imageKey: 'cardiacAp',
    steps: [
      {
        stepNumber: 0,
        title: 'Phase 0: Rapid Depolarization (Upstroke)',
        targetSite: 'Voltage-Gated Fast Na+ Channels (Nav1.5)',
        cellularEvent: 'Massive inward Na+ influx rushes into myocyte once membrane reaches threshold (-70 mV), rapidly shifting potential to +20 mV.',
        drugAction: 'Class I Antiarrhythmics block Na+ channels: Class IA (Quinidine, Procainamide) moderately slows Phase 0 and prolongs APD; Class IB (Lidocaine, Mexiletine) mildly blocks Na+ in ischemic tissue and SHORTENS APD; Class IC (Flecainide, Propafenone) markedly blocks Phase 0 slope with no change on APD.',
        clinicalImpact: 'Class IC drugs exhibit marked "use-dependence" (stronger blockade at high heart rates) and are strictly contraindicated post-MI due to increased mortality (CAST trial)!',
        activeCoordinates: { x: 120, y: 70 }
      },
      {
        stepNumber: 1,
        title: 'Phase 1: Initial Early Repolarization',
        targetSite: 'Transient Outward K+ Current (Ito)',
        cellularEvent: 'Inactivation of fast Na+ channels and brief outward K+ efflux and Cl- influx create a small initial downward notch.',
        drugAction: 'Modulated indirectly by autonomic tone and heart rate. Sets the plateau voltage.',
        clinicalImpact: 'Dysfunction in Ito contributes to Brugada syndrome and early repolarization arrhythmias.',
        activeCoordinates: { x: 170, y: 55 }
      },
      {
        stepNumber: 2,
        title: 'Phase 2: The Plateau Phase (Excitation-Contraction Coupling)',
        targetSite: 'L-Type Calcium Channels (Cav1.2) & Delayed Rectifier K+ Channels',
        cellularEvent: 'Equilibrium reached between slow inward Ca2+ current and outward K+ currents. Influx of Ca2+ triggers Calcium-Induced Calcium Release (CICR) from sarcoplasmic reticulum RyR2 receptors.',
        drugAction: 'Class IV Non-Dihydropyridine Calcium Channel Blockers (Verapamil, Diltiazem) block L-type Ca2+ channels, decreasing myocyte inotropy and SA/AV nodal conduction velocity.',
        clinicalImpact: 'Contraindicated in systolic heart failure (reduced ejection fraction) due to negative inotropic depression.',
        activeCoordinates: { x: 260, y: 70 }
      },
      {
        stepNumber: 3,
        title: 'Phase 3: Rapid Repolarization',
        targetSite: 'Delayed Rectifier Potassium Channels (IKr / IKs)',
        cellularEvent: 'L-type Ca2+ channels close while voltage-gated K+ channels remain wide open. Rapid outward K+ efflux repolarizes myocyte back to -90 mV.',
        drugAction: 'Class III Antiarrhythmics (Amiodarone, Sotalol, Dofetilide, Ibutilide) block IKr channels, prolonging Phase 3 and the Effective Refractory Period (ERP).',
        clinicalImpact: 'Prolongation of Phase 3 directly manifests as QT prolongation on ECG. Poses high risk of Torsades de Pointes (treated acutely with IV Magnesium Sulfate)! Amiodarone has the lowest risk of Torsades among Class III.',
        activeCoordinates: { x: 370, y: 150 }
      },
      {
        stepNumber: 4,
        title: 'Phase 4: Resting Membrane Potential',
        targetSite: 'Inward Rectifier K+ (IK1) & Na+/K+ ATPase Pump',
        cellularEvent: 'High resting K+ permeability maintains electrical stability at -90 mV. (In pacemaker SA/AV node cells, Phase 4 has a spontaneous upward slope driven by Funny Na+ channels (If) blocked by Ivabradine).',
        drugAction: 'Class II Beta-Blockers (Metoprolol, Esmolol) decrease cAMP in pacemaker cells, flattening Phase 4 slope and slowing heart rate.',
        clinicalImpact: 'Cardioprotective post-MI by decreasing myocardial oxygen demand and suppressing adrenergic-triggered ventricular arrhythmias.',
        activeCoordinates: { x: 440, y: 220 }
      }
    ],
    contraindications: [
      'Class IC (Flecainide) contraindicated in structural/ischemic heart disease (post-MI)',
      'Class III (Sotalol, Dofetilide) contraindicated with baseline QTc > 450 ms',
      'Class IV (Verapamil/Diltiazem) contraindicated in HFrEF & Wolff-Parkinson-White with AFib'
    ],
    adverseEffects: [
      'Amiodarone: Pulmonary fibrosis, thyroid dysfunction (hypo/hyper), corneal deposits, blue-gray skin discoloration, hepatotoxicity',
      'Procainamide: Drug-induced Lupus Erythematosus (Anti-histone antibodies positive)',
      'Quinidine: Cinchonism (headache, tinnitus, vertigo)'
    ],
    keyClinicalPearl: 'Vaughan-Williams Class I mnemonic: Class IA Prolongs APD, Class IB Shortens APD, Class IC has No change on APD ("Double Quarter Pounder, Lettuce Tomato, Mayo, Fries Please" = Disopyramide, Quinidine, Procainamide [IA]; Lidocaine, Tocainide, Mexiletine [IB]; Flecainide, Propafenone [IC]).',
    boardQuestionHook: 'Patient on antiarrhythmic develops dry cough, bibasilar crackles, and chest X-ray shows patchy infiltrates. Labs show elevated TSH. What drug is responsible? -> Amiodarone (contains 37% iodine by weight and accumulates in pulmonary macrophages).'
  },
  {
    id: 'autonomic-signaling',
    title: 'Autonomic Synaptic Transmission & GPCR Cascade',
    system: 'Autonomic',
    prototypeDrugs: ['Norepinephrine (Alpha1/Beta1)', 'Epinephrine (Alpha1/2, Beta1/2)', 'Atropine (M1/M2/M3 blocker)', 'Bethanechol (M3 agonist)', 'Clonidine (Alpha2 agonist)'],
    therapeuticTarget: 'Presynaptic VMAT, NET reuptake, alpha-2 autoreceptors, Postsynaptic Gq, Gi, and Gs GPCRs',
    overview: 'Autonomic signaling coordinates involuntary homeostatic control. Sympathetic nerves release norepinephrine, while parasympathetic nerves release acetylcholine. Distinct G-protein coupled receptors activate either the IP3/DAG/Ca2+ pathway (Gq), adenylyl cyclase inhibition (Gi), or adenylyl cyclase activation (Gs).',
    imageKey: 'autonomicSynapse',
    steps: [
      {
        stepNumber: 1,
        title: 'Transmitter Synthesis & Vesicular Storage',
        targetSite: 'Tyrosine Hydroxylase & VMAT (Vesicular Monoamine Transporter)',
        cellularEvent: 'Tyrosine is converted to DOPA, then Dopamine. VMAT pumps dopamine into presynaptic vesicles where Dopamine Beta-Hydroxylase converts it into Norepinephrine.',
        drugAction: 'Reserpine irreversibly inhibits VMAT, depleting catecholamine stores and leading to profound hypotension and depression.',
        clinicalImpact: 'Metyrosine inhibits Tyrosine Hydroxylase; used pre-operatively in refractory Pheochromocytoma.',
        activeCoordinates: { x: 130, y: 90 }
      },
      {
        stepNumber: 2,
        title: 'Exocytosis & Vesicle Fusion',
        targetSite: 'SNARE Complex (Synaptobrevin, Syntaxin, SNAP-25)',
        cellularEvent: 'Action potential invades nerve terminal -> voltage-gated Ca2+ channels open -> Ca2+ influx triggers SNARE-mediated vesicular fusion with presynaptic membrane.',
        drugAction: 'Botulinum Toxin cleaves SNARE proteins at cholinergic junctions, preventing Acetylcholine release and causing flaccid paralysis.',
        clinicalImpact: 'Botulinum toxin treats dystonia, hyperhidrosis, migraine, and spasticity.',
        activeCoordinates: { x: 190, y: 150 }
      },
      {
        stepNumber: 3,
        title: 'Autoreceptor Feedback Modulation',
        targetSite: 'Presynaptic Alpha-2 Adrenergic Receptors (Gi-coupled)',
        cellularEvent: 'Norepinephrine released into cleft diffuses back to presynaptic Alpha-2 receptors. Activation of Gi inhibits adenylyl cyclase and closes Ca2+ channels.',
        drugAction: 'Alpha-2 Agonists (Clonidine, Methyldopa, Dexmedetomidine) shut down central sympathetic outflow, reducing blood pressure and inducing conscious sedation.',
        clinicalImpact: 'Abrupt withdrawal of Clonidine triggers hypertensive crisis from rebound sympathetic surge!',
        activeCoordinates: { x: 140, y: 220 }
      },
      {
        stepNumber: 4,
        title: 'Postsynaptic Receptor Activation & Second Messengers',
        targetSite: 'Alpha-1 (Gq), Beta-1/Beta-2 (Gs), M1/M3 (Gq), M2 (Gi)',
        cellularEvent: 'Gq activates Phospholipase C (PLC) -> cleaves PIP2 into IP3 (releases intracellular Ca2+) and DAG (activates Protein Kinase C). Gs activates Adenylyl Cyclase -> increases cAMP -> activates Protein Kinase A. Gi inhibits Adenylyl Cyclase -> drops cAMP.',
        drugAction: 'Beta-1 stimulation in heart increases cAMP -> PKA phosphorylates L-type Ca2+ and phospholamban (positive inotropy and chronotropy). Beta-2 stimulation in bronchioles increases cAMP -> PKA inhibits Myosin Light Chain Kinase (MLCK) -> bronchodilation!',
        clinicalImpact: 'Explains why Beta-2 agonists (Albuterol) cause smooth muscle relaxation (bronchodilation and uterine tocolysis) even though Beta-1 stimulates cardiac muscle.',
        activeCoordinates: { x: 330, y: 180 }
      },
      {
        stepNumber: 5,
        title: 'Synaptic Clearance & Reuptake',
        targetSite: 'Norepinephrine Transporter (NET) & Acetylcholinesterase (AChE)',
        cellularEvent: '80% of released norepinephrine is pumped back into nerve terminal via NET for recycling or degradation by mitochondrial MAO.',
        drugAction: 'Cocaine and Tricyclic Antidepressants (TCAs) block NET, causing catecholamines to accumulate in the synaptic cleft (intense tachycardia, vasoconstriction, pupillary dilation).',
        clinicalImpact: 'Never give pure Beta-blockers in cocaine-induced chest pain: causes unopposed alpha-1 vasoconstriction and catastrophic coronary spasm!',
        activeCoordinates: { x: 260, y: 250 }
      }
    ],
    contraindications: [
      'Non-selective Beta-blockers (Propranolol) contraindicated in Asthma and COPD (blocks Beta-2)',
      'Muscarinic agonists (Bethanechol) contraindicated in peptic ulcer disease and mechanical urinary obstruction',
      'Atropine contraindicated in Acute Angle-Closure Glaucoma (mydriasis blocks trabecular meshwork drainage)'
    ],
    adverseEffects: [
      'Atropine overdose: "Blind as a bat, Mad as a hatter, Red as a beet, Hot as a hare, Dry as a bone"',
      'Organophosphate poisoning: DUMBBELSS (Diarrhea, Urination, Miosis, Bronchospasm, Bradycardia, Emesis, Lacrimation, Salivation, Sweating)'
    ],
    keyClinicalPearl: 'GPCR Mnemonic: "HAVe 1 M&M": H1, Alpha-1, V1, M1, M3 are all Gq coupled! "MAD 2\'s": M2, Alpha-2, D2 are all Gi coupled! All remaining Beta-1, Beta-2, Beta-3, D1, H2, V2 are Gs coupled!',
    boardQuestionHook: 'Farm worker presents with pinpoint pupils, wheezing, diaphoresis, and bradycardia after spraying crops. What is the immediate life-saving treatment? -> Atropine (crosses BBB to reverse muscarinic crisis) followed by Pralidoxime (2-PAM to regenerate acetylcholinesterase before irreversible aging).'
  },
  {
    id: 'antimicrobial-cell-wall',
    title: 'Bacterial Peptidoglycan Cell Wall Assembly & Antimicrobial Targets',
    system: 'Antimicrobial',
    prototypeDrugs: ['Penicillin / Ampicillin (PBP inhibitors)', 'Vancomycin (D-Ala-D-Ala binder)', 'Bacitracin (Lipid carrier inhibitor)', 'Fosfomycin (MurA inhibitor)'],
    therapeuticTarget: 'Peptidoglycan biosynthesis steps: MurA, Bactoprenol pyrophosphate, Transglycosylase, and Transpeptidase (PBP)',
    overview: 'Bacterial cell wall provides osmotic stability. Peptidoglycan consists of alternating NAG and NAM sugars cross-linked by peptide chains. Multiple bactericidal antibiotic classes sequentially interrupt this synthesis pathway, leading to osmotic lysis.',
    imageKey: 'pharmacophoreBanner',
    steps: [
      {
        stepNumber: 1,
        title: 'Cytoplasmic Precursor Synthesis (UDP-NAM-Pentapeptide)',
        targetSite: 'MurA (UDP-N-acetylglucosamine enolpyruvyl transferase)',
        cellularEvent: 'UDP-NAG is converted to UDP-NAM by MurA. Five amino acids are added sequentially, concluding with a D-alanyl-D-alanine dipeptide.',
        drugAction: 'Fosfomycin covalently binds and irreversibly inhibits MurA enolpyruvyl transferase, arresting first step of cell wall synthesis.',
        clinicalImpact: 'Fosfomycin is concentrated in urine as active drug; preferred single-dose therapy for uncomplicated cystitis in pregnancy.',
        activeCoordinates: { x: 100, y: 120 }
      },
      {
        stepNumber: 2,
        title: 'Membrane Translocation via Lipid Carrier (Bactoprenol)',
        targetSite: 'Bactoprenol Pyrophosphate (C55-isoprenoid lipid carrier)',
        cellularEvent: 'The peptidoglycan monomer is attached to lipid carrier bactoprenol in the inner leaflet and flipped across cell membrane to the periplasm.',
        drugAction: 'Bacitracin blocks the dephosphorylation of bactoprenol pyrophosphate, trapping the carrier in its inactive diphosphate state.',
        clinicalImpact: 'Bacitracin is extremely nephrotoxic if administered systemically; strictly restricted to topical skin/ophthalmic ointments (Neosporin).',
        activeCoordinates: { x: 190, y: 160 }
      },
      {
        stepNumber: 3,
        title: 'Transglycosylation & Substrate Sequestration',
        targetSite: 'D-alanyl-D-alanine Terminus of Peptidoglycan Monomer',
        cellularEvent: 'Monomers are linked together into linear glycan strands by transglycosylases.',
        drugAction: 'Vancomycin (a large glycopeptide) binds directly via 5 hydrogen bonds to the terminal D-Ala-D-Ala dipeptide, sterically capping it so transglycosylase and transpeptidase cannot access the chain.',
        clinicalImpact: 'Bacterial resistance occurs when VanA/VanB genes substitute terminal D-Ala with D-Lactate (D-Ala-D-Lac), reducing vancomycin binding affinity by 1,000-fold (Vancomycin-Resistant Enterococci / VRE)!',
        activeCoordinates: { x: 290, y: 140 }
      },
      {
        stepNumber: 4,
        title: 'Transpeptidation Cross-Linking',
        targetSite: 'Penicillin-Binding Proteins (PBPs / Transpeptidase enzymes)',
        cellularEvent: 'Transpeptidases cross-link adjacent peptide chains (cleaving terminal D-Ala) to give rigid tensile strength resisting internal turgor pressures up to 20 atmospheres.',
        drugAction: 'Beta-Lactams (Penicillins, Cephalosporins, Carbapenems, Monobactams) structurally mimic D-Ala-D-Ala and covalently acylate catalytic serine of PBP.',
        clinicalImpact: 'Loss of cross-linking activates bacterial autolysins, rupturing the cell wall under osmotic pressure -> bactericidal cell lysis.',
        activeCoordinates: { x: 390, y: 170 }
      }
    ],
    contraindications: [
      'Cephalosporins in patients with documented anaphylaxis/hives to Penicillin (cross-reactivity risk)',
      'Carbapenems (especially Imipenem) in patients with seizure disorders (lowers seizure threshold)',
      'Vancomycin rapid intravenous infusion (causes Red Man Syndrome from direct non-IgE mast cell histamine release)'
    ],
    adverseEffects: [
      'Vancomycin: "NOT" = Nephrotoxicity, Ototoxicity, Thrombophlebitis (plus Red Man syndrome if infused fast)',
      'Ampicillin/Amoxicillin: Non-allergic maculopapular rash when mistakenly given during Epstein-Barr Virus (EBV / Mononucleosis) infection'
    ],
    keyClinicalPearl: 'Vancomycin binds the SUBSTRATE (D-Ala-D-Ala), whereas Beta-lactams bind the ENZYME (Transpeptidase / PBP). This explains why beta-lactamase does NOT affect vancomycin, and PBP mutations (like MRSA mecA gene encoding PBP2a) confer resistance to all beta-lactams EXCEPT 5th generation Ceftaroline!',
    boardQuestionHook: 'Gram-positive cocci in clusters are isolated from a prosthetic valve. The organism produces PBP2a with low affinity for methicillin. What gene is responsible? -> mecA gene on SCCmec element.'
  },
  {
    id: 'raas-pathway',
    title: 'Renin-Angiotensin-Aldosterone System (RAAS) & Antihypertensives',
    system: 'Renal & Electrolytes',
    prototypeDrugs: ['Aliskiren (Direct Renin Inhibitor)', 'Lisinopril / Enalapril (ACE Inhibitors)', 'Losartan / Valsartan (ARBs)', 'Spironolactone (Aldosterone Antagonist)'],
    therapeuticTarget: 'Renin, Angiotensin-Converting Enzyme, AT1 Receptor, and Mineralocorticoid Nuclear Receptor',
    overview: 'The RAAS cascade regulates systemic blood pressure, intravascular fluid volume, and sodium-potassium balance. Pharmacological inhibition at different nodal points provides powerful organ protection in hypertension, diabetic nephropathy, and heart failure.',
    imageKey: 'hero',
    steps: [
      {
        stepNumber: 1,
        title: 'Renin Release & Angiotensinogen Cleavage',
        targetSite: 'Juxtaglomerular (JG) Cells & Angiotensinogen',
        cellularEvent: 'JG cells secrete Renin in response to decreased renal perfusion, beta-1 sympathetic stimulation, or decreased NaCl delivery to macula densa. Renin cleaves liver-derived Angiotensinogen into decapeptide Angiotensin I.',
        drugAction: 'Aliskiren directly binds catalytic site of Renin, preventing Angiotensin I generation.',
        clinicalImpact: 'Aliskiren should never be combined with ACE inhibitors or ARBs due to severe hyperkalemia and renal failure (ALTITUDE trial).',
        activeCoordinates: { x: 100, y: 150 }
      },
      {
        stepNumber: 2,
        title: 'Angiotensin I Conversion & Bradykinin Cleavage',
        targetSite: 'Angiotensin-Converting Enzyme (ACE / Kininase II) in Pulmonary Capillaries',
        cellularEvent: 'ACE on pulmonary vascular endothelial surface clips two amino acids from Angiotensin I to form octapeptide Angiotensin II. ACE also degrades vasodilator Bradykinin into inactive peptides.',
        drugAction: 'ACE Inhibitors (Lisinopril, Captopril, Ramipril) block ACE, simultaneously suppressing Angiotensin II and increasing Bradykinin and Substance P levels.',
        clinicalImpact: 'Accumulation of Bradykinin and Substance P triggers dry nagging cough (in 10-20% of patients) and life-threatening Angioedema! If cough occurs, switch to an ARB (Losartan), which does not affect bradykinin.',
        activeCoordinates: { x: 220, y: 130 }
      },
      {
        stepNumber: 3,
        title: 'Efferent Arteriolar Vasoconstriction & Hemodynamic Remodeling',
        targetSite: 'Angiotensin II Type 1 (AT1) Gq-Coupled Receptors',
        cellularEvent: 'Angiotensin II preferentially constricts the renal EFFERENT arteriole, boosting glomerular filtration pressure (GFR preservation in hypotension). Systemically, causes potent arterial vasoconstriction and cardiac remodeling.',
        drugAction: 'Angiotensin Receptor Blockers (ARBs: Losartan, Valsartan) competitively block AT1 receptors without elevating bradykinin.',
        clinicalImpact: 'By dilating efferent arterioles, ACEi/ARBs reduce intraglomerular hyperfiltration, slowing diabetic nephropathy progression. However, in bilateral renal artery stenosis, efferent constriction is keeping GFR alive -> ACEi triggers acute renal failure!',
        activeCoordinates: { x: 320, y: 160 }
      },
      {
        stepNumber: 4,
        title: 'Aldosterone Secretion & Distal Nephron Sodium-Potassium Exchange',
        targetSite: 'Zona Glomerulosa of Adrenal Cortex & Principal Cells in Cortical Collecting Duct',
        cellularEvent: 'Angiotensin II stimulates aldosterone secretion -> binds intracellular mineralocorticoid receptor in principal cells -> upregulates apical ENaC sodium channels and basolateral Na+/K+ ATPase, driving Na+ reabsorption and K+/H+ excretion into urine.',
        drugAction: 'Aldosterone Antagonists (Spironolactone, Eplerenone) competitively block mineralocorticoid receptors. ENaC blockers (Amiloride, Triamterene) block sodium influx directly.',
        clinicalImpact: 'Spironolactone prevents cardiac myocardial fibrosis and reduces mortality in HFrEF. Because they prevent K+ excretion, all RAAS inhibitors risk hyperkalemia (peaked T-waves on ECG)!',
        activeCoordinates: { x: 420, y: 210 }
      }
    ],
    contraindications: [
      'ACE Inhibitors and ARBs are absolute teratogens! Contraindicated in pregnancy (causes fetal renal agenesis, oligohydramnios, pulmonary hypoplasia - Potter sequence)',
      'Bilateral renal artery stenosis (or unilateral stenosis in solitary kidney)',
      'Baseline hyperkalemia (serum K+ > 5.5 mEq/L)'
    ],
    adverseEffects: [
      'ACE Inhibitors mnemonic: "C-A-P-T-O-P-R-I-L" = Cough, Angioedema, Potassium excess (Hyperkalemia), Taste changes, Orthostatic hypotension, Pregnancy contraindicated, Rash, Indomethacin interactions, Leukopenia',
      'Spironolactone: Gynecomastia and erectile dysfunction (due to anti-androgenic androgen receptor antagonism; use Eplerenone instead for higher mineralocorticoid selectivity)'
    ],
    keyClinicalPearl: 'Glomerular Hemodynamics Hook: Prostaglandins preferentially DILATE the AFFERENT arteriole (prevented by NSAIDs). Angiotensin II preferentially CONSTRICTS the EFFERENT arteriole (prevented by ACEi/ARBs). The "triple whammy" of NSAID + ACEi + Diuretic causes severe prerenal acute kidney injury!',
    boardQuestionHook: 'A 58-year-old with diabetes and hypertension starts lisinopril. Two weeks later, serum creatinine rises from 1.0 to 2.8 mg/dL. Renal ultrasound reveals asymmetric kidney sizes and atherosclerotic plaques. What is the diagnosis? -> Bilateral renal artery stenosis.'
  }
];
