import React from 'react';
import {Link} from 'react-router-dom'; 

const SectionProducts = () => {
    return (
        <div className="section-categories">
            <h2 className="section-categories_title">Categories</h2>
            <div className="container">
                <div className="section-categories__group">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/category" className="card card-categories">
                                <img className="card-img" src="https://unsplash.it/1920/1080" alt=""/>
                                <div className="card-img-overlay">
                                    <h3 className="card-title">Ролокасети</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionProducts;