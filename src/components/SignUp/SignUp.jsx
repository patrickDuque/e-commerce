import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import './SignUp.scss';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
	state = {
		displayName     : '',
		email           : '',
		password        : '',
		confirmPassword : ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName     : '',
				email           : '',
				password        : '',
				confirmPassword : ''
			});
		} catch (err) {
			console.log('error registering new user', err);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name] : value
		});
	};

	render() {
		return (
			<div className='sign-up'>
				<h2>I don't have an account</h2>
				<span>Sign Up with email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						type='text'
						value={this.state.displayName}
						name='displayName'
						label='username'
					/>
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
					<FormInput
						handleChange={this.handleChange}
						type='password'
						value={this.state.confirmPassword}
						name='confirmPassword'
						label='confirmPassword'
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
