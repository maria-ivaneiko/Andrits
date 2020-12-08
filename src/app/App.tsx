import React from 'react';
// Layouts
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
// Routing
import AppRouting from 'app/App.routing';

type IProps = {

}

const App:React.FC<IProps> = () => {
  return (
    <>
      <Header/>
      <AppRouting />
      <Footer />
    </>
  );
}

export default App;
