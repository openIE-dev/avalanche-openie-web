export interface ReferenceLink {
  label: string;
  url: string;
}

export interface RungData {
  num: number;
  code: string;
  name: string;
  phase: 1 | 2;
  phaseLabel: string;
  isBottleneck?: boolean;
  collapsedCost: string;
  energyRegime: string;
  whatUnlocked: string;
  structuralLimit: string;
  plainHeadline: string;
  plainBody: string;
  keyTakeaway: string;
  scientificLaw: string;
  equation: string;
  leanAnchors: string;
  empiricalFinding: string;
  evidenceBadge: string;
  evidenceClass: 'measured' | 'reported' | 'est' | 'theorem';
  references: ReferenceLink[];
  tvChannel: string;
  radioDesk: string;
}

export const COMPILATION_THRESHOLD = {
  kicker: 'PROPOSITION 1 · DETERMINISTIC SOUNDNESS GATE C(z) = 1',
  title: 'The Compilation Threshold',
  plain:
    'Below this threshold, every query wakes a large floating-point neural model from scratch—re-computing procedures it has already solved thousands of times. Crossing the Compilation Threshold requires two simultaneous conditions: a stationary horizon ΔT long enough to pay back the one-time energy cost of compilation E_compile, and a deterministic verification gate C(z) = 1 ensuring unverified guesses never enter persistent memory.',
  equation: 'ΔT > ΔT* = E_compile / (p_0\' · (c_wake − c_0))   ∧   C(z) = 1   ∧   ModelGenerated ↛ Deterministic',
  leanAnchors: 'CTA-T3..T6 · CTA-T41..T45 · LutAdapt.Cascade · LutAdapt.ConformalProvenance',
  receipt:
    '0.00% broken commits admitted across CTA-E2 (59/60 pass), 48-task MoL study (91.67%), BigCodeBench v0.1.3 (90.62%), and 4-repo SWE-bench Verified; 0.00% false crystallization risk (1.0000 OOD AUROC) under latent JEPA-EBRM + Split-Conformal ACI.',
};

