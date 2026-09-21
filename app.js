const trainers = [
  {
    id: "hafizuddin-rahman", name: "Hafizuddin Abd Rahman", type: "Freelance", state: "Selangor",
    specs: ["SHO examination preparation", "HIRARC and risk assessment", "Construction safety"], grade: "AAA", score: 94, outlook: "Stable", stars: 5, evaluations: 412, years: 14, hrd: true,
    action: "Affirmed", actionDate: "12 Aug 2026", nextReview: "August 2027", days: 96,
    pillars: { Credentials: 96, Experience: 94, Delivery: 90, Outcomes: 92, Conduct: 100 },
    credentials: ["DOSH Safety and Health Officer", "HRD Corp Accredited Trainer", "NEBOSH International General Certificate", "MSOSH member"],
    industries: "Construction, Manufacturing, Utilities", languages: "Bahasa Malaysia, English",
    rationale: "The rating reflects two decades of site practice, a fully current credential set and the strongest verified learner outcomes in the SHO preparation category.",
    strengths: ["First-attempt pass rate of 91% across 212 verified SHO examination candidates over 24 months", "Observed delivery scored in the top decile for case realism and assessment design", "No conduct findings; every certificate issued reconciles to attendance records"],
    constraints: ["At 96 training days a year, availability is tight and key-person risk is high"],
    raise: "Not applicable at the top of the scale.", lower: "A lapse in SHO registration currency, or verified outcomes falling out of the top quartile for two review periods."
  },
  {
    id: "noraini-salleh", name: "Noraini Salleh", type: "With a training provider", state: "Johor",
    specs: ["Chemical management and CHRA", "HIRARC and risk assessment"], grade: "AA", score: 88, outlook: "Positive", stars: 4, evaluations: 268, years: 9, hrd: true,
    action: "Outlook revised", actionDate: "3 Sept 2026", nextReview: "September 2027", days: 64,
    pillars: { Credentials: 92, Experience: 85, Delivery: 84, Outcomes: 86, Conduct: 100 },
    credentials: ["DOSH Chemical Health Risk Assessor", "DOSH Safety and Health Officer", "HRD Corp Accredited Trainer"],
    industries: "Petrochemical, Manufacturing, Plantation and agriculture", languages: "Bahasa Malaysia, English",
    rationale: "Deep chemical health specialism with source-verified assessor status. The positive outlook reflects outcome scores that have risen for three consecutive review periods.",
    strengths: ["Assessor competency and SHO registration are verified at source and current", "Course materials map each module to duties under the USECHH Regulations 2000", "Repeat engagement from 7 of 10 sampled clients"],
    constraints: ["The evaluation base is concentrated in two large clients", "Little delivery outside the southern region"],
    raise: "Outcome scores holding above 85 through the next review, from a broader client base.", lower: "Loss of assessor currency, or a material drop in verified evaluations."
  },
  {
    id: "lim-chee-keong", name: "Lim Chee Keong", type: "Freelance", state: "Pulau Pinang",
    specs: ["Machinery safety and LOTO", "Ergonomics", "Accident investigation"], grade: "AA", score: 86, outlook: "Stable", stars: 5, evaluations: 301, years: 11, hrd: true,
    action: "Affirmed", actionDate: "19 Mar 2026", nextReview: "March 2027", days: 78,
    pillars: { Credentials: 84, Experience: 90, Delivery: 82, Outcomes: 85, Conduct: 95 },
    credentials: ["DOSH Safety and Health Officer", "HRD Corp Accredited Trainer", "ISO 45001 lead auditor"], industries: "Electrical and electronics, Manufacturing", languages: "English, Bahasa Malaysia, Mandarin",
    rationale: "A plant-floor practitioner whose lockout and machinery guarding courses draw on 19 years in semiconductor and electronics manufacturing.",
    strengths: ["Top learner scores in the machinery safety category", "Fluent delivery in three languages", "Practical assessments use the client's own equipment"], constraints: ["Outcome evidence is concentrated in manufacturing"], raise: "Broader cross-industry evidence with sustained outcomes.", lower: "A material decline in observed delivery or conduct."
  },
  {
    id: "kavitha-subramaniam", name: "Kavitha Subramaniam", type: "Freelance", state: "WP Kuala Lumpur",
    specs: ["Ergonomics", "Noise and hearing conservation", "OSH management systems (ISO 45001)"], grade: "AA", score: 82, outlook: "Stable", stars: 4, evaluations: 190, years: 7, hrd: true,
    action: "Upgraded", actionDate: "30 Jun 2026", nextReview: "June 2027", days: 55,
    pillars: { Credentials: 88, Experience: 80, Delivery: 84, Outcomes: 78, Conduct: 100 }, credentials: ["DOSH Ergonomics Trained Person", "HRD Corp Accredited Trainer", "ISO 45001 lead auditor"], industries: "Manufacturing, Healthcare, Services", languages: "English, Bahasa Malaysia, Tamil",
    rationale: "Strong evidence-led ergonomics practice, supported by clear observation methods and consistently high learner feedback.", strengths: ["Practical workstation assessment exercises", "Strong multilingual facilitation", "Current specialist credentials"], constraints: ["Long-term outcome sample remains modest"], raise: "A larger verified outcomes sample.", lower: "Credential lapse or weaker learner outcomes."
  },
  {
    id: "siti-hajar-yusof", name: "Siti Hajar Yusof", type: "Freelance", state: "Selangor",
    specs: ["First aid, CPR and AED", "Fire safety and emergency response"], grade: "A", score: 78, outlook: "Stable", stars: 4, evaluations: 356, years: 9, hrd: true,
    action: "Affirmed", actionDate: "14 Jul 2026", nextReview: "July 2027", days: 82,
    pillars: { Credentials: 80, Experience: 78, Delivery: 82, Outcomes: 72, Conduct: 100 }, credentials: ["First aid instructor", "HRD Corp Accredited Trainer"], industries: "Healthcare, Manufacturing, Education", languages: "Bahasa Malaysia, English",
    rationale: "A reliable first-aid educator with high-volume delivery and strong practical demonstration skills.", strengths: ["Large verified learner sample", "Clear hands-on assessment", "Strong client retention"], constraints: ["Limited evidence of workplace outcome transfer"], raise: "Verified post-course workplace outcomes.", lower: "A decline in assessment consistency."
  },
  {
    id: "faizal-othman", name: "Mohd Faizal Othman", type: "With a training provider", state: "Terengganu",
    specs: ["Confined space and gas testing", "Fire safety and emergency response"], grade: "A", score: 75, outlook: "Positive", stars: 3, evaluations: 144, years: 6, hrd: true,
    action: "Upgraded", actionDate: "22 Jan 2026", nextReview: "January 2027", days: 62,
    pillars: { Credentials: 82, Experience: 76, Delivery: 72, Outcomes: 69, Conduct: 100 }, credentials: ["Authorised Gas Tester and Entry Supervisor", "HRD Corp Accredited Trainer"], industries: "Oil and gas, Petrochemical", languages: "Bahasa Malaysia, English",
    rationale: "Current technical credentials and strong field realism support the rating; the positive outlook follows improving learner outcomes.", strengths: ["Current AGTES competency", "Realistic rescue scenarios", "Good evidence discipline"], constraints: ["Moderate evaluation sample"], raise: "Sustained outcomes above the register median.", lower: "Any lapse in regulated competency."
  },
  {
    id: "tan-wei-ling", name: "Tan Wei Ling", type: "With a training provider", state: "WP Kuala Lumpur",
    specs: ["Noise and hearing conservation", "Ergonomics"], grade: "A", score: 73, outlook: "Stable", stars: 3, evaluations: 97, years: 4, hrd: true,
    action: "Affirmed", actionDate: "26 Aug 2026", nextReview: "August 2027", days: 48,
    pillars: { Credentials: 84, Experience: 68, Delivery: 73, Outcomes: 66, Conduct: 100 }, credentials: ["DOSH Noise Risk Assessor", "HRD Corp Accredited Trainer"], industries: "Manufacturing, Construction", languages: "English, Mandarin, Bahasa Malaysia",
    rationale: "Technically strong and current in noise-risk practice, with credible observed delivery and developing outcome evidence.", strengths: ["Source-verified specialist registration", "Clear technical explanations", "Current industry examples"], constraints: ["Relatively short training track record"], raise: "A broader verified evaluation base.", lower: "Loss of specialist currency."
  },
  {
    id: "rajendran-pillai", name: "Rajendran Pillai", type: "Freelance", state: "Perak",
    specs: ["Construction safety", "Working at height and scaffolding"], grade: "A", score: 70, outlook: "Negative", stars: 3, evaluations: 122, years: 12, hrd: true,
    action: "Affirmed, outlook revised", actionDate: "10 Mar 2026", nextReview: "March 2027", days: 71,
    pillars: { Credentials: 72, Experience: 88, Delivery: 68, Outcomes: 62, Conduct: 78 }, credentials: ["DOSH Site Safety Supervisor", "HRD Corp Accredited Trainer"], industries: "Construction, Utilities", languages: "English, Bahasa Malaysia, Tamil",
    rationale: "Deep construction experience supports the grade, while uneven recent outcomes and a minor conduct concern drive the negative outlook.", strengths: ["Extensive site experience", "Credible practical demonstrations"], constraints: ["Recent evaluation trend is weaker", "One minor conduct finding under surveillance"], raise: "Resolution of the watch items and improving outcomes.", lower: "A further upheld conduct finding."
  },
  {
    id: "azman-shah-ibrahim", name: "Azman Shah Ibrahim", type: "Freelance", state: "Pahang",
    specs: ["Forklift and defensive driving", "Machinery safety and LOTO"], grade: "BBB", score: 67, outlook: "Stable", stars: 3, evaluations: 88, years: 8, hrd: true,
    action: "Upgraded", actionDate: "5 May 2026", nextReview: "May 2027", days: 52,
    pillars: { Credentials: 66, Experience: 78, Delivery: 67, Outcomes: 57, Conduct: 100 }, credentials: ["HRD Corp Accredited Trainer", "NIOSH Malaysia Train the Trainer"], industries: "Logistics and warehousing, Manufacturing", languages: "Bahasa Malaysia, English",
    rationale: "Sound and dependable delivery, with adequate evidence across all pillars and scope to strengthen measured outcomes.", strengths: ["Strong equipment familiarity", "Clear practical checks"], constraints: ["Limited post-course outcome data"], raise: "Independent evidence of reduced operating incidents.", lower: "A decline in practical assessment quality."
  },
  {
    id: "nur-aisyah-kamaruddin", name: "Nur Aisyah Kamaruddin", type: "In-house for my employer", state: "Negeri Sembilan",
    specs: ["OSH Coordinator (OSH-C)", "HIRARC and risk assessment"], grade: "BBB(p)", score: 64, outlook: "Positive", stars: 0, evaluations: 0, years: 2, hrd: true,
    action: "Assigned (preliminary)", actionDate: "21 Jul 2026", nextReview: "After observation", days: 28,
    pillars: { Credentials: 72, Experience: 52, Delivery: 65, Outcomes: 58, Conduct: 100 }, credentials: ["OSH Coordinator course", "HRD Corp Accredited Trainer"], industries: "Manufacturing", languages: "Bahasa Malaysia, English",
    rationale: "A promising preliminary rating based on current credentials, well-structured materials and early evidence from in-house cohorts.", strengths: ["Well-structured course materials", "Positive early learner evidence"], constraints: ["Live observation is pending", "Short training history"], raise: "A strong observed session and broader evidence.", lower: "Weak observed delivery or unverified evidence."
  },
  {
    id: "jason-wong", name: "Jason Wong Kah Fai", type: "With a training provider", state: "Johor",
    specs: ["Fire safety and emergency response", "First aid, CPR and AED"], grade: "BBB", score: 61, outlook: "Watch negative", stars: 2, evaluations: 75, years: 8, hrd: true,
    action: "Placed on watch", actionDate: "8 Sept 2026", nextReview: "December 2026", days: 58,
    pillars: { Credentials: 76, Experience: 72, Delivery: 58, Outcomes: 48, Conduct: 65 }, credentials: ["HRD Corp Accredited Trainer", "First aid instructor"], industries: "Manufacturing, Hospitality and services", languages: "English, Mandarin, Bahasa Malaysia",
    rationale: "Credentials and experience remain sound, but a recent complaint and weak learner outcomes require heightened surveillance.", strengths: ["Relevant emergency-response experience", "Current credentials"], constraints: ["Recent learner feedback is below median", "Complaint review remains open"], raise: "Complaint closure with sustained improvement.", lower: "An upheld material conduct finding."
  },
  {
    id: "dayang-norhaliza", name: "Dayang Norhaliza Awang", type: "Freelance", state: "Sarawak",
    specs: ["OSH Coordinator (OSH-C)", "Safety committee and OSH legislation"], grade: "BB", score: 57, outlook: "Positive", stars: 3, evaluations: 61, years: 3, hrd: false,
    action: "Outlook revised", actionDate: "4 Aug 2026", nextReview: "August 2027", days: 34,
    pillars: { Credentials: 54, Experience: 48, Delivery: 67, Outcomes: 51, Conduct: 100 }, credentials: ["OSH Coordinator course", "NIOSH Malaysia Train the Trainer"], industries: "Public sector, Plantation and agriculture", languages: "Bahasa Malaysia, English",
    rationale: "Engaging delivery and a positive trend are offset by a short track record and a limited set of verified credentials.", strengths: ["Strong observed engagement", "Improving learner feedback"], constraints: ["Thin experience and outcomes evidence"], raise: "More verified delivery and an accredited trainer credential.", lower: "Stalled evidence growth."
  },
  {
    id: "jeffery-gimbang", name: "Jeffery Gimbang", type: "Freelance", state: "Sabah",
    specs: ["Forklift and defensive driving"], grade: "BB", score: 53, outlook: "Stable", stars: 2, evaluations: 40, years: 5, hrd: true,
    action: "Assigned", actionDate: "13 Jan 2026", nextReview: "January 2027", days: 31,
    pillars: { Credentials: 60, Experience: 62, Delivery: 55, Outcomes: 35, Conduct: 100 }, credentials: ["HRD Corp Accredited Trainer"], industries: "Logistics and warehousing, Plantation and agriculture", languages: "Bahasa Malaysia, English",
    rationale: "Relevant practical experience is present, but delivery and outcome evidence remain too thin for engagement grade.", strengths: ["Useful local industry experience", "Current trainer accreditation"], constraints: ["Small evaluation base", "No verified outcome measures"], raise: "A stronger observation and verified outcomes.", lower: "Credential lapse or adverse conduct."
  },
  {
    id: "zulkifli-hamzah", name: "Zulkifli Hamzah", type: "Freelance", state: "Kedah",
    specs: ["Safety committee and OSH legislation", "HIRARC and risk assessment"], grade: "B", score: 43, outlook: "Negative", stars: 1, evaluations: 34, years: 10, hrd: false,
    action: "Downgraded", actionDate: "9 Jun 2026", nextReview: "December 2026", days: 24,
    pillars: { Credentials: 36, Experience: 70, Delivery: 40, Outcomes: 25, Conduct: 58 }, credentials: ["NIOSH Malaysia Train the Trainer"], industries: "Manufacturing, Public sector", languages: "Bahasa Malaysia",
    rationale: "Material gaps in credential currency and outcomes evidence outweigh a long practice history.", strengths: ["Long practical experience", "Local-language delivery"], constraints: ["Credential evidence is incomplete", "Weak learner outcomes", "Corrective action remains open"], raise: "Verified current credentials and a completed improvement plan.", lower: "Further non-compliance or conduct findings."
  }
];

const states = ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Sabah", "Sarawak", "Selangor", "Terengganu", "WP Kuala Lumpur", "WP Labuan", "WP Putrajaya"];
const specialisations = ["SHO examination preparation", "OSH Coordinator (OSH-C)", "HIRARC and risk assessment", "Construction safety", "Working at height and scaffolding", "Chemical management and CHRA", "Noise and hearing conservation", "Ergonomics", "Confined space and gas testing", "Machinery safety and LOTO", "Electrical safety", "Fire safety and emergency response", "First aid, CPR and AED", "Forklift and defensive driving", "Accident investigation", "OSH management systems (ISO 45001)", "Safety committee and OSH legislation"];
const industries = ["Construction", "Manufacturing", "Electrical and electronics", "Oil and gas", "Petrochemical", "Plantation and agriculture", "Logistics and warehousing", "Healthcare", "Utilities", "Hospitality and services", "Education", "Public sector"];
const credentials = ["Safety and Health Officer (SHO)", "Chemical Health Risk Assessor", "Noise Risk Assessor", "Authorised Gas Tester and Entry Supervisor (AGTES)", "Site Safety Supervisor (SSS)", "OSH Coordinator (OSH-C) course", "Ergonomics Trained Person (ETP)", "HRD Corp Accredited Trainer", "HRD Corp Train-The-Trainer (TTT) certificate", "NIOSH Malaysia Train the Trainer", "CIDB accredited trainer", "NEBOSH International General Certificate", "ISO 45001 lead auditor", "MSOSH membership", "Other"];
const medians = { Credentials: 76, Experience: 71, Delivery: 66, Outcomes: 67, Conduct: 98 };
const gradeOrder = { AAA: 7, AA: 6, A: 5, BBB: 4, "BBB(p)": 3.8, BB: 3, B: 2, C: 1, NR: 0 };
const gradeMeaning = { AAA: "Exceptional", AA: "Excellent", A: "Strong", BBB: "Sound", "BBB(p)": "Sound, preliminary", BB: "Developing", B: "Limited", C: "Weak", NR: "Not rated" };
const app = document.querySelector("#app");
let registerStep = 1;
let registrationDraft = {};
function preference(key, fallback) { try { return localStorage.getItem(key) || fallback; } catch { return fallback; } }
function savePreference(key, value) { try { localStorage.setItem(key, value); } catch { /* The current session still works. */ } }
let currentLang = preference("osh2u.lang", "en") === "ms" ? "ms" : "en";
const translations = window.OSH2U_TRANSLATIONS || {};
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const templateTranslations = Object.entries(translations).filter(([en]) => /\{\w+\}/.test(en)).map(([en, ms]) => {
  const names = [];
  let pattern = "^";
  let cursor = 0;
  for (const match of en.matchAll(/\{(\w+)\}/g)) {
    pattern += escapeRegex(en.slice(cursor, match.index)) + "(.+?)";
    names.push(match[1]);
    cursor = match.index + match[0].length;
  }
  pattern += escapeRegex(en.slice(cursor)) + "$";
  return { regex: new RegExp(pattern), names, ms };
}).sort((a, b) => b.regex.source.length - a.regex.source.length);

function translateString(value, lang = currentLang) {
  if (lang !== "ms" || value == null) return String(value ?? "");
  const source = String(value).trim();
  if (!source) return String(value);
  if (translations[source]) return translations[source];
  if (/ · |; |, /.test(source)) return source.split(/( · |; |, )/).map(part => /^( · |; |, )$/.test(part) ? part : translateString(part, lang)).join('');
  if (source.endsWith(' →')) return translateString(source.slice(0, -2), lang) + ' →';
  for (const template of templateTranslations) {
    const match = source.match(template.regex);
    if (!match) continue;
    let result = template.ms;
    template.names.forEach((name, index) => { result = result.replaceAll(`{${name}}`, match[index + 1]); });
    return result;
  }
  const patterns = [
    [/^(\d+) of 5 learner stars$/, "$1 daripada 5 bintang peserta"],
    [/^(\d+) of (\d+) trainers$/, "$1 daripada $2 jurulatih"],
    [/^(\d+) verified$/, "$1 disahkan"],
    [/^(\d+) verified evaluations$/, "$1 penilaian disahkan"],
    [/^(\d+) credentials verified$/, "$1 kelayakan disahkan"],
    [/^(\d+) yrs training$/, "$1 tahun melatih"],
    [/^(\d+) years$/, "$1 tahun"],
    [/^(\d+) days$/, "$1 hari"],
    [/^Why (.+)$/, "Mengapa $1"],
    [/^Need (.+) for a course\?$/, "Perlukan $1 untuk kursus?"],
    [/^Request (.+)$/, "Minta $1"],
    [/^(.+) will reply to (.+), normally within 2 working days\.$/, "$1 akan membalas kepada $2, biasanya dalam tempoh 2 hari bekerja."],
    [/^(.+): (\d+) of 100\. Register median (\d+)\.$/, "$1: $2 daripada 100. Median daftar $3."],
    [/^Score (\d+) of 100$/, "Skor $1 daripada 100"]
  ];
  for (const [regex, replacement] of patterns) if (regex.test(source)) return source.replace(regex, replacement);
  return source;
}

function translateDom(root = document) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement?.closest('script, style, [translate="no"]')) return;
    const previous = originalText.get(node);
    if (!previous || node.nodeValue !== previous.rendered) originalText.set(node, { source: node.nodeValue });
    const entry = originalText.get(node);
    const source = entry.source;
    const trimmed = source.trim();
    node.nodeValue = trimmed ? source.replace(trimmed, translateString(trimmed)) : source;
    entry.rendered = node.nodeValue;
  });
  root.querySelectorAll?.("[placeholder], [aria-label], [title]").forEach(element => {
    if (!originalAttributes.has(element)) {
      originalAttributes.set(element, Object.fromEntries(["placeholder", "aria-label", "title"].filter(name => element.hasAttribute(name)).map(name => [name, element.getAttribute(name)])));
    }
    Object.entries(originalAttributes.get(element)).forEach(([name, value]) => element.setAttribute(name, translateString(value)));
  });
}

function enhanceMobileTables() {
  document.querySelectorAll(".data-table").forEach(table => {
    const labels = [...table.querySelectorAll("thead th")].map(th => th.textContent.trim());
    table.querySelectorAll("tbody tr").forEach(row => [...row.children].forEach((cell, index) => { cell.dataset.label = labels[index] || ""; }));
  });
}

function finalizePage() {
  document.documentElement.lang = currentLang === "ms" ? "ms" : "en";
  document.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === currentLang)));
  translateDom(document);
  enhanceMobileTables();
  const description = currentLang === "ms" ? "OSH2U ialah penarafan bebas bagi jurulatih keselamatan dan kesihatan pekerjaan di Malaysia." : "OSH2U publishes independent, evidence-led ratings of Malaysian occupational safety and health trainers.";
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
}

const esc = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const getStore = (key) => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
const setStore = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); return true; } catch { return false; } };
const isDeveloping = grade => ["BB", "B", "C"].includes(grade);
const displayGrade = grade => grade === "BBB(p)" ? "BBB(p)" : grade;
const stars = count => count ? `<span class="stars" aria-label="${count} of 5 learner stars">${"★".repeat(count)}${"☆".repeat(5 - count)}</span>` : `<span class="muted">Not yet rated</span>`;
const gradeClass = grade => isDeveloping(grade) ? "developing" : grade === "NR" ? "nr" : "";

function scoreRuler(score) {
  return `<div class="score-ruler">
    <div class="ruler-label"><span>Rating score</span><strong>${score} of 100</strong></div>
    <div class="ruler-track" aria-label="Score ${score} of 100"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><i style="left:${score}%"></i></div>
    <div class="ruler-grades"><span>C</span><span>B</span><span>BB</span><span>BBB</span><span>A</span><span>AA</span><span>AAA</span></div>
  </div>`;
}

function pillarRows(trainer, report = false) {
  return `<div class="pillar-list ${report ? "report-pillars" : ""}">${Object.entries(trainer.pillars).map(([name, value]) => `
    <div class="pillar-row" title="${name}: ${value} of 100. Register median ${medians[name]}.">
      <span>${name}</span><span class="pillar-bar"><i style="width:${value}%"></i><b style="left:${medians[name]}%"></b></span><strong>${value}</strong>
    </div>`).join("")}</div>`;
}

function specimenCard(trainer = trainers[1]) {
  return `<article class="rating-card">
    <div class="card-top"><div><p class="eyebrow">Specimen rating report</p><h3>${trainer.name}</h3><span class="muted">${trainer.specs[0]} · ${trainer.state}</span></div><div class="grade ${gradeClass(trainer.grade)}">${trainer.grade}</div></div>
    <div class="rating-meta"><div><span>Outlook</span><strong>${trainer.outlook}</strong></div><div><span>Learner rating</span><strong>${stars(trainer.stars)}</strong></div></div>
    ${scoreRuler(trainer.score)}${pillarRows(trainer)}
    <a class="card-link" href="#/trainer/${trainer.id}">Read the full report →</a>
  </article>`;
}

const featuredName = 'Datuk Wira Ahmad Fakhrul Anuar bin Haji Ismail';
const featuredTrainer = { id: "datuk-wira-ahmad-fakhrul-anuar", name: featuredName };
function featuredCard() {
  return `<article class="rating-card featured-card"><img class="featured-portrait" src="assets/datuk-wira.jpg" alt="${featuredName}" width="720" height="1080"><div class="featured-body"><p class="eyebrow">Featured trainer</p><h3 translate="no">${featuredName}</h3><p class="muted"><span>Chief Executive Officer</span> · <span translate="no">SHEnviro Hall Sdn Bhd</span></p><div class="featured-status"><span class="grade-mini nr">NR</span><span>Not yet rated by OSH2U</span></div><p>Occupational safety and health practitioner and trainer. Profile supplied in the SHEnviro Hall company profile (2026).</p><a class="card-link" href="#/trainer/datuk-wira-ahmad-fakhrul-anuar">Read the profile →</a></div></article>`;
}
function featuredProfile() {
  app.innerHTML = `<section class="report-head"><div class="container"><div class="breadcrumb"><a href="#/">Home</a> / <span translate="no">${featuredName}</span></div><div class="report-title-grid"><div><p class="eyebrow">Featured trainer</p><h1 translate="no">${featuredName}</h1><p class="lede"><span>Chief Executive Officer</span> · <span translate="no">SHEnviro Hall Sdn Bhd</span></p><div class="featured-status"><span class="grade-mini nr">NR</span><span>Not yet rated by OSH2U</span></div><div class="button-row"><button class="button" data-request-trainer="${featuredTrainer.id}">Request this trainer</button><a class="button button-secondary" href="#/workspace">View trainer workspace</a></div></div><img class="profile-portrait" src="assets/datuk-wira.jpg" alt="${featuredName}" width="720" height="1080"></div></div></section><section class="section surface-section"><div class="container report-grid"><article class="prose"><p class="eyebrow">Professional background</p><h2>Practice and training</h2><p>The company profile describes Fakhrul as an occupational safety and health management practitioner and trainer with more than 10 years of involvement in safety, health and environment.</p><p>His experience includes implementing and maintaining safety and health requirements in manufacturing, with work involving ISO 14001 and OHSAS 18001. The document also describes involvement in NIOSH occupational safety and health management programmes and delivery of public and in-house training.</p><h3>Training approach</h3><p>Practical workplace examples, two-way communication and experience sharing to connect learning with daily operations.</p></article><aside class="sidebar-card"><p class="eyebrow">Qualifications listed in the source</p><ul class="check-list"><li>Degree in Management / Human Resource, International Islamic University, 2002.</li><li>MSc in Occupational Safety and Health Management, Universiti Utara Malaysia, 2008.</li><li>Radiation Protection Officer (RPO) certification following an AELB course and examination.</li></ul><p class="form-note">These qualifications are reported in the company profile and have not been independently verified by OSH2U.</p></aside></div><div class="container disclosure"><strong>Source:</strong> <span>SHEnviro Hall Company Profile 2026, pages 2 and 9. No OSH2U grade, score or learner rating has been assigned.</span></div></section>`;
}

