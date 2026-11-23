export interface BioModelCard {
  id: string;
  ladderSpan: string;
  era: string;
  system: string;
  mechanism: string;
  metricHeadline: string;
  metricDetail: string;
  computationalParallel: string;
  evidenceTag: string;
}

export const BIO_MODELS: BioModelCard[] = [
  {
    id: 'CA-M1',
    ladderSpan: 'CL01–CL02',
    era: '~3.8–3.5 Ga',
    system: 'Archaean EVs & LuxI/LuxR Quorum Switch',
    mechanism: '20–400 nm lipid vesicles protect RNA cargo; cooperative Hill (n_H = 2, 4) autoinducer threshold gates ~600 secreted ORFs.',
    metricHeadline: '95.49%–99.17% ATP Saved',
    metricDetail: 'At low density ρ/ρ_K = 0.20 (seed 20261123), cooperative gating saves 95.49% (n_H=2) to 99.17% (n_H=4) regulon ATP and suppresses noisy false wakes 2.92×–11.66×.',
    computationalParallel: 'Zero-clock OS eventfd membrane potential V_u >= θ_u (CTA-T7..T14): Tier-3 frontier models sleep at 0 CPU cycles until deterministic misses cross threshold.',
    evidenceTag: '[E] + [M] + CTA-T11..T14',
  },
  {
    id: 'CA-M2',
    ladderSpan: 'CL03 · CL06',
    era: '~3.43–0.54 Ga',
    system: 'SepJ Cyanobacterial Nanopores & Gap Junctions',
    mechanism: '15 nm proteinaceous septal tube-cap-plug channels exchange metabolites across 20-cell filaments and seal upon Ca²⁺ lysis stress.',
    metricHeadline: '95.0% vs. 0.0% Survival',
    metricDetail: 'Rapid τ_close = 0.05 s pore closure preserves 19/20 (95.0%) viable cells (90.0% at 0.15–0.30 s), whereas ungated lock-open filaments collapse to 0/20 (0.0%).',
    computationalParallel: 'BLAKE3 + Ed25519 envelope guard + LSTM multiplicative gates + sandbox commit breaker: 200/200 Byzantine faults blocked (0.00% corrupt commits vs. 84.50% unattested).',
    evidenceTag: '[E] + [M] + CTA-T15..T18',
  },
  {
    id: 'CA-M3',
    ladderSpan: 'CL09–CL13',
    era: '~0.50–0.10 Ga',
    system: 'Starling k = 7 Topological Flocks',
    mechanism: '3D murmurations couple to k ≈ 6–7 topological nearest neighbors rather than a fixed Euclidean metric radius R_0.',
    metricHeadline: '100.0% vs. 0.68% Cohesion',
    metricDetail: 'Under predator strike and 64× volume (4× radial) expansion across N ∈ [64, 512], k=7 holds 100.0% single-component LCC (ξ/L = 0.3689) while metric R_0 shatters to 0.68%–4.30%.',
    computationalParallel: 'Sparse-MoE top-k expert routing (12.30× NVMe read reduction on 34.66B) and scale-invariant k-neighbor call-graph AST localization.',
    evidenceTag: '[E] + [M] (CA-H3)',
  },
  {
    id: 'CA-M4',
    ladderSpan: 'CL08 · CL10',
    era: '~0.60 Ga',
    system: 'Physarum Adaptive Poiseuille Pruning',
    mechanism: 'Aneural slime mold externalizes spatial memory and prunes tubes via superlinear flux feedback Ḋ_ij = |Q_ij|^µ / (1 + |Q_ij|^µ) − D_ij.',
    metricHeadline: '100.0% Shortest-Path Flux',
    metricDetail: 'For µ ∈ {1.3, 1.8} inside the unsaturated window |Q| < Q_infl, shortest-path flux reaches 100.00% (non-shortest D → 0); 16-node mesh achieves FT = 1.00 at TL/MST = 1.39.',
    computationalParallel: 'Successive Shortest Path (SSP) min-cost flow routing (2.11 µs solve, 2.40 µs failover) + Loop 5 hit-rate eviction h <= h_min (CTA-T24..T28, CTA-T45).',
    evidenceTag: '[E] + [M] (CA-H4)',
  },
  {
    id: 'CA-M5',
    ladderSpan: 'CL14–CL20',
    era: '300 ka – 2026 CE',
    system: 'Attested Cumulative Cultural Ratchet',
    mechanism: '20-generation hybrid society (30 lineages) on a deceptive valley landscape after synthetic demonstrators are removed at Gen 5.',
    metricHeadline: '100.0% vs. 29.27% Retention',
    metricDetail: 'Attested externalized artifact libraries lock in 100.00% (30/30 lineages) optimal skill at Gen 20 vs. 76.25% prestige imitation, 29.27% unverified imitation, and 0.00% no-machine baseline.',
    computationalParallel: 'Downward crystallization into SHA-256-frozen DNULLMM1 (1.77 µJ) and 81 × RAMB36E2 LUT6 pages: producer model sleeps while verified skill persists.',
    evidenceTag: '[E] + [M] + CTA-T5..T6',
  },
];

