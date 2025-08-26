import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Mission from './pages/Mission';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Bless Project - 청년 선교 동역 모임</title>
          <meta name="description" content="선교지 교회학교와 함께 성장하는 청년 선교 동역 모임" />
          <meta name="keywords" content="선교, 교회학교, 청년, 동역, 콘텐츠" />
        </Helmet>
        
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
