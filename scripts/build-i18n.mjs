import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
if (!input) throw new Error("Usage: node scripts/build-i18n.mjs <EN-BM markdown>");

const source = fs.readFileSync(input, "utf8").split(/\r?\n/);
const pairs = {};

function clean(value) {
  return value
    .replaceAll("\\|", "|")
    .replace(/<\/?(?:mark|i|strong|span)[^>]*>/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replaceAll("**", "")
    .replaceAll("&quot;", '"')
    .trim();
}

for (const line of source) {
  const keyed = line.match(/^\| `([^`]+)` \| (.*?) \| (.*?) \|$/);
  const narrative = line.match(/^\| (?:sum|plus \d+|minus \d+|up|down) \| (.*?) \| (.*?) \|$/);
  const vocabulary = line.match(/^\| ([^|]+) \| ([^|]+) \|$/);
  const match = keyed ? [keyed[2], keyed[3]] : narrative ? [narrative[1], narrative[2]] : vocabulary ? [vocabulary[1], vocabulary[2]] : null;
  if (!match || !match[0] || !match[1]) continue;
  const en = clean(match[0]);
  const ms = clean(match[1]);
  if (en && ms && en !== ms) pairs[en] = ms;
}

Object.assign(pairs, {
  "Independent trainer ratings · Malaysia": "Penarafan bebas untuk jurulatih · Malaysia",
  "Every OSH trainer says they are good. We publish the evidence.": "Setiap jurulatih KKP mengaku dirinya bagus. Kami menerbitkan buktinya.",
  "OSH2U verifies credentials at source, observes trainers teach, and publishes a letter-grade rating with an outlook.": "OSH2U mengesahkan kelayakan di sumber, mencerap jurulatih mengajar dan menerbitkan penarafan gred huruf berserta prospek.",
  "Free for trainers": "Percuma untuk jurulatih",
  "Committee decided": "Diputuskan jawatankuasa",
  "Evidence led": "Berpandukan bukti",
  "BBB and above is engagement grade.": "BBB dan ke atas ialah gred layak lantik.",
  "Benchmark practitioner with exceptional verified evidence.": "Pengamal penanda aras dengan bukti disahkan yang luar biasa.",
  "Very strong on every pillar; any weakness is minor.": "Sangat kukuh dalam setiap tonggak; sebarang kelemahan adalah kecil.",
  "Reliable and well evidenced, with one pillar behind.": "Boleh dipercayai dan disokong bukti, dengan satu tonggak yang ketinggalan.",
  "Meets the standard; the lowest engagement grade.": "Memenuhi standard; gred layak lantik yang terendah.",
  "Credentials are present but evidence is uneven.": "Kelayakan tersedia tetapi bukti tidak sekata.",
  "Material gaps need employer due diligence.": "Jurang ketara memerlukan semakan lanjut majikan.",
  "Fails the standard on most pillars or conduct.": "Tidak memenuhi standard bagi kebanyakan tonggak atau tatalaku.",
  "Submit credentials, practice history, evidence and two client references.": "Hantar kelayakan, sejarah amalan, bukti dan dua rujukan pelanggan.",
  "We check each credential with the body that issued it.": "Kami menyemak setiap kelayakan dengan badan yang mengeluarkannya.",
  "An analyst scores five pillars and observes a live session.": "Penganalisis memberi skor kepada lima tonggak dan mencerap satu sesi langsung.",
  "At least three people vote on the grade and outlook.": "Sekurang-kurangnya tiga orang mengundi gred dan prospek.",
  "The trainer receives a 14-day factual review window.": "Jurulatih menerima tempoh 14 hari untuk semakan fakta.",
  "Ratings are reviewed annually and whenever evidence changes.": "Penarafan disemak setiap tahun dan apabila bukti berubah.",
  "Hire on evidence, not a brochure.": "Lantik berdasarkan bukti, bukan brosur.",
  "Compare trainers on one public scale": "Bandingkan jurulatih pada satu skala awam",
  "See which credentials were verified": "Lihat kelayakan yang telah disahkan",
  "Read strengths, constraints and triggers": "Baca kekuatan, kekangan dan pencetus perubahan",
  "A credential your clients can read.": "Kelayakan yang mudah difahami pelanggan anda.",
  "Free to register and be rated": "Percuma untuk mendaftar dan ditarafkan",
  "14-day preview and factual appeal": "Pratonton 14 hari dan rayuan fakta",
  "Engagement-grade verification badge": "Lencana pengesahan gred layak lantik",
  "Every trainer who has registered, with their current grade, outlook and learner evidence.": "Setiap jurulatih yang telah mendaftar, bersama gred, prospek dan bukti peserta semasa.",
  "Published ratings": "Penarafan diterbitkan",
  "Every assignment, affirmation, upgrade, downgrade and outlook change remains visible.": "Setiap pemberian, pengesahan, penaiktarafan, penurunan dan perubahan prospek kekal dipaparkan.",
  "A transparent, committee-led opinion about likely training quality over the next 12 months.": "Pendapat telus yang dipimpin jawatankuasa mengenai jangkaan mutu latihan bagi 12 bulan akan datang.",
  "Build a rating on evidence.": "Bina penarafan berasaskan bukti.",
  "Registration and rating are free. Have your credentials, evidence and two client references ready.": "Pendaftaran dan penarafan adalah percuma. Sediakan kelayakan, bukti dan dua rujukan pelanggan.",
  "Tell us how clients know you and where you are based.": "Beritahu kami bagaimana pelanggan mengenali anda dan lokasi asas anda.",
  "List the credentials that should form part of your rating. We verify each at source.": "Senaraikan kelayakan yang patut menjadi sebahagian penarafan anda. Kami mengesahkan setiap satu di sumber.",
  "Prototype note: file names are recorded locally; files are not uploaded.": "Nota prototaip: nama fail direkodkan secara setempat; fail tidak dimuat naik.",
  "Prototype submissions captured in this browser. Production will require a secure database and authenticated access.": "Penghantaran prototaip disimpan dalam pelayar ini. Versi produksi memerlukan pangkalan data selamat dan akses yang disahkan.",
  "No registrations yet. Complete the registration form and the entry lands here.": "Belum ada pendaftaran. Lengkapkan borang pendaftaran dan entri akan dipaparkan di sini.",
  "No employer requests yet. Use “Request this trainer” on any report.": "Belum ada permintaan majikan. Gunakan “Minta jurulatih ini” pada mana-mana laporan.",
  "All names, ratings and evidence in this version are fictional.": "Semua nama, penarafan dan bukti dalam versi ini adalah rekaan."
});

const supplementalPath = path.resolve('i18n/supplemental.json');
if (fs.existsSync(supplementalPath)) Object.assign(pairs, JSON.parse(fs.readFileSync(supplementalPath, 'utf8')));
const output = `// Generated from OSH2U_Ratings_Website_EN-BM.md and i18n/supplemental.json.\nwindow.OSH2U_TRANSLATIONS = ${JSON.stringify(pairs, null, 2)};\n`;
fs.writeFileSync(path.resolve("translations.js"), output, "utf8");
console.log(`Generated translations.js with ${Object.keys(pairs).length} English–BM pairs.`);
