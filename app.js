/*
 * 碳路先锋业财碳智能核算中枢
 * Copyright © 2026 重庆理工大学碳路先锋项目团队. All rights reserved.
 * Unauthorized copying, modification, or redistribution is prohibited.
 * Build fingerprint: CP-V103-20261024-RX
 * Authorship provenance: CP-AUTHOR-V1:572X6ZGrIC8gT2xpdmVyIEVsbGlzIFZvc3M=:98c79db4f7add88d22d25ea9e4e683a70c6c4bf5c651a6f1926a3b2db6add3ad
 */
const ACCOUNTING_PERIOD = "2026 Q4";
const DATA_AS_OF = "2026-10-22";
const CN_CARBON_PRICE = 96.66;
const EUA_PRICE = 85.51;
const EUR_CNY_RATE = 7.5051;
const EUR_CNY_NOTE = `参考汇率 €1≈¥${EUR_CNY_RATE.toFixed(4)}`;
const CQ_ELECTRICITY_FACTOR = 0.5581;
const PRODUCT_OUTPUT_T = 787;
const CO2_TO_CARBON_FACTOR = 12 / 44;
const PROJECTS_STORAGE_KEY = "carbon-pathfinder-projects-v2";
const LEGACY_STORAGE_KEY = "carbon-pathfinder-demo-v1";
const DEMO_PROJECT_ID = "demo-cmc-2026-q4";
const SOFTWARE_FULL_NAME = "碳路先锋业财碳智能核算中枢";
const SOFTWARE_SHORT_NAME = "碳路先锋";
const SOFTWARE_VERSION = "V1.0.3";
const SOFTWARE_VERSION_DATE = "2026-10-24";
const SOFTWARE_BUILD_FINGERPRINT = "CP-V103-20261024-RX";
const SOFTWARE_DEVELOPER = "重庆理工大学碳路先锋项目团队";
const SOFTWARE_UNIT = "重庆理工大学";
const SOFTWARE_SITE_URL = "https://2179232889-a11y.github.io/carbon-pathfinder/";
const SOFTWARE_CONTACT_EMAIL = "xluo0246@gmail.com";
const INVITE_CODE_HASH = "cc53484fdf4b487e9fee2baa4d7240b7c1e00c0222b156d22c9699c0b59f32cb";
const INVITE_STORAGE_KEY = "carbon-pathfinder-invite-2026-v1";
const ACCESS_GATE_ENABLED = false;
const MAX_SHARE_URL_LENGTH = 12000;

const PROVINCE_FACTORS = {
  "全国": 0.5306,
  "北京": 0.5554,
  "天津": 0.6796,
  "河北": 0.6516,
  "山西": 0.6634,
  "内蒙古": 0.6479,
  "辽宁": 0.4878,
  "吉林": 0.4671,
  "黑龙江": 0.5229,
  "上海": 0.5737,
  "江苏": 0.5827,
  "浙江": 0.4974,
  "安徽": 0.6553,
  "福建": 0.4211,
  "江西": 0.5836,
  "山东": 0.6191,
  "河南": 0.5897,
  "湖北": 0.4044,
  "湖南": 0.4976,
  "广东": 0.4419,
  "广西": 0.4476,
  "海南": 0.3648,
  "重庆": 0.5581,
  "四川": 0.1564,
  "贵州": 0.5683,
  "云南": 0.1333,
  "陕西": 0.6335,
  "甘肃": 0.4471,
  "青海": 0.1796,
  "宁夏": 0.6187,
  "新疆": 0.6021
};

const INDUSTRY_CATALOG = [
  { name: "精细化工", description: "多品种、联副产品与复杂工艺", icon: "leaf" },
  { name: "基础化工", description: "连续生产与能源密集", icon: "activity" },
  { name: "钢铁", description: "冶炼、轧制与能源加工", icon: "building" },
  { name: "水泥", description: "熟料煅烧与粉磨", icon: "building" },
  { name: "铝冶炼", description: "电解铝与铝材加工", icon: "activity" },
  { name: "造纸", description: "制浆、造纸与能源回收", icon: "file" },
  { name: "纺织", description: "纺纱、织造与印染", icon: "tree" },
  { name: "医药", description: "原料药、中间体与制剂", icon: "activity" },
  { name: "食品", description: "食品加工与冷链物流", icon: "leaf" },
  { name: "其他制造业", description: "通用制造与装配产品", icon: "settings" }
];

const PRODUCT_CATALOG = {
  "精细化工": ["CMC羧甲基纤维素钠", "聚羧酸减水剂", "甲基纤维素", "聚合氯化铝", "表面活性剂", "涂料树脂", "纺织助剂", "水处理剂"],
  "基础化工": ["烧碱", "纯碱", "硫酸", "甲醇", "合成氨", "尿素", "双氧水", "乙二醇", "丙烯"],
  "钢铁": ["转炉钢坯", "电炉钢坯", "热轧卷板", "冷轧卷板", "中厚板", "钢带", "钢材制品"],
  "水泥": ["水泥熟料", "普通硅酸盐水泥", "矿渣硅酸盐水泥", "特种水泥", "预拌混凝土"],
  "铝冶炼": ["电解铝", "铝锭", "铝合金锭", "铝型材", "铝板带"],
  "造纸": ["瓦楞原纸", "白卡纸", "生活用纸", "牛卡纸", "文化纸", "特种纸"],
  "纺织": ["棉纱", "涤纶长丝", "锦纶丝", "机织面料", "针织面料", "印染布"],
  "医药": ["化学原料药", "医药中间体", "中药提取物", "口服固体制剂", "注射剂"],
  "食品": ["乳制品", "饮料", "食品添加剂", "调味品", "粮油制品", "冷冻食品"],
  "其他制造业": ["工业零部件", "电子组件", "消费品", "装备产品", "包装材料", "定制产品"]
};

const PROCESS_CATALOG = {
  "精细化工": ["水媒法", "溶媒法", "间歇反应", "连续反应", "聚合工艺", "复配工艺", "乳化工艺", "萃取工艺"],
  "基础化工": ["氯碱工艺", "合成氨工艺", "甲醇合成", "接触法硫酸", "纯碱氨碱法", "尿素合成", "双氧水工艺", "裂解工艺"],
  "钢铁": ["高炉-转炉", "电弧炉短流程", "热轧", "冷轧", "连铸", "退火", "表面处理"],
  "水泥": ["新型干法窑", "粉磨站", "协同处置", "余热发电"],
  "铝冶炼": ["电解铝", "铝铸造", "铝挤压", "铝压延", "再生铝"],
  "造纸": ["化学制浆", "废纸制浆", "造纸抄造", "涂布加工"],
  "纺织": ["环锭纺", "气流纺", "熔融纺丝", "机织", "针织", "印染"],
  "医药": ["化学合成", "发酵", "提取", "制剂", "无菌灌装"],
  "食品": ["热加工", "发酵", "冷链加工", "干燥", "包装"],
  "其他制造业": ["装配", "机加工", "注塑", "表面处理", "焊接", "其他工艺"]
};

const SEED_LEDGER_ROWS = [
  { name: "精制棉", source: "采购台账", amount: 428.6, unit: "t", factor: 0.865, factorUnit: "tCO₂e/t", emissions: 370.74, status: "已映射" },
  { name: "一氯甲烷", source: "采购发票", amount: 116.2, unit: "t", factor: 1.284, factorUnit: "tCO₂e/t", emissions: 149.2, status: "已映射" },
  { name: "外购电力", source: "重庆电费单", amount: 1284.6, unit: "MWh", factor: CQ_ELECTRICITY_FACTOR, factorUnit: "tCO₂e/MWh", emissions: 716.96, status: "已映射" },
  { name: "蒸汽", source: "能源台账", amount: 1860, unit: "t", factor: 0.242, factorUnit: "tCO₂e/t", emissions: 450.12, status: "已映射" },
  { name: "公路运输", source: "物流单", amount: 46820, unit: "t·km", factor: 0.096, factorUnit: "kgCO₂e/t·km", emissions: 4.49, status: "已映射" }
];

const state = {
  route: "dashboard",
  projectName: "CMC 2026 Q4",
  projectPeriod: ACCOUNTING_PERIOD,
  dataAsOf: DATA_AS_OF,
  projectStatus: "ready",
  isDemoData: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  organization: "重庆碳路新材料有限公司",
  organizationCode: "91500000MA7XXXXX8Q",
  province: "重庆",
  city: "重庆",
  productOutput: PRODUCT_OUTPUT_T,
  carbonPrice: CN_CARBON_PRICE,
  electricityFactor: CQ_ELECTRICITY_FACTOR,
  electricityFactorSource: "生态环境部 2023 年省级电力平均排放因子",
  roadRoute: "原料地 → 工厂 · 公路运输",
  railRoute: "工厂 → 港口 · 公转铁联运",
  transportDistance: 420,
  wizardStep: 1,
  selections: {
    industry: "精细化工",
    product: "CMC羧甲基纤维素钠",
    process: "水媒法"
  },
  ledgerLoaded: true,
  ledgerRows: SEED_LEDGER_ROWS.map((row) => ({ ...row })),
  includeWasteCarbon: true,
  balanceMass: {
    input: 1613.2,
    product: 1286.7,
    waste: 186.4,
    byproductLoss: 140.1
  },
  balanceMode: "质量平衡",
  costMethod: "按重量",
  selectedRoute: "road",
  cbamVolume: 820,
  cbamEuPrice: EUA_PRICE,
  cbamIntensity: 2.15,
  cbamFreeAllocation: 70,
  roadEmissionAdjustment: 0.23,
  railEmissionAdjustment: -0.18,
  cbamApplied: false,
  expandedNodes: new Set(["total", "scope1", "scope2", "scope3", "roadRoute"]),
  selectedTreeNode: "roadRoute",
  aiOpen: false
};

const BALANCE_KEYS = ["input", "product", "waste", "byproductLoss"];

let balancePaintFrame = 0;
let cbamPaintFrame = 0;
let persistTimer = 0;
let lastStorageErrorAt = 0;
let lastSearchFocus = null;
let lastAiFocus = null;
let lastMenuFocus = null;
let projects = [];
let activeProjectId = null;
let applicationStarted = false;
const mobileViewport = window.matchMedia("(max-width: 1020px)");

const pageNames = {
  dashboard: "总览",
  projects: "核算项目",
  wizard: "新建碳核算",
  ledger: "数据台账",
  balance: "碳流天平",
  cost: "业财穿透",
  cbam: "CBAM 模拟",
  report: "核算报告",
  about: "软件信息"
};

const icon = (name, cls = "") =>
  `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

const pageHead = (eyebrow, title, description, actions = "") => `
  <header class="page-head">
    <div>
      <h1 tabindex="-1">${title}</h1>
      <p>${description}</p>
    </div>
    <div class="page-actions">${actions}</div>
  </header>
`;

const statusChip = (text, type = "") =>
  `<span class="status-chip ${type}"><i></i>${text}</span>`;

const escapeHtml = (value) => String(value ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

const formatNumber = (value, digits = 2) =>
  Number(value).toLocaleString("zh-CN", { minimumFractionDigits: digits, maximumFractionDigits: digits });

const euroToCny = (value) => Number(value || 0) * EUR_CNY_RATE;
const formatCnyEquivalent = (euroValue, digits = 2) =>
  `≈ ¥${formatNumber(euroToCny(euroValue), digits)}`;

function segmentedRing(parts, size = 158, colors = ["var(--green)", "var(--cyan)", "var(--amber)"]) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return `
    <svg class="segmented-ring" viewBox="0 0 140 140" style="width:${size}px;height:${size}px" role="img" aria-label="排放占比">
      <circle cx="70" cy="70" r="${radius}" class="ring-track"></circle>
      ${parts.map((part, index) => {
        const length = Math.max(0, part / 100 * circumference);
        const segment = `<circle cx="70" cy="70" r="${radius}" class="ring-segment"
          stroke="${colors[index]}" stroke-dasharray="${length} ${circumference - length}"
          stroke-dashoffset="${-offset}"></circle>`;
        offset += length;
        return segment;
      }).join("")}
    </svg>
  `;
}

function getLedgerTotal() {
  return state.ledgerRows.reduce((sum, row) => sum + Number(row.emissions || 0), 0);
}

function classifyLedgerRow(row) {
  const text = `${row.name || ""} ${row.source || ""}`;
  if (/电力|电费|能源|蒸汽|燃气|燃料/.test(text)) return "energy";
  if (/物流|运输|运费|配送/.test(text)) return "transport";
  if (/采购|发票|原料|材料|外购/.test(text)) return "material";
  return "process";
}

function isElectricityRow(row) {
  return /电力|电费/.test(`${row.name || ""} ${row.source || ""}`);
}

function getCostMetrics(method = state.costMethod) {
  const ledgerTotal = getLedgerTotal();
  const rowCost = (category) => state.ledgerRows
    .filter((row) => classifyLedgerRow(row) === category)
    .reduce((sum, row) => sum + Number(row.emissions || 0) * state.carbonPrice / 10000, 0);
  const rawMaterial = rowCost("material");
  const electricity = rowCost("energy");
  const transport = rowCost("transport");
  const process = Math.max(0, ledgerTotal * state.carbonPrice / 10000 - rawMaterial - electricity - transport);
  const base = { process, transport, electricity, material: rawMaterial };
  const methodFactors = {
    "按重量": { process: 1, transport: 1, electricity: 1, material: 1 },
    "按里程": { process: 0.94, transport: 3.25, electricity: 0.96, material: 0.94 },
    "按货值": { process: 1.05, transport: 0.62, electricity: 1.02, material: 1.38 }
  }[method];
  const weighted = Object.fromEntries(Object.entries(base).map(([key, value]) => [key, value * methodFactors[key]]));
  const totalRaw = Object.values(weighted).reduce((sum, value) => sum + value, 0) || 0.0001;
  const total = Object.values(base).reduce((sum, value) => sum + value, 0);
  const normalized = Object.fromEntries(Object.entries(weighted).map(([key, value]) => [key, value / totalRaw * total]));
  return {
    ...normalized,
    total,
    unit: total * 10000 / Math.max(1, state.productOutput),
    intensity: ledgerTotal / Math.max(1, state.productOutput),
    scope1: normalized.process,
    scope2: normalized.electricity,
    scope3: normalized.material + normalized.transport
  };
}

function clampNumber(value, min = 0, max = Number.POSITIVE_INFINITY) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return min > 0 ? min : 0;
  return Math.min(max, Math.max(min, numeric));
}

function getWizardStepValidation(step = state.wizardStep) {
  if (step === 1) {
    if (!String(state.organization || "").trim()) return { valid: false, fieldId: "organization-input", message: "请填写企业名称后再继续。" };
    if (!String(state.province || "").trim()) return { valid: false, fieldId: "province-input", message: "请填写省份或地区后再继续。" };
    if (!String(state.selections.industry || "").trim()) return { valid: false, fieldId: "industry-input", message: "请填写或选择企业所属行业。" };
  }
  if (step === 2) {
    if (!String(state.selections.product || "").trim()) return { valid: false, fieldId: "product-input", message: "请填写核心产品名称。" };
    if (!(Number(state.productOutput) > 0)) return { valid: false, fieldId: "product-output-input", message: "产品产量必须大于 0 t。" };
    if (!String(state.selections.process || "").trim()) return { valid: false, fieldId: "process-input", message: "请填写核心生产工艺。" };
  }
  if (step === 3) {
    if (!state.dataAsOf || !Number.isFinite(Date.parse(`${state.dataAsOf}T00:00:00`))) {
      return { valid: false, fieldId: "data-as-of-input", message: "请填写有效的数据截止日期。" };
    }
    const numericRules = [
      ["electricityFactor", "electricity-factor-input", 0, Number.POSITIVE_INFINITY, "电力排放因子不能为负数。"],
      ["carbonPrice", "carbon-price-input", 0, Number.POSITIVE_INFINITY, "项目碳价不能为负数。"],
      ["cbamEuPrice", "eua-price-input", 0, Number.POSITIVE_INFINITY, "欧盟 EUA 碳价不能为负数。"],
      ["transportDistance", "transport-distance-input", 0, Number.POSITIVE_INFINITY, "运输距离不能为负数。"],
      ["cbamFreeAllocation", "free-allocation-input", 0, 100, "CBAM 免费配额抵扣必须在 0%–100% 之间。"]
    ];
    for (const [key, fieldId, min, max, message] of numericRules) {
      const numeric = Number(state[key]);
      if (!Number.isFinite(numeric) || numeric < min || numeric > max) {
        return { valid: false, fieldId, message };
      }
    }
    for (const key of ["roadEmissionAdjustment", "railEmissionAdjustment"]) {
      if (!Number.isFinite(Number(state[key]))) {
        return {
          valid: false,
          fieldId: key === "roadEmissionAdjustment" ? "road-adjustment-input" : "rail-adjustment-input",
          message: "运输强度调整必须是有效数字，允许填写负数。"
        };
      }
    }
  }
  return { valid: true, fieldId: null, message: "" };
}

function showWizardValidation(result) {
  const validation = document.getElementById("wizard-validation");
  if (!validation) return;
  document.querySelectorAll("#page-content [aria-invalid='true']").forEach((field) => field.removeAttribute("aria-invalid"));
  validation.hidden = !result.message;
  validation.textContent = result.message;
  const field = result.fieldId ? document.getElementById(result.fieldId) : null;
  if (field) {
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", "wizard-validation");
    field.scrollIntoView({
      block: "center",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
    });
    requestAnimationFrame(() => field.focus({ preventScroll: true }));
  }
}

function clearWizardValidation(field) {
  field?.removeAttribute("aria-invalid");
  const validation = document.getElementById("wizard-validation");
  if (validation && !document.querySelector("#page-content [aria-invalid='true']")) {
    validation.hidden = true;
    validation.textContent = "";
  }
}

function snapshotActiveProject() {
  return {
    projectName: state.projectName,
    projectPeriod: state.projectPeriod,
    dataAsOf: state.dataAsOf,
    projectStatus: state.projectStatus,
    isDemoData: state.isDemoData,
    createdAt: state.createdAt,
    updatedAt: state.updatedAt,
    organization: state.organization,
    organizationCode: state.organizationCode,
    province: state.province,
    city: state.city,
    productOutput: state.productOutput,
    carbonPrice: state.carbonPrice,
    electricityFactor: state.electricityFactor,
    electricityFactorSource: state.electricityFactorSource,
    roadRoute: state.roadRoute,
    railRoute: state.railRoute,
    transportDistance: state.transportDistance,
    wizardStep: state.wizardStep,
    selections: { ...state.selections },
    ledgerLoaded: state.ledgerLoaded,
    ledgerRows: state.ledgerRows.map((row) => ({ ...row })),
    balanceMass: { ...state.balanceMass },
    includeWasteCarbon: state.includeWasteCarbon,
    balanceMode: state.balanceMode,
    costMethod: state.costMethod,
    selectedRoute: state.selectedRoute,
    cbamVolume: state.cbamVolume,
    cbamEuPrice: state.cbamEuPrice,
    cbamIntensity: state.cbamIntensity,
    cbamFreeAllocation: state.cbamFreeAllocation,
    roadEmissionAdjustment: state.roadEmissionAdjustment,
    railEmissionAdjustment: state.railEmissionAdjustment,
    cbamApplied: state.cbamApplied
  };
}

function applyProject(project) {
  const allowed = [
    "projectName", "projectPeriod", "dataAsOf", "projectStatus", "isDemoData", "createdAt", "updatedAt",
    "organization", "organizationCode", "province", "city", "productOutput", "carbonPrice",
    "electricityFactor", "electricityFactorSource", "roadRoute", "railRoute", "transportDistance",
    "wizardStep", "selections", "ledgerLoaded", "ledgerRows", "balanceMass",
    "includeWasteCarbon", "balanceMode", "costMethod", "selectedRoute",
    "cbamVolume", "cbamEuPrice", "cbamIntensity", "cbamApplied",
    "cbamFreeAllocation", "roadEmissionAdjustment", "railEmissionAdjustment"
  ];
  allowed.forEach((key) => {
    if (project[key] !== undefined) state[key] = project[key];
  });
}

function createDemoProjectRecord() {
  const now = new Date().toISOString();
  return {
    id: DEMO_PROJECT_ID,
    projectName: "演示示例 · CMC 2026 Q4",
    projectPeriod: ACCOUNTING_PERIOD,
    dataAsOf: DATA_AS_OF,
    projectStatus: "ready",
    isDemoData: true,
    createdAt: "2026-10-22T00:00:00.000Z",
    updatedAt: now,
    organization: "重庆碳路新材料有限公司",
    organizationCode: "91500000MA7XXXXX8Q",
    province: "重庆",
    city: "重庆",
    productOutput: PRODUCT_OUTPUT_T,
    carbonPrice: CN_CARBON_PRICE,
    electricityFactor: CQ_ELECTRICITY_FACTOR,
    electricityFactorSource: "生态环境部 2023 年重庆省级电力平均排放因子",
    roadRoute: "原料地 → 工厂 · 公路运输",
    railRoute: "工厂 → 港口 · 公转铁联运",
    transportDistance: 420,
    wizardStep: 3,
    selections: {
      industry: "精细化工",
      product: "CMC羧甲基纤维素钠",
      process: "水媒法"
    },
    ledgerLoaded: true,
    ledgerRows: SEED_LEDGER_ROWS.map((row) => ({ ...row })),
    balanceMass: {
      input: 1613.2,
      product: 1286.7,
      waste: 186.4,
      byproductLoss: 140.1
    },
    includeWasteCarbon: true,
    balanceMode: "质量平衡",
    costMethod: "按重量",
    selectedRoute: "road",
    cbamVolume: 820,
    cbamEuPrice: EUA_PRICE,
    cbamIntensity: 2.15,
    cbamFreeAllocation: 70,
    roadEmissionAdjustment: 0.23,
    railEmissionAdjustment: -0.18,
    cbamApplied: false
  };
}

function ensureDemoProject(activateWhenEmpty = true) {
  let demo = projects.find((project) => project.isDemoData === true);
  if (!demo) {
    demo = createDemoProjectRecord();
    projects.unshift(demo);
  } else {
    demo.isDemoData = true;
    if (!String(demo.projectName || "").startsWith("演示示例")) {
      demo.projectName = `演示示例 · ${demo.projectName || "CMC 2026 Q4"}`;
    }
    if (Array.isArray(demo.ledgerRows)) {
      demo.ledgerRows = demo.ledgerRows.map((row) => (
        row.name === "公路运输" && row.source === "物流单" && Number(row.factor) === 0.096
          ? { ...row, status: "已映射" }
          : row
      ));
    }
  }
  if (activateWhenEmpty && !activeProjectId) {
    activeProjectId = demo.id;
    applyProject(demo);
  } else if (activeProjectId === demo.id) {
    state.projectName = demo.projectName;
  }
  return demo;
}

function saveActiveProject() {
  if (!activeProjectId) {
    activeProjectId = `project-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }
  state.updatedAt = new Date().toISOString();
  const snapshot = snapshotActiveProject();
  const index = projects.findIndex((project) => project.id === activeProjectId);
  if (index >= 0) {
    projects[index] = { ...projects[index], ...snapshot, id: activeProjectId };
  } else {
    projects.unshift({ ...snapshot, id: activeProjectId });
  }
}

