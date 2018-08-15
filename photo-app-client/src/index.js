import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';

const initialState = {
  movies: [
    { id: 1, title: 'Hello World', subtitle: "goodbye!" },
    { id: 2, title: 'Harry Potter', subtitle: 'The boy' },
    { id: 3, title: 'Hunger the dog', subtitle: 'HE IS HUNGRY' }
  ]
};


ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
