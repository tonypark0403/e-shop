import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hats from './pages/Hats';

import './App.css';

function App() {
  return (
    <Switch className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/hats' component={Hats} />
    </Switch>
  );
}

export default App;
