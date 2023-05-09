import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homescreen from './Components/Homescreen/Homescreen';
import Footer from './Components/Footer/Footer';
import PetsPage from './Components/PetsPage/PetsPage'
import PetList from './Components/PetList/PetList';
import RegistrationForm from './Components/Registration/RegistrationForm';
import LoginForm from './Components/Login/LoginForm';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
