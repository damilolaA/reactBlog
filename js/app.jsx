import React from 'react';
import { render } from 'react-dom';

const Movie = props => {
  return <h3 props.title/>
};

const MyComponent = () => {

	return(<Movie {title:"Black Panther"}/>)
};

let handle = document.getElementById('app');

ReactDOM.render(<MyComponent/>, handle);
