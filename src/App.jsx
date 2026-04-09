import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        <main className="main-content">
          <Routes>
            {routes.map((r, i) => {
              const C = r.component;
              return <Route key={i} path={r.path} element={<C />} />;
            })}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
