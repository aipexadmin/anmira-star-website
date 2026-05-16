Anmira Star 網站作品系統更新方式

一、DEMO 影片更新（幻境成像 / AI Vision）

目前三個影片卡片已固定讀取以下檔名：

1. 實拍製作 Demo
   assets/videos/vision-live-action-demo.mp4
   assets/thumbs/vision-live-action-demo.jpg

2. AI 生成 Demo
   assets/videos/vision-ai-generated-demo.mp4
   assets/thumbs/vision-ai-generated-demo.jpg

3. AI × 實拍混合 Demo
   assets/videos/vision-hybrid-demo.mp4
   assets/thumbs/vision-hybrid-demo.jpg

未來只要把新影片與縮圖用同樣檔名覆蓋，就會自動更新網站，不需要改 HTML。
影片會在頁面內彈窗播放，不會跳到外部頁面。

如果要新增第 4 支、第 5 支影片：
請開啟 assets/data/site-data.js，複製 visionDemos 裡的一筆資料，修改 title、description、src、thumb、tags。


二、得獎作品 / 精選照片更新（典藏授權 / Licensing）

目前三個作品卡片已固定讀取以下檔名：

1. 獲獎攝影作品
   assets/images/awards/award-winning-work-01.jpg

2. 主題影像系列
   assets/images/awards/featured-series-01.jpg

3. 策展合作作品
   assets/images/awards/curated-work-01.jpg

未來只要把圖片用同樣檔名覆蓋，就會自動更新網站，不需要改 HTML。
圖片會在頁面內彈窗放大，不會跳到外部頁面。

如果要新增更多得獎作品：
請開啟 assets/data/site-data.js，複製 licensingWorks 裡的一筆資料，修改 title、description、src、thumb、tags。


三、LOGO

正式 LOGO 放在：
assets/logo/logo.png

目前已套用在：
1. 全站左上角導覽列
2. 首頁背景大型淡化 Logo 動畫
3. 首頁開場 Logo 動畫
4. favicon 網站圖示

若未來要換 Logo，只要覆蓋 assets/logo/logo.png 即可。


四、注意

若在電腦直接雙擊 HTML 預覽，大部分功能可正常顯示。
正式上線後建議放在主機或網域空間，影片播放與資料讀取會最穩定。


【幻境成像作品展示：6張卡片管理方式】
目前 vision.html 的「作品展示」會自動讀取 assets/data/site-data.js 裡的 visionDemos。
你可以修改每一筆的：
- title：卡片標題
- kicker：縮圖左下角小標
- description：卡片下方說明文字
- tags：底下標籤文字
- src：點擊後頁內播放的影片檔
- thumb：卡片縮圖

預設影片檔名：
assets/videos/vision-demo-01.mp4 到 vision-demo-06.mp4

預設縮圖檔名：
assets/thumbs/vision-demo-01.jpg 到 vision-demo-06.jpg

如果你只想替換作品，不改文字：直接用同名檔案覆蓋即可。
如果你想連底下文字一起改：打開 assets/data/site-data.js 修改對應卡片的 title / description / tags。