export interface WinterDiagnosis {
  year: string;
  title: string;
  brokenOperator: string;
  scientistMechanism: string;
  plainTakeaway: string;
}

export const AI_WINTER_DIAGNOSES: WinterDiagnosis[] = [
  {
    year: '1969 / 1973–1980',
    title: 'AI Winter I · Representation & Combinatorial Stall',
    brokenOperator: 'Missing Low-Cost Search Prior & Unsound CF Gate (G_θ failed)',
    scientistMechanism:
      'Single-layer Perceptrons hit order-1 XOR parity limits (AI07), while MYCIN (~450 rules) and Hearsay-II Blackboard (AI08, AI10) lacked differentiable perceptual ingestion and DAG d-separation—triggering O(b^d) search explosion and k-hop Certainty-Factor drift err_0 + kε (CTA-T1; 0.92^12 = 36.8% joint precision).',
    plainTakeaway:
      'Hand-written rules communicated over a shared workspace without a fast learned search filter or a sound probability gate—overwhelming early computers with false-positive branches.',
  },
  {
    year: '1987–1993',
    title: 'AI Winter II · Rule Maintenance & Vanishing Gradients',
    brokenOperator: 'Manual Rule Fragility + Saturating f^k Decay (E & T failed)',
    scientistMechanism:
      'Auditing >4,500 pairwise-interacting symbolic rules manually exceeded diagnostic yield, while deep saturating sigmoids suffered backward exponential attenuation f^k → 0 (CTA-T2) until LSTM Constant Error Carousels (AI17, digital SepJ analog) gated cell state.',
    plainTakeaway:
      'Hand-maintained rule tables grew too brittle to scale manually, while multi-layer neural networks lost backward error signals across time until protective memory gates were invented.',
  },
  {
    year: '2026',
    title: 'The Rung-5 Bottleneck · Cold-Start MAC & Prose Relay Tax',
    brokenOperator: 'Missing Downward Compilation (ΔT ≤ ΔT* & NL Transport)',
    scientistMechanism:
      'Tool-using agents re-execute O(L²) KV-cache and floating-point MAC sweeps from cold start (ΔT ≈ 1) while multi-agent NL transcripts inflate context 3.71× (CTA-E2 Arm C) and expend 55.14 J physical shunt measured_j per handoff vs. 0.732 mJ for attested Φ_IR binary frames.',
    plainTakeaway:
      'Contemporary agents re-solve familiar tasks from scratch on every prompt and pass verbose prose between models—spending 75,000× excess handoff energy instead of compiling verified procedures.',
  },
];

export interface TranslationRow {
  idx: string;
  domain: string;
  scientistStatement: string;
  plainStatement: string;
  anchor: string;
}

