import React from 'react';
import {Link} from 'react-router-dom'; 

const SectionProducts = () => {
    return (
        <div className="section-categories">
            <h2 className="section-categories_title">Categories</h2>
            <div className="container">
                <div className="section-categories__group">
                    <div className="row">
                        <div className="col col-2">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/650/300" alt=""/>
                                    <div className="categories-img_details"><h3>Ролокасети</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-2">
                        <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/650/300" alt=""/>
                                    <div className="categories-img_details"><h3>Підвіконники</h3></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-3">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/430/300" alt=""/>
                                    <div className="categories-img_details"><h3>Двері</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/430/300" alt=""/>
                                    <div className="categories-img_details"><h3>Вікна</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-3">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/430/300" alt=""/>
                                    <div className="categories-img_details"><h3>Столешні</h3></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/1310/300" alt=""/>
                                    <div className="categories-img_details"><h3>Гаражні Ворота</h3></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-4">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/325/300" alt=""/>
                                    <div className="categories-img_details"><h3>Жалюзі</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/325/300" alt=""/>
                                    <div className="categories-img_details"><h3>Тканинні ролети</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/325/300" alt=""/>
                                    <div className="categories-img_details"><h3>Москітні сітки</h3></div>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-4">
                            <div className="categories-img">
                                <Link to="/category">
                                    <div className="categories-overlay"></div>
                                    <img src="https://unsplash.it/325/300" alt=""/>
                                    <div className="categories-img_details"><h3>Сервіс</h3></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionProducts;