import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import './assets/css/main.css';
import Resume from './components/resume';
import Contact from './views/contact';
import Project from './views/project';
import NoPage from './components/error';
import ScrollToTop from "react-scroll-to-top";

function App() {

  return (
    <div>   
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        <ScrollToTop smooth  />
      </Router> 
    
    </div>
  );
}

export default App;
