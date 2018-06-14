import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Action, applyMiddleware, compose, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { startTicker } from './store/async-actions';
import { handleClassObjectsForRedux } from './store/middleware';
import { IState, rootReducer } from './store/reducers';
import { initialState } from './store/reducers';

/* tslint:disable */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any;
  }
}
/* tslint:enable */

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      handleClassObjectsForRedux,
      thunk
    ),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || ((s: any) => s)
  )
);

const dispatch = store.dispatch as ThunkDispatch<IState, void, Action>;
dispatch(startTicker());

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
