import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data/projects';

const mainProjects = projects.filter((p) => p.id !== 'die-quality');

const navItems = [
  { path: '/',         label: '關於我',  sub: 'Bo-Yan Zeng' },
  { path: '/projects', label: '專案總覽', sub: 'All Projects' },
  ...mainProjects.map((p) => ({ path: `/projects/${p.id}`, label: p.name, sub: p.tags.join(' · ') })),
  { path: '/projects/die-quality',   label: 'Die Quality Prediction', sub: 'Winbond · ML' },
  { path: '/projects/die-quality-2', label: '（第二個題目）',           sub: 'Winbond · ML' },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav-panel nav-left">
      <div className="np-list">
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path;
          return (
            <div key={item.path}>
              {i === 1 && <div className="np-divider"><span>Projects</span></div>}
              <Link to={item.path} className={`np-item ${isActive ? 'active' : ''}`}>
                <span className="np-dot" />
                <div className="np-info">
                  <span className="np-label">{item.label}</span>
                  <span className="np-sub">{item.sub}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
