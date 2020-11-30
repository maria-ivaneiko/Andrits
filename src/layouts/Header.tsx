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
            <a className="btn" href="https://facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a className="btn" href="https://instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a className="btn" href="https://twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div className="header-right">
            <a className="ml-3" style={{ fontSize: '0.875rem' }} href="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380931234567
            </a>
            <a className="ml-3" style={{ fontSize: '0.875rem' }} href="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380961234567
            </a>
            <a className="ml-3" style={{ fontSize: '0.875rem' }} href="tel:+380931234567">
              <i className="fa fa-phone-alt mr-2" arian-hidden="true"></i>+380501234567
            </a>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container | d-flex align-items-center justify-content-between">
          <Link to="/" className="header-brand" href="">Sanset</Link>
          <div className="spacer"></div>
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
