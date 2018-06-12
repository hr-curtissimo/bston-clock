import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import { UpdateTimeAction } from '../store/actions';
import './App.css';
import BSTClock from './BSTClock/BSTClock';
import ClockMessage from './ClockMessage/ClockMessage';
import logo from './logo.svg';
import TimezoneClock from './TimezoneClock/TimezoneClock';

interface IAppState {
  value?: string;
}

class App extends React.Component<DispatchProp, IAppState> {

  constructor(props: any) {
    super(props);
    this.tick = this.tick.bind(this);
    setInterval(() => this.tick(), 1000);
    this.state = { value: '' };
    this.handleInput = this.handleInput.bind(this);
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
          <Route path="/BST" component={BSTClock}/>
          <Route path="/:tz" component={TimezoneClock}/>
          <Route component={ClockMessage}/>
        </Switch>
      </div>
    );
  }

  private tick() {
    const payload = new Date().getTime();
    const action = new UpdateTimeAction(payload);
    this.props.dispatch({...action});
  }

}

export default connect()(App);
