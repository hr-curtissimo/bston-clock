import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { handleClassObjectsForRedux } from './store/middleware';
import { rootReducer } from './store/reducers';
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
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(handleClassObjectsForRedux),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
