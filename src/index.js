import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar  from './Components/Navbar';
import Hero from './Components/Hero';
import Horse from './Components/Horse';
import Expert from './Components/Expert';
import Button from './Components/Button';
import Review from './Components/Review';
import Hoof from './Components/Hoof';
import Now from './Components/Now';
import Turst from './Components/Turst';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <Hero />
    <Horse />
    <Expert />
    <Button />
    <Review />
    <Hoof />
    <Now />
    <Turst />
    <Footer />

  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