export const TRANSLATION_MATRIX: TranslationRow[] = [
  {
    idx: '01',
    domain: 'The Compilation Threshold',
    scientistStatement: 'Downward compilation reduces expected cumulative analytical spend over stationary horizon ΔT iff ΔT · (p_0\' c_wake − c_0) > E_compile under deterministic soundness predicate C(z) = 1 (Proposition 1, CTA-T41).',
    plainStatement: 'When a verified solution repeats often enough to pay back the energy spent compiling it, turning slow neural reasoning into a fast lookup table saves energy without losing accuracy.',
    anchor: 'LutAdapt.Cascade · CTA-T41',
  },
  {
    idx: '02',
    domain: 'Attested Binary Channels',
    scientistStatement: 'Canonical binary Φ_IR envelopes with constant-time BLAKE3 + Ed25519 attestation verify in 49.95 µs and 0.732 mJ VDD_CPU_SOC_MSS measured_j on Jetson AGX Thor vs. 3,938.49 ms and 55.14 J for multi-agent NL serialization (75,374× energy cut).',
    plainStatement: 'Instead of having software modules explain structured results to each other in paragraphs of English, compact signed data packets transfer exact meaning in microseconds.',
    anchor: 'CTA-E4/E5 · CTA-T16..T18 · CTA-T32',
  },
  {
    idx: '03',
    domain: 'Event-Driven Quiescence',
    scientistStatement: 'Integrate-and-fire OS eventfd / kqueue channels execute 0 empty wakeups for ∑ w_{iu} s_i < θ_u, cutting 1%-duty energy 2.21×–6.22× across 5 silicon hosts while SSP reduced-cost flow routes in 2.11 µs.',
    plainStatement: 'Like biological neurons and bacterial quorum sensors, idle modules should sleep at zero clock ticks rather than waking up thousands of times per second to ask if work has arrived.',
    anchor: 'CTA-E1/E4 · CTA-T7..T10 · CTA-T24..T28',
  },
  {
    idx: '04',
    domain: 'Reconfigurable Boolean Fabrics',
    scientistStatement: 'A 4-stage 250 MHz 512×512 Beneš–Copy–Beneš fabric + 81 × RAMB36E2 BRAM cache evaluates 64-bit joint-mode LUT6 pages in 1 cycle (CPI = 1.0, 0 DSP48E2, 15.59 est_mW CE-gated idle) with zero FPGA re-place-and-route.',
    plainStatement: 'A non-blocking switching network paired with block-memory truth tables lets hardware swap compiled Boolean skills in a single clock cycle without re-synthesizing the chip.',
    anchor: 'Claims LA-3, LA-16, LA-22 · BenesCopy.lean',
  },
  {
    idx: '05',
    domain: 'Multi-Paradigm Complementarity',
    scientistStatement: 'When ∀k ∃r p(k,r) = 0 while ∀r ∃k p(k,r) = 1, executable selectNicheCamp (DES-10) strictly dominates every solo AI paradigm on pass rate (98/100 vs. <=49%) and CpJ (9.26×–26.87× Thor measured_j).',
    plainStatement: 'Different computational methods excel at different problems—combining neural proposers with SAT solvers, causal graphs, tree search, and lookup tables outperforms any single method used alone.',
    anchor: 'CTA-E5 · CTA-T36..T40',
  },
  {
    idx: '06',
    domain: 'Amortization & Auto-Pruning',
    scientistStatement: 'Compiled skills with empirical hit rate h = H/N ≤ h_min = E_comp / (N · (c_high − c_low)) fail amortization and auto-evict, while surviving skills satisfy CpJ(t_M) < CpJ(t_Q) < CpJ(t_Y) < CpJ(t_D).',
    plainStatement: 'If the world changes and a compiled shortcut stops getting used often enough to justify its upkeep, an exact mathematical threshold retires it automatically.',
    anchor: 'CTA-T43 · CTA-T45',
  },
];

export interface ForcingLoop {
  loop: string;
  name: string;
  summary: string;
  formalSpec: string;
  receipt: string;
  theorems: string;
}

