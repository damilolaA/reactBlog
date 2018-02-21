import React from 'react';
import { render } from 'react-dom';

const Movie = props => (
  <div>
    <h3>{props}</h3>
  </div>
);

const MyComponent = () => <Movie title="Black Panther" />;

const handle = document.getElementById('app');

render(<MyComponent />, handle);
