const education = [
  { period: '2024 – 2026', degree: '碩士', school: '成功大學 電機工程研究所（資工組）' },
  { period: '2020 – 2024', degree: '學士', school: '成功大學 電機工程學系' },
];

const interests = ['Machine Learning', 'Deep Learning', 'Urban Data Science', 'Web Development'];

const skills = [
  { label: '程式語言', items: ['Python', 'JavaScript', 'Java', 'C'] },
  { label: '框架 / 工具', items: ['React', 'Flask', 'Node.js', 'Vue', 'PyTorch', 'Keras', 'Docker', 'Linux'] },
  { label: '資料處理', items: ['SQL', 'MySQL', 'Power BI'] },
];

function Home() {
  return (
    <div className="home-layout">

      {/* ── Left column ── */}
      <div className="home-left">
        <div className="home-badge">成功大學 · 電機工程研究所</div>

        <div className="home-hero">
          <h1 className="home-name">曾柏諺</h1>
          <p className="home-en">Bo-Yan Zeng</p>
        </div>

        <p className="home-field">Machine Learning · Urban Science</p>

        <p className="home-intro">
          熱衷以科學的視角理解城市與人，以AI與資料科學去處理現實生活的問題。目前就讀成功大學電機工程研究所，
          研究領域橫跨機器學習與都市科學，致力以解決真實場域中的複雜問題。
          曾與半導體大廠華邦電子公司、台南市政府及教育單位合作，並在 ICKII 2025、CUPUM 2025
          等國際研討會發表論文，同時具備從模型訓練到前後端部署的完整工程實作能力。
        </p>

        <div className="home-edu">
          {education.map((e) => (
            <div key={e.period} className="home-edu-item">
              <span className="edu-period">{e.period}</span>
              <div>
                <span className="edu-degree">{e.degree}</span>
                <span className="edu-school">{e.school}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="home-contact">
          <a href="mailto:311louie@gmail.com" className="contact-chip">✉ 311louie@gmail.com</a>
          <a href="tel:0958868004" className="contact-chip">☎ 0958868004</a>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="home-divider" />

      {/* ── Right column ── */}
      <div className="home-right">

        <div className="home-section">
          <div className="home-section-label">研究興趣</div>
          <div className="tag-list">
            {interests.map((i) => <span key={i} className="tag">{i}</span>)}
          </div>
        </div>

        <div className="home-section">
          <div className="home-section-label">技能</div>
          <div className="skills-compact">
            {skills.map((g) => (
              <div key={g.label} className="skill-row">
                <span className="skill-row-label">{g.label}</span>
                <div className="tag-list">
                  {g.items.map((item) => <span key={item} className="tag tag-sm">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="home-section">
          <div className="home-section-label">經驗</div>
          <div className="exp-list">

            <div className="exp-item">
              <div className="exp-item-header">
                <span className="exp-item-title">成功大學 UCLab 研究助理</span>
                <span className="exp-item-date">2024 – 現在</span>
              </div>
              <p className="exp-item-desc">協助實驗室進行深度學習模型研究與 Web 系統開發，參與產學合作專案，參與並指導學弟妹參與 Hackathon 競賽。</p>
            </div>

            <div className="exp-item">
              <div className="exp-item-header">
                <span className="exp-item-title">Winbond 華邦電子 產學合作</span>
                <span className="exp-item-date">2024 – 現在</span>
              </div>
              <p className="exp-item-desc">與半導體大廠合作，利用機器學習進行晶圓品質預測與多種目標設定，探討模型對於檢測數值的幫助，也持續優化模型效能。</p>
            </div>

            <div className="exp-item">
              <div className="exp-item-header">
                <span className="exp-item-title">台南市政府合作專案</span>
                <span className="exp-item-date">2024</span>
              </div>
              <p className="exp-item-desc">與台南市智慧發展中心合作開發道路風險預測系統，與教育局創建並維護登革熱疫情預測系統。</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
