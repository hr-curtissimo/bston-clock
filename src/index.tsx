import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './store/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
