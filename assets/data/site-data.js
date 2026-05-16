/*
  Anmira Star content data
  更新方式：
  1. 影片放到 assets/videos/，縮圖放到 assets/thumbs/
  2. 照片放到 assets/images/awards/
  3. 若使用相同檔名，直接覆蓋檔案即可更新網站內容。
  4. 若要新增卡片，複製陣列中的一筆資料並修改 title / src / thumb / tags。
*/
window.ANMIRA_DATA = {
  zh: {
    visionDemos: [
      {
        title: '實拍製作 Demo 01',
        kicker: 'LIVE ACTION 01',
        description: '這裡可放實拍作品說明，例如品牌形象片、人物訪談、商品拍攝或活動紀錄。',
        src: 'assets/videos/vision-demo-01.mp4',
        thumb: 'assets/thumbs/vision-demo-01.jpg',
        type: 'video',
        tags: ['實際拍攝', '品牌影片', '商品影像']
      },
      {
        title: 'AI 生成 Demo 02',
        kicker: 'AI GENERATED 02',
        description: '這裡可放 AI 生成作品說明，例如 AI MV、視覺短片、概念片或風格測試。',
        src: 'assets/videos/vision-demo-02.mp4',
        thumb: 'assets/thumbs/vision-demo-02.jpg',
        type: 'video',
        tags: ['AI 生成', '風格展示', '頁內播放']
      },
      {
        title: 'AI × 實拍混合 Demo 03',
        kicker: 'HYBRID 03',
        description: '這裡可放混合式作品說明，例如實拍素材結合 AI 場景、特效、角色或世界觀。',
        src: 'assets/videos/vision-demo-03.mp4',
        thumb: 'assets/thumbs/vision-demo-03.jpg',
        type: 'video',
        tags: ['主推方案', '實拍合成', 'AI 特效']
      },
      {
        title: '品牌廣告 Demo 04',
        kicker: 'COMMERCIAL 04',
        description: '這裡可放品牌廣告或商業短片說明，適合展示客戶案例、產品亮點與行銷目的。',
        src: 'assets/videos/vision-demo-04.mp4',
        thumb: 'assets/thumbs/vision-demo-04.jpg',
        type: 'video',
        tags: ['商業廣告', '品牌敘事', '行銷影片']
      },
      {
        title: '社群短影音 Demo 05',
        kicker: 'SOCIAL 05',
        description: '這裡可放社群短影音作品說明，例如 Reels、Shorts、TikTok 或活動宣傳短片。',
        src: 'assets/videos/vision-demo-05.mp4',
        thumb: 'assets/thumbs/vision-demo-05.jpg',
        type: 'video',
        tags: ['短影音', '社群內容', '快速製作']
      },
      {
        title: '音樂影像 Demo 06',
        kicker: 'MUSIC VIDEO 06',
        description: '這裡可放 MV、歌手形象片或 AI 視覺音樂作品說明，呈現風格、情緒與角色設定。',
        src: 'assets/videos/vision-demo-06.mp4',
        thumb: 'assets/thumbs/vision-demo-06.jpg',
        type: 'video',
        tags: ['MV', '角色視覺', '音樂影像']
      }
    ],
    licensingWorks: [
      {
        title: '獲獎攝影作品',
        kicker: 'AWARD WINNING',
        description: '代表性得獎照片、獎項名稱、年份與作品故事，可作為商業授權與策展合作的品質背書。',
        src: 'assets/images/awards/award-winning-work-01.jpg',
        thumb: 'assets/images/awards/award-winning-work-01.jpg',
        type: 'image',
        tags: ['得獎作品', '攝影獎項', '授權洽詢']
      },
      {
        title: '主題影像系列',
        kicker: 'FEATURED SERIES',
        description: '可依城市、人文、歷史、人物、建築等主題整理成系列，方便品牌與媒體快速挑選。',
        src: 'assets/images/awards/featured-series-01.jpg',
        thumb: 'assets/images/awards/featured-series-01.jpg',
        type: 'image',
        tags: ['主題系列', '可授權', '品牌合作']
      },
      {
        title: '策展合作作品',
        kicker: 'CURATED WORKS',
        description: '適合實體展覽、數位展覽與品牌空間展示的作品組合。',
        src: 'assets/images/awards/curated-work-01.jpg',
        thumb: 'assets/images/awards/curated-work-01.jpg',
        type: 'image',
        tags: ['策展合作', '空間展示', '展覽授權']
      }
    ],
    emptyVideoMessage: '影片檔尚未放入。請將影片放到對應路徑，或在 assets/data/site-data.js 修改 src。',
    emptyImageMessage: '圖片尚未放入。請將作品圖放到對應路徑，或在 assets/data/site-data.js 修改 src。'
  },
  en: {
    visionDemos: [
      {
        title: 'Live Action Demo 01',
        kicker: 'LIVE ACTION 01',
        description: 'Use this field for live-action work such as brand films, interviews, product shoots, or event recaps.',
        src: 'assets/videos/vision-demo-01.mp4',
        thumb: 'assets/thumbs/vision-demo-01.jpg',
        type: 'video',
        tags: ['Live Action', 'Brand Film', 'Product Video']
      },
      {
        title: 'AI Generated Demo 02',
        kicker: 'AI GENERATED 02',
        description: 'Use this field for AI-generated work such as AI music videos, visual shorts, concept films, or style tests.',
        src: 'assets/videos/vision-demo-02.mp4',
        thumb: 'assets/thumbs/vision-demo-02.jpg',
        type: 'video',
        tags: ['AI Generated', 'Style Test', 'In-page Player']
      },
      {
        title: 'AI × Live Action Hybrid Demo 03',
        kicker: 'HYBRID 03',
        description: 'Use this field for hybrid production that combines live footage with AI scenes, effects, characters, or worldbuilding.',
        src: 'assets/videos/vision-demo-03.mp4',
        thumb: 'assets/thumbs/vision-demo-03.jpg',
        type: 'video',
        tags: ['Signature Offer', 'Hybrid Production', 'AI Effects']
      },
      {
        title: 'Commercial Demo 04',
        kicker: 'COMMERCIAL 04',
        description: 'Use this field for commercial work, client cases, product highlights, and campaign-driven videos.',
        src: 'assets/videos/vision-demo-04.mp4',
        thumb: 'assets/thumbs/vision-demo-04.jpg',
        type: 'video',
        tags: ['Commercial', 'Brand Story', 'Marketing Video']
      },
      {
        title: 'Social Video Demo 05',
        kicker: 'SOCIAL 05',
        description: 'Use this field for social videos such as Reels, Shorts, TikTok content, or event promo clips.',
        src: 'assets/videos/vision-demo-05.mp4',
        thumb: 'assets/thumbs/vision-demo-05.jpg',
        type: 'video',
        tags: ['Short Video', 'Social Content', 'Fast Production']
      },
      {
        title: 'Music Video Demo 06',
        kicker: 'MUSIC VIDEO 06',
        description: 'Use this field for music videos, artist visuals, or AI-enhanced music storytelling.',
        src: 'assets/videos/vision-demo-06.mp4',
        thumb: 'assets/thumbs/vision-demo-06.jpg',
        type: 'video',
        tags: ['Music Video', 'Character Visual', 'Music Film']
      }
    ],
    licensingWorks: [
      {
        title: 'Award-winning Photography',
        kicker: 'AWARD WINNING',
        description: 'Representative award-winning works, award information, year, and story for licensing and curatorial credibility.',
        src: 'assets/images/awards/award-winning-work-01.jpg',
        thumb: 'assets/images/awards/award-winning-work-01.jpg',
        type: 'image',
        tags: ['Awarded Work', 'Photography Awards', 'Licensing']
      },
      {
        title: 'Featured Visual Series',
        kicker: 'FEATURED SERIES',
        description: 'Curated by themes such as city, culture, history, people, and architecture for brands and media partners.',
        src: 'assets/images/awards/featured-series-01.jpg',
        thumb: 'assets/images/awards/featured-series-01.jpg',
        type: 'image',
        tags: ['Series', 'Licensable', 'Brand Collaboration']
      },
      {
        title: 'Curated Works',
        kicker: 'CURATED WORKS',
        description: 'Image sets suitable for physical exhibitions, digital exhibitions, and branded spaces.',
        src: 'assets/images/awards/curated-work-01.jpg',
        thumb: 'assets/images/awards/curated-work-01.jpg',
        type: 'image',
        tags: ['Curatorial', 'Spatial Display', 'Exhibition']
      }
    ],
    emptyVideoMessage: 'Video file not found yet. Place the file at the listed path or update src in assets/data/site-data.js.',
    emptyImageMessage: 'Image file not found yet. Place the file at the listed path or update src in assets/data/site-data.js.'
  }
};