function persistState() {
  try {
    saveActiveProject();
    localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify({
      version: 2,
      activeProjectId,
      projects
    }));
  } catch {
    if (Date.now() - lastStorageErrorAt > 5000) {
      lastStorageErrorAt = Date.now();
      showToast("自动保存失败", "浏览器无法写入本地存储，请立即导出项目备份，避免数据丢失");
    }
  }
}

function encodeShareState() {
  const payload = {
    version: 2,
    ...snapshotActiveProject()
  };
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeShareState(value) {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padding = (4 - normalized.length % 4) % 4;
    const padded = normalized + "=".repeat(padding);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const payload = JSON.parse(new TextDecoder().decode(bytes));
    if (![1, 2].includes(payload.version) || !Array.isArray(payload.ledgerRows)) return null;
    return payload;
  } catch {
    return null;
  }
}

function restoreState() {
  try {
    const shared = new URLSearchParams(window.location.search).get("share");
    if (shared) {
      const payload = decodeShareState(shared);
      if (payload) {
        applyProject(payload);
        state.projectName = payload.projectName || "共享核算项目";
        state.projectPeriod = payload.projectPeriod || ACCOUNTING_PERIOD;
        state.dataAsOf = payload.dataAsOf || DATA_AS_OF;
        state.selections = payload.selections || { ...state.selections };
        state.ledgerRows = payload.ledgerRows;
        state.ledgerLoaded = true;
        state.balanceMass = payload.balanceMass || { ...state.balanceMass };
        state.costMethod = payload.costMethod || state.costMethod;
        state.selectedRoute = payload.selectedRoute || state.selectedRoute;
        if (payload.cbamVolume !== undefined) state.cbamVolume = Number(payload.cbamVolume);
        if (payload.cbamEuPrice !== undefined) state.cbamEuPrice = Number(payload.cbamEuPrice);
        if (payload.cbamIntensity !== undefined) state.cbamIntensity = Number(payload.cbamIntensity);
        return;
      }
    }
    const savedProjects = JSON.parse(localStorage.getItem(PROJECTS_STORAGE_KEY) || "null");
    if (savedProjects?.version === 2 && Array.isArray(savedProjects.projects) && savedProjects.projects.length) {
      projects = savedProjects.projects;
      activeProjectId = savedProjects.projects.some((project) => project.id === savedProjects.activeProjectId)
        ? savedProjects.activeProjectId
        : savedProjects.projects[0].id;
      applyProject(projects.find((project) => project.id === activeProjectId) || projects[0]);
      return;
    }
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY) || "null");
    if (legacy && typeof legacy === "object") {
      projects = [{
        ...snapshotActiveProject(),
        ...legacy,
        id: `project-migrated-${Date.now()}`,
        projectName: "CMC 2026 Q4",
        projectStatus: "ready",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }];
      activeProjectId = projects[0].id;
      applyProject(projects[0]);
      persistState();
    }
  } catch {}
}

function uniqueProjectName(prefix = "新碳核算") {
  const names = new Set(projects.map((project) => project.projectName));
  let index = 1;
  let name = `${prefix} ${String(index).padStart(2, "0")}`;
  while (names.has(name)) {
    index += 1;
    name = `${prefix} ${String(index).padStart(2, "0")}`;
  }
  return name;
}

function markProjectActive() {
  if (state.projectStatus === "ready") state.projectStatus = "active";
}

function resetBalanceValues() {
  state.balanceMass = state.isDemoData
    ? { input: 1613.2, product: 1286.7, waste: 186.4, byproductLoss: 140.1 }
    : { input: 0, product: 0, waste: 0, byproductLoss: 0 };
  state.includeWasteCarbon = state.balanceMass.waste > 0;
}

function beginNewProject(saveCurrent = true) {
  if (saveCurrent) persistState();
  const now = new Date().toISOString();
  const project = {
    id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    projectName: uniqueProjectName(),
    projectPeriod: ACCOUNTING_PERIOD,
    dataAsOf: new Date().toISOString().slice(0, 10),
    projectStatus: "draft",
    isDemoData: false,
    createdAt: now,
    updatedAt: now,
    organization: "",
    organizationCode: "",
    province: "",
    city: "",
    productOutput: 0,
    carbonPrice: CN_CARBON_PRICE,
    electricityFactor: PROVINCE_FACTORS["全国"],
    electricityFactorSource: "生态环境部 2023 年全国电力平均排放因子",
    roadRoute: "原料地 → 工厂 · 公路运输",
    railRoute: "工厂 → 港口 · 公转铁联运",
    transportDistance: 420,
    wizardStep: 1,
    selections: { industry: "", product: "", process: "" },
    ledgerLoaded: false,
    ledgerRows: [],
    balanceMass: { input: 0, product: 0, waste: 0, byproductLoss: 0 },
    includeWasteCarbon: true,
    balanceMode: "质量平衡",
    costMethod: "按重量",
    selectedRoute: "road",
    cbamVolume: 0,
    cbamEuPrice: EUA_PRICE,
    cbamIntensity: 0,
    cbamFreeAllocation: 0,
    roadEmissionAdjustment: 0,
    railEmissionAdjustment: 0,
    cbamApplied: false
  };
  projects.unshift(project);
  activeProjectId = project.id;
  applyProject(project);
  state.expandedNodes = new Set(["total", "scope1", "scope2", "scope3", "roadRoute"]);
  persistState();
  navigate("wizard");
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  persistState();
  activeProjectId = id;
  applyProject(project);
  persistState();
  navigate("dashboard");
}

