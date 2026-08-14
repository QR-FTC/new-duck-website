import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechSpecs from './pages/TechSpecs';
import History from './pages/History';
import Outreach from './pages/Outreach'; // <-- Added import for your new page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/tech-specs"   element={<TechSpecs />} />
        <Route path="/history"      element={<History />} />
        <Route path="/outreach"     element={<Outreach />} /> {/* <-- Added new route */}
      </Routes>
    </Router>
  );
}

export default App;