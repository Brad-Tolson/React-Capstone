import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homescreen from './Components/Homescreen/Homescreen';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homescreen />
      <Footer />
    </div>
  );
}

export default App;