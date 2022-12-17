import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/common/NavBar";
import Footer from "./component/common/Footer";
import HomeListing from "./component/homeListing/HomeListing";
import HomePage from "./component/homePage/HomePage";
import Login from "./component/common/Login";
import Signup from "./component/common/Signup";
import OwnerHomePage from "./component/ownerPage/OwnerHomePage";
import OwnerSignUp from "./component/ownerPage/OwnerSignUp";
import PropertyListing from "./component/ownerPage/PropertyListing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home_listing" element={<HomeListing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/ownerhomepage" element={<OwnerHomePage />} />
        <Route exact path="/ownersignup" element={<OwnerSignUp />} />
        <Route exact path="/property_listing" element={<PropertyListing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
