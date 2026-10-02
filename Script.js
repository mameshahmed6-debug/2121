(() => {
const SPORTS = [("basketball", "Basketball", "basketball.jpg", "Basketball ist eine dynamische Mannschaftssportart. Zwei Teams versuchen, den Ball in den Korb des Gegners zu werfen. Schnelligkeit, Präzision und Teamgeist sind besonders wichtig.", "Ein Basketballkorb hängt 3,05 Meter hoch.", "01"), ("schwimmen", "Schwimmen", "swimming.webp", "Schwimmen trainiert fast den ganzen Körper und verbessert Ausdauer, Koordination und Technik. Im Wasser kann man gleichzeitig aktiv sein und sich entspannen.", "Ein olympisches Becken ist 50 Meter lang.", "02"), ("fussball", "Fußball", "football.jpg", "Fußball verbindet Technik, Ausdauer und Teamarbeit. Auf dem Platz muss man schnell reagieren, Räume erkennen und gemeinsam Entscheidungen treffen.", "Ein Spiel dauert regulär zweimal 45 Minuten.", "03"), ("laufen", "Laufen", "running.jpg", "Laufen ist einfach zugänglich und vielseitig. Ob im Park, im Wald oder auf der Bahn: Regelmäßiges Training kann Ausdauer und Fitness verbessern.", "Ein Marathon ist 42,195 Kilometer lang.", "04"), ("tennis", "Tennis", "tennis.jpg", "Tennis kann als Einzel oder Doppel gespielt werden. Schnelle Reaktionen, Beweglichkeit, Konzentration und eine gute Schlagtechnik gehören zum Spiel.", "Die vier Grand-Slam-Turniere finden in Australien, Frankreich, Großbritannien und den USA statt.", "05"), ("radfahren", "Radfahren", "cycling.jpg", "Radfahren kann Freizeit, Training und Wettkampf zugleich sein. Man kann ruhig durch die Natur fahren oder anspruchsvolle Strecken bewältigen.", "Die Tour de France wird traditionell über mehrere Wochen ausgetragen.", "06"), ("volleyball", "Volleyball", "volleyball.jpg", "Beim Volleyball stehen zwei Teams an einem Netz. Kommunikation, Timing und schnelle Reaktionen entscheiden über viele Ballwechsel.", "Das Netz der Männer ist 2,43 Meter hoch.", "07"), ("boxen", "Boxen", "boxing.svg", "Boxen ist ein Kampfsport mit klaren Regeln. Technik, Fußarbeit, Reaktion und kontrollierte Bewegungen spielen eine zentrale Rolle.", "Ein Boxring ist quadratisch und hat gespannte Seile.", "08"), ("handball", "Handball", "handball.svg", "Handball ist ein schneller Teamsport. Die Spieler passen, laufen und werfen auf das gegnerische Tor. Zusammenspiel und Reaktion sind entscheidend.", "Eine Handballmannschaft steht mit sieben Spielern auf dem Feld.", "09"), ("turnen", "Turnen", "gymnastics.svg", "Turnen verbindet Kraft, Beweglichkeit, Balance und Körperkontrolle. Übungen können an Geräten oder auf einer Fläche durchgeführt werden.", "Beim Turnen zählen Technik, Kontrolle und Ausführung.", "10"), ("tischtennis", "Tischtennis", "table-tennis.svg", "Tischtennis ist ein schneller Rückschlagsport. Der kleine Ball und die kurze Distanz machen Reaktion und Konzentration besonders wichtig.", "Ein Tischtennismatch wird in Sätzen gespielt.", "11"), ("leichtathletik", "Leichtathletik", "athletics.svg", "Leichtathletik umfasst viele Disziplinen wie Sprint, Lauf, Sprung und Wurf. Sie verbindet Geschwindigkeit, Kraft, Technik und Ausdauer.", "Zu den klassischen Disziplinen gehören Lauf, Sprung und Wurf.", "12")];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];

const progress = $('#progress');
addEventListener('scroll',()=>{
  const h=document.documentElement, max=h.scrollHeight-h.clientHeight;
  progress.style.transform=`scaleX(${max? h.scrollTop/max:0})`;
},{passive:true});

const menu=$('#menu'), burger=$('#burger');
burger?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open'); burger.setAttribute('aria-expanded',open);
});
$$('#menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}));

const sectionHost=$('#sportSections');
const makeSection=(s,i)=>`<section class="sport reveal-section" id="${s[0]}" data-index="${i+1}">
  <div class="sport-media tilt"><img src="assets/${s[2]}" alt="${s[1]}" loading="lazy"><div class="media-number">${s[5]}</div><div class="shine"></div></div>
  <div class="sport-copy">
    <div class="sport-kicker">${String(i+1).padStart(2,'0')} / SPORTART</div>
    <h2 class="scramble">${s[1]}</h2>
    <p>${s[3]}</p>
    <div class="fact"><b>Wusstest du schon?</b><span>${s[4]}</span></div>
    <a class="text-link" href="#${i<SPORTS.length-1?SPORTS[i+1][0]:SPORTS[0][0]}">Nächste Sportart <span>→</span></a>
  </div>
</section>`;
sectionHost.innerHTML=SPORTS.map(makeSection).join('');

const marquee=$('#marqueeTrack');
const cards=SPORTS.map(s=>`<a class="mini-card" href="#${s[0]}"><img src="assets/${s[2]}" alt="${s[1]}"><span>${s[1]}</span></a>`).join('');
marquee.innerHTML=cards+cards;

const TRAINING_META = {
  basketball: { title: 'Basketball-Dribbling', duration: '00:42', subtitle: 'Tempo & Kontrolle' },
  schwimmen: { title: 'Schwimmtechnik', duration: '00:38', subtitle: 'Atem & Kraft' },
  fussball: { title: 'Fußball-Übung', duration: '00:45', subtitle: 'Pass & Ballgefühl' },
  laufen: { title: 'Lauf-Intervalle', duration: '00:36', subtitle: 'Ausdauer & Rhythmus' },
  tennis: { title: 'Tennis-Volleys', duration: '00:41', subtitle: 'Präzision & Reaktion' },
  radfahren: { title: 'Radfahren-Tempo', duration: '00:33', subtitle: 'Kondition & Balance' },
  volleyball: { title: 'Volleyball-Block', duration: '00:39', subtitle: 'Sprung & Koordination' },
  boxen: { title: 'Boxen-Combo', duration: '00:32', subtitle: 'Fußarbeit & Technik' },
  handball: { title: 'Handball-Pass', duration: '00:37', subtitle: 'Wurf & Bewegung' },
  turnen: { title: 'Turnen-Koordination', duration: '00:35', subtitle: 'Balance & Kraft' },
  tischtennis: { title: 'Tischtennis-Return', duration: '00:28', subtitle: 'Reaktion & Genauigkeit' },
  leichtathletik: { title: 'Leichtathletik-Sprint', duration: '00:34', subtitle: 'Sprint & Kraft' }
};

const buildSportVideo = (s,i,compact=false)=>{ const meta = TRAINING_META[s[0]] || { title: s[1], duration: '00:35', subtitle: 'Training' }; return `<article class="video-card reveal-video${compact?' compact':''}"><div class="video-wrap"><video muted loop playsinline preload="metadata" poster="assets/${s[2]}"><source src="assets/videos/sports/${s[0]}.mp4" type="video/mp4"></video><div class="video-badges"><span class="video-tag">${String(i+1).padStart(2,'0')}</span><span class="video-duration">${meta.duration}</span></div><div class="video-actions"><button class="sound-toggle" aria-label="Ton ${s[1]} an/aus">🔊</button><button class="fullscreen-toggle" aria-label="${s[1]} Vollbild">⛶</button></div></div><div class="video-info"><div class="meta-pill">${meta.subtitle}</div><h3>${meta.title}</h3><p>${compact ? 'Sportvideo • '+s[1] : ['Dribbling • Sprung • Präzision','Technik • Ausdauer • Atmung','Ballkontrolle • Pass • Sprint','Start • Tempo • Ausdauer','Aufschlag • Fußarbeit • Reaktion','Tritt • Balance • Ausdauer','Baggern • Sprung • Aufschlag','Fußarbeit • Deckung • Technik','Pass • Wurf • Bewegung','Balance • Kraft • Koordination','Reaktion • Schlag • Platzierung','Sprint • Sprung • Wurf'][i]}</p></div></article>`;};

const addVideoControls=(card)=>{
  const v=$('video',card), playBtn=$('.video-play',card), sound=$('.sound-toggle',card), full=$('.fullscreen-toggle',card);
  if(v && sound){
    sound.addEventListener('click',()=>{ v.muted = !v.muted; sound.textContent = v.muted ? '🔊' : '🔇'; sound.setAttribute('aria-label', v.muted ? 'Ton an' : 'Ton aus'); });
  }
  if(v && full){
    full.addEventListener('click',()=>{ if(v.requestFullscreen) v.requestFullscreen().catch(()=>{}); });
  }
  const toggle=()=>{ if(!playBtn) return; if(v.paused){ v.play(); card.classList.add('playing'); playBtn.textContent='Ⅱ'; } else { v.pause(); card.classList.remove('playing'); playBtn.textContent='▶'; }};
  if(playBtn){playBtn.addEventListener('click',toggle);}
  if(v){ v.addEventListener('click',()=>{ if(v.readyState >= 2) { if(v.paused){ v.play(); card.classList.add('playing'); if(playBtn) playBtn.textContent='Ⅱ'; } else { v.pause(); card.classList.remove('playing'); if(playBtn) playBtn.textContent='▶'; } } }); }
  const durationBadge=$('.video-duration',card);
  if(v && durationBadge && Number.isFinite(v.duration) && v.duration > 0){
    durationBadge.textContent = new Date(v.duration * 1000).toISOString().slice(14, 19);
  }
  if(v){ v.muted = true; }
};

const videoGrid=$('#videoGrid');
if(videoGrid){
  videoGrid.innerHTML=SPORTS.map((s,i)=>buildSportVideo(s,i)).join('');
  $$('.video-card').forEach(card=>{
    const v=$('video',card), b=$('.video-play',card);
    if(!b){
      const playBtn=document.createElement('button');
      playBtn.className='video-play'; playBtn.type='button'; playBtn.textContent='▶'; playBtn.setAttribute('aria-label','Video abspielen');
      const wrap=$('.video-wrap',card); wrap.appendChild(playBtn);
    }
    addVideoControls(card);
    const vio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');vio.unobserve(e.target)}}),{threshold:.15});vio.observe(card);
  });
}
const wallGrid=$('#sportVideoWall');
if(wallGrid){
  wallGrid.innerHTML=SPORTS.map((s,i)=>buildSportVideo(s,i,true)).join('');
  $$('.video-card', wallGrid).forEach(card=>{
    const v=$('video',card), b=$('.video-play',card);
    if(!b){
      const playBtn=document.createElement('button');
      playBtn.className='video-play'; playBtn.type='button'; playBtn.textContent='▶'; playBtn.setAttribute('aria-label','Video abspielen');
      const wrap=$('.video-wrap',card); wrap.appendChild(playBtn);
    }
    addVideoControls(card);
  });
} 

const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%';
function scramble(el){
 if(reduce||el.dataset.done)return; el.dataset.done='1';
 const end=el.textContent; let f=0;
 const t=setInterval(()=>{
   el.textContent=[...end].map((c,i)=>c===' '? ' ':i<f/1.7?c:chars[Math.random()*chars.length|0]).join('');
   if(++f>end.length*1.7){el.textContent=end;clearInterval(t)}
 },24);
}
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(e.isIntersecting){e.target.classList.add('in'); const h=$('.scramble',e.target); if(h)scramble(h); io.unobserve(e.target)}
}),{threshold:.18});
$$('.reveal-section').forEach(x=>io.observe(x));

