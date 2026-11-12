// PUBLICATION LIST for publications.html.
//
// Each entry looks like this (only y, a, t, v are required):
//   { y: 2026,                         year
//     a: [SC, RH, TA],                 authors, in order (plain strings such as "Jane Doe" also work)
//     t: "Paper title",                title
//     v: GEO,                          journal or conference name
//     d: "89(6), V589",                volume / pages (optional)
//     s: "Under review",               status badge (optional)
//     link: "https://...",             paper link (optional)
//     code: "https://github.com/..."   code link (optional)
//   },
// Add new papers at the top of the list. Your own name is highlighted automatically.
// Put a * after a name to mark the corresponding author, e.g. SC + "*".

// Frequent names
const SC = "Shijun Cheng", TA = "Tariq Alkhalifah", RH = "Randy Harsuko", MT = "Mohammad Hasyim Taufik",
      WM = "Weijian Mao", WO = "Wei Ouyang", HT = "Huanhuan Tang", QL = "Quan Liang", QZ = "Qingchen Zhang",
      HZ = "Haoran Zhang", XM = "Xinru Mu", SL = "Sixiu Liu";

// Frequent venues
const GEO = "Geophysics", GJI = "Geophysical Journal International", GP = "Geophysical Prospecting",
      SIG = "Surveys in Geophysics", TGRS = "IEEE Transactions on Geoscience and Remote Sensing",
      JGR = "Journal of Geophysical Research: Machine Learning and Computation",
      JAG = "Journal of Applied Geophysics", WMO = "Wave Motion",
      EAGE87 = "87th EAGE Annual Conference & Exhibition", EAGE86 = "86th EAGE Annual Conference & Exhibition",
      EAGE85 = "85th EAGE Annual Conference & Exhibition", EAGE84 = "84th EAGE Annual Conference & Exhibition",
      IMAGE6 = "Sixth International Meeting for Applied Geoscience & Energy (IMAGE)",
      IMAGE5 = "Fifth International Meeting for Applied Geoscience & Energy (IMAGE)",
      IMAGE4 = "Fourth International Meeting for Applied Geoscience & Energy (IMAGE)",
      IMAGE3 = "Third International Meeting for Applied Geoscience & Energy (IMAGE)";

