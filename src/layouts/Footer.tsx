import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {

}

const Footer:React.FC<IProps> = () => {
  const year:number = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col | text-center">
            <Link className="btn" to="https://facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link className="btn" to="https://instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link className="btn" to="https://twitter.com"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
          </div>
          <div className="col | text-center">
            <Link to="/" className="footer-brand" href="">Sanset</Link>
          </div>
          <div className="col | text-center">
            <p>Copyright &copy; {year}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
