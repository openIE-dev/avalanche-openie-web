export interface CodonIsomorphismPillar {
  id: string;
  title: string;
  badge: string;
  biologicalAnalog: string;
  plainSummary: string;
  formalSpec: string;
  portabilityNote: string;
}

export const CODON_ISOMORPHISM_PILLARS: CodonIsomorphismPillar[] = [
  {
    id: 'ISO-01',
    title: 'Zero-Interference Bit-Level Git (No Catastrophic Forgetting)',
    badge: 'Surgical Overlay',
    biologicalAnalog: 'Epigenetic / riboswitch promoter masking over an immutable seed genome',
    plainSummary:
      'Updating knowledge in dense floating-point weights requires global gradient steps that risk warping unrelated skills, or ever-growing prompt files that re-burn context tokens. In a 4 KB LUT6 page, an agent refines an edge case by attaching a localized bitmask overlay that triggers strictly on the newly verified 6-bit input neighborhood—leaving every previously certified row 100% untouched.',
    formalSpec:
      'out\' = (out_base & ¬M_override) | (out_patch & M_override) iff popcount(out_patch & M_conf) ≥ τ_conf ∧ ∀(x, m, y) ∈ Anchors: (eval(x) & m) = y',
    portabilityNote: 'Zero gradient epochs; O(1) bitwise mux over immutable &' + 'static seed pages.',
  },
  {
    id: 'ISO-02',
    title: 'Kolmogorov Boolean Skeleton via DiffLUT-Net & BDD Pruning',
    badge: '52% Fewer LUTs',
    biologicalAnalog: 'Evolutionary streamlining of metabolic operons into minimal catalytic pathways',
    plainSummary:
      'Once a solution is verified, natural-language scaffolding is no longer needed at runtime. Closed-form multilinear LUT synthesis (DiffLUT-Net) paired with Yosys abc -lut 6 and Binary Decision Diagram (BDD) minimization collapses redundant wires and dead upstream gates automatically—retaining the near-minimal Boolean skeleton of solved behavior.',
    formalSpec:
      'DiffLUT-Net (Ye et al., Sept 2026, arXiv:2609.09254): exact multilinear relaxation over λ_0..λ_63 + learnable 1-to-1 port wiring (−52% LUT6s vs. DWN on Fashion-MNIST; −41% vs. NeuraLUT-Assemble).',
    portabilityNote: 'Halving LUT6 count doubles skill density in 264 KB MCU SRAM and lowers FPGA toggle power.',
  },
  {
    id: 'ISO-03',
    title: 'The Agent as Compiler, Not Deployed Runtime',
    badge: 'Wake on Novelty Only',
    biologicalAnalog: 'Adaptive immunity & germline selection vs. spinal/ribosomal microjoule reflexes',
    plainSummary:
      'Heavy Rung-5 search-and-generation models are demoted from executing every routine action to serving strictly as frontier refinement compilers. Incoming state hits zero-FLOP LUT6 crystals first; upstream neural search wakes only when the conformal parity gate flags an uncertified input, proves a resolution against deterministic verifiers, and compiles the new patch downward.',
    formalSpec:
      'popcount(out & M_conf) ≥ τ_conf ⇒ EmitCertified (0 FLOPs); else Escalate → Rung-5 Proposer × Verifier (δ = 1.0) → CompactLut6Page overlay.',
    portabilityNote: 'Marginal energy per mastered decision drops as cumulative experience grows.',
  },
  {
    id: 'ISO-04',
    title: 'Universal 4 KB Crystal Portability Across Silicon Scales',
    badge: '4,096 B = 1 RAMB36',
    biologicalAnalog: 'Universal 64-codon translation table shared from archaea to multicellular tissues',
    plainSummary:
      'Because a CompactLut6Page is pure 6-bit wire indices plus 64-bit integer INIT masks aligned to an exact 4,096-byte page (36 Kbits), the exact same verified knowledge crystal executes unchanged from a $4 microcontroller up to dense M.2 and Zynq UltraScale+ FPGA fabrics.',
    formalSpec:
      'sizeof(CompactLut6Page) == 4096 B · #[repr(C, align(8))] #![no_std] Rust 1.100.0 (edition = "2024") · Yosys 0.71+ abc -lut 6 -> .lut6 (16,384/16,384 miter parity) · 0-float ELFs on RP2040 (11,040 B .text) & Alif M55 (12,260 B .text) · 10,500/10,500 XC7A200T ↔ KV260 cycle parity.',
    portabilityNote: '$4 RP2040 SRAM + SIO INTERP · Alif E3/E4 5.5 MB MRAM + DTCM · Aller A7 XC7A200T M.2 (365 RAMB36E1) · KV260 / ZCU102.',
  },
];

