const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

function boot(hash = '#/') {
  const dom = new JSDOM(fs.readFileSync('index.html', 'utf8'), {
    url: `https://test.local/${hash}`,
    runScripts: 'outside-only'
  });
  const w = dom.window;
  w.scrollTo = () => {};
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  const context = dom.getInternalVMContext();
  for (const file of ['translations.js', 'app.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  return { dom, w, run: code => vm.runInContext(code, context) };
}

test('home uses the sourced Datuk Wira profile without an invented rating', () => {
  const { dom, w } = boot();
  const card = w.document.querySelector('.featured-card');
  assert.match(card.textContent, /Datuk Wira Ahmad Fakhrul Anuar bin Haji Ismail/);
  assert.match(card.textContent, /Not yet rated by OSH2U/);
  assert.equal(card.querySelector('.score-ruler'), null);
  assert.equal(card.querySelector('img').getAttribute('src'), 'assets/datuk-wira.jpg');
  dom.window.close();
});

test('EN-BM toggle translates in place and preserves entered form data', () => {
  const { dom, w } = boot('#/register');
  const name = w.document.querySelector('#name');
  name.value = 'Nama Ujian';
  w.document.querySelector('[data-lang="ms"]').click();
  assert.equal(w.document.documentElement.lang, 'ms');
  assert.equal(w.document.querySelector('#name').value, 'Nama Ujian');
  assert.match(w.document.querySelector('#app h1').textContent, /Bina penarafan/);
  assert.equal(w.localStorage.getItem('osh2u.lang'), 'ms');
  w.document.querySelector('[data-lang="en"]').click();
  assert.equal(w.document.querySelector('#name').value, 'Nama Ujian');
  assert.match(w.document.querySelector('#app h1').textContent, /Build a rating/);
  dom.window.close();
});

test('translated select labels retain canonical English values', () => {
  const { dom, w } = boot('#/ratings');
  w.document.querySelector('[data-lang="ms"]').click();
  const option = [...w.document.querySelectorAll('#specFilter option')].find(item => item.value === 'Construction safety');
  assert.equal(option.textContent, 'Keselamatan pembinaan');
  assert.equal(option.value, 'Construction safety');
  const firstCell = w.document.querySelector('.data-table tbody td');
  assert.ok(firstCell.dataset.label);
  dom.window.close();
});

test('employer request records the active UI language', () => {
  const { dom, w, run } = boot('#/trainer/noraini-salleh');
  w.document.querySelector('[data-lang="ms"]').click();
  run("openRequest('noraini-salleh')");
  const form = w.document.querySelector('#requestForm');
  form.elements.name.value = 'Majikan Ujian';
  form.elements.company.value = 'Syarikat Ujian';
  form.elements.email.value = 'uji@example.com';
  form.elements.pax.value = '20';
  form.elements.need.value = 'Latihan bahan kimia';
  form.dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
  const saved = JSON.parse(w.localStorage.getItem('osh2u.leads'));
  assert.equal(saved[0].uiLang, 'ms');
  assert.equal(saved[0].trainer, 'Noraini Salleh');
  dom.window.close();
});
