export interface OpenLearningModality {
  kind: string;
  title: string;
  url: string;
  accent: 'amber' | 'cyan' | 'indigo';
  scope: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const LEARNING_MODALITIES: OpenLearningModality[] = [
  {
    kind: '01 · Primary Monographs & Proofs',
    title: 'Open Research Papers & LaTeX Twins',
    url: 'https://research.openie.dev/papers/communication-avalanche/',
    accent: 'cyan',
    scope: 'Peer-Citability & Full Methods',
    subtitle: 'Pre-registered protocols, raw CSV/JSON digests, and six-kernel Lean 4.36.0 proofs',
    description:
      'Read the complete methods, pre-registration SHA-256 hashes, explicit scope limits, and negative/withheld findings across The Communication Tool Avalanche, Downward LUT6 Compilation, Deterministic Null, and Metered Commit Gates.',
    highlights: [
      '90 DOI/PMID/arXiv verified primary references in Communication Avalanche',
      '132 Six-Kernel Lean 4.36.0 theorems (36 lut-adapt + 20 NucleusWobble) + 5,393 RCE constants (0 sorry)',
      'HTML + archival PDF + LaTeX source twins for every study',
    ],
  },
  {
    kind: '02 · Interactive Labs & Observatories',
    title: 'Living Figures & Hands-On Tutorials',
    url: 'https://research.openie.dev/tutorials/',
    accent: 'amber',
    scope: '12 Interactive Labs',
    subtitle: 'Step-by-step interactive notebooks, FWHT codon inspectors, and M.2 thermal explorers',
    description:
      'Manipulate Hill cooperativity exponents, cyanobacterial SepJ pore closure constants, Beneš 512×512 switch schedules, 64-codon LUT6 Walsh-Hadamard wobble masks, and fanless XC7A200T M.2 thermal envelopes directly in the browser without installing toolchains.',
    highlights: [
      'Living Observatory: /living/compiled-agency/ (Shot #6 KV260 INA260 & Jetson Thor INA3221 measured_j bitwidth & 4-stage cascade explorer @ 813eb96)',
      'Living Observatory: /living/communication-avalanche/ (4 instruments + 10 figures) & /living/lut-adapt/ (Beneš router & NVMe streaming)',
      'Guided Tutorials: /tutorials/ — 12 Interactive Labs (including Lab 11 64-Codon Wobble FWHT & Lab 12 XC7A200T M.2 Thermal Envelope)',
    ],
  },
  {
    kind: '03 · Visual & Audio Explainers',
    title: 'Research TV & Research Radio',
    url: 'https://research.openie.dev/tv/?channel=avalanche',
    accent: 'indigo',
    scope: '28 TV Studies · 112 Cuts · 15 Radio Eps',
    subtitle: '28 four-depth visual studies (112 depth cuts) and 15 multi-voice audio broadcasts',
    description:
      'Watch telescoping 15s / 45s / 90s / 3m visual explainers across 28 Research TV studies (112 depth cuts) or listen to 15 structured Research Radio broadcasts (through ep15)—each linked directly to the underlying equations, datasets, and falsifiers.',
    highlights: [
      'Research TV (/tv/?channel=avalanche): 28 studies (112 depth cuts), incl. Study #28 64-Codon Lookup Nucleus',
      'Research Radio (/radio/?desk=avalanche): 15 broadcasts (incl. ep15 on LUT6 codons & fanless M.2 silicon)',
      'Topic-specific feeds for memory, communication, formal proof, and compute',
    ],
  },
];

export interface SisterReferenceItem {
  slug: string;
  name: string;
  domain: string;
  altDomain?: string;
  url: string;
  altUrl?: string;
  rungCoord: string;
  phase: 1 | 2;
  topicArea: string;
  formalSignature: string;
  summary: string;
  tvUrl: string;
  radioUrl: string;
}

export const SISTER_REFERENCES: SisterReferenceItem[] = [
  {
    slug: 'research',
    name: 'OpenIE Research Archive',
    domain: 'research.openie.dev',
    url: 'https://research.openie.dev',
    rungCoord: 'Primary Archive',
    phase: 2,
    topicArea: 'Monographs, Data & Proofs',
    formalSignature: '[E] · [T] · [M] · measured_j / reported_j / est_j',
    summary: 'Full-text research monographs, pre-registered datasets, Lean 4.36.0 proof audits, interactive living observatories, 12 interactive labs, 28 TV studies (112 depth cuts), and 15 Radio broadcasts.',
    tvUrl: 'https://research.openie.dev/tv/?channel=avalanche',
    radioUrl: 'https://research.openie.dev/radio/?desk=avalanche',
  },
  {
    slug: 'stack',
    name: 'The Periodic Stack Overview',
    domain: 'stack.openie.dev',
    url: 'https://stack.openie.dev',
    rungCoord: 'Foundations · R1–R9',
    phase: 2,
    topicArea: 'Information, Game & Mechanism Theory',
    formalSignature: '⟨ Shannon–Landauer · Von Neumann–Nash · Hurwicz–Myerson ⟩',
    summary: 'A teaching map showing how information theory (substrate), game theory (equilibrium wells), and mechanism design (routing) sit relative to physics.',
    tvUrl: 'https://research.openie.dev/tv/?channel=stack',
    radioUrl: 'https://research.openie.dev/radio/?desk=stack',
  },
  {
    slug: 'database',
    name: 'Data & Database Systems',
    domain: 'database.openie.dev',
    url: 'https://database.openie.dev',
    rungCoord: 'Rung 1 · Rung 6',
    phase: 1,
    topicArea: 'Indexing & Frozen Case Stores',
    formalSignature: 'DNULLMM1 · F_NOCACHE · SHA-256 Frozen',
    summary: 'Educational taxonomy of data indexing, write-ahead logs, content-addressed immutability, and O(1) memory-mapped integer lookup tables.',
    tvUrl: 'https://research.openie.dev/tv/?channel=data',
    radioUrl: 'https://research.openie.dev/radio/?desk=data',
  },
  {
    slug: 'knowledge',
    name: 'Knowledge & Epistemic Ledgers',
    domain: 'knowledge.openie.dev',
    url: 'https://knowledge.openie.dev',
    rungCoord: 'Rung 1 · Rung 8',
    phase: 1,
    topicArea: 'Cumulative Cultural Ratchets',
    formalSignature: 'Q(t + 1) ≥ Q(t) · CA-M5 (100% Gen-20 Retention)',
    summary: 'Explores how externalized citations, peer verification, and provenance tags prevent multi-hop cultural drift across generations.',
    tvUrl: 'https://research.openie.dev/tv/?channel=knowledge',
    radioUrl: 'https://research.openie.dev/radio/?desk=knowledge',
  },
  {
    slug: 'synthesis',
    name: 'Program & Structure Synthesis',
    domain: 'synthesis.openie.dev',
    url: 'https://synthesis.openie.dev',
    rungCoord: 'Rung 2 · Rung 7',
    phase: 1,
    topicArea: 'Proposer vs. Verifier Authority',
    formalSignature: 'Proposer(x) ──[ C(z) = 1 ]──▶ SleepCrystallizer',
    summary: 'Studies open-ended generation, burst token speculation, and how candidate synthesis couples safely to deterministic specification checks.',
    tvUrl: 'https://research.openie.dev/tv/?channel=synthesis',
    radioUrl: 'https://research.openie.dev/radio/?desk=synthesis',
  },
  {
    slug: 'proof',
    name: 'Formal Proof & Kernel Assurance',
    domain: 'proof.openie.dev',
    url: 'https://proof.openie.dev',
    rungCoord: 'Rung 3 · Threshold',
    phase: 2,
    topicArea: 'Multi-Kernel Verification',
    formalSignature: '132 Theorems + 5,393 RCE Decls · 6/6 Kernels (bwrap)',
    summary: 'Explains interactive theorem proving, small-kernel soundness, CVE-2026-72844 defenses, and sandboxing six independent Lean 4.36.0 checkers.',
    tvUrl: 'https://research.openie.dev/tv/?channel=proof',
    radioUrl: 'https://research.openie.dev/radio/?desk=proof',
  },
  {
    slug: 'communication',
    name: 'Communication & Channel Gates',
    domain: 'communication.openie.dev',
    url: 'https://communication.openie.dev',
    rungCoord: 'Rung 4 · Rung 8',
    phase: 2,
    topicArea: 'Biological & Cryptographic Channels',
    formalSignature: 'E_{a→b} = (Φ_IR, BLAKE3 + Ed25519, V_gate, θ_b)',
    summary: 'Traces thresholded signaling from bacterial quorum switches and SepJ nanopores to constant-time cryptographic envelopes and SSP flow.',
    tvUrl: 'https://research.openie.dev/tv/?channel=communication',
    radioUrl: 'https://research.openie.dev/radio/?desk=communication',
  },
  {
    slug: 'state',
    name: 'State & Event-Driven Dynamics',
    domain: 'state.openie.dev',
    url: 'https://state.openie.dev',
    rungCoord: 'Rung 6',
    phase: 2,
    topicArea: 'Quiescence & Coalgebraic Bisimulation',
    formalSignature: 'V_u(t) < θ_u ⇒ 0 Firings · RCE T57–T61',
    summary: 'Examines integrate-and-fire kernel event queues, constant-size recurrent state-space duality (Mamba/DeltaNet), and bisimulation equivalence.',
    tvUrl: 'https://research.openie.dev/tv/?channel=state',
    radioUrl: 'https://research.openie.dev/radio/?desk=state',
  },
  {
    slug: 'memory',
    name: 'Memory Hierarchies',
    domain: 'memory.openie.dev',
    url: 'https://memory.openie.dev',
    rungCoord: 'Rung 6 · Rung 7',
    phase: 2,
    topicArea: 'Locality, Bandwidth & BRAM Pages',
    formalSignature: 'O(L²) KV ──▶ 970 MB INT4 NVMe ──▶ 81×RAMB36E2',
    summary: 'Analyzes why data movement dominates compute energy (Horowitz, 2014) and how hierarchical memory maps hot paths into local SRAM/BRAM.',
    tvUrl: 'https://research.openie.dev/tv/?channel=memory',
    radioUrl: 'https://research.openie.dev/radio/?desk=memory',
  },
  {
    slug: 'compute',
    name: 'Compute & Cascade Ordering',
    domain: 'compute.openie.dev',
    url: 'https://compute.openie.dev',
    rungCoord: 'Rung 7 · Rung 9',
    phase: 2,
    topicArea: 'Thermodynamics of Execution',
    formalSignature: 'E[J_σ] = ∑ c_{σ(k)} ∏ (1 − p_{σ(j)}) (Simon–Kadane)',
    summary: 'Covers Landauer bounds, Simon–Kadane probability-per-joule cascade ordering, Beneš permutation networks, and amortized compilation.',
    tvUrl: 'https://research.openie.dev/tv/?channel=compute',
    radioUrl: 'https://research.openie.dev/radio/?desk=compute',
  },
  {
    slug: 'agent',
    name: 'Multi-Paradigm Agency',
    domain: 'agent.openie.dev',
    url: 'https://agent.openie.dev',
    rungCoord: 'Rung 5 → Rung 8',
    phase: 2,
    topicArea: 'Sovereignty & Specialist Ecologies',
    formalSignature: 'DES-10 (98/100) · g_i(s_i, m) ∈ {0, 1}',
    summary: 'Studies why isolated single-paradigm agents plateau and how local opt-in invariants preserve participant autonomy in multi-agent networks.',
    tvUrl: 'https://research.openie.dev/tv/?channel=agent',
    radioUrl: 'https://research.openie.dev/radio/?desk=agent',
  },
  {
    slug: 'energy',
    name: 'Energy & Hardware Metrology',
    domain: 'energy.openie.dev',
    url: 'https://energy.openie.dev',
    rungCoord: 'Rung 6 · Rung 9',
    phase: 2,
    topicArea: 'Shunts, Counters & Drift Guards',
    formalSignature: 'measured_j ≠ reported_j ≠ est_j (Falsifier 6)',
    summary: 'Methodological guide to measuring computational joules honestly across physical DC shunts (INA238/INA3221), RAPL, IOReport, and RTL VCD traces.',
    tvUrl: 'https://research.openie.dev/tv/?channel=energy',
    radioUrl: 'https://research.openie.dev/radio/?desk=energy',
  },
];
