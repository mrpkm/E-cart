import React from "react";
import styles from '../Assets/home.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import first from '../img/000.jpg'
import sec from '../img/images1.jpeg'
import thi from '../img/images10.jpeg'
import fort from '../img/images11.jpeg'
import fiv from '../img/images12.jpeg'
import six from '../img/images14.jpeg'
import sev from '../img/images15.jpeg'
import eig from '../img/images2.jpeg'
import nin from '../img/images3.jpeg'
import ten from '../img/images4.jpeg'
import ele from '../img/images6.jpeg'
import twe from '../img/images7.jpeg'

// banner
import banner1 from '../img/0001.jpeg'
import banner2 from '../img/0002.jpeg'
import banner3 from '../img/0003.jpeg'
import banner4 from '../img/0004.jpeg'
import { Link } from "react-router-dom";
import Footer from "./Footer";





function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.headerImg}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
            ...
          </Swiper>
        </div>
        <div className={styles.product}>
          <Link to="/item">Product</Link>
          <h2>go to the product page</h2>
        </div>
        <div className={styles.flexType}>
          <img src={sec} alt="" />
          <img src={thi} alt="" />
          <img src={fort} alt="" />
          <img src={fiv} alt="" />
          <img src={six} alt="" />
          <img src={sev} alt="" />
          <img src={eig} alt="" />
          <img src={nin} alt="" />
          <img src={ten} alt="" />
          <img src={ele} alt="" />
          <img src={twe} alt="" />
          <img src={first} alt="" />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Home;
