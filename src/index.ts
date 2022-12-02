import ReactDOM from 'react-dom/client';
import React from 'react';

import { App } from './app';

const domContainer = document.querySelector('#react-container');

if (domContainer) {
  const root = ReactDOM.createRoot(domContainer);

  root.render(React.createElement(App));
}
