import { ChemicalStructureItem } from '../types/medical';

export const chemicalStructuresData: ChemicalStructureItem[] = [
  {
    id: 'beta-lactam',
    name: 'Beta-Lactam Core (Penicillins & Cephalosporins)',
    chemicalClass: 'Beta-Lactam Antibacterials',
    system: 'Antimicrobial',
    iupacOrFormula: '4-membered cyclic amide (Azetidin-2-one)',
    molecularWeight: 'Core ~71.08 g/mol (Benzylpenicillin 334.4 g/mol)',
    corePharmacophore: 'Strained 4-membered cyclic amide ring fused to a sulfur-containing heterocycle',
    clinicalIndication: 'Gram-positive/negative bacterial infections, Streptococcal pharyngitis, Syphilis, Meningitis, Pseudomonas (piperacillin)',
    svgType: 'beta_lactam',
    functionalGroups: [
      {
        id: 'bl-ring',
        name: 'Beta-Lactam 4-Membered Ring',
        formula: 'C3H4NO (cyclic amide)',
        cx: 240,
        cy: 160,
        radius: 36,
        color: '#DC2626',
        role: 'Suicide Substrate & PBP Acylator',
        clinicalSignificance: 'Under extreme ring strain (~90° vs standard 109.5° tetrahedral angle). The carbonyl carbon is an electrophilic trap attacked by the catalytic Serine-403 residue of Penicillin-Binding Protein (PBP) transpeptidase, irreversibly locking the bacterial cell wall cross-linker.',
        pharmacophoreContribution: 'Absolute requirement for antibacterial activity. If cleaved by bacterial beta-lactamase (penicillinase), all antibacterial activity is permanently lost.'
      },
      {
        id: 'bl-thiazolidine',
        name: 'Thiazolidine Ring (5-membered sulfur ring)',
        formula: 'C3H7NS',
        cx: 330,
        cy: 170,
        radius: 34,
        color: '#2563EB',
        role: 'Structural Rigidity & Stereochemical Anchor',
        clinicalSignificance: 'Fused to the beta-lactam ring to create bicyclic tension that prevents amide resonance, keeping the carbonyl unusually reactive. In cephalosporins, replaced by a 6-membered dihydrothiazine ring.',
        pharmacophoreContribution: 'Holds the carboxylate group in the exact stereospecific orientation mimicking D-Ala-D-Ala.'
      },
      {
        id: 'bl-acyl-sidechain',
        name: 'Acyl Side Chain (R-Group)',
        formula: 'R-CO-NH-',
        cx: 140,
        cy: 130,
        radius: 30,
        color: '#059669',
        role: 'Spectrum, Beta-Lactamase Resistance & Acid Stability',
        clinicalSignificance: 'Modifications here determine antibacterial spectrum: adding an amino group (-NH2) yields Ampicillin/Amoxicillin (enterococcal & gram-negative porin penetration); bulky dimethoxyphenyl gives Methicillin (steric protection against penicillinase); ureido group gives Piperacillin (anti-Pseudomonal activity).',
        pharmacophoreContribution: 'Tolerates synthetic variation; governs oral bioavailability and resistance profiles.'
      },
      {
        id: 'bl-carboxylate',
        name: 'Free Carboxylate Anion',
        formula: '-COO⁻ (C3 position)',
        cx: 365,
        cy: 235,
        radius: 26,
        color: '#D97706',
        role: 'Ionic Anchor with Lysine Residue in PBP Active Pocket',
        clinicalSignificance: 'Essential for ionic binding to a conserved positively charged lysine residue in transpeptidases. Esters (prodrugs like pivampicillin) mask this charge for oral absorption, then undergo esterase cleavage.',
        pharmacophoreContribution: 'Mimics the terminal carboxylate of natural substrate D-alanyl-D-alanine.'
      }
    ],
    sarRules: [
      {
        modification: 'Bulky aromatic side chain (e.g. 2,6-dimethoxyphenyl)',
        pharmacologicalEffect: 'Sterically hinders bacterial beta-lactamases from reaching the carbonyl',
        exampleDrug: 'Methicillin, Nafcillin, Oxacillin'
      },
      {
        modification: 'Addition of alpha-amino group (-NH2)',
        pharmacologicalEffect: 'Creates zwitterion, facilitates passage through Gram-negative porin channels (OmpF/OmpC)',
        exampleDrug: 'Amoxicillin, Ampicillin'
      },
      {
        modification: 'Ureido/Piperazine side chain substitution',
        pharmacologicalEffect: 'Extends coverage to Pseudomonas aeruginosa via enhanced outer membrane affinity',
        exampleDrug: 'Piperacillin'
      },
      {
        modification: 'Co-administration with Beta-Lactamase Inhibitor (Clavulanic acid, Tazobactam, Avibactam)',
        pharmacologicalEffect: 'Acts as suicide decoy substrate, protecting the beta-lactam antibiotic from enzymatic destruction',
        exampleDrug: 'Augmentin (Amoxicillin + Clavulanate)'
      }
    ],
    highYieldPearl: 'Penicillins structurally mimic the D-Ala-D-Ala terminus of bacterial peptidoglycan precursors. Transpeptidase mistakes the beta-lactam for D-Ala-D-Ala and attacks it, forming a covalent penicilloyl-enzyme intermediate that cannot undergo deacylation!',
    relatedDrugs: ['Penicillin G/V', 'Amoxicillin', 'Nafcillin', 'Ceftriaxone', 'Meropenem', 'Aztreonam']
  },
  {
    id: 'catecholamine',
    name: 'Catecholamine Backbone (Phenylethylamine Core)',
    chemicalClass: 'Adrenergic Agonists & Neurotransmitters',
    system: 'Autonomic',
    iupacOrFormula: '4-(2-aminoethyl)benzene-1,2-diol',
    molecularWeight: 'Epinephrine: 183.2 g/mol, Norepinephrine: 169.18 g/mol',
    corePharmacophore: 'Benzene ring with ortho-dihydroxy substituents linked to an ethylamine side chain',
    clinicalIndication: 'Anaphylaxis (Epinephrine), Septic shock (Norepinephrine), Cardiogenic shock (Dobutamine), Bradycardia, Asthma (Albuterol)',
    svgType: 'catecholamine',
    functionalGroups: [
      {
        id: 'cat-catechol',
        name: 'Catechol Ring (3,4-Dihydroxybenzene)',
        formula: 'C6H3(OH)2',
        cx: 170,
        cy: 160,
        radius: 38,
        color: '#0284C7',
        role: 'Receptor Affinity & COMT Susceptibility',
        clinicalSignificance: 'Hydroxyl groups at positions 3 and 4 form crucial hydrogen bonds with serine residues (Ser204, Ser207) on alpha and beta adrenergic receptors. However, 3-OH makes the drug an instant target for Catechol-O-Methyltransferase (COMT), resulting in near-zero oral bioavailability and rapid metabolism.',
        pharmacophoreContribution: 'Loss of one or both phenolic -OH groups (e.g. Amphetamine, Ephedrine) drastically decreases COMT degradation, increases lipid solubility, and allows crossing of the Blood-Brain Barrier for powerful CNS stimulation!'
      },
      {
        id: 'cat-beta-oh',
        name: 'Beta-Hydroxyl Group (-OH)',
        formula: '-CH(OH)- (chiral center)',
        cx: 260,
        cy: 140,
        radius: 26,
        color: '#059669',
        role: 'Stereochemical Agonist Potency',
        clinicalSignificance: 'The R(-) enantiomer forms essential hydrogen bonds with adrenergic receptors (Easson-Stedman hypothesis). Absence of the beta-OH (e.g. Dopamine) decreases direct receptor potency while preserving peripheral vascular effects.',
        pharmacophoreContribution: 'Provides 100-fold higher affinity for direct adrenergic receptor activation compared to desoxy derivatives.'
      },
      {
        id: 'cat-alpha-c',
        name: 'Alpha-Carbon Position',
        formula: '-CH2- / -CH(CH3)-',
        cx: 320,
        cy: 175,
        radius: 25,
        color: '#D97706',
        role: 'MAO Resistance & Indirect Sympathomimetic Activity',
        clinicalSignificance: 'Substitution with an alpha-methyl group (-CH3) provides steric hindrance against Monoamine Oxidase (MAO) breakdown, dramatically prolonging half-life and enabling indirect release of stored vesicles.',
        pharmacophoreContribution: 'Converts rapid-acting direct transmitter into orally stable, long-acting indirect agent (e.g. Ephedrine, Amphetamine).'
      },
      {
        id: 'cat-amino',
        name: 'Terminal Amino Group',
        formula: '-NH2 / -NH(CH3) / -NH(R)',
        cx: 390,
        cy: 150,
        radius: 28,
        color: '#DC2626',
        role: 'Alpha vs Beta Receptor Subtype Selectivity',
        clinicalSignificance: 'The size of the alkyl substituent on the nitrogen atom directly dictates receptor selectivity: Unsubstituted (-NH2) = Norepinephrine (high alpha, moderate beta-1, zero beta-2); Methyl (-CH3) = Epinephrine (potent alpha-1/2, beta-1/2); Isopropyl or t-butyl = Isoproterenol/Albuterol (pure beta-agonists due to steric clash with alpha-pocket).',
        pharmacophoreContribution: 'Bulky N-substituents sterically exclude drug from alpha receptors, producing selective beta-1 or beta-2 agonists.'
      }
    ],
    sarRules: [
      {
        modification: 'Enlarging N-alkyl substituent (e.g., -CH3 -> -CH(CH3)2 -> -C(CH3)3)',
        pharmacologicalEffect: 'Progressively shifts selectivity from Alpha -> Beta-1/Beta-2 -> Selective Beta-2',
        exampleDrug: 'Albuterol, Salmeterol, Terbutaline'
      },
      {
        modification: 'Removal of 3,4-dihydroxy catechol groups',
        pharmacologicalEffect: 'Increases CNS penetration, resists COMT, promotes indirect norepinephrine release from vesicles',
        exampleDrug: 'Amphetamine, Methamphetamine'
      },
      {
        modification: 'Replacing 3,4-catechol with 3,5-resorcinol or hydroxymethyl group',
        pharmacologicalEffect: 'Resists COMT degradation, providing long duration of action and high oral bioavailability',
        exampleDrug: 'Metaproterenol, Albuterol'
      }
    ],
    highYieldPearl: 'Easson-Stedman Hypothesis: For maximum adrenergic receptor stimulation, three contact points are required: (1) Catechol benzene ring, (2) Beta-hydroxyl group, (3) Positively charged ammonium head. This explains why (R)-epinephrine is 100x more potent than (S)-epinephrine!',
    relatedDrugs: ['Norepinephrine', 'Epinephrine', 'Dopamine', 'Dobutamine', 'Isoproterenol', 'Albuterol', 'Amphetamine']
  },
  {
    id: 'steroid-nucleus',
    name: 'Steroid Nucleus (Cyclopentanoperhydrophenanthrene Core)',
    chemicalClass: 'Corticosteroids & Sex Hormones',
    system: 'Endocrine',
    iupacOrFormula: '17-carbon fused 4-ring tetracyclic skeleton (Rings A, B, C, D)',
    molecularWeight: 'Hydrocortisone: 362.46 g/mol, Dexamethasone: 392.46 g/mol',
    corePharmacophore: 'Tetracyclic ring system comprising three cyclohexane rings (A, B, C) and one cyclopentane ring (D)',
    clinicalIndication: 'Addison disease, Asthma, Septic shock, Autoimmune conditions, Brain tumor edema, Anaphylaxis',
    svgType: 'steroid',
    functionalGroups: [
      {
        id: 'st-ring-a',
        name: 'Ring A 3-Ketone & 4,5-Double Bond',
        formula: '4-en-3-one system',
        cx: 140,
        cy: 220,
        radius: 34,
        color: '#DC2626',
        role: 'Glucocorticoid & Mineralocorticoid Receptor Binding',
        clinicalSignificance: 'Essential for all biological corticosteroid activity. Reduction of the 4,5 double bond by 5-alpha/beta reductase in the liver inactivates the hormone for urinary excretion.',
        pharmacophoreContribution: 'Absolute baseline requirement for nuclear steroid receptor dimerization.'
      },
      {
        id: 'st-c11-oh',
        name: 'C11-Beta Hydroxyl Group',
        formula: '-OH (at position 11)',
        cx: 215,
        cy: 140,
        radius: 28,
        color: '#059669',
        role: 'Anti-Inflammatory Glucocorticoid Switch',
        clinicalSignificance: 'Mandatory for glucocorticoid anti-inflammatory action! Cortisone and Prednisone have a ketone (=O) at C11 and are INACTIVE prodrugs until converted to active Cortisol and Prednisolone by hepatic 11-beta-hydroxysteroid dehydrogenase type 1 (11-beta-HSD1). In severe liver failure, must give Prednisolone directly!',
        pharmacophoreContribution: 'Directly contacts nuclear receptor ligand-binding domain; absence eliminates topical potency.'
      },
      {
        id: 'st-c9-fluoro',
        name: 'C9-Alpha Fluorination (-F)',
        formula: '-F (at position 9)',
        cx: 210,
        cy: 200,
        radius: 24,
        color: '#D97706',
        role: 'Electron-Withdrawing Enhancement & Mineralocorticoid Super-Agonist',
        clinicalSignificance: 'In Fludrocortisone, 9-alpha-fluorination increases glucocorticoid potency 10-fold and mineralocorticoid (salt-retaining) potency 125-fold! Used clinically for orthostatic hypotension and primary adrenal insufficiency.',
        pharmacophoreContribution: 'Induces electronic polarization that protects the 11-OH and tightens mineralocorticoid receptor binding.'
      },
      {
        id: 'st-c17-sidechain',
        name: 'C17 Dihydroxyacetone Side Chain',
        formula: '-COCH2OH',
        cx: 360,
        cy: 135,
        radius: 32,
        color: '#2563EB',
        role: 'Glucocorticoid Selectivity Anchor',
        clinicalSignificance: 'Characterizes all 21-carbon corticosteroids. Adding an alpha-methyl at C16 (Dexamethasone, Betamethasone) completely eliminates sodium retention (zero mineralocorticoid effect), making them the choice for cerebral edema and COVID-19 ARDS.',
        pharmacophoreContribution: 'Governs discrimination between mineralocorticoid, androgenic, and glucocorticoid receptors.'
      }
    ],
    sarRules: [
      {
        modification: '1,2-Dehydrogenation (Double bond between C1 and C2, e.g. Prednisone)',
        pharmacologicalEffect: 'Increases glucocorticoid anti-inflammatory potency 4-fold and decreases sodium-retaining property',
        exampleDrug: 'Prednisone, Prednisolone'
      },
      {
        modification: '16-Alpha/Beta Methylation + 9-Alpha Fluorination',
        pharmacologicalEffect: 'Massive 25x glucocorticoid boost with ZERO mineralocorticoid activity (no salt retention)',
        exampleDrug: 'Dexamethasone, Betamethasone'
      },
      {
        modification: '9-Alpha Fluorination on cortisol backbone without C16 substitution',
        pharmacologicalEffect: 'Extreme mineralocorticoid salt-retaining potency (125x)',
        exampleDrug: 'Fludrocortisone'
      }
    ],
    highYieldPearl: '11-beta-HSD type 2 is present in the renal cortical collecting duct. It oxidizes cortisol into inactive cortisone so that normal high cortisol levels do not overwhelm mineralocorticoid receptors. Excess licorice (glycyrrhizic acid) blocks 11-beta-HSD2 -> Apparent Mineralocorticoid Excess (hypertension, severe hypokalemia, metabolic alkalosis)!',
    relatedDrugs: ['Hydrocortisone', 'Prednisone', 'Prednisolone', 'Dexamethasone', 'Fludrocortisone', 'Triamcinolone']
  },
  {
    id: 'benzodiazepine',
    name: '1,4-Benzodiazepine Ring System',
    chemicalClass: 'GABA_A Positive Allosteric Modulators',
    system: 'Neuropsychiatry',
    iupacOrFormula: 'Fusion of benzene ring and 7-membered 1,4-diazepine ring',
    molecularWeight: 'Diazepam: 284.74 g/mol, Lorazepam: 321.16 g/mol',
    corePharmacophore: '7-membered 1,4-diazepine ring fused to an aromatic A-ring, with a 5-phenyl C-ring',
    clinicalIndication: 'Status epilepticus, Alcohol withdrawal, Acute panic, Pre-operative sedation, Muscle spasticity',
    svgType: 'benzodiazepine',
    functionalGroups: [
      {
        id: 'bzd-c7',
        name: 'C7 Electronegative Substituent (Ring A)',
        formula: '-Cl / -NO2',
        cx: 145,
        cy: 160,
        radius: 30,
        color: '#DC2626',
        role: 'Affinity Potentiator for GABA_A Allosteric Site',
        clinicalSignificance: 'An electron-withdrawing group at position 7 is strictly required for high affinity. Diazepam and Lorazepam have chlorine (-Cl), while Clonazepam and Nitrazepam have nitro (-NO2) which substantially increases potency.',
        pharmacophoreContribution: 'Positions 6, 8, and 9 must remain unsubstituted; substitution there dramatically decreases potency.'
      },
      {
        id: 'bzd-c3-oh',
        name: 'C3 Hydroxyl Group (Ring B)',
        formula: '-OH (at position 3)',
        cx: 260,
        cy: 220,
        radius: 28,
        color: '#059669',
        role: 'Direct Glucuronidation & Safety in Hepatic Impairment',
        clinicalSignificance: 'Compounds with a 3-hydroxyl group (Lorazepam, Oxazepam, Temazepam: "LOT" mnemonic) bypass hepatic Phase I CYP450 oxidation! They undergo direct Phase II glucuronidation, making them the safest choices for elderly patients and those with cirrhosis or alcoholic hepatitis.',
        pharmacophoreContribution: 'Dictates metabolic pathway: non-3-OH agents (Diazepam, Chlordiazepoxide) form active metabolites with half-lives exceeding 100 hours.'
      },
      {
        id: 'bzd-c5-phenyl',
        name: 'C5 Phenyl Ring (Ring C)',
        formula: 'Aromatic phenyl / 2-chlorophenyl',
        cx: 280,
        cy: 120,
        radius: 32,
        color: '#2563EB',
        role: 'Hydrophobic Pocket Docking',
        clinicalSignificance: 'An aromatic ring at position 5 is essential. Ortho substitution (-Cl or -F as in Lorazepam, Clonazepam, Midazolam) further enhances receptor affinity.',
        pharmacophoreContribution: 'Fills a lipophilic pocket at the interface between the alpha-1/2/3/5 and gamma-2 subunits.'
      }
    ],
    sarRules: [
      {
        modification: 'Hydroxylation at C3 (Lorazepam, Oxazepam, Temazepam - "LOT")',
        pharmacologicalEffect: 'Direct glucuronidation; safe in liver failure; no long-lived active metabolites',
        exampleDrug: 'Lorazepam, Oxazepam'
      },
      {
        modification: 'Imidazole or triazole ring fused across positions 1 and 2',
        pharmacologicalEffect: 'Ultra-rapid onset, rapid hepatic clearance, short half-life',
        exampleDrug: 'Midazolam, Triazolam, Alprazolam'
      },
      {
        modification: 'Competitive antagonist at the same pocket (Flumazenil)',
        pharmacologicalEffect: 'Blocks benzodiazepine binding to reverse overdose without affecting GABA or barbiturates',
        exampleDrug: 'Flumazenil'
      }
    ],
    highYieldPearl: 'Benzodiazepines increase the FREQUENCY of GABA_A chloride channel opening ("FrenZodiazepines"), whereas Barbiturates increase the DURATION of opening ("BarbiDURATes"). Flumazenil reverses benzodiazepines but does NOT reverse barbiturates, alcohol, or opioids!',
    relatedDrugs: ['Diazepam', 'Lorazepam', 'Midazolam', 'Alprazolam', 'Clonazepam', 'Flumazenil (Antagonist)']
  },
  {
    id: 'opioid-skeleton',
    name: 'Morphinan Core (4,5-Epoxymorphinan Skeleton)',
    chemicalClass: 'Mu-Opioid Receptor Agonists & Antagonists',
    system: 'Neuropsychiatry',
    iupacOrFormula: 'Pentacyclic morphinan core with 4,5-ether bridge',
    molecularWeight: 'Morphine: 285.34 g/mol, Naloxone: 327.37 g/mol',
    corePharmacophore: 'Rigid T-shaped skeleton with phenolic ring A, piperidine ring D, and 4,5-epoxy bridge',
    clinicalIndication: 'Severe acute pain, Cancer breakthrough pain, Acute pulmonary edema, Myocardial infarction pain',
    svgType: 'opioid',
    functionalGroups: [
      {
        id: 'op-c3-oh',
        name: 'C3 Phenolic Hydroxyl (-OH)',
        formula: '-OH (at position 3)',
        cx: 155,
        cy: 160,
        radius: 30,
        color: '#DC2626',
        role: 'Essential Mu-Receptor Hydrogen Bonding Anchor',
        clinicalSignificance: 'Mandatory for high mu-receptor affinity! Methylation of C3 to a methoxy (-OCH3) produces Codeine, which has only ~10% the affinity of morphine until demethylated by CYP2D6 into active morphine. Poor CYP2D6 metabolizers get zero analgesia from codeine, while ultra-rapid metabolizers risk respiratory arrest!',
        pharmacophoreContribution: 'Acetylation at both C3 and C6 yields Diacetylmorphine (Heroin), increasing BBB penetration 100-fold.'
      },
      {
        id: 'op-n-methyl',
        name: 'Nitrogen Atom & N-Substituent',
        formula: '>N-CH3 vs >N-CH2-CH=CH2',
        cx: 320,
        cy: 150,
        radius: 32,
        color: '#2563EB',
        role: 'Agonist vs Antagonist Binary Switch',
        clinicalSignificance: 'A tertiary amine protonated at physiologic pH binds to Asp147 on the mu receptor. Replacing the N-methyl group with an N-allyl group (-CH2-CH=CH2) or cyclopropylmethyl converts the pure agonist into a pure competitive ANTAGONIST (Naloxone, Naltrexone)!',
        pharmacophoreContribution: 'The single most critical structural element determining agonism vs competitive blockade.'
      },
      {
        id: 'op-c6-oh',
        name: 'C6 Alcoholic Hydroxyl',
        formula: '-OH (at position 6)',
        cx: 260,
        cy: 235,
        radius: 28,
        color: '#059669',
        role: 'Glucuronidation Target & Potency Modulation',
        clinicalSignificance: 'Morphine is glucuronidated at C3 (M3G, neurotoxic inactive) and C6 (M6G, 10-fold MORE potent analgesic than parent morphine). In renal failure, M6G accumulates dangerously, causing delayed fatal respiratory depression.',
        pharmacophoreContribution: 'Oxidation of C6 to a ketone (=O) plus saturation of 7,8 double bond yields Hydromorphone (Dilaudid, 7x more potent).'
      }
    ],
    sarRules: [
      {
        modification: 'Replacement of N-methyl with N-allyl (Naloxone) or N-cyclopropylmethyl (Naltrexone)',
        pharmacologicalEffect: 'Flips functional efficacy from full agonist to complete competitive antagonist',
        exampleDrug: 'Naloxone, Naltrexone'
      },
      {
        modification: 'Etherification of C3-OH into methyl ether (-OCH3)',
        pharmacologicalEffect: 'Decreases first-pass hepatic extraction; requires CYP2D6 activation to morphine',
        exampleDrug: 'Codeine, Oxycodone'
      },
      {
        modification: 'Di-acetylation at C3 and C6 (Diacetylmorphine)',
        pharmacologicalEffect: 'Extreme lipophilicity; rushes across the BBB within seconds -> intense euphoria',
        exampleDrug: 'Heroin'
      }
    ],
    highYieldPearl: 'Opioid Triad of Overdose: Pinpoint pupils (Miosis - Parasympathetic Edinger-Westphal nucleus stimulation), Respiratory depression, and CNS coma. Tolerance develops to all opioid effects EXCEPT Miosis and Constipation ("Miosis and Constipation are Constant")!',
    relatedDrugs: ['Morphine', 'Codeine', 'Hydromorphone', 'Fentanyl', 'Methadone', 'Naloxone (Antagonist)', 'Naltrexone']
  }
];
