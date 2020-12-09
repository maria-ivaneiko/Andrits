import React from 'react';
import { Link } from 'react-router-dom';

type IProps = {};

const categories:Array<any> = [
  { id: 1, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1080', size: 6 },
  { id: 2, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1090', size: 6 },
  { id: 3, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1100', size: 4 },
  { id: 4, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1110', size: 4 },
  { id: 5, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1120', size: 4 },
  { id: 6, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1130', size: 12 },
  { id: 7, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1140', size: 3 },
  { id: 8, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1150', size: 3 },
  { id: 9, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1160', size: 3 },
  { id: 10, title: 'Ролокасети', imageUrl: 'https://unsplash.it/1920/1170', size: 3 }
]

const SectionProducts:React.FC<IProps> = () => {
  return (
    <div className="section-categories">
      <h2 className="section-categories_title">Categories</h2>
      <div className="container">
        <div className="row">
          {categories.map((category:any) => (
            <div key={`category-list-item-${category.id}`} className={`col col-${category.size}`}>
              <Link className="card card-category" to="/category">
                <div className="card-img-wrapper">
                  <img className="card-img" src={category.imageUrl} alt=""/>
                </div>
                <div className="card-img-overlay">
                  <h3 className="card-title">{category.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default SectionProducts;