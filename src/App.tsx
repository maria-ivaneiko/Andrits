import React from 'react';
import { Switch, Route } from 'react-router-dom';
// 
import Header from 'layouts/Header';
import HomePage from 'pages/Home';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/about" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
