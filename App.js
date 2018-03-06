import React from 'react';
import { AppRegistry } from 'react-native';
import Login from './screen/login';
import HomeScreen from './screen/HomeScreen';
import SignupScreen from './screen/SignupScreen';

export default class App extends React.Component {

  state = {
    isLoggedIn: false,
    isSignup: false
  }

  render() {
    if (this.state.isSignup)
    return <SignupScreen
        onLogoutPress={() => this.setState({ isLoggedIn: false })}
      />;
    else if (this.state.isLoggedIn)
      return <HomeScreen
        onLogoutPress={() => this.setState({ isLoggedIn: false })}
      />;
    else
      return <Login onLoginPress={() => this.setState({ isLoggedIn: true })}
                    // onSignupPress={() => this.setState({ isSignup: true })}
                    onSignupPress={() => this.setState({ isSignup: true })}
             />;

  }
}
AppRegistry.registerComponent(App , () => App );