import React from 'react';
import Products from '../../products.json';

const SectionProducts = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row row-8 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {Products.map(product => (
            <div className="col mb-3">
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary btn-block">Add to cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionProducts;