export interface WalshPreset {
  id: string;
  label: string;
  shortTag: string;
  lo32: number;
  hi32: number;
  hexDisplay: string;
  rustExpr: string;
  gateVerdict: 'REJECTED' | 'ADMITTED';
  plainNote: string;
  formalNote: string;
}

export const WALSH_PRESETS: WalshPreset[] = [
  {
    id: 'wobble',
    label: '2-Bit Wobble Codon',
    shortTag: '0 / 4096 Noise · Admitted',
    // 0x00F0_0000_0000_0000 -> target 0x34 (52..55 set: bits 52,53,54,55 => hi32 bits 20..23 = 0x00F00000)
    lo32: 0x00000000,
    hi32: 0x00f00000,
    hexDisplay: '0x00F0_0000_0000_0000',
    rustExpr: '0xFu64 << (0x34 & 0x3C) // wobble_codon_mask(0x34)',
    gateVerdict: 'ADMITTED',
    plainNote:
      'Biological 2-bit wobble degeneracy matches the 4 structural MSBs (wires i2..i5) while accepting all 4 synonymous wobble states on LSB wires i0, i1. Every degree-5 and degree-6 parity harmonic cancels to exact 0, and 1-bit or 2-bit sensor/paraphrase jitter resolves without waking Rung-5 compute.',
    formalNote:
      'Independent of {x_0, x_1} ⇒ ∀S with S ∩ {0,1} ≠ ∅, f̂(S) = 0. By Pigeonhole over {2,3,4,5}, every |S| ≥ 5 intersects {0,1}, driving ∑_{|S|≥5} E_norm(S) = 0 / 4096 (100% 4/4 wobble survival on 0x34..0x37).',
  },
  {
    id: 'onehot',
    label: '1-Hot Point Memorization',
    shortTag: '448 / 4096 (7/64) · Rejected',
    // 1u64 << 0x34 (bit 52 => hi32 bit 20 = 0x00100000)
    lo32: 0x00000000,
    hi32: 0x00100000,
    hexDisplay: '0x0010_0000_0000_0000',
    rustExpr: '1u64 << 0x34 // brittle exact-point match',
    gateVerdict: 'REJECTED',
    plainNote:
      'A naive 1-hot detector memorizes a single 6-bit address (row 0x34) and outputs 0 everywhere else. Its Walsh-Hadamard spectrum spreads flat white energy across all 64 frequencies—leaking 7/64 (448 / 4096) into brittle degree-5/6 parity noise where any single LSB sensor flip kills recognition.',
    formalNote:
      'Impulse g(x) = 1[x = 0x34] has |ĝ(S)| = 1 ∀S ∈ {0..63} ⇒ E_norm(S) = 64 ∀S. Across C(6,5)+C(6,6) = 7 high-order modes, ∑_{|S|≥5} E_norm(S) = 7 × 64 = 448 / 4096 > τ_noise (64); wobble survival = 1/4 (25%).',
  },
  {
    id: 'identity',
    label: 'Pass-Through Identity',
    shortTag: 'Degree-1 Wire · Admitted',
    lo32: 0xaaaaaaaa,
    hi32: 0xaaaaaaaa,
    hexDisplay: '0xAAAA_AAAA_AAAA_AAAA',
    rustExpr: '0xAAAA_AAAA_AAAA_AAAAu64 // f(x) = x_0',
    gateVerdict: 'ADMITTED',
    plainNote:
      'Pure wire relay used in SEED_AGENCY gates [14..45] to forward 32-bit signal-peptide arguments straight to hardware buses without distortion. All non-DC spectral energy sits in a single degree-1 fundamental harmonic.',
    formalNote:
      'f(x) = x_0 ⇒ spin spectrum W_spin[{0}] = +64 (4096 / 4096 at |S| = 1); support spectrum splits 2048 (|S|=0) + 2048 (|S|=1), with exact 0 / 4096 energy in all degrees |S| ≥ 2.',
  },
  {
    id: 'majority',
    label: 'Majority Gate',
    shortTag: 'LMN Low-Degree · Admitted',
    // MAJ3(x0, x1, x2): bits where popcount(addr & 7) >= 2 -> indices 3,5,6,7 => 0b1110_1000 = 0xE8 repeated!
    lo32: 0xe8e8e8e8,
    hi32: 0xe8e8e8e8,
    hexDisplay: '0xE8E8_E8E8_E8E8_E8E8',
    rustExpr: '0xE8E8_E8E8_E8E8_E8E8u64 // maj3(x_0, x_1, x_2)',
    gateVerdict: 'ADMITTED',
    plainNote:
      'Monotone 2-of-3 quorum gate modeling cooperative threshold voting across noisy channels. Consistent with the Linial–Mansour–Nisan (LMN) theorem, bounded-depth threshold logic concentrates 100% of its energy in low-degree harmonics (|S| ≤ 3) with zero high-degree noise.',
    formalNote:
      'maj_3(x_0, x_1, x_2) concentrates spin energy 75% in |S| = 1 (3 × 32² = 3072) and 25% in |S| = 3 (1 × 32² = 1024); support energy: 2048 (|S|=0) + 1536 (|S|=1) + 512 (|S|=3); ∑_{|S|≥5} = 0 / 4096.',
  },
];

