import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Button,
    AppRegistry
} from 'react-native';

import { TabNavigator, TabBarBottom } from 'react-navigation';
import  MapScreen  from './MapScreen';
import  JobListScreen  from './JobListScreen';



const MainNavigator = TabNavigator({
    joblist: {
        screen: JobListScreen,
    },
    map: { 
        screen: MapScreen },
})


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>CodeSharing App</Text>
            </View>
        )
    }
}
AppRegistry.registerComponent('reactNav', () => HomeScreen);

const styles = StyleSheet.create({
    container: {
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#77c8a7',
    }
  });