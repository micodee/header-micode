import React from "react";
import "./../../css/header1.css";
import ESDALOGO from "./assets/logo.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Header1 = () => {
  return (
    <section>
      <div className="circle"></div>
      <header>
        <a href="#">
          <img src={ESDALOGO} alt="logo" className="logo" />
        </a>
        <ul className="navbar">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Course</a>
          </li>
          <li>
            <a href="#">Project Belajar</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="textBox">
          <h2>Taste the Feeling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            officia expedita corrupti soluta molestiae, provident aspernatur
            molestias illo culpa doloremque odio ipsam? Harum, molestiae
            aperiam? Unde cum cupiditate reprehenderit. Repellendus!
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="slider">
          <Swiper
            className="swiper"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide className="swiper-slide">
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <ul className="socials">
        <li>
          <a href="#">
            <BsFacebook alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <BsInstagram alt="instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTiktok alt="tiktod" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Header1;
