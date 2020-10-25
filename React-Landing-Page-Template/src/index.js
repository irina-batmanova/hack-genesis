import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from "./App2";
import App3 from "./App3";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/landing1">
            <App />
          </Route>
          <Route path="/landing2">
            <App2 />
          </Route>
          <Route path="/">
            <App3 />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
