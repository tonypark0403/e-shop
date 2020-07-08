import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './sign-in.scss';

const SignIn = ({ user, handleSubmit, handleChange }) => {
  const { email, password } = user;
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <CustomButton type='submit'> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
