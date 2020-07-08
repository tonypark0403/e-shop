import React, { useEffect, useState, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Shop from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';

import Header from './components/header';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch className='App'>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </>
    );
  }
}

export default App;
