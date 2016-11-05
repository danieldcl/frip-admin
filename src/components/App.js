import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

export default class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }

}