const spyLinks=$$('#menu a');
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)spyLinks.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('.sport').forEach(s=>spy.observe(s));

$$('.tilt').forEach(card=>{
 const img=$('img',card);
 card.addEventListener('pointermove',e=>{
   if(reduce)return;
   const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   img.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.06)`;
 });
 card.addEventListener('pointerleave',()=>img.style.transform='');
});

$$('.word').forEach(w=>w.addEventListener('click',()=>w.classList.toggle('flip')));

const glow=$('.cursor-glow');
addEventListener('pointermove',e=>{if(!reduce){glow.style.transform=`translate(${e.clientX-80}px,${e.clientY-80}px)`}});
$$('.magnetic').forEach(btn=>{
 btn.addEventListener('pointermove',e=>{
   if(reduce)return; const r=btn.getBoundingClientRect();
   btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.12}px,${(e.clientY-r.top-r.height/2)*.12}px)`;
 });
 btn.addEventListener('pointerleave',()=>btn.style.transform='');
});

const canvas=$('#fx'), ctx=canvas.getContext('2d'); let W=0,H=0,pts=[];
function resize(){
 W=canvas.width=innerWidth*devicePixelRatio; H=canvas.height=innerHeight*devicePixelRatio;
 canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';
 pts=Array.from({length:Math.min(110,Math.floor(innerWidth/12))},()=>({x:Math.random()*W,y:Math.random()*H,v:.25+Math.random()*1.3,r:.5+Math.random()*2}));
}
function animate(){
 ctx.clearRect(0,0,W,H); if(!reduce)for(const p of pts){p.x+=p.v*devicePixelRatio;if(p.x>W+30)p.x=-30;ctx.beginPath();ctx.arc(p.x,p.y,p.r*devicePixelRatio,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,.28)';ctx.fill()} requestAnimationFrame(animate);
}
resize();addEventListener('resize',resize);animate();
})();