function duplicateProject(id) {
  const source = projects.find((item) => item.id === id);
  if (!source) return;
  persistState();
  const now = new Date().toISOString();
  const copy = JSON.parse(JSON.stringify(source));
  copy.id = `project-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  copy.isDemoData = false;
  copy.projectName = uniqueProjectName(`${String(source.projectName || "核算项目").replace(/^演示示例 · /, "")} 副本`);
  copy.createdAt = now;
  copy.updatedAt = now;
  projects.unshift(copy);
  activeProjectId = copy.id;
  applyProject(copy);
  persistState();
  showToast(
    source.isDemoData ? "示例已复制为独立项目" : "项目已复制",
    `已创建「${copy.projectName}」，${source.isDemoData ? "可直接修改，原演示示例保持不变" : "原项目保持不变"}`
  );
  navigate("projects");
}

function deleteProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  if (project.isDemoData) {
    showToast("演示示例需保留", "可先复制成独立项目，再按真实业务修改");
    return;
  }
  const confirmed = window.confirm(`确认删除「${project.projectName}」？此操作无法恢复。`);
  if (!confirmed) return;
  projects = projects.filter((item) => item.id !== id);
  if (activeProjectId === id) {
    if (projects.length) {
      activeProjectId = projects[0].id;
      applyProject(projects[0]);
    } else {
      activeProjectId = null;
      beginNewProject(false);
      return;
    }
  }
  persistState();
  showToast("项目已删除", `「${project.projectName}」已从本地项目列表移除`);
  navigate("projects");
}

function formatProjectTime(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function dashboardPage() {
  const cbamSnapshot = computeCBAM();
  const total = getLedgerTotal();
  const hasLedger = state.ledgerRows.length > 0;
  const carbonCost = total * state.carbonPrice / 10000;
  const balance = getBalanceMetrics();
  const mappedRows = getMappedLedgerCount();
  const dataCompleteness = state.ledgerRows.length ? mappedRows / state.ledgerRows.length * 100 : 0;
  const carbonIntensity = total / Math.max(1, state.productOutput);
  const scope1 = state.ledgerRows
    .filter((row) => classifyLedgerRow(row) === "process" || (classifyLedgerRow(row) === "energy" && !isElectricityRow(row)))
    .reduce((sum, row) => sum + Number(row.emissions || 0), 0);
  const scope2 = state.ledgerRows
    .filter((row) => classifyLedgerRow(row) === "energy" && isElectricityRow(row))
    .reduce((sum, row) => sum + Number(row.emissions || 0), 0);
  const scope3 = Math.max(0, total - scope1 - scope2);
  const p1 = total ? scope1 / total * 100 : 0;
  const p2 = total ? scope2 / total * 100 : 0;
  const p3 = total ? Math.max(0, 100 - p1 - p2) : 0;
  const chartMax = Math.max(...state.ledgerRows.map((row) => Number(row.emissions)), 1);
  const miniValues = hasLedger ? state.ledgerRows.slice(-12).map((row) => Number(row.emissions || 0)) : [0, 0, 0, 0, 0];
  const miniMax = Math.max(...miniValues, 1);
  return `
    ${pageHead(
      "Carbon Intelligence / Overview",
      "碳资产态势总览",
      "把每一吨碳排放，变成可解释、可分摊、可决策的经营数据。",
      `<button class="button" data-action="go-ledger">${icon("upload")} 导入台账</button>
       <button class="button primary" data-action="new-project">${icon("plus")} 新建碳核算</button>`
    )}

    <div class="dashboard-grid page-enter">
      <article class="card accounting-hero">
        <div class="hero-topline">
          <div class="hero-project">
            <span class="project-icon">${icon("leaf")}</span>
            <div>
              <strong>${escapeHtml(state.projectName)}</strong>
              <span>${escapeHtml(state.selections.product)} · ${escapeHtml(state.selections.process)} · ${escapeHtml(state.city || state.province)} · ${escapeHtml(state.projectPeriod)}</span>
            </div>
          </div>
          ${statusChip(hasLedger ? balance.balanced ? "碳流天平已校准" : "碳流天平待修正" : "等待录入台账", hasLedger && balance.balanced ? "" : "warning")}
        </div>
        <div class="hero-main">
          <div>
            <span class="hero-number-label">本期已核算碳排放</span>
            <div class="hero-number"><strong>${formatNumber(total, 1)}</strong><span>tCO₂e</span></div>
            <div class="delta"><strong>${hasLedger ? `● ${state.isDemoData ? "示例台账已载入" : "项目台账已载入"}` : "● 等待企业填报"}</strong><span>${hasLedger ? `数据截止 ${state.dataAsOf}` : "尚未录入活动数据"}</span></div>
          </div>
          <div class="mini-bars" role="img" aria-label="各排放源碳排放量分布">
            ${miniValues.map((value, i) => `<i style="--h:${Math.max(5, value / miniMax * 100)}%;--i:${i}"></i>`).join("")}
          </div>
        </div>
        <div class="hero-bottom">
          <div class="flow-meta">
            <div><span>核算边界</span><strong>${hasLedger ? "3 类排放范围" : "待识别"}</strong></div>
            <div><span>数据匹配率</span><strong>${dataCompleteness.toFixed(0)}%</strong></div>
            <div><span>最近更新</span><strong>${escapeHtml(state.dataAsOf)}</strong></div>
          </div>
          <button class="text-link" data-route="balance">查看核算详情 ${icon("arrow-right")}</button>
        </div>
      </article>

      <article class="card risk-card">
        <div class="card-heading">
          <div>${icon("globe")}<h2>CBAM 合规风险</h2></div>
          ${statusChip(!hasLedger ? "待核算" : state.selectedRoute === "rail" ? "方案已优化" : "需关注", !hasLedger || state.selectedRoute !== "rail" ? "warning" : "")}
        </div>
        <div class="risk-amount">
          ${hasLedger ? `€ ${cbamSnapshot.duty.toLocaleString("en-US")}` : "€ —"} <span>${hasLedger ? "预估" : "待核算"}</span>
          ${hasLedger ? `<small class="fx-equivalent">${formatCnyEquivalent(cbamSnapshot.duty)}</small>` : ""}
        </div>
        <p class="risk-copy">${hasLedger ? state.selectedRoute === "rail" ? `当前采用「${escapeHtml(state.railRoute)}」情景。` : "基于当前出口量、产品碳强度、中欧碳价差和免费配额测算。" : "先完成活动数据录入和碳流校验，系统才会生成 CBAM 风险。"}</p>
        <div class="risk-meter"><i style="width:${hasLedger ? 72 : 0}%"></i></div>
        <div class="risk-scale"><span>安全</span><span>预警线</span><span>高风险</span></div>
        <button class="button wide" data-route="cbam">进入关税模拟 ${icon("arrow-right")}</button>
      </article>
    </div>

    <div class="kpi-grid page-enter">
      ${[
        ["leaf", "台账项目", String(state.ledgerRows.length), "项", "匹配率", `${dataCompleteness.toFixed(0)}%`],
        ["coins", "内部碳成本", `¥ ${formatNumber(carbonCost, 1)}`, "万元", "碳价参数", `¥ ${state.carbonPrice.toFixed(2)}/t`],
        ["activity", "产品碳强度", formatNumber(carbonIntensity, 2), "tCO₂e/t", "行业均值", "2.68"],
        ["tree", "碳流质量差异", formatNumber(Math.abs(balance.difference), 1), "tC", "边界校验", balance.balanced ? "已闭合" : "需修正"]
      ].map(([ic, label, val, unit, footLabel, footVal]) => `
        <article class="card kpi-card">
          <div class="kpi-head"><span>${label}</span><span class="kpi-icon">${icon(ic)}</span></div>
          <div class="kpi-value">${val}<small>${unit}</small></div>
          <div class="kpi-footer"><span>${footLabel}</span><strong>${footVal}</strong></div>
        </article>
      `).join("")}
    </div>

    <div class="dashboard-lower page-enter">
      <article class="card chart-card">
        <div class="card-heading">
          <div>${icon("trend")}<h3>活动台账排放分布</h3></div>
          <div class="chart-legend"><span><i></i>碳排放量</span><span><i></i>按全国碳价计成本</span></div>
        </div>
        <div class="ledger-bar-chart">
          ${hasLedger ? state.ledgerRows.map((row, index) => {
            const height = Math.max(8, Number(row.emissions) / chartMax * 100);
            return `<div class="ledger-bar-item">
              <span class="ledger-bar-value">${formatNumber(row.emissions)}</span>
              <div class="ledger-bar-track"><i style="--h:${height}%;--delay:${index * 55}ms"></i></div>
              <span class="ledger-bar-label">${escapeHtml(row.name)}</span>
            </div>`;
          }).join("") : `<div class="chart-empty">${icon("file")} 尚未录入活动数据，前往台账添加第一项数据。</div>`}
        </div>
        <div class="chart-bottom">
          <p>当前台账合计 <strong>${formatNumber(total)} tCO₂e</strong> · 数据日期 ${escapeHtml(state.dataAsOf)}</p>
          <button class="text-link" data-route="ledger">查看台账明细 ${icon("arrow-right")}</button>
        </div>
      </article>

      <article class="card boundary-card">
        <div class="card-heading">
          <div>${icon("scale")}<h3>核算边界分布</h3></div>
          <button class="icon-button subtle" data-route="balance" aria-label="查看核算边界详情">${icon("arrow-right")}</button>
        </div>
        <div class="donut-wrap">
          ${segmentedRing([p1, p2, p3])}
          <div class="donut-center"><strong>${hasLedger ? 3 : 0}</strong><span>排放范围</span></div>
        </div>
        <div class="donut-items">
          <div class="donut-item"><i></i>范围一<strong>${p1.toFixed(1)}%</strong></div>
          <div class="donut-item"><i></i>范围二<strong>${p2.toFixed(1)}%</strong></div>
          <div class="donut-item"><i></i>范围三<strong>${p3.toFixed(1)}%</strong></div>
        </div>
      </article>
    </div>
  `;
}

function projectsPage() {
  saveActiveProject();
  const sortedProjects = [...projects].sort((a, b) =>
    Number(Boolean(b.isDemoData)) - Number(Boolean(a.isDemoData))
      || new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0)
  );
  const statusNames = { draft: "填报中", active: "核算中", ready: "已完成" };
  return `
    ${pageHead(
      "Calculation Workspace",
      "核算项目",
      "每次新建都会保存为独立项目；内置演示示例可直接打开体验，不会覆盖已保存的真实项目。",
      `<button class="button" data-action="import-projects">${icon("upload")} 导入备份</button>
       <button class="button" data-action="export-projects">${icon("download")} 导出备份</button>
       <button class="button primary" data-action="new-project">${icon("plus")} 新建核算项目</button>`
    )}
    <input id="project-backup-input" type="file" hidden accept=".json,application/json">
    <div class="project-summary-strip page-enter">
      <div><span>项目总数</span><strong>${projects.length}</strong></div>
      <div><span>填报中</span><strong>${projects.filter((project) => project.projectStatus === "draft").length}</strong></div>
      <div><span>核算中</span><strong>${projects.filter((project) => project.projectStatus === "active").length}</strong></div>
      <div><span>已完成</span><strong>${projects.filter((project) => project.projectStatus === "ready").length}</strong></div>
    </div>
    ${sortedProjects.length ? `
      <div class="project-grid page-enter">
        ${sortedProjects.map((project) => {
          const active = project.id === activeProjectId;
          const total = (project.ledgerRows || []).reduce((sum, row) => sum + Number(row.emissions || 0), 0);
          return `<article class="card project-card ${active ? "active" : ""} ${project.isDemoData ? "demo" : ""}" ${active ? 'aria-current="true"' : ""}>
            <div class="project-card-head">
              <div>
                <span class="project-period">${project.isDemoData ? "演示示例 · " : ""}${escapeHtml(project.projectPeriod || ACCOUNTING_PERIOD)}</span>
                <h2>${escapeHtml(project.projectName || "未命名项目")}</h2>
              </div>
              ${statusChip(statusNames[project.projectStatus] || "填报中", project.projectStatus === "draft" ? "warning" : "")}
            </div>
            <p class="project-product">${escapeHtml(project.organization || "未填写企业")} · ${escapeHtml(project.selections?.industry || "未选择行业")} · ${escapeHtml(project.selections?.product || "未选择产品")} · ${escapeHtml(project.selections?.process || "未选择工艺")}</p>
            <div class="project-stats">
              <div><span>活动数据</span><strong>${(project.ledgerRows || []).length}</strong></div>
              <div><span>活动排放</span><strong>${formatNumber(total)} <small>tCO₂e</small></strong></div>
              <div><span>最近更新</span><strong>${formatProjectTime(project.updatedAt)}</strong></div>
            </div>
            <div class="project-actions">
              <button class="button small primary" data-action="open-project" data-id="${project.id}">${active ? "返回项目总览" : project.isDemoData ? "打开演示" : "打开项目"}</button>
              <button class="button small ghost" data-action="duplicate-project" data-id="${project.id}">${icon("report")} 复制</button>
              ${project.isDemoData ? "" : `<button class="button small ghost danger" data-action="delete-project" data-id="${project.id}">删除</button>`}
            </div>
          </article>`;
        }).join("")}
      </div>
    ` : `
      <div class="card empty-page page-enter">
        ${icon("file")}
        <h2>还没有核算项目</h2>
        <p>新建第一个项目后，系统会在本机自动保存台账和后续所有情景参数。</p>
        <button class="button primary" data-action="new-project">${icon("plus")} 新建核算项目</button>
      </div>
    `}
    <section class="project-guide page-enter" aria-label="项目保存说明">
      <div><strong>独立项目快照</strong><p>台账、天平、成本、CBAM 和报告参数属于各自项目，不会互相覆盖。</p></div>
      <div><strong>自动保存在本机</strong><p>编辑结束或切换页面后写入当前浏览器的本地存储，刷新页面仍可恢复。建议定期导出项目备份。</p></div>
      <div><strong>完成与复制</strong><p>在报告中标记项目完成；复制项目可快速创建相似情景进行对比。</p></div>
    </section>
  `;
}

function calculateRowEmissions(row) {
  const amount = Number(row.amount) || 0;
  const factor = Number(row.factor) || 0;
  return (String(row.factorUnit || "").includes("kg") ? amount * factor / 1000 : amount * factor);
}

function getLedgerSourceSummary(type) {
  const rows = state.ledgerRows.filter((row) => {
    const text = `${row.name || ""} ${row.source || ""}`;
    if (type === "purchase") return /采购|发票|原料/.test(text);
    if (type === "energy") return /电力|电费|能源|蒸汽|燃气|燃料/.test(text);
    if (type === "logistics") return /物流|运输|运费|配送/.test(text);
    return false;
  });
  return {
    count: rows.length,
    emissions: rows.reduce((sum, row) => sum + Number(row.emissions || 0), 0)
  };
}

function refreshLedgerSourceCards() {
  document.querySelectorAll("[data-source-summary]").forEach((card) => {
    const summary = getLedgerSourceSummary(card.dataset.sourceSummary);
    const meta = card.querySelector("[data-source-meta]");
    const status = card.querySelector("[data-source-status]");
    if (meta) meta.textContent = `${summary.count} 项 · ${formatNumber(summary.emissions)} tCO₂e`;
    if (status) status.innerHTML = statusChip(summary.count ? "已录入" : "待填写", summary.count ? "" : "warning");
  });
}

function currentProductChoices() {
  return PRODUCT_CATALOG[state.selections.industry] || ["自定义产品"];
}

function currentProcessChoices() {
  return PROCESS_CATALOG[state.selections.industry] || ["自定义工艺"];
}

function wizardPage() {
  const step = state.wizardStep;
  return `
    ${pageHead("Guided Boundary / Step-by-step", "新建碳核算", "用结构化向导回答三个问题，自动生成专属核算边界与数据清单。",
      step > 1 ? `<button class="button" data-action="wizard-prev">返回上一步</button>` : ""
    )}
    <div class="card wizard-stepper page-enter">
      ${[
        [1, "企业信息"], [2, "产品与工艺"], [3, "核算参数"]
      ].map(([n, label]) => `
        <div class="wizard-step ${step > n ? "done" : step === n ? "active" : ""}">
          <span class="wizard-step-number">${step > n ? icon("check") : n}</span><span>${label}</span>
        </div>
      `).join("")}
    </div>

    <div class="wizard-layout page-enter">
      <article class="card selection-card">
        ${step === 1 ? `
          <div class="wizard-field-grid">
            <label class="wizard-field"><span>企业名称</span><input id="organization-input" type="text" maxlength="100" value="${escapeHtml(state.organization)}" placeholder="填写企业全称" autocomplete="organization" required></label>
            <label class="wizard-field"><span>统一社会信用代码</span><input id="organization-code-input" type="text" maxlength="30" value="${escapeHtml(state.organizationCode)}" placeholder="可不填"></label>
            <label class="wizard-field"><span>省份 / 地区</span><input id="province-input" type="text" list="province-options" maxlength="30" value="${escapeHtml(state.province)}" placeholder="例如：四川" required></label>
            <label class="wizard-field"><span>城市 / 基地</span><input id="city-input" type="text" maxlength="50" value="${escapeHtml(state.city)}" placeholder="例如：成都"></label>
          </div>
          <datalist id="province-options">${Object.keys(PROVINCE_FACTORS).map((province) => `<option value="${province}"></option>`).join("")}</datalist>
          <label class="wizard-field wide-field"><span>行业（可自由填写）</span><input id="industry-input" type="text" list="industry-options" maxlength="60" value="${escapeHtml(state.selections.industry)}" placeholder="输入或选择行业" required></label>
          <datalist id="industry-options">${INDUSTRY_CATALOG.map((item) => `<option value="${item.name}"></option>`).join("")}</datalist>
          <h2 class="selection-title">选择行业</h2>
          <div class="selection-grid">
            ${INDUSTRY_CATALOG.map((industry) => `
              <button class="selection-option ${state.selections.industry === industry.name ? "selected" : ""}" data-select="industry" data-value="${industry.name}" aria-pressed="${state.selections.industry === industry.name}">
                <span class="option-icon">${icon(industry.icon)}</span>
                <span><strong>${industry.name}</strong><p>${industry.description}</p></span>
                <span class="option-check">${icon("check")}</span>
              </button>
            `).join("")}
          </div>
        ` : step === 2 ? `
          <div class="wizard-field-grid">
            <label class="wizard-field"><span>核心产品（可自由填写）</span><input id="product-input" type="text" list="product-options" maxlength="80" value="${escapeHtml(state.selections.product)}" placeholder="输入或选择产品" required></label>
            <label class="wizard-field"><span>产品产量（t）</span><input id="product-output-input" type="number" min="0.01" step="0.01" value="${state.productOutput > 0 ? state.productOutput : ""}" placeholder="本周期合格产品产量" required></label>
          </div>
          <datalist id="product-options">${currentProductChoices().map((name) => `<option value="${name}"></option>`).join("")}</datalist>
          <h2 class="selection-title">常用产品</h2>
          <div class="selection-grid">
            ${currentProductChoices().map((name) => `
              <button class="selection-option ${state.selections.product === name ? "selected" : ""}" data-select="product" data-value="${name}" aria-pressed="${state.selections.product === name}">
                <span class="option-icon">${icon("leaf")}</span>
                <span><strong>${name}</strong><p>${state.selections.industry}产品目录</p></span>
                <span class="option-check">${icon("check")}</span>
              </button>
            `).join("")}
          </div>
          <label class="wizard-field wide-field"><span>核心工艺（可自由填写）</span><input id="process-input" type="text" list="process-options" maxlength="80" value="${escapeHtml(state.selections.process)}" placeholder="输入或选择工艺" required></label>
          <datalist id="process-options">${currentProcessChoices().map((name) => `<option value="${name}"></option>`).join("")}</datalist>
          <h2 class="selection-title">常用生产工艺</h2>
          <div class="selection-grid">
            ${currentProcessChoices().map((name) => `
              <button class="selection-option ${state.selections.process === name ? "selected" : ""}" data-select="process" data-value="${name}" aria-pressed="${state.selections.process === name}">
                <span class="option-icon">${icon("activity")}</span>
                <span><strong>${name}</strong><p>${state.selections.industry}工艺模板</p></span>
                <span class="option-check">${icon("check")}</span>
              </button>
            `).join("")}
          </div>
        ` : `
          <h2 class="selection-title">核算参数</h2>
          <div class="wizard-field-grid parameter-grid">
            <label class="wizard-field"><span>电力排放因子（kgCO₂/kWh）</span><input id="electricity-factor-input" type="number" min="0" step="0.0001" value="${state.electricityFactor}"></label>
            <label class="wizard-field"><span>项目碳价（元/tCO₂e）</span><input id="carbon-price-input" type="number" min="0" step="0.01" value="${state.carbonPrice}"></label>
            <label class="wizard-field"><span>欧盟 EUA 碳价（€/tCO₂e）</span><input id="eua-price-input" type="number" min="0" step="0.01" value="${state.cbamEuPrice}"><small class="fx-note" id="eua-price-cny">${formatCnyEquivalent(state.cbamEuPrice)}/t · ${EUR_CNY_NOTE}</small></label>
            <label class="wizard-field"><span>主要运输距离（km）</span><input id="transport-distance-input" type="number" min="0" step="1" value="${state.transportDistance}"></label>
            <label class="wizard-field"><span>数据截止日期</span><input id="data-as-of-input" type="date" value="${escapeHtml(state.dataAsOf)}" required></label>
            <label class="wizard-field"><span>CBAM 免费配额抵扣（%）</span><input id="free-allocation-input" type="number" min="0" max="100" step="0.1" value="${state.cbamFreeAllocation}"></label>
            <label class="wizard-field"><span>公路运输强度调整（t/t）</span><input id="road-adjustment-input" type="number" step="0.01" value="${state.roadEmissionAdjustment}"></label>
            <label class="wizard-field"><span>低碳线路强度调整（t/t）</span><input id="rail-adjustment-input" type="number" step="0.01" value="${state.railEmissionAdjustment}"></label>
            <label class="wizard-field wide-field"><span>高碳运输线路名称</span><input id="road-route-input" type="text" maxlength="100" value="${escapeHtml(state.roadRoute)}" placeholder="例如：山东 → 四川 · 公路运输"></label>
            <label class="wizard-field wide-field"><span>替代低碳线路名称</span><input id="rail-route-input" type="text" maxlength="100" value="${escapeHtml(state.railRoute)}" placeholder="例如：工厂 → 港口 · 公铁联运"></label>
          </div>
          <div class="summary-note">电力因子已根据地区自动匹配，可按企业实际绿电、区域因子或第三方核算口径修改。</div>
          <div class="count-list">
            <div class="flow-list-card"><h4>活动数据将由企业填写</h4><ul><li><i></i>原料与能源购入</li><li><i></i>电力与蒸汽消耗</li><li><i></i>运输与物流作业</li><li><i></i>自定义排放源</li></ul></div>
            <div class="flow-list-card output"><h4>输出与边界可调整</h4><ul><li><i></i>${escapeHtml(state.selections.product)}</li><li><i></i>副产品与固碳</li><li><i></i>废液与逸散</li><li><i></i>其他输出碳流</li></ul></div>
          </div>
        `}
        <div class="guide-info">
          <div><strong>标准内嵌</strong><p>行业标准直接翻译为核算字段</p></div>
          <div><strong>边界自动生成</strong><p>按产品与工艺匹配输入输出碳流</p></div>
          <div><strong>数据可追溯</strong><p>每个因子与结果都保留来源链路</p></div>
        </div>
      </article>

      <aside class="card wizard-summary">
        <label class="summary-field" for="project-name-input">项目名称
          <input id="project-name-input" type="text" maxlength="80" value="${escapeHtml(state.projectName)}" placeholder="例如：2026 Q4 产品核算">
        </label>
        <label class="summary-field" for="project-period-input">核算周期
          <input id="project-period-input" type="text" maxlength="24" value="${escapeHtml(state.projectPeriod)}" placeholder="例如：2026 Q4">
        </label>
        <div class="summary-orbit"><strong>${step}/3</strong></div>
        <h3>核算画像预览</h3>
        <p>已根据选择匹配标准核算模板</p>
        <div class="summary-list">
          <div><span>核算企业</span><strong>${escapeHtml(state.organization || "待填写")}</strong></div>
          <div><span>所在地区</span><strong>${escapeHtml([state.province, state.city].filter(Boolean).join(" / ") || "待填写")}</strong></div>
          <div><span>企业行业</span><strong>${escapeHtml(state.selections.industry || "待填写")}</strong></div>
          <div><span>核心产品</span><strong>${escapeHtml(state.selections.product || "待填写")}</strong></div>
          <div><span>生产工艺</span><strong>${escapeHtml(state.selections.process || "待填写")}</strong></div>
          <div><span>产品产量</span><strong>${state.productOutput > 0 ? `${formatNumber(state.productOutput, 2)} t` : "待填写"}</strong></div>
          <div><span>适用标准</span><strong>ISO 14067:2018</strong></div>
        </div>
        <div class="summary-note">系统将只展示该工艺必需的核算字段，避免企业面对无关指标与边界概念。</div>
        <p class="wizard-validation" id="wizard-validation" role="alert" hidden></p>
        <button class="button primary wide" data-action="${step < 3 ? "wizard-next" : "generate-boundary"}">
          ${step < 3 ? "下一步" : "创建项目并进入台账"} ${icon("arrow-right")}
        </button>
      </aside>
    </div>
  `;
}

function ledgerPage() {
  const ledgerTotal = getLedgerTotal();
  const purchaseSummary = getLedgerSourceSummary("purchase");
  const energySummary = getLedgerSourceSummary("energy");
  const logisticsSummary = getLedgerSourceSummary("logistics");
  return `
    ${pageHead("Activity Data / Ledger", "智能数据台账", "导入采购、能源与物流数据，系统自动完成字段映射、因子匹配与排放计算。",
      `<button class="button" data-action="go-wizard">${icon("plus")} 调整核算模板</button>`
    )}
    <div class="card upload-zone page-enter" id="upload-zone">
      <div class="upload-icon">${icon("upload")}</div>
      <div class="upload-copy"><strong>拖入标准化 CSV 活动台账</strong><p>支持 UTF-8 CSV · 字段：name, source, amount, unit, factor, factor_unit, emissions, status。因子单位支持 kgCO₂e/… 或 tCO₂e/…</p></div>
      <input type="file" id="file-input" hidden accept=".csv,text/csv">
      <div class="upload-actions">
        <button class="button" data-action="download-ledger-template">${icon("download")} 下载 CSV 模板</button>
        <button class="button primary" data-action="pick-file">${icon("upload")} 选择文件</button>
      </div>
    </div>

    <div class="source-grid page-enter">
      <button class="card source-card" type="button" data-action="add-source-data" data-value="purchase" data-source-summary="purchase">
        <span class="source-icon">${icon("file")}</span>
        <div><strong>采购发票</strong><span data-source-meta>${purchaseSummary.count} 项 · ${formatNumber(purchaseSummary.emissions)} tCO₂e</span><small>点击新增手动数据</small></div>
        <span data-source-status>${statusChip(purchaseSummary.count ? "已录入" : "待填写", purchaseSummary.count ? "" : "warning")}</span>
      </button>
      <button class="card source-card" type="button" data-action="add-source-data" data-value="energy" data-source-summary="energy">
        <span class="source-icon">${icon("activity")}</span>
        <div><strong>能源账单</strong><span data-source-meta>${energySummary.count} 项 · ${formatNumber(energySummary.emissions)} tCO₂e</span><small>点击新增手动数据</small></div>
        <span data-source-status>${statusChip(energySummary.count ? "已录入" : "待填写", energySummary.count ? "" : "warning")}</span>
      </button>
      <button class="card source-card" type="button" data-action="add-source-data" data-value="logistics" data-source-summary="logistics">
        <span class="source-icon">${icon("tree")}</span>
        <div><strong>物流运单</strong><span data-source-meta>${logisticsSummary.count} 项 · ${formatNumber(logisticsSummary.emissions)} tCO₂e</span><small>点击新增手动数据</small></div>
        <span data-source-status>${statusChip(logisticsSummary.count ? "已录入" : "待填写", logisticsSummary.count ? "" : "warning")}</span>
      </button>
    </div>
    <div class="public-data-banner page-enter">
      <span class="public-data-icon">${icon("globe")}</span>
      <div><strong>当前项目核算参数 · ${escapeHtml(state.organization)}</strong><p>碳价 ¥${state.carbonPrice.toFixed(2)}/t · ${escapeHtml(state.province)}电力 ${state.electricityFactor} kgCO₂/kWh · ICE EUA €${state.cbamEuPrice.toFixed(2)}/t（${formatCnyEquivalent(state.cbamEuPrice)}/t）</p></div>
      ${statusChip("自动保存在本机")}
    </div>

    <article class="card table-card page-enter">
      <div class="table-header">
        <div><h2>活动数据映射</h2><p>自动匹配并统一计量单位；排放量可直接修改，调整数量或因子后会恢复自动计算</p></div>
        <div class="toolbar-actions">
          <button class="button small" data-action="add-ledger-row">${icon("plus")} 新增活动数据</button>
          <button class="button small ghost" data-action="load-demo">${icon("spark")} 载入示例台账</button>
          <button class="button primary small" data-action="go-balance" ${state.ledgerRows.length ? "" : "disabled"}>${icon("scale")} 进入碳流校验</button>
        </div>
      </div>
      ${state.ledgerLoaded ? `
        ${state.ledgerRows.length ? `
          <p class="table-scroll-hint" role="note">左右滑动查看全部字段，右侧可修改排放量并删除数据。</p>
          <div class="table-wrap" tabindex="0" aria-label="活动数据映射表，可左右滚动">
            <table class="editable-table">
              <thead><tr><th>数据项</th><th>来源</th><th>数量</th><th>单位</th><th>排放因子</th><th>因子单位</th><th>排放量 (tCO₂e)</th><th>状态</th><th>操作</th></tr></thead>
              <tbody>
                ${state.ledgerRows.map((row, index) => `<tr data-ledger-row="${index}">
                  <td><input class="table-input" data-ledger-index="${index}" data-ledger-field="name" value="${escapeHtml(row.name)}" aria-label="第 ${index + 1} 行数据项" maxlength="80"></td>
                  <td><input class="table-input" data-ledger-index="${index}" data-ledger-field="source" value="${escapeHtml(row.source)}" aria-label="第 ${index + 1} 行数据来源" maxlength="80"></td>
                  <td><input class="table-input numeric" data-ledger-index="${index}" data-ledger-field="amount" type="number" min="0" step="0.01" value="${Number(row.amount) || 0}" aria-label="第 ${index + 1} 行活动数量"></td>
                  <td><input class="table-input compact" data-ledger-index="${index}" data-ledger-field="unit" value="${escapeHtml(row.unit)}" aria-label="第 ${index + 1} 行数量单位" maxlength="24"></td>
                  <td><input class="table-input numeric" data-ledger-index="${index}" data-ledger-field="factor" type="number" min="0" step="0.0001" value="${Number(row.factor) || 0}" aria-label="第 ${index + 1} 行排放因子"></td>
                  <td><input class="table-input" data-ledger-index="${index}" data-ledger-field="factorUnit" value="${escapeHtml(row.factorUnit)}" aria-label="第 ${index + 1} 行排放因子单位" maxlength="32"></td>
                  <td class="num">
                    <input class="table-input numeric emissions-input" data-ledger-index="${index}" data-ledger-field="emissions" data-manual="${row.emissionsManual ? "true" : "false"}" type="number" min="0" step="0.01" value="${Number(row.emissions || 0).toFixed(2)}" aria-label="第 ${index + 1} 行排放量，可直接修改" title="可直接填写排放量；修改数量、排放因子或因子单位后会重新自动计算">
                  </td>
                  <td>
                    <select class="table-select" data-ledger-index="${index}" data-ledger-field="status" aria-label="第 ${index + 1} 行匹配状态">
                      <option value="已映射" ${row.status === "已映射" ? "selected" : ""}>已映射</option>
                      <option value="待确认" ${row.status === "待确认" ? "selected" : ""}>待确认</option>
                    </select>
                  </td>
                  <td><button class="icon-button compact-action" data-action="delete-ledger-row" data-index="${index}" aria-label="删除第 ${index + 1} 行数据">${icon("close")}</button></td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <span data-ledger-count-text>${state.ledgerRows.length} 项活动数据 · ${state.ledgerRows.filter((row) => row.status === "待确认").length} 项需人工确认 · 修改后自动保存在本机</span>
            <span class="ledger-total">核算活动排放 <strong data-ledger-total>${formatNumber(ledgerTotal)} tCO₂e</strong></span>
          </div>
        ` : `
          <div class="ledger-empty">
            ${icon("plus")}
            <strong>还没有活动数据</strong>
            <p>手动新增第一行，或导入 CSV 台账。数据只会写入当前项目。</p>
            <button class="button primary small" data-action="add-ledger-row">${icon("plus")} 新增活动数据</button>
          </div>
        `}
      ` : `
        <div class="table-empty">${icon("file")}<div>暂无已解析台账</div><div style="margin-top:6px;color:#455e53">载入最新公开数据，或拖入自己的 CSV 台账</div></div>
      `}
    </article>
  `;
}

function getBalanceMetrics() {
  const input = normalizeBalanceValue(state.balanceMass.input);
  const product = normalizeBalanceValue(state.balanceMass.product);
  const waste = normalizeBalanceValue(state.balanceMass.waste);
  const byproductLoss = normalizeBalanceValue(state.balanceMass.byproductLoss);
  const output = product + waste + byproductLoss;
  const difference = input - output;
  const hasInput = input > 0;
  const hasOutput = output > 0;
  const balanced = hasInput && hasOutput && Math.abs(difference) < 0.05;
  const completeness = input > 0
    ? Math.max(62, Math.min(98.6, 96.4 - Math.abs(difference) / input * 72 - (waste <= 0 ? 2.1 : 0)))
    : 0;
  const issue = !hasInput && !hasOutput
    ? "empty"
    : !hasOutput
      ? "missingOutput"
      : balanced
    ? "balanced"
    : difference < 0
      ? "outputExcess"
      : waste <= 0.05
        ? "missingWaste"
        : "inputExcess";
  return {
    input,
    product,
    waste,
    byproductLoss,
    output,
    difference,
    balanced,
    completeness,
    issue,
    processEmissions: balanced ? getLedgerTotal() : null
  };
}

function getMappedLedgerCount() {
  return state.ledgerRows.filter((row) => row.status === "已映射").length;
}

function getProjectCompletionIssues() {
  const issues = [];
  const mappedRows = getMappedLedgerCount();
  if (!state.ledgerRows.length) {
    issues.push("至少录入一项活动数据");
  } else if (mappedRows !== state.ledgerRows.length) {
    issues.push(`${state.ledgerRows.length - mappedRows} 项活动数据仍待确认`);
  }
  if (!String(state.organization || "").trim()) issues.push("填写企业名称");
  if (!String(state.province || "").trim()) issues.push("填写省份或地区");
  if (!String(state.selections?.industry || "").trim()) issues.push("填写行业");
  if (!String(state.selections?.product || "").trim()) issues.push("填写核算产品");
  if (!String(state.selections?.process || "").trim()) issues.push("填写核心工艺");
  if (!(Number(state.productOutput) > 0)) issues.push("填写有效产品产量");
  if (!state.dataAsOf) issues.push("填写数据截止日期");
  if (!getBalanceMetrics().balanced) issues.push("完成碳流天平闭合校验");
  return issues;
}

function normalizeBalanceValue(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? Math.max(0, numeric) : 0;
}

function updateBalanceValue(key, rawValue) {
  if (!BALANCE_KEYS.includes(key)) return null;
  const numeric = Number(rawValue);
  if (!Number.isFinite(numeric)) return state.balanceMass[key];
  state.balanceMass[key] = Math.max(0, numeric);
  state.includeWasteCarbon = state.balanceMass.waste > 0;
  markProjectActive();
  return state.balanceMass[key];
}

function getBalancePresentation(metrics, conversion = 1, unit = "tC") {
  const amount = formatNumber(Math.abs(metrics.difference) * conversion, 1);
  if (metrics.issue === "empty") {
    return {
      status: "等待录入碳流",
      outputState: "未填报",
      result: "尚未录入质量平衡所需数据",
      title: "等待碳流数据",
      copy: "请填写输入碳、产品固碳、副产品固碳和废液固碳，系统才能完成校验。",
      check: "请录入输入与输出碳流",
      processStatus: "未开始",
      processCopy: "质量平衡未完成，过程排放暂不可计算。",
      action: "fill-balance",
      buttonLabel: "继续填写碳流"
    };
  }
  if (metrics.issue === "missingOutput") {
    return {
      status: "输出碳流未填写",
      outputState: "输出未填写",
      result: `输入端已填写 ${formatNumber(metrics.input * conversion, 1)} ${unit}，请补充输出端`,
      title: "输出碳流不完整",
      copy: "请填写产品固碳、副产品固碳和废液固碳，避免将全部输入碳误判为逸散。",
      check: "请补充产品、副产品和废液固碳",
      processStatus: "待校验",
      processCopy: "质量平衡未完成，过程排放暂不可计算。",
      action: "fill-balance",
      buttonLabel: "继续填写碳流"
    };
  }
  if (metrics.balanced) {
    return {
      status: "天平已平衡",
      outputState: "已闭合",
      result: "守恒通过 · 质量差异 0.00%",
      title: "核算边界可靠",
      copy: "联产品与副产品已按碳质量守恒拆分，未发现重复计量。",
      check: "输入与输出碳量完全守恒",
      processStatus: "可入账",
      processCopy: "采用质量平衡法，避免把已固存于副产物中的碳重复计为逸散排放。",
      action: "next",
      buttonLabel: "进入业财穿透"
    };
  }
  if (metrics.issue === "outputExcess") {
    return {
      status: "输出侧偏多",
      outputState: "输出偏多",
      result: `输出侧多出 ${amount} ${unit}，请检查重复计量或固碳数据`,
      title: "输出侧数据偏多",
      copy: `输出固碳比输入原料碳多 ${amount} ${unit}，常见原因是重复计入副产物或固碳量。`,
      check: "请检查副产物是否被重复计入",
      processStatus: "待校验",
      processCopy: "碳流尚未闭合，过程排放结果暂停输出，暂不可入账。",
      action: "reset-balance",
      buttonLabel: state.isDemoData ? "恢复基准值" : "清空后重填"
    };
  }
  if (metrics.issue === "missingWaste") {
    return {
      status: "缺少废液碳流",
      outputState: "缺废液碳流",
      result: `输入端多出 ${amount} ${unit}，废液碳流尚未闭合`,
      title: "输出碳流未闭合",
      copy: `废液含碳量缺失，输出端少计 ${amount} ${unit}。`,
      check: "请补录废液含碳量后重新校验",
      processStatus: "待校验",
      processCopy: "碳流尚未闭合，过程排放结果暂停输出，暂不可入账。",
      action: "auto-add-waste",
      buttonLabel: "补录废液碳流"
    };
  }
  return {
    status: "输入侧偏多",
    outputState: "输入偏多",
    result: `输入端多出 ${amount} ${unit}，请检查漏算的输出碳流`,
    title: "输入侧数据偏多",
    copy: `输入与输出碳量相差 ${amount} ${unit}，请检查逸散排放或其他输出碳流是否遗漏。`,
    check: "请检查漏算的逸散或其他输出碳流",
    processStatus: "待校验",
    processCopy: "碳流尚未闭合，过程排放结果暂停输出，暂不可入账。",
    action: "reset-balance",
    buttonLabel: state.isDemoData ? "恢复基准值" : "清空后重填"
  };
}

function balancePage() {
  const metrics = getBalanceMetrics();
  const conversion = state.balanceMode === "CO₂当量" ? 44 / 12 : 1;
  const unit = state.balanceMode === "CO₂当量" ? "tCO₂e" : "tC";
  const presentation = getBalancePresentation(metrics, conversion, unit);
  const { input, product, waste } = state.balanceMass;
  const mappedRows = state.ledgerRows.filter((row) => row.status === "已映射").length;
  const factorRows = state.ledgerRows.filter((row) => Number(row.factor) > 0).length;
  const ledgerCarbonEquivalent = getLedgerTotal() * CO2_TO_CARBON_FACTOR;
  const balanceMax = Math.max(2500, Math.ceil(Math.max(input, product, waste, state.balanceMass.byproductLoss) * 1.2 / 100) * 100);
  return `
    ${pageHead("Mass Balance / Boundary Integrity", "碳流天平", "基于质量守恒校验输入与输出碳流，从机制上发现漏算、重复计算与边界错误。",
      `<span class="period-chip"><span></span> 软件版本 ${SOFTWARE_VERSION}</span>`
    )}
    <div class="card balance-toolbar page-enter">
      <div class="toolbar-copy">${icon("info")} 当前边界：${escapeHtml(state.selections.product)} · ${escapeHtml(state.selections.process)} · ${escapeHtml(state.city || state.province)} · ${escapeHtml(state.projectPeriod)} · ${state.ledgerRows.length} 条活动数据</div>
      <div class="toolbar-actions">
        <button class="button small" data-action="import-ledger-to-balance">${icon("download")} 从台账带入排放总量</button>
        <div class="segmented">
          ${["质量平衡", "CO₂当量"].map(mode => `<button class="${state.balanceMode === mode ? "active" : ""}" data-action="balance-mode" data-value="${mode}" aria-pressed="${state.balanceMode === mode}">${mode}</button>`).join("")}
        </div>
        <button class="button small" data-action="rerun-balance">${icon("activity")} 重新校验</button>
      </div>
    </div>

    <div class="balance-layout page-enter">
      <article class="card balance-hero">
        <div class="balance-status-head">
          <div><h2>输入 / 输出碳质量守恒</h2><p>质量平衡法 · 碳元素 kgC → CO₂当量</p></div>
          <span id="balance-status">${statusChip(presentation.status, metrics.balanced ? "" : "warning")}</span>
        </div>
        <div class="scale-stage ${metrics.balanced ? "" : "imbalanced"}" id="scale-stage">
          <div class="scale-beam"></div>
          <div class="scale-pivot"></div>
          <div class="scale-pan left">
            <div class="pan-wire"></div>
            <div class="pan-tray"><span>输入端 · 原料与能源含碳</span><strong><span id="input-mass">${(input * conversion).toFixed(1)}</span><small>${unit}</small></strong><div class="pan-badge"><span>输入端合计</span><b id="input-state">${input > 0 ? "已录入" : "待填写"}</b></div></div>
          </div>
          <div class="scale-pan right">
            <div class="pan-wire"></div>
            <div class="pan-tray"><span>输出端 · 产品 / 副产品 / 逸散</span><strong><span id="output-mass">${(metrics.output * conversion).toFixed(1)}</span><small>${unit}</small></strong><div class="pan-badge"><span>输出端合计</span><b id="output-state">${presentation.outputState}</b></div></div>
          </div>
        </div>
        <div class="balance-result ${metrics.balanced ? "" : "error"}" id="balance-result">
          <span class="balance-result-icon" aria-hidden="true">${icon(metrics.balanced ? "check" : "alert")}</span>
          <span id="balance-result-copy">${presentation.result}</span>
        </div>
        <p class="balance-conversion-note">${icon("info")} 台账排放以 tCO₂e 记录；质量平衡输入为 tC（碳元素），换算关系为 1 tC = ${formatNumber(44 / 12, 4)} tCO₂e。当前台账约合 ${formatNumber(ledgerCarbonEquivalent, 2)} tC，带入后仍需按实际工艺拆分产品、副产品与废液固碳。</p>
        <div class="balance-controls">
          <div class="balance-control"><label>输入碳量 <strong id="input-value">${(input * conversion).toFixed(1)} ${unit}</strong></label><div class="balance-entry"><input type="number" min="0" step="0.1" data-balance-number="0" data-conversion="${conversion}" value="${(input * conversion).toFixed(1)}" aria-label="输入碳量数值"><span>${unit}</span></div><input class="range" data-balance-index="0" type="range" min="0" max="${balanceMax}" step="0.1" value="${input}" aria-label="输入碳量滑块"></div>
          <div class="balance-control"><label>产品固碳 <strong id="product-value">${(product * conversion).toFixed(1)} ${unit}</strong></label><div class="balance-entry"><input type="number" min="0" step="0.1" data-balance-number="1" data-conversion="${conversion}" value="${(product * conversion).toFixed(1)}" aria-label="产品固碳数值"><span>${unit}</span></div><input class="range" data-balance-index="1" type="range" min="0" max="${balanceMax}" step="0.1" value="${product}" aria-label="产品固碳滑块"></div>
          <div class="balance-control"><label>副产品固碳 <strong id="byproduct-value">${(state.balanceMass.byproductLoss * conversion).toFixed(1)} ${unit}</strong></label><div class="balance-entry"><input type="number" min="0" step="0.1" data-balance-number="3" data-conversion="${conversion}" value="${(state.balanceMass.byproductLoss * conversion).toFixed(1)}" aria-label="副产品固碳数值"><span>${unit}</span></div><input class="range" data-balance-index="3" type="range" min="0" max="${balanceMax}" step="0.1" value="${state.balanceMass.byproductLoss}" aria-label="副产品固碳滑块"></div>
          <div class="balance-control"><label>废液含碳 <strong id="waste-value">${(waste * conversion).toFixed(1)} ${unit}</strong></label><div class="balance-entry"><input type="number" min="0" step="0.1" data-balance-number="2" data-conversion="${conversion}" value="${(waste * conversion).toFixed(1)}" aria-label="废液含碳数值"><span>${unit}</span></div><input class="range" data-balance-index="2" type="range" min="0" max="${balanceMax}" step="0.1" value="${waste}" aria-label="废液含碳滑块"></div>
        </div>
        <div class="balance-proof">
          <div><span>守恒公式</span><strong>输入碳 = 产品 + 副产品 + 废液 + 逸散</strong></div>
          <div><span>当前差异</span><strong id="proof-difference" class="${metrics.balanced ? "" : "warning-text"}">${metrics.balanced ? `0.0 ${unit}` : `${metrics.difference < 0 ? "输出端" : "输入端"} +${formatNumber(Math.abs(metrics.difference) * conversion, 1)} ${unit}`}</strong></div>
          <div><span>处理建议</span><strong id="proof-advice">${metrics.balanced ? "可进入成本分摊" : presentation.check}</strong></div>
        </div>
      </article>

      <aside class="balance-side">
        <article class="card integrity-card">
          <div class="card-heading"><div>${icon("check")}<h3>边界完整性</h3></div><span class="status-chip" id="integrity-score">${metrics.completeness.toFixed(1)}%</span></div>
          <div class="integrity-score">
            <div class="score-ring ${metrics.completeness === 0 ? "pending" : ""}" id="score-ring" style="--score:${metrics.completeness.toFixed(1)}%"><div class="score-ring-label"><strong id="score-grade">${metrics.completeness === 0 ? "—" : metrics.balanced ? "A" : "B"}</strong><span>完整性评级</span></div></div>
            <div class="score-copy"><strong id="score-title">${presentation.title}</strong><p id="score-copy">${presentation.copy}</p></div>
          </div>
          <div class="checklist">
            <div class="check-item"><span class="check-icon">${icon("check")}</span><div><strong>行业边界模板</strong><p>${escapeHtml(state.selections.industry || "待填写")} · ${escapeHtml(state.selections.product || "待填写")} · ${escapeHtml(state.selections.process || "待填写")}</p></div></div>
            <div class="check-item ${mappedRows === state.ledgerRows.length && state.ledgerRows.length ? "" : "warn"}"><span class="check-icon">${icon(mappedRows === state.ledgerRows.length && state.ledgerRows.length ? "check" : "alert")}</span><div><strong>活动数据覆盖</strong><p>${mappedRows} / ${state.ledgerRows.length} 项活动数据已映射</p></div></div>
            <div class="check-item ${metrics.balanced ? "" : "warn"}" id="balance-check-item"><span class="check-icon">${icon(metrics.balanced ? "check" : "alert")}</span><div><strong>碳质量闭合</strong><p id="balance-check-copy">${presentation.check}</p></div></div>
          </div>
        </article>
        <article class="card checklist-card">
          <div class="card-heading"><div>${icon("activity")}<h3>本期过程排放</h3></div></div>
          <div class="emissions-result" style="margin-top:17px">
            <div><span>核算结果</span><strong id="process-emissions">${metrics.balanced ? metrics.processEmissions.toFixed(1) : "—"}</strong><small>tCO₂e</small></div>
            <span id="emissions-status">${statusChip(presentation.processStatus, metrics.balanced ? "" : "warning")}</span>
          </div>
          <p id="emissions-copy">${presentation.processCopy}</p>
          <button class="button wide ${metrics.balanced ? "primary" : "action-warning"}" id="balance-next" style="margin-top:17px" ${presentation.action === "next" ? 'data-route="cost"' : `data-action="${presentation.action}"`}>${presentation.buttonLabel} ${icon("arrow-right")}</button>
        </article>
      </aside>
    </div>
    <div class="balance-audit card page-enter">
      <div class="audit-title">${icon("activity")} 核算链路</div>
      <div class="audit-step ${mappedRows === state.ledgerRows.length && state.ledgerRows.length ? "complete" : ""}"><span>01</span><div><strong>活动数据映射</strong><small>${mappedRows} / ${state.ledgerRows.length} 项完成</small></div></div>
      <i></i>
      <div class="audit-step ${factorRows === state.ledgerRows.length && state.ledgerRows.length ? "complete" : ""}"><span>02</span><div><strong>排放因子匹配</strong><small>${factorRows} 个因子已填写</small></div></div>
      <i></i>
      <div class="audit-step ${metrics.balanced ? "complete" : ""}" id="audit-balance"><span>03</span><div><strong>碳质量守恒</strong><small>${metrics.balanced ? "差异 0.00%" : "等待补录"}</small></div></div>
      <i></i>
      <div class="audit-step ${metrics.balanced ? "complete" : ""}" id="audit-entry"><span>04</span><div><strong>结果可入账</strong><small>${metrics.balanced ? "已通过校验" : "暂不可入账"}</small></div></div>
    </div>
  `;
}

function treeNode(id, name, sub, value, children = "", extra = "") {
  const expanded = state.expandedNodes.has(id);
  const selected = state.selectedTreeNode === id;
  return `
    <div class="tree-node ${selected ? "active" : ""}">
      <button class="tree-row ${expanded ? "expanded" : ""} ${selected ? "selected" : ""}" data-tree="${id}" aria-expanded="${expanded}" aria-controls="${id}-children">
        ${icon("chevron-right")}
        <span class="tree-name"><strong>${name}</strong><span>${sub}</span></span>
        <span class="tree-value">${value}</span>${extra}
      </button>
      <div class="tree-children" id="${id}-children" ${expanded ? "" : "hidden"}>${children}</div>
    </div>
  `;
}

function costPage() {
  const methods = ["按重量", "按里程", "按货值"];
  const costs = getCostMetrics();
  const baseCosts = getCostMetrics("按重量");
  const methodDeltaValue = baseCosts.transport > 0 ? (costs.transport - baseCosts.transport) / baseCosts.transport * 100 : 0;
  const methodDelta = Math.abs(methodDeltaValue) < 0.05 ? "基准方法" : `${methodDeltaValue > 0 ? "+" : ""}${methodDeltaValue.toFixed(1)}%`;
  const percentages = [costs.process, costs.transport, costs.electricity, costs.material].map((cost) =>
    `${costs.total ? (cost / costs.total * 100).toFixed(1) : 0}%`
  );
  const activeCostCategories = [costs.process, costs.transport, costs.electricity, costs.material].filter((cost) => cost > 0).length;
  const costParts = [costs.process, costs.transport, costs.electricity, costs.material].map((cost) => costs.total ? cost / costs.total * 100 : 0);
  const nodeInfo = {
    total: [`${state.selections.product || "核算产品"}碳成本`, `全部活动 · ${state.costMethod}`, costs.total],
    scope1: ["范围一 · 直接排放", "工艺与供热", costs.scope1],
    process: ["工艺过程排放", "活动台账分摊", costs.scope1 * 0.64],
    boiler: ["蒸汽与供热", "能源台账", costs.scope1 * 0.36],
    scope2: ["范围二 · 外购能源", "电力排放", costs.scope2],
    electricity: ["外购电力", `${state.province}电力因子`, costs.electricity],
    scope3: ["范围三 · 价值链", "物流与原料", costs.scope3],
    roadRoute: [state.roadRoute, "物流运单 · 当前项目线路", costs.transport],
    materialRoute: ["原料隐含碳", "采购与原料活动", costs.material]
  };
  const [detailName, detailSub, detailCost] = nodeInfo[state.selectedTreeNode] || nodeInfo.total;
  const detail = {
    name: detailName,
    sub: `${detailSub} · ${state.costMethod}`,
    cost: `¥ ${formatNumber(detailCost, 2)}万`,
    total: `¥ ${formatNumber(detailCost * 10000 / Math.max(1, state.productOutput), 0)}/t`,
    delta: state.selectedTreeNode === "roadRoute" ? methodDelta : "—"
  };
  const roadEmissions = state.ledgerRows.filter((row) => classifyLedgerRow(row) === "transport").reduce((sum, row) => sum + Number(row.emissions || 0), 0);
  const routeImprovementShare = Math.min(0.8, Math.max(0, (state.roadEmissionAdjustment - state.railEmissionAdjustment) / Math.max(0.01, state.cbamIntensity + state.roadEmissionAdjustment)));
  return `
    ${pageHead("Activity-Based Costing / Traceability", "业财穿透", "把碳排放沿作业、线路与订单逐层分摊，解释每一元碳成本从哪里来。",
      `<button class="button" data-action="export-cost-csv">${icon("download")} 导出分摊明细</button>`
    )}
    <div class="card cost-toolbar page-enter">
      <div class="toolbar-copy">${icon("tree")} 成本追踪对象：${escapeHtml(state.projectPeriod)} · ${state.ledgerRows.length} 条活动数据 · ${activeCostCategories} 个成本类别</div>
      <div class="segmented">${methods.map(method => `<button class="${state.costMethod === method ? "active" : ""}" data-action="cost-method" data-value="${method}" aria-pressed="${state.costMethod === method}">${method}分摊</button>`).join("")}</div>
    </div>
    <div class="cost-layout page-enter">
      <article class="card tree-card">
        <div class="card-heading"><div>${icon("tree")}<h3>成本溯源树</h3></div><small>${state.costMethod}</small></div>
        <div class="tree">
          ${treeNode("total", `${escapeHtml(state.selections.product)} 碳成本`, `${escapeHtml(state.projectPeriod)} · 全部订单`, `¥ ${formatNumber(costs.total, 2)}万`,
            treeNode("scope1", "范围一 · 直接排放", "工艺与供热", `¥ ${formatNumber(costs.scope1, 2)}万`,
              treeNode("process", "工艺过程排放", "活动台账分摊", `¥ ${formatNumber(costs.scope1 * 0.64, 2)}万`) +
              treeNode("boiler", "蒸汽与供热", "能源台账", `¥ ${formatNumber(costs.scope1 * 0.36, 2)}万`)
            ) +
            treeNode("scope2", "范围二 · 外购能源", "电力排放", `¥ ${formatNumber(costs.scope2, 2)}万`,
              treeNode("electricity", "外购电力", `${escapeHtml(state.province)}电力因子`, `¥ ${formatNumber(costs.electricity, 2)}万`)
            ) +
            treeNode("scope3", "范围三 · 价值链", "物流与原料", `¥ ${formatNumber(costs.scope3, 2)}万`,
              treeNode("roadRoute", escapeHtml(state.roadRoute), "当前项目运输线路", `¥ ${formatNumber(costs.transport, 2)}万`, "", methodDeltaValue > 0 ? `<span class="tree-risk">${methodDelta}</span>` : "") +
              treeNode("materialRoute", "原料隐含碳", "采购与原料活动", `¥ ${formatNumber(costs.material, 2)}万`)
            )
          )}
        </div>
      </article>

      <div class="cost-detail">
        <article class="card detail-head-card">
          <div class="detail-top">
            <div class="order-title"><strong>${detail.name}</strong><p>${detail.sub}</p></div>
            ${statusChip(state.selectedTreeNode === "roadRoute" ? "高碳线路" : state.selectedTreeNode.startsWith("scope") ? "范围汇总" : "已穿透", state.selectedTreeNode === "roadRoute" ? "warning" : "")}
          </div>
          <div class="detail-kpis">
            <div class="detail-kpi"><span>可归集碳成本</span><strong>${detail.cost}</strong></div>
            <div class="detail-kpi"><span>单位产品碳成本</span><strong class="green">${detail.total}</strong></div>
            <div class="detail-kpi"><span>${state.selectedTreeNode === "roadRoute" ? "较重量分摊基准" : "当前节点属性"}</span><strong style="color:${state.selectedTreeNode === "roadRoute" && methodDeltaValue > 0 ? "#ffbd5c" : "#23d996"}">${detail.delta}</strong></div>
          </div>
        </article>

        <article class="card breakdown-card">
          <div class="card-heading"><div>${icon("activity")}<h3>碳成本构成</h3></div><small>单位：万元</small></div>
          <div class="breakdown-body">
            <div class="cost-donut">
              ${segmentedRing(costParts, 140, ["var(--green)", "var(--cyan)", "var(--amber)", "#66736e"])}
              <div class="cost-donut-label"><span>单位成本</span><strong>¥${formatNumber(costs.unit, 0)}/t</strong></div>
            </div>
            <div class="cost-list">
              ${[
                ["工艺过程排放", `¥ ${formatNumber(costs.process, 2)}`, percentages[0], "#00ff88"],
                ["运输作业", `¥ ${formatNumber(costs.transport, 2)}`, percentages[1], "#00e5ff"],
                ["外购电力", `¥ ${formatNumber(costs.electricity, 2)}`, percentages[2], "#ffbd5c"],
                ["原料隐含碳", `¥ ${formatNumber(costs.material, 2)}`, percentages[3], "#9d8cff"]
              ].map(([name, value, pct, color]) => `<div class="cost-list-row"><span>${name}</span><strong>${value}</strong><div class="cost-bar"><i style="--w:${pct};--c:${color}"></i></div></div>`).join("")}
            </div>
          </div>
        </article>

        <div class="suggestion-banner">
          <span class="suggestion-icon">${icon("spark")}</span>
          <div><strong>AI 降碳建议 · ${escapeHtml(state.railRoute)}可减少 ${formatNumber(roadEmissions * routeImprovementShare)} tCO₂e</strong><p>按当前台账和线路强度测算，可降低运输碳成本约 ¥${formatNumber(costs.transport * routeImprovementShare, 2)} 万。</p></div>
          <button class="button small cyan" data-action="apply-route">一键测算</button>
        </div>
      </div>
    </div>
  `;
}

function computeCBAM() {
  const domesticPriceEur = state.carbonPrice / EUR_CNY_RATE;
  const coveredShare = Math.max(0, Math.min(1, 1 - state.cbamFreeAllocation / 100));
  const roadIntensity = Math.max(0, state.cbamIntensity + state.roadEmissionAdjustment);
  const railIntensity = Math.max(0, state.cbamIntensity + state.railEmissionAdjustment);
  const roadDuty = Math.max(0, Math.round(state.cbamVolume * roadIntensity * (state.cbamEuPrice - domesticPriceEur) * coveredShare));
  const railDuty = Math.max(0, Math.round(state.cbamVolume * railIntensity * (state.cbamEuPrice - domesticPriceEur) * coveredShare));
  const targetDuty = Math.max(0, Math.round(state.cbamVolume * railIntensity * 0.8 * (state.cbamEuPrice - domesticPriceEur) * coveredShare));
  const duty = state.selectedRoute === "rail" ? railDuty : roadDuty;
  const embedded = state.cbamVolume * (state.selectedRoute === "rail" ? railIntensity : roadIntensity);
  return {
    duty,
    roadDuty,
    railDuty,
    targetDuty,
    embedded,
    unitDuty: state.cbamVolume > 0 ? duty / state.cbamVolume * EUR_CNY_RATE : 0,
    deltaPercent: roadDuty > 0 ? (duty - roadDuty) / roadDuty * 100 : 0,
    saving: roadDuty - railDuty,
    domesticPriceEur,
    coveredShare
  };
}

function getCBAMOutcome(result, optimized) {
  if (state.cbamVolume <= 0) {
    return {
      status: "等待填写",
      tone: "warning",
      delta: "填写出口欧盟数量后开始测算"
    };
  }
  if (result.roadDuty <= 0) {
    return {
      status: "无需补缴",
      tone: "",
      delta: "当前碳价与配额参数下无需补缴"
    };
  }
  return optimized
    ? {
        status: "方案已优化",
        tone: "",
        delta: `低碳方案降低 €${result.saving.toLocaleString("en-US")}（${formatCnyEquivalent(result.saving)}）`
      }
    : {
        status: "高风险",
        tone: "warning",
        delta: "当前为公路运输基准情景"
      };
}

function getCBAMChartScale(result) {
  const maxDuty = Math.max(result.roadDuty, result.railDuty, result.targetDuty, 0);
  const target = Math.max(maxDuty * 1.1, 100000);
  const magnitude = 10 ** Math.floor(Math.log10(target));
  const normalized = target / magnitude;
  const niceStep = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return niceStep * magnitude;
}

function cbamPage() {
  const result = computeCBAM();
  const optimized = state.selectedRoute === "rail";
  const outcome = getCBAMOutcome(result, optimized);
  const comparisonScale = getCBAMChartScale(result);
  const roadRatio = result.roadDuty / comparisonScale * 100;
  const railRatio = result.railDuty / comparisonScale * 100;
  const targetRatio = result.targetDuty / comparisonScale * 100;
  const comparisonEmptyCopy = state.cbamVolume <= 0
    ? "填写出口欧盟数量后，这里会显示三种运输方案的关税差异。"
    : "当前参数下应补缴关税为 €0（≈ ¥0.00），三种方案没有可比较的关税差异。";
  return `
    ${pageHead("EU CBAM / Scenario Simulator", "CBAM 关税模拟", "把出口订单的隐含碳排放翻译成可预期的合规成本，提前评估市场与物流方案。",
      `<button class="button" data-action="export-cbam-csv">${icon("download")} 导出测算结果</button>`
    )}
    <div class="cbam-layout page-enter">
      <article class="card simulator-card">
        <h2>出口情景参数</h2>
        <p>${state.isDemoData ? "当前为演示项目，参数调整后结果区会实时更新。" : "请按实际出口订单和核算口径填写，结果区会实时更新。"}</p>
        <div class="field">
          <label>出口欧盟数量 <strong id="volume-value">${state.cbamVolume} t</strong></label>
          <input id="cbam-volume" type="number" min="0" step="0.01" value="${state.cbamVolume}" aria-label="出口欧盟数量">
        </div>
        <div class="field">
          <label>欧盟碳价（EUA） <strong id="price-value">€ ${state.cbamEuPrice.toFixed(2)} / t</strong></label>
          <input id="cbam-price" type="number" min="0" step="0.01" value="${state.cbamEuPrice}" aria-label="欧盟碳价">
          <small class="fx-note" id="price-cny">${formatCnyEquivalent(state.cbamEuPrice)} / t · ${EUR_CNY_NOTE}</small>
        </div>
        <div class="field">
          <label>产品综合碳强度 <strong id="intensity-value">${state.cbamIntensity.toFixed(2)} tCO₂e/t</strong></label>
          <input id="cbam-intensity" type="number" min="0" step="0.01" value="${state.cbamIntensity}" aria-label="产品综合碳强度">
        </div>
        <div class="field">
          <label>免费配额抵扣 <strong id="free-allocation-value">${state.cbamFreeAllocation.toFixed(1)}%</strong></label>
          <input class="range" id="cbam-free-allocation" type="range" min="0" max="100" step="0.1" value="${state.cbamFreeAllocation}" aria-label="CBAM 免费配额抵扣比例">
        </div>
        <div class="field">
          <label>运输方案</label>
          <div class="route-selector">
            <label class="route-option ${state.selectedRoute === "road" ? "selected" : ""}"><input type="radio" name="route" value="road" ${state.selectedRoute === "road" ? "checked" : ""}><span>${escapeHtml(state.roadRoute)}</span><span>${state.roadEmissionAdjustment >= 0 ? "+" : ""}${state.roadEmissionAdjustment.toFixed(2)} t/t</span></label>
            <label class="route-option ${state.selectedRoute === "rail" ? "selected" : ""}"><input type="radio" name="route" value="rail" ${state.selectedRoute === "rail" ? "checked" : ""}><span>${escapeHtml(state.railRoute)}</span><span>${state.railEmissionAdjustment >= 0 ? "+" : ""}${state.railEmissionAdjustment.toFixed(2)} t/t</span></label>
          </div>
        </div>
        <button class="button primary wide" data-action="calculate-cbam">${icon("activity")} 重新计算风险</button>
      </article>

      <article class="card cbam-output">
        <div class="cbam-output-head">
          <div><h2>预估 CBAM 关税</h2><p style="margin:6px 0 0;color:#5f796e;font-size:9px">基于当前项目填写参数 · ${EUR_CNY_NOTE}</p></div>
          <span id="cbam-status">${statusChip(outcome.status, outcome.tone)}</span>
        </div>
        <div class="duty-block">
          <span>应补缴碳边境成本</span>
          <div class="duty-value">€ <strong id="duty-total">${result.duty.toLocaleString("en-US")}</strong><small> EUR</small><span class="duty-cny" id="duty-cny">${formatCnyEquivalent(result.duty)}</span></div>
          <div class="duty-delta" id="duty-delta">${icon("trend")} <span>${outcome.delta}</span></div>
        </div>
        <div class="cbam-metrics">
          <div class="cbam-metric"><span>订单隐含排放</span><strong id="embedded-emissions">${result.embedded.toFixed(1)} tCO₂e</strong></div>
          <div class="cbam-metric"><span>免费配额抵扣</span><strong id="free-allocation-metric">${state.cbamFreeAllocation.toFixed(1)}%</strong></div>
          <div class="cbam-metric"><span>单位关税成本</span><strong id="unit-duty">¥ ${result.unitDuty.toFixed(0)}/t</strong></div>
        </div>
        <div class="comparison-chart">
          <h3>不同运输方案下的关税对比 <span id="comparison-scale">刻度 0–€${comparisonScale.toLocaleString("en-US")}</span></h3>
          <div class="comparison-row ${state.selectedRoute === "road" ? "active" : ""}"><span>全程公路</span><div class="comparison-bar" role="img" aria-label="全程公路关税 ${result.roadDuty.toLocaleString("en-US")} 欧元，约 ${formatNumber(euroToCny(result.roadDuty))} 元人民币"><i id="road-duty-bar" style="--bar-scale:${roadRatio / 100}"></i></div><strong><span id="road-duty">€${result.roadDuty.toLocaleString("en-US")}</span><small id="road-duty-cny">${formatCnyEquivalent(result.roadDuty)}</small></strong></div>
          <div class="comparison-row ${state.selectedRoute === "rail" ? "active" : ""}"><span>${escapeHtml(state.railRoute)}</span><div class="comparison-bar" role="img" aria-label="${escapeHtml(state.railRoute)}关税 ${result.railDuty.toLocaleString("en-US")} 欧元，约 ${formatNumber(euroToCny(result.railDuty))} 元人民币"><i id="rail-duty-bar" style="--bar-scale:${railRatio / 100}"></i></div><strong><span id="rail-duty">€${result.railDuty.toLocaleString("en-US")}</span><small id="rail-duty-cny">${formatCnyEquivalent(result.railDuty)}</small></strong></div>
          <div class="comparison-row"><span>降碳目标方案</span><div class="comparison-bar" role="img" aria-label="降碳目标方案关税 ${result.targetDuty.toLocaleString("en-US")} 欧元，约 ${formatNumber(euroToCny(result.targetDuty))} 元人民币"><i id="target-duty-bar" style="--bar-scale:${targetRatio / 100}"></i></div><strong><span id="target-duty">€${result.targetDuty.toLocaleString("en-US")}</span><small id="target-duty-cny">${formatCnyEquivalent(result.targetDuty)}</small></strong></div>
          <p class="comparison-empty" id="comparison-empty" ${result.roadDuty > 0 ? "hidden" : ""}>${comparisonEmptyCopy}</p>
        </div>
        <div class="method-note">${icon("info")}当前项目参数：EUA €${state.cbamEuPrice.toFixed(2)}/t（${formatCnyEquivalent(state.cbamEuPrice)}/t），项目碳价 ¥${state.carbonPrice.toFixed(2)}/t。${EUR_CNY_NOTE}；参数均可按实际签订的核算口径修改，结果不替代正式法律意见。</div>
      </article>
    </div>
  `;
}

function reportPage() {
  const reportTotal = getLedgerTotal();
  const balance = getBalanceMetrics();
  const mappedRows = getMappedLedgerCount();
  const dataCompleteness = state.ledgerRows.length ? mappedRows / state.ledgerRows.length * 100 : 0;
  const intensity = state.productOutput > 0 ? reportTotal / state.productOutput : null;
  const reportLocation = [state.province, state.city].filter(Boolean).join(" / ") || "地区待填写";
  const reportOrganization = state.organization || "企业待填写";
  const reportProduct = state.selections.product || "产品待填写";
  const reportProcess = state.selections.process || "工艺待填写";
  const reportIndustry = state.selections.industry || "行业待填写";
  const completionIssues = getProjectCompletionIssues();
  const completionBlocked = completionIssues.length > 0;
  const reportRows = state.ledgerRows.length
    ? state.ledgerRows.map((row) => `<tr><td><strong>${escapeHtml(row.name || "未命名数据")}</strong></td><td>${formatNumber(row.amount, 2)} ${escapeHtml(row.unit)}</td><td>${formatNumber(row.factor, 4)} ${escapeHtml(row.factorUnit)}</td><td>${formatNumber(row.emissions)}</td><td>${escapeHtml(row.source || "未填写")}</td></tr>`).join("")
    : `<tr><td class="report-empty-row" colspan="5">尚未录入活动数据，本报告仅展示项目边界与参数占位。</td></tr>`;
  const generatedAt = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const reportCode = `CPR-${String(state.projectPeriod).replace(/[^0-9A-Za-z\u4e00-\u9fa5]/g, "").slice(0, 10)}-${String(activeProjectId || "LOCAL").slice(-4).toUpperCase()}`;
  return `
    ${pageHead("Disclosure / Audit-ready", "核算报告", "将活动数据、边界校验和成本分摊结果整理为可追溯的标准化披露文件。",
      `${state.projectStatus !== "ready" ? `<button class="button" data-action="complete-project" ${completionBlocked ? `disabled aria-describedby="report-completion-note" title="${escapeHtml(completionIssues.join("；"))}"` : ""}>${icon("check")} 标记项目完成</button>` : ""}
       <button class="button" data-action="share-report">${icon("upload")} 分享审阅</button>
       <button class="button primary" data-action="print-report">${icon("printer")} 打印 / 导出 PDF</button>`
    )}
    ${completionBlocked ? `
      <div class="report-completion-note" id="report-completion-note" role="status">
        ${icon("alert")}
        <span><strong>${state.projectStatus === "ready" ? "当前项目状态需要复核" : "完成前还需处理"}</strong>${escapeHtml(completionIssues.slice(0, 4).join("；"))}${completionIssues.length > 4 ? "；其余问题请在对应页面补全" : ""}</span>
      </div>
    ` : ""}
    <p class="report-share-note" role="note">
      ${icon("info")}
      <span>分享快照会包含企业名称和台账数据；审阅人可直接打开。台账较大时请改用 PDF 或项目备份。</span>
    </p>
    <div class="report-shell page-enter">
      <div class="card report-toolbar">
        <div>${icon(mappedRows === state.ledgerRows.length && state.ledgerRows.length ? "check" : "alert")} ${mappedRows} / ${state.ledgerRows.length} 项活动数据已映射 · ${dataCompleteness.toFixed(1)}% 可追溯</div>
        <span class="status-chip">${SOFTWARE_VERSION} · ${SOFTWARE_VERSION_DATE}</span>
      </div>
      <article class="report-document">
        <div class="report-watermark">CARBON</div>
        <header class="report-brand">
          <div class="report-brand-left">
            <div class="report-logo">C</div>
            <div><strong>碳路先锋</strong><span>Carbon Pathfinder · Intelligent Accounting</span></div>
          </div>
          <div class="report-code"><strong>${escapeHtml(reportCode)}</strong><span>生成日期：${generatedAt}</span></div>
        </header>
        <div class="report-title">
          <p>Product carbon footprint disclosure</p>
          <h2>${escapeHtml(state.projectName)} · 产品碳足迹核算报告</h2>
          <span>${escapeHtml(reportLocation)} · ${escapeHtml(reportProcess)} · 报告周期 ${escapeHtml(state.projectPeriod)}</span>
        </div>
        <section class="report-summary">
          <div class="report-summary-item"><span>产品碳足迹</span><strong>${intensity === null ? "待填写" : formatNumber(intensity, 2)} <small>${intensity === null ? "t" : "tCO₂e/t"}</small></strong></div>
          <div class="report-summary-item"><span>本期总排放</span><strong>${formatNumber(reportTotal, 1)} <small>tCO₂e</small></strong></div>
          <div class="report-summary-item"><span>碳流闭合度</span><strong>${balance.balanced ? "100.0" : balance.completeness.toFixed(1)} <small>%</small></strong></div>
          <div class="report-summary-item"><span>数据匹配率</span><strong>${dataCompleteness.toFixed(1)} <small>%</small></strong></div>
        </section>

        <section class="report-section">
          <div class="report-section-head"><h2>核算主体与边界</h2></div>
          <div class="report-info-grid">
            <div class="report-info-row"><span>核算主体</span><strong>${escapeHtml(reportOrganization)}</strong></div>
            <div class="report-info-row"><span>统一社会信用代码</span><strong>${escapeHtml(state.organizationCode || "未填写")}</strong></div>
            <div class="report-info-row"><span>所在地区</span><strong>${escapeHtml(reportLocation)}</strong></div>
            <div class="report-info-row"><span>行业类别</span><strong>${escapeHtml(reportIndustry)}</strong></div>
            <div class="report-info-row"><span>系统边界</span><strong>摇篮到大门</strong></div>
            <div class="report-info-row"><span>核算产品</span><strong>${escapeHtml(reportProduct)}</strong></div>
            <div class="report-info-row"><span>核心工艺</span><strong>${escapeHtml(reportProcess)}</strong></div>
            <div class="report-info-row"><span>核算标准</span><strong>ISO 14067:2018 / 企业标准</strong></div>
          </div>
        </section>

        <section class="report-section">
          <div class="report-section-head"><h2>排放活动数据摘要</h2></div>
          <p class="table-scroll-hint" role="note">左右滑动查看全部字段。</p>
          <div class="table-wrap report-table-wrap" tabindex="0" aria-label="活动数据摘要表，可左右滚动">
            <table class="report-table">
              <thead><tr><th>活动数据</th><th>数量</th><th>排放因子</th><th>排放量 (tCO₂e)</th><th>数据来源</th></tr></thead>
              <tbody>${reportRows}</tbody>
            </table>
          </div>
          <div class="report-check-line"><span class="check-icon">${icon(balance.balanced ? "check" : "alert")}</span><span><strong>${balance.balanced ? "碳质量平衡校验通过。" : "碳质量平衡校验未通过。"}</strong> 输入原料碳 ${formatNumber(balance.input, 1)} tC，输出固碳 ${formatNumber(balance.output, 1)} tC，质量差异 ${formatNumber(Math.abs(balance.difference), 1)} tC。</span></div>
        </section>

        <section class="report-section">
          <div class="report-section-head"><h2>核验结论</h2></div>
          <div class="report-info-grid">
            <div class="report-info-row"><span>边界完整性</span><strong>${balance.balanced ? "优秀（A级）" : `待修正（${balance.completeness.toFixed(1)}%）`}</strong></div>
            <div class="report-info-row"><span>数据匹配率</span><strong>${dataCompleteness.toFixed(1)}%</strong></div>
            <div class="report-info-row"><span>碳流质量差异</span><strong>${formatNumber(Math.abs(balance.difference), 1)} tC</strong></div>
            <div class="report-info-row"><span>报告审核状态</span><strong>${state.projectStatus === "ready" ? "项目已完成" : "待完成核算"}</strong></div>
          </div>
        </section>

        <section class="report-section">
          <div class="report-section-head"><h2>公开参数与数据日期</h2></div>
          <div class="report-info-grid">
            <div class="report-info-row"><span>项目碳价</span><strong>¥ ${state.carbonPrice.toFixed(2)}/t · ${escapeHtml(state.dataAsOf)}</strong></div>
            <div class="report-info-row"><span>${escapeHtml(state.province)}电力平均排放因子</span><strong>${state.electricityFactor} kgCO₂/kWh</strong></div>
            <div class="report-info-row"><span>欧盟 EUA 碳价参数</span><strong>€ ${state.cbamEuPrice.toFixed(2)}/t · ${formatCnyEquivalent(state.cbamEuPrice)}/t · ${escapeHtml(state.dataAsOf)}</strong></div>
            <div class="report-info-row"><span>电力因子来源</span><strong>${escapeHtml(state.electricityFactorSource)}</strong></div>
            <div class="report-info-row"><span>核算产品产量</span><strong>${state.productOutput > 0 ? `${formatNumber(state.productOutput, 2)} t` : "待填写"}</strong></div>
            <div class="report-info-row"><span>高碳运输线路</span><strong>${escapeHtml(state.roadRoute)}</strong></div>
            <div class="report-info-row"><span>数据截止日期</span><strong>${escapeHtml(state.dataAsOf || "未填写")}</strong></div>
          </div>
        </section>

        <section class="report-section">
          <div class="report-section-head"><h2>CBAM 出口情景参数</h2></div>
          <div class="report-info-grid">
            <div class="report-info-row"><span>出口欧盟数量</span><strong>${formatNumber(state.cbamVolume, 2)} t</strong></div>
            <div class="report-info-row"><span>产品综合碳强度</span><strong>${formatNumber(state.cbamIntensity, 2)} tCO₂e/t</strong></div>
            <div class="report-info-row"><span>免费配额抵扣</span><strong>${formatNumber(state.cbamFreeAllocation, 1)}%</strong></div>
            <div class="report-info-row"><span>运输方案</span><strong>${state.selectedRoute === "rail" ? escapeHtml(state.railRoute) : escapeHtml(state.roadRoute)}</strong></div>
            <div class="report-info-row"><span>欧盟 EUA 碳价</span><strong>€ ${formatNumber(state.cbamEuPrice, 2)}/t · ${formatCnyEquivalent(state.cbamEuPrice)}/t</strong></div>
            <div class="report-info-row"><span>人民币汇率参考</span><strong>${escapeHtml(EUR_CNY_NOTE)}</strong></div>
          </div>
        </section>

        <div class="report-signatures">
          <div class="signature"><span>编制人</span><div class="signature-line"></div></div>
          <div class="signature"><span>复核人</span><div class="signature-line"></div></div>
          <div class="signature"><span>企业负责人</span><div class="signature-line"></div></div>
        </div>
        <footer class="report-footer">
          <span>碳路先锋 · 业财碳智能核算中枢</span>
          <span>本报告由系统自动生成 · 数据可追溯至原始业务单据</span>
          <span class="report-author">项目单位：重庆理工大学 · 碳路先锋跨学科项目团队 · 项目联系 xluo0246@gmail.com</span>
          <span class="report-copyright">软件版本 ${SOFTWARE_VERSION} · 构建 ${SOFTWARE_BUILD_FINGERPRINT} · © 2026 重庆理工大学碳路先锋项目团队，保留所有权利</span>
        </footer>
      </article>
    </div>
  `;
}

function aboutPage() {
  const functions = [
    ["核算边界", "按企业、地区、行业、产品与工艺建立独立碳核算项目。"],
    ["活动数据", "维护采购、能源、物流等活动数据，支持 CSV 导入与排放复算。"],
    ["质量平衡", "通过输入与输出碳质量校验发现漏算、重复计算和边界错误。"],
    ["成本分摊", "按重量、里程或货值拆分碳成本并追溯至作业与线路。"],
    ["CBAM 情景", "测算出口欧盟订单的隐含排放、免费配额与关税成本。"],
    ["核算报告", "生成可追溯报告，支持打印、PDF 与数据快照分享。"]
  ];
  return `
    ${pageHead(
      "Software Identity / Ownership Notice",
      "软件信息",
      "本页面集中展示软件名称、版本、用途、运行环境、数据边界与版权声明，便于用户了解和材料归档。",
      `<a class="button" href="${SOFTWARE_SITE_URL}" target="_blank" rel="noopener">${icon("globe")} 打开公开演示</a>
       ${ACCESS_GATE_ENABLED ? `<button class="button" data-action="lock-access">${icon("lock")} 退出本设备授权</button>` : ""}`
    )}
    <div class="about-layout page-enter">
      <article class="card about-identity-card">
        <div class="about-mark" aria-hidden="true">C</div>
        <span class="about-kicker">软件全称</span>
        <h2>${SOFTWARE_FULL_NAME}</h2>
        <div class="about-version-line">
          <strong>${SOFTWARE_VERSION}</strong>
          <span>发布于 ${SOFTWARE_VERSION_DATE}</span>
        </div>
        <p>面向制造业企业的通用业财碳智能核算工具，把活动数据、边界校验、成本分摊、CBAM 情景和核算报告放在同一个可追溯项目快照中。</p>
        <div class="about-identity-meta">
          <div><span>项目团队</span><strong>${SOFTWARE_DEVELOPER}</strong></div>
          <div><span>项目单位</span><strong>${SOFTWARE_UNIT}</strong></div>
          <div><span>构建指纹</span><strong>${SOFTWARE_BUILD_FINGERPRINT}</strong></div>
          <div><span>永久演示地址</span><a href="${SOFTWARE_SITE_URL}" target="_blank" rel="noopener">${SOFTWARE_SITE_URL}</a></div>
          <div><span>联系与反馈</span><a href="mailto:${SOFTWARE_CONTACT_EMAIL}?subject=%E7%A2%B3%E8%B7%AF%E5%85%88%E9%94%8B%E8%BD%AF%E4%BB%B6%E4%BF%A1%E6%81%AF">${SOFTWARE_CONTACT_EMAIL}</a></div>
        </div>
      </article>

      <div class="about-sections">
        <article class="card about-section">
          <div class="about-section-head">
            <div><span>软件用途</span><h3>让碳核算过程可解释、可校验、可追溯</h3></div>
            ${statusChip("浏览器单机版", "")}
          </div>
          <p>系统面向企业财务、安环、能源和外贸人员，支持从核算边界建立到披露报告输出的完整流程。所有计算结果均基于当前项目录入的数据和参数。</p>
          <div class="about-audience">
            <span>财务负责人</span><span>安环负责人</span><span>能源管理员</span><span>外贸经理</span>
          </div>
        </article>

        <article class="card about-section">
          <div class="about-section-head">
            <div><span>核心功能</span><h3>六个连续核算环节</h3></div>
          </div>
          <ol class="about-function-list">
            ${functions.map(([name, description]) => `<li><strong>${name}</strong><p>${description}</p></li>`).join("")}
          </ol>
        </article>

        <article class="card about-section">
          <div class="about-section-head">
            <div><span>运行说明</span><h3>运行环境与数据存储</h3></div>
          </div>
          <div class="about-spec-grid">
            <div><span>软件类型</span><strong>Web 单页应用</strong><small>原生 HTML / CSS / JavaScript</small></div>
            <div><span>运行环境</span><strong>现代浏览器</strong><small>Chrome / Edge，支持桌面与手机</small></div>
            <div><span>数据位置</span><strong>当前浏览器本机</strong><small>localStorage，不上传业务数据</small></div>
            <div><span>导入导出</span><strong>CSV / JSON / PDF</strong><small>活动台账、项目备份与核算报告</small></div>
          </div>
        </article>

        <article class="card about-section about-copyright">
          <div class="about-section-head">
            <div><span>版权与使用说明</span><h3>© 2026 重庆理工大学碳路先锋项目团队 · 保留所有权利</h3></div>
          </div>
          <p>本项目仅授权用于在线体验、团队学习、竞赛展示与经许可的产品演示。未经书面许可，不得复制、改编、再发布源代码，或将本项目整体或实质性部分用于其他竞赛、商业产品或生产系统。</p>
          <p>用户录入的核算数据默认保存在当前浏览器本地。请定期通过“核算项目”页面导出 JSON 备份。演示输出不构成正式审计、鉴证或法律意见。</p>
          <p class="about-legal-note">最终著作权人及权利归属以正式登记材料、团队约定和相关机构规定为准。</p>
        </article>
      </div>
    </div>
  `;
}

const pageRenderers = {
  dashboard: dashboardPage,
  projects: projectsPage,
  wizard: wizardPage,
  ledger: ledgerPage,
  balance: balancePage,
  cost: costPage,
  cbam: cbamPage,
  report: reportPage,
  about: aboutPage
};

function render(options = {}) {
  const content = document.getElementById("page-content");
  content.innerHTML = (pageRenderers[state.route] || dashboardPage)();
  document.getElementById("current-page-name").textContent = pageNames[state.route] || "总览";
  document.getElementById("period-chip").innerHTML = `<span></span>${escapeHtml(state.projectPeriod)} · ${escapeHtml(state.projectName)}`;
  document.querySelectorAll(".nav-item").forEach((button) => {
    const active = button.dataset.route === state.route;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("ledger-dot")?.classList.toggle("complete", state.ledgerRows.length > 0);
  if (!options.preserveScroll) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  bindPageEvents();
  persistState();
  if (options.focusContent) {
    requestAnimationFrame(() => document.getElementById("page-content")?.focus({ preventScroll: true }));
  }
}

function navigate(route) {
  if (!pageRenderers[route]) return;
  if (route === "balance" && !state.ledgerRows.length) {
    showToast("暂时不能进入碳流校验", "请先在数据台账中新增或导入至少一项活动数据");
    route = "ledger";
  }
  state.route = route;
  if (window.location.hash !== `#${route}`) {
    history.pushState(null, "", `#${route}`);
  }
  closeSearch(false);
  closeMobileMenu(false);
  render({ focusContent: true });
}

function scheduleBalancePaint() {
  if (balancePaintFrame) return;
  balancePaintFrame = requestAnimationFrame(() => {
    balancePaintFrame = 0;
    paintBalance();
  });
}

function flushBalancePaint() {
  if (balancePaintFrame) cancelAnimationFrame(balancePaintFrame);
  balancePaintFrame = 0;
  paintBalance();
}

function scheduleCBAMPaint() {
  if (cbamPaintFrame) return;
  cbamPaintFrame = requestAnimationFrame(() => {
    cbamPaintFrame = 0;
    updateCBAMDom();
  });
}

function schedulePersist(delay = 180) {
  clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    persistTimer = 0;
    persistState();
  }, delay);
}

function flushPersist() {
  clearTimeout(persistTimer);
  persistTimer = 0;
  persistState();
}

function paintBalanceReadouts(metrics, conversion, unit) {
  const setText = (id, text) => {
    const element = document.getElementById(id);
    if (element && element.textContent !== text) element.textContent = text;
  };
  const { input, product, waste, byproductLoss } = metrics;

  setText("input-mass", (input * conversion).toFixed(1));
  setText("output-mass", (metrics.output * conversion).toFixed(1));
  setText("input-value", `${(input * conversion).toFixed(1)} ${unit}`);
  setText("product-value", `${(product * conversion).toFixed(1)} ${unit}`);
  setText("byproduct-value", `${(byproductLoss * conversion).toFixed(1)} ${unit}`);
  setText("waste-value", `${(waste * conversion).toFixed(1)} ${unit}`);

  document.querySelectorAll("[data-balance-number]").forEach((numberInput) => {
    if (document.activeElement === numberInput) return;
    const key = BALANCE_KEYS[Number(numberInput.dataset.balanceNumber)];
    const nextValue = (metrics[key] * conversion).toFixed(1);
    if (numberInput.value !== nextValue) numberInput.value = nextValue;
  });
  document.querySelectorAll("[data-balance-index]").forEach((slider) => {
    const key = BALANCE_KEYS[Number(slider.dataset.balanceIndex)];
    const nextValue = metrics[key];
    if (Number(slider.value) !== nextValue) slider.value = String(nextValue);
    slider.setAttribute("aria-valuetext", `${(nextValue * conversion).toFixed(1)} ${unit}`);
  });
}

function paintBalance() {
  if (!document.getElementById("scale-stage")) return;
  const metrics = getBalanceMetrics();
  const conversion = state.balanceMode === "CO₂当量" ? 44 / 12 : 1;
  const unit = state.balanceMode === "CO₂当量" ? "tCO₂e" : "tC";
  const presentation = getBalancePresentation(metrics, conversion, unit);
  const { input } = metrics;

  paintBalanceReadouts(metrics, conversion, unit);
  document.getElementById("output-state").textContent = presentation.outputState;
  document.getElementById("input-state").textContent = input > 0 ? "已录入" : "待填写";
  const scaleStage = document.getElementById("scale-stage");
  const angle = metrics.balanced ? 0 : Math.max(-8, Math.min(8, -metrics.difference / Math.max(metrics.input, 1) * 260));
  const panShift = metrics.balanced ? 0 : Math.max(8, Math.min(22, Math.abs(angle) * 2.1));
  scaleStage.classList.toggle("imbalanced", !metrics.balanced);
  scaleStage.style.setProperty("--scale-tilt", `${angle.toFixed(2)}deg`);
  scaleStage.style.setProperty("--left-pan-shift", `${metrics.difference > 0 ? panShift : -panShift}px`);
  scaleStage.style.setProperty("--right-pan-shift", `${metrics.difference > 0 ? -panShift : panShift}px`);

  const result = document.getElementById("balance-result");
  result.classList.toggle("error", !metrics.balanced);
  const resultIcon = result.querySelector(".balance-result-icon");
  if (resultIcon) resultIcon.innerHTML = icon(metrics.balanced ? "check" : "alert");
  const resultCopy = document.getElementById("balance-result-copy");
  if (resultCopy && resultCopy.textContent !== presentation.result) resultCopy.textContent = presentation.result;

  const balanceStatus = document.getElementById("balance-status");
  const statusHtml = statusChip(presentation.status, metrics.balanced ? "" : "warning");
  if (balanceStatus.innerHTML !== statusHtml) balanceStatus.innerHTML = statusHtml;
  document.getElementById("integrity-score").textContent = `${metrics.completeness.toFixed(1)}%`;
  document.getElementById("score-ring").style.setProperty("--score", `${metrics.completeness.toFixed(1)}%`);
  document.getElementById("score-ring").classList.toggle("pending", metrics.completeness === 0);
  document.getElementById("score-grade").textContent = metrics.completeness === 0 ? "—" : metrics.balanced ? "A" : "B";
  document.getElementById("score-title").textContent = presentation.title;
  document.getElementById("score-copy").textContent = presentation.copy;
  document.getElementById("balance-check-item").classList.toggle("warn", !metrics.balanced);
  document.getElementById("balance-check-item").querySelector(".check-icon").innerHTML = icon(metrics.balanced ? "check" : "alert");
  document.getElementById("balance-check-copy").textContent = presentation.check;
  document.getElementById("process-emissions").textContent = metrics.balanced ? metrics.processEmissions.toFixed(1) : "—";
  document.getElementById("emissions-status").innerHTML = statusChip(presentation.processStatus, metrics.balanced ? "" : "warning");
  document.getElementById("emissions-copy").textContent = presentation.processCopy;
  document.getElementById("proof-difference").textContent = metrics.balanced
    ? `0.0 ${unit}`
    : `${metrics.difference < 0 ? "输出端" : "输入端"} +${formatNumber(Math.abs(metrics.difference) * conversion, 1)} ${unit}`;
  document.getElementById("proof-difference").classList.toggle("warning-text", !metrics.balanced);
  document.getElementById("proof-advice").textContent = metrics.balanced ? "可进入成本分摊" : presentation.check;

  const next = document.getElementById("balance-next");
  next.className = `button wide ${metrics.balanced ? "primary" : "action-warning"}`;
  if (presentation.action === "next") {
    next.dataset.route = "cost";
    delete next.dataset.action;
    next.innerHTML = `${presentation.buttonLabel} ${icon("arrow-right")}`;
  } else {
    delete next.dataset.route;
    next.dataset.action = presentation.action;
    next.innerHTML = `${presentation.buttonLabel} ${icon("arrow-right")}`;
  }

  document.getElementById("audit-balance").classList.toggle("complete", metrics.balanced);
  document.getElementById("audit-balance").querySelector("small").textContent = metrics.balanced ? "差异 0.00%" : "等待补录";
  document.getElementById("audit-entry").classList.toggle("complete", metrics.balanced);
  document.getElementById("audit-entry").querySelector("small").textContent = metrics.balanced ? "已通过校验" : "暂不可入账";
}

function updateCBAMDom() {
  if (!document.getElementById("duty-total")) return;
  const result = computeCBAM();
  const optimized = state.selectedRoute === "rail";
  const outcome = getCBAMOutcome(result, optimized);
  document.getElementById("volume-value").textContent = `${state.cbamVolume} t`;
  document.getElementById("price-value").textContent = `€ ${state.cbamEuPrice.toFixed(2)} / t`;
  document.getElementById("price-cny").textContent = `${formatCnyEquivalent(state.cbamEuPrice)} / t · ${EUR_CNY_NOTE}`;
  document.getElementById("intensity-value").textContent = `${state.cbamIntensity.toFixed(2)} tCO₂e/t`;
  document.getElementById("free-allocation-value").textContent = `${state.cbamFreeAllocation.toFixed(1)}%`;
  document.getElementById("free-allocation-metric").textContent = `${state.cbamFreeAllocation.toFixed(1)}%`;
  document.getElementById("duty-total").textContent = result.duty.toLocaleString("en-US");
  document.getElementById("duty-cny").textContent = formatCnyEquivalent(result.duty);
  const dutyTotal = document.getElementById("duty-total");
  dutyTotal.classList.remove("value-updated");
  void dutyTotal.offsetWidth;
  dutyTotal.classList.add("value-updated");
  document.getElementById("embedded-emissions").textContent = `${result.embedded.toFixed(1)} tCO₂e`;
  document.getElementById("unit-duty").textContent = `¥ ${result.unitDuty.toFixed(0)}/t`;
  document.getElementById("road-duty").textContent = `€${result.roadDuty.toLocaleString("en-US")}`;
  document.getElementById("road-duty-cny").textContent = formatCnyEquivalent(result.roadDuty);
  document.getElementById("rail-duty").textContent = `€${result.railDuty.toLocaleString("en-US")}`;
  document.getElementById("rail-duty-cny").textContent = formatCnyEquivalent(result.railDuty);
  document.getElementById("target-duty").textContent = `€${result.targetDuty.toLocaleString("en-US")}`;
  document.getElementById("target-duty-cny").textContent = formatCnyEquivalent(result.targetDuty);
  const comparisonScale = getCBAMChartScale(result);
  const comparisonScaleLabel = document.getElementById("comparison-scale");
  if (comparisonScaleLabel) comparisonScaleLabel.textContent = `刻度 0–€${comparisonScale.toLocaleString("en-US")}`;
  const setComparisonBar = (id, duty, label) => {
    const bar = document.getElementById(id);
    if (!bar) return;
    const ratio = Math.max(0, Math.min(100, duty / comparisonScale * 100));
    bar.style.setProperty("--bar-scale", String(ratio / 100));
    bar.closest(".comparison-bar")?.setAttribute("aria-label", `${label}关税 ${duty.toLocaleString("en-US")} 欧元，约 ${formatNumber(euroToCny(duty))} 元人民币`);
  };
  setComparisonBar("road-duty-bar", result.roadDuty, "全程公路");
  setComparisonBar("rail-duty-bar", result.railDuty, state.railRoute);
  setComparisonBar("target-duty-bar", result.targetDuty, "降碳目标方案");
  const comparisonEmpty = document.getElementById("comparison-empty");
  if (comparisonEmpty) {
    comparisonEmpty.hidden = result.roadDuty > 0;
    comparisonEmpty.textContent = state.cbamVolume <= 0
      ? "填写出口欧盟数量后，这里会显示三种运输方案的关税差异。"
      : "当前参数下应补缴关税为 €0（≈ ¥0.00），三种方案没有可比较的关税差异。";
  }
  document.getElementById("cbam-status").innerHTML = statusChip(outcome.status, outcome.tone);
  document.getElementById("duty-delta").innerHTML = `${icon("trend")}<span>${outcome.delta}</span>`;
}

function bindPageEvents() {
  document.querySelectorAll(".wizard-field input").forEach((input) => {
    input.setAttribute("aria-describedby", "wizard-validation");
    input.addEventListener("input", () => clearWizardValidation(input));
    input.addEventListener("blur", () => {
      if (!input.required || input.value.trim()) return;
      const label = input.closest("label")?.querySelector("span")?.textContent?.replace(/\s*（.*?）/g, "") || "必填项";
      showWizardValidation({ valid: false, fieldId: input.id, message: `请填写${label}。` });
    });
  });

  document.querySelectorAll("[data-select]").forEach((option) => {
    option.addEventListener("click", () => {
      const field = option.dataset.select;
      const value = option.dataset.value;
      state.selections[field] = value;
      if (field === "industry") {
        const products = PRODUCT_CATALOG[value] || ["自定义产品"];
        const processes = PROCESS_CATALOG[value] || ["自定义工艺"];
        if (!products.includes(state.selections.product)) state.selections.product = products[0];
        if (!processes.includes(state.selections.process)) state.selections.process = processes[0];
      }
      markProjectActive();
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll("[data-tree]").forEach((node) => {
    node.addEventListener("click", () => {
      const id = node.dataset.tree;
      state.selectedTreeNode = id;
      if (state.expandedNodes.has(id)) state.expandedNodes.delete(id);
      else state.expandedNodes.add(id);
      render({ preserveScroll: true });
    });
  });

  document.querySelectorAll('input[name="route"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      state.selectedRoute = radio.value;
      markProjectActive();
      render({ preserveScroll: true });
    });
  });

  const bindCBAMNumber = (input, key, label) => {
    if (!input) return;
    const commit = (correctVisual = false) => {
      const raw = input.value.trim();
      const numeric = raw === "" ? 0 : Number(raw);
      const invalid = raw !== "" && (!Number.isFinite(numeric) || numeric < 0);
      state[key] = clampNumber(numeric, 0);
      state.cbamApplied = state.selectedRoute === "rail";
      markProjectActive();
      input.toggleAttribute("aria-invalid", invalid);
      if (correctVisual && invalid) input.value = String(state[key]);
      updateCBAMDom();
      schedulePersist();
      return invalid;
    };
    input.addEventListener("input", () => commit());
    input.addEventListener("change", () => {
      if (commit(true)) showToast("参数已自动修正", `${label}不能为负数，已调整为 0。`);
      flushPersist();
    });
  };

  bindCBAMNumber(document.getElementById("cbam-volume"), "cbamVolume", "出口欧盟数量");
  bindCBAMNumber(document.getElementById("cbam-intensity"), "cbamIntensity", "产品综合碳强度");
  bindCBAMNumber(document.getElementById("cbam-price"), "cbamEuPrice", "欧盟碳价");

  const freeAllocation = document.getElementById("cbam-free-allocation");
  if (freeAllocation) {
    freeAllocation.addEventListener("input", () => {
      state.cbamFreeAllocation = clampNumber(freeAllocation.value, 0, 100);
      markProjectActive();
      updateCBAMDom();
      schedulePersist();
    });
    freeAllocation.addEventListener("change", flushPersist);
  }

  document.querySelectorAll("[data-balance-index]").forEach((slider) => {
    let adjusting = false;
    const beginAdjustment = () => {
      adjusting = true;
      document.getElementById("scale-stage")?.classList.add("is-adjusting");
    };
    const applySliderValue = () => {
      const key = BALANCE_KEYS[Number(slider.dataset.balanceIndex)];
      updateBalanceValue(key, slider.value);
      const metrics = getBalanceMetrics();
      const conversion = state.balanceMode === "CO₂当量" ? 44 / 12 : 1;
      const unit = state.balanceMode === "CO₂当量" ? "tCO₂e" : "tC";
      paintBalanceReadouts(metrics, conversion, unit);
    };
    const finishAdjustment = () => {
      applySliderValue();
      flushBalancePaint();
      document.getElementById("scale-stage")?.classList.remove("is-adjusting");
      adjusting = false;
      flushPersist();
    };
    slider.addEventListener("pointerdown", beginAdjustment);
    slider.addEventListener("input", () => {
      if (!adjusting) beginAdjustment();
      applySliderValue();
      scheduleBalancePaint();
      schedulePersist(240);
    });
    slider.addEventListener("change", finishAdjustment);
    slider.addEventListener("pointerup", finishAdjustment);
    slider.addEventListener("pointercancel", finishAdjustment);
    slider.addEventListener("lostpointercapture", finishAdjustment);
    slider.addEventListener("touchend", finishAdjustment);
    slider.addEventListener("keyup", finishAdjustment);
    slider.addEventListener("blur", finishAdjustment);
  });

  document.querySelectorAll("[data-balance-number]").forEach((input) => {
    const applyNumberValue = () => {
      const index = Number(input.dataset.balanceNumber);
      const key = BALANCE_KEYS[index];
      const conversion = Number(input.dataset.conversion) || 1;
      const displayValue = Math.max(0, Number(input.value) || 0);
      const value = displayValue / conversion;
      updateBalanceValue(key, value);
      const slider = document.querySelector(`[data-balance-index="${index}"]`);
      if (slider) {
        if (value > Number(slider.max)) slider.max = String(Math.ceil(value * 1.2));
      }
      paintBalanceReadouts(getBalanceMetrics(), conversion, state.balanceMode === "CO₂当量" ? "tCO₂e" : "tC");
    };
    input.addEventListener("input", () => {
      applyNumberValue();
      scheduleBalancePaint();
      schedulePersist(220);
    });
    input.addEventListener("change", () => {
      applyNumberValue();
      const index = Number(input.dataset.balanceNumber);
      const conversion = Number(input.dataset.conversion) || 1;
      input.value = (normalizeBalanceValue(state.balanceMass[BALANCE_KEYS[index]]) * conversion).toFixed(1);
      flushBalancePaint();
      flushPersist();
    });
  });

  if (document.getElementById("scale-stage")) paintBalance();
  if (document.getElementById("duty-total")) updateCBAMDom();

  const projectNameInput = document.getElementById("project-name-input");
  if (projectNameInput) {
    projectNameInput.addEventListener("input", () => {
      state.projectName = projectNameInput.value.trim() || "未命名项目";
      schedulePersist(240);
    });
    projectNameInput.addEventListener("change", flushPersist);
  }
  const projectPeriodInput = document.getElementById("project-period-input");
  if (projectPeriodInput) {
    projectPeriodInput.addEventListener("input", () => {
      state.projectPeriod = projectPeriodInput.value.trim() || ACCOUNTING_PERIOD;
      schedulePersist(240);
    });
    projectPeriodInput.addEventListener("change", flushPersist);
  }

  const bindWizardText = (id, key, rerenderOnChange = false, fallback = "") => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener("input", () => {
      state[key] = input.value.trim() || fallback;
      schedulePersist(240);
    });
    input.addEventListener("change", () => {
      if (rerenderOnChange) render({ preserveScroll: true });
      else flushPersist();
    });
  };
  bindWizardText("organization-input", "organization");
  bindWizardText("organization-code-input", "organizationCode");
  bindWizardText("city-input", "city");
  bindWizardText("data-as-of-input", "dataAsOf");
  bindWizardText("road-route-input", "roadRoute", false, "原料地 → 工厂 · 公路运输");
  bindWizardText("rail-route-input", "railRoute", false, "工厂 → 港口 · 公转铁联运");

  const provinceInput = document.getElementById("province-input");
  if (provinceInput) {
    provinceInput.addEventListener("input", () => {
      state.province = provinceInput.value.trim();
      if (PROVINCE_FACTORS[state.province] !== undefined) {
        state.electricityFactor = PROVINCE_FACTORS[state.province];
        state.electricityFactorSource = state.province === "全国"
          ? "生态环境部 2023 年全国电力平均排放因子"
          : `生态环境部 2023 年${state.province}省级电力平均排放因子`;
      } else {
        state.electricityFactorSource = "企业自定义电力排放因子";
      }
      schedulePersist(240);
    });
    provinceInput.addEventListener("change", flushPersist);
  }

  const industryInput = document.getElementById("industry-input");
  if (industryInput) {
    industryInput.addEventListener("input", () => {
      state.selections.industry = industryInput.value.trim();
      schedulePersist(240);
    });
    industryInput.addEventListener("change", () => {
      state.selections.industry = industryInput.value.trim();
      if (!state.selections.industry) {
        flushPersist();
        return;
      }
      const products = PRODUCT_CATALOG[state.selections.industry] || ["自定义产品"];
      const processes = PROCESS_CATALOG[state.selections.industry] || ["自定义工艺"];
      if (PRODUCT_CATALOG[state.selections.industry] && !products.includes(state.selections.product)) {
        state.selections.product = products[0];
      }
      if (PROCESS_CATALOG[state.selections.industry] && !processes.includes(state.selections.process)) {
        state.selections.process = processes[0];
      }
      flushPersist();
    });
  }

  const productInput = document.getElementById("product-input");
  if (productInput) {
    productInput.addEventListener("input", () => {
      state.selections.product = productInput.value.trim();
      schedulePersist(240);
    });
    productInput.addEventListener("change", flushPersist);
  }

  const processInput = document.getElementById("process-input");
  if (processInput) {
    processInput.addEventListener("input", () => {
      state.selections.process = processInput.value.trim();
      schedulePersist(240);
    });
    processInput.addEventListener("change", flushPersist);
  }

  const bindWizardNumber = (id, key, { min = 0, max = Number.POSITIVE_INFINITY, callback } = {}) => {
    const input = document.getElementById(id);
    if (!input) return;
    const commit = (correctVisual = false) => {
      const raw = input.value.trim();
      const numeric = raw === "" ? null : Number(raw);
      const invalid = numeric !== null && (!Number.isFinite(numeric) || numeric < min || numeric > max);
      state[key] = numeric === null || !Number.isFinite(numeric)
        ? (min > 0 ? min : 0)
        : clampNumber(numeric, min, max);
      input.toggleAttribute("aria-invalid", invalid);
      if (correctVisual && invalid) input.value = String(state[key]);
      callback?.();
    };
    input.addEventListener("input", () => {
      commit();
      schedulePersist(240);
    });
    input.addEventListener("change", () => {
      const raw = input.value.trim();
      const numeric = Number(raw);
      const corrected = raw !== "" && (!Number.isFinite(numeric) || numeric < min || numeric > max);
      commit(true);
      if (corrected) {
        const label = input.closest("label")?.querySelector("span")?.textContent || "数值";
        showToast("参数已自动修正", `${label}已调整到允许范围 ${formatNumber(min, min % 1 ? 2 : 0)}–${Number.isFinite(max) ? formatNumber(max, max % 1 ? 1 : 0) : "不限"}。`);
      }
      flushPersist();
    });
  };
  bindWizardNumber("product-output-input", "productOutput", { min: 0.01, callback: () => {
    state.cbamIntensity = getLedgerTotal() / Math.max(1, state.productOutput);
  }});
  bindWizardNumber("electricity-factor-input", "electricityFactor");
  bindWizardNumber("carbon-price-input", "carbonPrice");
  bindWizardNumber("eua-price-input", "cbamEuPrice", { callback: () => {
    const equivalent = document.getElementById("eua-price-cny");
    if (equivalent) equivalent.textContent = `${formatCnyEquivalent(state.cbamEuPrice)}/t · ${EUR_CNY_NOTE}`;
  }});
  bindWizardNumber("transport-distance-input", "transportDistance");
  bindWizardNumber("free-allocation-input", "cbamFreeAllocation", { min: 0, max: 100 });
  bindWizardNumber("road-adjustment-input", "roadEmissionAdjustment", { min: Number.NEGATIVE_INFINITY, max: Number.POSITIVE_INFINITY });
  bindWizardNumber("rail-adjustment-input", "railEmissionAdjustment", { min: Number.NEGATIVE_INFINITY, max: Number.POSITIVE_INFINITY });

  document.querySelectorAll("[data-ledger-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const index = Number(input.dataset.ledgerIndex);
      const field = input.dataset.ledgerField;
      const row = state.ledgerRows[index];
      if (!row) return;
      const numericFields = ["amount", "factor", "emissions"];
      const automaticEmissionFields = ["amount", "factor", "factorUnit"];
      if (numericFields.includes(field)) {
        const raw = input.value === "" ? "" : Number(input.value);
        const safe = raw === "" || !Number.isFinite(Number(raw)) ? "" : Math.max(0, Number(raw));
        row[field] = safe;
        input.toggleAttribute("aria-invalid", raw !== "" && Number(raw) < 0);
      } else {
        row[field] = input.value;
      }
      if (field === "emissions") {
        row.emissionsManual = true;
        row.status = "待确认";
        const statusSelect = document.querySelector(`[data-ledger-index="${index}"][data-ledger-field="status"]`);
        if (statusSelect) statusSelect.value = "待确认";
        input.dataset.manual = "true";
      } else if (automaticEmissionFields.includes(field)) {
        row.emissions = calculateRowEmissions(row);
        row.emissionsManual = false;
        const emissionsInput = document.querySelector(`[data-ledger-index="${index}"][data-ledger-field="emissions"]`);
        if (emissionsInput) {
          emissionsInput.value = row.emissions.toFixed(2);
          emissionsInput.dataset.manual = "false";
        }
      }
      const totalElement = document.querySelector("[data-ledger-total]");
      if (totalElement) totalElement.textContent = `${formatNumber(getLedgerTotal())} tCO₂e`;
      const countText = document.querySelector("[data-ledger-count-text]");
      if (countText) countText.textContent = `${state.ledgerRows.length} 项活动数据 · ${state.ledgerRows.filter((item) => item.status === "待确认").length} 项需人工确认 · 修改后自动保存在本机`;
      refreshLedgerSourceCards();
      state.ledgerLoaded = true;
      state.cbamIntensity = getLedgerTotal() / Math.max(1, state.productOutput);
      markProjectActive();
      schedulePersist(220);
    });
    input.addEventListener("change", () => {
      if (["amount", "factor", "emissions"].includes(input.dataset.ledgerField)) {
        const index = Number(input.dataset.ledgerIndex);
        const value = state.ledgerRows[index]?.[input.dataset.ledgerField];
        input.value = value === ""
          ? ""
          : input.dataset.ledgerField === "emissions"
            ? Number(value).toFixed(2)
            : String(value);
        input.removeAttribute("aria-invalid");
      }
      flushPersist();
    });
    input.addEventListener("blur", flushPersist);
  });

  const fileInput = document.getElementById("file-input");
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length) importLedgerFile(fileInput.files[0]);
    });
  }

  const projectBackupInput = document.getElementById("project-backup-input");
  if (projectBackupInput) {
    projectBackupInput.addEventListener("change", () => {
      if (projectBackupInput.files.length) importProjectsBackup(projectBackupInput.files[0]);
    });
  }
}