export interface NucleusPart {
  num: string;
  name: string;
  symbol: string;
  footprint: string;
  plainRole: string;
  formalInvariant: string;
}

export const NUCLEUS_THREE_PARTS: NucleusPart[] = [
  {
    num: 'Nucleus #1',
    name: 'Minimal Central Knowledge Store',
    symbol: 'SEED_KNOWLEDGE (4 KB root + 4 KB overlay)',
    footprint: '8 KB static (#![no_std])',
    plainRole:
      'Read-only base crystal pinned in ROM/MRAM holding certified domain state recognizers and wobble-tolerant output payloads, paired with one 4 KB surgical overlay slot. Certified hits emit directly in nanoseconds to <2 µs at zero FLOPs without waking external tools.',
    formalInvariant:
      'eval_batch_64: 4.91 ns / 176 nJ Jetson Thor INA3221 measured_j (1,236× CpJ) · 2.27 ns / 18 nJ Zen 5 RAPL reported_j (1,564× CpJ) · 38.1 ns (12.18 DWT cyc) live Alif E3 M55 (board_metered=false).',
  },
  {
    num: 'Nucleus #2',
    name: 'Minimal Agency Dispatcher',
    symbol: 'SEED_AGENCY (64-Codon Operon FSM)',
    footprint: '8 KB static (4 KB root + 4 KB overlay)',
    plainRole:
      'Single-pass 64-gate dispatcher invoked whenever Knowledge (#1) escalates. Reads partial votes, live peripheral readiness, remaining joule budget, and hop depth—emitting a 64-bit OperonFrame to sleep, chain another local page, fire a deterministic I/O bus, wake the refiner, or trigger rollback.',
    formalInvariant:
      'AgencyStateWord: u64 → OperonFrame: u64 in 0 FLOPs (high_harmonic_energy == 0); native Result<EvalOutcome, !> in stable Rust 1.100.0 (edition = "2024").',
  },
  {
    num: 'Nucleus #3',
    name: 'Monotonic Self-Refinement Gate',
    symbol: 'passes_retention_gate (FWHT + Seed Anchors)',
    footprint: '0 B heap (20 Lean 4.36.0 theorems)',
    plainRole:
      'Dual immune gate governing all updates to Knowledge (#1) and Agency (#2). Rejects any candidate overlay that leaks brittle parity noise above the Walsh-Hadamard cap or alters even one bit on protected seed anchor vectors.',
    formalInvariant:
      'NucleusWobble.lean (20 theorems, 6/6 bwrap kernels accept 58,748/58,750 decls, 0 sorry): high_harmonic_energy(g) ≤ τ_noise ∧ ∀(x, m, y) ∈ Anchors: (eval(x, patch) & m) == y.',
  },
];

export interface AbiSlice {
  bits: string;
  width: string;
  bioAnalog: string;
  engFunction: string;
}

