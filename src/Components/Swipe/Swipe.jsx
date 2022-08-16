import React from 'react';
import './Swipe.css'
import Group from '../../Images/Group1.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import slack from "../../Images/slack.svg"
import wordpress from "../../Images/wordpress.svg"

const Swipe = () => {
    return (
      <div className="Swipe">
       
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img className='slack' src={slack} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wordpress} alt="" />
        </SwiperSlide>
        <SwiperSlide><img src={wordpress} alt="" /></SwiperSlide>
        <SwiperSlide> <img className='slack' src={slack} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wordpress} alt="" /></SwiperSlide>
        <SwiperSlide><img className='slack' src={slack} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wordpress} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wordpress} alt="" /></SwiperSlide>
        <SwiperSlide><img src={wordpress} alt="" /></SwiperSlide>
      </Swiper>
         
         
         
        
      </div>
    );
}

export default Swipe;
