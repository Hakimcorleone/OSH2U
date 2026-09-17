const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const vm = require('node:vm');
const dom = new JSDOM(fs.readFileSync('index.html', 'utf8'), { url: 'https://test.local', runScripts: 'outside-only' });
const w = dom.window;
w.scrollTo = () => {};
w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
const run = code => vm.runInContext(code, dom.getInternalVMContext());
for (const file of ['translations.js', 'app.js']) run(fs.readFileSync(file, 'utf8'));
const missing = new Set();
function capture() {
  const walker = w.document.createTreeWalker(w.document.body, w.NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, [translate="no"]')) continue;
    const text = node.textContent.trim();
    if (/[a-z]{3}/i.test(text) && w.translateString(text, 'ms') === text) missing.add(text);
  }
}
const requestedRoute = process.argv[2];
const routes = requestedRoute ? [requestedRoute] : ['/', '/ratings', '/actions', '/methodology', '/register', '/admin', '/trainer/datuk-wira-ahmad-fakhrul-anuar', ...run('trainers.map(t => `/trainer/${t.id}`)')];
for (const route of routes) {
  w.location.hash = route; w.router(); capture();
}
if (!requestedRoute || requestedRoute === '/register') {
  w.location.hash = '/register'; w.router();
  for (let step = 2; step <= 5; step++) { run(`registerStep=${step}; renderRegisterStep()`); capture(); }
}
if (!requestedRoute || requestedRoute.startsWith('/trainer/')) { w.openRequest('noraini-salleh'); capture(); }
console.log([...missing].sort().join('\n'));
dom.window.close();