export const AGENCY_INPUT_ABI: AbiSlice[] = [
  { bits: '[0..31]', width: '32b', bioAnalog: 'mRNA Reading Frame', engFunction: 'Partial output / coarse concept signature forwarded from SEED_KNOWLEDGE (#1)' },
  { bits: '[32..39]', width: '8b', bioAnalog: 'Proofreading Fidelity', engFunction: 'Conformal vote count (0..64) + parity status from Knowledge evaluation' },
  { bits: '[40..47]', width: '8b', bioAnalog: 'Allosteric Sensor (tool_rdy)', engFunction: 'Live deterministic readiness mask for 8 channels (SPI, I2C, PIO, UART, MCP, NPU, Timer, Host)' },
  { bits: '[48..55]', width: '8b', bioAnalog: 'ATP / Joule Budget', engFunction: 'Remaining microjoule budget encoded as an 8-bit Hamming-1 Distributive Thermometer code' },
  { bits: '[56..61]', width: '6b', bioAnalog: 'Ribosome Step (hop_ttl)', engFunction: 'Current chain depth (0..63) enforcing a hard δ^k multi-hop horizon cutoff' },
  { bits: '[62..63]', width: '2b', bioAnalog: 'Fault / Stress Flags', engFunction: 'Bit 62: external tool timeout/fault; Bit 63: online verifier reject pending → immediate rollback' },
];

export const OPERON_OUTPUT_ABI: AbiSlice[] = [
  { bits: '[0..5]', width: '6b', bioAnalog: '64-Codon Opcode', engFunction: 'Selects 1 of 64 canonical agency operations with built-in 2-bit LSB wobble fault tolerance' },
  { bits: '[6..13]', width: '8b', bioAnalog: 'Locus / Channel ID', engFunction: 'Target local .lut6 page slot (0..255) or deterministic peripheral / MCP endpoint ID' },
  { bits: '[14..45]', width: '32b', bioAnalog: 'Signal Peptide (Args)', engFunction: 'Immediate 32-bit command/register payload passed intact via 0xAAAA... identity gates' },
  { bits: '[46..55]', width: '10b', bioAnalog: 'Promoter Lock Bits', engFunction: 'Hardware write-protect & local sovereignty invariants enforced by the bus wrapper' },
  { bits: '[56..63]', width: '8b', bioAnalog: 'Conformal Gate Mask', engFunction: '0xFF00_0000_0000_0000 parity mask; requires ≥ 6 of 8 conformal votes to execute' },
];

export interface OperonQuadrant {
  quadrant: string;
  range: string;
  name: string;
  opcodes: string;
  behavior: string;
}

export const OPERON_QUADRANTS: OperonQuadrant[] = [
  {
    quadrant: '0b00_xxxx',
    range: '0x00..0x0F',
    name: 'Reflex & Dormant Stop',
    opcodes: 'STOP_HALT (0x00..0x03) · EMIT_DIRECT (0x04..0x0F)',
    behavior: 'Drops MCU into WFI / zero-clock sleep when joule budget w48 = 0, or commits certified 32-bit payload directly to PIO/actuator pins at zero external energy.',
  },
  {
    quadrant: '0b01_xxxx',
    range: '0x10..0x1F',
    name: 'Endogenous Splicing',
    opcodes: 'SPLICE_PAGE (0x10..0x17) · FOLD_STATE (0x18..0x1F)',
    behavior: 'Chains signal peptide [14..45] into another local 4 KB .lut6 page slot or folds state back with hop_ttl + 1 for planner-free multi-step FSM execution.',
  },
  {
    quadrant: '0b10_xxxx',
    range: '0x20..0x2F',
    name: 'Exogenous Tool I/O',
    opcodes: 'BUS_PIO_SPI · BUS_UART_MCP · WAKE_LOCAL_NPU · VERIFY_CHECK',
    behavior: 'Triggers framed deterministic SPI/PIO bursts, typed binary RPCs, or local ternary fallback (EntroMCU / PALUTE) only when tool_rdy = 1 and joule_ok = 1.',
  },
  {
    quadrant: '0b11_xxxx',
    range: '0x30..0x3F',
    name: 'Transcription & Apoptosis',
    opcodes: 'TRANSCRIBE_FRONTIER (0x30..0x3B) · APOPTOSIS_ROLLBACK (0x3C..0x3F)',
    behavior: 'Logs uncertified frontier state to wake the upstream Rung-5 compiler, or—if verifier reject bit w63 = 1—immediately evicts the active overlay and reverts cleanly to immutable SEED_KNOWLEDGE.',
  },
];

