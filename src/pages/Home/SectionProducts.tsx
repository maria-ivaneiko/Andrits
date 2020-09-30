import React from 'react';
import Products from '../../products.json';

const SectionProducts = () => {
  return (
    <div>
      <h1>Products</h1>
      <div className="container-fluid">
        <div className="row row-8 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {Products.map(product => (
            <div key={product.id} className="col | d-flex mb-3">
              <div className="card">
                {(product.new || product.off) ?
                  <div className="card-labels">
                    {product.new ? <span className="card-labels-item new | bg-danger">New</span> : null}
                    {product.off ? <span className="card-labels-item off | bg-info">{product.off} Off</span> : null}
                  </div>
                : null}
                <img src={product.imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                  <h6 className="card-title | mb-0">{product.title}</h6>
                </div>
                <div className="card-footer | d-flex align-items-center">
                  <span className="card-price">${product.price}</span>
                  {product.oldPrice ? (
                    <span className="card-old-price | ml-2">${product.oldPrice}</span>
                  ) : null}
                  <span className="spacer"></span>
                  <div className="card-button">
                    <button
                      className="btn btn-outline-primary btn-icon mr-2"
                      type="button"
                      onClick={() => null}
                    ><i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                    <button
                      className="btn btn-outline-dark btn-icon"
                      type="button"
                      onClick={() => null}
                    ><i className="fa fa-heart" aria-hidden="true"></i></button>
                  </div>
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