function homePage() {
  const grades = [
    ["AAA", "Exceptional", "90–100", "Benchmark practitioner with exceptional verified evidence."], ["AA", "Excellent", "80–89", "Very strong on every pillar; any weakness is minor."],
    ["A", "Strong", "70–79", "Reliable and well evidenced, with one pillar behind."], ["BBB", "Sound", "60–69", "Meets the standard; the lowest engagement grade."],
    ["BB", "Developing", "50–59", "Credentials are present but evidence is uneven."], ["B", "Limited", "40–49", "Material gaps need employer due diligence."], ["C", "Weak", "Below 40", "Fails the standard on most pillars or conduct."]
  ];
  const steps = [
    ["Register", "Submit credentials, practice history, evidence and two client references."], ["Verify at source", "We check each credential with the body that issued it."], ["Assess", "An analyst scores five pillars and observes a live session."],
    ["Committee", "At least three people vote on the grade and outlook."], ["Preview and publish", "The trainer receives a 14-day factual review window."], ["Surveillance", "Ratings are reviewed annually and whenever evidence changes."]
  ];
  app.innerHTML = `
    <section class="hero"><div class="container hero-grid"><div>
      <p class="eyebrow">Independent trainer ratings · Malaysia</p><h1>Every OSH trainer says they are good. We publish the evidence.</h1>
      <p class="lede">OSH2U verifies credentials at source, observes trainers teach, and publishes a letter-grade rating with an outlook.</p>
      <div class="button-row"><a class="button" href="#/ratings">Search rated trainers</a><a class="button button-secondary" href="#/register">Register as a trainer</a></div>
      <div class="trust-line"><span>Free for trainers</span><span>Committee decided</span><span>Evidence led</span></div>
    </div>${featuredCard()}</div></section>
    <section class="section surface-section"><div class="container"><div class="section-head"><div><p class="eyebrow">The scale</p><h2>Seven grades, one line that matters</h2></div><p class="muted">BBB and above is engagement grade.</p></div>
      <div class="grade-grid">${grades.map((g, i) => `<article class="grade-item ${i < 4 ? "engagement" : "developing"}"><strong>${g[0]}</strong><span>${g[1]} · ${g[2]}</span><p>${g[3]}</p></article>`).join("")}</div>
    </div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">How a rating is made</p><h2>From registration to a published opinion</h2></div><a href="#/methodology" class="button button-secondary">Read the methodology</a></div>
      <div class="process-grid">${steps.map(s => `<article class="process-card"><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join("")}</div>
    </div></section>
    <section class="section surface-section"><div class="container"><div class="section-head"><div><p class="eyebrow">Latest actions</p><h2>Ratings move when evidence moves</h2></div><a class="button button-secondary" href="#/actions">All rating actions</a></div>${actionsTable(true)}</div></section>
    <section class="section"><div class="container audience-grid"><article class="audience-card"><p class="eyebrow">For employers and HR</p><h2>Hire on evidence, not a brochure.</h2><ul class="check-list"><li>Compare trainers on one public scale</li><li>See which credentials were verified</li><li>Read strengths, constraints and triggers</li></ul><a class="button" href="#/ratings">Browse the register</a></article>
    <article class="audience-card"><p class="eyebrow">For trainers</p><h2>A credential your clients can read.</h2><ul class="check-list"><li>Free to register and be rated</li><li>14-day preview and factual appeal</li><li>Engagement-grade verification badge</li></ul><a class="button" href="#/register">Start registration</a></article></div></section>`;
}

function ratingsPage() {
  app.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">The register</p><h1>Rated trainers</h1><p class="lede">Every trainer who has registered, with their current grade, outlook and learner evidence.</p></div></section>
  <section class="section-tight"><div class="container"><form class="filter-panel" id="trainerFilters">
    <div class="field"><label for="search">Search</label><input id="search" name="search" type="search" placeholder="Name, specialisation or industry"></div>
    <div class="field"><label for="specFilter">Specialisation</label><select id="specFilter" name="spec"><option value="">All specialisations</option>${specialisations.map(x => `<option value="${esc(x)}">${x}</option>`).join("")}</select></div>
    <div class="field"><label for="stateFilter">State</label><select id="stateFilter" name="state"><option value="">All states</option>${states.map(x => `<option value="${esc(x)}">${x}</option>`).join("")}</select></div>
    <div class="field"><label for="bandFilter">Grade band</label><select id="bandFilter" name="band"><option value="">All grades</option><option value="engagement">Engagement grade</option><option value="developing">Developing grade</option><option value="preliminary">Preliminary / NR</option></select></div>
    <label class="checkbox-field"><input type="checkbox" name="hrd"> HRD Corp accredited only</label>
  </form>
  <div class="section-head"><div><p class="eyebrow">Distribution</p><h2>Published ratings</h2></div><div class="distribution" aria-label="Distribution of published ratings">${["AAA", "AA", "A", "BBB", "BB", "B", "C"].map(g => { const n = trainers.filter(t => t.grade === g || (g === "BBB" && t.grade === "BBB(p)")).length; return `<div class="dist-bar ${isDeveloping(g) ? "developing" : ""}" style="--count:${Math.max(n, .25)}" title="${g}: ${n} trainers"><b>${n}</b><span>${g}</span></div>`; }).join("")}</div></div>
  <div id="trainerResults"></div></div></section>`;
  const form = document.querySelector("#trainerFilters");
  form.addEventListener("input", () => renderTrainerResults(new FormData(form)));
  renderTrainerResults(new FormData(form));
}

function renderTrainerResults(data) {
  const search = String(data.get("search") || "").toLowerCase().trim();
  const spec = data.get("spec"); const state = data.get("state"); const band = data.get("band"); const hrd = data.get("hrd");
  const registrations = getStore("osh2u.registrations").map(r => ({ ...r, id: `reg-${r.ref}`, grade: "NR", outlook: "Verification in progress", stars: 0, evaluations: 0, action: "Registered", actionDate: new Date(r.submittedAt).toLocaleDateString("en-MY", { day: "numeric", month: "short", year: "numeric" }), specs: r.specs || [], years: r.yearsTraining, hrd: (r.credentials || []).some(c => c.type.includes("HRD Corp")), type: r.trainerType }));
  let results = [...trainers, ...registrations].filter(t => {
    const terms = [t.name, t.state, t.industries, ...(t.specs || [])];
    const haystack = [...terms, ...terms.map(value => translateString(value, "ms"))].join(" ").toLowerCase();
    const bandMatch = !band || (band === "engagement" && gradeOrder[t.grade] >= 4) || (band === "developing" && isDeveloping(t.grade)) || (band === "preliminary" && ["NR", "BBB(p)"].includes(t.grade));
    return (!search || haystack.includes(search)) && (!spec || t.specs.includes(spec)) && (!state || t.state === state) && bandMatch && (!hrd || t.hrd);
  }).sort((a, b) => gradeOrder[b.grade] - gradeOrder[a.grade] || (b.score || 0) - (a.score || 0));
  const target = document.querySelector("#trainerResults");
  if (!results.length) { target.innerHTML = `<p class="empty-state">No trainers match these filters. Clear a filter or search a broader term.</p>`; finalizePage(); return; }
  target.innerHTML = `<p class="result-count">${results.length} of ${trainers.length + registrations.length} trainers</p><div class="table-wrap"><table class="data-table"><thead><tr><th>Trainer</th><th>Primary specialisation</th><th>State</th><th>Rating</th><th>Outlook</th><th>Learner stars</th><th>Last action</th></tr></thead><tbody>
    ${results.map(t => `<tr><td><a class="trainer-name" href="#/trainer/${t.id}">${esc(t.name)}</a><span class="subline">${esc(t.type)} · ${esc(t.years)} yrs training${t.hrd ? " · HRD Corp" : ""}</span></td><td>${esc(t.specs[0] || "Not supplied")}${t.specs.length > 1 ? `<span class="subline">+${t.specs.length - 1} more</span>` : ""}</td><td>${esc(t.state)}</td><td><span class="grade-mini ${gradeClass(t.grade)}">${t.grade}</span></td><td>${esc(t.outlook)}</td><td>${stars(Number(t.stars))}${t.evaluations ? `<span class="subline">${t.evaluations} verified</span>` : ""}</td><td>${esc(t.action)}<span class="subline">${esc(t.actionDate)}</span></td></tr>`).join("")}
  </tbody></table></div>`;
  finalizePage();
}

