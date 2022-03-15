import React from 'react';
import ReactDOM from 'react-dom';
import './quotes.css';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Quotes from 'D:\\web_dev\\quotes_react\\src\\components\\quotes.jsx'




ReactDOM.render(
  <React.StrictMode>
    <Quotes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
