export type MedicalCategory = 
  | 'Pharmacology' 
  | 'Biochemistry' 
  | 'Cardiovascular' 
  | 'Autonomic' 
  | 'Antimicrobial' 
  | 'Endocrine' 
  | 'Neuropsychiatry' 
  | 'Renal & Electrolytes';

export interface FunctionalGroup {
  id: string;
  name: string;
  formula: string;
  cx: number;
  cy: number;
  radius: number;
  color: string;
  role: string;
  clinicalSignificance: string;
  pharmacophoreContribution: string;
}

export interface SARPoint {
  modification: string;
  pharmacologicalEffect: string;
  exampleDrug: string;
}

export interface ChemicalStructureItem {
  id: string;
  name: string;
  chemicalClass: string;
  system: MedicalCategory;
  iupacOrFormula: string;
  molecularWeight: string;
  corePharmacophore: string;
  clinicalIndication: string;
  svgType: 'beta_lactam' | 'catecholamine' | 'steroid' | 'benzodiazepine' | 'opioid' | 'sulfonamide';
  functionalGroups: FunctionalGroup[];
  sarRules: SARPoint[];
  highYieldPearl: string;
  relatedDrugs: string[];
}

export interface MoAStep {
  stepNumber: number;
  title: string;
  targetSite: string;
  cellularEvent: string;
  drugAction: string;
  clinicalImpact: string;
  activeCoordinates?: { x: number; y: number };
}

export interface MechanismOfAction {
  id: string;
  title: string;
  system: MedicalCategory;
  prototypeDrugs: string[];
  therapeuticTarget: string;
  overview: string;
  imageKey?: 'cardiacAp' | 'autonomicSynapse' | 'hero' | 'pharmacophoreBanner';
  steps: MoAStep[];
  contraindications: string[];
  adverseEffects: string[];
  keyClinicalPearl: string;
  boardQuestionHook: string;
}

export interface MnemonicLetter {
  letter: string;
  title: string;
  meaning: string;
  highYieldAssociation: string;
  visualTag: string;
}

export interface MnemonicItem {
  id: string;
  title: string;
  phrase: string;
  category: MedicalCategory;
  clinicalTopic: string;
  breakdown: MnemonicLetter[];
  clinicalContext: string;
  rapidRecallPearl: string;
  frequentlyTestedOn: 'USMLE Step 1' | 'USMLE Step 2' | 'MBBS Pharmacology' | 'NCLEX Pharm';
}

export interface MockQuestionOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  isCorrect: boolean;
  distractorRationale: string;
}

export interface MockQuestion {
  id: string;
  clinicalVignette: string;
  question: string;
  category: MedicalCategory;
  difficulty: 'High-Yield' | 'Board Master' | 'Rapid Concept';
  system: string;
  imageKey?: 'cardiacAp' | 'autonomicSynapse' | 'pharmacophoreBanner' | 'hero';
  svgDiagramType?: 'action_potential' | 'beta_lactam' | 'synapse_cleft' | 'raas_axis';
  options: MockQuestionOption[];
  detailedExplanation: string;
  highYieldPearl: string;
  linkedMnemonicId?: string;
  linkedChemicalId?: string;
}

export interface RapidRecallCard {
  id: string;
  prompt: string;
  subPrompt: string;
  category: MedicalCategory;
  answer: string;
  explanation: string;
  mnemonicHook?: string;
}

export interface SummaryNote {
  id: string;
  title: string;
  system: MedicalCategory;
  summary: string;
  coreConcepts: { heading: string; detail: string }[];
  highYieldPearls: string[];
  drugComparisonTable?: {
    headers: string[];
    rows: string[][];
  };
}
