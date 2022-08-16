import HeaderPages from './components/HeaderPages';
import Footer from './components/Footer';
import './App.css';
import React from 'react';
import Meteoro from './images/meteoro.jpeg';
import Formation1 from './images/formation/1.png';
import Formation2 from './images/formation/2.png';
import Formation3 from './images/formation/3.png';
import Formation4 from './images/formation/4.png';
import Formation5 from './images/formation/5.png';
import Formation6 from './images/formation/6.png';
import Formation7 from './images/formation/7.png';
import Formation8 from './images/formation/8.png';
import Formation9 from './images/formation/9.png';

import Black from './images/color/01-black.png'
import Gray from './images/color/02-gray.png'
import GreyishTeal from './images/color/03-greyish-teal.png'
import GoldenOrange from './images/color/04-golden-orange.png'
import DarkOrange from './images/color/05-dark-orange.png'
import YellowOrange from './images/color/06-yellow-orange.png'
import DarkGreen from './images/color/07-dark-green.png'
import Teal from './images/color/08-teal.png'
import EarthyTeal from './images/color/09-earthy-teal.png'
import Blue from './images/color/10-blue.png'
import DarkBlue from './images/color/11-dark-blue.png'
import GreyishBlue from './images/color/12-greyish-blue.png'
import BlackGolden from './images/color/13-black-golden.png'
import Golden from './images/color/14-golden.png'
import PurpleBrown from './images/color/15-purple-brown.png'
import Purple from './images/color/16-purple.png'
import DarkRed from './images/color/17-dark-red.png'
import Red from './images/color/18-red.png'

import Comet1 from './images/comet/1.png'
import Comet2 from './images/comet/2.png'
import Comet3 from './images/comet/3.png'

import Fog1 from './images/fog/1.png'
import Fog2 from './images/fog/2.png'
import Fog3 from './images/fog/3.png'

import Moon1 from './images/moon/1.png'
import Moon2 from './images/moon/2.png'
import Moon3 from './images/moon/3.png'

import Cloud1 from './images/cloud/1.png'
import Cloud2 from './images/cloud/2.jpg'
import Cloud3 from './images/cloud/3.png'



function ProjectMountain() {
  return (
    <div className="ProjectMountain">
        <HeaderPages/>
        
        <div class="flex-container-st">
            <div class="projects">
                <ul class="list-submenu">                    
                    <li><a href="#">Solve et Coagula</a></li>
                    <li><a href="#">Sem-Nome-Ainda</a></li>            
                </ul>    
            </div>
        </div>
        
        <div class="flex-container-project">
            <div class="img-project">
                <img src={Meteoro} alt="project-2"/>
            </div>
            <div class="name-project">
                <div class="name-title">
                    <p>Sem-Nome-Ainda</p>
                </div>
                <div class="desc-project">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        </div>

        <div class="flex-container-features">
            <div class="title-feature">
                <p>The Mountain Formation</p>
            </div>
            <div class="desc-feature">
                <p>Our first type of category are mountain variations. They are quite varied containing nine more specific types, in addition to the subvariations of the top of the mountains (pointed, rounded or square). A very wide range of possibilities to give each variation a unique look.</p>
            </div>
            <div class="img-feature1">
                <img src={Formation1} alt="image feature1"/>
                <img src={Formation2} alt="image feature1"/>
                <img src={Formation3} alt="image feature1"/>
                <img src={Formation4} alt="image feature1"/>
                <img src={Formation5} alt="image feature1"/>
                <img src={Formation6} alt="image feature1"/>
                <img src={Formation7} alt="image feature1"/>
                <img src={Formation8} alt="image feature1"/>
                <img src={Formation9} alt="image feature1"/>
            </div>

            <div class="title-feature">
                <p>The Color Palette</p>
            </div>
            <div class="desc-feature">
                <p>
                    The color palette is one of the central aspects of the collection. Containing eighteen palettes created to enhance and contrast the mountain formation. A powerful combination that exponentially increases the diversity of the collection as a whole.</p>
            </div>
            <div class="img-feature">
                <img src={Black} alt="image color01"/>
                <img src={Gray} alt="image color02"/>
                <img src={GreyishTeal} alt="image color03"/>
                <img src={GoldenOrange} alt="image color04"/>
                <img src={DarkOrange} alt="image color05"/>
                <img src={YellowOrange} alt="image color06"/>
                <img src={DarkGreen} alt="image color07"/>
                <img src={Teal} alt="image color08"/>
                <img src={EarthyTeal} alt="image color09"/>
                <img src={Blue} alt="image color10"/>
                <img src={DarkBlue} alt="image color11"/>
                <img src={GreyishBlue} alt="image color12"/>
                <img src={BlackGolden} alt="image color13"/>
                <img src={Golden} alt="image color14"/>
                <img src={PurpleBrown} alt="image color15"/>
                <img src={Purple} alt="image color16"/>
                <img src={DarkRed} alt="image color17"/>
                <img src={Red} alt="image color18"/>
            </div>

            <div class="title-feature">
                <p>Comet</p>
            </div>
            <div class="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div class="img-feature1">
                <img src={Comet1} alt="image element 1"/>
                <img src={Comet2} alt="image element 1"/>
                <img src={Comet3} alt="image element 1"/>
            </div>
        
            <div class="title-feature">
                <p>Fog</p>
            </div>
            <div class="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div class="img-feature1">
                <img src={Fog1} alt="image element 2"/>
                <img src={Fog2} alt="image element 2"/>
                <img src={Fog3} alt="image element 2"/>
            </div>
        
            <div class="title-feature">
                <p>Moon</p>
            </div>
            <div class="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div class="img-feature1">
                <img src={Moon1} alt="image element 3"/>
                <img src={Moon2} alt="image element 3"/>
                <img src={Moon3} alt="image element 3"/>
            </div>

            <div class="title-feature">
                <p>Elements: Clouds</p>
            </div>
            <div class="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div class="img-feature1">
                <img src={Cloud1} alt="image element 4"/>
                <img src={Cloud2} alt="image element 4"/>
                <img src={Cloud3} alt="image element 3"/>
            </div>
        </div>      
        
     
        <Footer/>
    </div>
  );
}

export default ProjectMountain;