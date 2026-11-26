export type HorizonBucket = 'month' | 'quarter' | 'year' | 'decade';
export type HorizonStatusKind = 'verified' | 'active' | 'proof' | 'speculative';

export interface HorizonMilestone {
  id: string;
  bucket: HorizonBucket;
  windowLabel: string;
  title: string;
  bridgedCamps: string;
  mechanism: string;
  leanAnchor: string;
  gateMetric: string;
  killCriterion: string;
  statusLabel: string;
  statusKind: HorizonStatusKind;
}

export const HORIZON_MILESTONES: HorizonMilestone[] = [
  {
    id: 'HM01',
    bucket: 'month',
    windowLabel: 'Month 1',
    title: 'Attested Φ_IR Bus & Zero-Clock eventfd',
    bridgedCamps: 'C9 → C2 → C10',
    mechanism: 'Loop 1 + V_u ≥ θ_u integrate-and-fire wakeup',
    leanAnchor: 'CTA-T7..T10 · CTA-T16..T18 · CTA-T32..T35',
    gateMetric: '25.95–37.39 µs (643–926 µJ reported_j); 0 empty polls; 2.21× 1%-duty energy cut; 200/200 faults blocked',
    killCriterion: 'Edge verify > 100 µs or > 5 mJ; corrupt commits > 0; or eventfd fails 1%-duty joule win (Falsifiers 1, 2, 5)',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HM02',
    bucket: 'month',
    windowLabel: 'Months 1–2',
    title: 'One-Pass cost_lut.json & SSP Niche Router',
    bridgedCamps: 'C2 + C5 + C7 → C1',
    mechanism: 'Loop 2 + Loop 3 min-cost flow & deterministic-first escalation',
    leanAnchor: 'CTA-T19..T22 · CTA-T24..T28 · CTA-T36..T40',
    gateMetric: '2.11 µs SSP (2.40 µs failover); 59/60 (98.33%) pass, 0/60 false commits, 2.09× / 14.97× CpJ',
    killCriterion: 'SSP failover > 100 µs, false commits > 0%, or CpJ <= 1.0× monolithic LLM (CA-H6 / Falsifier 4)',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HM03',
    bucket: 'month',
    windowLabel: 'Month 2',
    title: 'Frozen Shape D (DNULLMM1) CI Case Crystallizer',
    bridgedCamps: 'C1 / C10 → C5',
    mechanism: 'Loop 4 Tier 3/2 → Tier 1 zero-copy POSIX mmap store',
    leanAnchor: 'CTA-T3..T6 · CTA-T23 · CTA-T41 · CTA-T44',
    gateMetric: '1.77 µJ O(1) POSIX mmap lookup; 0 test-time LLM calls on crystallized classes; frozen SHA-256',
    killCriterion: 'Any unverified output, test-time byte mutation, or > 4 KiB / > 50k-op per-class reducer',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HM04',
    bucket: 'month',
    windowLabel: 'Month 3',
    title: 'Dual-Rail Joule Ledger & Hit-Rate Auto-Pruning',
    bridgedCamps: 'C1–C10 5-Host Fleet',
    mechanism: 'Loop 5 hash-chained energy receipts + h_min eviction + 5-host audit',
    leanAnchor: 'CTA-T20 · CTA-T41 · CTA-T45',
    gateMetric: 'Pre/post quiet drift <= 10.0% (9.93% CTA-E2; <= 5.0% in Shot #6 @ 813eb96: 0.11% & 0.09% KV260 INA260); 927.30 µJ Jetson Thor INA3221 measured_j; auto-evict h <= h_min',
    killCriterion: 'Drift > threshold claimed as net joules (Falsifier 6) or unamortized skill h <= h_min retained (CTA-T45)',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HQ01',
    bucket: 'quarter',
    windowLabel: 'Quarter 1',
    title: 'Full DES-10 Ten-Camp Φ_IR Unification',
    bridgedCamps: 'All C1–C10',
    mechanism: 'Loop 1 + Loop 2 sequential Digital Enzymes',
    leanAnchor: 'CTA-T35..T40',
    gateMetric: '98 / 100 (98.0%, 1/100 false commit) DES-10 synthesis where all 10 solo camps <= 49%; 9.26×–26.87× Thor measured_j CpJ',
    killCriterion: 'Any single solo monoculture reaches >= 80% pass rate at <= DES-10 joules (CTA-T37 / CTA-T38 / CA-H10)',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HQ02',
    bucket: 'quarter',
    windowLabel: 'Quarter 2',
    title: 'FormEBM Pre-Filter Gating MCTS, FunSearch & RCE',
    bridgedCamps: 'C3 → C4 / C6 → C2 + C10',
    mechanism: 'Loop 3 span-normalized latent energy ranking (CTA-E6)',
    leanAnchor: 'CTA-T21 · CTA-T22 · CTA-T34 · CTA-T35',
    gateMetric: '0.9580 unseen-shape AUROC (2,240 C4+C6 Forms, 140 tasks, 0.00% drop: 124/140); 4.78× / 2.55× fewer RCE evals; 458.16 J vs 567.51 / 1,001.48 J Thor VDD measured_j (948.67 J vs 1,106.93 / 1,949.40 J Zen 5 reported_j)',
    killCriterion: 'Pre-filtering drops terminal verified solve rate > 1.0% or fails E_gate < F · E_down (CTA-T21)',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HQ03',
    bucket: 'quarter',
    windowLabel: 'Quarter 3',
    title: 'Automated Tier 3 → 2 → 1 Skill Crystallizer',
    bridgedCamps: 'C1 / C4 / C6 → C7 / C2 → C5',
    mechanism: 'Loop 4 recurrence promotion ≥ τ_j + Loop 5 h ≤ h_min auto-eviction (CTA-E7)',
    leanAnchor: 'CTA-T41 · CTA-T42 · CTA-T44 · CTA-T45',
    gateMetric: 'Live 1,000-task Zipf(0.85) stream: 1,000/1,000 (100% parity, 0 regressions), 99.11%–99.33% post-warmup <= 16 mJ, 33.33× fewer Tier-3 wakes, 25.96× Thor VDD measured_j CpJ (26.95× VIN; 31.65× Zen 5 reported_j), 6/6 shift transients evicted',
    killCriterion: 'Promoted Tier-2 rule causes >= 1 regression (CTA-T44) or fails E_comp payback by N = 1,000',
    statusLabel: 'Self-Checked [T/E]',
    statusKind: 'verified',
  },
  {
    id: 'HQ04',
    bucket: 'quarter',
    windowLabel: 'Quarter 4',
    title: 'KV260 & Aller A7 M.2 Board-Metered Tier 1 → 0 LUT6 Closure',
    bridgedCamps: 'C5 / C2 → C8 (xck26 & xc7)',
    mechanism: 'Loop 4 + Loop 5 512×512 Beneš + 81 × RAMB36E2 / 83 × RAMB36E1',
    leanAnchor: 'CTA-T41..T45 · LutAdapt.BenesCopy · NucleusWobble',
    gateMetric: 'KV260 TI INA260 SOM 5V DC measured_j live (@ 813eb96, 0.09%–0.11% drift): 26.58× gross (24.49× net: 685.43 / 40.49 µJ) 4-stage cascade & 187.49 / 10.30 µJ sub-bit packed int (4.13×/5.15× < INT8); xck26 RTL 15.59 est_mW idle; XC7A200T M.2 62,211 LUTs @ 0.86 est_W (M.2 3.3V gateware shunt active)',
    killCriterion: 'Post-PAR timing < 200–250 MHz, DSP48 > 0, < 100% parity, > 85 °C M.2 T_J, or physical shunt measured_j fails CPU Tier-1 win',
    statusLabel: 'Active [E]',
    statusKind: 'active',
  },
  {
    id: 'HY01',
    bucket: 'year',
    windowLabel: 'Years 1–2',
    title: 'Proof-Carrying Self-Maintaining OS / Compiler Fabric',
    bridgedCamps: 'C1 + C6 ↔ C2 ↔ C5 / C8',
    mechanism: 'Loops 1–5 over 10⁵–10⁶ SLOC (RCE + Lean 4.36.0)',
    leanAnchor: 'CTA-T5 · CTA-T6 · CTA-T39 · CTA-T43 · CTA-T44',
    gateMetric: '100% proof-certified commits (0 CVE regressions); >= 100× CpJ; strict CpJ(Year) > CpJ(Quarter)',
    killCriterion: 'Admitted commit violates safety invariant or 12-month CpJ fails strict horizon monotonicity (CTA-T43)',
    statusLabel: 'Proof-Anchored [T]',
    statusKind: 'proof',
  },
  {
    id: 'HY02',
    bucket: 'year',
    windowLabel: 'Years 2–3',
    title: 'Asynchronous Zero-Clock LUT6 + Crypto Silicon Tile',
    bridgedCamps: 'C8 + C3 + C2',
    mechanism: 'Hardware integrate-and-fire threshold accumulators',
    leanAnchor: 'CTA-T7..T10 · CTA-T16..T18 · CTA-T42',
    gateMetric: '< 10 nJ hardware-attested handoff; ~0 idle clock power; 250×–500× measured_j edge CpJ',
    killCriterion: '1%-duty leakage + handshake power >= 50% of synchronous clocked ASIC baseline (CTA-T10)',
    statusLabel: 'Proof-Anchored [T]',
    statusKind: 'proof',
  },
  {
    id: 'HY03',
    bucket: 'year',
    windowLabel: 'Years 2–3',
    title: 'Federated Zero-Raw-Data Cryptographic Skill Commons',
    bridgedCamps: 'C5 + C2 + C7',
    mechanism: 'Cross-org De Bruijn verified kernel sharing',
    leanAnchor: 'CTA-T5 · CTA-T6 · CTA-T34 · CTA-T44',
    gateMetric: '100% post-removal skill retention (CA-H5); 0% Trojan acceptance; 0 private training-record leakage',
    killCriterion: 'Federated ingestion admits > 0% Trojan regressions or leaks private source/training records',
    statusLabel: 'Proof-Anchored [T]',
    statusKind: 'proof',
  },
  {
    id: 'HY04',
    bucket: 'year',
    windowLabel: 'Years 3–4',
    title: 'Single-User Bidirectional BCI > 39 bit/s',
    bridgedCamps: 'BM07/08 + BM09/12 + C3/C8',
    mechanism: 'Sub-10 mW closed-loop cortical read-write enzyme',
    leanAnchor: 'CTA-T7..T10 · CTA-T29',
    gateMetric: 'FDA IDE trial: > 39 bit/s bidirectional mutual information (< 50 ms latency, < 15 mW implant)',
    killCriterion: 'Bidirectional ITR <= 19 bit/s (BM07 ceiling), > 1 °C cortical heating, or safety breach (CA-H7)',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
  {
    id: 'HY05',
    bucket: 'year',
    windowLabel: 'Years 3–5',
    title: 'Hardware Local Sovereignty Gate (g_i = 1) Dyadic BCI',
    bridgedCamps: 'BM15/16 → BM18',
    mechanism: 'Physical recipient firewall bridgedStep',
    leanAnchor: 'CTA-T29..T31 (T29/T30: 0 axioms)',
    gateMetric: '0 / 10,000 write leaks at g_i = 0; blinded authorship >= 0.90; dyadic task speedup at g_i = 1',
    killCriterion: 'IMMEDIATE KILL if g_i = 0 leaks > 0 state perturbations or authorship discrimination < 0.90 (CA-H7)',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
  {
    id: 'HY06',
    bucket: 'year',
    windowLabel: 'Years 3–5',
    title: 'GMP Phase I/II Human Intranasal EV Trials',
    bridgedCamps: 'EV01–EV16 + C7 / C3',
    mechanism: 'Batch-attested GMP sEV potency & cargo gates',
    leanAnchor: 'CTA-T3 · CTA-T16 analog (CA-H8)',
    gateMetric: '< 10% lot potency variance, 0 oncogenic miR-290, human CNS PET/fluid target engagement',
    killCriterion: 'Human intranasal dosing fails CNS target engagement above sham vehicle or shows toxicity (CA-H8)',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
  {
    id: 'HD01',
    bucket: 'decade',
    windowLabel: '2031–2036',
    title: 'Planetary Zero-Regression Enzymatic Commons (>1,000× CpJ)',
    bridgedCamps: 'All C1–C10',
    mechanism: 'Global Tier 3 → Tier 0/1 downward convergence',
    leanAnchor: 'CTA-T42..T45',
    gateMetric: '> 95% recurring world compute closed at pJ–µJ Tier 0/1; > 1,000× measured_j CpJ vs. 2026 LLMs',
    killCriterion: 'Real-world non-stationary drift pins Tier 0/1 hit rates permanently <= h_min (CTA-T45)',
    statusLabel: 'Proof-Anchored [T]',
    statusKind: 'proof',
  },
  {
    id: 'HD02',
    bucket: 'decade',
    windowLabel: '2032–2036',
    title: 'Cross-Brain Manifold Alignment Enzyme (N ≥ 3)',
    bridgedCamps: 'BM18 + C3 + C2',
    mechanism: 'Subject-specific Φ_brain latent alignment enzyme',
    leanAnchor: 'CTA-T30..T32 · CTA-T34',
    gateMetric: 'N >= 3 consenting users at > 39 bit/s, >= 0.95 fidelity, >= 0.90 authorship, >= 24-month stability',
    killCriterion: 'Prohibitive daily recalibration, gliosis SNR collapse < 24 mo, or goal overwrite (CTA-T31 / CA-H7)',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
  {
    id: 'HD03',
    bucket: 'decade',
    windowLabel: '2032–2036',
    title: 'Multi-Center Double-Blind Phase III Human EV RCTs',
    bridgedCamps: 'CL01 / CL23',
    mechanism: 'Phase III clinical neurocognitive falsification gate',
    leanAnchor: 'CA-H8 pre-registered clinical gate',
    gateMetric: 'n >= 300 double-blind RCT beating sham vehicle at p < 0.01 on 12–24-month AD/PD/TBI endpoints',
    killCriterion: 'Primary human endpoints fail sham vehicle at p < 0.01 or 24-month safety gate (CA-H8)',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
  {
    id: 'HD04',
    bucket: 'decade',
    windowLabel: '2034–2036',
    title: 'Hybrid Synthetic-Biological Cognitive Supplementation',
    bridgedCamps: 'DES-10 + BM18 + EV',
    mechanism: 'Unified biological-digital opt-in ratchet',
    leanAnchor: 'CTA-T5 · CTA-T6 · CTA-T29..T45',
    gateMetric: 'Compromised circuits borrow DES-10 compute via < 20 mW g_i = 1 bridge, beating assistive peripherals',
    killCriterion: 'Fails blinded daily-living independence RCT vs. non-invasive peripherals or breaches local agency',
    statusLabel: 'Speculative [S]',
    statusKind: 'speculative',
  },
];

export interface HistoricalMilestone {
  id: string;
  year: string;
  era: string;
  milestone: string;
  substrate: string;
  gate: string;
  unlocked: string;
  stallBoundary: string;
}

export const AI_HISTORY_38: HistoricalMilestone[] = [
  // Era I (1950–1965): AI01–AI06
  { id: 'AI01', year: '1950', era: 'Era I · Genesis', milestone: 'Turing Imitation Game (Turing)', substrate: 'Externalized teletype token channel', gate: 'Conversational human judge', unlocked: 'Replaced unobservable mentalism with operational I/O channel', stallBoundary: 'Behavioral indistinguishability lacked an internal truth verifier' },
  { id: 'AI02', year: '1952', era: 'Era I · Genesis', milestone: 'Theseus Relay Maze Mouse (Shannon)', substrate: '75 electromechanical relays storing 2-bit exit vectors', gate: 'Physical whisker-collision latch', unlocked: 'First hardware stigmergy: O(1) persistent spatial lookup table', stallBoundary: 'Fixed 5×5 state grid without compositional abstraction' },
  { id: 'AI03', year: '1956', era: 'Era I · Genesis', milestone: 'Logic Theorist & IPL Lists (Newell & Simon)', substrate: 'Dynamic pointer-linked subgoal proof trees in IPL', gate: 'Exact Principia Mathematica substitution check', unlocked: 'Proved 38/52 Principia theorems via heuristic tree search', stallBoundary: 'Exponential O(b^d) subgoal branching on deeper theorems' },
  { id: 'AI04', year: '1958', era: 'Era I · Genesis', milestone: 'Mark I Perceptron (Rosenblatt)', substrate: 'Motor-driven potentiometer weights over 400 photocells', gate: 'Hard linear step threshold wᵀx ≥ θ', unlocked: 'Sub-symbolic thresholded pattern learning from sensory arrays', stallBoundary: 'Single-layer order-1 inability to represent XOR parity' },
  { id: 'AI05', year: '1960', era: 'Era I · Genesis', milestone: 'Homoiconic Lisp S-Expressions (McCarthy)', substrate: 'Garbage-collected cons-cell trees unifying code & data', gate: 'eval/apply structural recursion', unlocked: 'Self-modifying symbolic programs and meta-circular compilers', stallBoundary: 'Unguided symbolic transformation without energy/search bounds' },
  { id: 'AI06', year: '1965', era: 'Era I · Genesis', milestone: 'Resolution & Unification (Robinson)', substrate: 'Skolemized CNF clause sets + most-general unifier (MGU)', gate: 'Machine-checkable empty clause [] derivation', unlocked: 'Compressed first-order deduction into a single sound inference rule', stallBoundary: 'Combinatorial clause explosion without learned clause selection' },
  // Era II (1969–1981): AI07–AI10
  { id: 'AI07', year: '1969', era: 'Era II · Winter I', milestone: 'Perceptrons Geometric Proof (Minsky & Papert)', substrate: 'Algebraic predicate order & group-invariance proofs', gate: 'Exact linear-separability falsifier', unlocked: 'Proved local order-1 gates cannot compute global parity/connectedness', stallBoundary: 'Froze multi-layer neural work for >15 yrs due to missing credit channel' },
  { id: 'AI08', year: '1971–76', era: 'Era II · Winter I', milestone: 'DENDRAL & MYCIN Production Rules (Feigenbaum, Shortliffe)', substrate: '~450 modular Lisp if-then rules + Certainty Factors (CF)', gate: 'Premise threshold CF > 0.2', unlocked: 'Separated explicit domain knowledge bases from inference engines', stallBoundary: 'Non-Bayesian CF chaining accumulated k-hop calibration drift (CTA-T1)' },
  { id: 'AI09', year: '1973', era: 'Era II · Winter I', milestone: 'Modular Actor Formalism (Hewitt, Bishop & Steiger)', substrate: 'Asynchronous point-to-point Actor message mailboxes', gate: 'Local Actor address & behavior encapsulation', unlocked: 'Decoupled concurrent distributed agents from global shared locks', stallBoundary: 'Unverified message payloads permitted cascading semantic drift' },
  { id: 'AI10', year: '1980', era: 'Era II · Winter I', milestone: 'Hearsay-II Blackboard (Erman, Reddy et al.)', substrate: 'Multi-level shared speech hypothesis Blackboard', gate: 'Opportunistic Knowledge Source (KS) focus scheduler', unlocked: 'Coordinated heterogeneous specialist modules over one workspace', stallBoundary: 'AI WINTER I: no differentiable perception or sound prior → O(b^d) stall' },
  // Era III (1982–1998): AI11–AI17
  { id: 'AI11', year: '1982', era: 'Era III · Gradients', milestone: 'Hopfield Associative Energy Net (Hopfield)', substrate: 'Symmetric Ising spin couplings w_ij = w_ji', gate: 'Monotonic Lyapunov energy descent ΔE ≤ 0', unlocked: 'Content-addressable attractor memory grounded in statistical physics', stallBoundary: 'Spurious local minima & ~0.138N storage capacity ceiling' },
  { id: 'AI12', year: '1986', era: 'Era III · Gradients', milestone: 'Reverse-Mode Backpropagation (Rumelhart, Hinton & Williams)', substrate: 'Backward chain-rule gradient tensor channel ∂L/∂z', gate: 'Differentiable hidden-unit loss reduction', unlocked: 'Broke the multi-layer XOR barrier via O(1)-pass credit assignment', stallBoundary: 'Saturating sigmoids decayed gradients exponentially f^k → 0 (Winter II)' },
  { id: 'AI13', year: '1988', era: 'Era III · Gradients', milestone: 'Bayesian DAGs & Causality (Pearl)', substrate: 'Directed acyclic graphs passing local π / λ belief messages', gate: 'Graphical d-separation & backdoor admissibility', unlocked: 'Replaced brittle Certainty Factors with coherent causal calculus', stallBoundary: 'NP-hard exact inference on densely loopy graphs; manual DAG authoring' },
  { id: 'AI14', year: '1989/92', era: 'Era III · Gradients', milestone: 'Temporal-Difference Q-Learning (Watkins & Dayan)', substrate: 'Externalized state-action Q(s,a) table + TD error δ_t', gate: 'Bellman optimality contraction operator', unlocked: 'Model-free off-policy credit propagation across delayed rewards', stallBoundary: 'Tabular state explosion prior to stable function approximation' },
  { id: 'AI15', year: '1989/98', era: 'Era III · Gradients', milestone: 'Convolutional LeNet-5 (LeCun et al.)', substrate: 'Spatially shared receptive-field kernels + subsampling maps', gate: 'Translation-equivariant structural prior', unlocked: 'Industrial bank-check OCR directly from raw pixels', stallBoundary: 'CPU compute limits & vanishing depth prior to GPU + ReLU + ResNet' },
  { id: 'AI16', year: '1995', era: 'Era III · Gradients', milestone: 'Support-Vector Machines (Cortes & Vapnik)', substrate: 'Sparse boundary support vectors in kernel Hilbert space', gate: 'Convex KKT maximum-margin complementarity', unlocked: 'Global optimum & VC generalization bounds without local minima', stallBoundary: 'O(N²–N³) Gram matrix scaling & fixed hand-picked kernels' },
  { id: 'AI17', year: '1997', era: 'Era III · Gradients', milestone: 'LSTM Constant Error Carousel (Hochreiter & Schmidhuber)', substrate: 'Linear cell state c_t + multiplicative input/forget/output gates', gate: 'Sigmoid [0,1] gate isolation (digital SepJ nanopore analog)', unlocked: 'Preserved error flow across >1,000 sequential steps, ending Winter II', stallBoundary: 'Sequential O(T) recurrence bottleneck blocked massive parallelization' },
  // Era IV (2006–2016): AI18–AI23
  { id: 'AI18', year: '2006', era: 'Era IV · Deep & Self-Play', milestone: 'UCT Monte Carlo Tree Search (Coulom; Kocsis & Szepesvári)', substrate: 'Asymmetric rollout statistics (N(s,a), Q(s,a))', gate: 'UCB1 exploration-exploitation confidence bound', unlocked: 'Focused lookahead compute onto high-value branches in Go/planning', stallBoundary: 'Uninformed random rollouts blind to subtle global patterns solo' },
  { id: 'AI19', year: '2009/12', era: 'Era IV · Deep & Self-Play', milestone: 'ImageNet + Dual-GPU AlexNet (Deng; Krizhevsky, Sutskever, Hinton)', substrate: '14M crowd-labeled ledger + ReLU CUDA feature maps', gate: 'Non-saturating ReLU (z > 0) + held-out ILSVRC oracle', unlocked: 'Halved vision error rates and ignited modern GPU scaling', stallBoundary: 'Dense floating-point sweeps paid full MAC cost on trivial inputs' },
  { id: 'AI20', year: '2013/15', era: 'Era IV · Deep & Self-Play', milestone: 'Word2Vec & DQN Experience Replay (Mikolov; Mnih et al.)', substrate: 'Dense vector geometry + 1M-frame circular replay buffer', gate: 'Frozen target-network stability gate', unlocked: 'Linear semantic analogies & human-level Atari control from pixels', stallBoundary: 'Sample inefficiency (millions of frames) & catastrophic forgetting' },
  { id: 'AI21', year: '2014/15', era: 'Era IV · Deep & Self-Play', milestone: 'GANs & Soft Attention (Goodfellow; Bahdanau, Cho, Bengio)', substrate: 'Generator/Discriminator game + dynamic alignment weights α_ij', gate: 'Adversarial minimax gate & content-addressed softmax', unlocked: 'Broke fixed-vector bottleneck in neural translation & generative media', stallBoundary: 'GAN mode collapse & sequential RNN encoder-decoder step latency' },
  { id: 'AI22', year: '2016', era: 'Era IV · Deep & Self-Play', milestone: 'Deep Residual Highways (He, Zhang, Ren & Sun)', substrate: 'Identity skip bus y = x + F(x)', gate: 'Unattenuated identity gradient highway', unlocked: 'Scaled coherent training cleanly past 152–1,000+ layers', stallBoundary: 'Static depth executed all layers unconditionally regardless of difficulty' },
  { id: 'AI23', year: '2016–17', era: 'Era IV · Deep & Self-Play', milestone: 'AlphaGo & AlphaZero Self-Play Ratchet (Silver, Hassabis et al.)', substrate: 'Bidirectional Policy/Value net ↔ MCTS visit distribution π_MCTS', gate: 'Exact Go/Chess rules + >= 55% Elo champion promotion gate', unlocked: 'Canonical neural-symbolic distillation ratchet achieving superhuman play', stallBoundary: 'Required exact closed-world simulator & megajoules of self-play' },
  // Era V (2017–2022): AI24–AI28
  { id: 'AI24', year: '2017', era: 'Era V · Foundation', milestone: 'Transformer & MPNNs (Vaswani et al.; Gilmer et al.)', substrate: 'All-pairs Key-Value (KV) cache & molecular graph messages', gate: 'Scaled dot-product QKᵀ/√d_k softmax routing', unlocked: 'O(1)-hop global token coupling & GPU-parallel pretraining', stallBoundary: 'Quadratic O(L²) KV memory/joule burn & zero persistent state' },
  { id: 'AI25', year: '2017/22', era: 'Era V · Foundation', milestone: 'Sparsely-Gated MoE & Switch (Shazeer; Fedus, Zoph)', substrate: 'Disjoint FFN expert banks + learned top-k token router', gate: 'Top-k conditional capacity gate (3%–12% active weights)', unlocked: 'Decoupled trillion-parameter knowledge from per-token FLOPs (CL18)', stallBoundary: 'HBM/NVMe expert footprint & unverified output hallucinations' },
  { id: 'AI26', year: '2020', era: 'Era V · Foundation', milestone: 'GPT-3 In-Context & RAG (Brown et al.; Lewis et al.)', substrate: 'Few-shot prompt demonstrations + MIPS document index', gate: 'Prompt conditioning + top-k cosine passage retrieval', unlocked: 'Zero-gradient task adaptation & updatable external citations', stallBoundary: 'Cosine neighbors ≠ logical truth; ephemeral context re-paid every call' },
  { id: 'AI27', year: '2021', era: 'Era V · Foundation', milestone: 'AlphaFold 2 Evoformer & IPA (Jumper, Hassabis et al.)', substrate: 'Coevolutionary MSA tensor ↔ pairwise residue geometry', gate: 'Triangle-inequality update + SE(3)-equivariant IPA + pLDDT', unlocked: 'Atomic-accuracy monomeric protein structure prediction', stallBoundary: 'High inference compute; lacked fast kinetic ligand/dynamics compilation' },
  { id: 'AI28', year: '2022–23', era: 'Era V · Foundation', milestone: 'InstructGPT, CoT & ReAct (Ouyang; Wei; Yao et al.)', substrate: 'Natural-language Chain-of-Thought scratchpads & tool traces', gate: 'RLHF preference model + environment return observations', unlocked: 'Turned raw base models into multi-step tool-using assistants (Rung 5)', stallBoundary: 'Sycophantic RLHF drift & 3.71× unattested multi-agent prose bloat' },
  // Era VI (2023–2025): AI29–AI34
  { id: 'AI29', year: '2023', era: 'Era VI · Verifier Search', milestone: 'I-JEPA Latent World Model (Assran, LeCun et al.)', substrate: 'Abstract latent target representations (zero pixel decoding)', gate: 'EMA target encoder variance/covariance non-collapse', unlocked: 'Eliminated wasteful surface token/pixel reconstruction energy', stallBoundary: 'Continuous latent distance requires conformal/symbolic gate for discrete code' },
  { id: 'AI30', year: '2023–26', era: 'Era VI · Verifier Search', milestone: 'Machine Culture & POLIS Societies (Brinkmann, Rahwan; Zhuang)', substrate: 'Shared generational artifact stores across human/LLM lineages', gate: 'Prestige social selection & peer-verification ratchet', unlocked: 'Proved 60%–100% post-removal cultural lock-in & +18.9 pt society gains', stallBoundary: 'Unattested prestige imitation still drifts (76.25% vs. 100% attested CA-M5)' },
  { id: 'AI31', year: '2024', era: 'Era VI · Verifier Search', milestone: 'FunSearch Program Islands (Romera-Paredes, Fawzi et al.)', substrate: 'Multi-island Python priority-function database (10–30 SLOC)', gate: 'Deterministic millisecond combinatorial witness evaluator', unlocked: 'New extremal math bounds (cap-set) with 0.0% island contamination', stallBoundary: 'Thousands of unscreened LLM sampler calls without latent pre-filter' },
  { id: 'AI32', year: '2024', era: 'Era VI · Verifier Search', milestone: 'AlphaGeometry Neural + DD+AR (Trinh, Luong et al.)', substrate: 'Synthetic 100M proof ledger + symbolic Euclidean state', gate: 'Sound Deductive Database + Algebraic Rules (DD+AR) engine', unlocked: 'Solved 25/30 IMO geometry problems with zero hallucinated proofs', stallBoundary: 'Bespoke single-domain 2-camp bridge without cross-paradigm routing' },
  { id: 'AI33', year: '2024', era: 'Era VI · Verifier Search', milestone: 'Model Context Protocol — MCP (Anthropic)', substrate: 'Standardized JSON-RPC 2.0 tool/resource descriptors', gate: 'Typed JSON Schema contract validation', unlocked: 'Collapsed N×M custom tool connectors to N+M interoperable endpoints', stallBoundary: 'Unmetered JSON prose payloads & zero cryptographic/joule receipts' },
  { id: 'AI34', year: '2025', era: 'Era VI · Verifier Search', milestone: 'DeepSeek-R1 GRPO Verifier RL (DeepSeek-AI)', substrate: 'Long-horizon <think> self-verification reasoning traces', gate: 'Rule-based math & compiler execution reward verifiers', unlocked: 'Induced emergent reflection & backtracking purely from verifier RL', stallBoundary: 'Re-burns 10–50+ J of <think> tokens from cold start on every repeat' },
  // Era VII (2026): AI35–AI38
  { id: 'AI35', year: '2026', era: 'Era VII · Compilation', milestone: 'Deterministic Null — Shape D DNULLMM1 (OpenIE [same house])', substrate: 'SHA-256-frozen zero-copy POSIX mmap integer hash store', gate: 'OpenTimestamps + drand pre-registration + 0 test-time mutation', unlocked: '1.77 µJ O(1) Gear-0 verified recall (40/40 H15-Iterative replay)', stallBoundary: 'Exact De Bruijn hash abstains on novel unseen structural classes' },
  { id: 'AI36', year: '2026', era: 'Era VII · Compilation', milestone: 'AirMoL & Downward LUT6 Compilation (OpenIE [same house])', substrate: '512×512 Beneš–Copy–Beneš + 81 × RAMB36E2 LUT6 pages', gate: 'C(z) = 1 AST/pytest gate + Split-Conformal JEPA-EBRM ACI', unlocked: '1-cycle 0-FLOP LUT6 pages (15.59 est_mW idle) + 12.30× Sparse-MoE I/O cut', stallBoundary: 'Governed by Proposition 1 stationary horizon ΔT > ΔT*' },
  { id: 'AI37', year: '2026', era: 'Era VII · Compilation', milestone: 'RCE + FormEBM-v3 World Coding (OpenIE [same house])', substrate: 'Canonical name-free RCE Forms + librce_rt.rlib prelude', gate: '~49 mJ RCE checker (5,393 Lean 4.36.0 constants) + FormEBM-v3', unlocked: '0.9437 unseen-shape AUROC; 1,718× cheaper check; N* = 1,079 rlib payback', stallBoundary: 'Requires Tier-3 proposer wakeup on genuinely novel specifications' },
  { id: 'AI38', year: '2026', era: 'Era VII · Compilation', milestone: 'CTA & DES-10 Digital Enzymatic Synthesis (OpenIE [same house])', substrate: 'BLAKE3 + Ed25519 binary Φ_IR Digital Enzymes + hash-chained joule ledger', gate: 'Zero-clock eventfd + 2.11 µs SSP + 4-tier downward compiler', unlocked: '98/100 DES-10 synthesis; 75,374× lower Thor measured_j handoff energy', stallBoundary: 'Governed by exact amortization kill floor h_min (CTA-T45)' },
];

export interface KernelCheckerAudit {
  checker: string;
  implementation: string;
  ctaDecls: string;
  lutDecls: string;
  nucleusDecls: string;
  horizonDecls: string;
  rceConstants: string;
  verdict: string;
  mitigatedCves: string;
}

export const SIX_KERNEL_AUDIT: KernelCheckerAudit[] = [
  {
    checker: 'con-leche --verified',
    implementation: 'Minimal reference kernel (Breitner) formally proved consistent in ZFC set theory (cannot accept False)',
    ctaDecls: '58,928',
    lutDecls: '58,683',
    nucleusDecls: '58,748',
    horizonDecls: '58,796',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: 'CVE-2026-72844 (nested inductive .proj CWE-843), CVE-2026-72711 (add_opaque), WHNF cache bugs',
  },
  {
    checker: 'con-ron --verified',
    implementation: 'Aeneas-verified Rust refinement of con-leche',
    ctaDecls: '58,928',
    lutDecls: '58,683',
    nucleusDecls: '58,748',
    horizonDecls: '58,796',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: 'CVE-2026-72844, CVE-2026-72711, C++ memory & GNU GMP bignum bugs (#14833)',
  },
  {
    checker: 'lean4lean',
    implementation: 'Independent Lean-in-Lean Calculus of Inductive Constructions (CIC) typechecker (Carneiro)',
    ctaDecls: '58,930',
    lutDecls: '58,685',
    nucleusDecls: '58,750',
    horizonDecls: '58,798',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: 'C++ kernel implementation divergence & #14977 Prop-structure projection typing',
  },
  {
    checker: 'nanoda',
    implementation: 'Standalone zero-Lean-runtime Rust export verifier (sorryAx strictly blocked)',
    ctaDecls: '58,930',
    lutDecls: '58,685',
    nucleusDecls: '58,750',
    horizonDecls: '58,798',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: '.olean replay manipulation (#16674, #16688) & unpermitted sorryAx',
  },
  {
    checker: 'leanchecker --paranoid',
    implementation: 'Fresh-environment C++ kernel replay with zero tactic or compiler trust',
    ctaDecls: '58,930',
    lutDecls: '58,685',
    nucleusDecls: '58,750',
    horizonDecls: '58,798',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: 'Metaprogramming environment mutation, skipKernelTC, & Lean.ofReduceBool (#16693)',
  },
  {
    checker: 'Lean v4.36.0 (default)',
    implementation: 'Post-CVE November 2026 C++ kernel (#print axioms enforced)',
    ctaDecls: '58,930',
    lutDecls: '58,685',
    nucleusDecls: '58,750',
    horizonDecls: '58,798',
    rceConstants: '5,393 (f87d6af2)',
    verdict: 'Accepts (bwrap)',
    mitigatedCves: 'All 2026 kernel CVEs patched; 0 sorry, 0 opaque, 0 custom axioms, 0 ofReduceBool',
  },
];

export const FORECAST_COMPASS_EPISTEMOLOGY = {
  kicker: 'FORECAST EPISTEMOLOGY · WHY CALENDAR BUCKETS REPLACE EFFORT ESTIMATES',
  title: 'Forecast Design Intent: A Compass, Not a Recipe',
  plainBody:
    'The 18 hypotheses below intentionally use coarse calendar buckets (Month / Quarter / Year / Decade) rather than engineering effort estimates or sprint schedules. Depending on an implementer’s existing substrate, a "Month-1" milestone may take a single weekend of harness wiring or six months of foundational bring-up. The table functions as a directional compass rather than a step-by-step recipe: independent teams self-calibrate implementation effort while physical invariants hold every claim to the exact same falsifiable standard.',
  formalBody:
    'Invariant across arbitrary wall-clock pacing: (1) Binary Completion C(z) = 1 (zero partial-credit accuracy curves), (2) Horizon Monotonicity CpJ(Month) < CpJ(Quarter) < CpJ(Year) < CpJ(Decade) (Theorem CTA-T43), (3) Joules as the sole continuous variable (measured_j ⊥ reported_j ⊥ est_j), and (4) Immediate invalidation upon crossing any pre-registered Red Kill Criterion.',
  pillars: [
    {
      label: 'Self-Calibrated Effort',
      detail: 'Calendar buckets order causal dependencies (bus → router → crystallizer → silicon) without prescribing team size or man-hours.',
    },
    {
      label: 'Sole Continuous Variable: Joules',
      detail: 'Time-to-implement varies by lab; physical energy dissipated per verified task (CpJ) does not negotiate with narrative.',
    },
    {
      label: 'Strict Speculative Quarantine',
      detail: 'Neural BCI (HY04–HY05, HD02) and clinical EV items (HY06, HD03–HD04) remain quarantined as Speculative [S] until human RCT gates pass.',
    },
  ],
};

export interface ReplicationStep {
  step: string;
  title: string;
  targetCostAndTime: string;
  plainGoal: string;
  technicalChecklist: string;
  passFailGate: string;
}

export const OPEN_REPLICATION_PROTOCOL: ReplicationStep[] = [
  {
    step: 'Step 01',
    title: 'Six-Kernel Sandboxed Lean 4.36.0 Soundness Audit',
    targetCostAndTime: '$0 commodity Linux host · ~15 min',
    plainGoal:
      'Verify every mathematical theorem behind the ratchet, Beneš routing network, and horizon monotonicity without trusting a single prover binary or network cache.',
    technicalChecklist:
      'Export the 132 cataloged theorems (45 CTA + 36 LUT6 + 20 Wobble/Nucleus + 31 Horizon at 09511ee3) and 5,393 RCE constants to text NDJSON inside bubblewrap 0.11.1 (bwrap --unshare-net --ro-bind); run con-leche --verified, con-ron --verified, lean4lean, nanoda, leanchecker --paranoid, and Lean v4.36.0.',
    passFailGate: 'PASS iff 6/6 checkers accept with 0 sorryAx, 0 custom axioms, 0 opaque, and 0 Lean.ofReduceBool.',
  },
  {
    step: 'Step 02',
    title: '16 KB #![no_std] lut6-core Nucleus & Yosys -lut 6 Packer',
    targetCostAndTime: 'Rust 1.100.0 (edition = "2024") + Yosys 0.70 · ~30 min',
    plainGoal:
      'Compile and self-test the 3-part bootstrap nucleus (SEED_KNOWLEDGE, SEED_AGENCY, and the Walsh-Hadamard + anchor retention gate) in zero-heap integer Rust.',
    technicalChecklist:
      'Build CompactLut6Page (sizeof == 4096 B, align == 8); lower branching FSMs via Yosys synth -noalumacc -nordff; abc -lut 6 or DiffLUT-Net multilinear export; verify rustc compile-time const assertions on innate hit (0x08 → 0xA1), wobble jitter (0x37 → 0x5E), and apoptosis rollback (w63 = 1 → 0x3C).',
    passFailGate: 'FAIL if any 1-hot high-harmonic patch (> 64 / 4096 degree-≥5 noise) or seed-breaking overlay passes refine_knowledge().',
  },
  {
    step: 'Step 03',
    title: 'GPIO-Framed Physical Shunt or Separate Counter Harness',
    targetCostAndTime: '$4 RP2040 / Alif E3–E4 / KV260 + PPK2 or INA228/INA260',
    plainGoal:
      'Instrument the test bench so energy in joules is captured cleanly in the external harness rather than estimated from FLOPs or mixed across incompatible sensors.',
    technicalChecklist:
      'Wire an inline Nordic PPK2 (100 kS/s) or TI INA228 / INA238 high-side shunt across VSYS / VDD_MAIN (or read onboard KV260 INA260 / Jetson Thor INA3221), framing 1,000 back-to-back evaluations with GPIO_HIGH → nucleus.step() → GPIO_LOW and reading DWT->CYCCNT / SIO cycles over SWD (zero UART draw). On laptops without shunts, log RAPL / IOReport strictly as reported_j (board_metered = false).',
    passFailGate: 'WITHHOLD net joule subtraction whenever pre/post quiet idle baseline drifts > 10.0% (Falsifier 6); never sum measured_j + reported_j.',
  },
  {
    step: 'Step 04',
    title: 'Three-Wave Dual-Reality Means Test & Kill Audit',
    targetCostAndTime: 'Exact Repeats · Noisy Wobble · OOD Shift Stream',
    plainGoal:
      'Challenge compiled 4 KB .lut6 crystals against an INT8/INT4 micro-model baseline across clean repeats, noisy paraphrases/ADC jitter, and out-of-distribution shifts.',
    technicalChecklist:
      'Run Wave 1 (certified exact repeats), Wave 2 (1–2 bit sensor/paraphrase jitter testing ≥ 85% wake suppression), and Wave 3 (unseen OOD shifts + dead-class transients testing conformal Escalate and Loop 5 h ≤ h_min eviction). Publish SHA-256-hashed CSV/JSON receipts.',
    passFailGate: 'KILL immediately if silent corruption > 0.00%, 1-bit jitter drops hit rate < 50%, wake+miss latency exceeds standalone baseline, or CpJ fails CTA-T43 monotonicity.',
  },
];
