// // import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

import './App.css';

import React from "react";

// import Footer from "./components/footer";
import FooterSection from "./components/FooterSection";
import TestimonialCards from "./components/TestimonialCards";
import GatewayCards from "./components/GatewayCards";

function App() {
  return (
    <div className="App">
      
      {/* <Footer/> */}
      <GatewayCards/>
      <TestimonialCards/>

      <FooterSection/>
     
     
   
    </div>
  );
}

export default App;