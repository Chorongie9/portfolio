import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Misc from './pages/Misc.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/misc" element={<Misc />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;