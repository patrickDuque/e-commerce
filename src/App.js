import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import './App.css';

const HatsPage = () => <h1>Hats Page</h1>;

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' component={HomePage} />
				<Route path='/shop/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