export const FIVE_LOOPS: ForcingLoop[] = [
  {
    loop: 'Loop 1',
    name: 'BLAKE3 + Ed25519 Φ_IR Bus',
    summary: 'Replaces verbose conversational relays (3.71× context growth → 1.00×) with schema-typed binary frames carrying 256-bit BLAKE3 digests and Ed25519 signatures.',
    formalSpec: 'admittedWeight = 0 if ¬(digest_eq ∧ sig_ok ∧ schema_ok)',
    receipt: '25.95–37.39 µs p50 (643–926 µJ RAPL reported_j; 927.30 µJ Thor VDD_CPU_SOC_MSS measured_j); 200 / 200 injected faults rejected.',
    theorems: 'CTA-T16..T18 · CTA-T32..T35',
  },
  {
    loop: 'Loop 2',
    name: '1-Pass cost_lut.json Calibration',
    summary: 'Measures latency and energy of each deterministic kernel and solver across input-size buckets in a single profiling pass—requiring zero gradient training.',
    formalSpec: 'k*(r) = argmin_{k : p(k,r)=1} c(k, r)',
    receipt: '15 held-out calibration probes profile all 10 paradigms (0 overlap with 100 test tasks); 200-sample kernel buckets from 0.36 mJ to 15.73 mJ.',
    theorems: 'CTA-T36..T40',
  },
  {
    loop: 'Loop 3',
    name: 'SSP Flow + FormEBM-v3 Pre-Filter',
    summary: 'Routes tasks via Bellman–Ford + Johnson reduced-cost Dijkstra; keeps Tier-3 models asleep on OS eventfd until misses pass latent plausibility ranking.',
    formalSpec: 'w_π(i,u) ≥ 0 · V_u < θ_u ⇒ 0 CPU cycles · AUROC = 0.9437',
    receipt: '2.11 µs epoch-0 SSP solve (2.40 µs failover); FormEBM-v2 (47.09 mJ) cuts ~49 mJ RCE checker calls 2.39×; FormEBM-v3 reaches 0.9437 unseen-shape AUROC.',
    theorems: 'CTA-T7..T10 · CTA-T21 · CTA-T24..T28',
  },
  {
    loop: 'Loop 4',
    name: 'Tier 3 → 2 → 1 → 0 Crystallization',
    summary: 'Checks novel solutions via isolated test/proof verifiers (0.00% broken commits) and compiles recurring equivalence classes into progressively cheaper substrates.',
    formalSpec: 'c_3 (~15 J) > c_2 (~15 mJ) > c_1 (1.77 µJ mmap) > c_0 (~12 pJ est_j LUT6)',
    receipt: 'N*_{3→2} = 1 repeat; N*_{2→1} = 4 hits; 1,000-task Zipfian stream drops from 15,000 J to 343.34 J (43.69× CpJ gain).',
    theorems: 'CTA-T23 · CTA-T41..T44 (T44: 0 axioms)',
  },
  {
    loop: 'Loop 5',
    name: 'Dual-Rail Energy Ledger & h_min Pruning',
    summary: 'Records separated hardware energy receipts (measured_j, reported_j, est_j), withholds net subtraction when baseline drift > 10%, and evicts cold rules.',
    formalSpec: 'Evict skill j iff h_j = H_j / N ≤ h_min = E_comp,j / (N · (c_high − c_low))',
    receipt: 'Pre/post quiet drift gated at <= 10.0% (9.93% in CTA-E2; withheld automatically on CTA-E1 410.2% thermal tail); proves Month→Decade CpJ monotonicity.',
    theorems: 'CTA-T43 · CTA-T45 · Falsifier 6',
  },
];

export interface CampRow {
  id: string;
  name: string;
  tierRole: string;
  nicheSuperpower: string;
  soloFailure: string;
  soloPassPct: number;
  regimeBreakdown: string;
  falseCommitPct: number;
  thorMeasuredJ: string;
  thorCpJ: string;
  i9ReportedJ: string;
  i9CpJ: string;
  isComposite?: boolean;
}

