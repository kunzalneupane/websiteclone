import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Details from './Component/Details';
import First from './Component/First';
import Second from './Component/Second';
import Main from './Body/Main';
import Mainsec from './Body/Mainsec';
import Resource from './Resources/Resource';
import Location from './Location/Location';
import Footer from './Component/Footer';
// import Preparation from './Preparation';
// import Universities from './Universities';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Details/>
    <First/>
    <Second/>
    <Main/>
    <Mainsec/>
    <Resource/>
    <Location/>
    <Footer/>
    {/* <Preparation/>
    <Universities/> */}
    

    
  
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