export interface ComputeCamp {
  num: string;
  camp: string;
  premise: string;
  strength: string;
  isolatedCeiling: string;
  hybridRole: string;
}

export const FOUR_COMPUTE_CAMPS: ComputeCamp[] = [
  {
    num: 'Camp 01',
    camp: 'More Weights & Parameter Scale',
    premise: 'Scale dense/MoE parameter counts to absorb broader world distributions.',
    strength: 'Unmatched open-world cold-start exploration on unseen specifications and noisy natural language.',
    isolatedCeiling: 'Re-pays tens of joules of HBM/NVMe bandwidth and floating-point MACs on every repeat (ΔT ≈ 1).',
    hybridRole: 'Serves strictly as the asleep-by-default Tier-3 frontier compiler woken only on conformal misses.',
  },
  {
    num: 'Camp 02',
    camp: 'Better Algorithms & World Models',
    premise: 'Replace brute-force parameter guessing with latent world models (JEPA), tree search, and formal verifiers.',
    strength: 'Eliminates surface token/pixel waste (FormEBM-v3 0.9580 AUROC) and enforces C(z) = 1 soundness.',
    isolatedCeiling: 'Software world-model search and symbolic solvers still spend millijoules to joules on CPU/GPU clocks.',
    hybridRole: 'Provides the latent pre-filter and SAT/Lean equivalence miter certifying downward compilation.',
  },
  {
    num: 'Camp 03',
    camp: 'Addition Over Multiplication Arithmetic',
    premise: 'Replace FP16/BF16 multipliers with ternary {-1, 0, +1} additions, shift-adds, and integer accumulators.',
    strength: 'Moves inference off power-hungry tensor multipliers onto compact integer ALUs and SIMD lanes.',
    isolatedCeiling: 'Still sweeps layer activations sequentially when deterministic state transitions could collapse to O(1) tables.',
    hybridRole: 'Powers ultra-lean local escalation fallbacks via 1.58-bit ternary streaming and integer FWHT gates.',
  },
  {
    num: 'Camp 04',
    camp: 'Lookup Tables Over Compute',
    premise: 'Replace runtime arithmetic with precomputed truth tables and activation LUTs (DiffLUT-Net, PALUTE, EntroMCU).',
    strength: 'Zero-FLOP nanosecond Boolean evaluation (DiffLUT-Net −52% LUTs) and 1,264 tok/s at 0.16 W on W4A4 LUT engines (PALUTE).',
    isolatedCeiling: 'Pure static tables fail under open-ended creative novelty without an upstream compiler and conformal wake gate.',
    hybridRole: 'Forms the Rung-6/7 execution floor: LUT6 Boolean reflexes + PALUTE/EntroMCU table-driven micro-fallbacks.',
  },
];

export interface HardwareTierRow {
  tier: string;
  platforms: string;
  memoryAndKernel: string;
  harnessMetering: string;
  telemetryClass: 'measured' | 'est' | 'reported';
  badgeLabel: string;
  primaryRole: string;
}

