/* ---------- v12: shadcn/ui behaviours: sticky offsets, Tabs scroll-spy, aria-current ---------- */
function setMastH(){const m=document.getElementById('mast');if(m)document.documentElement.style.setProperty('--mast-h',m.offsetHeight+'px')}
function spyTick(){const nav=document.querySelector('.tp-tabs');if(!nav)return;const btns=[...nav.querySelectorAll('button[data-to]')];if(!btns.length)return;
 const off=(document.getElementById('mast')?.offsetHeight||0)+nav.offsetHeight+32;let cur=btns[0].dataset.to;
 for(const b of btns){const el=document.getElementById(b.dataset.to);if(el&&el.getBoundingClientRect().top-off<=0)cur=b.dataset.to}
 btns.forEach(b=>{const on=b.dataset.to===cur;b.classList.toggle('on',on);if(on)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')})}
let _spyRaf=0;
addEventListener('scroll',()=>{if(_spyRaf)return;_spyRaf=requestAnimationFrame(()=>{_spyRaf=0;spyTick()})},{passive:true});
addEventListener('resize',setMastH);
const _render12=render;render=function(){_render12.apply(this,arguments);setMastH();spyTick();
 document.querySelectorAll('.nav a').forEach(a=>{if(a.classList.contains('on'))a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})};
/* Dialog: close button, dismiss on outside press, close on navigation (Escape is handled already) */
function dlgEnhance(m){const box=m.querySelector('.modal__box');if(!box||box.querySelector('.dlg-x'))return;const x=document.createElement('button');x.type='button';x.className='dlg-x';x.setAttribute('aria-label','Close');
 x.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';x.addEventListener('click',closeModal);box.appendChild(x)}
new MutationObserver(ms=>{for(const r of ms)for(const n of r.addedNodes)if(n.nodeType===1&&n.id==='modal'&&n.classList.contains('modal'))dlgEnhance(n)}).observe(document.body,{childList:true});
addEventListener('pointerdown',e=>{const m=document.getElementById('modal');if(m&&m.classList.contains('modal')&&e.target===m)closeModal()});
addEventListener('hashchange',()=>{if(document.getElementById('modal'))closeModal()});
