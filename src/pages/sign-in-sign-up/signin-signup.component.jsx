import React from 'react';
import './signin-signup.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';
const SignInAndSignUpPage = () => (
	<div className='signin-and-signup'>
		<SignIn />
		<Signup />
	</div>
);

export default SignInAndSignUpPage;
