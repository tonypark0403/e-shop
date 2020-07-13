import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Shop from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot, snapShot.id, snapShot.data());
          // this.setState({
          //   currentUser: user,
          // });
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              //callback is like a promise~, after changing state
              // console.log('callback state: ', this.state);
            }
          );

          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
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
