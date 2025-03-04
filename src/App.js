import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { FeatureFlagProvider } from "./FeatureflagContext";

function App() {
  return (
    <FeatureFlagProvider>
      <Router>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </FeatureFlagProvider> 
  );
}

export default App;
