import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import ShopPage from './containers/Shop/ShopPage';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
