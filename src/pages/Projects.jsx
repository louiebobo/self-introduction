import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = [
  {
    label: '市政府合作',
    items: [
      { id: 'traffic',   path: '/projects/traffic' },
      { id: 'flood',     path: '/projects/flood' },
      { id: 'dengue',    path: '/projects/dengue' },
      { id: 'road-risk', path: '/projects/road-risk' },
    ],
  },
  {
    label: '產學合作',
    items: [
      { id: 'die-quality',   path: '/projects/die-quality' },
      { id: 'die-quality-2', path: '/projects/die-quality-2', name: '（第二個題目）', type: 'Winbond · 待補充', tags: ['ML', 'Python'], desc: '內容待補充' },
    ],
  },
];

function Projects() {
  return (
    <div className="proj-overview">
      <h1 className="proj-overview-title">Projects</h1>

      <div className="proj-body">
        {categories.map((cat) => (
          <div key={cat.label} className="proj-category">
            <div className="proj-cat-label">{cat.label}</div>
            <div className="proj-cat-grid">
              {cat.items.map((item) => {
                const p = item.id !== 'die-quality-2'
                  ? projects.find((p) => p.id === item.id)
                  : null;

                const name = p ? p.name : item.name;
                const type = p ? p.type : item.type;
                const tags = p ? p.tags : item.tags;
                const desc = p ? p.description : item.desc;

                return (
                  <Link key={item.path} to={item.path} className="proj-card">
                    <div className="proj-card-top">
                      <h3 className="proj-card-name">{name}</h3>
                      <span className="proj-card-type">{type}</span>
                    </div>
                    <p className="proj-card-desc">{desc}</p>
                    <div className="tag-list">
                      {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
