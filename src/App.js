import React from 'react';
import './App.css';
import HeaderIndex from './components/HeaderIndex';
import Footer from './components/Footer';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contato/Contact';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/main';

function App() {
    return (
            <div className="App">
                <HeaderIndex />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
    );
}

export default App;
