import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './containers/HomePage/HomePage';
import SignInSignUpPage from './containers/SignInSignUp/SignInSignUpPage';
import ShopPage from './containers/Shop/ShopPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
	state = {
		currentUser : null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// createUserProfileDocument(user);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser : {
							id : snapshot.id,
							...snapshot.data()
						}
					});
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div className='App'>
				<Header currentUser={this.state.currentUser} />
				{this.state.currentUser ? <h1>Welcome back {this.state.currentUser.displayName}</h1> : null}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
