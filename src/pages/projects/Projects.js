import "../../App.css";
import React from "react";
import Artwork from "../../components/Artwork.js";
import HeaderIndex from "../../components/HeaderIndex";
import Footer from "../../components/Footer";

import dg from "../../images/dg.png";
import hodlers from "../../images/hodlers.png";
import sec from "../../images/sec.png";
import hm from "../../images/hm.png";
import delinius from "../../images/delinius.png";
import ss1 from "../../images/ss1.jpg";
import ss2 from "../../images/ss2.png";
import ss3 from "../../images/ss3.png";
import reel from "../../images/reel.png";
import mgs from "../../images/mgs.png";
import impulse from "../../images/impulse.png";
import st from "../../images/st.png";

function Projects() {
  return (
    <div>
      <HeaderIndex />
      <div className="project-mountain">
        <div className="flex-container-st d-flex justify-content-center align-items-center">
          <ul className="list-submenu">
            Projects
          </ul>
        </div>
        <div className="flex-container-projects d-flex flex-wrap flex-lg-row align-items-center justify-content-around">
          <Artwork
            title="Digital Expression"
            description="Digital Expression is a work of art that brings the power of simple geometric shapes, lines mix and reveal the power to generate complex, interesting and unexpected formations."
            imageUrl={dg}
            link="https://www.fxhash.xyz/generative/slug/digital-expression"
            supply="120ed (long-form)"
          />

          <Artwork
            title="(H)ued Pathways"
            description="(H)ued Pathways is part of the genesis project of the Hodlers Collective."
            imageUrl={hodlers}
            link="https://opensea.io/assets/ethereum/0xeac5e94c543ce2211b695bd69bd0d5ff3c4a21e1/25"
            supply="1/1"
          />

          <Artwork
            title="Solve et Coagula"
            description="The work was developed based on the abstract composition of shapes, squares and lines allowing beauty to be found within the chaos itself."
            imageUrl={sec}
            link="https://www.fxhash.xyz/generative/slug/solve-et-coagula"
            supply="128ed (long-form)"
          />

          <Artwork
            title="Holy Mountain"
            description="Mountains symbolize deep meaning and connection between humans and gods. Generative art, like climbing a mountain, requires effort and brings rewarding moments."
            imageUrl={hm}
            link="https://www.fxhash.xyz/generative/18940"
            supply="174ed (long-form)"
          />
          <Artwork
            title="Delinius"
            description="Delinius involves an intriguing fusion of order and chaos, with carefully interwoven geometric shapes that create a dazzling visual spectacle."
            imageUrl={delinius}
            link="https://genify.xyz/collection/45/items"
            supply="400ed (long-form)"
          />

          <Artwork
            title="Sunset Symphony1"
            description="Sunset Symphony 001 is the first of a collection of three unique artworks that features the vibrant sunset symphony as its main theme in abstract art."
            imageUrl={ss1}
            link="https://exchange.art/single/FcEq5SxcpYTddvHNG2DvDg3jhWTnExGDJngHDTFcYpjf"
            supply="1/1"
          />

          <Artwork
            title="Sunset Symphony2"
            description="Sunset Symphony 002 is the second of a collection of three unique artworks that features the vibrant sunset symphony as its main theme in abstract art."
            imageUrl={ss2}
            link="https://exchange.art/single/hDy7kKPsk2HqhgRANT2Tso6pTHz7nLWLGZ7EogcM6bH"
            supply="1/1"
          />

          <Artwork
            title="Sunset Symphony3"
            description="Sunset Symphony 003 is the third of a collection of three unique artworks that features the vibrant sunset symphony as its main theme in abstract art."
            imageUrl={ss3}
            link="https://exchange.art/single/4CgACx4CbfDSEmfCkkkRJdmoWM7aDsuaYa7kG76Jysz5"
            supply="1/1"
          />

          <Artwork
            title="Reel"
            description="The reel of time never waits. This is a artwork that is part of the Sublime collection."
            imageUrl={reel}
            link="https://objkt.com/asset/KT197SZHS7R2um9Ws3HwafVyP7Do7iKsvNic/1"
            supply="3ed (short-form)"
          />

          <Artwork
            title="Multigravity Slits"
            description="Based on fine lines and graphite effect on paper. This is a artwork that is part of the Sublime collection."
            imageUrl={mgs}
            link="https://objkt.com/asset/KT197SZHS7R2um9Ws3HwafVyP7Do7iKsvNic/0"
            supply="151ed (short-form)"
          />

          <Artwork
            title="Impulse"
            description="Desire is impulse. This is a artwork that is part of the Sublime collection."
            imageUrl={impulse}
            link="https://objkt.com/asset/KT197SZHS7R2um9Ws3HwafVyP7Do7iKsvNic/2"
            supply="3ed (short-form)"
          />

          <Artwork
            title="Surface Tension"
            description="The invisible limit. This is a artwork that is part of the Sublime collection."
            imageUrl={st}
            link="https://objkt.com/asset/KT197SZHS7R2um9Ws3HwafVyP7Do7iKsvNic/3"
            supply="10ed (short-form)"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
