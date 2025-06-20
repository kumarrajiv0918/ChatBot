import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/page';
import { About } from './pages/about/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;