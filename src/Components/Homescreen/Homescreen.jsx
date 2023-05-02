import React from "react";
import "./Homescreen.css";

import Image1 from "../../Assets/Image1.png";
import Image2 from "../../Assets/Image2.png";
import Image3 from "../../Assets/Image3.png";
import Image4 from "../../Assets/Image4.png";

const Homescreen = () => {
  return (
    <div>
      
      <div className="home-content">
        <h1>Pet Adoption Hub</h1>
        <div className="image-grid">
          <div className="image">
            <img src={Image1} alt="Pet 1" />
          </div>
          <div className="image">
            <img src={Image2} alt="Pet 2" />
          </div>
          <div className="image">
            <img src={Image3} alt="Pet 3" />
          </div>
          <div className="image">
            <img src={Image4} alt="Pet 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homescreen;
