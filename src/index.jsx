import 'babel-core/polyfill';
import React from 'react';
import App from './components/App';
require("./index.css");
require("./index.html");

React.render(
  <App />,
  document.getElementById('root')
);
