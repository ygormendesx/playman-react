import React from "react";

function Artwork({ title, description, imageUrl, link, supply }) {
    return (
      <div className="project-mountain">        
        <div className="retangulo flex-container-project d-flex align-items-center align-items-xl-start justify-content-center flex-column flex-sm-column flex-md-column flex-lg-column">
          <div className="flex-container-project flex-lg-row">
            <div className="img-project d-flex flex-lg-column align-items-center">
              <img src={imageUrl} alt="project" />
              <div className="d-flex flex-column align-items-left">
                <div className="name-title d-flex justify-content-center">
                  <p>{title}</p>
                </div>
                <div className="desc-project">
                  {description}
                </div>
              </div>
            </div>
  
            <div className="flex-container-features d-flex flex-column align-self-center align-items-center">
              <div className="d-flex flex-column align-items-center data-project-m justify-content-center">
                <div className="title-sup-m d-flex">
                  <a href={link}>View Project</a>
                </div>
                <div className="title-sup-m d-flex flex-column">
                  <p>Supply: {supply}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Artwork



