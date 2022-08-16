import React from "react";
import "./Stories.css";
import Person from "../../Images/person.png";
import Feedback from "../../Images/feedback.png";
import Fade from "react-reveal/Fade";

const Stories = () => {
  return (
    <div className="stories">
      <div className="s-left">
        <Fade left>
          <img className="person" src={Person} alt="" />
        </Fade>
        <Fade left>
        <div className="more-info">
            <h4 className="more-infos">
              "Bugungi kunda oziq-ovqat xavfsizligi butun dunyoda eng dolzarb
              muammoga aylanib bormoqda."
            </h4>
            <p className="more-text">
              Issiqxonalar aholi bandligini ta’minlash va mahsulot eksport
              qilishning katta manbai. Issiqxonalarni ko‘paytirish uchun
              tadbirkorlarning keng doirasini qiziqtirish, ularga har tomonlama
              yordam berish zarur.
            </p>
            <p className="more-infos1">Sh.Mirziyoyev</p>
          </div>
        </Fade>
      </div>
      <div className="s-right">
        <Fade right>
          <h1>Other successful stories</h1>

          <h3>Amateur</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius.
          </p>
        </Fade>
        <Fade right>
          <h3>Beginner</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius.
          </p>
        </Fade>
        <Fade right>
          <h3>Professional</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Stories;