export const TEN_CAMPS: CampRow[] = [
  {
    id: 'C1',
    name: 'Autoregressive LLM Solo (GPT-OSS-120B)',
    tierRole: 'Tier-3 Open-World Proposer',
    nicheSuperpower: 'Broad NL intent parsing & R5 open-world code synthesis (18/20)',
    soloFailure: 'Hallucinates R2 bitvectors (1/20), R3 FD-SAT witnesses (1/20), & Simpson traps',
    soloPassPct: 48,
    regimeBreakdown: '17 / 1 / 1 / 11 / 18',
    falseCommitPct: 52,
    thorMeasuredJ: '5,513.77 J VDD (28,161.5 J VIN)',
    thorCpJ: '0.0087',
    i9ReportedJ: '3,637.81 J',
    i9CpJ: '0.0132',
  },
  {
    id: 'C2',
    name: 'Deductive Symbolic / FD-SAT / Lean',
    tierRole: 'Tier-2 Kernel & Soundness Gate',
    nicheSuperpower: 'Exact R3 multi-clause witnesses (20/20) & 0% false commits',
    soloFailure: 'Cannot ingest raw ambiguous NL prose or synthesize open-world Python solo',
    soloPassPct: 30,
    regimeBreakdown: '0 / 10 / 20 / 0 / 0',
    falseCommitPct: 0,
    thorMeasuredJ: '0.070 J VDD (0.33 J VIN)',
    thorCpJ: '429.60',
    i9ReportedJ: '0.087 J',
    i9CpJ: '346.69',
  },
  {
    id: 'C3',
    name: 'Latent JEPA / FormEBM Scorer',
    tierRole: 'Tier-3 Millijoule Pre-Filter',
    nicheSuperpower: 'Fast continuous candidate ranking (2.39× fewer checker wakes)',
    soloFailure: 'Unverified continuous energy minima pick greedy/confounded attractors solo (0/100)',
    soloPassPct: 0,
    regimeBreakdown: '0 / 0 / 0 / 0 / 0',
    falseCommitPct: 100,
    thorMeasuredJ: '3.99 J VDD (17.61 J VIN)',
    thorCpJ: '0.0000',
    i9ReportedJ: '5.16 J',
    i9CpJ: '0.0000',
  },
  {
    id: 'C4',
    name: 'MCTS Rollout Planner (UCB1, 256)',
    tierRole: 'Tier-3 Non-Myopic Tree Search',
    nicheSuperpower: 'Escapes R4 6-step deceptive MDP valleys (10/10)',
    soloFailure: 'High-variance rollouts miss discrete bitvectors, causal do(X), & code synthesis',
    soloPassPct: 11,
    regimeBreakdown: '0 / 0 / 1* / 10 / 0',
    falseCommitPct: 19,
    thorMeasuredJ: '0.62 J VDD (2.43 J VIN)',
    thorCpJ: '16.22',
    i9ReportedJ: '0.78 J',
    i9CpJ: '14.02',
  },
  {
    id: 'C5',
    name: 'Episodic Case Store (Shape D DNULLMM1)',
    tierRole: 'Tier-1 Frozen 1.77 µJ Recall',
    nicheSuperpower: 'Zero-FLOP O(1) mmap recall on known R1 alpha-renamed schemas (16/20)',
    soloFailure: 'Exact De Bruijn hash cleanly abstains on unseen novel schemas',
    soloPassPct: 16,
    regimeBreakdown: '16 / 0 / 0 / 0 / 0',
    falseCommitPct: 0,
    thorMeasuredJ: '0.003 J VDD (0.012 J VIN)',
    thorCpJ: '6,254.89',
    i9ReportedJ: '0.005 J',
    i9CpJ: '3,363.46',
  },
  {
    id: 'C6',
    name: 'Evolutionary AST Mutator (300 evals)',
    tierRole: 'Tier-3 Combinatorial Island',
    nicheSuperpower: 'Discovers compact R5 Python functions locally without LLM calls (4/20)',
    soloFailure: 'Blind mutation stalls on large program spaces without prior/verifier guidance',
    soloPassPct: 4,
    regimeBreakdown: '0 / 0 / 0 / 0 / 4',
    falseCommitPct: 20,
    thorMeasuredJ: '4.94 J VDD (22.13 J VIN)',
    thorCpJ: '0.8104',
    i9ReportedJ: '5.96 J',
    i9CpJ: '0.6713',
  },
  {
    id: 'C7',
    name: 'Causal Bayesian do(X) Engine',
    tierRole: 'Tier-2 Interventional Kernel',
    nicheSuperpower: 'Solves 10/10 Simpson-confounded R4 DAGs in microjoules (0% false)',
    soloFailure: 'Requires typed DAG schema; abstains on non-causal regimes',
    soloPassPct: 10,
    regimeBreakdown: '0 / 0 / 0 / 10 / 0',
    falseCommitPct: 0,
    thorMeasuredJ: '0.002 J VDD (0.007 J VIN)',
    thorCpJ: '6,506.18',
    i9ReportedJ: '0.003 J',
    i9CpJ: '3,980.89',
  },
  {
    id: 'C8',
    name: 'Sub-Symbolic LUT6 / FSM Automaton',
    tierRole: 'Tier-0 Single-Cycle Reflex Floor',
    nicheSuperpower: 'Closes 20/20 R2 CAN stuff-bit, Mealy FSM, & LUT6 bitvector tasks at 0% false',
    soloFailure: 'Bounded Boolean width per page; cannot synthesize novel algorithms solo',
    soloPassPct: 20,
    regimeBreakdown: '0 / 20 / 0 / 0 / 0',
    falseCommitPct: 0,
    thorMeasuredJ: '0.009 J VDD (0.041 J VIN)',
    thorCpJ: '2,218.52',
    i9ReportedJ: '0.010 J',
    i9CpJ: '1,974.72',
  },
  {
    id: 'C9',
    name: 'Multi-Agent NL Debate (3-Agent)',
    tierRole: 'Replaced as Prose Transport',
    nicheSuperpower: 'Diverse perspective generation (+1% over solo LLM at 3.8× token cost)',
    soloFailure: '253,968 tokens (300 calls), 51% false commits, 16,541.19 J Thor VDD measured_j',
    soloPassPct: 49,
    regimeBreakdown: '19 / 1 / 0 / 12 / 17',
    falseCommitPct: 51,
    thorMeasuredJ: '16,541.19 J VDD (84,483.8 J VIN)',
    thorCpJ: '0.0030',
    i9ReportedJ: '10,913.22 J',
    i9CpJ: '0.0045',
  },
  {
    id: 'C10',
    name: 'Embodied Sandbox Perturb (200 probes)',
    tierRole: 'Terminal Behavioral Oracle',
    nicheSuperpower: 'Executes state-leak & boundary probes directly against candidate code',
    soloFailure: 'Myopic black-box hill-climbing gets trapped in R4 deceptive valleys (0/10)',
    soloPassPct: 4,
    regimeBreakdown: '0 / 0 / 0 / 0 / 4',
    falseCommitPct: 30,
    thorMeasuredJ: '3.05 J VDD (13.39 J VIN)',
    thorCpJ: '1.3135',
    i9ReportedJ: '3.24 J',
    i9CpJ: '1.2334',
  },
  {
    id: 'DES-10',
    name: 'DES-10 Digital Enzymatic Synthesis',
    tierRole: 'Unified 10-Paradigm SSP + Downward Ratchet',
    nicheSuperpower: '80/80 R1–R4 at 0 LLM calls + online C5 crystallization + 18/20 R5 (22 calls total)',
    soloFailure: '1% residual edge-case miss; governed by h_min amortization floor (CTA-T45)',
    soloPassPct: 98,
    regimeBreakdown: '20 / 20 / 20 / 20 / 18',
    falseCommitPct: 1,
    thorMeasuredJ: '1,215.77 J VDD (6,208.87 J VIN)',
    thorCpJ: '0.0806 (9.26× C1 · 26.87× C9)',
    i9ReportedJ: '802.45 J',
    i9CpJ: '0.1221 (9.25× C1 · 27.13× C9)',
    isComposite: true,
  },
];
