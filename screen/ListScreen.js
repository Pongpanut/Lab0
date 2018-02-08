import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom, TabBarTop} from 'react-navigation';
import MainNavigator from '../navigator/MainNavigator'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#77c8a7',
    }
  });


export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <View><Text>ListScreen</Text></View>
    }
}
