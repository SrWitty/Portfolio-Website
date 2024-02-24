import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ArticlesInterviewsPage from './components/ArticlesInterviewsPage';
import ServicesPage from './components/ServicesPage';
import './App.css';

function App() {
  return (
    <Router basename="/Portfolio-Website">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesInterviewsPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
        <Outlet />
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
