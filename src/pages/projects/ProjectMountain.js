import '../../App.css';
import React from 'react';
import Meteoro from '../../images/meteoro.png';
import Formation1 from '../../images/formation/1.png';
import Formation2 from '../../images/formation/2.png';
import Formation3 from '../../images/formation/3.png';
import Formation4 from '../../images/formation/4.png';
import Formation5 from '../../images/formation/5.png';
import Formation6 from '../../images/formation/6.png';
import Formation7 from '../../images/formation/7.png';
import Formation8 from '../../images/formation/8.png';
import Formation9 from '../../images/formation/9.png';

import Black from '../../images/color/01-black.png'
import Grey from '../../images/color/02-grey.png'
import GreyishTeal from '../../images/color/03-greyish-teal.png'
import GoldenOrange from '../../images/color/04-golden-orange.png'
import DarkOrange from '../../images/color/05-dark-orange.png'
import YellowOrange from '../../images/color/06-yellow-orange.png'
import DarkGreen from '../../images/color/07-dark-green.png'
import Teal from '../../images/color/08-teal.png'
import EarthyTeal from '../../images/color/09-earthy-teal.png'
import Blue from '../../images/color/10-blue.png'
import DarkBlue from '../../images/color/11-dark-blue.png'
import GreyishBlue from '../../images/color/12-greyish-blue.png'
import BlackGolden from '../../images/color/13-black-golden.png'
import Golden from '../../images/color/14-golden.png'
import PurpleBrown from '../../images/color/15-purple-brown.png'
import Purple from '../../images/color/16-purple.png'
import DarkRed from '../../images/color/17-dark-red.png'
import Red from '../../images/color/18-red.png'

import Comet1 from '../../images/comet/1.png'
import Comet2 from '../../images/comet/2.png'
import Comet3 from '../../images/comet/3.png'

import Fog1 from '../../images/fog/1.png'
import Fog2 from '../../images/fog/2.png'
import Fog3 from '../../images/fog/3.png'

import Moon1 from '../../images/moon/1.png'
import Moon2 from '../../images/moon/2.png'
import Moon3 from '../../images/moon/3.png'

import Cloud1 from '../../images/cloud/1.png'
import Cloud2 from '../../images/cloud/2.png'
import Cloud3 from '../../images/cloud/3.png'



function ProjectMountain() {
  return (
    <div className="project-mountain">
        
        <div className="flex-container-st d-flex justify-content-center align-items-center">
                <ul className="list-submenu d-flex justify-content-between">                    
                    <li><a href="/projectsec">Solve et Coagula&emsp;&emsp;&emsp;</a></li>
                    <li><a href="/projectmountain">Holy Mountain</a></li>            
                </ul>
        </div>
        
        <div className="flex-container-project d-flex  align-items-center align-items-xl-start justify-content-center flex-column flex-sm-column flex-md-column flex-lg-row">
            <div className="img-project">
                <img src={Meteoro} alt="project-2"/>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className="name-title d-flex">
                    <p>Holy Mountain</p>
                </div>
                <div className="desc-project">&emsp;Mountains throughout human history have taken on deep meanings. Coated with immense sacredness by all peoples in the most different places. Being them as a representation of God himself or being the object of worship. For many the mountains were the very abode of the Gods.They are in the collective unconscious as the ability to connect men and gods, through the flow of energy between earth and heaven.
                <br/>
                &emsp;The symbology is very strong. It unconsciously reminds us of the process of encounter between the loneliness of the earth and the hope of the sky, between the fog that blinds and the cloud that supports, between the abyss of the ground and the proximity of the stars. All this is very charming and fascinating.
                <br/>
                &emsp;All human beings have their own mountain, which demands from each one their limits to reach the top, the desire for the breathtaking view, the fear of falling, but also the hope of the last step at the highest point.
                </div>
            </div>
        </div>

        <div className="flex-container-features d-flex flex-column align-self-center align-items-center">
            <div className="desc-feature d-flex">
                <p>&emsp;In generative art it couldn't be different, going through all the learning, from its fundamentals, to all the countless hours of tests, to countless moments of problem solving and research and more research. This whole process is without a doubt like climbing a mountain.Thinking about the project is exactly like looking at a mountain and imagining how exhausting it will be all the way to conquer it. Finishing your work is like breathing a sigh of relief, looking down and seeing how hard it was to get there, but at the same time looking ahead and realizing how rewarding it was to be able to have that vision and breathe the refreshing breeze of the moment.
                <br/>
                &emsp;After going through a transformation on my first work, through which I transmuted my artistic essence from illustration to generative art. I pored over my second work and now, after months of climbing this mountain of mine, I deliver to you.</p>
            </div>

            <div className="title-var d-flex">
                <p>■ ■ ■  VARIATIONS ■ ■ ■</p>
            </div>
            <div className="title-feature d-flex justify-content-center text-center">
                <p>The Mountain Formation</p>
            </div>
            <div className="desc-feature d-flex">
                <p>Our first type of category are mountain variations. They are quite varied containing nine more specific types, in addition to the subvariations of the top of the mountains (pointed, rounded or square). A very wide range of possibilities to give each variation a unique look.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
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

            <div className="title-feature">
                <p>The Color Palette</p>
            </div>
            <div className="desc-feature">
                <p>
                    The color palette is one of the central aspects of the collection. Containing eighteen palettes created to enhance and contrast the mountain formation. A powerful combination that exponentially increases the diversity of the collection as a whole.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Red} alt="image color01"/>
                <img src={DarkRed} alt="image color02"/>
                <img src={Purple} alt="image color03"/>
                <img src={GoldenOrange} alt="image color04"/>
                <img src={DarkOrange} alt="image color05"/>
                <img src={YellowOrange} alt="image color06"/>
                <img src={Black} alt="image color07"/>
                <img src={Grey} alt="image color08"/>
                <img src={GreyishTeal} alt="image color09"/>
                <img src={BlackGolden} alt="image color10"/>
                <img src={Golden} alt="image color11"/>
                <img src={PurpleBrown} alt="image color12"/>
                <img src={DarkGreen} alt="image color13"/>
                <img src={Teal} alt="image color14"/>
                <img src={EarthyTeal} alt="image color15"/>
                <img src={Blue} alt="image color16"/>
                <img src={DarkBlue} alt="image color17"/>
                <img src={GreyishBlue} alt="image color18"/>
            </div>

            <div className="title-feature">
                <p>Comet</p>
            </div>
            <div className="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Comet1} alt="comet1"/>
                <img src={Comet2} alt="comet2"/>
                <img src={Comet3} alt="comet3"/>
            </div>
        
            <div className="title-feature">
                <p>Fog</p>
            </div>
            <div className="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Fog1} alt="fog1"/>
                <img src={Fog2} alt="fog2"/>
                <img src={Fog3} alt="fog3"/>
            </div>
        
            <div className="title-feature">
                <p>Moon</p>
            </div>
            <div className="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Moon1} alt="moon1"/>
                <img src={Moon2} alt="moon2"/>
                <img src={Moon3} alt="moon3"/>
            </div>

            <div className="title-feature">
                <p>Elements: Clouds</p>
            </div>
            <div className="desc-feature">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel leo id ligula gravida faucibus. Duis pulvinar rhoncus pretium.
                    Nullam at dolor sit amet mi ultrices scelerisque. Sed eget libero.</p>
            </div>
            <div className="img-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Cloud1} alt="clouds1"/>
                <img src={Cloud2} alt="clouds2"/>
                <img src={Cloud3} alt="clouds3"/>
            </div>
        </div>      
    </div>
  );
}

export default ProjectMountain;