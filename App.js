// // import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

import './App.css';

import React from "react";

import Footer from "./components/footer";
import FooterSection from "./components/FooterSection";
import TestimonialCards from "./components/TestimonialCards";
import PropertiesCards from "./components/PropertiesCards";

function App() {
  return (
    <div className="App">
      
      
      <PropertiesCards/>
      <TestimonialCards/>

      <FooterSection/>
      <Footer/>
     
   
    </div>
  );
}

export default App;