window.JOURNALS = [
  // ---- 2026 ----
  { y: 2026, a: [SC, "Ning Wang", TA], t: "Self-supervised surface-related multiple suppression with multidimensional convolution", v: GEO, s: "Accepted", link: "https://arxiv.org/abs/2505.00419", code: "https://github.com/DeepWave-KAUST/SSL-Multiples-Attenuation-pub"},
  { y: 2026, a: ["Zhijun Cheng", "Xiang Wang", "Guojun Mao", WM, SC + "*"], t: "Meta-transfer learning for efficient initialization of neural network wavefield solutions", v: JAG, d: "106116" , link: "https://www.sciencedirect.com/science/article/pii/S0926985126000248", code: "https://github.com/chengzhijun-czj/MTPINN"},
  { y: 2026, a: ["Huan Song", SC + "*", HT, WO, WM], t: "Adaptive self-supervised surface-related multiple suppression", v: "arXiv:2604.27069", s: "Under review in IEEE TGRS", link: "https://arxiv.org/abs/2604.27069" },
  { y: 2026, a: [HT, SC + "*", WM, HZ, "Yingying Zhang"], t: "Incorporating wave physical priors into diffusion models: A novel approach to seismic resolution enhancement", v: SIG, link: "https://link.springer.com/article/10.1007/s10712-026-09965-4" },
  { y: 2026, a: [HT, SC + "*", WO, WM], t: "Attenuating multi-source noise in DAS-VSP data: A self-supervised learning approach with enhanced noise extraction", v: "Big Data and Earth System", d: "100062", link: "https://www.sciencedirect.com/science/article/pii/S305074052600022X" },
  { y: 2026, a: [SC, TA], t: "Generative wave propagator", v: "arXiv preprint", s: "Under review in GJI", link:"https://arxiv.org/abs/2607.04440", code: "https://github.com/DeepWave-KAUST/GenWP-pub"},
  { y: 2026, a: [SC, TA], t: "Propagating the prior from far to near offset: A self-supervised diffusion framework for progressively recovering near-offsets of towed-streamer data", v: "arXiv:2602.01909", s: "Under review in Geophysics", link: "https://arxiv.org/abs/2602.01909", code: "https://github.com/DeepWave-KAUST/SSLDiff-Interpolation-pub"},
  { y: 2026, a: [SC, RH, MT, TA], t: "Depth-progressive 3D seismic velocity model building via 2D generative diffusion models", v: "arXiv:2610.14812", s: "Under review in Geophysics", link: "https://arxiv.org/abs/2610.14812", code: "https://github.com/DeepWave-KAUST/DiffVMB3D-pub"},
  { y: 2026, a: [SC, RH, TA], t: "Shallow-to-deep velocity model building via diffusion models. Part I: Method and proof of concept", v: "arXiv:2609.26454", s: "Under review in Geophysics", link: "https://arxiv.org/abs/2609.26454", code: "https://github.com/DeepWave-KAUST/DiffVMB-pub" },
  { y: 2026, a: [SC, RH, TA], t: "Shallow-to-deep velocity model building via diffusion models. Part II: Realistic scenarios", v: "arXiv:2609.26482", s: "Under review in Geophysics", link: "https://arxiv.org/abs/2609.26482", code: "https://github.com/DeepWave-KAUST/DiffVMB-pub" },
  { y: 2026, a: [SC, XM, TA], t: "Physics-informed conditional diffusion model for generalizable elastic wave-mode separation", v: GEO, s: "Accepted", link: "https://arxiv.org/abs/2506.23007", code: "https://github.com/DeepWave-KAUST/DiffSeparation-pub"},
  { y: 2026, a: [SC, MT, TA], t: "Seismic wavefield solutions via physics-guided generative neural operator", v: GEO, d: "91(5), F13", link: "https://pubs.geoscienceworld.org/seg/geophysics/article/91/5/F13/734313/Seismic-wavefield-solutions-via-physics-guided", code: "https://github.com/DeepWave-KAUST/GNO-pub" },
  { y: 2026, a: ["Zefeng Wang", SC + "*", WM, WO, HT], t: "Meta-learning-enhanced implicit full waveform inversion", v: GP, link: "https://onlinelibrary.wiley.com/doi/full/10.1111/1365-2478.70248" },

  // ---- 2025 ----
  { y: 2025, a: ["Lingli Gao", WM, "Qianru Xu", WO, "Shaokang Yang", SC + "*"], t: "Inhomogeneous plane waves in attenuative anisotropic porous media", v: GJI, link: "https://academic.oup.com/gji/article/244/1/ggaf413/8292606"},
  { y: 2025, a: [RH, SC, TA], t: "Propagating the prior from shallow to deep with a pre-trained velocity-model Generative Transformer network", v: JGR, link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JH000408", code: "https://zenodo.org/records/14276215"},
  { y: 2025, a: [RH, SC, TA], t: "Velocity model building with uncertainty quantification using a multi-modal autoregressive generative network", v: "Preprint", s: "Under review in GJI" },
  { y: 2025, a: [XM, SC, TA], t: "SeparationPINN: Physics-informed neural networks for seismic P- and S-wave mode separation", v: TGRS, link: "https://ieeexplore.ieee.org/abstract/document/11048588" },
  { y: 2025, a: [HT, SC, "Wuqun Li", WM], t: "An EDCC-EMD analysis-based network for DAS VSP data denoising in frequency domain", v: "Petroleum Science", link: "https://www.sciencedirect.com/science/article/pii/S1995822625000652"},
  { y: 2025, a: [SC, TA], t: "DiffPINN: Generative diffusion-initialized physics-informed neural networks for accelerating seismic wavefield representation", v: "arXiv:2506.00471", s: "Under review in Geophysics", link: "https://arxiv.org/abs/2506.00471", code: "https://github.com/DeepWave-KAUST/DiffPINN-pub"},
  { y: 2025, a: [SC, TA], t: "Meta learning for improved neural network wavefield solutions", v: SIG, link: "https://link.springer.com/article/10.1007/s10712-024-09872-6", code: "https://github.com/sunnymontas927/Meta-PINN" },
  { y: 2025, a: [SC, TA], t: "Multifrequency wavefield solutions for variable velocity models using meta-learning enhanced low-rank physics-informed neural network", v: GJI, d: "244(1), ggaf417", link: "https://academic.oup.com/gji/article/244/1/ggaf417/8292609", code: "https://github.com/DeepWave-KAUST/Meta-LRPINN-pub" },
  { y: 2025, a: [SC, RH, TA], t: "A generative foundation model for an all-in-one seismic processing framework", v: SIG, link: "https://link.springer.com/article/10.1007/s10712-025-09912-9", code: "https://github.com/DeepWave-KAUST/GSFM_pub" },
  { y: 2025, a: [SC, HZ, TA], t: "Self-supervised seismic resolution enhancement", v: TGRS, link: "https://ieeexplore.ieee.org/abstract/document/10839093", code: "https://github.com/DeepWave-KAUST/SSL-Resolution-Enhancement" },
  { y: 2025, a: [QZ, SC + "*", "Wei Chen", WM], t: "Well- and structure-constrained initial velocity building for full-waveform inversion via a generative diffusion model", v: TGRS, link: "https://ieeexplore.ieee.org/abstract/document/11058942" },

  // ---- 2024 ----
  { y: 2024, a: [SL, SC, TA], t: "Gabor-based learnable sparse representation for self-supervised denoising", v: TGRS, link: "https://ieeexplore.ieee.org/document/10398220" },
  { y: 2024, a: ["Xingchen Shi", SC + "*", WM, WO], t: "Generative diffusion model for seismic imaging improvement of sparsely acquired data and uncertainty quantification", v: TGRS, d: "62, 1–17", link: "https://ieeexplore.ieee.org/document/10707647", code: "https://github.com/sunnymontas927/Diff-Imaging-Enhancement"},
  { y: 2024, a: [SC, TA], t: "Discovery of physically interpretable wave equations", v: SIG, link: "https://link.springer.com/article/10.1007/s10712-024-09857-5" },
  { y: 2024, a: [SC, TA], t: "Robust data driven discovery of a seismic wave equation", v: GJI, d: "236(1), 537–546", link: "https://academic.oup.com/gji/article/236/1/537/7424129" },
  { y: 2024, a: [SC, "Zhiyao Cheng", "Chao Jiang", WM, QZ], t: "An effective self-supervised learning method for attenuating various types of seismic noise", v: GEO, d: "89(6), V589", link: "https://pubs.geoscienceworld.org/seg/geophysics/article/89/6/V589/649349/An-effective-self-supervised-learning-method-for" },
  { y: 2024, a: [SC, RH, TA], t: "Meta-Processing: A robust framework for multi-tasks seismic processing", v: SIG, link: "https://link.springer.com/article/10.1007/s10712-024-09837-9" },
  { y: 2024, a: [SC, "Yi Wang", QZ, RH, TA], t: "A self-supervised learning framework for seismic low-frequency extrapolation", v: JGR, d: "1(3), e2024JH000157", link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JH000157", code: "https://github.com/DeepWave-KAUST/SSL-Lowfrequency-extrapolation" },

  // ---- 2023 ----
  { y: 2023, a: [WO, QL, WM, SC + "*"], t: "Asymptotic linearized inversion for acoustic variable-tilt transversely isotropic media through elliptic perturbation analysis", v: WMO, d: "120, 103161", link: "https://www.sciencedirect.com/science/article/pii/S0165212523000471"},
  { y: 2023, a: [WO, QL, WM, SC], t: "Multiparameter acoustic inversion for variable-tilt transversely isotropic media with generalized Radon transform", v: TGRS, link: "https://ieeexplore.ieee.org/abstract/document/10122976" },
  { y: 2023, a: [HT, SC, "Wuqun Li", WM], t: "Simultaneous reconstruction and denoising for DAS-VSP seismic data by RRU-net", v: "Frontiers in Earth Science", d: "10, 993465", link: "https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2022.993465/full" },
  { y: 2023, a: [HT, SC, "Huan Song", WM], t: "3D9C seismic data reconstruction with multi-scale convolution neural network", v: JAG, d: "216, 105163", link: "https://www.sciencedirect.com/science/article/pii/S0926985123002410"},
  { y: 2023, a: [SC, "Xingchen Shi", WM, "Tariq A. Alkhalifah", "Tao Yang", "Yuzhu Liu", "Heping Sun"], t: "Elastic seismic imaging enhancement of sparse 4C ocean-bottom node data using deep learning", v: TGRS, d: "61, 1–14", link: "https://ieeexplore.ieee.org/abstract/document/10123984"},
  { y: 2023, a: ["Lei Zhao", WM, "Zongbao Liu", SC], t: "Research on the differential tectonic-thermal evolution of Longmaxi shale in the southern Sichuan Basin", v: "Advances in Geo-Energy Research", link: "https://ager.yandypress.com/index.php/2207-9963/article/view/258"},

  // ---- 2022 ----
  { y: 2022, a: ["Meng Du", SC, WM], t: "Deep-learning-based seismic variable-size velocity model building", v: "IEEE Geoscience and Remote Sensing Letters", d: "19, 1–5", link: "https://ieeexplore.ieee.org/abstract/document/9878310" },
  { y: 2022, a: ["Qingqing Li", QZ, "Qizhen Du", SC], t: "Well-guided multisource elastic full-waveform inversion", v: TGRS, d: "60, 1–14", link: "https://ieeexplore.ieee.org/document/9864648"},
  { y: 2022, a: [QL, WO, WM, SC, "Xuelei Li"], t: "Born scattering integral, scattering radiation pattern, and generalized Radon transform inversion in acoustic tilted transversely isotropic media", v: TGRS, d: "60, 1–16", link: "https://ieeexplore.ieee.org/document/9763474"},

  // ---- 2021 ----
  { y: 2021, a: [WO, QL, WM, SC], t: "Linearized scattering problem in acoustic transversely isotropic media with a vertical symmetry axis", v: WMO, d: "104, 102753", link: "https://www.sciencedirect.com/science/article/pii/S0165212521000512"},
  { y: 2021, a: [WO, QL, WM, SC], t: "Multi-parameter true-amplitude generalized Radon transform inversion for acoustic transversely isotropic media with a vertical symmetry axis", v: TGRS, d: "60, 1–14", link: "https://ieeexplore.ieee.org/abstract/document/9509571" },
  { y: 2021, a: [SC, WM, WO], t: "Plane wave propagation in viscoelastic attenuative VTI media based on fractional time derivatives", v: "Chinese Journal of Geophysics", d: "64(3), 965–981", link: "http://www.geophy.cn/article/doi/10.6038/cjg2021O0231"},
  { y: 2021, a: [SC, WM, QZ, "Qianru Xu"], t: "Wave propagation in the poro-viscoelastic orthorhombic two-phase media: Plane-wave theory and wavefield simulation", v: GJI, d: "227(1), 99–122", link: "https://academic.oup.com/gji/article/227/1/99/6289920"},

  // ---- 2020 ----
  { y: 2020, a: [QL, WO, WM, SC], t: "Scattering pattern analysis and true-amplitude generalized Radon transform migration for acoustic transversely isotropic media with a vertical axis of symmetry", v: GP, d: "68(4), 1211–1227", link: "https://www.earthdoc.org/content/journals/10.1111/1365-2478.12921"},
];

window.CONFERENCES = [
  // ---- 2026 ----
  { y: 2026, a: [RH, SC, TA], t: "Neural representation-based waveform inversion: A realistic case study", v: EAGE87 },
  { y: 2026, a: [HT, SC, WM, HZ, "Yingying Zhang"], t: "A physics-guided self-supervised diffusion model for seismic resolution enhancement", v: EAGE87 },
  { y: 2026, a: [MT, SC, TA], t: "Latent space optimization in neural operator-based waveform inversion", v: EAGE87 },
  { y: 2026, a: [SC, TA], t: "Learning to propagate: Seismic wavefield modeling with diffusion models", v: IMAGE6 },
  { y: 2026, a: [SC, TA], t: "Observation-conditioned diffusion models for surrogate seismic forward operator", v: IMAGE6 },
  { y: 2026, a: [SC, TA], t: "Unifying seismic forward and inverse operators with a joint guided diffusion model", v: IMAGE6 },
  { y: 2026, a: [SC, RH, TA], t: "Generative diffusion models for shallow-to-deep seismic velocity model building", v: EAGE87 },
  { y: 2026, a: [SC, RH, MT, TA], t: "Depth-progressive 3D seismic velocity model building via 2D generative diffusion models", v: EAGE87 },

  // ---- 2025 ----
  { y: 2025, a: [TA, RH, SC], t: "Using generative models for seismic processing and velocity model building", v: EAGE86 + " (Workshop Programme)" },
  { y: 2025, a: [RH, SC, TA], t: "Synthesizing realistic-scale seismic velocity models using a spatially-aware generative model", v: EAGE86 },
  { y: 2025, a: [RH, SC, TA], t: "Using a pretrained neural representation of seismic data for generative velocity model prediction", v: EAGE86 },
  { y: 2025, a: ["Xiao Ma", SC, TA], t: "Microseismic source inversion based on neural operator with physics constrain", v: EAGE86 },
  { y: 2025, a: [SC, TA], t: "Accelerating seismic wavefield representation via latent diffusion-initialized physics-informed neural networks", v: IMAGE5 },
  { y: 2025, a: [SC, RH, TA], t: "Multi-task seismic processing using generative diffusion models", v: EAGE86 },
  { y: 2025, a: [SC, XM, TA], t: "Toward generalizable elastic wave separation: A physics-informed conditional diffusion approach", v: IMAGE5 },
  { y: 2025, a: [SC, "Mohammad H. Taufik", TA], t: "A generative neural operator for seismic wavefield representation", v: EAGE86 },
  { y: 2025, a: [SC, "Ning Wang", TA], t: "Self-supervised free-surface multiple suppression", v: EAGE86 },

  // ---- 2024 ----
  { y: 2024, a: [RH, SC, TA], t: "Multi-conditional seismic velocity synthesis using an autoregressive Transformer network", v: IMAGE4 },
  { y: 2024, a: [RH, SC, TA], t: "VelocityGPT: A sequential depth-wise velocity model generator in an autoregressive framework", v: EAGE85 },
  { y: 2024, a: [SL, "Abdullah Alali", SC, TA], t: "Integrating U-Net into full-waveform inversion for salt body building: A challenging case", v: IMAGE4 },
  { y: 2024, a: [SL, SC, TA], t: "Gabor-based learnable sparse representation for self-supervised ground roll removal", v: EAGE85 },
  { y: 2024, a: [SC, TA], t: "Unit-constrained data-driven discovery of a wave equation", v: IMAGE4 },
  { y: 2024, a: [SC, RH, TA], t: "A self-supervised learning framework for multi-tasks seismic processing via meta-learning", v: EAGE85 },
  { y: 2024, a: [SC, HZ, TA], t: "Seismic resolution enhancement with self-supervised learning", v: IMAGE4 },

  // ---- 2023 ----
  { y: 2023, a: [SC, TA], t: "D-SWE: Data-driven discovery of a seismic wave equation", v: EAGE84 },
  { y: 2023, a: [SC, TA], t: "Meta-PINN: Meta learning for improved neural network wavefield solutions", v: IMAGE3 },
  { y: 2023, a: [SC, TA], t: "Meta-processing: Meta-learning based initialization for enhancement multi-seismic processing with limited training data", v: IMAGE3 },
  { y: 2023, a: [SC, "Xingchen Shi", WM, TA], t: "Seismic imaging enhancement of sparse ocean-bottom node data using deep learning", v: EAGE84 },
];
