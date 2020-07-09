import React from 'react';
import FormInput from '../form-input';
import CustomButton from '../custom-button';

import './sign-up.scss';

const SignIn = ({
  displayName,
  email,
  password,
  confirmPassword,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