function loadLedgerRows(rows, filename, isDemo = false) {
  state.ledgerRows = rows;
  state.ledgerLoaded = true;
  state.isDemoData = isDemo;
  state.cbamIntensity = getLedgerTotal() / Math.max(1, state.productOutput);
  markProjectActive();
  render({ preserveScroll: true });
  document.getElementById("ledger-dot")?.classList.add("complete");
  const total = getLedgerTotal();
  showToast(isDemo ? "示例台账已载入" : "项目台账已载入", `${filename} · ${rows.length} 项活动数据，合计 ${formatNumber(total)} tCO₂e`);
}

function simulateLedger(filename = "2026-10-22 公开参数基准.csv") {
  const rows = SEED_LEDGER_ROWS.map((row) => {
    if (!row.name.includes("电力")) return { ...row };
    const amount = Number(row.amount);
    return {
      ...row,
      source: `${state.province}电费单`,
      factor: state.electricityFactor,
      emissions: amount * state.electricityFactor
    };
  });
  loadLedgerRows(rows, filename, true);
}

function parseCsvLine(line) {
  const values = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    if (char === '"') {
      if (quoted && line[index + 1] === '"') {
        value += '"';
        index++;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      values.push(value.trim());
      value = "";
    } else {
      value += char;
    }
  }
  values.push(value.trim());
  return values;
}