function trainerPage(id) {
  if (id === 'datuk-wira-ahmad-fakhrul-anuar') { featuredProfile(); return; }
  let trainer = trainers.find(t => t.id === id);
  if (!trainer && id.startsWith("reg-")) {
    const ref = id.replace("reg-", ""); const r = getStore("osh2u.registrations").find(x => x.ref === ref);
    if (r) return registrationProfile(r);
  }
  if (!trainer) { app.innerHTML = `<section class="section"><div class="container empty-state"><h1>Trainer not found</h1><p>This report does not exist or has been withdrawn.</p><a class="button" href="#/ratings">Back to rated trainers</a></div></section>`; return; }
  app.innerHTML = `<section class="report-head"><div class="container"><div class="breadcrumb"><a href="#/ratings">Rated trainers</a> / ${trainer.name}</div>
    <div class="report-title-grid"><div><div class="tag-row"><span class="tag">Specimen profile</span><span class="tag">${trainer.credentials.length} credentials verified</span>${trainer.hrd ? `<span class="tag">HRD Corp accredited</span>` : ""}</div><h1>${trainer.name}</h1><p class="lede">${trainer.type} · ${trainer.state} · ${trainer.specs.join(", ")}</p></div>
    <aside class="rating-box"><div class="rating-box-top"><div class="grade ${gradeClass(trainer.grade)}">${displayGrade(trainer.grade)}</div><div><p class="eyebrow">Outlook</p><strong>${trainer.outlook}</strong><div>${stars(trainer.stars)} <span class="subline">${trainer.evaluations ? trainer.evaluations + " verified evaluations" : "Observation pending"}</span></div></div></div>
    ${scoreRuler(trainer.score)}<dl class="fact-grid"><div class="fact"><dt>Meaning</dt><dd>${gradeMeaning[trainer.grade]}</dd></div><div class="fact"><dt>Rating type</dt><dd>${trainer.grade.includes("(p)") ? "Preliminary" : "Full"}</dd></div><div class="fact"><dt>Last action</dt><dd>${trainer.action}</dd></div><div class="fact"><dt>Next review</dt><dd>${trainer.nextReview}</dd></div></dl></aside></div></div></section>
    <section class="section surface-section"><div class="container report-grid"><article class="prose"><p class="eyebrow">Rating rationale</p><h2>Why ${trainer.grade}</h2><p>${trainer.rationale}</p>
      <h3>Strengths</h3><ul>${trainer.strengths.map(x => `<li>${x}</li>`).join("")}</ul><h3>Constraints</h3><ul>${trainer.constraints.map(x => `<li>${x}</li>`).join("")}</ul>
      <div class="callout-grid"><div class="callout"><h3>What would raise the rating</h3><p>${trainer.raise}</p></div><div class="callout warning"><h3>What would lower it</h3><p>${trainer.lower}</p></div></div>
      <p class="eyebrow">Evidence</p><h2>Pillar scores</h2>${pillarRows(trainer, true)}</article>
      <aside><div class="sidebar-card"><p class="eyebrow">Verified credentials</p>${trainer.credentials.map(x => `<div class="credential"><strong>${x}</strong><span class="subline">Confirmed with the issuing body. Registration number held on file.</span></div>`).join("")}</div>
      <div class="sidebar-card"><p class="eyebrow">Practice</p><dl class="fact-grid"><div class="fact"><dt>Training</dt><dd>${trainer.years} years</dd></div><div class="fact"><dt>Last 12 months</dt><dd>${trainer.days} days</dd></div><div class="fact"><dt>Industries</dt><dd>${trainer.industries}</dd></div><div class="fact"><dt>Languages</dt><dd>${trainer.languages}</dd></div></dl></div></aside></div>
      <div class="container"><div class="cta-band"><div><h3>Need ${trainer.name.split(" ")[0]} for a course?</h3><p>Send a request through OSH2U. The trainer replies to you directly.</p></div><button class="button" data-request-trainer="${trainer.id}">Request this trainer</button></div></div>
    </section><div class="container disclosure"><strong>Disclosure:</strong> OSH2U has no commercial relationship with this fictional trainer. The rating was decided by committee under criteria v0.1. It is an opinion, not a guarantee or regulatory approval.</div>`;
}

function registrationProfile(r) {
  app.innerHTML = `<section class="report-head"><div class="container"><div class="breadcrumb"><a href="#/ratings">Rated trainers</a> / ${esc(r.name)}</div><div class="report-title-grid"><div><div class="tag-row"><span class="tag">New registration</span><span class="tag">Verification in progress</span></div><h1>${esc(r.name)}</h1><p class="lede">${esc(r.trainerType)} · ${esc(r.state)} · ${(r.specs || []).map(esc).join(", ")}</p></div><aside class="rating-box"><div class="rating-box-top"><div class="grade nr">NR</div><div><p class="eyebrow">Status</p><strong>Verification in progress</strong></div></div><p class="muted">No rating is assigned until submitted credentials and references have been checked.</p></aside></div></div></section><section class="section surface-section"><div class="container report-grid"><article class="prose"><p class="eyebrow">Current status</p><h2>Evidence review has started</h2><p>OSH2U is confirming the submitted credentials with their issuing bodies and contacting the nominated client references. A preliminary rating will remain private during the review period.</p></article><aside class="sidebar-card"><p class="eyebrow">Registration</p><p class="mono">${esc(r.ref)}</p><p>${(r.credentials || []).map(c => esc(c.type)).join("<br>")}</p></aside></div></section>`;
}

function actionsTable(limit = false) {
  const data = [...trainers].sort((a, b) => new Date(b.actionDate) - new Date(a.actionDate));
  return `<div class="action-list">${(limit ? data.slice(0, 6) : data).map(t => `<a class="action-row" href="#/trainer/${t.id}" style="text-decoration:none"><span class="mono muted">${t.actionDate}</span><span><strong>${t.name}</strong><span class="subline">${t.specs[0]}</span></span><span>${t.action}</span><span class="grade-mini ${gradeClass(t.grade)}">${t.grade}</span><span>${t.outlook}</span></a>`).join("")}</div>`;
}

function actionsPage() {
  app.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">Public record</p><h1>Rating actions</h1><p class="lede">Every assignment, affirmation, upgrade, downgrade and outlook change remains visible.</p></div></section><section class="section-tight"><div class="container">${actionsTable()}</div></section>`;
}

function methodologyPage() {
  app.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">Criteria v0.1</p><h1>How we rate trainers</h1><p class="lede">A transparent, committee-led opinion about likely training quality over the next 12 months.</p></div></section><section class="section"><div class="container method-grid"><nav class="sticky-nav" aria-label="On this page"><a href="#method-principles">Principles</a><a href="#method-pillars">Five pillars</a><a href="#method-grades">Grade scale</a><a href="#method-process">Process</a><a href="#method-appeals">Appeals and surveillance</a></nav>
    <article class="method-content prose"><section id="method-principles"><p class="eyebrow">01 · Principles</p><h2>A rating cannot be bought</h2><p>Registration, verification and rating are free. Commercial services are separated from rating decisions. Self-declared evidence that cannot be verified receives no score.</p><p>Ratings are opinions based on available evidence, not guarantees of performance and not endorsements by a regulator.</p></section>
    <section id="method-pillars"><p class="eyebrow">02 · Five pillars</p><h2>What the score measures</h2><table class="weight-table"><thead><tr><th>Pillar</th><th>Weight</th><th>What we look for</th></tr></thead><tbody><tr><td>Credentials</td><td>25%</td><td>Currency, relevance and source verification</td></tr><tr><td>Experience</td><td>20%</td><td>Practice depth, recency and sector relevance</td></tr><tr><td>Delivery</td><td>20%</td><td>Observed facilitation, assessment and accessibility</td></tr><tr><td>Outcomes</td><td>25%</td><td>Verified learning and workplace evidence</td></tr><tr><td>Conduct</td><td>10%</td><td>Integrity, records and upheld findings</td></tr></tbody></table><p>Each pillar is scored from 0 to 100. The weighted result is rounded to a whole number and mapped to the scale.</p></section>
    <section id="method-grades"><p class="eyebrow">03 · Grade scale</p><h2>The engagement-grade line</h2><p>AAA, AA, A and BBB are engagement grade. BB, B and C signal developing or weak evidence and require additional employer checks. A “(p)” suffix means the opinion is preliminary pending observation.</p></section>
    <section id="method-process"><p class="eyebrow">04 · Process</p><h2>No single analyst decides</h2><ol><li>Evidence is checked with its source.</li><li>An analyst scores the five pillars and records the rationale.</li><li>A live or recorded session is observed for a full rating.</li><li>A committee of at least three votes on grade and outlook.</li><li>The trainer receives a 14-day factual preview before publication.</li></ol></section>
    <section id="method-appeals"><p class="eyebrow">05 · Appeals and surveillance</p><h2>Ratings change with evidence</h2><p>A trainer may appeal factual errors once per rating action. Ratings are reviewed at least annually and sooner when a credential expires, evidence materially changes or a complaint is upheld.</p></section></article></div></section>`;
}

function registerPage() {
  registerStep = 1; registrationDraft = {};
  app.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">Trainer registration</p><h1>Build a rating on evidence.</h1><p class="lede">Registration and rating are free. Have your credentials, evidence and two client references ready.</p></div></section><section class="section-tight"><div class="container form-layout"><div id="registerMain"></div><aside><div class="side-note"><h3>Have these ready</h3><ul><li>Registration numbers and expiry dates</li><li>Scans of certificates and a CV</li><li>One sample training deck</li><li>Two recent client references</li></ul></div><div class="side-note"><h3>What happens next</h3><ul><li>Verification: 5–10 working days</li><li>Preliminary rating from documents</li><li>One observed session</li><li>14-day private preview</li></ul></div></aside></div></section>`;
  renderRegisterStep();
}

