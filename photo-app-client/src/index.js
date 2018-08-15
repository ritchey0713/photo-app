import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import './index.css';
import App from './App';


const initialState = {
  movies: [
    { id: 1, title: 'Hello World', subtitle: "goodbye!" },
    { id: 2, title: 'Harry Potter', subtitle: 'The boy' },
    { id: 3, title: 'Hunger the dog', subtitle: 'HE IS HUNGRY' }
  ]
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root'));
registerServiceWorker();
