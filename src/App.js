import React from 'react';
import './App.css';
import HeaderIndex from './components/HeaderIndex';
import Footer from './components/Footer';
import About from './About'
import ProjectMountain from './ProjectMountain';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
        <HeaderIndex/>

        <div class="flex-container">
            <div class="container-menu">
                <div class="container-about" id="c-menu">
                    <a href="#"><p>About the<br></br>Artist</p></a>
                </div>
                <div class="container-projects" id="c-menu">
                    <a href="#"><p>Projects</p></a>
                </div>
                <div class="container-contact" id="c-menu">
                    <a href="#"><p>Contact</p></a>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
}

export default App;
