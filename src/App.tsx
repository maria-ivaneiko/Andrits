import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layouts
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
// Pages
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';

type IProps = {

}

const App:React.FC<IProps> = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category" component={CategoryPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