function parseLedgerCsv(text) {
  const lines = text.replace(/^\uFEFF/, "").trim().split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) throw new Error("CSV 没有可解析的数据行");
  const headers = parseCsvLine(lines[0]);
  const requiredHeaders = ["name", "source", "amount", "unit", "factor", "factor_unit"];
  const missingHeaders = requiredHeaders.filter((header) => !headers.includes(header));
  if (missingHeaders.length) throw new Error(`缺少字段：${missingHeaders.join(", ")}`);
  return lines.slice(1).map((line, rowIndex) => {
    const cells = parseCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, cells[index] || ""]));
    const amount = Number(row.amount || row.activity_value);
    const factor = Number(row.factor || row.emission_factor);
    const factorUnit = row.factor_unit || row["排放因子单位"] || "";
    if (!row.name || !row.source || !Number.isFinite(amount) || !Number.isFinite(factor) || amount < 0 || factor < 0 || !row.unit || !factorUnit) {
      throw new Error(`第 ${rowIndex + 2} 行存在缺失字段或非数字活动数据`);
    }
    const emissionsRaw = row.emissions || row.emissions_tco2e;
    const emissions = emissionsRaw
      ? Number(emissionsRaw)
      : factorUnit.includes("kg") ? amount * factor / 1000 : amount * factor;
    if (!Number.isFinite(emissions) || emissions < 0) throw new Error(`第 ${rowIndex + 2} 行的排放量不是有效非负数`);
    return {
      name: row.name || row.data_item || row["数据项"] || "未命名数据",
      source: row.source || row["来源"] || "上传台账",
      amount,
      unit: row.unit || row.activity_unit || row["单位"] || "",
      factor,
      factorUnit,
      emissions,
      status: row.status || row["状态"] || "待确认"
    };
  });
}

