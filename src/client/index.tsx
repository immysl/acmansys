import React from 'react';
import {render} from 'react-dom';
import App from '../components/App';

const appNode: any = document.getElementById('app');
const hmr: any = module;

if (appNode) {
  render(<App />, appNode);
}

if (hmr.hot) {
  hmr.hot.accept();
}
