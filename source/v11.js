/* ========== v11: trainer profile page, redesigned ========== */
report=function(id){const t=byId(id);if(!t)return `<h1>Trainer not found</h1><a href="#/ratings">Back to the register</a>`;
 const m=mark(t),sc=score(t),la=lastAct(t),g=m.length<=3?GRADES.find(x=>x.g===m):null,n=nRev(t),a=avg(t),src=t.credSrc;
 const graded=m!=='registered'&&m!=='review';
 const nx=new Date(la[0]+'T00:00:00');nx.setFullYear(nx.getFullYear()+1);const nxs=nx.toLocaleDateString('en-GB',{month:'long',year:'numeric'});
 const cs=allCourses().filter(c=>c.t.id===t.id),up=cs.filter(c=>nextOf(c)).length,nm=esc(t.short||t.name);
 return `<div class="tp">
 ${t.sample?`<div class="tp-note">${ph('info',18)}<span><b>Sample profile.</b> The name, roles and credentials come from public sources. The grade, stars, reviews, calendar and rating history are illustrative, and are not a real rating.</span></div>`:''}
 <section class="tp-hero"><div class="tp-hero__main"><p class="tp-crumb"><a href="#/ratings">Rated trainers</a> / ${nm}</p>
  <div class="tp-id"><span class="tp-ph">${initials(t.name)}</span><div class="tp-id__t"><div class="tp-pills">${t.sample?'<span class="pill pill--y">Sample profile</span>':''}<span class="tp-ver">${ph('seal-check',16)} ${t.sample?'Public record':'Verified'}</span>${t.hrdc?'<span class="tp-pill">HRD Corp accredited</span>':''}</div><h1>${esc(t.name)}</h1><p class="tp-sub">${V(t.type)} · ${esc(t.state)} · ${t.langs.map(V).join(', ')}</p></div></div>
  <div class="tp-specs">${t.specs.map(s=>`<a class="tp-spec" href="#/find" data-act="qchip" data-v="${esc(s)}">${specIcon(s,18)}<span>${V(s)}</span></a>`).join('')}</div>
  <div class="btns"><button class="btn btn--y" data-act="req">Request this trainer</button>${cs.length?`<button class="btn btn--ghost-d" data-act="tpgo" data-to="tp-classes">${cs.length} ${cs.length===1?'class':'classes'}</button>`:''}<button class="btn btn--ghost-d" data-act="copy" data-v="https://osh2u.my/t/OSH2U-${cardNo(t)}">${ph('share-network',16)} Share</button></div></div>
  <aside class="tp-rate" data-tilt="6"><div class="tp-rate__top"><span>OSH2U grade</span><span>Criteria v0.3</span></div>
  <div class="tp-rate__g">${plate(t,'plate--lg')}<div class="tp-ring" style="--p:${graded?sc:0}"><b>${graded?sc:'–'}</b><span>of 100</span></div></div>
  <p class="tp-rate__m"><b>${g?P(g.l):m==='review'?'Under review':'Collecting reviews'}</b> · Outlook ${esc(t.outlook||'n/a')}</p>
  <div class="tp-rate__st">${stars(a)}<b>${a.toFixed(1)}</b><span>${n} verified reviews</span></div>
  <dl class="tp-rate__f"><div><dt>Last action</dt><dd>${V(la[1])}, ${fd(la[0])}</dd></div><div><dt>Next review</dt><dd>${nxs}</dd></div></dl></aside></section>
 <div class="tp-tabbar"><nav class="tp-tabs" aria-label="On this page">${[['tp-over','Overview'],['tp-reviews','Reviews'],['tp-classes','Classes'],['tp-creds','Credentials'],['tp-hist','History']].map(x=>`<button data-act="tpgo" data-to="${x[0]}">${x[1]}</button>`).join('')}</nav></div>
 <section class="tp-kpis">${[['star',a.toFixed(1),'Participant stars',n+' verified reviews'],['hard-hat',t.yrs+' yrs','OSH practice',t.yrsT+' years training'],['calendar-check',t.days,'Training days','last 12 months'],['seal-check',t.creds.length,'Credentials',t.sample?'on public record':'checked at source'],['chalkboard-teacher',cs.length,'Classes listed',up+' with dates']].map(k=>`<div class="tp-kpi"><span class="tp-kpi__ic">${ph(k[0],22)}</span><b>${k[1]}</b><span>${k[2]}</span><small>${k[3]}</small></div>`).join('')}</section>
 <div class="tp-grid"><div class="tp-main">
  <section class="tp-card" id="tp-over"><p class="tp-k">Rating rationale</p><p class="tp-lead">${P(t.sum)}</p>
  <div class="tp-sw"><div class="tp-sw__s"><h3>${ph('check-circle',20)} Strengths</h3><ul>${P(t.plus).map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="tp-sw__g"><h3>${ph('chart-line-up',20)} Growth areas</h3><ul>${P(t.grow).map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
  <div class="tp-path"><div><b>${ph('rocket-launch',18)} Path to the next grade</b><p>${P(t.next)}</p></div><div><b>${ph('shield-check',18)} What keeps the rating where it is</b><p>${P(t.watch)}</p></div></div></section>
  <section class="tp-card" id="tp-reviews"><div class="tp-h"><h2>What participants say</h2></div>
  <div class="tp-rvsum"><div class="tp-rvbig"><b>${a.toFixed(1)}</b>${stars(a)}<span>${n} verified reviews</span></div><div class="ta-dist">${[5,4,3,2,1].map((s,i)=>`<div><span>${s} ★</span><i><em style="width:${n?(t.rv[i]/n*100).toFixed(1):0}%"></em></i><b>${t.rv[i]}</b></div>`).join('')}</div></div>
  <div class="tp-quotes">${t.rvw.map((r,i)=>`<figure class="tp-q"><span class="tp-q__m" aria-hidden="true">“</span><blockquote>${P(t.rt)[i]}</blockquote><figcaption>${stars(r.s)}<span>${esc(t.courses[r.c][0])} · ${fd(r.d)}</span></figcaption></figure>`).join('')}</div>
  <p class="tp-fine">OSH2U collects every review directly from a participant whose attendance was confirmed. Trainers cannot add, edit or remove reviews.</p></section>
  <section id="tp-classes" class="tp-sec"><div class="tp-h"><h2>Classes</h2><a href="#/find">Find training →</a></div>${cs.length?`<div class="tp-classes">${cs.map(c=>ccard(c)).join('')}</div>`:'<p class="tp-fine">No classes listed yet.</p>'}</section>
  <section class="tp-card" id="tp-hist"><div class="tp-h"><h2>Rating history</h2></div><ol class="tp-tl">${t.hist.slice().reverse().map((h,i)=>`<li class="${i?'':'now'}"><span class="tp-tl__dot"></span><div class="tp-tl__d">${fd(h[0])}</div><div class="tp-tl__b">${h[2]?plate(h[2],'plate--sm'):plate(h[1]==='Registered'?'registered':'review','plate--sm')}<b>${V(h[1])}</b>${h[3]?`<span>Outlook ${V(h[3])}</span>`:''}</div></li>`).join('')}</ol></section>
 </div>
 <aside class="tp-side">
  <section class="tp-card tp-cta"><h3>Need ${nm} for a course?</h3><p>Send a request through OSH2U. The trainer replies to you directly.</p><button class="btn btn--y" data-act="req">Request this trainer</button><p class="tp-fine">Free for employers. No booking fee and no commission.</p></section>
  <section class="tp-card"><h3>How this rating is built</h3><p class="tp-fine" style="margin-top:0">Four assessments, weighted. Participant stars are 60% of the grade.</p>${pbars(t)}${graded?`<div class="tp-ruler"><p class="tp-k">Rating score ${sc} of 100 · register median ${MEDIAN}</p>${ruler(sc)}</div>`:''}</section>
  <section class="tp-card" id="tp-creds"><h3>${t.sample?'Credentials on public record':'Verified credentials'}</h3><ul class="tp-creds">${t.creds.map((c,i)=>`<li><span class="tp-creds__ic">${ph('seal-check',18)}</span><div><b>${V(c)}</b><small>${src?'Source: '+esc(P(src[i])):'Verified at source'}</small></div></li>`).join('')}</ul></section>
  <section class="tp-card"><h3>Practice</h3><dl class="tp-kv"><div><dt>Industries</dt><dd>${t.inds.map(V).join(', ')}</dd></div><div><dt>Languages</dt><dd>${t.langs.map(V).join(', ')}</dd></div><div><dt>Training</dt><dd>${t.yrsT} years, ${t.days} days in the last 12 months</dd></div></dl></section>
  <section class="tp-card"><h3>Availability</h3><p class="tp-fine" style="margin-top:0">Open dates over the next five weeks. Pick one to request it.</p>${calGrid(t.id,false)}</section>
 </aside></div>
 ${t.sample?`<p class="tp-fine" style="margin-top:18px">Disclosure: this is a sample profile built from public information to show how OSH2U works. Nothing on this page is a real rating, and no participant has reviewed this trainer through OSH2U.</p>`:''}
 <div class="tp-bar"><div><b>${nm}</b><span>${graded?m+' · ':''}${a.toFixed(1)} ★ · ${n} reviews</span></div><button class="btn btn--y btn--sm" data-act="req">Request</button></div></div>`};
document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest('[data-act="tpgo"]');if(!b)return;e.preventDefault();const el=document.getElementById(b.dataset.to);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})});