async function importLedgerFile(file) {
  try {
    if (!file.name.toLowerCase().endsWith(".csv")) {
      throw new Error("当前版本仅支持 CSV，Excel 与 PDF 解析接口尚未接入");
    }
    if (file.size > 20 * 1024 * 1024) throw new Error("文件超过 20MB 上限");
    const rows = parseLedgerCsv(await file.text());
    if (state.ledgerRows.length && !window.confirm(
      `导入「${file.name}」将替换当前项目中的 ${state.ledgerRows.length} 条台账数据。\n\n原数据会被移除，请确认已经导出备份。是否继续？`
    )) {
      showToast("已取消导入", "当前台账保持不变，可先导出项目备份后再替换");
      return;
    }
    loadLedgerRows(rows, file.name, false);
  } catch (error) {
    showToast("导入失败", error.message || "请检查 CSV 表头与数据格式");
  }
}

function showToast(title, text) {
  const stack = document.getElementById("toast-stack");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-icon">${icon("check")}</span><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p></div>`;
  stack.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "200ms ease";
    setTimeout(() => toast.remove(), 220);
  }, 3400);
}

function downloadCsv(filename, rows) {
  const escapeCell = (value) => {
    const text = String(value ?? "");
    const safe = /^[=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  };
  const text = `\uFEFF${rows.map((row) => row.map(escapeCell).join(",")).join("\r\n")}`;
  const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

function downloadJson(filename, value) {
  const blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

async function importProjectsBackup(file) {
  try {
    const backup = JSON.parse(await file.text());
    if (!Array.isArray(backup.projects) || !backup.projects.length) {
      throw new Error("备份文件中没有核算项目");
    }
    saveActiveProject();
    const imported = backup.projects.map((project) => {
      const duplicate = projects.some((item) => item.id === project.id);
      return {
        ...project,
        id: duplicate ? `project-imported-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` : project.id,
        projectName: duplicate ? `${project.projectName || "未命名项目"}（导入）` : project.projectName
      };
    });
    projects = [...imported, ...projects];
    persistState();
    render({ preserveScroll: true });
    showToast("项目备份已导入", `新增 ${imported.length} 个项目，现有项目未被覆盖`);
  } catch (error) {
    showToast("导入备份失败", error.message || "请选择由碳路先锋导出的 JSON 文件");
  }
}

async function shareReportLink() {
  const shareUrl = new URL(window.location.href);
  shareUrl.hash = "report";
  shareUrl.searchParams.set("share", encodeShareState());
  const url = shareUrl.href;
  if (url.length > MAX_SHARE_URL_LENGTH) {
    showToast(
      "数据量较大，未生成分享链接",
      "当前台账会让链接被聊天工具截断。请改用“打印 / 导出 PDF”或项目备份发送。"
    );
    return;
  }
  try {
    let shared = false;
    if (navigator.share) {
      try {
        await navigator.share({ title: "碳路先锋核算报告", text: "查看本期产品碳足迹核算报告", url });
        shared = true;
      } catch {}
    }
    if (!shared && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      shared = true;
    }
    if (!shared) {
      const input = document.createElement("textarea");
      input.value = url;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      shared = true;
    }
    showToast("报告快照链接已复制", "已包含当前项目数据快照，审阅人可直接打开");
  } catch {
    showToast("分享链接", url);
  }
}

function openSearch() {
  if (state.aiOpen) closeAI(false);
  if (document.getElementById("sidebar").classList.contains("open")) closeMobileMenu(false);
  saveActiveProject();
  const overlay = document.getElementById("search-overlay");
  lastSearchFocus = document.activeElement;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.getElementById("app-shell").setAttribute("inert", "");
  document.body.style.overflow = "hidden";
  renderSearchResults("");
  setTimeout(() => document.getElementById("global-search").focus(), 50);
}

function closeSearch(restoreFocus = true) {
  const overlay = document.getElementById("search-overlay");
  overlay?.classList.remove("open");
  overlay?.setAttribute("aria-hidden", "true");
  if (!state.aiOpen && !document.getElementById("sidebar").classList.contains("open")) {
    document.getElementById("app-shell").removeAttribute("inert");
    document.body.style.overflow = "";
  }
  if (restoreFocus && lastSearchFocus instanceof HTMLElement) {
    lastSearchFocus.focus({ preventScroll: true });
  }
}

function getSearchItems() {
  return [
    { icon: "scale", title: "碳流平衡校验", detail: "查看边界闭合状态与异常碳流", route: "balance" },
    { icon: "tree", title: state.projectName, detail: `${state.selections.product || "当前产品"} · 成本穿透`, route: "cost" },
    { icon: "globe", title: "CBAM 关税模拟", detail: `${state.dataAsOf} · 当前项目参数`, route: "cbam" },
    { icon: "report", title: "核算报告", detail: `${SOFTWARE_VERSION} · 可打印与分享`, route: "report" },
    ...state.ledgerRows.map((row) => ({
      icon: "file",
      title: row.name,
      detail: `${row.source} · ${formatNumber(row.emissions)} tCO₂e · ${row.status}`,
      route: "ledger"
    })),
    ...projects.map((project) => ({
      icon: "report",
      title: project.projectName,
      detail: `${project.projectPeriod} · ${project.projectStatus}`,
      route: "projects"
    })),
    { icon: "info", title: "软件信息与版权说明", detail: `${SOFTWARE_VERSION} · 运行环境 · 数据存储 · 使用范围`, route: "about" },
    { icon: "globe", title: "项目碳价参数", detail: `¥${state.carbonPrice.toFixed(2)}/t · ${state.dataAsOf}`, route: "cbam" }
  ];
}

function renderSearchResults(query) {
  const list = document.getElementById("search-results-list");
  const label = document.getElementById("search-label");
  if (!list) return;
  const normalized = query.trim().toLowerCase();
  const items = getSearchItems().filter((item) =>
    !normalized || `${item.title} ${item.detail}`.toLowerCase().includes(normalized)
  );
  label.textContent = normalized ? `搜索结果 · ${items.length} 项` : "快捷跳转与数据索引";
  list.innerHTML = items.length
    ? items.slice(0, 8).map((item) => `
      <button data-route="${item.route}">
        <span class="search-icon">${icon(item.icon)}</span>
        <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span>
        <kbd>↵</kbd>
      </button>
    `).join("")
    : `<div class="search-empty">没有找到匹配的数据</div>`;
}

function openAI() {
  if (document.getElementById("search-overlay").classList.contains("open")) closeSearch(false);
  if (document.getElementById("sidebar").classList.contains("open")) closeMobileMenu(false);
  state.aiOpen = true;
  lastAiFocus = document.activeElement;
  document.getElementById("ai-panel").classList.add("open");
  document.getElementById("ai-panel").setAttribute("aria-hidden", "false");
  document.getElementById("ai-panel").removeAttribute("inert");
  document.getElementById("app-shell").setAttribute("inert", "");
  document.body.style.overflow = "hidden";
  document.getElementById("topbar-ai").setAttribute("aria-expanded", "true");
  document.getElementById("ai-launcher").setAttribute("aria-expanded", "true");
  const roadEmissions = state.ledgerRows.filter((row) => classifyLedgerRow(row) === "transport").reduce((sum, row) => sum + Number(row.emissions || 0), 0);
  const improvement = Math.min(0.8, Math.max(0, (state.roadEmissionAdjustment - state.railEmissionAdjustment) / Math.max(0.01, state.cbamIntensity + state.roadEmissionAdjustment)));
  document.getElementById("ai-intro").textContent = `已读取「${state.projectName}」的 ${state.ledgerRows.length} 项活动数据和当前核算参数。需要我检查高碳运输线路或生成降碳建议吗？`;
  document.getElementById("ai-road-label").textContent = roadEmissions > 0 ? state.roadRoute : "当前尚未录入物流数据";
  document.getElementById("ai-saving-label").textContent = roadEmissions > 0 ? `预计 −${(improvement * 100).toFixed(1)}%` : "待测算";
  document.getElementById("ai-suggestion-copy").textContent = roadEmissions > 0
    ? `切换至「${state.railRoute}」预计影响 ${formatNumber(roadEmissions * improvement)} tCO₂e 运输排放。`
    : "完成物流台账录入后，可比较当前线路与低碳运输方案。";
  setTimeout(() => document.getElementById("ai-input").focus(), 240);
}

function closeAI(restoreFocus = true) {
  state.aiOpen = false;
  document.getElementById("ai-panel").classList.remove("open");
  document.getElementById("ai-panel").setAttribute("aria-hidden", "true");
  document.getElementById("ai-panel").setAttribute("inert", "");
  if (!document.getElementById("search-overlay").classList.contains("open") && !document.getElementById("sidebar").classList.contains("open")) {
    document.getElementById("app-shell").removeAttribute("inert");
    document.body.style.overflow = "";
  }
  document.getElementById("topbar-ai").setAttribute("aria-expanded", "false");
  document.getElementById("ai-launcher").setAttribute("aria-expanded", "false");
  if (restoreFocus && lastAiFocus instanceof HTMLElement) {
    lastAiFocus.focus({ preventScroll: true });
  }
}

function syncMobileNavigation() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;
  if (mobileViewport.matches) {
    if (!sidebar.classList.contains("open")) {
      sidebar.setAttribute("inert", "");
      sidebar.setAttribute("aria-hidden", "true");
    }
  } else {
    sidebar.classList.remove("open");
    sidebar.removeAttribute("inert");
    sidebar.removeAttribute("aria-hidden");
    document.getElementById("mobile-backdrop").classList.remove("open");
    document.getElementById("workspace")?.removeAttribute("inert");
    document.body.style.overflow = "";
    document.getElementById("mobile-menu")?.setAttribute("aria-expanded", "false");
  }
}

function toggleMobileMenu(force, restoreFocus = true) {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("mobile-backdrop");
  const workspace = document.querySelector(".workspace");
  const shouldOpen = typeof force === "boolean" ? force : !sidebar.classList.contains("open");
  if (!mobileViewport.matches) return;
  lastMenuFocus = shouldOpen ? document.activeElement : lastMenuFocus;
  sidebar.classList.toggle("open", shouldOpen);
  backdrop.classList.toggle("open", shouldOpen);
  sidebar.toggleAttribute("inert", !shouldOpen);
  sidebar.setAttribute("aria-hidden", String(!shouldOpen));
  workspace?.toggleAttribute("inert", shouldOpen);
  document.body.style.overflow = shouldOpen ? "hidden" : "";
  document.getElementById("mobile-menu").setAttribute("aria-expanded", String(shouldOpen));
  if (shouldOpen) {
    requestAnimationFrame(() => sidebar.querySelector(".nav-item")?.focus());
  } else if (restoreFocus && lastMenuFocus instanceof HTMLElement) {
    lastMenuFocus.focus({ preventScroll: true });
  }
}

function closeMobileMenu(restoreFocus = true) {
  toggleMobileMenu(false, restoreFocus);
}

function getAIResponse(prompt) {
  const balance = getBalanceMetrics();
  const costs = getCostMetrics();
  const roadEmissions = state.ledgerRows.filter((row) => classifyLedgerRow(row) === "transport").reduce((sum, row) => sum + Number(row.emissions || 0), 0);
  const routeImprovementShare = Math.min(0.8, Math.max(0, (state.roadEmissionAdjustment - state.railEmissionAdjustment) / Math.max(0.01, state.cbamIntensity + state.roadEmissionAdjustment)));
  if (prompt === "为什么碳流不平衡？") {
    return balance.balanced
      ? `当前碳流质量差异为 ${formatNumber(Math.abs(balance.difference), 1)} tC，输入与输出已经闭合。`
      : `当前检测到 ${formatNumber(Math.abs(balance.difference), 1)} tC 未闭合。请检查废液固碳、副产物固碳和逸散排放是否全部计入输出端。`;
  }
  if (prompt === "找出高碳线路") {
    return `已定位到「${state.roadRoute}」：当前台账排放 ${formatNumber(roadEmissions)} tCO₂e，分摊运输成本约 ¥${formatNumber(costs.transport, 2)} 万，是当前台账中最值得优化的价值链环节。`;
  }
  if (prompt === "生成降碳建议") {
    return `基于当前 ${formatNumber(getLedgerTotal())} tCO₂e 台账，建议优先：1）${state.railRoute}，预计减少 ${formatNumber(roadEmissions * routeImprovementShare)} tCO₂e；2）降低主要能源单耗；3）核验${state.province}电力因子与绿电占比。当前可优化运输成本约 ¥${formatNumber(costs.transport * routeImprovementShare, 2)} 万。`;
  }
  return `已读取当前 ${state.ledgerRows.length} 项活动数据和 ${formatNumber(getLedgerTotal())} tCO₂e 排放。可以继续询问碳流差异、成本构成或出口 CBAM 风险。`;
}

function appendAIResponse(prompt) {
  const messages = document.getElementById("ai-messages");
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user";
  userBubble.textContent = prompt;
  messages.appendChild(userBubble);

  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-bubble assistant";
  typingBubble.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
  messages.appendChild(typingBubble);
  messages.scrollTop = messages.scrollHeight;

  setTimeout(() => {
    const response = getAIResponse(prompt);
    typingBubble.textContent = response;
    messages.scrollTop = messages.scrollHeight;
  }, 780);
}

async function hashInviteCode(value) {
  const bytes = new TextEncoder().encode(value.trim().toUpperCase());
  if (!window.crypto?.subtle) throw new Error("当前浏览器不支持本地邀请码验证，请使用最新版 Chrome 或 Edge");
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function revealApplication() {
  const gate = document.getElementById("access-gate");
  const appShell = document.getElementById("app-shell");
  const skipLink = document.getElementById("skip-link");
  if (gate) gate.hidden = true;
  if (appShell) {
    appShell.hidden = false;
    appShell.removeAttribute("inert");
  }
  if (skipLink) skipLink.hidden = false;
  document.body.classList.remove("access-locked");
}

function lockAccess() {
  try {
    localStorage.removeItem(INVITE_STORAGE_KEY);
  } catch {}
  const url = new URL(window.location.href);
  url.hash = "dashboard";
  url.searchParams.delete("share");
  url.searchParams.set("lock", Date.now().toString());
  window.location.replace(url.href);
}

function startApplication() {
  if (applicationStarted) return;
  applicationStarted = true;
  const currentUrl = new URL(window.location.href);
  if (currentUrl.searchParams.has("lock")) {
    currentUrl.searchParams.delete("lock");
    history.replaceState(null, "", currentUrl.href);
  }
  const initialRoute = window.location.hash.slice(1);
  if (pageRenderers[initialRoute]) {
    state.route = initialRoute;
  }
  const hasSharedSnapshot = new URLSearchParams(window.location.search).has("share");
  restoreState();
  ensureDemoProject(!hasSharedSnapshot);
  syncMobileNavigation();
  render();
  syncMobileNavigation();
}

async function initializeAccessGate() {
  const gate = document.getElementById("access-gate");
  const form = document.getElementById("invite-form");
  const appShell = document.getElementById("app-shell");
  const skipLink = document.getElementById("skip-link");
  if (!ACCESS_GATE_ENABLED) {
    if (gate) gate.hidden = true;
    revealApplication();
    startApplication();
    return;
  }
  if (!gate || !form || !appShell) {
    revealApplication();
    startApplication();
    return;
  }

  let granted = false;
  try {
    granted = localStorage.getItem(INVITE_STORAGE_KEY) === "granted";
  } catch {}
  if (granted) {
    revealApplication();
    startApplication();
    return;
  }

  document.body.classList.add("access-locked");
  appShell.hidden = true;
  appShell.setAttribute("inert", "");
  if (skipLink) skipLink.hidden = true;
  const input = document.getElementById("invite-code");
  const error = document.getElementById("invite-error");
  const submit = form.querySelector('button[type="submit"]');
  requestAnimationFrame(() => input?.focus());

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!input || !submit) return;
    const value = input.value.trim().toUpperCase();
    error.hidden = true;
    error.textContent = "";
    input.removeAttribute("aria-invalid");
    if (!value) {
      error.textContent = "请输入邀请码后继续。";
      error.hidden = false;
      input.setAttribute("aria-invalid", "true");
      input.focus();
      return;
    }
    input.value = value;
    submit.disabled = true;
    submit.textContent = "验证中…";
    try {
      const codeHash = await hashInviteCode(value);
      if (codeHash !== INVITE_CODE_HASH) {
        error.textContent = "邀请码不正确，请检查字符和分隔符后重试。";
        error.hidden = false;
        input.setAttribute("aria-invalid", "true");
        input.select();
        return;
      }
      let authorizationRemembered = true;
      try {
        localStorage.setItem(INVITE_STORAGE_KEY, "granted");
      } catch {
        authorizationRemembered = false;
      }
      revealApplication();
      startApplication();
      requestAnimationFrame(() => document.getElementById("page-content")?.focus({ preventScroll: true }));
      if (!authorizationRemembered) {
        setTimeout(() => {
          showToast("本设备无法记住授权", "浏览器禁止写入本地存储，本次可以继续使用，但刷新后需要重新输入邀请码");
        }, 80);
      }
    } catch (failure) {
      error.textContent = failure.message || "邀请码验证失败，请使用最新版浏览器重试。";
      error.hidden = false;
      input.focus();
    } finally {
      if (!applicationStarted) {
        submit.disabled = false;
        submit.textContent = "进入系统";
      }
    }
  });

  input?.addEventListener("input", () => {
    input.removeAttribute("aria-invalid");
    error.hidden = true;
    error.textContent = "";
  });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    event.preventDefault();
    if (routeButton.dataset.newProject === "true") beginNewProject();
    else navigate(routeButton.dataset.route);
    return;
  }

  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const action = actionElement.dataset.action;
  const value = actionElement.dataset.value;

  switch (action) {
    case "export-projects":
      saveActiveProject();
      downloadJson(`碳路先锋_项目备份_${new Date().toISOString().slice(0, 10)}.json`, {
        version: 2,
        exportedAt: new Date().toISOString(),
        activeProjectId,
        projects
      });
      showToast("项目备份已导出", `共 ${projects.length} 个项目，可在其他设备重新导入`);
      break;
    case "import-projects":
      document.getElementById("project-backup-input")?.click();
      break;
    case "new-project":
      beginNewProject();
      break;
    case "open-project":
      openProject(actionElement.dataset.id);
      break;
    case "duplicate-project":
      duplicateProject(actionElement.dataset.id);
      break;
    case "delete-project":
      deleteProject(actionElement.dataset.id);
      break;
    case "wizard-next":
      {
        const validation = getWizardStepValidation(state.wizardStep);
        if (!validation.valid) {
          showWizardValidation(validation);
          showToast("请完善当前步骤", validation.message);
          break;
        }
      }
      state.wizardStep = Math.min(3, state.wizardStep + 1);
      render();
      break;
    case "wizard-prev":
      state.wizardStep = Math.max(1, state.wizardStep - 1);
      render();
      break;
    case "generate-boundary":
      {
        const failedStep = [1, 2, 3]
          .map((step) => ({ step, validation: getWizardStepValidation(step) }))
          .find(({ validation }) => !validation.valid);
        if (failedStep) {
          state.wizardStep = failedStep.step;
          render({ preserveScroll: true });
          requestAnimationFrame(() => showWizardValidation(failedStep.validation));
          showToast(`请完善第 ${failedStep.step} 步`, failedStep.validation.message);
          break;
        }
      }
      state.projectStatus = "active";
      state.ledgerLoaded = true;
      persistState();
      showToast("新项目已保存", `${state.projectName} · 现在可以录入活动数据`);
      setTimeout(() => navigate("ledger"), 450);
      break;
    case "go-wizard":
      state.wizardStep = 1;
      navigate("wizard");
      break;
    case "go-ledger":
      navigate("ledger");
      break;
    case "pick-file":
      document.getElementById("file-input")?.click();
      break;
    case "download-ledger-template":
      downloadCsv("碳路先锋_活动台账模板.csv", [
        ["name", "source", "amount", "unit", "factor", "factor_unit", "emissions", "status"],
        ["示例：外购电力（请替换）", "电费单", "1284.6", "MWh", String(state.electricityFactor), "tCO₂e/MWh", "", "待确认"]
      ]);
      showToast("CSV 模板已下载", "请替换示例行，保存为 UTF-8 CSV 后再导入");
      break;
    case "load-demo":
      if (state.ledgerRows.length && !window.confirm(`当前台账已有 ${state.ledgerRows.length} 项数据。载入示例台账会替换现有内容，且不会自动恢复。建议先导出活动数据。是否继续？`)) break;
      simulateLedger();
      break;
    case "add-source-data": {
      const presets = {
        purchase: { source: "采购发票", unit: "t", factorUnit: "tCO₂e/t" },
        energy: { source: "能源账单", unit: "MWh", factorUnit: "tCO₂e/MWh" },
        logistics: { source: "物流运单", unit: "t·km", factorUnit: "kgCO₂e/t·km" }
      };
      const preset = presets[value] || presets.purchase;
      state.ledgerRows.push({
        name: "",
        source: preset.source,
        amount: "",
        unit: preset.unit,
        factor: "",
        factorUnit: preset.factorUnit,
        emissions: 0,
        status: "待确认"
      });
      state.ledgerLoaded = true;
      markProjectActive();
      persistState();
      render({ preserveScroll: true });
      requestAnimationFrame(() => {
        document.querySelector(`[data-ledger-index="${state.ledgerRows.length - 1}"][data-ledger-field="name"]`)?.focus();
      });
      break;
    }
    case "add-ledger-row": {
      state.ledgerRows.push({
        name: "",
        source: "",
        amount: "",
        unit: "t",
        factor: "",
        factorUnit: "tCO₂e/t",
        emissions: 0,
        status: "待确认"
      });
      state.ledgerLoaded = true;
      markProjectActive();
      persistState();
      render({ preserveScroll: true });
      requestAnimationFrame(() => {
        document.querySelector(`[data-ledger-index="${state.ledgerRows.length - 1}"][data-ledger-field="name"]`)?.focus();
      });
      break;
    }
    case "delete-ledger-row": {
      const index = Number(actionElement.dataset.index);
      const row = state.ledgerRows[index];
      if (!row) break;
      if (row.name && !window.confirm(`删除活动数据「${row.name}」？`)) break;
      state.ledgerRows.splice(index, 1);
      state.cbamIntensity = getLedgerTotal() / Math.max(1, state.productOutput);
      markProjectActive();
      persistState();
      render({ preserveScroll: true });
      showToast("活动数据已删除", `当前项目剩余 ${state.ledgerRows.length} 项`);
      break;
    }
    case "go-balance":
      if (!state.ledgerRows.length) {
        showToast("暂时不能进入碳流校验", "请先新增或导入至少一项活动数据");
        break;
      }
      navigate("balance");
      break;
    case "import-ledger-to-balance": {
      if (!state.ledgerRows.length) {
        showToast("没有可带入的台账", "请先在数据台账中新增或导入活动数据");
        break;
      }
      const carbonMass = getLedgerTotal() * CO2_TO_CARBON_FACTOR;
      state.balanceMass = {
        input: Number(carbonMass.toFixed(4)),
        product: Number(carbonMass.toFixed(4)),
        waste: 0,
        byproductLoss: 0
      };
      state.includeWasteCarbon = false;
      markProjectActive();
      render({ preserveScroll: true });
      showToast("已带入台账排放总量", "已换算为 tC 并作为输入/产品起始值，请按工艺实际拆分副产品与废液固碳。");
      break;
    }
    case "balance-mode":
      state.balanceMode = value;
      render({ preserveScroll: true });
      break;
    case "rerun-balance":
      {
        const metrics = getBalanceMetrics();
        const presentation = getBalancePresentation(metrics);
        showToast(metrics.balanced ? "守恒校验通过" : presentation.status, metrics.balanced ? "输入与输出碳质量差异 0.00%" : presentation.result);
      }
      break;
    case "auto-add-waste":
    case "include-waste": {
      markProjectActive();
      const metrics = getBalanceMetrics();
      const gap = Math.max(0, metrics.difference);
      const nextWaste = state.balanceMass.waste + gap;
      if (gap > 0 && nextWaste <= 250) {
        state.balanceMass.waste = Number(nextWaste.toFixed(1));
        state.includeWasteCarbon = true;
        render({ preserveScroll: true });
        showToast("废液碳流已补录", `输出端增加 ${formatNumber(gap, 1)} tC，天平已重新闭合`);
      } else {
        resetBalanceValues();
        render({ preserveScroll: true });
        showToast(
          state.isDemoData ? "已恢复基准数据" : "碳流数据已清空",
          state.isDemoData ? "当前差异超出废液可补录范围，请按原始台账修正" : "当前差异超出自动补录范围，请按原始台账重新填写输入与输出碳流"
        );
      }
      break;
    }
    case "fill-balance": {
      const targetIndex = state.balanceMass.input <= 0 ? 0 : state.balanceMass.product <= 0 ? 1 : 2;
      document.querySelector(`[data-balance-index="${targetIndex}"]`)?.focus();
      showToast("请继续填写碳流", "输入碳、产品固碳、副产品固碳和废液固碳都需要填写");
      break;
    }
    case "reset-balance":
      markProjectActive();
      resetBalanceValues();
      render({ preserveScroll: true });
      showToast(
        state.isDemoData ? "已恢复基准数据" : "碳流数据已清空",
        state.isDemoData ? "输入、产品和废液碳流已恢复到可校验状态" : "请按原始台账重新填写输入碳、产品固碳、副产品固碳和废液固碳"
      );
      break;
    case "cost-method":
      markProjectActive();
      state.costMethod = value;
      render({ preserveScroll: true });
      showToast("分摊方式已切换", `当前按「${value}」重新计算订单碳成本`);
      break;
    case "apply-route":
      markProjectActive();
      state.cbamApplied = true;
      state.selectedRoute = "rail";
      showToast("优化方案已应用", "公转铁联运已带入 CBAM 模拟，测算结果已实时更新");
      navigate("cbam");
      break;
    case "calculate-cbam":
      markProjectActive();
      state.cbamApplied = state.selectedRoute === "rail";
      updateCBAMDom();
      {
        const result = computeCBAM();
        showToast("测算结果已更新", `${state.selectedRoute === "rail" ? "公转铁联运" : "全程公路"}方案 · 预计关税 €${result.duty.toLocaleString("en-US")}（${formatCnyEquivalent(result.duty)}）`);
      }
      break;
    case "export-cost-csv": {
      const costs = getCostMetrics();
      downloadCsv(`碳路先锋_成本分摊_${state.costMethod}.csv`, [
        ["项目", "数值", "单位", "说明"],
        ["分摊方式", state.costMethod, "", ""],
        ["总碳成本", costs.total.toFixed(2), "万元", `项目碳价 ${state.carbonPrice} 元/t`],
        ["单位产品碳成本", costs.unit.toFixed(2), "元/t", `产品产量 ${state.productOutput} t`],
        ["工艺过程排放", costs.process.toFixed(2), "万元", ""],
        ["运输作业", costs.transport.toFixed(2), "万元", state.roadRoute],
        ["外购电力", costs.electricity.toFixed(2), "万元", `${state.province}因子 ${state.electricityFactor}`],
        ["原料隐含碳", costs.material.toFixed(2), "万元", "采购与原料活动"],
        [],
        ["台账数据项", "排放量", "单位", "来源"],
        ...state.ledgerRows.map((row) => [row.name, row.emissions.toFixed(2), "tCO₂e", row.source])
      ]);
      showToast("分摊明细已导出", "包含当前分摊方式、成本构成和台账来源");
      break;
    }
    case "export-cbam-csv": {
      const cbam = computeCBAM();
      downloadCsv("碳路先锋_CBAM测算结果.csv", [
        ["项目", "数值", "单位", "人民币参考值（CNY）"],
        ["数据日期", state.dataAsOf, "", ""],
        ["出口数量", state.cbamVolume, "t", ""],
        ["产品碳强度", state.cbamIntensity.toFixed(2), "tCO₂e/t", ""],
        ["参考汇率", EUR_CNY_RATE.toFixed(4), "CNY/EUR", ""],
        ["欧盟碳价", state.cbamEuPrice.toFixed(2), "EUR/tCO₂e", euroToCny(state.cbamEuPrice).toFixed(2)],
        ["项目碳价", state.carbonPrice.toFixed(2), "CNY/tCO₂e", state.carbonPrice.toFixed(2)],
        ["运输方案", state.selectedRoute === "rail" ? "公转铁联运" : "全程公路", "", ""],
        ["订单隐含排放", cbam.embedded.toFixed(2), "tCO₂e", ""],
        ["全程公路关税", cbam.roadDuty, "EUR", euroToCny(cbam.roadDuty).toFixed(2)],
        ["公转铁关税", cbam.railDuty, "EUR", euroToCny(cbam.railDuty).toFixed(2)],
        ["当前方案关税", cbam.duty, "EUR", euroToCny(cbam.duty).toFixed(2)]
      ]);
      showToast("CBAM 结果已导出", "CSV 包含当前参数、排放与情景关税");
      break;
    }
    case "print-report":
      window.print();
      break;
    case "complete-project":
      {
        const issues = getProjectCompletionIssues();
        if (issues.length) {
          showToast(
            "暂时无法完成项目",
            `还需处理：${issues.slice(0, 3).join("；")}${issues.length > 3 ? "；请查看报告顶部完整提示" : ""}`
          );
          break;
        }
        state.projectStatus = "ready";
        persistState();
        render({ preserveScroll: true });
        showToast("项目已标记完成", `${state.projectName} · 报告与台账已通过完整性检查`);
        break;
      }
    case "share-report":
      shareReportLink();
      break;
    case "lock-access":
      lockAccess();
      break;
  }
});

