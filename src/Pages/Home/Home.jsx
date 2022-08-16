import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import Vector from "../../Images/Vector.png"
import tringle from "../../Images/3bur.png";
import Vector1 from "../../Images/Vector1.png";
import P2 from "../../Images/1p.PNG";
import Juniper from "../../Images/archa.png";
import Fade from "react-reveal/Fade";
import Product from "../../Components/Product/Product";
import About from "../../Components/About/About";
import Swipe from "../../Components/Swipe/Swipe";
import Trust from "../../Components/Trust/Trust";
import Stories from "../../Components/Stories/Stories";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AfterFooter from "../../Components/AfterFooter/AfterFooter";


const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div className="home-wrapper">
          <div className="left">
            <h1>Samarali issiqxona quraylik!</h1>
            <p>
            Issiqxonalar ko'p, lekin unumli va samarali bo'lishini istasangiz biz bilan bog'laning. Biz uni siz o'ylaganingizdek quramiz. Issiqxonangizni kerakli jihozlar bilan biz bilan boyiting!
            </p>
            <button className="header-btn">Yana</button>
          </div>
          <div className="right">
            <img className="vector1" src={Vector1} alt="" />
            <img className="Vector" src={Vector} alt="" />


            <div className="circle">
              <img className="tringle" src={tringle} alt="" />
            </div>
          </div>
        </div>
      </header>
      <img className="p1" src={P2} alt="" />
      <div className="production" id="products">
        <div className="p-heading">
          <h1>Our production</h1>
          <p>
            "Your work is going to fill a large part of your life, and the only
            way to be truly satisfied is to do what you believe is great work
          </p>
        </div>
        <Fade top>
          <img className="juniper" src={Juniper} alt="" />
        </Fade>
        <Product />
      </div>

      <About />
      <Swipe />
      <Trust />
      <Stories />
      <Contact />
      <Footer />
      <AfterFooter />
    </div>
  );
};

export default Home;
