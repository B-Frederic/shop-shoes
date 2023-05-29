// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import Store from './redux/Store';
// Application
import App from './App.jsx';
// Style
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
