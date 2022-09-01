import React from 'react';
import './App.css';
import HeaderIndex from './components/HeaderIndex';
import Footer from './components/Footer';
import About from './pages/about/About';
import ProjectMountain from './pages/projects/ProjectMountain';
import ProjectSeC from './pages/projects/ProjectSeC';
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
                    <Route path="/projectsec" element={<ProjectSeC />} />
                    <Route path="/projectmountain" element={<ProjectMountain />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
    );
}

export default App;
