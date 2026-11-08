/* ---------- v13: Founder Edition card (black and gold) for the first 100 trainers ---------- */
const FOUNDER_MAX=100;
const isFounder=t=>{const n=parseInt(cardNo(t),10);return n>=1&&n<=FOUNDER_MAX};
const mmyy=t=>{const d=(t.hist&&t.hist[0]&&t.hist[0][0])||'2026-07-01';const p=d.split('-');return p[1]+'/'+p[0].slice(2)};
const nfcIc=(c,w)=>`<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" aria-hidden="true"><path d="M6 9.5a3.5 3.5 0 0 1 0 5"/><path d="M9.5 7a7 7 0 0 1 0 10"/><path d="M13 4.5a10.5 10.5 0 0 1 0 15"/><path d="M16.5 2a14 14 0 0 1 0 20"/></svg>`;
const _tcard13=tcard,_back13=tcardBackFace;
tcard=function(t){if(!isFounder(t))return _tcard13(t);const no=cardNo(t),ed=no.slice(-3);
 return `<div class="tcard oc" role="img" aria-label="OSH2U Founder Edition NFC card, ${esc(cardName(t))}, number ${ed} of 100"><div class="oc__in">`
 +`<span class="oc__rings" aria-hidden="true"></span><span class="oc__fr" aria-hidden="true"></span><span class="oc__fr2" aria-hidden="true"></span>`
 +`<b class="oc__logo">OSH2U</b>`
 +`<span class="oc__tap"><i>TAP HERE</i><span class="oc__disc">${nfcIc('#0C0C0C',2)}</span></span>`
 +`<span class="oc__eye">VERIFIED TRAINER</span>`
 +`<span class="oc__ph">${initials(t.name)}</span>`
 +`<span class="oc__who"><b>${esc(cardName(t))}</b><span>${V(t.specs[0])}</span></span>`
 +`<span class="oc__flds"><span><small>TRAINER NO.</small><b>OSH2U ${no}</b></span><span><small>SINCE</small><b>${mmyy(t)}</b></span></span>`
 +`<span class="oc__ed"><em>Founder Edition</em><small>Nº ${ed} OF 100</small></span>`
 +`</div></div>`};
tcardBackFace=function(){const me=byId(DEMO);if(!isFounder(me))return _back13();const no=cardNo(me),ed=no.slice(-3);
 return `<div class="tcard oc oc--back" aria-hidden="true"><div class="oc__in">`
 +`<span class="oc__fr"></span><span class="oc__fr2"></span>`
 +`<span class="oc__qr"><svg viewBox="0 0 ${QR.card.n} ${QR.card.n}" shape-rendering="crispEdges"><path d="${QR.card.d}" fill="#0C0C0C"/></svg></span>`
 +`<span class="oc__url">osh2u.my/t/OSH2U-${no}</span>`
 +`<span class="oc__bk"><span class="oc__e2">VERIFIED TRAINER</span><em>Founder Edition</em><small>Nº ${ed} OF 100</small>`
 +`<span class="oc__st">One of the first 100 trainers verified on OSH2U.</span>`
 +`<span class="oc__tl"><span class="oc__disc">${nfcIc('#0C0C0C',2.4)}</span><span>Tap or scan to review my class or see my live grade.</span></span></span>`
 +`<span class="oc__ft"><span class="oc__cl"><span class="oc__scr">SCRATCH</span><span>Claim code: activates your digital ID. One use only.</span></span>`
 +`<span class="oc__dc">Independent. Not affiliated with DOSH, NIOSH or HRD Corp. If found, return to OSH2U Sdn Bhd.</span></span>`
 +`</div></div>`};
