import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './composition/Card';
import List from './composition/List';

describe('List and Card components', () => {
  
  it('Card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
  
  it('List renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
  
    ReactDOM.unmountComponentAtNode(div);
  })
})