import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Pages
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';
import Admin from '../admin';

type IProps = {}

const AppRouting:React.FC<IProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/admin" component={Admin} />
    </Switch>
  )
}

export default AppRouting;
