import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: '', password: '' });
		console.log(this.state);
	};

	handleChange = e => {
		const { name, value } = e.target;
		console.log(name, value);
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h1>I already have account</h1>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						handleChange={this.handleChange}
						value={this.state.email}
						lable='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						handleChange={this.handleChange}
						value={this.state.password}
						lable='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Signin With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
