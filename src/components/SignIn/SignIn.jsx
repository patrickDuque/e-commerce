import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
	state = {
		email    : '',
		password : ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (err) {
			console.log(err);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign In with your username and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						type='email'
						value={this.state.email}
						name='email'
						label='email'
					/>
					<FormInput
						handleChange={this.handleChange}
						type='password'
						value={this.state.password}
						name='password'
						label='password'
					/>

					<div className='buttons'>
						<CustomButton type='submit'>SIGN IN</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
