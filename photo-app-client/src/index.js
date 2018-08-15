import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleWare } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import './index.css';
import App from './App';
const store = createStore(rootReducer, applyMiddleWare(thunk))

ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