function stepper() {
  const labels = ["About you", "Credentials", "Practice", "Evidence", "Declare"];
  return `<div class="stepper">${labels.map((x, i) => `<div class="step ${i + 1 === registerStep ? "active" : ""} ${i + 1 < registerStep ? "complete" : ""}">${i + 1} <span>${x}</span></div>`).join("")}</div>`;
}
function field(name, label, type = "text", extra = "") { return `<div class="field"><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" value="${esc(registrationDraft[name] || "")}" ${extra}></div>`; }
function selectField(name, label, values, required = false) { return `<div class="field"><label for="${name}">${label}</label><select id="${name}" name="${name}" ${required ? "required" : ""}><option value="">Select</option>${values.map(x => `<option value="${esc(x)}" ${registrationDraft[name] === x ? "selected" : ""}>${x}</option>`).join("")}</select></div>`; }
function chips(name, values, selected = [], type = "checkbox") { return `<div class="chip-grid">${values.map(x => `<label class="chip"><input type="${type}" name="${name}" value="${esc(x)}" ${selected.includes(x) ? "checked" : ""}><span>${x}</span></label>`).join("")}</div>`; }

function renderRegisterStep(error = "") {
  const root = document.querySelector("#registerMain");
  let body = "";
  if (registerStep === 1) body = `<h2>About you</h2><p class="form-note">Tell us how clients know you and where you are based.</p><div class="form-grid">${field("name", "Full name", "text", "required")}${field("email", "Work email", "email", "required")}${field("phone", "Mobile number", "tel", "required")}${selectField("state", "Base state", states, true)}<div class="field full"><span class="field-label">How do you train?</span>${chips("trainerType", ["Freelance", "With a training provider", "In-house for my employer"], [registrationDraft.trainerType || "Freelance"], "radio")}</div><div class="field full"><span class="field-label">Languages you deliver in</span>${chips("languages", ["Bahasa Malaysia", "English", "Mandarin", "Tamil", "Other"], registrationDraft.languages || [])}</div></div>`;
  if (registerStep === 2) body = `<h2>Credentials</h2><p class="form-note">List the credentials that should form part of your rating. We verify each at source.</p><div class="form-grid"><div class="field full"><label for="credentialType">Credential</label><select id="credentialType" name="credentialType" required><option value="">Select a credential</option>${credentials.map(x => `<option value="${esc(x)}" ${registrationDraft.credentialType === x ? "selected" : ""}>${x}</option>`).join("")}</select></div>${field("credentialNo", "Registration or certificate no.", "text", "required")}${field("validUntil", "Valid until", "month")}${selectField("education", "Highest academic qualification", ["SPM or certificate", "Diploma", "Bachelor's degree", "Master's degree", "Doctorate"])}${field("fieldOfStudy", "Field of study")}</div>`;
  if (registerStep === 3) body = `<h2>Your training practice</h2><div class="form-grid"><div class="field full"><span class="field-label">Specialisations — choose up to 5</span>${chips("specs", specialisations, registrationDraft.specs || [])}</div><div class="field full"><span class="field-label">Industries you know from the inside</span>${chips("industries", industries, registrationDraft.industries || [])}</div>${field("yearsPractice", "Years in OSH practice", "number", "min=0 max=60 required")}${field("yearsTraining", "Years delivering training", "number", "min=0 max=60 required")}${field("daysLast12m", "Training days in the last 12 months", "number", "min=0 max=366")}${selectField("coverage", "Where you will travel", ["My state only", "My region", "Peninsular Malaysia", "Nationwide, including Sabah and Sarawak"])}</div>`;
  if (registerStep === 4) body = `<h2>Evidence and references</h2><p class="form-note">Prototype note: file names are recorded locally; files are not uploaded.</p><div class="form-grid"><div class="field full"><label for="files">Certificates, CV or sample materials</label><input id="files" name="files" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.ppt,.pptx"></div>${field("ref1Name", "Reference 1: name", "text", "required")}${field("ref1Org", "Organisation", "text", "required")}${field("ref1Email", "Work email", "email", "required")}${field("ref1Course", "Course you delivered")}${field("ref2Name", "Reference 2: name")}${field("ref2Email", "Reference 2: work email", "email")}</div>`;
  if (registerStep === 5) body = `<h2>Check and declare</h2><dl class="review-list"><dt>Name</dt><dd>${esc(registrationDraft.name)}</dd><dt>Contact</dt><dd>${esc(registrationDraft.email)} · ${esc(registrationDraft.phone)}</dd><dt>Base</dt><dd>${esc(registrationDraft.state)} · ${esc(registrationDraft.trainerType)}</dd><dt>Credential</dt><dd>${esc(registrationDraft.credentialType)}</dd><dt>Specialisations</dt><dd>${(registrationDraft.specs || []).map(esc).join("; ")}</dd><dt>Experience</dt><dd>${esc(registrationDraft.yearsPractice)} yrs practice; ${esc(registrationDraft.yearsTraining)} yrs training</dd></dl>
    ${[["declTrue", "Everything I submitted is true and complete."], ["declVerify", "I authorise OSH2U to verify credentials and contact my references."], ["declPublish", "I understand the rating is an independent opinion and may be published after preview."], ["declPdpa", "I consent to processing of my personal data for verification, rating and listing."]].map(x => `<label class="declaration"><input type="checkbox" name="${x[0]}" required><span>${x[1]}</span></label>`).join("")}`;
  root.innerHTML = `${stepper()}<form id="registerForm" class="form-card" novalidate>${error ? `<div class="error-box">${error}</div>` : ""}${body}<div class="form-actions">${registerStep > 1 ? `<button type="button" class="button button-ghost" data-prev-step>Back</button>` : `<span></span>`}<button type="submit" class="button">${registerStep === 5 ? "Submit registration" : "Continue"}</button></div></form>`;
  const form = document.querySelector("#registerForm");
  form.addEventListener("submit", handleRegisterStep);
  form.querySelector("[data-prev-step]")?.addEventListener("click", () => { saveForm(form); registerStep--; renderRegisterStep(); window.scrollTo({ top: 260, behavior: "smooth" }); });
  finalizePage();
}

function saveForm(form) {
  const data = new FormData(form); const multi = ["languages", "specs", "industries"];
  for (const [key, value] of data.entries()) { if (!multi.includes(key) && !key.startsWith("decl") && key !== "files") registrationDraft[key] = value; }
  multi.forEach(key => { if (form.elements[key]) registrationDraft[key] = data.getAll(key); });
  if (form.elements.files) registrationDraft.files = [...form.elements.files.files].map(f => f.name);
}

function handleRegisterStep(event) {
  event.preventDefault(); const form = event.currentTarget; saveForm(form);
  if (!form.checkValidity()) { renderRegisterStep("Complete all required fields before continuing."); return; }
  if (registerStep === 1 && !(registrationDraft.languages || []).length) { renderRegisterStep("Choose at least one language you deliver in."); return; }
  if (registerStep === 3 && !(registrationDraft.specs || []).length) { renderRegisterStep("Choose at least one specialisation."); return; }
  if ((registrationDraft.specs || []).length > 5) { renderRegisterStep("Choose up to 5 specialisations. Untick one to continue."); return; }
  if (registerStep < 5) { registerStep++; renderRegisterStep(); window.scrollTo({ top: 260, behavior: "smooth" }); return; }
  const existing = getStore("osh2u.registrations"); const year = new Date().getFullYear(); const ref = `OSH2U-${year}-${String(existing.length + 1).padStart(4, "0")}`;
  const record = { ...registrationDraft, uiLang: currentLang, ref, submittedAt: new Date().toISOString(), status: "Received", credentials: [{ type: registrationDraft.credentialType, no: registrationDraft.credentialNo, validUntil: registrationDraft.validUntil }] };
  const saved = setStore("osh2u.registrations", [...existing, record]);
  document.querySelector("#registerMain").innerHTML = `<div class="success-panel"><div class="success-mark">✓</div><p class="eyebrow">Registration received</p><h2>Thank you, ${esc(record.name.split(" ")[0])}. You are on the register.</h2><p class="reference-code">${ref}</p><p>We will now confirm your credential and contact your references. Expect a private preliminary rating within 10 working days.</p>${!saved ? `<p class="error-box">This browser blocked local storage, so the demo could not save your entry.</p>` : ""}<div class="button-row" style="justify-content:center"><a class="button" href="#/trainer/reg-${ref}">See your register entry</a><a class="button button-secondary" href="#/methodology">How you will be rated</a></div></div>`;
  finalizePage();
}

