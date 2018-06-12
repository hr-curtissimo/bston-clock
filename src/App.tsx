import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './App.css';
import Clock from './Clock/Clock';

import logo from './logo.svg';

interface IAppState {
  time: number;
  value?: string;
}


class App extends React.Component<{}, IAppState> {
  private timezones: Array<{ name: string, offset: number }>;

  constructor(props: any) {
    super(props);
    this.state = { time: new Date().getTime() };
    this.tick = this.tick.bind(this);
    this.timezones = [
      { name: 'EDT', offset: 240 },
      { name: 'BST', offset: -60 },
      { name: 'IST', offset: -330 },
    ];
    setInterval(() => this.tick(), 1000);
    this.handleInput = this.handleInput.bind(this);
  }

  public handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState({ value });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          That bow tie looks great!
        </p>
        <p>
          <FontAwesomeIcon icon={faCoffee}/>
          <input onChange={this.handleInput}/>
        </p>
        <p>You have typed: {this.state.value}</p>
        {this.timezones.map(tz => <div key={tz.name}>
            <Clock time={this.state.time}
                   timezone={tz}/>
          </div>)}
      </div>
    );
  }

  private tick() {
    this.setState({ time: new Date().getTime() });
  }

}

export default App;
