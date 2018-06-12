import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import BSTClock from './BSTClock/BSTClock';
import ClockMessage from './ClockMessage/ClockMessage';
import logo from './logo.svg';
import TimezoneClock from './TimezoneClock/TimezoneClock';

interface IAppState {
  time: number;
  value?: string;
}

class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = { time: new Date().getTime() };
    this.tick = this.tick.bind(this);
    setInterval(() => this.tick(), 1000);
    this.handleInput = this.handleInput.bind(this);
    this.generateBSTClock = this.generateBSTClock.bind(this);
    this.generateTimezoneClock = this.generateTimezoneClock.bind(this);
  }

  public handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    this.setState({ value });
  }

  public render() {
    const activeStyle = {
      border: '1px solid cyan'
    };

    const navLinkEasy = {
      activeClassName: 'active',
      activeStyle,
    };
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

        <ul>
          <li>
            <NavLink {...navLinkEasy} to="/BST">BST</NavLink>
          </li>
          <li>
            <Link to="/EDT">EDT</Link>
          </li>
          <li>
            <Link to="/IST">IST</Link>
          </li>
          <li>
            <Link to="/MDT">MDT</Link>
          </li>
        </ul>

        {/* <Route path="/BST" component={BSTClock}/>
            <Route exact={true} path="/" component={ClockMessage}/> */}
        <Switch>
          <Route path="/BST" render={this.generateBSTClock}/>
          <Route path="/:tz" render={this.generateTimezoneClock}/>
          <Route component={ClockMessage}/>
        </Switch>
      </div>
    );
  }

  private generateTimezoneClock(props: any) {
    return <TimezoneClock time={this.state.time} {...props}/>
    /*
    React.createElement(
      "TimezoneClock",
      { time: ..., ...props }
    )
    */
  }

  private generateBSTClock() {
    return <BSTClock time={this.state.time}/>
  }

  private tick() {
    this.setState({ time: new Date().getTime() });
  }

}

export default App;
