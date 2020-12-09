import React from 'react';
//
import SectionHero from './SectionHero';
import SectionCategories from './SectionCategories';
import SectionContacts from './SectionContacts';
type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <div>
      <SectionHero />
      <SectionCategories />
      <SectionContacts />
    </div>
  )
}

export default HomePage;