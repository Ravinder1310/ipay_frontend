import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './style.css';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';

const Slider2 = () => {


    return (
        <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
        // pagination={true}
        modules={[Autoplay,EffectCube]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/mobile_recharge.png"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/dth_bill.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/electric_bill.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/gas_cylinder.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/gas_line.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/loan_emi.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/water_bill.png" />
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider2;
