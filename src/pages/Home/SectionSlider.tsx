import React from 'react';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
// Images
import Slide1 from 'assets/images/slide-1.jpg';
import Slide2 from 'assets/images/slide-2.jpg';
import Slide3 from 'assets/images/slide-3.jpg';

SwiperCore.use([Navigation, EffectFade, Autoplay]);

type IProps = {

}

const SectionSlider:React.FC<IProps> = () => {
  return (
    <Swiper
      className="slider slider-home"
      navigation
      autoplay
      effect="fade"
      loop={true}
    >
      <SwiperSlide>
        <div className="slider-item-wrapper">
          <img className="slider-item-image" src={Slide1} alt="" />
          <div className="slider-item-content">
            <h3 className="_title">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorum adipisci ea recusandae sapiente sed perspiciatis dolorem quibusdam maxime ipsam.</p>
            <button className="btn btn-primary" type="button">Read more</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item-wrapper">
          <img className="slider-item-image" src={Slide2} alt="" />
          <div className="slider-item-content">
            <h3 className="_title">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam numquam obcaecati eum, nemo veritatis debitis fugiat deserunt quidem sequi velit temporibus sit ut labore ipsa odio et ullam at. Totam necessitatibus molestiae delectus accusamus repellat? Accusantium dolore deserunt nulla facere.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item-wrapper">
        <img className="slider-item-image" src={Slide3} alt="" />
          <div className="slider-item-content">
            <h3 className="_title">Lorem ipsum dolor sit amet consectetur</h3>
            <p className="_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quo fuga? Cum ex officia temporibus vel, necessitatibus voluptas eveniet aut nostrum magnam et libero ipsum voluptatem recusandae repellendus esse dolore minima suscipit. Nobis eaque aspernatur dolor ab a pariatur. Perspiciatis minima earum consequatur nobis rerum sed est minus. Ipsam quaerat sequi ut nobis aut asperiores ad commodi perspiciatis autem error!</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SectionSlider;
