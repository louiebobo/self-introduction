function About() {
  const skills = {
    '程式語言': ['Python', 'JavaScript', 'Java', 'C'],
    '框架與工具': ['React', 'Flask', 'Node.js', 'Vue', 'PyTorch', 'Keras', 'Docker', 'Linux'],
    '資料處理': ['SQL', 'MySQL', 'Power BI'],
  };

  const interests = ['Machine Learning', 'Deep Learning', 'Urban Data Science', 'Web Development'];

  return (
    <div className="page">
      <h1 className="page-title">關於我</h1>

      <section className="section">
        <h2 className="section-title">學歷背景</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 – 2026</div>
            <div className="timeline-content">
              <h3>成功大學 電機工程研究所（資工組）</h3>
              <p>碩士生</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2020 – 2024</div>
            <div className="timeline-content">
              <h3>成功大學 電機工程學系</h3>
              <p>學士</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">研究興趣</h2>
        <div className="tag-list">
          {interests.map((item) => (
            <span key={item} className="tag tag-lg">{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">技能</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <div className="tag-list">
                {items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