document.getElementById("search-trigger").addEventListener("click", openSearch);
document.getElementById("search-close").addEventListener("click", closeSearch);
document.getElementById("search-overlay").addEventListener("click", (event) => {
  if (event.target.id === "search-overlay") closeSearch();
});
document.getElementById("global-search").addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});
document.getElementById("global-search").addEventListener("keydown", (event) => {
  const results = [...document.querySelectorAll("#search-results-list button")];
  if (event.key === "ArrowDown" && results.length) {
    event.preventDefault();
    results[0].focus();
  } else if (event.key === "Enter" && results.length) {
    event.preventDefault();
    results[0].click();
  }
});
document.getElementById("search-results-list").addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
  const results = [...document.querySelectorAll("#search-results-list button")];
  const index = results.indexOf(document.activeElement);
  if (index < 0) return;
  event.preventDefault();
  const nextIndex = event.key === "ArrowDown"
    ? Math.min(results.length - 1, index + 1)
    : Math.max(0, index - 1);
  results[nextIndex].focus();
});

document.getElementById("notification-button").addEventListener("click", () => {
  showToast("2 条待处理提醒", "公路运输线路碳成本超标 · 报告等待管理层签认");
});
document.getElementById("mobile-menu").addEventListener("click", () => toggleMobileMenu());
document.getElementById("mobile-backdrop").addEventListener("click", closeMobileMenu);
document.getElementById("ai-launcher").addEventListener("click", () => state.aiOpen ? closeAI() : openAI());
document.getElementById("topbar-ai").addEventListener("click", () => state.aiOpen ? closeAI() : openAI());
document.getElementById("ai-close").addEventListener("click", closeAI);
document.querySelectorAll(".ai-quick-prompts button").forEach((button) => {
  button.addEventListener("click", () => appendAIResponse(button.dataset.prompt));
});
document.getElementById("ai-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("ai-input");
  const prompt = input.value.trim();
  if (!prompt) return;
  input.value = "";
  appendAIResponse(prompt);
});

