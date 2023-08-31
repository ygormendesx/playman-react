import "../../App.css";
import React from "react";
import Ygor from "../../images/ygor1.jpg";
import Nftbr from "../../images/nftbr.jpg";
import Nftbr2 from "../../images/nftbr2.jpg";
import Imers from "../../images/imers.jpg";
import HeaderIndex from "../../components/HeaderIndex";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <HeaderIndex />
      <div className="about">
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
                &emsp;&emsp;Hi, I'm Ygor Mendes, born in Brazil, 34 years old
                and I'm better known as Playman.
                <br />
                <br />
                &emsp;&emsp;I've been working with design and illustration for
                over a decade, but I've always been connected to the world of
                technology since I was a teenager. Passionate about arts and
                programming, I graduated in Systems Analysis and Development,
                which gave me a much broader view of the entire area, in
                addition to making me immerse myself in code. In 2021 I was
                taken by the world of generative art through the NFT
                marketplaces, starting in this segment as a collector, but every
                day that passed I felt an inexplicable call inside my heart. At
                that moment I managed to understand that the union of my two
                passions would be possible and that I could generate incredible
                arts through code.
              </p>
            </div>
          </div>
          <div className="photo-about">
            <img src={Ygor} alt="Playman" />
          </div>
        </div>
        <div className="desc-text about-text p-two">
          <p>
            &emsp;&emsp;Since then I have delved deeply into the study and
            practice of creative programming, bringing my design and
            illustration background to finally implement allied with technology.
            This initially brought me a big dilemma, since at that moment I was
            in full production of illustration for marketplaces. Even so, my
            decision to focus all my energies on generative art made me much
            happier in my professional trajectory, since spending hours and
            hours adjusting variables, code snippets, racking my brains with
            bugs became more than a job , a real hobby.
            <br />
            <br />
            &emsp;&emsp;I really appreciate the use of basic geometric shapes in
            my works. I also dare to experiment with more detailed compositions
            with more complex shapes and forms, always focusing on bringing a
            pleasant experience to the public, my goal will always be to bring
            an emotional result in the art.{" "}
          </p>
        </div>

        <div className="subtitle-name d-flex justify-content-center">
          <p>Events</p>
        </div>

        <div className="photo-nft-brasil">
          <img src={Nftbr} alt="NftBrasil" />
        </div>
        <div className="desc-text about-text p-two">
          <p>
            &emsp;&emsp;In June 2023, an important milestone emerged in my
            artistic journey. I was selected by the curators of NFT Brazil, the
            largest NFT event in Latin America, held in São Paulo. At this
            prestigious event, I had the honor of exhibiting four of my
            artworks: Digital Expression, Sunset Symphony 02, Reel, and
            Multigravity Slits. This opportunity not only provided me with a
            platform to share my artistic vision with a diverse audience and to
            meet various wonderful artists but also marked a moment of
            recognition in my career as a generative artist.
          </p>
        </div>
        <div className="photo-nft-brasil2">
          <img src={Nftbr2} alt="NftBrasil" />
          <img src={Imers} alt="NftBrasil" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
