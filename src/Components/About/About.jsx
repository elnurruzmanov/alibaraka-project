import React from "react";
import "./About.css";
import TraktorImg from "../../Images/imageT.png";
import newImg1 from "../../Images/dal1.png";
import newImg2 from "../../Images/dal2.png";
import LightSpeed from "react-reveal/LightSpeed";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="a-left">
        <h1>BIZ HAQIMIZDA</h1>
        <p>
        Bizning kompaniya 2016-yilda tashkil topib, ko'plab kishilarda issiqxona qurishdagi mahsulotlari yetkazishda va qurishda katta xizmat qilib keladi. Sohadagi katta tajribamiz sabab mijozlarimiz ishonchini egallab, yanada rivojlanishda davom etmoqdamiz.
        </p>
        <div className="a-btns">
          <button className="new-btn">KO'PROQ MA'LUMOT</button>
          <button className="new-btn">BIZNING YOUTUBE</button>
        </div>
      </div>
      <div className="a-right">
        <LightSpeed left>
          <img className="dal1" src={newImg1} alt="" />
          <img className="dal2" src={newImg2} alt="" />
        </LightSpeed>
        <LightSpeed right>
          <img className="traktor" src={TraktorImg} alt="" />
        </LightSpeed>
      </div>
    </div>
  );
};

export default About;
