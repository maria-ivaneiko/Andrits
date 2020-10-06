import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Layouts
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
// Pages
import HomePage from 'pages/Home';

type IProps = {

}

const App:React.FC<IProps> = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
