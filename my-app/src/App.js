import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './component/Contact';
import About from './component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <> 
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
