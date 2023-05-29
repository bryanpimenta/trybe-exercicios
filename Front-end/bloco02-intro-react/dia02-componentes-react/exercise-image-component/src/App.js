import Image from './Image';
import './App.css';
import React from 'react';
import gatinho from './gatinho.jpg'

class App extends React.Component {
  render() {
    return (
      <Image source={gatinho} alternativeText='Gatinho fofo demais ce ta doidoooooooooo'/>
    );
  }
}

export default App;
