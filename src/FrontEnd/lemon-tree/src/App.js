import React from 'react';
import {HubConnectionBuilder, JsonHubProtocol, LogLevel} from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import './App.css';
import NumericGauge from './NumericGauge.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.connectionHub = "https://localhost:5001/chat"
    this.accessToken = "QZnSDXXKz6SaysBp/CvL+aqdaxn6Lp8AuhzO0OGZ9fI=";
 
    this.state = {
      temperature: 18,
      humidity: 21,
      sun: 37,
    };

    this.connection = null;
    this.onNotifReceived = this.onNotifReceived.bind(this);
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

  componentDidMount () {
    const transport = signalR.HttpTransportType.WebSockets;

    const options = {
      transport,
      logMessageContent: true,
      logger: signalR.LogLevel.Trace,
      accessTokenFactory: () => this.accessToken,
      skipNegotiation: true,
    };

    // create the connection instance
    this.connection = new HubConnectionBuilder()
      .withUrl(this.connectionHub, options)
      .withAutomaticReconnect()
      .withHubProtocol(new JsonHubProtocol())
      .configureLogging(LogLevel.Trace)
      .build();

    this.connection.on('DatabaseOperation', this.onNotifReceived);
    this.connection.on('DownloadSession', this.onNotifReceived);
    this.connection.on('UploadSession', this.onNotifReceived);
    this.connection.on('broadcastMessage', this.onNotifReceived);

    this.connection.start()
      .then(() => console.info('SignalR Connected'))
      .catch(err => console.error('SignalR Connection Error: ', err));
  }

  componentWillUnmount () {
    this.connection.stop();
  }

  onNotifReceived (res) {
    console.info('Yayyyyy, I just received a notification!!!', res);
    this.state.humidity = res;
  }
}

export default App;
