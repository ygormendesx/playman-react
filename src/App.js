import React from 'react';
import './App.css';
import HeaderIndex from './components/HeaderIndex';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contato/Contact';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/main';

function App() {
    return (
            <div className="App">

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contato" element={<Contact />} />
                </Routes>
            </div>
    );
}

export default App;
