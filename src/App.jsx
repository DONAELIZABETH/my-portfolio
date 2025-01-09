import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './Components/Pages';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
        <Route path="*" element={<Pages />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route for undefined paths */}
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
