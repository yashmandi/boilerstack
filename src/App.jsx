import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stack from './pages/Stack';
import ReactWithCreateReactApp from './components/SidebarPages.jsx/ReactWithCreateReactApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs" element={<Stack />} />
      <Route path="/docs/react-with-create-react-app" element={<ReactWithCreateReactApp />} />
    </Routes>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;