import React from 'react';
// 
import SectionSlider from './SectionSlider';
import SectionProducts from './SectionProducts';
import SectionFeedback from './SectionFeedback';
import SectionContacts from './SectionContacts';

type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <>
      <SectionSlider />
      <SectionProducts />
      <SectionFeedback />
      <SectionContacts />
    </>
  )
}

export default HomePage;
