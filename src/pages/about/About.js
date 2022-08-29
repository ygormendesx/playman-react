import '../../App.css';
import React from 'react';
import Ygor from '../../images/ygor.jpg';


function About() {
  return (
    <div className='about'>
        <div className="d-flex align-items-center justify-content-center flex-lg-row-reverse flex-xl-row-reverse flex-md-column-reverse flex-sm-column-reverse flex-column-reverse align-self-center align-content-center ">
            <div className="d-flex flex-column about-text align-items-center align-items-sl-center align-items-md-center align-items-lg-start align-items-xl-start">
                    <div className="d-flex title-name">
                        <p>Ygor Mendes</p>
                    </div>
                    <div className="subtitle-name">
                        <p>Playman</p>
                    </div>
                    <div className="desc-text">
                        <p>
                            &emsp;&emsp;Hi, I'm Ygor Mendes, born in Brazil, 34 years old and I'm better known as Playman.
                            <br/>          
                            <br/>
                            &emsp;&emsp;I've been working with design and illustration for over a decade, but I've always been connected to the world of technology since I was a teenager. Passionate about arts and programming, I graduated in Systems Analysis and Development, which gave me a much broader view of the entire area, in addition to making me immerse myself in code. In 2021 I was taken by the world of generative art through the NFT marketplaces, starting in this segment as a collector, but every day that passed I felt an inexplicable call inside my heart. At that moment I managed to understand that the union of my two passions would be possible and that I could generate incredible arts through code.
                        </p>
                    </div>
                </div>
                <div className="photo-about">
                    <img src={Ygor} alt="Photo Playman"/>
            </div>
        </div>   
        <div className="desc-text about-text p-two">
                <p>
                    &emsp;&emsp;Since then I have delved deeply into the study and practice of creative programming, bringing my design and illustration background to finally implement allied with technology. This initially brought me a big dilemma, since at that moment I was in full production of illustration for marketplaces. Even so, my decision to focus all my energies on generative art made me much happier in my professional trajectory, since spending hours and hours adjusting variables, code snippets, racking my brains with bugs became more than a job , a real hobby.
                    <br/>
                    <br/>
                    &emsp;&emsp;I really appreciate the use of basic geometric shapes in my works, which despite looking simple can become very complex and beautiful in a well-defined composition. I also dare to experiment with more detailed compositions with more complex shapes and forms, always focusing on bringing a pleasant experience to the public, my goal will always be to bring an emotional result in the art. If you've stopped to read this, I hope my work is somehow important to you.
                </p>
        </div>
    </div>
  );
}

export default About;