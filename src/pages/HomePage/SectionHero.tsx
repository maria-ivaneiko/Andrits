import React from 'react';
// Images
import Slide3 from 'assets/images/slide-3.jpg';

const SectionHero = () => {
    return (
        <div className="section-hero">
            <img  src={Slide3} alt=""/>
            <div className="section-hero_contant">
                <p className="section-hero_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet libero hic consequatur consequuntur corporis distinctio necessitatibus aperiam voluptates quisquam.</p>
            </div>
        </div>
    )
}

export default SectionHero;