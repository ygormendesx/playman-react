import '../../App.css';
import React from 'react';
import Main from '../../images/sec/red-esp.png';
import Type1 from '../../images/sec/type1.png';
import Type2 from '../../images/sec/type2.png';
import Type3 from '../../images/sec/type3.png';


import Blue from '../../images/sec/blue-reg.png'
import Yellow from '../../images/sec/yellow-esp.png'
import Red from '../../images/sec/red2.png'
import Purple from '../../images/sec/purple-esp.png'
import Green from '../../images/sec/green-reg.png'
import White from '../../images/sec/white-reg.png'



function ProjectSeC() {
  return (
    <div className="project-mountain">
        
        <div className="flex-container-st d-flex justify-content-center align-items-center">
                <ul className="list-submenu d-flex justify-content-between">                    
                    <li><a href="/projectsec">Solve et Coagula&emsp;&emsp;&emsp;</a></li>
                    <li><a href="/projectmountain">Holy Mountain</a></li>            
                </ul>
        </div>
        
        <div className="flex-container-project d-flex align-items-center justify-content-center flex-column flex-sm-column flex-md-column flex-lg-row">
            <div className="img-sec-main">
                <img src={Main} alt="project-1"/>
            </div>
            <div className="d-flex flex-column align-items-center sec-release">
                <div className="name-title d-flex">
                    <p>Solve et Coagula</p>
                </div>
                <div className="desc-project">
                    "Solve et Coagula" is a basic principle of alchemy and that in this context represents my transmutation after the generative art invaded my heart.
                    <br/>
                    <br/>
                    This is a generative system built entirely in p5js. The work was developed based on the abstract composition of shapes, squares and lines allowing beauty to be found within the chaos itself.
                </div>


                <div className='d-flex flex-row align-items-center data-project'>
                    <div className="title-sup d-flex">
                    <a href="https://www.fxhash.xyz/generative/12571" target="_blank">View Project</a>
                    </div>
                    <div className="title-sup d-flex flex-column">
                        <p>Supply: 128ed</p>
                    </div>

                </div>
            </div>
        </div>

        <div className="flex-container-features d-flex flex-column align-self-center align-items-center">
            <div className="title-feature d-flex justify-content-center text-center">
                <p>Main Compositions</p>
            </div>
            <div className="desc-feature d-flex">
                <p>The project is based on three main compositions. A rare one with black squares and white lines, another with white thorns and the last one with no special elements. The spaces between the formations and the number of elements are a secondary factor in the diversity of the project.</p>
            </div>
            <div className="img-sec-feature d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Type1} alt="image feature1"/>
                <img src={Type2} alt="image feature1"/>
                <img src={Type3} alt="image feature1"/>
            </div>

            <div className="title-feature">
                <p>The Color Palette</p>
            </div>
            <div className="desc-feature">
                <p>
                Solve et Coagula has 6 main color palettes, which are blue, green, purple, red, white and yellow, and a special black. They mix within the different types of formations, amounts and dispositions of the elements, creating unique compositions.</p>
            </div>
            <div className="img-sec-feature1 d-flex flex-row flex-wrap justify-content-around justify-content-sm-around justify-content-md-around justify-content-lg-around justify-content-xl-between">
                <img src={Red} alt="image color01"/>
                <img src={Green} alt="image color02"/>
                <img src={Yellow} alt="image color03"/>
                <img src={Blue} alt="image color04"/>
                <img src={Purple} alt="image color05"/>
                <img src={White} alt="image color06"/>
            </div>
        </div>      
    </div>
  );
}

export default ProjectSeC;