function adminPage() {
  const regs = getStore("osh2u.registrations"); const leads = getStore("osh2u.leads");
  app.innerHTML = `<section class="page-hero"><div class="container"><p class="eyebrow">Demo back office</p><h1>Registration pipeline</h1><p class="lede">Prototype submissions captured in this browser. Production will require a secure database and authenticated access.</p></div></section><section class="section-tight"><div class="container"><div class="button-row"><button class="button button-secondary" data-export="registrations">Copy registrations as CSV</button><button class="button button-secondary" data-export="leads">Copy requests as CSV</button><button class="button button-danger" data-clear-demo>Clear demo data</button></div>
    <div class="section-tight"><h2>Trainer registrations</h2>${regs.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>Ref</th><th>Name</th><th>State</th><th>Credential</th><th>Specialisations</th><th>Status</th></tr></thead><tbody>${regs.map(r => `<tr><td class="mono">${esc(r.ref)}</td><td><a class="trainer-name" href="#/trainer/reg-${r.ref}">${esc(r.name)}</a><span class="subline">${esc(r.email)}</span></td><td>${esc(r.state)}</td><td>${esc(r.credentialType)}</td><td>${(r.specs || []).map(esc).join("<br>")}</td><td>${esc(r.status)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="empty-state">No registrations yet. Complete the registration form and the entry lands here.</p>`}</div>
    <div class="section-tight"><h2>Employer requests</h2>${leads.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>Trainer</th><th>From</th><th>Company</th><th>Participants</th><th>Need</th></tr></thead><tbody>${leads.map(r => `<tr><td>${esc(r.trainer)}</td><td>${esc(r.name)}<span class="subline">${esc(r.email)}</span></td><td>${esc(r.company)}</td><td>${esc(r.pax)}</td><td>${esc(r.need)}</td></tr>`).join("")}</tbody></table></div>` : `<p class="empty-state">No employer requests yet. Use “Request this trainer” on any report.</p>`}</div></div></section>`;
}

const workspaceTabs = ["overview", "certificates", "points", "growth", "profile", "calendar", "reviews", "requests"];
const workspaceLabels = { overview: "Overview", certificates: "Certificates", points: "Points", growth: "Growth path", profile: "My page", calendar: "Calendar", reviews: "Reviews", requests: "Requests" };
const workspaceDates = ["21 Sept 2026", "22 Sept 2026", "23 Sept 2026", "24 Sept 2026", "25 Sept 2026", "28 Sept 2026", "29 Sept 2026", "30 Sept 2026", "1 Oct 2026", "2 Oct 2026", "5 Oct 2026", "6 Oct 2026", "7 Oct 2026", "8 Oct 2026", "9 Oct 2026", "12 Oct 2026", "13 Oct 2026", "14 Oct 2026", "15 Oct 2026", "16 Oct 2026"];

function workspaceShell(active, content) {
  app.innerHTML = `<section class="workspace-hero"><div class="container"><p class="eyebrow">Trainer workspace · Prototype</p><div class="workspace-intro"><div><h1>Good to see you, Datuk Wira</h1><p class="lede">Manage your evidence, public profile, availability and employer requests in one place. Changes in this prototype are saved in this browser only.</p></div><span class="workspace-badge">Demo workspace</span></div><nav class="workspace-tabs" aria-label="Trainer workspace">${workspaceTabs.map(tab => `<a href="#/workspace/${tab}" class="${tab === active ? "active" : ""}" ${tab === active ? 'aria-current="page"' : ""}>${workspaceLabels[tab]}</a>`).join("")}</nav></div></section><section class="workspace-section"><div class="container">${content}</div></section>`;
}

function workspacePage(tab = "overview") {
  if (!workspaceTabs.includes(tab)) tab = "overview";
  const panels = {
    overview: `<div class="workspace-heading"><div><p class="eyebrow">At a glance</p><h2>Your rating journey</h2></div><p class="muted">Profile status and the next actions needed for assessment.</p></div><div class="workspace-grid"><article class="workspace-card rating-summary"><p class="eyebrow">Your rating</p><div class="workspace-nr">NR</div><h3>Not yet rated by OSH2U</h3><p>Your sourced profile is live. A grade will only appear after evidence verification, observation and committee review.</p><a class="button button-secondary" href="#/trainer/datuk-wira-ahmad-fakhrul-anuar">Open my public page</a></article><article class="workspace-card span-tall"><p class="eyebrow">Needs your attention</p><ul class="attention-list"><li><i class="status-dot warning"></i><span><strong>Add current certificate records</strong><small>Include registration numbers and expiry dates.</small></span><a href="#/workspace/certificates">Open</a></li><li><i class="status-dot warning"></i><span><strong>Complete your practice evidence</strong><small>Add course samples and recent client references.</small></span><a href="#/workspace/points">Open</a></li><li><i class="status-dot neutral"></i><span><strong>Choose your available dates</strong><small>Employers can only request dates you open.</small></span><a href="#/workspace/calendar">Open</a></li></ul></article><article class="workspace-card"><p class="eyebrow">Quick actions</p><div class="stack-actions"><a class="button" href="#/workspace/reviews">Get my review link</a><a class="button button-secondary" href="#/workspace/profile">Preview my trainer page</a><a class="button button-secondary" href="#/workspace/calendar">Update my calendar</a></div></article><article class="workspace-card"><p class="eyebrow">Profile readiness</p><div class="readiness"><strong>45%</strong><span><i style="width:45%"></i></span></div><dl class="mini-stats"><div><dt>3</dt><dd>Qualifications listed</dd></div><div><dt>0</dt><dd>Verified reviews</dd></div><div><dt>8</dt><dd>Open days</dd></div></dl></article></div>`,
    certificates: `<div class="workspace-heading"><div><p class="eyebrow">Evidence</p><h2>Certificates and credentials</h2></div><button class="button" data-demo-action="Certificate upload is represented in this prototype.">Add certificate</button></div><div class="workspace-card"><div class="credential-row"><span class="credential-icon">✓</span><div><h3>MSc Occupational Safety and Health Management</h3><p>Universiti Utara Malaysia · 2008</p></div><span class="status-pill pending">Pending verification</span></div><div class="credential-row"><span class="credential-icon">✓</span><div><h3>Degree in Management / Human Resource</h3><p>International Islamic University · 2002</p></div><span class="status-pill pending">Pending verification</span></div><div class="credential-row"><span class="credential-icon">!</span><div><h3>Radiation Protection Officer certification</h3><p>Add certificate number and validity details.</p></div><button class="button button-secondary" data-demo-action="Edit flow opened in the full product.">Complete record</button></div></div>`,
    points: `<div class="workspace-heading"><div><p class="eyebrow">Continuous development</p><h2>Points and training log</h2></div><button class="button" data-demo-action="Activity entry is represented in this prototype.">Log activity</button></div><div class="metric-grid"><article class="workspace-card metric"><strong>0</strong><span>CEP points logged</span></article><article class="workspace-card metric"><strong>0</strong><span>Training hours logged</span></article><article class="workspace-card metric"><strong>2026</strong><span>Current cycle</span></article></div><div class="empty-workspace"><h3>No activities logged yet</h3><p>Add professional development and training delivery records to strengthen your evidence.</p></div>`,
    growth: `<div class="workspace-heading"><div><p class="eyebrow">Growth path</p><h2>From profile to published rating</h2></div></div><ol class="growth-list"><li class="done"><span>1</span><div><h3>Profile created</h3><p>Your sourced trainer profile is published.</p></div></li><li class="current"><span>2</span><div><h3>Complete evidence</h3><p>Add credentials, recent practice and two client references.</p></div></li><li><span>3</span><div><h3>Source verification</h3><p>OSH2U checks credentials with issuing bodies.</p></div></li><li><span>4</span><div><h3>Observed session</h3><p>A full training session is assessed against the delivery criteria.</p></div></li><li><span>5</span><div><h3>Committee decision</h3><p>The rating, outlook and report are reviewed before publication.</p></div></li></ol>`,
    profile: `<div class="workspace-heading"><div><p class="eyebrow">My page</p><h2>Public profile preview</h2></div><a class="button" href="#/trainer/datuk-wira-ahmad-fakhrul-anuar">Open public page</a></div><article class="workspace-card profile-preview"><img src="assets/datuk-wira.jpg" alt="${featuredName}"><div><span class="status-pill">Public · NR</span><h2>${featuredName}</h2><p>Chief Executive Officer · SHEnviro Hall Sdn Bhd</p><p class="muted">Occupational safety and health practitioner and trainer. No OSH2U rating has been assigned.</p><button class="button button-secondary" data-demo-action="Profile editing is represented in this prototype.">Edit profile</button></div></article>`,
    calendar: calendarPanel(), reviews: reviewsPanel(), requests: requestsPanel()
  };
  workspaceShell(tab, panels[tab]);
}

function calendarPanel() {
  const saved = getStore("osh2u.workspaceDays");
  const status = date => saved.find(item => item.date === date)?.status || (["21 Sept 2026", "22 Sept 2026", "23 Sept 2026", "24 Sept 2026", "30 Sept 2026", "1 Oct 2026"].includes(date) ? "booked" : ["28 Sept 2026", "29 Sept 2026", "5 Oct 2026", "6 Oct 2026", "8 Oct 2026", "12 Oct 2026", "13 Oct 2026", "14 Oct 2026"].includes(date) ? "available" : "closed");
  const booked = workspaceDates.filter(date => status(date) === "booked");
  return `<div class="workspace-heading"><div><p class="eyebrow">Availability</p><h2>Calendar and bookings</h2><p class="muted">Tap an unbooked day to switch between available and not available.</p></div></div><div class="calendar-layout"><article class="workspace-card"><div class="calendar-weekdays"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span></div><div class="calendar-grid">${workspaceDates.map(date => `<button class="calendar-day ${status(date)}" data-calendar-date="${date}" ${status(date) === "booked" ? "disabled" : ""}><small>${date.replace(/ .*$/, "")}</small><span>${date.replace(/^\d+ /, "")}</span></button>`).join("")}</div><div class="calendar-legend"><span><i class="available"></i>Available</span><span><i class="booked"></i>Booked</span><span><i class="closed"></i>Not available</span></div></article><article class="workspace-card"><h3>Upcoming sessions</h3><ul class="session-list">${booked.map(date => `<li><i></i><span><strong>${date}</strong><small>Booked session</small></span></li>`).join("")}</ul><p class="form-note">Google Calendar and Outlook sync is planned.</p></article></div>`;
}

function reviewsPanel() {
  return `<div class="workspace-heading"><div><p class="eyebrow">Participant feedback</p><h2>Collect reviews</h2><p class="muted">Only confirmed attendees can submit. Reviews remain empty until real verified feedback is collected.</p></div></div><div class="reviews-layout"><article class="workspace-card review-link-card"><div class="qr-demo" aria-label="Prototype QR code"><span>OSH<br>2U</span></div><code id="reviewLink">osh-2-u.vercel.app/r/datuk-wira</code><button class="button button-secondary" data-copy-review>Copy review link</button><ol><li>Share the link at the end of a session.</li><li>Participants confirm their course and date.</li><li>OSH2U matches each review to attendance before it counts.</li></ol></article><article class="workspace-card review-summary"><div class="empty-rating"><strong>—</strong><span>No verified participant reviews yet</span></div><h3>Recent reviews</h3><div class="empty-workspace compact"><p>Verified feedback will appear here without exposing participant contact details.</p></div></article></div>`;
}

function requestsPanel() {
  const requests = getStore("osh2u.leads").filter(item => item.trainerId === "datuk-wira-ahmad-fakhrul-anuar");
  return `<div class="workspace-heading"><div><p class="eyebrow">Employer enquiries</p><h2>Training requests</h2></div></div>${requests.length ? `<div class="request-list">${requests.map(request => `<article class="workspace-card"><span class="status-pill">New</span><h3>${esc(request.company)}</h3><p>${esc(request.need)}</p><dl class="request-facts"><div><dt>Contact</dt><dd>${esc(request.name)}</dd></div><div><dt>Participants</dt><dd>${esc(request.pax)}</dd></div></dl><div class="button-row"><button class="button" data-demo-action="Request marked for follow-up.">Follow up</button><button class="button button-secondary" data-demo-action="Request archived in this prototype.">Archive</button></div></article>`).join("")}</div>` : `<div class="empty-workspace"><h3>No employer requests yet</h3><p>New enquiries submitted from your public page will appear here.</p><a class="button button-secondary" href="#/trainer/datuk-wira-ahmad-fakhrul-anuar">Preview request flow</a></div>`}`;
}

function openRequest(id) {
  const trainer = id === featuredTrainer.id ? featuredTrainer : trainers.find(t => t.id === id); if (!trainer) return;
  const dialog = document.querySelector("#requestDialog"); document.querySelector("#requestTitle").textContent = `Request ${trainer.name}`;
  document.querySelector("#requestDialogBody").innerHTML = `<p class="muted">Tell us what you need. ${trainer.name.split(" ")[0]} will reply to you directly.</p><form id="requestForm"><div class="form-grid">${["name", "company", "email", "pax"].map((n, i) => `<div class="field"><label for="request-${n}">${["Your name", "Company", "Work email", "Number of participants"][i]}</label><input id="request-${n}" name="${n}" type="${n === "email" ? "email" : n === "pax" ? "number" : "text"}" ${n === "pax" ? "min=1" : ""} required></div>`).join("")}<div class="field full"><label for="request-need">What do you need trained, and by when?</label><textarea id="request-need" name="need" required></textarea></div></div><div class="form-actions"><span></span><button class="button" type="submit">Send request</button></div></form>`;
  document.querySelector("#requestForm").addEventListener("submit", e => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); const record = { ...data, uiLang: currentLang, trainerId: trainer.id, trainer: trainer.name, submittedAt: new Date().toISOString() }; setStore("osh2u.leads", [...getStore("osh2u.leads"), record]); document.querySelector("#requestDialogBody").innerHTML = `<div class="success-panel"><div class="success-mark">✓</div><h3>Request sent.</h3><p>${trainer.name} will reply to ${esc(data.email)}, normally within 2 working days.</p><button class="button" data-close-dialog>Close</button></div>`; finalizePage(); });
  finalizePage();
  dialog.showModal();
}

function csvFor(rows) {
  if (!rows.length) return ""; const keys = [...new Set(rows.flatMap(Object.keys))];
  const cell = v => `"${String(typeof v === "object" ? JSON.stringify(v) : v ?? "").replaceAll('"', '""')}"`;
  return [keys.join(","), ...rows.map(r => keys.map(k => cell(r[k])).join(","))].join("\n");
}

