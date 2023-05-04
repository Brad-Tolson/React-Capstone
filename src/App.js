import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homescreen from './Components/Homescreen/Homescreen';
import Footer from './Components/Footer/Footer';
import PetsPage from './Components/PetsPage/PetsPage'
import PetList from './Components/PetList/PetList';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/pets" element={<PetsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
