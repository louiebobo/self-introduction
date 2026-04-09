const sections = [
  {
    title: '研究背景',
    items: [
      {
        subtitle: '產業痛點',
        desc: '晶圓製程中每顆 Die 的品質差異直接影響良率。傳統人工抽樣或規則式篩選耗時，且難以捕捉高維製程參數間的複雜交互關係，導致缺陷品流入後段封測，增加整體製造成本。如何在製程中早期發現潛在不良品，是半導體業長期面臨的核心挑戰之一。',
      },
      {
        subtitle: '研究目標',
        desc: '與華邦電子合作，建立機器學習模型，在製程早期自動識別潛在不良品。',
      },
    ],
  },
  {
    title: '技術方法',
    items: [
      {
        subtitle: '資料前處理與特徵工程',
        desc: '原始數據具高維度、缺失值多、類別不平衡等特性，進行系統性清洗與標準化，並透過特徵重要性分析篩選關鍵量測參數，降低模型複雜度並提升泛化能力。',
      },
      {
        subtitle: '模型選型與優化',
        desc: '比較 Random Forest、XGBoost、LightGBM，採用交叉驗證與超參數搜索優化效能。',
      },
    ],
  },
  {
    title: '成果與展望',
    items: [
      {
        subtitle: '效能驗證',
        desc: '在 Winbond 真實量產數據上完成評估，準確率達工業應用標準，可視化結果協助工程師快速定位問題根源。',
      },
      {
        subtitle: '產學價值與後續規劃',
        desc: '預測工具已提供廠方參考，協助製程決策。後續規劃導入深度學習方法，進一步提升對晶圓圖（Wafer Map）空間分布缺陷模式的辨識能力，並研究跨批次遷移學習的可行性。',
      },
    ],
  },
];

function DieQualityDetail() {
  return (
    <div className="dq-page">

      <div className="dq-header">
        <div className="dq-badge">產學合作 · Winbond 華邦電子</div>
        <h1 className="dq-title">Die Quality Prediction</h1>
        <div className="tag-list">
          {['Machine Learning', 'Python', 'XGBoost', 'LightGBM', 'Feature Engineering'].map((t) => (
            <span key={t} className="tag tag-tech">{t}</span>
          ))}
        </div>
        <p className="dq-subtitle">以機器學習預測晶圓品質，提升半導體製程良率</p>
      </div>

      <div className="dq-sections">
        {sections.map((sec) => (
          <div key={sec.title} className="dq-section">
            <h2 className="dq-section-title">{sec.title}</h2>
            <div className="dq-items">
              {sec.items.map((item) => (
                <div key={item.subtitle} className="dq-item">
                  <h3 className="dq-item-title">{item.subtitle}</h3>
                  <p className="dq-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DieQualityDetail;
