const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { JSDOM, VirtualConsole } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');

function boot(hash = '#/', lang = 'en') {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const dom = new JSDOM(html, {
    url: `https://test.local/${hash}`,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.scrollTo = () => {};
      window.HTMLElement.prototype.scrollIntoView = () => {};
      window.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
      window.HTMLDialogElement.prototype.close = function () { this.open = false; };
      window.localStorage.setItem('osh2u.lang', lang);
    }
  });
  return { dom, w: dom.window, errors };
}

test('v0.3 single-file prototype contains styles, data and application code', () => {
  assert.match(html, /PROTOTYPE v0\.3/);
  assert.match(html, /Datuk Wira Ahmad Fakhrul Anuar/);
  assert.ok(html.includes('<style>'));
  assert.ok(html.includes("id:'hafizuddin-rahman'"));
  assert.ok(html.length > 300000);
});

test('home renders the Datuk Wira sample profile with an illustrative disclosure', () => {
  const { dom, w, errors } = boot();
  const view = w.document.querySelector('[data-view="home"]');
  assert.equal(view.hidden, false);
  assert.match(view.textContent, /Datuk Wira/);
  assert.match(view.textContent, /illustrative/i);
  assert.equal(errors.length, 0);
  dom.window.close();
});

test('EN-BM preference renders Bahasa Malaysia', () => {
  const { dom, w, errors } = boot('#/methodology', 'ms');
  assert.equal(w.document.documentElement.lang, 'ms');
  assert.match(w.document.querySelector('[data-view="methodology"] h1').textContent, /Metodologi/);
  assert.equal(errors.length, 0);
  dom.window.close();
});

test('workspace route renders all functional tabs for Datuk Wira', () => {
  const { dom, w, errors } = boot('#/workspace');
  const view = w.document.querySelector('[data-view="workspace"]');
  assert.equal(view.hidden, false);
  assert.match(view.textContent, /Datuk Wira/);
  assert.equal(view.querySelectorAll('.tabs a').length, 8);
  assert.equal(errors.length, 0);
  dom.window.close();
});

test('trainer registration route renders the five-step form', () => {
  const { dom, w, errors } = boot('#/register');
  const view = w.document.querySelector('[data-view="register"]');
  assert.equal(view.hidden, false);
  assert.equal(view.querySelectorAll('#stepper li').length, 5);
  assert.ok(view.querySelector('#regForm'));
  assert.equal(errors.length, 0);
  dom.window.close();
});