function bindGlobalEvents() {
  document.addEventListener("click", async event => {
    const request = event.target.closest("[data-request-trainer]"); if (request) openRequest(request.dataset.requestTrainer);
    if (event.target.closest("[data-close-dialog]")) document.querySelector("#requestDialog").close();
    const exp = event.target.closest("[data-export]"); if (exp) { const rows = getStore(exp.dataset.export === "registrations" ? "osh2u.registrations" : "osh2u.leads"); if (!rows.length) return toast("There is no demo data to copy yet."); try { await navigator.clipboard.writeText(csvFor(rows)); toast("CSV copied to clipboard."); } catch { toast("Clipboard is blocked in this browser."); } }
    if (event.target.closest("[data-clear-demo]")) { localStorage.removeItem("osh2u.registrations"); localStorage.removeItem("osh2u.leads"); adminPage(); finalizePage(); toast("Demo data cleared."); }
    const languageButton = event.target.closest("[data-lang]");
    if (languageButton && languageButton.dataset.lang !== currentLang) {
      currentLang = languageButton.dataset.lang;
      savePreference("osh2u.lang", currentLang);
      finalizePage();
      updateTitle();
    }
    const calendarDay = event.target.closest("[data-calendar-date]");
    if (calendarDay) {
      const date = calendarDay.dataset.calendarDate; const saved = getStore("osh2u.workspaceDays");
      const existing = saved.find(item => item.date === date); const current = existing?.status || (calendarDay.classList.contains("available") ? "available" : "closed"); const next = current === "available" ? "closed" : "available";
      setStore("osh2u.workspaceDays", [...saved.filter(item => item.date !== date), { date, status: next }]);
      workspacePage("calendar"); finalizePage(); toast(next === "available" ? "Day opened for requests." : "Day marked not available.");
    }
    if (event.target.closest("[data-copy-review]")) {
      try { await navigator.clipboard.writeText("https://osh-2-u.vercel.app/r/datuk-wira"); toast("Review link copied."); } catch { toast("Clipboard is blocked in this browser."); }
    }
    const demoAction = event.target.closest("[data-demo-action]"); if (demoAction) toast(demoAction.dataset.demoAction);
  });
}

function toast(message) { const el = document.querySelector("#toast"); el.textContent = translateString(message); el.classList.add("show"); setTimeout(() => el.classList.remove("show"), 2600); }

function router() {
  document.querySelector("#mainNav").classList.remove("open"); document.querySelector("#menuButton").setAttribute("aria-expanded", "false");
  const path = location.hash.slice(1) || "/"; const parts = path.split("/").filter(Boolean);
  if (!parts.length) homePage(); else if (parts[0] === "ratings") ratingsPage(); else if (parts[0] === "trainer") trainerPage(parts[1] || ""); else if (parts[0] === "actions") actionsPage(); else if (parts[0] === "methodology") methodologyPage(); else if (parts[0] === "workspace") workspacePage(parts[1] || "overview"); else if (parts[0] === "register") registerPage(); else if (parts[0] === "admin") adminPage(); else homePage();
  finalizePage();
  window.scrollTo(0, 0);
  updateTitle();
}
function updateTitle() {
  const parts = (location.hash.slice(1) || '/').split('/').filter(Boolean);
  const pageNames = { ratings: "Rated trainers", trainer: "Rating report", actions: "Rating actions", methodology: "Methodology", workspace: "Trainer workspace", register: "Trainer registration", admin: "Demo back office" };
  const pageName = parts[0] === 'trainer' && parts[1] === 'datuk-wira-ahmad-fakhrul-anuar' ? 'Trainer profile' : pageNames[parts[0]];
  document.title = `${parts[0] ? translateString(pageName || "Home") + " · " : ""}${translateString("OSH2U Ratings")}`;
}

document.querySelector("#menuButton").addEventListener("click", event => { const nav = document.querySelector("#mainNav"); nav.classList.toggle("open"); event.currentTarget.setAttribute("aria-expanded", String(nav.classList.contains("open"))); });
document.querySelector("#themeToggle").addEventListener("click", () => { const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = theme; savePreference("osh2u.theme", theme); });
document.documentElement.dataset.theme = preference("osh2u.theme", "light");
window.addEventListener("hashchange", router);
bindGlobalEvents(); router();
