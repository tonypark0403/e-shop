import React, { Component } from 'react';
import SignIn from './sign-in.presenter';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SignIn
        user={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        signInWithGoogle={signInWithGoogle}
      />
    );
  }
}

export default SignInContainer;
