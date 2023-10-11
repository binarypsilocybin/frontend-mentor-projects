import React from "react";
import MiddleImageLeftDesktop from "../images/homepage/enjoyable-place-desktop.jpg";
import MiddleImageLeftTablet from "../images/homepage/enjoyable-place-tablet.jpg";
import MiddleImageLeftMobile from "../images/homepage/enjoyable-place-mobile.jpg";
import MiddleImageRightDesktop from "../images/homepage/locally-sourced-desktop.jpg";
import MiddleImageRightTablet from "../images/homepage/locally-sourced-tablet.jpg";
import MiddleImageRightMobile from "../images/homepage/locally-sourced-mobile.jpg";
import Divider from "../images/patterns/pattern-divide.svg";
import Pattern from "../images/patterns/pattern-lines.svg";

const Middle = () => {
  return (
    <section className="middle">
      <div className="middle-container">
        <div className="middle-family">
          <div className="middle-image first">
            <picture>
              <source
                srcset={MiddleImageLeftTablet}
                media="(max-width: 768px)"
              />
              <source
                srcset={MiddleImageLeftMobile}
                media="(max-width: 375px)"
              />
              <img src={MiddleImageLeftDesktop} alt="image_trees" />
            </picture>
          </div>
          <div className="middle-content">
            <img src={Divider} alt="image_divider" />
            <h2 className="middle-title">Enjoyable place for all the family</h2>
            <p className="middle-body-text">
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
            </p>
          </div>
        </div>
        <div className="middle-locally">
          <div className="middle-pattern">
            <img src={Pattern} alt="pattern" />
          </div>
          <div className="middle-image second">
            <picture>
              <source
                srcset={MiddleImageRightTablet}
                media="(max-width: 768px)"
              />
              <source
                srcset={MiddleImageRightMobile}
                media="(max-width: 375px)"
              />
              <img src={MiddleImageRightDesktop} alt="image_trees" />
            </picture>
          </div>
          <div className="middle-content">
            <img src={Divider} alt="image_divider" />
            <h2 className="middle-title">The most locally sourced food</h2>
            <p className="middle-body-text">
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;
