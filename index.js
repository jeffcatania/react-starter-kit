import 'babel-core/polyfill';
import React from 'react';
import App from './components/App';
require("./index.css");

React.render(
  <App />,
  document.getElementById('root')
);
