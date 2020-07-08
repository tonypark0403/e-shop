import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Shop from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';

import Header from './components/header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </>
  );
}

export default App;
