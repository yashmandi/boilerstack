import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Stack from "./pages/Stack";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/docs/*" element={<Stack />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
