import React from 'react';

const SERVICES:Array<any> = [
  {
    id: 1,
    icon: 'home',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda harum dolor maiores numquam sed in odio doloremque, minima iste amet.'
  },
  {
    id: 2,
    icon: 'home',
    title: 'Cum officiis dolor ex? Nemo!',
    description: 'Maiores dolor doloremque corrupti expedita aut ad eos, quasi molestiae fuga id ullam? Ad repellat voluptatibus quod dolorem iste. Distinctio.'
  },
  {
    id: 3,
    icon: 'home',
    title: 'Reprehenderit iste tempore corporis saepe!',
    description: 'Architecto assumenda tenetur deserunt molestiae reiciendis iusto libero, aut eaque nesciunt itaque cum corporis rem iure sapiente dolores soluta exercitationem.'
  },
  {
    id: 4,
    icon: 'home',
    title: 'Maxime, repellat dolorum. Ullam, voluptate.',
    description: 'Obcaecati quibusdam magni, iusto facilis explicabo animi, minima autem qui provident, corporis dolorem soluta? Neque hic iure beatae quasi debitis!'
  }
]

const SectionWhyUs = () => {
  return (
    <div className="section section-service">
      <h2 className="section-title">Why us?</h2>
      <div className="container">
        <div className="row row-32 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {SERVICES.map(service => (
            <div key={`service-item-${service.id}`} className="col | d-flex">
              <div className="card card-service">
                <div className="card-body">
                  <span className="card-icon">
                    <i className={`fa fa-${service.icon}`} aria-hidden="true"></i>
                  </span>
                  <h4 className="card-title">{service.title}</h4>
                  <p className="card-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWhyUs;
