import React from 'react';
import './App.css';
import NumericGauge from './NumericGauge.js';

class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      temperature: 18,
      humidity: 21,
      sun: 37,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NumericGauge value={`Temp: ${this.state.temperature}º`}/>
          <NumericGauge value={`Hum: ${this.state.humidity}%`}/>
          <NumericGauge value={`Sun: ${this.state.sun}`}/>
          <img src={process.env.PUBLIC_URL + '/lemontree.png'} className="LemonTree-logo" alt="logo" />
        </header>
      </div>
    );
  };
}

export default App;
