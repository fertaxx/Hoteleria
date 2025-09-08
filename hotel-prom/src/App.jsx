import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PromotionsPage from './pages/PromotionsPage';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promociones" element={<PromotionsPage />} />
          <Route path="/destinos" element={<DestinationsPage />} />
          <Route path="/experiencias" element={<ExperiencesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;