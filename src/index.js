import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name="Priya Chowdhury";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

ReactDOM.render(
  <div className="clock">
  <h1>My name is {name}</h1>
  <h2>Today's date is {currDate}</h2>
  <h3>Current time is {currTime}</h3>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

