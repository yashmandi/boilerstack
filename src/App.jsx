import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stack from './pages/Stack';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/stack" element={<Stack />} />
    </Routes>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;