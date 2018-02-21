import React from 'react';
import { render } from 'react-dom';

const Movie = props => (
	<div>
 		<h3>{props.title}</h3>
  	</div>
);

const MyComponent = () => (

	return(<Movie title:"Black Panther" />)
);

let handle = document.getElementById('app');

render(<MyComponent/>, handle);
