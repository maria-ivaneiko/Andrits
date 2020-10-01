import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {

}

const Header:React.FC<IProps> = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container | d-flex align-items-center">
          <div className="header-left">
            <Link className="btn" to="https://facebook.com"><i className="fab fa-facebook" aria-hidden="true"></i></Link>
            <Link className="btn" to="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
            <Link className="btn" to="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
          </div>
          <div className="header-right">
            <span style={{ fontSize: '0.875rem' }} className="text-uppercase mr-3">Store location</span>
            <span style={{ fontSize: '0.875rem' }} className="text-uppercase mr-3">UAH</span>
            <span style={{ fontSize: '0.875rem' }} className="text-uppercase ">English</span>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container | d-flex align-items-center">
          <div className="header-left | d-flex flex-column">
            <Link style={{ fontSize: '0.875rem' }} to="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380931234567
            </Link>
            <Link style={{ fontSize: '0.875rem' }} to="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380961234567
            </Link>
            <Link style={{ fontSize: '0.875rem' }} to="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380501234567
            </Link>
          </div>
          <Link to="/" className="header-brand" href="">Sanset</Link>
          <div className="header-right">
            <button className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <button className="btn">
              <i className="fa fa-heart" aria-hidden="true"></i>
            </button>
            <button className="btn">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            <button className="btn">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container | d-flex justify-content-center">
          <nav className="nav nav-header">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/">About Us</Link>
            <Link className="nav-link" to="/">Products</Link>
            <Link className="nav-link" to="/">Safety</Link>
            <Link className="nav-link" to="/">Reviews</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
