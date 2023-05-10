import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homescreen from "./Components/Homescreen/Homescreen";
import Footer from "./Components/Footer/Footer";
import PetsPage from "./Components/PetsPage/PetsPage";
import RegistrationForm from "./Components/Registration/RegistrationForm";
import LoginForm from "./Components/Login/LoginForm";
import ProfilePage from "./Components/Profile/ProfilePage";
import { AuthProvider } from "./Contexts/AuthContext";

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/pets" element={<PetsPage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
