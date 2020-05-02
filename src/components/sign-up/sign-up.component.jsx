import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleSubmit = async e => {
		e.preventDefault();
		const { email, password, confirmPassword, displayName } = this.state;

		if (password !== confirmPassword) return alert("Password doesn't match");

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log('error while sign up', error.message);
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={this.state.displayName}
						onChange={this.handleChange}
					/>
					<FormInput
						type='email'
						name='email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<FormInput
						type='password'
						name='password'
						vlaue={this.state.password}
						onChange={this.handleChange}
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={this.state.confirmPassword}
						onChange={this.handleChange}
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default Signup;
