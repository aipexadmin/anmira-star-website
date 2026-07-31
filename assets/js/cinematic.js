(() => {
  const FORCE_INTRO = false;
  const INTRO_SESSION_KEY = 'anmiraIntroPlayed';
  const body = document.body;
  const lang = body.dataset.lang || (document.documentElement.lang.startsWith('en') ? 'en' : 'zh');
  const page = body.dataset.page || 'home';
  const en = lang === 'en';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let introPlayed = false;
  try { introPlayed = sessionStorage.getItem(INTRO_SESSION_KEY) === 'true'; } catch (_) {}
  const shouldPlayIntro = page === 'home' && !reducedMotion && (FORCE_INTRO || !introPlayed);
  body.classList.add(shouldPlayIntro ? 'intro-running' : 'intro-complete');
  if (shouldPlayIntro && !FORCE_INTRO) {
    try { sessionStorage.setItem(INTRO_SESSION_KEY, 'true'); } catch (_) {}
  }
  const routes = en
    ? {home:'en.html',vision:'en-vision.html',stars:'en-stars.html',licensing:'en-licensing.html',contact:'en-contact.html'}
    : {home:'index.html',vision:'vision.html',stars:'stars.html',licensing:'licensing.html',contact:'contact.html'};
  const t = {
    zh:{nav:['首頁','幻境成像','明日之星','典藏授權','聯絡'],brand:'星曜幻境',explore:'進入幻境',hero:'創造，超越想像',heroSub:'以人工智慧、影像與故事，孕育不曾存在的角色與世界。',storyLabel:'品牌故事',story:'我們不只創造影像。<br>我們為想像賦予<strong>靈魂</strong>，<br>讓故事成為可被記住的宇宙。',aside:'星曜，是我們追逐的光。幻境，是我們創造的世界。從 AI 影音、真人製作、角色經營到影像典藏，每一次創作，都是一個新世界的起點。',universe:'一個宇宙，無限可能',universeSub:'創意不是服務清單，而是一組彼此引力相連的世界。',chars:'群星，正在誕生',charsSub:'真人、寵物與虛擬生命，都能成為被理解、被喜愛、被記住的角色。',vision:'從一束光，走向一個宇宙',contact:'一起創造<br><em>尚未存在的世界</em>',email:'開啟對話',footer:'© 2026 星曜幻境股份有限公司'},
    en:{nav:['Home','Vision','Rising Stars','Licensing','Contact'],brand:'ANMIRA STAR',explore:'Explore',hero:'Creating Beyond Imagination',heroSub:'Where artificial intelligence, cinematic craft, and storytelling give birth to worlds that never existed.',storyLabel:'Our Story',story:'We do more than create images.<br>We give imagination a <strong>soul</strong>,<br>and build worlds worth remembering.',aside:'Anmira is where anima meets miracle. From AI cinema and live production to character worlds and visual archives, every creation begins as a new universe.',universe:'One universe. Infinite possibility.',universeSub:'Not a list of services, but connected worlds held together by imagination.',chars:'Stars are being born',charsSub:'Human, companion, and virtual talent—each shaped into a character audiences can understand, love, and remember.',vision:'From a single light to an entire universe',contact:'Let’s create a world<br><em>that does not exist yet</em>',email:'Begin a conversation',footer:'© 2026 Anmira Star Co., Ltd.'}
  }[lang];
  const alternate = en ? page === 'home' ? 'index.html' : `${page}.html` : page === 'home' ? 'en.html' : `en-${page}.html`;
  const nav = `<nav class="nav" aria-label="${en?'Primary':'主要導覽'}"><a class="brand" href="${routes.home}"><img src="assets/brand/logo-master.png" alt="ANMIRA STAR"><span>${t.brand}</span></a><div class="nav-links" id="navLinks">${Object.keys(routes).map((k,i)=>`<a href="${routes[k]}" ${page===k?'aria-current="page"':''}>${t.nav[i]}</a>`).join('')}<a class="lang" href="${alternate}">${en?'中':'EN'}</a></div><button class="menu" aria-label="${en?'Open menu':'開啟選單'}" aria-expanded="false" aria-controls="navLinks">☰</button></nav>`;
  const footer = `<footer class="footer"><span>${t.footer}</span><span>TAIPEI · TAIWAN</span></footer>`;
  const planets = [['AI','INTELLIGENCE'],[en?'Characters':'角色','CHARACTERS'],[en?'Licensing':'授權','LICENSING'],[en?'Future':'未來','FUTURE']];
  const cards = [
    ['assets/images/cinematic/lyra.webp','LYRA',en?'Human Muse · Narrative Talent':'真人繆思 · 敘事藝人'],
    ['assets/images/cinematic/orion.webp','ORION',en?'Companion Icon · Story Character':'寵物明星 · 故事角色'],
    ['assets/images/cinematic/aether.webp','AETHER',en?'Virtual Being · Future Voice':'虛擬生命 · 未來之聲']
  ];
  const home = `<main id="main" class="page">
    <section class="hero"><div class="hero-core"><div class="hero-logo-wrap"><img class="hero-logo" src="assets/brand/logo-master.png" alt="ANMIRA STAR 星曜幻境"></div><p class="eyebrow">AI · CREATIVE STUDIO · IP UNIVERSE</p><h1 class="display">${t.hero}</h1><p class="hero-sub">${t.heroSub}</p><a class="cta" href="#story">${t.explore}<span>↘</span></a></div><div class="scroll-cue">SCROLL TO ENTER</div></section>
    <section class="section" id="story"><div class="section-inner story reveal"><div><p class="eyebrow">${t.storyLabel}</p><p class="story-copy">${t.story}</p></div><p class="story-aside">${t.aside}</p></div></section>
    <section class="section universe" id="universe"><div class="section-inner"><header class="section-head reveal"><p class="eyebrow">THE UNIVERSE</p><h2 class="display">${t.universe}</h2><p class="lede">${t.universeSub}</p></header><div class="system reveal"><div class="orbit"></div><div class="orbit"></div><div class="core">ANMIRA<br>STAR</div>${planets.map((p,i)=>`<a class="planet p${i+1}" href="${[routes.vision,routes.stars,routes.licensing,routes.vision][i]}"><b>${p[0]}</b><small>${p[1]}</small></a>`).join('')}</div></div></section>
    <section class="section"><div class="section-inner"><header class="section-head reveal"><p class="eyebrow">FEATURED CHARACTERS</p><h2 class="display">${t.chars}</h2><p class="lede">${t.charsSub}</p></header><div class="characters">${cards.map(c=>`<article class="character reveal"><img src="${c[0]}" alt="${c[1]}" loading="lazy" decoding="async"><div class="character-info"><h3>${c[1]}</h3><p>${c[2]}</p></div></article>`).join('')}</div></div></section>
    <section class="section"><div class="section-inner"><header class="section-head reveal"><p class="eyebrow">VISION · 2026—∞</p><h2 class="display">${t.vision}</h2></header><div class="timeline reveal">${[['2026',en?'Awaken':'啟程'],['2027',en?'Connect':'連結'],['2028',en?'Expand':'擴張'],['∞',en?'Beyond':'超越']].map((m,i)=>`<div class="moment"><span class="year">${m[0]}</span><h3>${m[1]}</h3><p>${en?['AI and human craft converge.','Characters become living IP.','Stories cross every medium.','Imagination has no edge.'][i]:['AI 與人的創造力交會。','角色成為有生命的 IP。','故事跨越每一種媒介。','想像，沒有邊界。'][i]}</p></div>`).join('')}</div></div></section>
    <section class="section contact" id="contact"><div class="reveal"><p class="eyebrow">CONTACT</p><h2 class="display">${t.contact}</h2><a class="mail" href="mailto:contact@anmirastar.com">${t.email} ↗</a></div></section></main>`;
  const pages = {
    vision:{label:'AI × LIVE ACTION',title:en?'Imagination, made visible':'讓想像，成為可見的真實',lead:en?'Pure AI, live action, or a seamless hybrid. We shape the right production language for every story.':'純 AI、真人實拍，或兩者無縫融合。我們為每一個故事，設計最適合的影像語言。',items:en?[['AI Cinema','Concept films, music visuals, and experimental narratives built with generative craft.'],['Live Production','Authentic people, products, and places captured with cinematic precision.'],['Hybrid Worlds','Real footage extended with impossible environments, characters, and visual effects.'],['Commercial Films','Brand stories engineered for emotion, clarity, and memorable impact.'],['Virtual Talent','Characters designed to perform, evolve, and connect across platforms.'],['Social Motion','Fast, distinctive short-form systems without sacrificing visual identity.']]:[['AI 影像','以生成技術創作概念影片、MV 視覺與實驗敘事。'],['真人製作','以電影質感捕捉真實人物、產品與場景。'],['混合世界','將實拍影像延伸至不可能存在的環境、角色與特效。'],['商業影像','兼具情感、訊息與記憶點的品牌敘事。'],['虛擬藝人','打造能演出、成長並跨平台連結的角色。'],['社群動態','快速建立有辨識度、不中斷品牌質感的短影音系統。']]},
    stars:{label:'RISING STARS',title:en?'Every being holds a story':'每一種生命，都值得一個舞台',lead:en?'Human talent, beloved companions, and virtual characters become lasting icons through design, narrative, and meaningful connection.':'真人、寵物與虛擬角色，透過設計、敘事與真實連結，成為能被長久記住的新世代明星。',items:en?[['Character Origin','Identity, personality, worldview, and visual codes.'],['Content Universe','Cinematic films, short-form stories, and social narratives.'],['Audience Bond','Consistent voice and emotional continuity across every touchpoint.']]:[['角色起源','定義身份、個性、世界觀與視覺符號。'],['內容宇宙','以電影、短篇與社群敘事延伸角色生命。'],['觀眾連結','在每個接觸點維持一致語氣與情感連續性。']]},
    licensing:{label:'VISUAL ARCHIVE',title:en?'Images with a life beyond the frame':'讓影像，在畫面之外繼續發生',lead:en?'A curated archive of film, prints, and high-resolution works—ready for licensing, publishing, exhibitions, and brand collaboration.':'以正片、負片、實體照片與高解析作品構成的精選典藏，為商業授權、出版、展覽與品牌合作而生。',items:en?[['Commercial Licensing','Single images, series, or thematic collections for global applications.'],['Brand Collaboration','Archive-led campaigns, co-branded stories, and spatial experiences.'],['Curatorial Projects','Physical and digital exhibitions with meaningful narrative structure.'],['Preservation','Digitization and thoughtful restoration for future audiences.']]:[['商業授權','提供單張、系列或主題典藏的多元使用方式。'],['品牌合作','以典藏發展企劃、聯名故事與空間體驗。'],['策展計畫','為實體與數位展覽建立有意義的敘事脈絡。'],['典藏保存','數位化與細緻修復，讓作品走向下一個世代。']]},
    contact:{label:'CONTACT',title:en?'A new universe starts with a conversation':'一個新的宇宙，從一場對話開始',lead:en?'For productions, character development, licensing, and meaningful collaborations.':'無論影像製作、角色發展、授權或跨界合作，我們期待聽見你的想法。',items:[]}
  };
  function interior(data){return `<main id="main" class="page"><section class="page-hero"><div class="reveal"><p class="eyebrow">${data.label}</p><h1 class="display">${data.title}</h1><p class="lede">${data.lead}</p></div></section><section class="page-content">${data.items.length?`<div class="grid">${data.items.map((x,i)=>`<article class="glass reveal"><span class="index">0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div>`:`<div class="contact reveal"><div><p class="eyebrow">ANMIRA STAR · TAIPEI</p><a class="mail" href="mailto:contact@anmirastar.com">contact@anmirastar.com ↗</a><p class="hero-sub">${en?'We usually reply within one business day.':'我們通常會在一個工作日內回覆。'}</p></div></div>`}</section></main>`}
  body.innerHTML = `<a class="skip" href="#main">${en?'Skip to content':'跳至主要內容'}</a><canvas id="stars" aria-hidden="true"></canvas>${nav}${page==='home'?home:interior(pages[page])}${footer}`;
  if (shouldPlayIntro) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      body.classList.add('intro-active');
      setTimeout(() => {
        body.classList.remove('intro-running', 'intro-active');
        body.classList.add('intro-complete');
      }, 2200);
    }));
  }
  const navEl=document.querySelector('.nav'), menu=document.querySelector('.menu'), links=document.querySelector('.nav-links');
  function updateNav(){const y=scrollY;navEl.classList.toggle('scrolled',y>32);navEl.classList.toggle('solid',y>Math.min(520,innerHeight*.65))}
  addEventListener('scroll',updateNav,{passive:true});updateNav();
  menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'×':'☰'});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
  const c=document.querySelector('#stars'),ctx=c.getContext('2d'),reduced=reducedMotion;let stars=[];
  function resize(){const d=Math.min(devicePixelRatio,2);c.width=innerWidth*d;c.height=innerHeight*d;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';ctx.setTransform(d,0,0,d,0,0);stars=Array.from({length:Math.min(70,innerWidth/18)},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*.65+.1,a:Math.random()*.24+.08,v:Math.random()*.018+.006}))}
  function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const s of stars){ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,7);ctx.fillStyle=`rgba(216,222,234,${s.a})`;ctx.fill();if(!reduced){s.y+=s.v;if(s.y>innerHeight){s.y=0;s.x=Math.random()*innerWidth}}}if(!reduced)requestAnimationFrame(draw)}
  addEventListener('resize',resize);resize();draw();
})();
