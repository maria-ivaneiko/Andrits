import React from 'react';
//
import SectionHero from './SectionHero';
import SectionProducts from './SectionProducts';
type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <div>
      <SectionHero />
      <SectionProducts />
    </div>
  )
}

export default HomePage;