export const HARDWARE_METERING_MATRIX: HardwareTierRow[] = [
  {
    tier: '1 · Shunt & FPGA Reference',
    platforms: 'AMD Kria KV260 (xck26) · ZCU102 · Jetson AGX Thor',
    memoryAndKernel: 'xck26: 41,465 LUTs (35.4%), 81/144 RAMB36E2, 0 DSP48E2, 13-level 250 MHz P4-AXIS (15.59 est_mW CE-gated idle; 256/256 CPI=1.00 Verilator parity).',
    harnessMetering: 'Thor TI INA3221/INA238 DC shunts metered today (176 nJ/eval, 1,236× CpJ, board_metered=true); KV260 INA260 / ZCU102 INA226 queued (HQ04, board_metered=false on xck26).',
    telemetryClass: 'measured',
    badgeLabel: 'Thor measured_j · xck26 est_mW',
    primaryRole: 'Board-metered DC shunt reference today + UltraScale+ FPGA gateware closure (HQ04).',
  },
  {
    tier: '2 · Dense M.2 Scale-Out',
    platforms: 'Particle Tachyon (QCM6490) + Numato Aller A7 (Artix-7 XC7A200T-2FBG484C, M.2 2280)',
    memoryAndKernel: 'Yosys 0.71+ xc7: 62,211 LUTs (46.22%), 83/365 RAMB36E1 (up to 365 active 4 KB crystals = 2.53× KV260, 0 DSP48E1), 10,500/10,500 (100%) cycle-exact KV260 Verilator parity.',
    harnessMetering: 'DS181/UG475 M.2 3.3V envelope (DDR3 held in reset): 0.86 est_W (261 mA) M.2 3.3V / 0.97 est_W (9.7% of 2A) Tachyon 5V FPC @ 55.2 est_C passive (vs. 95.8 est_C bare fail w/ DDR3+×4 ON; board_metered=false); inline M.2 riser shunt target.',
    telemetryClass: 'est',
    badgeLabel: 'xc7 Synthesized · est_mW / est_C',
    primaryRole: 'Compact M.2 hybrid scale-out node (0.0 W cold sleep via Tachyon 5V PCIe GPIO switch).',
  },
  {
    tier: '3 · Micro-MoL Edge',
    platforms: 'Alif Ensemble E3 / E4 (Dual Cortex-M55 + Ethos-U55/U85)',
    memoryAndKernel: 'thumbv8m.main-none-eabihf ELF (.text = 12,260 B, .lut6_dtcm = 16,400 B, 0 float insns, 2 WFI) in 5.5 MB MRAM + DTCM; live OpenMV-AE3 M55 @ 400 MHz: 12.18 DWT cyc/op (38.1 ns, 1,943×).',
    harnessMetering: 'Live USB DWT->CYCCNT cycle counter verified (board_metered=false); inline Nordic PPK2 (100 kS/s) or TI INA228 across VDD_MAIN + LPGPIO_0 window for physical measured_j.',
    telemetryClass: 'reported',
    badgeLabel: 'ELF + Live DWT · Shunt Target',
    primaryRole: 'Sub-microsecond LUT6 reflex (1.69 µs scalar / 38.1 ns batch) with EntroMCU / NPU local fallback.',
  },
  {
    tier: '4 · Bare-Metal Floor',
    platforms: 'Raspberry Pi Pico ($4 RP2040) / Pico 2 (RP2350)',
    memoryAndKernel: 'thumbv6m-none-eabi ELF (.text = 11,040 B, .lut6 = 16,400 B, 5,248 insns, 0 float insns, 2 WFI) pinned in striped SRAM Banks 0–3 (zero QSPI XIP stalls) + SIO INTERP0/1.',
    harnessMetering: 'Cross-compiled bare-metal ELF verified (board_metered=false); inline PPK2 or TI INA228/INA238 high-side shunt on VSYS framed by GPIO_HIGH → nucleus.step() → GPIO_LOW.',
    telemetryClass: 'reported',
    badgeLabel: '0-Float ELF · Shunt Target',
    primaryRole: 'Accessible $4 universal replication floor proving Rung-6 intelligence without OS or FPU.',
  },
  {
    tier: 'Control · Cloud FPGAs',
    platforms: 'Virtualized Cloud Virtex UltraScale+ / Alveo Instances',
    memoryAndKernel: 'Parallel synthesis, Yosys/Vivado timing regression, and multi-seed bitstream equivalence sweeps.',
    harnessMetering: 'Zero physical rail shunt access (no trustworthy measured_j telemetry exposed to tenants).',
    telemetryClass: 'est',
    badgeLabel: 'est_j / functional only',
    primaryRole: 'Functional parity & timing sweeps ONLY—never used to claim physical joule savings.',
  },
];

export interface MeansTestCriterion {
  step: string;
  title: string;
  formula: string;
  plainRule: string;
  formalRule: string;
}

