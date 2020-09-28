import React from 'react';
// Components
import { ButtonScale } from 'components/Buttons';

type IProps = {

}

const HomePage:React.FC<IProps> = () => {
  return (
    <div className="p-2">
      <ButtonScale>
        <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i>
        Add to cart
      </ButtonScale>
    </div>
  )
}

export default HomePage;
