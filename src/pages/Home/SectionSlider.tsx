import React from 'react';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// Images
import Slide1 from 'assets/images/slide-1.jpg';
import Slide2 from 'assets/images/slide-2.jpg';
import Slide3 from 'assets/images/slide-3.jpg';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

type IProps = {

}

const SectionSlider:React.FC<IProps> = () => {
  return (
    <Swiper
      navigation
      autoplay
      pagination={{ clickable: true }}
      effect="fade"
      loop={true}
    >
      <SwiperSlide>
        <div className="slider-item-image">
          <img src={Slide1} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item-image">
          <img src={Slide2} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item-image">
          <img src={Slide3} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SectionSlider;
