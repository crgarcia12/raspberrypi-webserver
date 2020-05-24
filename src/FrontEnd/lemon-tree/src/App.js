import React from 'react';
import lemonTreeImg from './static/images/lemontree.png';
import './App.css';
import NumericGauge from './NumericGauge.js';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <NumericGauge value="Temp: 18º"/>
        <NumericGauge value="Hum: 20%"/>
        <NumericGauge value="Sun: 40"/>
        <img src={lemonTreeImg} className="LemonTree-logo" alt="logo" />
      </header>
    </div>
    
    </>
  );
}

export default App;
