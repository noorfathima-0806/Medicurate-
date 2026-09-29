import { RapidRecallCard } from '../types/medical';

export const rapidRecallData: RapidRecallCard[] = [
  {
    id: 'rc-1',
    prompt: 'What is the specific pharmacological antidote for Heparin overdose?',
    subPrompt: 'Positively charged peptide neutralizing negatively charged heparin',
    category: 'Pharmacology',
    answer: 'Protamine Sulfate',
    explanation: 'Protamine is a strongly basic, polycationic peptide that forms a stable, inactive ion pair with acidic polyanionic heparin.'
  },
  {
    id: 'rc-2',
    prompt: 'Which diuretic class is uniquely known to CAUSE hypercalcemia and decrease urinary calcium excretion?',
    subPrompt: 'Acts on Na+/Cl- cotransporter in early distal convoluted tubule',
    category: 'Renal & Electrolytes',
    answer: 'Thiazide Diuretics (e.g., Hydrochlorothiazide, Chlorthalidone)',
    explanation: '"Thiazides Save Calcium" by enhancing basolateral 3Na+/Ca2+ exchange and apical TRPV5 calcium reabsorption.',
    mnemonicHook: 'Loop lose, Thiazides save Ca2+'
  },
  {
    id: 'rc-3',
    prompt: 'What is the antidote of choice for Methanol or Ethylene Glycol poisoning?',
    subPrompt: 'Competitive inhibitor of Alcohol Dehydrogenase (ADH)',
    category: 'Biochemistry',
    answer: 'Fomepizole',
    explanation: 'Fomepizole blocks alcohol dehydrogenase, preventing conversion of methanol to toxic formic acid and ethylene glycol to oxalic acid.'
  },
  {
    id: 'rc-4',
    prompt: 'Which ribosomal subunit is targeted by Aminoglycosides and Tetracyclines?',
    subPrompt: 'Small bacterial ribosomal subunit',
    category: 'Antimicrobial',
    answer: '30S Ribosomal Subunit',
    explanation: '"buy AT 30" -> Aminoglycosides & Tetracyclines bind 30S; CELL binds 50S.',
    mnemonicHook: 'buy AT 30, CELL at 50'
  },
  {
    id: 'rc-5',
    prompt: 'What is the specific antidote for Benzodiazepine toxicity?',
    subPrompt: 'Competitive antagonist at the GABA_A allosteric benzodiazepine binding site',
    category: 'Neuropsychiatry',
    answer: 'Flumazenil',
    explanation: 'Flumazenil reverses benzodiazepine-induced sedation. Caution: may precipitate acute withdrawal seizures in chronic users!'
  },
  {
    id: 'rc-6',
    prompt: 'Which antimicrobial is known for the high-yield side effect "Gray Baby Syndrome"?',
    subPrompt: 'Due to lack of hepatic UDP-glucuronosyltransferase in neonates',
    category: 'Antimicrobial',
    answer: 'Chloramphenicol',
    explanation: 'Neonatal livers lack glucuronyl transferase, leading to toxic accumulation of chloramphenicol, flaccidity, cyanosis, and vascular collapse.'
  },
  {
    id: 'rc-7',
    prompt: 'Which cardiac antiarrhythmic drug causes Pulmonary Fibrosis, Thyroid derangements, and Corneal microdeposits?',
    subPrompt: 'Vaughan-Williams Class III agent with 37% iodine by weight',
    category: 'Cardiovascular',
    answer: 'Amiodarone',
    explanation: 'Amiodarone blocks Phase 3 IKr potassium channels. Highly lipophilic with a 50-day half-life and multi-organ toxicity.'
  },
  {
    id: 'rc-8',
    prompt: 'What is the antidote for Acetaminophen (Paracetamol) overdose?',
    subPrompt: 'Replenishes hepatic glutathione to neutralize toxic NAPQI metabolite',
    category: 'Pharmacology',
    answer: 'N-Acetylcysteine (NAC)',
    explanation: 'NAC provides sulfhydryl groups to replenish glutathione and directly conjugates with toxic N-acetyl-p-benzoquinone imine (NAPQI).'
  },
  {
    id: 'rc-9',
    prompt: 'Which high-yield GPCR G-protein type couples to M1, M3, Alpha-1, H1, and V1 receptors?',
    subPrompt: 'Activates Phospholipase C (PLC) -> IP3 / DAG pathway',
    category: 'Autonomic',
    answer: 'Gq Protein',
    explanation: '"HAVe 1 M&M" = H1, Alpha-1, V1, M1, M3 are all Gq coupled, mobilizing intracellular calcium.',
    mnemonicHook: 'HAVe 1 M&M'
  },
  {
    id: 'rc-10',
    prompt: 'What is the antidote for Beta-Blocker overdose with severe bradycardia and cardiogenic shock?',
    subPrompt: 'Bypasses adrenergic receptors to directly increase myocardial cAMP',
    category: 'Cardiovascular',
    answer: 'Glucagon',
    explanation: 'Glucagon binds non-adrenergic receptors on cardiomyocytes that independently stimulate adenylyl cyclase, boosting cAMP and restoring heart rate and contractility.'
  }
];
