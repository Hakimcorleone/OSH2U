# Builds ../index.html from the files in this folder. Run: cd source && python3 build.py
a=open('app.js').read()
def seg(s,e):return a[a.index(s):a.index(e)]
parts=[seg('/* ---------- language and helpers','/* ---------- header and footer'),
 seg('/* ---------- register of trainers','/* ---------- rating report'),
 seg('/* ---------- rating report','/* ---------- request dialog'),
 "function closeModal(){const m=document.getElementById('modal');if(m)m.remove()}\n",
 seg('/* ---------- methodology','/* ---------- pricing'),
 seg('/* ---------- trainer registration','/* ---------- workspace'),
 seg('/* ---------- back office','/* ---------- router')]
old='${t.courses.map(c=>`<div class="review" style="border-top:0;border-bottom:1px solid var(--line)"><b>${esc(c[0])}</b>'
parts[2]=parts[2].replace(old,'${t.courses.map((c,ci)=>`<div class="review" style="border-top:0;border-bottom:1px solid var(--line)"><a href="#/course/${t.id}-${ci}"><b>${esc(c[0])}</b></a>')
parts[5]=parts[5].replace('<a class="btn" href="#/workspace">${X(\'See a sample workspace\',\'Lihat contoh ruang kerja\')}</a>','<a class="btn" href="#/app">${X(\'Open the trainer app\',\'Buka aplikasi jurulatih\')}</a>')
parts[5]=parts[5].replace("'Thank you. Your workspace is open, and your page shows Registered while we check your credentials.','Terima kasih. Ruang kerja anda telah dibuka, dan halaman anda memaparkan Berdaftar semasa kami menyemak kelayakan anda.'","'Thank you. Your trainer app is ready, and your page shows Registered while we check your credentials.','Terima kasih. Aplikasi jurulatih anda sudah sedia, dan halaman anda memaparkan Berdaftar semasa kami menyemak kelayakan anda.'")
parts[5]=parts[5].replace("'Nothing. Registration, verification, rating, the workspace and your OSH2U card are all free. OSH2U earns from employers and training providers, never from the rating itself.','Tiada bayaran. Pendaftaran, pengesahan, penarafan, ruang kerja dan kad OSH2U anda semuanya percuma. OSH2U memperoleh pendapatan daripada majikan dan penyedia latihan, dan tidak sekali-kali daripada penarafan itu sendiri.'","'Nothing during the pilot, including your NFC card. Your rating is free for good. Later, optional Pro tools cost RM29 a month, and founding trainers keep RM19 for life.','Tiada bayaran semasa tempoh perintis, termasuk kad NFC anda. Penarafan anda percuma selama-lamanya. Kemudian, alat Pro pilihan berharga RM29 sebulan, dan jurulatih perintis kekal RM19 seumur hidup.'")
app=''.join(parts)+'\n'+open('app_new.js').read()+'\n'+open('art.js').read()+'\n'+open('polish.js').read()+'\n'+open('photos.js').read()+'\n'+open('v6.js').read()+'\n'+open('v7.js').read()+'\n'+open('v8.js').read()+'\n'+open('icons.js').read()+'\n'+open('v10.js').read()+'\n'+open('tapp.js').read()+'\n'+open('v9.js').read()+'\n'+open('v11.js').read()+'\n'+open('v12.js').read()+'\n'+open('v13.js').read()+'\n'+open('v15.js').read()+'\n'+open('v16.js').read()
# art.js must load before render(): move the final render call to the very end
app=app.replace('LAST=location.hash;render();','')+'\nLAST=location.hash;render();\n'
import base64
# fonts are bundled into the page (OFL-1.1, via @fontsource) so it loads nothing from other websites
FONTS=[('Bricolage Grotesque','normal','200 800','bricolage-grotesque-latin-opsz-normal')]+\
 [('Plus Jakarta Sans','normal',w,f'plus-jakarta-sans-latin-{w}-normal') for w in ('400','500','600','700','800')]+\
 [('Plus Jakarta Sans','italic','500','plus-jakarta-sans-latin-500-italic')]+\
 [('JetBrains Mono','normal',w,f'jetbrains-mono-latin-{w}-normal') for w in ('400','500','600')]+\
 [('Cormorant Garamond',st,'600',f'cormorant-garamond-latin-600-{st}') for st in ('normal','italic')]
fontcss=''.join("@font-face{font-family:'%s';font-style:%s;font-weight:%s;font-display:swap;src:url(data:font/woff2;base64,%s) format('woff2')}\n"%(f,st,w,base64.b64encode(open('fonts/'+n+'.woff2','rb').read()).decode()) for f,st,w,n in FONTS)
css=fontcss+open('styles.css').read()+'\ninput[type=range],input[type=checkbox],input[type=radio]{accent-color:var(--primary)}\n#jsErr{background:#A23B2A;color:#fff;padding:8px 16px;font-size:13px}\n'
html=f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>OSH2U - Find OSH training you can trust</title>
<meta name="description" content="Prototype of OSH2U: compare OSH training and independently rated trainers in Malaysia.">
<meta property="og:title" content="OSH2U - Find OSH training you can trust">
<meta property="og:description" content="Prototype: independent ratings for occupational safety and health trainers in Malaysia.">
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
{css}
</style>
</head>
<body>
<div id="jsErr" hidden></div>
<div class="banner" id="banner">Prototype.</div>
<header class="mast" id="mast"><div class="mast__in"><a class="brand" href="#/">OSH<span>2</span>U</a></div></header>
<main id="app"><noscript><h1>OSH2U</h1><p>This prototype needs JavaScript. Open it in a browser.</p></noscript></main>
<footer id="foot"></footer>
<script>
{open('qr.js').read()}
{open('data.js').read()}
{app}
</script>
</body>
</html>
'''
open('../index.html','w').write(html)
print(len(html))
