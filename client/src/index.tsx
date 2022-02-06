import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux"
import { store } from './Redux/store'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
{/* ba9a khasak presist 7ta twsalha ou chfha 3end */}
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
