import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Catalog from './pages/Catalog';
import PerfumeDetail from './pages/PerfumeDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/perfume/:id" element={<PerfumeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;