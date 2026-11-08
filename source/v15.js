/* ---------- v15: every hero slide is as tall as slide 1, and the extra room carries detail and motion ---------- */
const hsIc=(n,s)=>`<span class="hs-ic">${ph(n,s||20)}</span>`;
heroAd=function(){const c=courseById('siti-hajar-yusof-0');if(!c)return '';const t=c.t,nx=nextOf(c);
 const ds=(c.sessions||[]).slice(0,3),q=(t.rt&&P(t.rt)[0])||'',pl=(t.plus&&P(t.plus))||[];
 return `<div class="wrap hslide hslide--ad"><div class="hslide__txt"><p class="kick kick--dark"><b>Sponsored</b> · Sample ad from a trainer</p><h2 class="hslide__h">${esc(c.title)}</h2><p class="lede">${esc(c.venue)} · ${c.days} days · <b class="mono" style="color:#fff">${rm(c.price)}</b>${c.hrdc?' · HRD Corp claimable':''}</p>`
 +`<div class="hslide__who"><span class="av av--ring">${initials(t.name)}</span><span><b>${esc(t.name)}</b><span class="hslide__g">${plate(t,'plate--sm')}<span>${avg(t).toFixed(1)} ★ · ${nRev(t)} verified reviews</span></span></span></div>`
 +(ds.length?`<div class="hs-dates"><span class="hs-dates__l">Next dates</span>${ds.map((d,i)=>`<span class="hs-date${i?'':' on'}">${fd(d,{day:'numeric',month:'short'})}</span>`).join('')}</div>`:'')
 +(pl.length?`<ul class="hs-x hs-ticks">${pl.slice(0,3).map(x=>`<li>${ph('check-circle',20)}<span>${esc(x)}</span></li>`).join('')}</ul>`:'')
 +(q?`<figure class="hs-x hs-qcard"><blockquote>“${esc(q)}”</blockquote><figcaption>★★★★★ · Participant review</figcaption></figure>`:'')
 +`<div class="btns"><a class="btn btn--y" href="#/course/${c.id}">View class →</a><a class="btn btn--ghost-d" href="#/trainer/${t.id}">Trainer profile</a></div></div>`
 +`<div class="hslide__media" data-tilt="6"><img src="${topicImg(c.spec)}" alt="" loading="lazy"><span class="hslide__tag">Sponsored</span>`
 +(nx?`<span class="hslide__date"><small>Next class</small><b>${fd(nx,{day:'numeric',month:'short'})}</b></span>`:'')
 +(q?`<figure class="hs-quote"><blockquote>“${esc(q)}”</blockquote><figcaption>★★★★★ · Participant review</figcaption></figure>`:'')
 +`</div></div>`};
heroPilot=function(){const me=byId(DEMO);
 const cells=Array.from({length:100},(_,i)=>`<i${i===0?' class="on"':''} style="--d:${i}">${String(i+1).padStart(3,'0')}</i>`).join('');
 return `<div class="wrap hslide hslide--fe"><div class="hslide__txt"><p class="kick kick--dark"><b class="kick__gold">Limited</b> · Trainer pilot</p><h2 class="hslide__h">Only 100 Founder Edition cards.</h2><p class="lede">The trainer pilot is open. The first 100 verified trainers get the black Founder Edition NFC card, numbered 001 to 100, and Pro free until the end of our first year.</p>`
 +`<ul class="hs-chips"><li>${ph('medal',16)}Numbered 001 to 100</li><li>${ph('contactless-payment',16)}Tap to review</li><li>${ph('crown',16)}Pro free for year one</li></ul>`
 +`<ul class="hs-x hs-perks"><li>${hsIc('medal')}<b>One number per trainer</b><span>Cards run from 001 to 100, then the Founder Edition closes.</span></li><li>${hsIc('contactless-payment')}<b>Black and gold NFC card</b><span>A tap opens your review form, a scan shows your live grade.</span></li><li>${hsIc('crown')}<b>Pro free for year one</b><span>Then RM19 a month for life.</span></li></ul>`
 +`<ol class="hs-x hs-steps"><li><b>Join</b><span>Register in the trainer app.</span></li><li><b>Get verified</b><span>We check your credentials at source.</span></li><li><b>Card posted</b><span>Your numbered card arrives by post.</span></li></ol>`
 +`<div class="btns"><a class="btn btn--y" href="#/app/join">Claim a founder spot →</a><a class="btn btn--ghost-d" href="#/for-trainers">What you get</a></div></div>`
 +`<div class="hslide__media hslide__media--fe" data-tilt="6"><div class="fe-board" aria-hidden="true"><div class="fe-board__top"><span>Founder Edition</span><span>Nº 001 to 100</span></div><div class="fe-grid">${cells}</div></div>`
 +`<span class="hslide__tag hslide__tag--ltd">Limited to 100</span><div class="hslide__card">${tcard(me)}</div></div></div>`};
heroProv=function(){
 return `<div class="wrap hslide hslide--pv"><div class="hslide__txt"><p class="kick kick--dark"><b>New</b> · For training providers</p><h2 class="hslide__h">Market your classes and trainers here.</h2><p class="lede">A small group of training providers can join the pilot free: a provider page, classes in search and a turn in this banner.</p>`
 +`<ul class="hs-chips"><li>${ph('storefront',16)}Provider page</li><li>${ph('magnifying-glass',16)}Classes in search</li><li>${ph('megaphone',16)}This banner</li></ul>`
 +`<ul class="hs-x hs-perks"><li>${hsIc('storefront')}<b>Provider page</b><span>Your centre, your trainers and their grades in one place.</span></li><li>${hsIc('magnifying-glass')}<b>Classes in search</b><span>Shown to employers looking for your topics.</span></li><li>${hsIc('megaphone')}<b>A turn in this banner</b><span>On the home page during the pilot.</span></li></ul>`
 +`<ol class="hs-x hs-steps"><li><b>Apply</b><span>Tell us about your centre and topics.</span></li><li><b>We check your trainers</b><span>Each one is verified at source.</span></li><li><b>Go live</b><span>Your page and classes appear in search.</span></li></ol>`
 +`<div class="btns"><a class="btn btn--y" href="#/providers">Apply for the pilot →</a></div></div>`
 +`<div class="hslide__media hslide__media--slot" data-tilt="6"><img src="img/t-classroom.webp" alt="" loading="lazy"><span class="hslide__slot"><small>Advertising space</small>Your training centre here</span><span class="hs-free">Free during the pilot</span>`
 +`<div class="hs-mock" aria-hidden="true"><span class="hs-mock__logo">${ph('storefront',20)}</span><b class="hs-mock__t">Your training centre</b><span class="hs-mock__l"></span><span class="hs-mock__plates"><i>AAA</i><i>AA</i><i>A</i></span><span class="hs-mock__btn">View classes</span></div></div></div>`};
