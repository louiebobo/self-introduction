# 個人網站履歷（Markdown 結構規劃）

> 本文件將履歷轉換為可直接用於網頁呈現的 Markdown 架構，並清楚定義每個分頁應包含的內容。

---

# 🏠 Home（主畫面）

## 簡介
- 姓名：曾柏諺（Bo-Yan Zeng）
- Email：311louie@gmail.com
- 電話：0958868004
- 身份：成功大學電機工程研究所（資工組）碩士生
- 研究領域：Machine Learning / Urban Science

## 個人摘要
- 對機器學習與資料科學高度熱忱
- 具備 AI 模型開發與 Web 系統實作經驗
- 曾發表論文並參與產學合作專案

## 專案列表（可點擊）
- Die Quality Prediction（→ /projects/die-quality）
- Traffic Prediction（→ /projects/traffic）
- Flood Evacuation System（→ /projects/flood）
- Dengue Forecasting（→ /projects/dengue）
- Road Risk Analysis（→ /projects/road-risk）

---

# 👤 About（關於我）

## 背景
- 成功大學 電機工程學系（學士 2020–2024）
- 成功大學 電機工程研究所（碩士 2024–2026）

## 研究與興趣
- Machine Learning
- Deep Learning
- Urban Data Science
- Web Development

## 技能
### 程式語言
- Python / JavaScript / Java / C

### 框架與工具
- React / Flask / Node.js / Vue
- PyTorch / Keras
- Docker / Linux

### 資料處理
- SQL / MySQL
- Power BI

---

# 📂 Projects（專案總覽）

> 此頁列出所有專案摘要，每個專案可點擊進入詳細頁

## 1. Die Quality Prediction
- 類型：產學合作（Winbond）
- 技術：Machine Learning / Python
- 功能：晶圓品質預測
- 👉 詳細：/projects/die-quality

## 2. Traffic Prediction
- 類型：研究論文（ICKII 2025）
- 技術：PyTorch / Attention / Graph / GRU
- 功能：交通流量預測
- 👉 詳細：/projects/traffic

## 3. Flood Evacuation System
- 類型：論文（CUPUM 2025）＋ Hackathon
- 技術：React / Flask
- 功能：淹水逃生路徑推薦
- 👉 詳細：/projects/flood

## 4. Dengue Forecasting
- 類型：論文（CUPUM 2025）
- 技術：Deep Learning / Web Visualization
- 功能：登革熱預測與視覺化
- 👉 詳細：/projects/dengue

## 5. Road Risk Analysis
- 類型：政府合作
- 技術：Deep Learning / React / Flask
- 功能：道路風險預測
- 👉 詳細：/projects/road-risk

---

# 📄 Project Detail Page Template（專案詳細頁模板）

> 每個專案頁面統一格式（可複用）

## 專案名稱

### 簡介
- 專案背景
- 解決問題

### 技術
- 使用技術（ML / DL / Web）

### 我的貢獻
- 資料處理
- 模型設計
- 系統開發

### 成果
- 論文 / 系統 / Demo

### Demo / GitHub（可選）
- Demo 連結
- GitHub Repo

---

# 🧪 Experience（經驗）

## UCLab Assistant
- 時間：2024 – 2025

### 工作內容
- Web 開發
- 深度學習模型研究
- 產學合作專案

### 貢獻
- Hackathon 指導
- Winbond 專案持續開發
- 登革熱系統維護（與教育局合作）

---

# 📬 Contact（聯絡方式）

- Email：311louie@gmail.com
- Phone：0958868004
- GitHub：（可補）
- LinkedIn：（可補）

---

# 🌐 網頁架構建議（Routing）

- / → Home
- /about → About
- /projects → Projects
- /projects/:id → Project Detail
- /experience → Experience
- /contact → Contact

---

# 🎯 補充建議（做網頁時）

## UI 建議
- 首頁用卡片展示專案
- 每個專案用 Tag（ML / Web / DL）
- 加入時間軸（Experience）

## 技術建議
- Frontend：React + Tailwind
- Backend（可選）：Flask
- 部署：Vercel / Netlify
