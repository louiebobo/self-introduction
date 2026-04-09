const sections = [
  {
    title: '研究背景',
    items: [
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
    ],
  },
  {
    title: '技術方法',
    items: [
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
    ],
  },
  {
    title: '成果與展望',
    items: [
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
      {
        subtitle: '（小標題）',
        desc: '（說明文字）',
      },
    ],
  },
];

function DieQualityDetail2() {
  return (
    <div className="dq-page">

      <div className="dq-header">
        <div className="dq-header-left">
          <div className="dq-badge">產學合作 · Winbond 華邦電子</div>
          <h1 className="dq-title">（第二個研究題目）</h1>
          <p className="dq-subtitle">（副標題說明）</p>
        </div>
        <div className="tag-list">
          {['Python', 'Machine Learning'].map((t) => (
            <span key={t} className="tag tag-tech">{t}</span>
          ))}
        </div>
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

export default DieQualityDetail2;
