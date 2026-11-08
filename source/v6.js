/* ========== v6: illustrated portraits, 3D tilt, scroll reveal ========== */
const FACES={
 'hafizuddin-rahman':{g:'m',skin:'#8C5A3C',hair:'#1B1B1B',hat:'#F5B800',beard:1,shirt:'#2A2A2A'},
 'ahmad-fakhrul-anuar':{g:'m',skin:'#A36A45',hair:'#9E9E9E',glasses:1,shirt:'#111111',tie:1},
 'lim-chee-keong':{g:'m',skin:'#E8B98E',hair:'#1B1B1B',glasses:1,shirt:'#3D5A80'},
 'kavitha-subramaniam':{g:'f',skin:'#7A4A2E',hair:'#141414',long:1,shirt:'#7B2D26'},
 'siti-hajar-yusof':{g:'f',skin:'#C68B59',hijab:'#5B2A3C',shirt:'#5B2A3C'},
 'faizal-othman':{g:'m',skin:'#9C6644',hair:'#1B1B1B',hat:'#FFFFFF',mous:1,shirt:'#E85D04'},
 'tan-wei-ling':{g:'f',skin:'#F0C8A0',hair:'#1B1B1B',bob:1,shirt:'#2A9D8F'},
 'rajendran-pillai':{g:'m',skin:'#5C3A21',hair:'#BDBDBD',hat:'#F5B800',mous:1,shirt:'#264653'},
 'azman-shah-ibrahim':{g:'m',skin:'#A0673F',hair:'#1B1B1B',shirt:'#6A994E'},
 'dayang-norhaliza':{g:'f',skin:'#B07848',hijab:'#1D3557',shirt:'#1D3557'},
 'jeffery-gimbang':{g:'m',skin:'#9C6644',hair:'#1B1B1B',hat:'#E85D04',shirt:'#3D3D3D'},
 'zulkifli-hamzah':{g:'m',skin:'#8C5A3C',hair:'#1B1B1B',songkok:1,mous:1,shirt:'#F4F4F0'},
 'nur-aisyah-kamaruddin':{g:'f',skin:'#D29A6A',hijab:'#3D3D3D',shirt:'#F5B800'},
 'jason-wong':{g:'m',skin:'#F0C8A0',hair:'#1B1B1B',spiky:1,shirt:'#C1121F'}};
