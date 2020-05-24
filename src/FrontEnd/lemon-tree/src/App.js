import React from 'react';
import lemonTreeImg from './static/images/lemontree.png';
import './App.css';
import NumericGauge from './NumericGauge.js';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={lemonTreeImg} className="LemonTree-logo" alt="logo" />
      </header>
    </div>
    <NumericGauge time="morning"/>
    </>
  );
}

export default App;
