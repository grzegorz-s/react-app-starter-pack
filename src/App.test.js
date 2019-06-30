import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const { assign } = window.location;

beforeAll(() => {
  Object.defineProperty(window.location, 'assign', {
    configurable: true
  });
  window.location.assign = jest.fn();
});

afterAll(() => {
  window.location.assign = assign;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
