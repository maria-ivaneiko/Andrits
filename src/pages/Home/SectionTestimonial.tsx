import React from 'react';

const TESTIMONIALS:Array<any> = [
  {
    id: 1,
    author: 'Sean Parker',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere vel commodi esse porro sequi maiores. Aut dolorem quam nostrum.'
  },
  {
    id: 2,
    author: 'Lora Tylor',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, veniam.'
  },
  {
    id: 3,
    author: 'Mike Novatski',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque id quaerat voluptatibus unde perferendis perspiciatis.'
   }
]

const SectionTestimonial = () => {
  return (
    <div className="section section-testimonial">
      <h2 className="section-title">Testimonials</h2>
      <div className="container">
        <div className="row row-32 row-cols-1 row-cols-lg-3">
          {TESTIMONIALS.map(testimonial => (
            <div key={`testimonial-item-${testimonial.id}`} className="col | d-flex">
              <div className="card card-testimonial">
                <div className="card-body">
                  <span className="card-icon">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                  <p className="card-description">{testimonial.description}</p>
                </div>
                <div className="card-footer">
                  <img className="card-avatar" src={testimonial.avatar} alt="" />
                  <h6 className="card-title">{testimonial.author}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionTestimonial;
