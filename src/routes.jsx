import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import DieQualityDetail from './pages/DieQualityDetail';
import DieQualityDetail2 from './pages/DieQualityDetail2';

export const routes = [
  { path: '/',                         component: Home },
  { path: '/projects',                 component: Projects },
  { path: '/projects/die-quality',     component: DieQualityDetail },
  { path: '/projects/die-quality-2',   component: DieQualityDetail2 },
  { path: '/projects/:id',             component: ProjectDetail },
];
