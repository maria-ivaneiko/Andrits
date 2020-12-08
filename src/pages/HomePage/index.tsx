import React from 'react';
//
import SectionHero from './SectionHero';
import SectionProducts from './SectionProducts';
import SectionContacts from './SectionContacts';
type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <div>
      <SectionHero />
      <SectionProducts />
      <SectionContacts />
    </div>
  )
}

export default HomePage;