document.addEventListener("keydown", (event) => {
  if (!applicationStarted) return;
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
  if (event.key === "Escape") {
    if (document.getElementById("search-overlay").classList.contains("open")) {
      closeSearch();
    } else if (state.aiOpen) {
      closeAI();
    } else if (document.getElementById("sidebar").classList.contains("open")) {
      closeMobileMenu();
    }
  }
});

window.addEventListener("hashchange", () => {
  if (!applicationStarted) return;
  const route = window.location.hash.slice(1);
  if (pageRenderers[route] && route !== state.route) {
    state.route = route;
    render({ focusContent: true });
  }
});

mobileViewport.addEventListener("change", syncMobileNavigation);
window.addEventListener("pagehide", () => {
  if (applicationStarted) flushPersist();
});
document.addEventListener("visibilitychange", () => {
  if (applicationStarted && document.visibilityState === "hidden") flushPersist();
});

document.addEventListener("dragover", (event) => {
  const zone = event.target.closest("#upload-zone");
  if (!zone) return;
  event.preventDefault();
  zone.classList.add("dragover");
});

document.addEventListener("dragleave", (event) => {
  const zone = event.target.closest("#upload-zone");
  if (!zone) return;
  zone.classList.remove("dragover");
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest("#upload-zone");
  if (!zone) return;
  event.preventDefault();
  zone.classList.remove("dragover");
  const file = event.dataTransfer.files[0];
  if (file) importLedgerFile(file);
});

initializeAccessGate();
