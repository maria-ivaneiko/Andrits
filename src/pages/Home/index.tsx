import React from 'react';
// 
import SectionSlider from './SectionSlider';
import SectionWhyUs from './SectionWhyUs';
import SectionProducts from './SectionProducts';
import SectionTestimonial from './SectionTestimonial';
import SectionContacts from './SectionContacts';

type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <div>
      <SectionSlider />
      <SectionWhyUs />
      <SectionProducts />
      <SectionTestimonial />
      <SectionContacts />
    </div>
  )
}

export default HomePage;
