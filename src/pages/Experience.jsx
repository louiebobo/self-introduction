function Experience() {
  return (
    <div className="page">
      <h1 className="page-title">經驗</h1>

      <section className="section">
        <div className="exp-card">
          <div className="exp-header">
            <h2>UCLab Assistant</h2>
            <span className="exp-date">2024 – 2025</span>
          </div>

          <div className="exp-body">
            <div className="exp-block">
              <h3>工作內容</h3>
              <ul>
                <li>Web 開發</li>
                <li>深度學習模型研究</li>
                <li>產學合作專案</li>
              </ul>
            </div>

            <div className="exp-block">
              <h3>貢獻</h3>
              <ul>
                <li>Hackathon 指導</li>
                <li>Winbond 產學合作專案持續開發</li>
                <li>登革熱預測系統維護（與教育局合作）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