function face(f,bg){const s=f.skin,h=f.hair||'#1B1B1B',sh=f.shirt||'#2A2A2A';let back='',front='';
 if(f.long)back+=`<path d="M17 30c0-14 6-20 15-20s15 6 15 20v18H17z" fill="${h}"/>`;
 if(f.hijab)back+=`<path d="M14 64V40c0-16 8-27 18-27s18 11 18 27v24z" fill="${f.hijab}"/>`;
 let hair='';if(!f.hijab&&!f.hat&&!f.songkok){hair=f.bob?`<path d="M19 33c-1-12 5-19 13-19s14 7 13 19c-3-6-6-9-13-9s-10 3-13 9z" fill="${h}"/><path d="M19 30v8h4v-9zM45 30v8h-4v-9z" fill="${h}"/>`:f.spiky?`<path d="M20 27c0-9 5-14 12-14s12 5 12 14l-3-5-3 3-3-5-3 4-3-5-3 5-3-3z" fill="${h}"/>`:`<path d="M20 28c0-9 5-14 12-14s12 5 12 14c-3-4-7-6-12-6s-9 2-12 6z" fill="${h}"/>`}
 if(f.hat)front+=`<path d="M17 26a15 15 0 0 1 30 0z" fill="${f.hat}" stroke="#111" stroke-width="1.6"/><rect x="14" y="24.5" width="36" height="4" rx="2" fill="${f.hat}" stroke="#111" stroke-width="1.6"/><rect x="30.5" y="12" width="3" height="10" rx="1.5" fill="#111" opacity=".25"/>`;
 if(f.songkok)front+=`<path d="M20 22h24l-1 6H21z" fill="#141414"/>`;
 const hijabFace=f.hijab?`<path d="M20 31c0-8 5-14 12-14s12 6 12 14v4c0 8-5 12-12 12s-12-4-12-12z" fill="${f.hijab}"/>`:'';
 const facePath=`<ellipse cx="32" cy="32" rx="11" ry="13" fill="${s}"/>`;
 const glasses=f.glasses?`<g fill="none" stroke="#111" stroke-width="1.4"><circle cx="27.5" cy="31" r="3.4"/><circle cx="36.5" cy="31" r="3.4"/><path d="M30.9 31h2.2"/></g>`:'';
 const beard=f.beard?`<path d="M21.5 34c1 8 5 11 10.5 11s9.5-3 10.5-11c-2 4-5 5-10.5 5s-8.5-1-10.5-5z" fill="${h}"/>`:'';
 const mous=f.mous?`<path d="M28 37.5c2-1.5 6-1.5 8 0-2 .8-6 .8-8 0z" fill="${h}"/>`:'';
 const tie=f.tie?`<path d="M31 50h2l1.5 3-2.5 11-2.5-11z" fill="#F5B800"/><path d="M27 49l5 3 5-3" fill="none" stroke="#fff" stroke-width="1.5"/>`:'';
 const vest=(f.hat&&!f.tie)?`<path d="M22 52l4 12M42 52l-4 12" stroke="#F5B800" stroke-width="3"/><path d="M23 57h18" stroke="#E2E2DE" stroke-width="1.6"/>`:'';
 return `<svg viewBox="0 0 64 64" width="100%" height="100%" role="img" aria-label="${X('Illustrated portrait','Potret ilustrasi')}"><circle cx="32" cy="32" r="32" fill="${bg||'#F5B800'}"/><g style="clip-path:circle(32px at 32px 32px)">${back}<path d="M10 64c2-10 10-15 22-15s20 5 22 15z" fill="${sh}"/>${vest}${tie}<rect x="28.5" y="42" width="7" height="8" fill="${s}"/>${hijabFace}${facePath}${hair}<circle cx="27.5" cy="31" r="1.3" fill="#111"/><circle cx="36.5" cy="31" r="1.3" fill="#111"/>${glasses}<path d="M28.5 38.5c2 1.6 5 1.6 7 0" fill="none" stroke="#111" stroke-width="1.4" stroke-linecap="round"/>${beard}${mous}${front}</g></svg>`}
const FACE_BY_NAME={};T.forEach(t=>{FACE_BY_NAME[t.name]=FACES[t.id]});
initials=function(n){const f=FACE_BY_NAME[n];return f?face(f):face({g:'m',skin:'#C68B59',hair:'#1B1B1B',shirt:'#3D3D3D'},'#E2E2DE')};

/* 3D tilt on cards and the hero illustration (mouse only), scroll reveal */
document.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const el=e.target.closest&&e.target.closest('[data-tilt]');
 document.querySelectorAll('[data-tilt].tilting').forEach(x=>{if(x!==el){x.classList.remove('tilting');x.style.removeProperty('--tx');x.style.removeProperty('--ty')}});
 if(!el)return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;const k=+el.dataset.tilt||8;
 el.classList.add('tilting');el.style.setProperty('--ty',(x*k).toFixed(2)+'deg');el.style.setProperty('--tx',(-y*k).toFixed(2)+'deg')});
function decorate(){const app=document.getElementById('app');if(!app)return;
 app.querySelectorAll('.topic,.tq,.ccard,.stepcard,.pcard,.rcard,.tcardpub').forEach(el=>{if(!el.dataset.tilt)el.dataset.tilt='9'});
 const h=app.querySelector('.hero2__art');if(h)h.dataset.tilt='6';
 const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reduce||!('IntersectionObserver' in window))return;
 const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -8% 0px'});
 app.querySelectorAll('.band .wrap>*:not(.hero2),.topic,.ccard,.stepcard,.pcard,.rcard,.tq,.rung,.tl,.indep>div').forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--d',(i%6)*60+'ms');io.observe(el)})}
const _render6=render;render=function(){_render6();decorate()};
