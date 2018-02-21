import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import { render } from 'react-dom';


const App = () => (
	<BrowserRouter>
		<div className="app">
			<Switch> 
				<Route exact path='/' component={Landing} />
			</Switch>
		</div>
	</BrowserRouter>
);

const handle = document.getElementById('app');

render(<App />, handle);
