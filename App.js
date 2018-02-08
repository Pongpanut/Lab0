import React from 'react';
import { AppRegistry } from 'react-native';
import Login from './screen/login';
import HomeScreen from './screen/HomeScreen';

export default class App extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {
    if (this.state.isLoggedIn)
      return <HomeScreen
        onLogoutPress={() => this.setState({ isLoggedIn: false })}
      />;
    else
      return <Login
        onLoginPress={() => this.setState({ isLoggedIn: true })}
      />;
  }
}
AppRegistry.registerComponent(App , () => App );