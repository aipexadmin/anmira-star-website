(function(){
  function el(tag, cls){ const node = document.createElement(tag); if(cls) node.className = cls; return node; }
  function getLang(){ return document.documentElement.lang && document.documentElement.lang.startsWith('en') ? 'en' : 'zh'; }
  function dataSet(){ return (window.ANMIRA_DATA && window.ANMIRA_DATA[getLang()]) || { visionDemos: [], licensingWorks: [] }; }
  function renderTags(tags, className){ return (tags || []).map(t => `<span>${t}</span>`).join(''); }
  function fallbackClass(item){
    const key = (item.kicker || item.title || '').toLowerCase();
    if(key.includes('hybrid')) return 'thumb-hybrid';
    if(key.includes('ai')) return 'thumb-ai';
    if(key.includes('award')) return 'thumb-award';
    if(key.includes('curated')) return 'thumb-curated';
    return 'thumb-live';
  }
  function buildCard(item, mode){
    const card = el('button', mode === 'vision' ? 'demo-card dynamic-media-card' : 'card media-card dynamic-media-card');
    card.type = 'button';
    card.dataset.title = item.title || '';
    card.dataset.src = item.src || '';
    card.dataset.type = item.type || (mode === 'vision' ? 'video' : 'image');
    const thumbClass = mode === 'vision' ? 'demo-thumb' : 'media-thumb';
    const metaClass = mode === 'vision' ? 'demo-meta' : 'tags';
    const kickerClass = mode === 'vision' ? 'demo-kicker' : 'media-kicker';
    const thumbStyle = item.thumb ? ` style="background-image:linear-gradient(180deg,rgba(10,10,18,.1),rgba(10,10,18,.65)),url('${item.thumb}')"` : '';
    card.innerHTML = `
      <div class="${thumbClass} ${fallbackClass(item)}"${thumbStyle}><span class="${kickerClass}">${item.kicker || ''}</span></div>
      <h3>${item.title || ''}</h3>
      <p>${item.description || ''}</p>
      <div class="${metaClass}">${renderTags(item.tags, metaClass)}</div>
    `;
    card.addEventListener('click', function(){ openAnmiraMedia(item); });
    return card;
  }
  function renderGallery(id, items, mode){
    const container = document.getElementById(id);
    if(!container) return;
    container.innerHTML = '';
    (items || []).forEach(item => container.appendChild(buildCard(item, mode)));
  }
  window.openAnmiraMedia = function(item){
    const modal = document.getElementById('anmiraMediaModal') || document.getElementById('videoModal') || document.getElementById('mediaModal');
    const stage = document.getElementById('anmiraMediaStage') || document.getElementById('videoStage') || document.getElementById('mediaStage');
    const title = document.getElementById('anmiraMediaTitle') || document.getElementById('videoTitle') || document.getElementById('mediaTitle');
    const data = dataSet();
    if(!modal || !stage) return;
    const type = item.type || 'video';
    const src = item.src || '';
    title.textContent = item.title || '作品展示';
    if(type === 'video'){
      stage.innerHTML = src
        ? `<video src="${src}" controls autoplay playsinline onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'media-placeholder',textContent:'${(data.emptyVideoMessage || 'Video file not found yet.').replace(/'/g,"\\'")}'}))"></video><div class="media-file-path">${src}</div>`
        : `<div class="media-placeholder">${data.emptyVideoMessage || 'Video file not found yet.'}</div>`;
    } else {
      stage.innerHTML = src
        ? `<img src="${src}" alt="${item.title || ''}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'media-placeholder',textContent:'${(data.emptyImageMessage || 'Image file not found yet.').replace(/'/g,"\\'")}' }))"><div class="media-file-path">${src}</div>`
        : `<div class="media-placeholder">${data.emptyImageMessage || 'Image file not found yet.'}</div>`;
    }
    modal.classList.add('open');
  };
  window.closeAnmiraMedia = function(){
    const modal = document.getElementById('anmiraMediaModal') || document.getElementById('videoModal') || document.getElementById('mediaModal');
    const stage = document.getElementById('anmiraMediaStage') || document.getElementById('videoStage') || document.getElementById('mediaStage');
    if(stage) stage.innerHTML = '';
    if(modal) modal.classList.remove('open');
  };
  document.addEventListener('DOMContentLoaded', function(){
    const data = dataSet();
    renderGallery('visionGallery', data.visionDemos, 'vision');
    renderGallery('licensingGallery', data.licensingWorks, 'licensing');
  });
})();
