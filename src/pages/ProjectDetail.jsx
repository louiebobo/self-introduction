import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="detail-page">
        <h1>找不到專案</h1>
        <Link to="/projects" className="back-btn" style={{ marginTop: '20px' }}>← 回到專案列表</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      {/* Header */}
      <div className="detail-header">
        <div>
          <h1 className="detail-title">{project.name}</h1>
          <span className="detail-type">{project.type}</span>
        </div>
        <div className="tag-list">
          {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>

      {/* Body */}
      <div className="detail-body">

        <div className="detail-main">
          <section className="detail-section">
            <h2>專案背景</h2>
            <p>{project.background}</p>
          </section>

          <section className="detail-section">
            <h2>解決問題</h2>
            <p>{project.problem}</p>
          </section>

          <section className="detail-section">
            <h2>成果</h2>
            <p>{project.results}</p>
          </section>

          <section className="detail-section">
            <h2>使用技術</h2>
            <div className="tag-list">
              {project.tech.map((t) => <span key={t} className="tag tag-tech">{t}</span>)}
            </div>
          </section>

          {(project.github || project.demo) && (
            <div className="link-row">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>
              )}
            </div>
          )}
        </div>

        <div className="detail-side">
          {project.image && (
            <div className="detail-preview">
              <img src={project.image} alt={project.name} className="detail-preview-img" />
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="detail-preview-url">
                  {project.demo}
                </a>
              )}
            </div>
          )}

          <section className="detail-section">
            <h2>我的貢獻</h2>
            <ul className="contrib-list">
              {project.contributions.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}

export default ProjectDetail;