export const LUT6_MEANS_TEST: MeansTestCriterion[] = [
  {
    step: 'Gate 01',
    title: 'Verification Purity',
    formula: 'δ = 1.0   ∧   C(z) = 1   (0.00% broken commits)',
    plainRule: 'No stochastic guess ever enters a LUT6 crystal without passing a deterministic check (unit test, SAT equivalence miter, Lean 4.36.0 kernel check, or bounded physical sensor invariant).',
    formalRule: 'ModelGenerated ↛ Deterministic; candidate overlay requires bitwise SAT/anchor equivalence across 100% of protected seed vectors.',
  },
  {
    step: 'Gate 02',
    title: 'Thermodynamic Amortization',
    formula: 'N_expected > (E_compile + E_write) / (E_escalate − E_LUT6)',
    plainRule: 'Edge SRAM (264 KB), MRAM (5.5 MB), and FPGA BRAM (144 RAMB36 blocks) are scarce: a pattern earns its 8-byte u64 slot only if its recurrence pays back both synthesis energy and non-volatile write energy.',
    formalRule: 'Generalizes Proposition 1 to include physical MRAM/BRAM programming energy E_write against net per-hit escalation savings.',
  },
  {
    step: 'Gate 03',
    title: 'Low Behavioral Freedom',
    formula: 'F(task) < τ_F   (canonical discrete action manifold)',
    plainRule: 'Open-ended creative essays belong in generative models, not truth tables. Only tasks where canonicalized inputs map to discrete booleans, enums, FSM transitions, or bounded token drafts pass admission.',
    formalRule: 'Conditional output entropy H(Y | ψ(X)) < τ_F after deterministic AST normalization, delta-thermometer encoding, or Hadamard sign projection.',
  },
  {
    step: 'Gate 04',
    title: 'Conformal Wake-Gate & Eviction Kill Floor',
    formula: 'err_reject ≤ ε   ∧   h > h_min = (E_compile + E_write) / (N · ΔE)',
    plainRule: 'Every compiled page carries a live hardware rejection counter and hit-rate floor. If online verifier rejects reach kill_max_rejects or hit rate drops below break-even, Apoptosis immediately evicts the overlay.',
    formalRule: 'Split-Conformal parity vote popcount(out & M_conf) ≥ τ_conf; automatic eviction when verifier_rejects ≥ K_max or h ≤ h_min (CTA-T45).',
  },
];

export interface DualRealityRow {
  metric: string;
  worldAsItIs: string;
  worldAsWeWantIt: string;
  redKillThreshold: string;
}

export const DUAL_REALITY_PROTOCOL: DualRealityRow[] = [
  {
    metric: 'Semantic Paraphrase & Sensor Noise',
    worldAsItIs: 'Noisy human phrasing, adversarial typos, and jittery ADC sensor reads (100k Three-Wave stream: 45k Exact + 42k 1–2-Bit Wobble + 13k OOD).',
    worldAsWeWantIt: '≥ 85% Wake Suppression Rate via 2-bit wobble degeneracy (verified: 87.00% Three-Wave wake suppression at 09511ee3; 95.00% DiffLUT-Net wobble hit).',
    redKillThreshold: 'KILL encoding if a 1-bit sensor or wording jitter drops LUT6 hit rate below 50%.',
  },
  {
    metric: 'Coherence per Joule (CpJ)',
    worldAsItIs: 'Full wall/rail power including static sleep leakage, QSPI XIP flash stalls, and conformal wake-gate overhead.',
    worldAsWeWantIt: '≥ 10× CpJ per horizon step: 176 nJ/eval (1,236× Thor INA3221 measured_j CpJ; 7.68× full 3-Wave) & 18 nJ/eval (1,564× Zen 5 reported_j CpJ; 15.13× 3-Wave); MCU targets < 1–15 µJ.',
    redKillThreshold: 'KILL substrate port if bus/memory movement expends more joules than computing INT4/INT8 MACs.',
  },
  {
    metric: 'Discretization & Overlay Parity',
    worldAsItIs: 'Rounding drift between differentiable multilinear relaxation (DiffLUT-Net) and hard uint64_t truth tables.',
    worldAsWeWantIt: '0.00% Silent Corruption (verified: 0 / 100,000 vs. 39.37% corruption on unsmoothed 1-hot; 16,384 / 16,384 Yosys -lut 6 miter parity; 100% OOD Escalate).',
    redKillThreshold: 'IMMEDIATE HALT & APOPTOSIS_ROLLBACK if a LUT6 page emits a single unverified false-confident action.',
  },
  {
    metric: 'Cold-Start & Escalation Tail Latency',
    worldAsItIs: 'Worst-case conformal miss punting to local Helium/Ethos ternary micro-model or upstream NVMe Sparse-MoE.',
    worldAsWeWantIt: '< 10 µs fast-path hit (verified: 4.91 ns Thor / 2.27 ns Zen 5 / 38.1 ns Alif E3 batch, 1.693 µs scalar Cortex-M55); < 10% overhead on conformal misses.',
    redKillThreshold: 'KILL cascade tier if wake-gate check + miss latency exceeds standalone fallback model latency.',
  },
];