export const NINE_RUNGS: RungData[] = [
  {
    num: 1,
    code: 'R1',
    name: 'Search',
    phase: 1,
    phaseLabel: 'Phase 1 · Stateless Ephemeral Inference',
    collapsedCost: 'Lowered the cost of information access',
    energyRegime: '~1–10 J / retrieval + rerank (ephemeral)',
    whatUnlocked: 'Instant retrieval of external documents and factual passages without retraining weights',
    structuralLimit: 'Embedding proximity retrieves statistically similar text, not verified logical equivalence',
    plainHeadline: 'Finding relevant passages became fast—yet every lookup still requires fresh interpretation.',
    plainBody:
      'Lexical indices and vector Retrieval-Augmented Generation (RAG) allow a system to fetch external passages on demand. However, cosine similarity in embedding space measures topical closeness rather than structural equivalence: a swapped variable binding or negated condition looks nearly identical to a dense vector index, so the downstream model must still re-read and check everything from scratch.',
    keyTakeaway:
      'Adding more retrieved text widens the context window linearly without accumulating verified reusable procedures.',
    scientificLaw: 'Non-parametric MIPS cosine retrieval vs. canonical positional De Bruijn hashing',
    equation: 'k* = hash_DeBruijn(canon(x))  ──▶  O(1) POSIX mmap vs. O(d · log M) cosine RAG',
    leanAnchors: 'CTA-T1..T2 · RCE T7 / T61 (nameless projection)',
    empiricalFinding:
      'In the RCE Compile study across 245 programs and 500 test-vector-verified semantic mutants, positional De Bruijn hashing recorded 0 / 500 (0.00%) false-positive collisions (whereas naive identifier-stripping collided on 150 / 150 = 100.0% variable-binding swaps) while reducing warm rebuild reported_j by 167.8×–448.5×.',
    evidenceBadge: 'reported_j + [T]',
    evidenceClass: 'reported',
    references: [
      { label: 'database.openie.dev', url: 'https://database.openie.dev' },
      { label: 'knowledge.openie.dev', url: 'https://knowledge.openie.dev' },
      { label: 'Paper: RCE Compile', url: 'https://research.openie.dev/papers/rce-compile/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=knowledge',
    radioDesk: 'https://research.openie.dev/radio/?desk=knowledge',
  },
  {
    num: 2,
    code: 'R2',
    name: 'Generation',
    phase: 1,
    phaseLabel: 'Phase 1 · Stateless Ephemeral Inference',
    collapsedCost: 'Lowered the cost of artifact synthesis',
    energyRegime: '~5–35 J / completion (dense FP16/BF16 MACs)',
    whatUnlocked: 'Fluent zero-shot drafting of prose, translations, summaries, and candidate code',
    structuralLimit: 'Autoregressive next-token sampling carries no intrinsic guarantee of global constraint satisfaction',
    plainHeadline: 'Synthesizing candidate text and code became effortless—while energy per token stayed high.',
    plainBody:
      'Autoregressive transformers generate plausible prose and candidate programs token by token. Yet every emitted token sweeps billions of floating-point weights, and raw sampling treats syntax, boilerplate, and deep logic identically—expending full matrix-multiply energy even on deterministic patterns.',
    keyTakeaway:
      'Without a verification gate V(m) = 1, faster generation simply shifts the burden of checking onto downstream readers or tools.',
    scientificLaw: 'Lossless zero-FLOP ≤64-bit joint-mode minterm burst speculation',
    equation: 'T*(c) = argmax_{y ∈ Y} Pr(Y = y | ψ(X) = c),   K = ⌊64 / ⌈log₂|V|⌉⌋ tokens / uint64',
    leanAnchors: 'LutAdapt.JointMinterm (7 six-kernel theorems) · ConformalProvenance',
    empiricalFinding:
      'Placing a zero-FLOP Paged BenesLUT6 burst proposer ahead of greedy target verification preserves 100.0% exact token parity while reducing unbuffered Darwin F_NOCACHE NVMe reads by 12.30× on Qwen3.6-35B-A3B in 970.0 MB active weight RAM (6.773 J/tok reported_j).',
    evidenceBadge: 'reported_j + F_NOCACHE',
    evidenceClass: 'reported',
    references: [
      { label: 'synthesis.openie.dev', url: 'https://synthesis.openie.dev' },
      { label: 'Paper: Downward LUT6', url: 'https://research.openie.dev/papers/lut-adapt/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=synthesis',
    radioDesk: 'https://research.openie.dev/radio/?desk=synthesis',
  },
  {
    num: 3,
    code: 'R3',
    name: 'Reasoning',
    phase: 1,
    phaseLabel: 'Phase 1 · Stateless Ephemeral Inference',
    collapsedCost: 'Lowered the cost of single-episode multi-step deduction',
    energyRegime: '~15–120+ J / <think> trace (repeated MAC sweeps)',
    whatUnlocked: 'Self-reflective search, backtracking, and step-by-step math and program derivation',
    structuralLimit: 'Thinking traces evaporate after each query; identical problem classes re-burn full reasoning energy',
    plainHeadline: 'Test-time reasoning solves hard problems—by re-deriving them from scratch on every encounter.',
    plainBody:
      'Training models via reinforcement learning against math and compiler verifiers (such as GRPO <think> traces) enables genuine multi-step deduction. However, because nothing Verified is compiled into a cheaper representation afterward, the system expends tens of joules of deliberation on the thousandth instance of a problem class just as it did on the first.',
    keyTakeaway:
      'Deliberation is essential for novel problems, but thermodynamically wasteful when repeated unchanged on recurring structures.',
    scientificLaw: 'Latent energy pre-filtering (FormEBM) + deterministic checker authority',
    equation: 'C_check / E_model = 0.000582 (1,718× cheaper)   ∧   E_gate < F · E_down (CTA-T21)',
    leanAnchors: 'CTA-T19..T22 · 5,393 RCE Lean 4.36.0 constants (f87d6af2)',
    empiricalFinding:
      'FormEBM-v3 (6.05M parameters) reaches 0.9437 unseen-shape AUROC (FormEBM-v2: 47.09 mJ core reported_j, cutting ~49 mJ RCE checker calls by 2.39×); invoking bounded local Rung 3d <think> strictly on deterministic misses reaches 91.67% pass (93.75% Wave 2/3) on the 48-task coding suite with 0.00% broken commits.',
    evidenceBadge: 'reported_j + 6-Kernel [T]',
    evidenceClass: 'theorem',
    references: [
      { label: 'proof.openie.dev', url: 'https://proof.openie.dev' },
      { label: 'Paper: RCE-JEPA', url: 'https://research.openie.dev/papers/rce-jepa/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=proof',
    radioDesk: 'https://research.openie.dev/radio/?desk=proof',
  },
  {
    num: 4,
    code: 'R4',
    name: 'Communication',
    phase: 1,
    phaseLabel: 'Phase 1 · Stateless Ephemeral Inference',
    collapsedCost: 'Inter-agent coordination & channel topology',
    energyRegime: '55.14 J NL prose handoff vs. 927.30 µJ attested Φ_IR (measured_j)',
    whatUnlocked: 'Potential O(N²) division of cognitive labor across specialized computational modules',
    structuralLimit: 'Natural-language prose relays amplify token context and suffer exponential multi-hop error decay f^k',
    plainHeadline: 'Passing natural-language essays between agents creates a lossy telephone game.',
    plainBody:
      'Human natural language evolved for ~39 bit/s spoken conversation, not machine-to-machine state transfer. When multi-agent systems communicate by serializing internal state into English paragraphs and re-parsing them at the next hop, prompt length balloons and small ambiguities compound across hops. Network effects scale cleanly only when channels carry compact, cryptographically verified schemas.',
    keyTakeaway:
      'Theorem CTA-T2 proves unverified k-hop chains decay as f^k; constant-time cryptographic and schema gates restore zero-drift composability.',
    scientificLaw: 'Constant-time BLAKE3 + Ed25519 Φ_IR Digital Enzyme channel attestation',
    equation: 'E_{a→b} = (Φ_IR, BLAKE3 + Ed25519, V_gate, θ_b),   admittedWeight = 0 if ¬attest_ok',
    leanAnchors: 'CTA-T1..T2 · CTA-T16..T18 · CTA-T32..T35',
    empiricalFinding:
      'On NVIDIA Jetson AGX Thor (physical TI INA3221 VDD_CPU_SOC_MSS shunt measured_j), 1 KiB channel verification takes 50.13 µs p50 and 927.30 µJ—reducing inter-paradigm handoff energy 75,374× (0.732 mJ vs. 55.14 J measured_j) and latency 78,855× compared to live natural-language multi-agent debate while blocking 200 / 200 injected Byzantine faults.',
    evidenceBadge: '927.30 µJ measured_j',
    evidenceClass: 'measured',
    references: [
      { label: 'communication.openie.dev', url: 'https://communication.openie.dev' },
      { label: 'Paper: Communication Avalanche', url: 'https://research.openie.dev/papers/communication-avalanche/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=communication',
    radioDesk: 'https://research.openie.dev/radio/?desk=communication',
  },
  {
    num: 5,
    code: 'R5',
    name: 'Tool Use',
    phase: 1,
    phaseLabel: 'Phase 1 · THE CURRENT ARCHITECTURAL BOTTLENECK',
    isBottleneck: true,
    collapsedCost: 'Lowered the barrier from text advice to external action',
    energyRegime: '100–5,710+ J / multi-turn loop (cold-start context & transcript bloat)',
    whatUnlocked: 'Models invoke compilers, databases, APIs, and sandboxes to act on the world',
    structuralLimit: 'Cold-start amnesia (ΔT ≈ 1 ≤ ΔT*) plus unverified state commits (13.3%–95.8% broken patches)',
    plainHeadline: 'THE BOTTLENECK: Tool-using agents act on external systems, yet start cold every session.',
    plainBody:
      'Rung 5 (`ReAct`, function calling, `MCP` tool loops) marks the ceiling of stateless inference. Today’s tool-using agents re-read long tool schemas on every turn, accumulate thousands of transcript tokens across retries, and—without a mandatory deterministic commit gate—frequently admit broken patches or state-leaking mutations. Because each session ends in total forgetting (ΔT ≈ 1), experience never crystallizes into fast, low-energy competence.',
    keyTakeaway:
      'Escaping the Rung-5 bottleneck requires crossing Proposition 1: persistent state (ΔT > ΔT*) paired with a strict verifier gate C(z) = 1.',
    scientificLaw: 'Unattested cascade drift vs. deterministic-first gated escalation',
    equation: 'err(k) = err_0 + k·ε (CTA-T1),   f^k → 0 (CTA-T2)   vs.   G(z) = 1 ⇒ valid(z) (CTA-T3)',
    leanAnchors: 'CTA-T1..T6 · CTA-T19..T22 · Claims LA-15, LA-20',
    empiricalFinding:
      'In CTA-E2 (60 Python code-repair tasks), an unattested 4-agent chat cascade expended 5,710.77 J (288,583 tokens) and dropped to 86.67% pass with 13.33% false commits; the gated deterministic-first orchestrator matched 98.33% (59/60) with 0.00% false commits at 432.75 J reported_j (14.97× higher CpJ).',
    evidenceBadge: 'BOTTLENECK · reported_j',
    evidenceClass: 'reported',
    references: [
      { label: 'Paper: Metered Commit Gates', url: 'https://research.openie.dev/papers/gates/' },
      { label: 'Paper: Deterministic Null', url: 'https://research.openie.dev/papers/deterministic-null/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=avalanche',
    radioDesk: 'https://research.openie.dev/radio/?desk=avalanche',
  },
  {
    num: 6,
    code: 'R6',
    name: 'Immersion',
    phase: 2,
    phaseLabel: 'Phase 2 · Stateful Compiled Substrates',
    collapsedCost: 'Eliminated cold-start amnesia & idle polling waste',
    energyRegime: 'Zero-clock OS eventfd sleep (0 empty polls; 2.21×–6.22× idle savings)',
    whatUnlocked: 'Continuous local state retention across ΔT >> ΔT* without continuous clock burn',
    structuralLimit: 'Requires event-driven membrane thresholds (V_u ≥ θ_u) so persistent residency costs ~0 idle watts',
    plainHeadline: 'Instead of starting from zero on every request, the system stays present—sleeping at zero clock ticks until needed.',
    plainBody:
      'Living cells do not poll a central 1,000 Hz clock while waiting for nutrients; ion channels and quorum receptors rest passively until local concentration crosses a threshold. Rung 6 brings that same physics to persistent software: execution nodes block in operating-system kernel queues (`eventfd`, `kqueue`, Win32 `Event`) at zero CPU cycles while accumulating signals, stretching horizon ΔT far beyond ΔT* so recurring patterns can be observed and compiled.',
    keyTakeaway:
      'Immersion makes compilation thermodynamically viable by extending ΔT >> ΔT* while keeping idle energy near zero (CTA-T7..T10).',
    scientificLaw: 'Zero-clock integrate-and-fire OS event quiescence',
    equation: 'V_u(t) = ∑ w_{iu} s_i(t) < θ_u  ⇒  0 firings, 0 empty polls (vs. N · T · c_poll > 0)',
    leanAnchors: 'CTA-T7..T10 (CTA-T10 proved with 0 axioms)',
    empiricalFinding:
      'Across all 5 hardware architectures in CTA-E4 (Jetson AGX Thor Linux eventfd, Core i9-13900H, Ryzen AI Max+ 395, Apple M3 Ultra kqueue, Windows 11 NT Event), thresholded wakeup recorded 0.0 empty wakeups (vs. 53,864–75,307 per 5 s window at 1 kHz), cutting Linux RAPL socket reported_j 2.21×–3.22×, macOS L3 reported_j 6.22×, and Thor VDD_CPU_SOC_MSS physical shunt measured_j by +1.34 J/window (+6.69 J VIN).',
    evidenceBadge: 'measured_j + reported_j',
    evidenceClass: 'measured',
    references: [
      { label: 'state.openie.dev', url: 'https://state.openie.dev' },
      { label: 'memory.openie.dev', url: 'https://memory.openie.dev' },
      { label: 'Observatory: CTA-E1 & E4', url: 'https://research.openie.dev/living/communication-avalanche/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=memory',
    radioDesk: 'https://research.openie.dev/radio/?desk=memory',
  },
  {
    num: 7,
    code: 'R7',
    name: 'Competence',
    phase: 2,
    phaseLabel: 'Phase 2 · Stateful Compiled Substrates',
    collapsedCost: 'Lowered marginal execution energy of mastered tasks by 6–12 orders of magnitude',
    energyRegime: '1.77 µJ DNULLMM1 mmap  ──▶  62.37 pJ/cyc (15.59 est_mW idle) LUT6 RTL',
    whatUnlocked: 'Downward compilation of verified solutions into canonical rules, mmap tables, and Boolean LUTs',
    structuralLimit: 'Compiled pages cover verified regimes and safely escalate back to Rung 3 on novel shifts',
    plainHeadline: 'Deliberation compiles into reflex: verified solutions drop from joules to microjoules and picojoules.',
    plainBody:
      'When a human learns to play an instrument or ride a bicycle, slow prefrontal deliberation gradually compiles into fast, low-energy cerebellar motor circuits. Rung 7 formalizes that exact downward transition in silicon: once a high-energy solution passes deterministic verification C(z) = 1 and recurs across horizon ΔT*, it compiles downward into symbolic AST rules (Tier 2), zero-copy 1.77 µJ memory-mapped integer tables (Tier 1 DNULLMM1), and single-cycle 512×512 Beneš-routed 6-input Boolean lookup tables (Tier 0 LUT6).',
    keyTakeaway:
      'Mature agency is characterized not by how long a system deliberates on familiar tasks, but by how reliably verified deliberation compiles into zero-FLOP competence.',
    scientificLaw: '4-Tier downward crystallization (Tier 3 → Tier 2 → Tier 1 DNULLMM1 → Tier 0 LUT6)',
    equation: 'D(512) = 5 log₂ N − 2 = 43 Beneš stages · 81 × RAMB36E2 · N*_{rlib} = 1,079 runs',
    leanAnchors: 'CTA-T23 · CTA-T41..T45 · LutAdapt.BenesCopy (7 six-kernel theorems)',
    empiricalFinding:
      'All 40/40 H15-Iterative residual tasks crystallize into 0-call Gear-0 DNULLMM1 replay (1.77 µJ mmap, 0.325 µs); pre-compiled librce_rt.rlib cuts Rust -O3 compile reported_j 20.07× (payback N* = 1,079 runs vs. JS); 4-stage 250 MHz Kria KV260 xck26 RTL (13 logic levels, 170 <= 189 IOBs, 0 DSP48E2) reduces quiescent dynamic power 4.10× to 15.59 est_mW via clock-enable gating.',
    evidenceBadge: 'reported_j + est_j + [T]',
    evidenceClass: 'est',
    references: [
      { label: 'compute.openie.dev', url: 'https://compute.openie.dev' },
      { label: 'Observatory: LUT6 Cascade', url: 'https://research.openie.dev/living/lut-adapt/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=compute',
    radioDesk: 'https://research.openie.dev/radio/?desk=compute',
  },
  {
    num: 8,
    code: 'R8',
    name: 'Ecology',
    phase: 2,
    phaseLabel: 'Phase 2 · Stateful Compiled Substrates',
    collapsedCost: 'Enabled multi-paradigm specialization without monoculture blind spots',
    energyRegime: '98/100 DES-10 synthesis at 9.26×–26.87× higher Thor measured_j CpJ',
    whatUnlocked: 'Heterogeneous computational paradigms cooperating like specialized biological tissues',
    structuralLimit: 'Requires local sovereignty invariants (g_i = 1) so shared artifacts never overwrite local safety goals',
    plainHeadline: 'Specialized paradigms coexist and cooperate—mirroring multicellular tissue differentiation.',
    plainBody:
      'In biology, evolution did not build a single giant cell to perform photosynthesis, locomotion, and neural signaling simultaneously; catalytic enzymes and gated junctions allowed specialized organs to cooperate cheaply. Similarly, seventy-six years of AI produced ten distinct paradigms—LLMs, SAT/SMT solvers, latent EBMs, MCTS planners, episodic stores, evolutionary mutators, causal DAGs, LUT automata, multi-agent proposers, and execution sandboxes. When coupled via sub-millijoule Digital Enzymes, each handles its native niche cleanly while preserving local autonomy invariants (g_i = 1).',
    keyTakeaway:
      'Theorem CTA-T37 proves that niche-routed multi-paradigm synthesis strictly outperforms every isolated monoculture whenever tasks span heterogeneous regimes.',
    scientificLaw: 'DES-10 multi-paradigm coverage union & autonomy-preserving bridgedStep',
    equation: 'Pass_DES(r) = ⋁_{k=1}^{10} p(k, r) > Pass_solo,   g_i(s_i, m) = 1 ⇒ I_i(s_i\') preserved',
    leanAnchors: 'CTA-T29..T31 (0 axioms on T29/T30) · CTA-T36..T40 · CA-M5 (100% lock-in)',
    empiricalFinding:
      'Across CTA-E5 (100 tasks × 5 regimes, 2,200 hardware-instrumented episodes), every isolated paradigm scored <= 49% (solo LLM 48%, 3-agent NL debate 49%), whereas immediate ten-paradigm Digital Enzymatic Synthesis (DES-10) reached 98 / 100 (98.0%) with 1% false commits and 9.26×–26.87× higher physical Tegra INA3221 measured_j CpJ.',
    evidenceBadge: '98/100 · Thor measured_j',
    evidenceClass: 'measured',
    references: [
      { label: 'agent.openie.dev', url: 'https://agent.openie.dev' },
      { label: 'Paper: CTA §5.7 & §6', url: 'https://research.openie.dev/papers/communication-avalanche/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=agent',
    radioDesk: 'https://research.openie.dev/radio/?desk=agent',
  },
  {
    num: 9,
    code: 'R9',
    name: 'Economy',
    phase: 2,
    phaseLabel: 'Phase 2 · Stateful Compiled Substrates',
    collapsedCost: 'Thermodynamic allocation, reduced-cost routing, & automatic skill pruning',
    energyRegime: '2.11 µs SSP min-cost flow + energy provenance ledgers + h_min eviction',
    whatUnlocked: 'Principled division of computational labor governed by pass probability per joule (p_i / c_i)',
    structuralLimit: 'Non-stationary shifts require automatic eviction whenever hit rate drops to h ≤ h_min (CTA-T45)',
    plainHeadline: 'Thermodynamic cost acts as an exact coordination signal for routing and pruning skills.',
    plainBody:
      'In any large ecology of specialized solvers and compiled skills, how should incoming work be routed, and when should an outdated rule be retired? Classical operations research and thermodynamics give exact answers: Simon–Kadane ordering tries gears in decreasing order of pass probability per joule (p_i / c_i); Successive Shortest Path (SSP) min-cost flow routes tasks across graphs in microseconds; and Theorem CTA-T45 establishes the exact hit-rate floor h_min below which a compiled skill fails to pay back its compilation cost and is automatically evicted.',
    keyTakeaway:
      'With verified compilation and h_min pruning, cumulative Coherence per Joule grows strictly monotonically across Month < Quarter < Year < Decade horizons (CTA-T43).',
    scientificLaw: 'Simon–Kadane p_i/c_i ordering, SSP reduced-cost optimality, & h_min eviction',
    equation: 'min_f ∑ w(i,u) f(i,u),   w_π(i,u) = w(i,u) + π(i) − π(u) ≥ 0,   h > h_min = E_comp / (N · Δc)',
    leanAnchors: 'CTA-T24..T28 · CTA-T43 · CTA-T45 · LutAdapt.Cascade',
    empiricalFinding:
      'The compiled Rust SSP scheduler solves epoch-0 min-cost flow in 2.11 µs and reroutes 20 / 20 multi-node fault scenarios in 2.40 µs median (CTA-E3); on a 1,000-arrival Zipfian workload, 4-tier downward compilation lowers cumulative energy from 15,000 J to 343.34 J (43.69× CpJ multiplication) while maintaining strict separation between measured_j, reported_j, and est_j.',
    evidenceBadge: '2.11 µs SSP · [T/E]',
    evidenceClass: 'theorem',
    references: [
      { label: 'stack.openie.dev', url: 'https://stack.openie.dev' },
      { label: 'compute.openie.dev', url: 'https://compute.openie.dev' },
      { label: 'Tutorials: Labs 1–5', url: 'https://research.openie.dev/tutorials/' },
    ],
    tvChannel: 'https://research.openie.dev/tv/?channel=stack',
    radioDesk: 'https://research.openie.dev/radio/?desk=stack',
  },
];

export interface LiteratureTradition {
  id: string;
  tradition: string;
  exemplars: string;
  whatItEstablishes: string;
  openGapInIsolation: string;
  howPiecesCombine: string;
}

export const LITERATURE_TRADITIONS: LiteratureTradition[] = [
  {
    id: 'LT-01',
    tradition: '1 · Verifier-Guided Neurosymbolic Search',
    exemplars: 'AlphaGo/Zero (2016–17), FunSearch (2024), AlphaGeometry (2024), DeepSeek-R1 GRPO (2025)',
    whatItEstablishes: 'Demonstrates that pairing stochastic neural proposers with exact formal or execution verifiers eliminates hallucinated drift and creates non-regressing discovery loops.',
    openGapInIsolation: 'Typically couples only two paradigms (Neural Proposer + Domain Verifier) without hardware joule accounting or downward compilation into microjoule lookup/circuit tables.',
    howPiecesCombine: 'Supplies the terminal soundness gate C(z) = 1 (CTA-T3..T6) that makes downward compilation safe across all 10 computational paradigms.',
  },
  {
    id: 'LT-02',
    tradition: '2 · Weightless & Differentiable FPGA Lookup-Table Networks',
    exemplars: 'LogicNets (FPL 2020), DiffLogic (NeurIPS 2022), DWN (2024), DiffLUT-Net (Sept 2026, arXiv:2609.09254)',
    whatItEstablishes: 'Shows that Boolean LUT fabrics evaluate learned discrete mappings in nanoseconds with zero floating-point MACs (0 DSP48 slices); DiffLUT-Net introduces closed-form multilinear relaxation over all 64 LUT6 entries + learnable port wiring (−52% LUT6s vs. DWN on Fashion-MNIST).',
    openGapInIsolation: 'Static LUT netlists fix wire connectivity in vendor place-and-route (re-PAR) when distributions shift (52.34% post-VLAN-shift accuracy) and lack conformal abstention gates or non-regressing overlay lineage.',
    howPiecesCombine: 'Pairing DiffLUT-Net pruning with a 512×512 Beneš–Copy–Beneš switch + RAMB36E2 pages (or 4 KB #![no_std] lut6-core crystals) and Walsh-Hadamard wobble gates enables online zero-regression patching.',
  },
  {
    id: 'LT-03',
    tradition: '3 · Model Cascades, Planner-Free Distillation & Deterministic Scaling',
    exemplars: 'Simon & Kadane (1975), RouteLLM (ICLR 2025), Grounded Scaling (Ding & Wang, 2026), ReTrace (Nov 2026)',
    whatItEstablishes: 'Formalizes cost-ordered routing (p_i / c_i), exponential δ^k decay of unverified multi-step agent chains (D0–D4 Determinism Maturity Model), and planner-free workflow compilation from agent traces (τ²-Bench 170 s → 1.3 s in ReTrace).',
    openGapInIsolation: 'Confidence-only routers admit broken outputs (68.75% in Claim LA-11), while software workflow distillation stays in cloud API runtimes without physical joule ledgers or silicon-level LUT6 lowering.',
    howPiecesCombine: 'Coupling planner-free distillation with <1 mJ BLAKE3 + Ed25519 binary Φ_IR envelopes, C(z) = 1 commit gates, and h_min joule eviction bridges Rung 5 cleanly into Rungs 6–9.',
  },
  {
    id: 'LT-04',
    tradition: '4 · Lookup-Driven Edge Inference, Ternary Streaming & NVMe Sparsity',
    exemplars: 'EAGLE-2 (2024), LittleBit-1/2 (2025–26), EntroMCU (Sept 2026), PALUTE (Oct 2026)',
    whatItEstablishes: 'Proves that memory movement dominates inference joules and that table-lookup engines replace multipliers even inside neural fallbacks—with EntroMCU streaming Huffman-coded ternary weights on Cortex-M55 MCUs and PALUTE reaching 1,264 tok/s at 0.16 W on W4A4 LUT engines.',
    openGapInIsolation: 'Sub-1-bit factorizations unpacked to dense MACs lose exact code-synthesis parity (0.00% in Claim LA-11), and standalone edge LUT inference still re-evaluates neural layers on already-solved deterministic repeats.',
    howPiecesCombine: 'Placing zero-FLOP LUT6 crystals ahead of PALUTE / EntroMCU micro-fallbacks and Expert-AirMoL INT4 NVMe streaming (12.30× I/O cut) turns both reflex and fallback tiers into table-lookup substrates.',
  },
];

export interface ExternalRungCrossingWork {
  id: string;
  work: string;
  authorsAndDate: string;
  rungProjection: string;
  empiricalAnchor: string;
  whatItProves: string;
  isolatedGap: string;
}

export const RUNG5_TO_6_EXTERNAL_WORK: ExternalRungCrossingWork[] = [
  {
    id: 'EXT-01',
    work: 'ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows',
    authorsAndDate: 'Columbia University & Amazon · Nov 2026',
    rungProjection: 'R5 → R6/R7 Software Transition',
    empiricalAnchor: 'τ²-Bench latency 170 s → 1.3 s (~130× faster); ~94% task completion at 24% lower API cost',
    whatItProves:
      'Strongest direct engineering demonstration that recurring multi-turn Rung-5 tool-use trajectories collapse into deterministic, planner-free state machines without runtime LLM deliberation.',
    isolatedGap:
      'Targets Python/API workflow graphs measured in cloud API dollars and seconds rather than hardware joule shunts, 4 KB silicon-portable LUT6 pages, or Lean-verified non-regression proofs.',
  },
  {
    id: 'EXT-02',
    work: 'Skill Compilation & Multi-Agent-to-Single-Agent Distillation',
    authorsAndDate: '2026 SoK Surveys on Agent Skill Lifecycles',
    rungProjection: 'R4/R5 → R7 Ratchet Lifecycle',
    empiricalAnchor: '5-stage phase transition: discovery → practice → distillation → storage → composition',
    whatItProves:
      'Independently observes sharp token-usage and latency phase transitions when multi-agent exploration is distilled into reusable skill libraries—describing the conserved ratchet operator from inside software engineering.',
    isolatedGap:
      'Prompt-level or script-level skill libraries still wake the base LLM context window on invocation (SKILL.md bloat) and lack an analytical amortization eviction floor h_min.',
  },
  {
    id: 'EXT-03',
    work: 'Mode-2 → Mode-1 Compilation & Counterfactual JEPA',
    authorsAndDate: 'LeCun; Assran et al. · 2022–2026',
    rungProjection: 'R3 → R6/R7 Cognitive Architecture',
    empiricalAnchor: 'Latent world-model prediction & compressibility without token/pixel decoding',
    whatItProves:
      'Establishes the cognitive distinction between deliberative world-model search (System/Mode 2) and compiled reactive policy (Mode 1), showing world representations compress cleanly in abstract latent space.',
    isolatedGap:
      'Continuous latent energy minima alone cannot certify discrete code or safety invariants (0% solo pass on deceptive discrete regimes in CTA-E5 C3 without a terminal C(z) = 1 gate).',
  },
  {
    id: 'EXT-04',
    work: 'Grounded Scaling: Why Agentic AI Needs Deterministic Environments',
    authorsAndDate: 'Liang Ding & Xintong Wang · 2026',
    rungProjection: 'R4/R5 Chasm Diagnosis (D0–D4)',
    empiricalAnchor: 'k-step chain success decays as δ^k; 5-level D0–D4 Determinism Maturity Model',
    whatItProves:
      'Formalizes why stochastic agent loops hit a reliability wall across multi-step horizons (δ^k decay, matching CTA-T2 f^k) and charts environment maturity from human-only GUIs (D0) to deterministic telemetry-rich agent interfaces (D4).',
    isolatedGap:
      'Diagnoses the environment boundary (D0–D4) without specifying how verified D4 trajectories compile downward into microjoule/picojoule Boolean substrates.',
  },
  {
    id: 'EXT-05',
    work: 'DiffLUT-Net, PALUTE & EntroMCU Lookup-Driven Edge Stack',
    authorsAndDate: 'Ye, Gong, Wang, Kondrateva, Li & Zhang (Sept 2026, arXiv:2609.09254); PALUTE (Oct 2026); EntroMCU (Sept 2026)',
    rungProjection: 'R6/R7 Silicon & MCU Substrate',
    empiricalAnchor: 'DiffLUT-Net: −52% LUT6s vs. DWN; PALUTE: 1,264 tok/s @ 0.16 W; EntroMCU: Cortex-M55 ternary streaming',
    whatItProves:
      'Eliminates gradient mismatch across all 64 LUT6 truth-table entries simultaneously while proving that even edge LLM fallbacks execute faster as SRAM/PIM lookup tables than as floating-point MACs.',
    isolatedGap:
      'Optimizes individual neural/LUT blocks on fixed benchmarks without closed-loop agentic trace harvesting, Walsh-Hadamard wobble filtering, or non-destructive overlay lineage.',
  },
  {
    id: 'EXT-06',
    work: 'Thermodynamic Computing & Physics-Native Substrates',
    authorsAndDate: 'Whitelam; Extropic · 2023–2026',
    rungProjection: 'R6–R9 Physical Foundation',
    empiricalAnchor: 'k_B T ln 2 Landauer grounding & natural stochastic/Boltzmann energy relaxation',
    whatItProves:
      'Reframes computation around physical joules dissipated per state transition rather than hardware-agnostic FLOPs—aligning directly with CpJ as the governing ecological coordinate.',
    isolatedGap:
      'Focuses primarily on analog/stochastic sampling primitives for generative distributions rather than deterministic C(z) = 1 verification ratchets and cross-paradigm synthesis.',
  },
];

export const AVALANCHE_UNIFYING_SYNTHESIS = {
  headline: 'What Unifies All Six Traditions Inside the Avalanche Framework',
  plain:
    'Each external breakthrough above validates a distinct segment of the Rung 5 → Rung 6 crossing—from planner-free workflow distillation (ReTrace) and deterministic environment interfaces (Grounded Scaling) to closed-form LUT6 pruning (DiffLUT-Net) and joule-native physics (Thermodynamic Computing). Yet no prior framework connects them end-to-end. OpenIE Avalanche unifies them under one conserved three-phase operator across 3.8 Gyr of biology and 76 years of AI, governed by five non-negotiable scientific invariants:',
  fiveInvariants: [
    'One Falsifiable 9-Rung Ladder: Maps biological quorum switches (CL01–CL24), historical AI winters (AI01–AI38), and downward silicon compilation onto C = T ∘ G_θ ∘ E.',
    'Binary Completion Authority C(z) = 1: Stochastic outputs never self-certify; zero broken commits cross into persistent memory.',
    'Physical Joules as the Sole Continuous Variable: Strict hardware separation of physical DC shunts (measured_j), on-chip counters (reported_j), and circuit switching models (est_j).',
    'Explicit Pre-Registered Red Kill Criteria: Every compiled page and horizon forecast (HM01–HD04) states an exact mathematical threshold (h ≤ h_min, Falsifiers 1–6) that immediately invalidates or evicts it.',
    'Six-Kernel Lean 4.36.0 Proof Anchors: 123 formal theorems + 5,393 RCE constants audited unanimously inside network-isolated bubblewrap sandboxes with 0 sorry and 0 custom axioms.',
  ],
};

export interface SeminarModule {
  part: string;
  title: string;
  readingTime: string;
  visualFocus: string;
  coreNotes: string[];
  formalAnchor: string;
}

export const SEMINAR_MODULES: SeminarModule[] = [
  {
    part: 'MODULE I',
    title: 'Why Stateless Inference Hits an Ecological Wall (Rungs 1–5)',
    readingTime: 'Lecture Part 1 · 15 min',
    visualFocus: 'Phase 1 of Fig 01: Rungs 1–5 climbing capability while marginal energy stays pinned at 10–100+ J.',
    coreNotes: [
      'Distinguish single-episode capability from cumulative ecological efficiency. Search (R1), Generation (R2), Reasoning (R3), Conversational Relay (R4), and Tool Use (R5) dramatically expand what a computer can solve in one turn.',
      'However, when stationary horizon ΔT ≈ 1 (stateless cold start), the system forgets every verified derivation immediately after responding—paying the same floating-point MAC and memory-bandwidth energy on the 10,000th occurrence as on the 1st.',
      'Worse, chaining multiple unverified language-model agents over natural-language transcripts compounds additive error (kε) and multiplicative fidelity loss (f^k), explaining why unattested 4-agent chains degrade accuracy while burning 12× more energy.',
    ],
    formalAnchor: 'Theorems CTA-T1 & CTA-T2 (QuorumRatchet.lean) · Empirical control: CTA-E2 Arm C (5,710.77 J, 13.33% false commits).',
  },
  {
    part: 'MODULE II',
    title: 'The Conserved Ratchet Across 3.8 Gyr of Biology & 76 Years of AI',
    readingTime: 'Lecture Part 2 · 15 min',
    visualFocus: 'Fig 02: Conserved operator C = T ∘ G_θ ∘ E across bacteria, cyanobacteria, animal flocks, and AI history.',
    coreNotes: [
      'Compare biological multicellularity (CL01–CL06) with the 38-milestone history of AI (AI01–AI38). Neither scaled by inflating a single undifferentiated cell without bounds.',
      'Bacteria withhold expensive secreted proteins behind cooperative Hill thresholds (n_H >= 2), saving 95.5%–99.2% of regulon ATP (CA-M1). Filamentous cyanobacteria isolate lysed cells within 50–300 ms via Ca²⁺-gated SepJ nanopores (95% vs. 0% survival in CA-M2).',
      'Both AI Winters (1974–1980 and 1988–1993) occurred when externalized rule bases or multi-layer networks lacked either a tractable search prior or a sound gate—causing combinatorial O(b^d) blowup or backward f^k signal decay.',
    ],
    formalAnchor: 'Theorems CTA-T3..T15 · Pre-registered simulations CA-M1..CA-M5 (seed = 20261123).',
  },
  {
    part: 'MODULE III',
    title: 'Crossing Proposition 1: Immersion, Downward Compilation & Digital Enzymes',
    readingTime: 'Lecture Part 3 · 20 min',
    visualFocus: 'Phase transition across ΔT > ΔT* and C(z) = 1 into Rungs 6, 7, and 8.',
    coreNotes: [
      'Derive Proposition 1 from Simon–Kadane (1975) search ordering: expending compilation energy E_compile lowers cumulative joules over remaining horizon ΔT if and only if ΔT · (p_0\' c_wake − c_0) > E_compile and C(z) = 1 prevents false rules from entering the table.',
      'Walk through the 4 execution tiers: Tier 3 frontier exploration (~15 J) → Tier 2 symbolic/causal kernels (~15 mJ) → Tier 1 frozen POSIX mmap tables (1.77 µJ DNULLMM1) → Tier 0 Beneš-routed LUT6 BRAM pages (~12–62 pJ est_j, 0 FLOPs).',
      'Show why coupling all 10 specialized AI paradigms via <1 mJ BLAKE3 + Ed25519 binary Φ_IR channels (DES-10) lifts 5-regime pass rates from <= 49% solo to 98/100 while cutting physical shunt handoff energy 75,374×.',
    ],
    formalAnchor: 'Proposition 1 (Cascade.lean) · Theorems CTA-T32..T44 · Hardware experiments CTA-E4 & CTA-E5 (Jetson AGX Thor INA3221 measured_j).',
  },
  {
    part: 'MODULE IV',
    title: 'Thermodynamic Routing, Self-Pruning & Falsifiable Forecasting (Rung 9)',
    readingTime: 'Lecture Part 4 · 15 min',
    visualFocus: 'Simulator Curves & Horizon Table (HM01–HD04): h_min eviction and red disproof criteria.',
    coreNotes: [
      'Examine what happens under distribution shift: if a compiled rule stops matching incoming traffic, retaining it wastes cache slots and compilation energy. Theorem CTA-T45 proves the exact hit-rate floor h_min = E_comp / (N · Δc) for automatic eviction.',
      'Teach rigorous measurement hygiene: never merge physical current-shunt readings (measured_j), on-chip OS counters (reported_j), and analytical switching formulas (est_j), and always withhold idle subtraction when thermal drift exceeds pre-registered thresholds (Falsifier 6).',
      'Conclude by auditing how every Month, Quarter, Year, and Decade forecast (HM01–HD04) pairs a formal mathematical invariant with an explicit red falsifier that would refute the hypothesis.',
    ],
    formalAnchor: 'Theorems CTA-T24..T28, CTA-T43, & CTA-T45 · Six-kernel Lean 4.36.0 bwrap audit (103 theorems + 5,393 RCE constants).',
  },
];
