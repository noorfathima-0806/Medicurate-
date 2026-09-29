import { SummaryNote } from '../types/medical';

export const summariesData: SummaryNote[] = [
  {
    id: 'sum-autonomic',
    title: 'Autonomic Pharmacology & Receptor Map',
    system: 'Autonomic',
    summary: 'A definitive map of sympathetic and parasympathetic nervous system receptors, downstream G-protein coupling mechanisms, physiological tissue effects, and prototype clinical agonists and antagonists.',
    coreConcepts: [
      {
        heading: 'G-Protein Signal Transduction',
        detail: 'Gq couples to Phospholipase C (PLC) yielding IP3 and DAG (intracellular Ca2+ release). Gs activates Adenylyl Cyclase increasing cAMP. Gi inhibits Adenylyl Cyclase decreasing cAMP.'
      },
      {
        heading: 'Vascular & Cardiac Selectivity',
        detail: 'Alpha-1 (arteriolar vasoconstriction); Beta-1 (cardiac inotropy, chronotropy, dromotropy); Beta-2 (bronchial, uterine, and skeletal vascular smooth muscle relaxation).'
      },
      {
        heading: 'Cholinergic Division',
        detail: 'Nicotinic receptors (ligand-gated Na+/K+ channels) at neuromuscular junction (Nm) and ganglia (Nn). Muscarinic receptors (GPCRs) at effector organs.'
      }
    ],
    drugComparisonTable: {
      headers: ['Receptor', 'G-Protein', 'Major Tissue Locations', 'Physiological Action', 'Clinical Prototype Agonist / Antagonist'],
      rows: [
        ['Alpha-1', 'Gq', 'Vascular smooth muscle, Pupillary dilator', 'Vasoconstriction, Mydriasis, Urinary retention', 'Phenylephrine (Agonist) / Prazosin, Tamsulosin (Antagonists)'],
        ['Alpha-2', 'Gi', 'Presynaptic nerve terminal, Pancreatic beta cells', 'Decreased sympathetic outflow, Decreased insulin', 'Clonidine, Methyldopa (Agonists) / Yohimbine (Antagonist)'],
        ['Beta-1', 'Gs', 'Heart (SA node, AV node, Myocytes), JG cells', 'Increased HR, Contractility, Renin release', 'Dobutamine (Agonist) / Metoprolol, Atenolol (Beta-1 Selective Blockers)'],
        ['Beta-2', 'Gs', 'Bronchial smooth muscle, Uterus, Skeletal vascular', 'Bronchodilation, Uterine relaxation, Vasodilation, Hypokalemia', 'Albuterol, Salmeterol, Terbutaline (Agonists) / Propranolol (Non-selective)'],
        ['M1', 'Gq', 'CNS, Enteric nervous system', 'Higher cognitive function, Gastric acid secretion', 'Pilocarpine / Atropine, Pirenzepine'],
        ['M2', 'Gi', 'Heart (SA node, AV node, Atria)', 'Decreased heart rate (negative chronotropy) & AV conduction', 'Methacholine / Atropine (blocks vagal bradycardia)'],
        ['M3', 'Gq', 'Exocrine glands, Bronchi, Bladder detrusor, Eye sphincter', 'Secretions ↑, Bronchoconstriction, Detrusor contraction, Miosis', 'Bethanechol, Cevimeline / Oxybutynin, Tiotropium, Ipratropium']
      ]
    },
    highYieldPearls: [
      'Cocaine prevents norepinephrine reuptake (NET inhibitor). Giving pure beta-blockers causes unopposed alpha-1 vasoconstriction and severe hypertensive coronary spasm!',
      'Epinephrine reversal: Pre-treating with an alpha-blocker (Phenoxybenzamine) before administering epinephrine flips its pressor response to hypotension because only beta-2 vasodilation remains!'
    ]
  },
  {
    id: 'sum-antiarrhythmics',
    title: 'Vaughan-Williams Antiarrhythmics Classification',
    system: 'Cardiovascular',
    summary: 'Comprehensive comparative review of Class I to Class IV antiarrhythmics, their specific ion channel targets, effects on the ventricular action potential duration (APD) and ERP, and high-yield board exam side effects.',
    coreConcepts: [
      {
        heading: 'Class I Sodium Channel Blockers',
        detail: 'Class IA moderately blocks Na+ and prolongs APD (Quinidine, Procainamide, Disopyramide). Class IB mildly blocks Na+ in ischemic tissue and shortens APD (Lidocaine, Mexiletine). Class IC markedly blocks Na+ without altering APD (Flecainide, Propafenone).'
      },
      {
        heading: 'Class II Beta-Blockers',
        detail: 'Suppress Phase 4 SA nodal spontaneous depolarization; decrease AV nodal conduction velocity and prolong PR interval.'
      },
      {
        heading: 'Class III Potassium Channel Blockers',
        detail: 'Block Phase 3 IKr delayed rectifier currents, prolonging APD and QT interval (Amiodarone, Sotalol, Dofetilide, Ibutilide).'
      },
      {
        heading: 'Class IV Calcium Channel Blockers',
        detail: 'Non-dihydropyridines (Verapamil, Diltiazem) block Phase 2 plateau L-type Ca2+ channels, decreasing contractility and slowing AV node.'
      }
    ],
    drugComparisonTable: {
      headers: ['Class', 'Primary Target', 'Effect on APD', 'Effect on ERP', 'Prototype Drugs', 'High-Yield Side Effect / Caveat'],
      rows: [
        ['Class IA', 'Fast Na+ channels + IKr', 'Prolongs APD ↑', 'Prolongs ERP ↑', 'Quinidine, Procainamide, Disopyramide', 'Drug-induced lupus (Procainamide), Cinchonism (Quinidine), Torsades de pointes'],
        ['Class IB', 'Fast Na+ channels (inactive state)', 'Shortens APD ↓', 'Shortens ERP ↓', 'Lidocaine, Mexiletine', 'Preferred in post-MI ventricular arrhythmias; Neurological toxicity (tremors, seizures)'],
        ['Class IC', 'Fast Na+ channels (open state)', 'No change on APD ↔', 'No change on ERP ↔', 'Flecainide, Propafenone', 'Marked use-dependence; Strictly contraindicated post-MI or structural heart disease (CAST trial)'],
        ['Class II', 'Beta-1 Adrenergic Receptors', 'No change on APD ↔', 'Prolongs AV ERP ↑', 'Metoprolol, Esmolol, Atenolol', 'Esmolol has ultra-short half-life (~9 min); masks hypoglycemia in diabetics'],
        ['Class III', 'Phase 3 Delayed Rectifier K+ (IKr)', 'Prolongs APD ↑↑', 'Prolongs ERP ↑↑', 'Amiodarone, Sotalol, Dofetilide', 'Pulmonary fibrosis, thyroid derangement, corneal whorls (Amiodarone); Torsades risk'],
        ['Class IV', 'L-type Calcium Channels', 'No change on APD ↔', 'Prolongs AV ERP ↑', 'Verapamil, Diltiazem', 'Severe constipation (Verapamil), Gingival hyperplasia, Negative inotropy (avoid in HFrEF)']
      ]
    },
    highYieldPearls: [
      'Adenosine is the drug of choice for paroxysmal supraventricular tachycardia (PSVT). Acts on Gi-coupled A1 receptors to transiently arrest AV node conduction (half-life <10 seconds; inhibited by Caffeine and Theophylline).',
      'Magnesium Sulfate is the first-line treatment for Torsades de Pointes caused by drug-induced QT prolongation!'
    ]
  },
  {
    id: 'sum-antimicrobial-penicillins',
    title: 'Penicillins & Beta-Lactam Antibiotic Spectrum',
    system: 'Antimicrobial',
    summary: 'Structural evolution, spectrum of coverage, beta-lactamase vulnerability, and high-yield clinical utilities of penicillins, aminopenicillins, antistaphylococcal penicillins, and antipseudomonal agents.',
    coreConcepts: [
      {
        heading: 'Mechanism of Action',
        detail: 'Covalently binds and acylates the active site serine residue of Penicillin-Binding Proteins (transpeptidases), preventing peptidoglycan cross-linking.'
      },
      {
        heading: 'Resistance Mechanisms',
        detail: 'Bacterial beta-lactamases cleave the 4-membered ring; mutated PBPs with low affinity (e.g. PBP2a in MRSA encoded by mecA gene); porin mutations in gram-negatives.'
      }
    ],
    drugComparisonTable: {
      headers: ['Class', 'Representatives', 'Antibacterial Spectrum', 'Beta-Lactamase Susceptibility', 'High-Yield Clinical Application'],
      rows: [
        ['Natural Penicillins', 'Penicillin G (IV), Penicillin V (Oral)', 'Streptococcus pyogenes/pneumoniae, Treponema pallidum (Syphilis), Actinomyces', 'High (cleaved by penicillinase)', 'Gold standard for Neurosyphilis (IV Pen G) and Strep pharyngitis (Pen V)'],
        ['Antistaphylococcal', 'Nafcillin, Oxacillin, Dicloxacillin', 'Methicillin-Susceptible S. aureus (MSSA)', 'Resistant (bulky hydrophobic side chain sterically protects ring)', 'First-line for MSSA endocarditis, osteomyelitis, and skin cellulitis'],
        ['Aminopenicillins', 'Amoxicillin, Ampicillin', 'Gram-positives + H. pylori, E. coli, Proteus, Listeria, enterococci', 'High (requires Clavulanate / Sulbactam for resistant strains)', 'Otitis media, Listeria monocytogenes meningitis (Ampicillin), Lyme in children'],
        ['Antipseudomonal', 'Piperacillin, Ticarcillin', 'Pseudomonas aeruginosa + Gram-negative enteric rods', 'High (co-formulated as Zosyn with Tazobactam)', 'Hospital-acquired pneumonia, Neutropenic fever, Sepsis in immunocompromised'],
        ['Monobactams', 'Aztreonam', 'Aerobic Gram-negative rods ONLY (including Pseudomonas)', 'Resistant to many beta-lactamases', 'Safe in patients with severe Penicillin/Cephalosporin anaphylaxis!']
      ]
    },
    highYieldPearls: [
      'Aztreonam has NO cross-reactivity with other beta-lactams (except Ceftazidime which shares the exact same side chain). Safe in patients with severe anaphylactic penicillin allergy!',
      'Jarisch-Herxheimer reaction: Acute fever, rigors, and hypotension occurring hours after starting Penicillin for secondary syphilis due to massive spirochete lysis releasing endotoxin-like pyrogens.'
    ]
  }
];
