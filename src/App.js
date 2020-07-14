import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './pages/home';
import Shop from './pages/shop';
import SignInAndSignUp from './pages/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot, snapShot.id, snapShot.data());
          // this.setState({
          //   currentUser: user,
          // });
          // when local
          // this.setState(
          //   {
          //     currentUser: {
          //       id: snapShot.id,
          //       ...snapShot.data(),
          //     },
          //   },
          //   () => {
          //     //callback is like a promise~, after changing state
          //     // console.log('callback state: ', this.state);
          //   }
          // );

          // when redux
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          //
          // console.log(this.state);
        });
      }

      // when local
      // this.setState({ currentUser: userAuth });
      // when redux
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    console.log('currentUser:', currentUser, !!currentUser);
    return (
      <>
        <Header />
        <Switch className='App'>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
// const dispatch = useDispatch();
// dispatch(setCurrentUser(user))
export default connect(mapStateToProps, mapDispatchToProps)(App);
