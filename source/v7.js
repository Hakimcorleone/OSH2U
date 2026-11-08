/* ========== v7: real-looking (AI-generated) trainer photos, 3D hero card stack ========== */
/* Photos come from PHOTOS (photos.js): the sample profile uses his own photo, the fictional
   trainers use AI-generated faces. New registrations show their initials. */
const _initialsV6=initials;
initials=function(n){const t=T.find(x=>x.name===n);
 if(t&&PHOTOS[t.id])return `<img class="avimg" src="${PHOTOS[t.id]}" alt="" decoding="async">`;
 if(t)return _initialsV6(n);
 return esc(String(n||'').replace(/^Datuk Wira /,'').split(/\s+/).filter(w=>w&&!/^(bin|binti|Abd|Mohd)$/i.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join(''))};

/* Hero: three rated trainers as cards, layered in 3D and floating. Numbers come from the specimen data. */
function heroStack(){const ids=['faizal-othman','kavitha-subramaniam','tan-wei-ling'];
 return `<div class="hstack">${ids.map((id,i)=>{const t=byId(id);return `<a class="hcard hcard--${i+1}" href="#/trainer/${id}"><span class="hcard__ph"><img src="${PHOTOS[id]}" alt=""></span><span class="hcard__body"><b class="hcard__nm">${esc(t.name)}</b><span class="hcard__sp">${V(t.specs[0])}</span><span class="hcard__row">${plate(t,'plate--sm')}<span class="hcard__st"><b>${avg(t).toFixed(1)}</b>${stars(avg(t))}</span></span><span class="hcard__n">${nRev(t)} ${X('verified reviews','ulasan disahkan')}</span></span></a>`}).join('')}</div>`}
const _homeV7=home;
home=function(){let h=_homeV7();
 const f2=`<div class="float f2"><b class="mono">4.9</b> <span class="stars" style="font-size:13px">★★★★★</span><span class="small">412 ${X('reviews','ulasan')}</span></div>`;
 h=h.replace(heroArt(),()=>heroStack());
 h=h.replace(f2,()=>`<div class="float f2">${ti('star',16)} <span>${X('Stars only from people who attended','Bintang hanya daripada peserta yang hadir')}</span></div>`);
 return h};
